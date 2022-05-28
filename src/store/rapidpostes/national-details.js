import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import authAxios from '../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  nationalRapidPost: null,
};

export const getNationalRpById = createAsyncThunk(
  'nationalRp/:id',
  async (id, thunkAPI) => {
    try {
      const res = await authAxios.get(`/rapidPosts/national/${id}`);
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

const nationalRpByIdSlice = createSlice({
  name: 'nationalRp-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNationalRpById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNationalRpById.fulfilled, (state, action) => {
        state.loading = false;
        state.nationalRapidPost = action.payload;
      })
      .addCase(getNationalRpById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default nationalRpByIdSlice;
