import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import authAxios from '../../utils/auth-axios';

const initialState = {
  loading: false,
  error: null,
  myInternationalColis: [],
};

export const getUserInternationalCoil = createAsyncThunk(
  'colis-list',
  async (thunkAPI) => {
    try {
      const res = await authAxios.get('/colis/userscolis-list');
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

const userInternationalCoilSlice = createSlice({
  name: 'usercolis-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInternationalCoil.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserInternationalCoil.fulfilled, (state, action) => {
        state.loading = false;
        state.myInternationalColis = action.payload;
      })
      .addCase(getUserInternationalCoil.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userInternationalCoilSlice;
