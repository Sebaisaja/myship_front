import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import authAxios from '../../utils/auth-axios';
import { setError } from '../../utils/error';

const initialState = {
  success: false,
  loading: false,
  error: null,
};

export const createReclamation = createAsyncThunk(
  'reclamation',
  async (reclamation, thunkAPI) => {
    try {
      const { data } = await authAxios.post('/reclamation', reclamation);
      toast.success(`Merci pour votre réclamation 👏 `);

      return data;
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue('gg');
    }
  }
);

const createReclamationSlice = createSlice({
  name: 'create-reclamation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReclamation.pending, (state) => {
        state.loading = true;
      })
      .addCase(createReclamation.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createReclamation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default createReclamationSlice;
