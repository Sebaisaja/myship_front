import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';

const initialState = {
  agents: [],
  loading: false,
  error: null,
};

export const getAgentList = createAsyncThunk(
  'users/agents',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get('/users/agent');

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

const agentListSlice = createSlice({
  name: 'agents-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAgentList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAgentList.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      })
      .addCase(getAgentList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default agentListSlice;
