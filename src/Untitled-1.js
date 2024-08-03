// // // import logo from './logo.svg';
// // // import { useState } from 'react';
// // // import './App.css';

// // // // function App() {
// // // //   const [count,setcount] = useState(0);
// // // //   return (
// // // //     <div>
// // // //       <h1>{count}</h1>
// // // //       <button onClick={() => setcount(count+1)}>increase</button>
// // // //       <button onClick={() => setcount(count-1)}>decrease</button>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;

// // // function Todolist(){
// // //   const [tasks,setTasks] = useState([]);
// // //   const [task,setTask] = useState('');
// // //   const addtask = () => {
// // //     if(task) {
// // //       setTasks([...tasks,{text:task,completed:false}]);
// // //       setTask('');
// // //     }
// // //   };

// // //   const completeTask = index => {
// // //     const newtask = tasks.slice();
// // //     newtask[index].completed = true;
// // //     setTasks(newtask);
// // //   };

// // //   const removetask = index => {
// // //     const newtask = tasks.slice();
// // //     newtask.splice(index,1);
// // //     setTasks(newtask);
// // //   }
// // //   return(
// // //     <div>
// // //       <input type="text" value={task}  onChange={e => setTask(e.target.value)} />
// // //       <button onClick={addtask}>ADD TASK</button>
// // //       <ul>
// // //         {tasks.map((task, index) => (
// // //           <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
// // //             {task.text}
// // //             <button onClick={() => completeTask(index)}>Complete</button>
// // //             <button onClick={() => removetask(index)}>Remove</button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }
// // // export default Todolist;

// // // // import React, { useState } from 'react';

// // // // function TodoList() {
// // // //   const [tasks, setTasks] = useState([]);
// // // //   const [task, setTask] = useState('');

// // // //   const addTask = () => {
// // // //     if (task) {
// // // //       setTasks([...tasks, { text: task, completed: false }]);
// // // //       setTask('');
// // // //     }
// // // //   };

// // //   // const completeTask = index => {
// // //   //   const newTasks = tasks.slice();
// // //   //   newTasks[index].completed = !newTasks[index].completed;
// // //   //   setTasks(newTasks);
// // //   // };

// // // //   const removeTask = index => {
// // // //     const newTasks = tasks.slice();
// // // //     newTasks.splice(index, 1);
// // // //     setTasks(newTasks);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <input
// // // //         type="text"
// // // //         value={task}
// // // //         onChange={e => setTask(e.target.value)}
// // // //       />
// // // //       <button onClick={addTask}>Add Task</button>
// // //       // <ul>
// // //       //   {tasks.map((task, index) => (
// // //       //     <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
// // //       //       {task.text}
// // //       //       <button onClick={() => completeTask(index)}>Complete</button>
// // //       //       <button onClick={() => removeTask(index)}>Remove</button>
// // //       //     </li>
// // //       //   ))}
// // //       // </ul>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default TodoList;

// // // // // // // import { useState } from 'react';

// // // // // // // function Square({ value, onSquareClick }) {
// // // // // // //   return (
// // // // // // //     <button className="square" onClick={onSquareClick}>
// // // // // // //       {value}
// // // // // // //     </button>
// // // // // // //   );
// // // // // // // }

// // // // // // // function Board({ xIsNext, squares, onPlay }) {
// // // // // // //   function handleClick(i) {
// // // // // // //     if (calculateWinner(squares) || squares[i]) {
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     const nextSquares = squares.slice();
// // // // // // //     if (xIsNext) {
// // // // // // //       nextSquares[i] = 'X';
// // // // // // //     } else {
// // // // // // //       nextSquares[i] = 'O';
// // // // // // //     }
// // // // // // //     onPlay(nextSquares);
// // // // // // //   }

// // // // // // //   const winner = calculateWinner(squares);
// // // // // // //   let status;
// // // // // // //   if (winner) {
// // // // // // //     status = 'Winner: ' + winner;
// // // // // // //   } else {
// // // // // // //     status = 'Next player: ' + (xIsNext ? 'X' : 'O');
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <div className="status">{status}</div>
// // // // // // //       <div className="board-row">
// // // // // // //         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
// // // // // // //         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
// // // // // // //         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
// // // // // // //       </div>
// // // // // // //       <div className="board-row">
// // // // // // //         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
// // // // // // //         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
// // // // // // //         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
// // // // // // //       </div>
// // // // // // //       <div className="board-row">
// // // // // // //         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
// // // // // // //         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
// // // // // // //         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default function Game() {
// // // // // // //   const [history, setHistory] = useState([Array(9).fill(null)]);
// // // // // // //   const [currentMove, setCurrentMove] = useState(0);
// // // // // // //   const xIsNext = currentMove % 2 === 0;
// // // // // // //   const currentSquares = history[currentMove];

// // // // // // //   function handlePlay(nextSquares) {
// // // // // // //     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
// // // // // // //     setHistory(nextHistory);
// // // // // // //     setCurrentMove(nextHistory.length - 1);
// // // // // // //   }

// // // // // // //   function jumpTo(nextMove) {
// // // // // // //     setCurrentMove(nextMove);
// // // // // // //   }

// // // // // // //   const moves = history.map((squares, move) => {
// // // // // // //     let description;
// // // // // // //     if (move > 0) {
// // // // // // //       description = 'Go to move #' + move;
// // // // // // //     } else {
// // // // // // //       description = 'Go to game start';
// // // // // // //     }
// // // // // // //     return (
// // // // // // //       <li key={move}>
// // // // // // //         <button onClick={() => jumpTo(move)}>{description}</button>
// // // // // // //       </li>
// // // // // // //     );
// // // // // // //   });

// // // // // // //   return (
// // // // // // //     <div className="game">
// // // // // // //       <div className="game-board">
// // // // // // //         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
// // // // // // //       </div>
// // // // // // //       <div className="game-info">
// // // // // // //         <ol>{moves}</ol>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // function calculateWinner(squares) {
// // // // // // //   const lines = [
// // // // // // //     [0, 1, 2],
// // // // // // //     [3, 4, 5],
// // // // // // //     [6, 7, 8],
// // // // // // //     [0, 3, 6],
// // // // // // //     [1, 4, 7],
// // // // // // //     [2, 5, 8],
// // // // // // //     [0, 4, 8],
// // // // // // //     [2, 4, 6],
// // // // // // //   ];
// // // // // // //   for (let i = 0; i < lines.length; i++) {
// // // // // // //     const [a, b, c] = lines[i];
// // // // // // //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
// // // // // // //       return squares[a];
// // // // // // //     }
// // // // // // //   }
// // // // // // //   return null;
// // // // // // // }

// // // // import React, { useState } from 'react';
// // // // import ReactDom from 'react-dom';
// // // // import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// // // // function ToDoList() {
// // // //   const [tasks, setTasks] = useState([]);
// // // //   const [task, setTask] = useState('');

// // // //   const addTask = () => {
// // // //     if (task) {
// // // //       setTasks([...tasks, { id: `${tasks.length}-${task}`, text: task }]);
// // // //       setTask('');
// // // //     }
// // // //   };

// // // //   const deleteTask = (taskId) => {
// // // //     setTasks(tasks.filter(task => task.id !== taskId));
// // // //   };

// // // //   const onDragEnd = (result) => {
// // // //     if (!result.destination) return;
// // // //     const reorderedTasks = [...tasks];
// // // //     const [removed] = reorderedTasks.splice(result.source.index, 1);
// // // //     reorderedTasks.splice(result.destination.index, 0, removed);
// // // //     setTasks(reorderedTasks);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h1>To-Do List</h1>
// // // //       <input
// // // //         type="text"
// // // //         value={task}
// // // //         onChange={(e) => setTask(e.target.value)}
// // // //         placeholder="Add a task"
// // // //       />
// // // //       <button onClick={addTask}>Add Task</button>
// // // //       <DragDropContext onDragEnd={onDragEnd}>
// // // //         <Droppable droppableId="tasks">
// // // //           {(provided) => (
// // // //             <ul {...provided.droppableProps} ref={provided.innerRef}>
// // // //               {tasks.map((task, index) => (
// // // //                 <Draggable key={task.id} draggableId={task.id} index={index}>
// // // //                   {(provided) => (
// // // //                     <li
// // // //                       {...provided.draggableProps}
// // // //                       {...provided.dragHandleProps}
// // // //                       ref={provided.innerRef}
// // // //                     >
// // // //                       {task.text}
// // // //                       <button onClick={() => deleteTask(task.id)}>Delete</button>
// // // //                     </li>
// // // //                   )}
// // // //                 </Draggable>
// // // //               ))}
// // // //               {provided.placeholder}
// // // //             </ul>
// // // //           )}
// // // //         </Droppable>
// // // //       </DragDropContext>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default ToDoList;

// // import React, { useState, useEffect } from 'react';

// // function WeatherApp() {
// //   const [city, setCity] = useState('');
// //   const [weather, setWeather] = useState(null);

// //   useEffect(() => {
// //     if (city) {
// //       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
// //         .then(response => response.json())
// //         .then(data => setWeather(data));
// //     }
// //   }, [city]);

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         value={city}
// //         onChange={e => setCity(e.target.value)}
// //         placeholder="Enter city"
// //       />
// //       {weather && (
// //         <div>
// //           <h2>{weather.name}</h2>
// //           <p>{Math.round(weather.main.temp - 273.15)}°C</p>
// //           <p>{weather.weather[0].description}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default WeatherApp;

// // import React, { useState } from 'react';

// // const images = [
// //   'https://via.placeholder.com/150',
// //   'https://via.placeholder.com/150',
// //   'https://via.placeholder.com/150',
// //   'https://via.placeholder.com/150',
// //   'https://via.placeholder.com/150',
// // ];

// // function ImageGallery() {
// //   const [selectedImage, setSelectedImage] = useState(null);

// //   return (
// //     <div>
// //       <h1>Image Gallery</h1>
// //       {selectedImage && (
// //         <div>
// //           <img src={selectedImage} alt="Selected" style={{ width: '500px', height: '500px' }} />
// //           <button onClick={() => setSelectedImage(null)}>Close</button>
// //         </div>
// //       )}
// //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
// //         {images.map((image, index) => (
// //           <img
// //             key={index}
// //             src={image}
// //             alt={`Gallery ${index}`}
// //             style={{ width: '150px', height: '150px' }}
// //             onClick={() => setSelectedImage(image)}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ImageGallery;

// import React, { useState } from 'react';

// const questions = [
//   {
//     question: 'What is the capital of France?',
//     options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
//     answer: 'Paris'
//   },
//   {
//     question: 'Who wrote "To Kill a Mockingbird"?',
//     options: ['Harper Lee', 'Jane Austen', 'Mark Twain', 'J.K. Rowling'],
//     answer: 'Harper Lee'
//   },
//   {
//     question: 'What is the smallest planet in our solar system?',
//     options: ['Earth', 'Mars', 'Mercury', 'Venus'],
//     answer: 'Mercury'
//   }
// ];

// function QuizApp() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState('');
//   const [score, setScore] = useState(0);

//   const handleSubmit = () => {
//     if (selectedAnswer === questions[currentQuestion].answer) {
//       setScore(score + 1);
//     }
//     setSelectedAnswer('');
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   return (
//     <div>
//       <h1>Quiz App</h1>
//       {currentQuestion < questions.length ? (
//         <div>
//           <h2>{questions[currentQuestion].question}</h2>
//           <ul>
//             {questions[currentQuestion].options.map((option, index) => (
//               <li key={index}>
//                 <label>
//                   <input
//                     type="radio"
//                     value={option}
//                     checked={selectedAnswer === option}
//                     onChange={(e) => setSelectedAnswer(e.target.value)}
//                   />
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ul>
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       ) : (
//         <h2>Your score: {score}/{questions.length}</h2>
//       )}
//     </div>
//   );
// }

// export default QuizApp;
