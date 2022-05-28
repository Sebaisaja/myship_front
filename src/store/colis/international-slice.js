import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import authAxios from '../../utils/auth-axios';

const initialState = {
  colisIinternational: null,
  userColisIinternational: {},
  success: false,
  loading: false,
  error: null,
};

export const createInternationalCoil = createAsyncThunk(
  'coils/international',
  async (coils, thunkAPI) => {
    try {
      const res = await authAxios.post('/colis/international', coils, {
        headers: {
          Accpet: 'application/json',
        },
      });
      if (res.data) {
        toast.success(`👏You Colis has been created `);
        document.location.href = `/coils/international-print/${res.data._id}`;
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const coilsInternationalSlice = createSlice({
  name: 'coils-international',
  initialState,
  reducers: {
    saveColisInternational: (state, action) => {
      state.colisIinternational = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInternationalCoil.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(createInternationalCoil.fulfilled, (state, action) => {
        state.loading = false;
        state.userColisIinternational = action.payload;
        state.success = true;
      })
      .addCase(createInternationalCoil.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { saveColisInternational } = coilsInternationalSlice.actions;
export default coilsInternationalSlice;
