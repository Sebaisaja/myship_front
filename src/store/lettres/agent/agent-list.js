import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import authAxios from '../../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  agentCourriers: [],
};

export const getAllAgentCourriers = createAsyncThunk(
  'lettres/agent-list',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get(`/lettres/agent-list`);
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

const agentCourrierListSlice = createSlice({
  name: 'agentCourriers-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAgentCourriers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllAgentCourriers.fulfilled, (state, action) => {
        state.loading = false;
        state.agentCourriers = action.payload;
      })
      .addCase(getAllAgentCourriers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default agentCourrierListSlice;
