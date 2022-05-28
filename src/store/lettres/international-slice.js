import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import authAxios from '../../utils/auth-axios';
import { setError } from '../../utils/error';

const initialState = {
  lettreIinternational: null,
  success: false,
  loading: false,
  error: null,
};

export const createInternationalLettre = createAsyncThunk(
  'lettres/international',
  async (lettres, thunkAPI) => {
    try {
      const res = await authAxios.post('/lettres/international', lettres, {
        headers: {
          Accpet: 'application/json',
        },
      });
      if (res.data) {
        toast.success(`👏You Lettre has been created `);
        document.location.href = `/lettres/international-print/${res.data._id}`;
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const letterInternationalSlice = createSlice({
  name: 'lettres-international',
  initialState,
  reducers: {
    saveLettreInternational: (state, action) => {
      state.lettreIinternational = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInternationalLettre.pending, (state) => {
        state.loading = true;
      })
      .addCase(createInternationalLettre.fulfilled, (state) => {
        state.success = true;
        state.loading = false;
      })
      .addCase(createInternationalLettre.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { saveLettreInternational } = letterInternationalSlice.actions;

export default letterInternationalSlice;
