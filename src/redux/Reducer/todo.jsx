import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase';

export const readTodos = createAsyncThunk('todo/readTodos', async () => {
  const { data: todos, error } = await supabase
    .from('tareas')
    .select('*');
  if (error) throw error;
  return todos;
});

export const addTodo = createAsyncThunk('todo/addTodo', async (todo) => {
  const { data, error } = await supabase
    .from('tareas')
    .insert([todo])
    .select();
  if (error) throw error;
  return data[0];
});

export const updateTodo = createAsyncThunk('todo/updateTodo', async ({ id, updates }) => {
  const { data, error } = await supabase
    .from('tareas')
    .update(updates)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data[0];
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id) => {
  const { error } = await supabase
    .from('tareas')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return id;
});