import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import publicAxios from '../../utils/public-axios';

const initialState = {
  success: false,
  loading: false,
  error: null,
};

export const userRegister = createAsyncThunk(
  'users/register',
  async (user, thunkAPI) => {
    try {
      const res = await publicAxios.post('/users/register', user, {
        headers: {
          Accpet: 'application/json',
        },
      });

      return res.data;
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userRegisterSlice = createSlice({
  name: 'register-user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userRegisterSlice;
