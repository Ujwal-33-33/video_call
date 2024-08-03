// // import React, { useState } from 'react';
// // import './App.css'

// // function NotesApp() {
// //   const [notes, setNotes] = useState([]);
// //   const [note, setNote] = useState('');
// //   const [editingIndex, setEditingIndex] = useState(null);

// //   const addNote = () => {
// //     if (note === ''){
// //       alert('add some note');
// //     }
// //     else if (editingIndex !== null) {
// //       const updatedNotes = notes.slice();
// //       updatedNotes[editingIndex] = note;
// //       setNotes(updatedNotes);
// //       setEditingIndex(null);
// //     } else {
// //       setNotes([...notes, note]);
// //     }
// //     setNote('');
// //   };

// //   const editNote = index => {
// //     setNote(notes[index]);
// //     setEditingIndex(index);
// //   };

// //   const deleteNote = index => {
// //     const updatedNotes = notes.slice();
// //     updatedNotes.splice(index, 1);
// //     setNotes(updatedNotes);
// //   };

// //   return (
// //     <div>
// //       <h1>Notes App</h1>
// //       <div class="input-container">
// //         <input
// //           type="text"
// //           value={note}
// //           onChange={(e) => setNote(e.target.value)}
// //           placeholder="Write a note"
// //           class="styled-input"
// //         />
// //       </div>
// //       <button class="styled-button" onClick={addNote}>{editingIndex !== null ? 'Update Note' : 'Add Note'}</button>
// //       <ul class="container">
// //         {notes.map((note, index) => (
// //           <li class="animated-text" key={index}>
// //             {note}
// //             <button class="styled-button" onClick={() => editNote(index)}>Edit</button>
// //             <button class="styled-button" onClick={() => deleteNote(index)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default NotesApp;

// import React, { useState } from 'react';
// import './App.css';

// function NotesApp() {
//   const [notes, setNotes] = useState([]);
//   const [note, setNote] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);

//   const addNote = () => {
//     if(note === ''){
//       return;
//     }
//     else if (editingIndex !== null) {
//       const updatedNotes = notes.slice();
//       updatedNotes[editingIndex] = note;
//       setNotes(updatedNotes);
//       setEditingIndex(null);
//     } else {
//       setNotes([...notes, note]);
//     }
//     setNote('');
//   };

//   const editNote = index => {
//     setNote(notes[index]);
//     setEditingIndex(index);
//   };

//   const deleteNote = index => {
//     const updatedNotes = notes.slice();
//     updatedNotes.splice(index, 1);
//     setNotes(updatedNotes);
//   };

//   return (
//     <div className="notes-app">
//       <h1 className="title">Notes App</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//           placeholder="Write a note"
//           className="note-input"
//         />
//         <button onClick={addNote} className="add-button">
//           {editingIndex !== null ? 'Update Note' : 'Add Note'}
//         </button>
//       </div>
//       <ul className="notes-list">
//         {notes.map((note, index) => (
//           <li key={index} className="note-item">
//             <span className="note-text">{note}</span>
//             <div className="note-buttons">
//               <button onClick={() => editNote(index)} className="edit-button">Edit</button>
//               <button onClick={() => deleteNote(index)} className="delete-button">Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default NotesApp;

// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { AppBar, Toolbar, Typography, Grid, Button, Container, Box } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';

const socket = io('http://localhost:5000'); // Ensure this matches your server address

function App() {
  const [stream, setStream] = useState(null);
  const [peers, setPeers] = useState({});
  const userVideo = useRef();
  const peersRef = useRef({});

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        userVideo.current.srcObject = stream;
      });

    socket.on('user joined', (userID) => {
      const peer = createPeer(userID, socket.id, stream);
      peersRef.current[userID] = peer;
      setPeers((peers) => ({ ...peers, [userID]: peer }));
    });

    socket.on('offer', handleReceiveCall);

    socket.on('answer', handleAnswer);
  }, []);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.stunprotocol.org',
        },
        {
          urls: 'turn:YOUR_TURN_SERVER_URL',
          username: 'USERNAME',
          credential: 'CREDENTIAL',
        },
      ],
    });

    peer.onicecandidate = (e) => {
      if (e.candidate) {
        socket.emit('ice-candidate', { target: userToSignal, candidate: e.candidate });
      }
    };

    peer.ontrack = (e) => {
      const videoElement = document.createElement('video');
      videoElement.srcObject = e.streams[0];
      videoElement.autoplay = true;
      videoElement.style.width = '200px';
      videoElement.style.margin = '10px';
      document.body.appendChild(videoElement);
    };

    stream.getTracks().forEach((track) => peer.addTrack(track, stream));

    peer.createOffer().then((offer) => {
      peer.setLocalDescription(offer);
      socket.emit('offer', { target: userToSignal, caller: callerID, sdp: offer });
    });

    return peer;
  }

  function handleReceiveCall(incoming) {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.stunprotocol.org',
        },
        {
          urls: 'turn:YOUR_TURN_SERVER_URL',
          username: 'USERNAME',
          credential: 'CREDENTIAL',
        },
      ],
    });

    peer.onicecandidate = (e) => {
      if (e.candidate) {
        socket.emit('ice-candidate', { target: incoming.caller, candidate: e.candidate });
      }
    };

    peer.ontrack = (e) => {
      const videoElement = document.createElement('video');
      videoElement.srcObject = e.streams[0];
      videoElement.autoplay = true;
      videoElement.style.width = '200px';
      videoElement.style.margin = '10px';
      document.body.appendChild(videoElement);
    };

    peer
      .setRemoteDescription(new RTCSessionDescription(incoming.sdp))
      .then(() => {
        stream.getTracks().forEach((track) => peer.addTrack(track, stream));
      })
      .then(() => {
        return peer.createAnswer();
      })
      .then((answer) => {
        peer.setLocalDescription(answer);
        socket.emit('answer', { target: incoming.caller, sdp: answer });
      });

    peersRef.current[incoming.caller] = peer;
    setPeers((peers) => ({ ...peers, [incoming.caller]: peer }));
  }

  function handleAnswer(message) {
    const peer = peersRef.current[message.caller];
    const desc = new RTCSessionDescription(message.sdp);
    peer.setRemoteDescription(desc).catch((e) => console.log(e));
  }

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <VideoCallIcon />
          <Typography variant="h6" style={{ marginLeft: '10px' }}>
            Video Call App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <video ref={userVideo} autoPlay playsInline muted style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button variant="contained" color="primary" fullWidth>
                Start/Join Call
              </Button>
              {/* Participant list or chat can go here */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
