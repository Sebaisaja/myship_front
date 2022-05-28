import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import authAxios from '../../utils/auth-axios';
import { setError } from '../../utils/error';

const initialState = {
  colisInterne: null,
  success: false,
  loading: false,
  error: null,
};

export const createNationalCoil = createAsyncThunk(
  'coils/national',
  async (coils, thunkAPI) => {
    try {
      const { data } = await authAxios.post('/colis/national', coils);

      if (data.method === 'agence') {
        document.location.href = `/mes-envoi`;
      }else{
        document.location.href = `/mes-envoi`;
      }
      return data;
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const coilsInterneSlice = createSlice({
  name: 'coils-national',
  initialState,
  reducers: {
    saveColisInterne: (state, action) => {
      state.colisInterne = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNationalCoil.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(createNationalCoil.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createNationalCoil.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { saveColisInterne } = coilsInterneSlice.actions;

export default coilsInterneSlice;
