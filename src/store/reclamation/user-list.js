import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import authAxios from '../../utils/auth-axios';
import { setError } from '../../utils/error';

const initialState = {
  reclamations: [],
  loading: false,
  error: null,
};

export const getUserReclamation = createAsyncThunk(
  'reclamation/myreclamation',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get('/reclamation/myreclamation');
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

const getUserReclamationSlice = createSlice({
  name: 'muserreclamation-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserReclamation.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserReclamation.fulfilled, (state, action) => {
        state.loading = false;
        state.reclamations = action.payload;
      })
      .addCase(getUserReclamation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getUserReclamationSlice;
