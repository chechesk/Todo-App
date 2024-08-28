import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase';

export const signIn = createAsyncThunk(
  'auth/signInWithEmail',
  async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.user;
  }
);
  
  export const signUp = createAsyncThunk(
    'auth/signUp',
    async ({ email, password }, { rejectWithValue }) => {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) return rejectWithValue(error.message);
      return user;
    }
  );
  
  export const signOut = createAsyncThunk('auth/signOut', async () => {
    await supabase.auth.signOut();
  });

  export const signInWithGitHub = createAsyncThunk(
    'auth/signInWithGitHub',
    async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'github' });
      console.log(error);
      if (error) throw error;
      
      return data.user;
    }
  );
  