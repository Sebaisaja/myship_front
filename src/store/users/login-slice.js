import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import publicAxios from '../../utils/public-axios';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const userLogin = createAsyncThunk(
  'users/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await publicAxios.post('/users/login', user, {
        headers: {
          Accpet: 'application/json',
        },
      });
      toast.success(`Welcome 👏 ${data.firstName}`);

      return data;
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue('gg');
    }
  }
);

const userLoginSlice = createSlice({
  name: 'logn-user',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { userLogout } = userLoginSlice.actions;

export default userLoginSlice;
