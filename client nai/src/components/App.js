// import React, { useState, useEffect } from 'react';
// // import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/todos');
//       const data = await response.json();
//       setTodos(data);
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//     }
//   };

//   const addTodo = async () => {
//     try {
//       await fetch('http://localhost:5000/api/todos', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: newTodo }),
//       });
//       setNewTodo('');
//       fetchTodos();
//     } catch (error) {
//       console.error('Error adding todo:', error);
//     }
//   };

//   // ここに console.log を追加
//   console.log('Rendering App component:', todos, newTodo);

//   return (
//     <div  className="bg-blue-500 text-white p-4">
//       <h1>ToDo App</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.text}</li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// src/App.js

import React from 'react';


const App = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      This is a component styled with Tailwind CSS!
    </div>
  );
};

export default App;
