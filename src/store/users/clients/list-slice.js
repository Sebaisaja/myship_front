import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';

const initialState = {
  clients: [],
  loading: false,
  error: null,
};

export const getClientList = createAsyncThunk(
  'users/clients',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get('/users/clients');

      if (res.data) {
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const clientListSlice = createSlice({
  name: 'clients-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClientList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClientList.fulfilled, (state, action) => {
        state.loading = false;
        state.clients = action.payload;
      })
      .addCase(getClientList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clientListSlice;
