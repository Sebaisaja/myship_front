import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import authAxios from '../../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  agentColis: [],
};

export const getAllAgentColis = createAsyncThunk(
  'colis/agent-list',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get(`/colis/agent-list`);
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

const agentColiListSlice = createSlice({
  name: 'agentColis-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAgentColis.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllAgentColis.fulfilled, (state, action) => {
        state.loading = false;
        state.agentColis = action.payload;
      })
      .addCase(getAllAgentColis.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default agentColiListSlice;
