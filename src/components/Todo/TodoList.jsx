import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, readTodos, updateTodo } from '../../redux/Reducer/todo';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todo);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  useEffect(() => {
    dispatch(readTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodoTitle.trim() === '') return;
    const newTodo = {
      tarea: newTodoTitle,
      fecha: new Date().toISOString(),
      activo: true,
    };
    dispatch(addTodo(newTodo));
    setNewTodoTitle('');
  };

  const handleUpdateTodo = (id) => {
    const updates = { activo: false }; // Assuming 'activo' is like 'completed'
    dispatch(updateTodo({ id, updates }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      <div className="mb-6">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Enter new task"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          className="mt-2 w-full px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <span className={`text-lg ${todo.activo ? '' : 'line-through text-gray-500'}`}>
              {todo.tarea}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleUpdateTodo(todo.id)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Complete
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;