import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import authAxios from '../../utils/auth-axios';
import { setError } from '../../utils/error';

const initialState = {
  reclamations: [],
  loading: false,
  error: null,
};

export const getAllReclamation = createAsyncThunk(
  'reclamation',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get('/reclamation');
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

const getAllReclamationSlice = createSlice({
  name: 'reclamation-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllReclamation.pending, (state) => {
        state.reclamations = [];
        state.loading = true;
      })
      .addCase(getAllReclamation.fulfilled, (state, action) => {
        state.loading = false;
        state.reclamations = action.payload;
      })
      .addCase(getAllReclamation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getAllReclamationSlice;
