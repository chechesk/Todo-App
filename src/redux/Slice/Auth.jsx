import { createSlice } from '@reduxjs/toolkit';
import { signIn, signInWithGitHub, signOut, signUp } from '../Reducer/Auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, loading: false, error: null },
  reducers: {
    signOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
          .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signInWithGitHub.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithGitHub.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInWithGitHub.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;}
      );
  },
});


export default authSlice.reducer;