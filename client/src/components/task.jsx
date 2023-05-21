import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// import Todo from './todo';

// Assume you have a function to fetch user's todos from the database
const fetchUserTodos = async () => {
  // Fetch user's todos from the database
  // Return an array of todos
  // Example: return await fetch('api/user/todos').then(response => response.json());
  return [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
  ];
};

const Task = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch user's todos when the component mounts
    fetchUserTodos()
      .then((todos) => setTodos(todos))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  return (
    <View>
      {/* Check if the todos array is empty */}
      {todos.length === 0 ? (
        // Display a message if no todos are found
        <Text>No todos found.</Text>
      ) : (
        // If todos are present, map through the array and render Todo components
        todos.map((todo) => <Todo key={todo.id} title={todo.title} />)
      )}
    </View>
  );
};

const Todo = ({ title }) => {
  return (
    <View>
      {/* Display the title of the todo */}
      <Text>{title}</Text>
    </View>
  );
};

export default Task;
