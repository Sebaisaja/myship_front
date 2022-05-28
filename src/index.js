import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  `pk_test_51KesRYH5cYomygyIVpcJgPzIuCxSTmCZVDP07aX5Rl6fkq3LxILNREpH5VuNCw9NnNNJey4LEnPsLFaTHJaq9AiP00FJmrxaq7`
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Elements>
  </React.StrictMode>
);
