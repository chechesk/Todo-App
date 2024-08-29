import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, readTodos, updateTodo } from '../Reducer/todo';


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
      todos: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(readTodos.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(readTodos.fulfilled, (state, action) => {
          state.loading = false;
          state.todos = action.payload;
        })
        .addCase(readTodos.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(addTodo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addTodo.fulfilled, (state, action) => {
          state.loading = false;
          state.todos.push(action.payload);
        })
        .addCase(addTodo.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(updateTodo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateTodo.fulfilled, (state, action) => {
          state.loading = false;
          const index = state.todos.findIndex(todo => todo.id === action.payload.id);
          if (index !== -1) {
            state.todos[index] = action.payload;
          }
        })
        .addCase(updateTodo.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(deleteTodo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
          state.loading = false;
          state.todos = state.todos.filter(todo => todo.id !== action.payload);
        })
        .addCase(deleteTodo.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default todoSlice.reducer;