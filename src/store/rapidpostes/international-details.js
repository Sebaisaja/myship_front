import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import authAxios from '../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  internationalRapidPost: null,
};

export const getInternationalRpById = createAsyncThunk(
  'rapidPosts/international/:id',
  async (id, thunkAPI) => {
    try {
      const res = await authAxios.get(`/rapidPosts/international/${id}`);
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

const internationalRpByIdSlice = createSlice({
  name: 'international-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInternationalRpById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInternationalRpById.fulfilled, (state, action) => {
        state.loading = false;
        state.internationalRapidPost = action.payload;
      })
      .addCase(getInternationalRpById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default internationalRpByIdSlice;
