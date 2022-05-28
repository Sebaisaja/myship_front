import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import authAxios from '../../utils/auth-axios';
import { setError } from '../../utils/error';

const initialState = {
  lettre: null,
  loading: false,
  error: null,
};

export const getInternationalLettreById = createAsyncThunk(
  'lettres/international/:id',
  async (id, thunkAPI) => {
    try {
      const res = await authAxios.get(`/lettres/international/${id}`);
      if (res.data) {
        toast.success(`👏You Lettre has been created `);
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const letterInternationalDetailSlice = createSlice({
  name: 'lettre-detail',
  initialState,
  reducers: {
    saveLettreInternational: (state, action) => {
      state.lettreIinternational = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInternationalLettreById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInternationalLettreById.fulfilled, (state, action) => {
        state.loading = false;
        state.lettre = action.payload;
      })
      .addCase(getInternationalLettreById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { saveLettreInternational } =
  letterInternationalDetailSlice.actions;

export default letterInternationalDetailSlice;
