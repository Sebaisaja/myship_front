import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coilsInterneSlice from './colis/interne-slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import coilsInternationalSlice from './colis/international-slice';
import letterInternationalSlice from './lettres/international-slice';
import { lettreInterneSlice } from './lettres/interne-slice';
import { rapidPostInterneSlice } from './rapidpostes/interne-slice';
import { rapidPostInternationalSlice } from './rapidpostes/international-slice';
import userLoginSlice from './users/login-slice';
import userRegisterSlice from './users/register-slice';
import { authorizationProvider } from '../utils/auth-axios';
import userInternationalCoilSlice from './colis/myinternational-coils';
import nationalCoilByIdSlice from './colis/national-details';
import internationalCoilByIdSlice from './colis/international-details';
import letterInternationalDetailSlice from './lettres/international-detail';
import createReclamationSlice from './reclamation/create-slice';
import getAllReclamationSlice from './reclamation/list-slice';
import clientListSlice from './users/clients/list-slice';
import nationalCourrierByIdSlice from './lettres/national-details';
import nationalRpByIdSlice from './rapidpostes/national-details';
import internationalCoilListdSlice from './colis/admin/international-list';
import nationalCoilListSlice from './colis/admin/national-list';
import agentColiListSlice from './colis/agent/agent-list';
import nationalCourrierListSlice from './lettres/admin/national-list';
import internationalCourrierListdSlice from './lettres/admin/international-list';
import agentCourrierListSlice from './lettres/agent/agent-list';
import userCourriersSlice from './lettres/user-list';
import agentListSlice from './users/agent/list-slice';
import userRapidpostSlice from './rapidpostes/user-list';
import internationalRpByIdSlice from './rapidpostes/international-details';
import nationalRpListSlice from './rapidpostes/admin/national-list';
import internationalRpListdSlice from './rapidpostes/admin/international-list';
import getUserReclamationSlice from './reclamation/user-list';

const reducers = combineReducers({
  //colis
  coilsInterne: coilsInterneSlice.reducer,
  coilsInternational: coilsInternationalSlice.reducer,
  userInternationalCoil: userInternationalCoilSlice.reducer,
  internationalCoilById: internationalCoilByIdSlice.reducer,
  nationalCoilById: nationalCoilByIdSlice.reducer,
  internationalCoilList: internationalCoilListdSlice.reducer,
  nationalCoilList: nationalCoilListSlice.reducer,
  agentColiList: agentColiListSlice.reducer,

  //lettres
  letterInternational: letterInternationalSlice.reducer,
  lettreInterne: lettreInterneSlice.reducer,
  letterInternationalDetail: letterInternationalDetailSlice.reducer,
  nationalCourrierById: nationalCourrierByIdSlice.reducer,
  nationalCourrierList: nationalCourrierListSlice.reducer,
  internationalCourrierList: internationalCourrierListdSlice.reducer,
  agentCourrierList: agentCourrierListSlice.reducer,
  userCourriersList: userCourriersSlice.reducer,

  //rapid post
  rapidPostInterne: rapidPostInterneSlice.reducer,
  rapidPostInternational: rapidPostInternationalSlice.reducer,
  nationalRpById: nationalRpByIdSlice.reducer,
  internationalRpById: internationalRpByIdSlice.reducer,
  userRapidpost: userRapidpostSlice.reducer,
  nationalRpList: nationalRpListSlice.reducer,
  internationalRpList: internationalRpListdSlice.reducer,
  //users
  userLogin: userLoginSlice.reducer,
  userRegister: userRegisterSlice.reducer,

  //reclamation
  createReclamation: createReclamationSlice.reducer,
  getAllReclamation: getAllReclamationSlice.reducer,
  getUserReclamation: getUserReclamationSlice.reducer,
  //clients
  clientList: clientListSlice.reducer,
  //agent
  agentList: agentListSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['rapidPostInterne'],
  // whitelist: ['coilsInterne', 'coilsInternational'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
authorizationProvider(store);
