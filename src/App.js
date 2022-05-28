import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import ColisPage from './pages/features/colis/colis-page';
import RapidpostePage from './pages/features/rapid-posts/rapidposte-page';
import CourriersPage from './pages/features/courriers/courriers-page';
import ColisTarifs from './pages/features/colis/colis-tarifs';
import CourriersTarifs from './pages/features/courriers/courriers-tarifs';
import RapidPosteTarifs from './pages/features/rapid-posts/rapidpost-tarifs';
import FormAddress from './pages/features/colis/envoi/form-address';
import ColisInfo from './pages/features/colis/colis-info';
import CourrierInterneForm from './pages/features/courriers/envoi/interne-form';
import RapidposteInterneForm from './pages/features/rapid-posts/envoi/interne-form';
import RapidPosteInternationalForm from './pages/features/rapid-posts/envoi/international-form';
import ColisInternationalForm from './pages/features/colis/envoi/international-form';
import CourrierInternationalForm from './pages/features/courriers/envoi/international-form';
import Reclamation from './pages/reclamtion/reclamation';
import LoginPage from './pages/users/login-page';
import RegisterPage from './pages/users/register.page';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './utils/ProtectedRoute';
import Profile from './pages/users/profile';
import ColisNationalPayment from './pages/features/colis/payment/national/payment-national';
import LettresNationalPayment from './pages/features/courriers/payment/national/payment-national';
import RapidPostNationalPayment from './pages/features/rapid-posts/payment/national/national-payment';
import RapidPostInternationalPayment from './pages/features/rapid-posts/payment/international/international-payment';
import UserSending from './pages/users/user-sending';
import NationalPrint from './pages/features/colis/payment/national/print-national';
import DashboardPage from './pages/admin/dashboard/dashboard-page';
import ColisList from './pages/admin/coils/colis-list';
import ReclamationList from './pages/admin/reclamation/reclamation-list';
import ClientList from './pages/admin/clients/client-list';
import ColiNationalPlaceorder from './pages/features/colis/placeorder/national-placeorder';
import ColisInternationalPayment from './pages/features/colis/payment/international/inter-payment';
import ColisInternationalPrint from './pages/features/colis/payment/international/inter-print';
import InternationalLettrePrint from './pages/features/courriers/payment/international-print';
import ColiInternationalCheckout from './pages/features/colis/payment/international/checkout';
import CourrierNationalCheckout from './pages/features/courriers/payment/national/checkout';
import LettresInternationalPayment from './pages/features/courriers/payment/international/payment-inter';
import CourrierInternationalCheckout from './pages/features/courriers/payment/international/checkout';
import RpInternationalCheckout from './pages/features/rapid-posts/payment/international/checkout';
import NationalColisList from './pages/admin/coils/national-list';
import ColisAgentList from './pages/admin/coils/agent-list';
import InternationalCourriersList from './pages/admin/courriers/international-list.';
import NationalCourriersList from './pages/admin/courriers/national-list';
import CourrierAgentList from './pages/admin/courriers/agent-list';
import AgentList from './pages/admin/agents/agent-list';
import AgentUpdate from './pages/admin/agents/agent-update';
import NationalRpPrint from './pages/features/rapid-posts/payment/national/print-national';
import NationalRpList from './pages/admin/rapidposts/national-list';
import InternationalRpList from './pages/admin/rapidposts/international-list';
import InternationalRpPrint from './pages/features/rapid-posts/payment/international/print-inter';
import RpNationalCheckout from './pages/features/rapid-posts/payment/national/checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/colis' element={<ColisInfo />} />
        {/* <Route path='/courriers' element={<CourriersPage />} /> */}
        <Route path='/rapid-poste' element={<RapidpostePage />} />
        <Route path='/colis-tarifs' element={<ColisTarifs />} />
        <Route path='/courriers-tarifs' element={<CourriersTarifs />} />
        <Route path='/rapid-poste-tarifs' element={<RapidPosteTarifs />} />
        <Route
          path='/mes-envoi'
          element={
            <ProtectedRoute>
              <UserSending />
            </ProtectedRoute>
          }
        />
        <Route path='/colis-envoi' element={<ColisPage />} />
        <Route
          path='/coils/form-address'
          element={
            <ProtectedRoute>
              <FormAddress />
            </ProtectedRoute>
          }
        />
        <Route
          path='/coils/international-payment'
          element={
            <ProtectedRoute>
              <ColisInternationalPayment />
            </ProtectedRoute>
          }
        />
        <Route
          path='/coils/national-payment'
          element={
            <ProtectedRoute>
              <ColisNationalPayment />
            </ProtectedRoute>
          }
        />
        <Route
          path='/coils/international-print/:id'
          element={
            <ProtectedRoute>
              <ColisInternationalPrint />
            </ProtectedRoute>
          }
        />
        <Route
          path='/coils/national-print/:id'
          element={
            <ProtectedRoute>
              <NationalPrint />
            </ProtectedRoute>
          }
        />
        <Route
          path='/coils/national-placeorder/:id'
          element={
            <ProtectedRoute>
              <ColiNationalPlaceorder />
            </ProtectedRoute>
          }
        />
        <Route
          path='/coils/international-placeorder/:id'
          element={
            <ProtectedRoute>
              <ColiInternationalCheckout />
            </ProtectedRoute>
          }
        />

        <Route
          path='/lettres/international-print/:id'
          element={
            <ProtectedRoute>
              <InternationalLettrePrint />
            </ProtectedRoute>
          }
        />

        <Route
          path='/courriers/national-checkout/:id'
          element={
            <ProtectedRoute>
              <CourrierNationalCheckout />
            </ProtectedRoute>
          }
        />

        <Route path='/courriers-envoi' element={<CourriersPage />} />

        <Route
          path='/courriers/intern-form'
          element={
            <ProtectedRoute>
              <CourrierInterneForm />
            </ProtectedRoute>
          }
        />
        <Route path='/rapid-poste-envoi' element={<RapidpostePage />} />

        <Route
          path='/rapid-poste/intern-form'
          element={
            <ProtectedRoute>
              <RapidposteInterneForm />
            </ProtectedRoute>
          }
        />
        <Route
          path='/rapid-poste/international-form'
          element={
            <ProtectedRoute>
              <RapidPosteInternationalForm />
            </ProtectedRoute>
          }
        />
        <Route
          path='/colis/international-form'
          element={
            <ProtectedRoute>
              <ColisInternationalForm />
            </ProtectedRoute>
          }
        />

        <Route
          path='/courriers/international-form'
          element={
            <ProtectedRoute>
              <CourrierInternationalForm />
            </ProtectedRoute>
          }
        />
        <Route
          path='/courriers/national-payment'
          element={
            <ProtectedRoute>
              <LettresNationalPayment />
            </ProtectedRoute>
          }
        />
        <Route
          path='/courriers/international-payment'
          element={
            <ProtectedRoute>
              <LettresInternationalPayment />
            </ProtectedRoute>
          }
        />
        <Route
          path='/courriers/international-checkout/:id'
          element={
            <ProtectedRoute>
              <CourrierInternationalCheckout />
            </ProtectedRoute>
          }
        />
        <Route
          path='/rapidPost/national-payment'
          element={
            <ProtectedRoute>
              <RapidPostNationalPayment />
            </ProtectedRoute>
          }
        />
        <Route
          path='/rapidPost/international-payment'
          element={
            <ProtectedRoute>
              <RapidPostInternationalPayment />
            </ProtectedRoute>
          }
        />
        <Route
          path='/rapidPosts/international-checkout/:id'
          element={
            <ProtectedRoute>
              <RpInternationalCheckout />
            </ProtectedRoute>
          }
        />
        <Route
          path='/rapidPosts/national-checkout/:id'
          element={
            <ProtectedRoute>
              <RpNationalCheckout />
            </ProtectedRoute>
          }
        />
        <Route
          path='/rapidPosts/national-print/:id'
          element={
            <ProtectedRoute>
              <NationalRpPrint />
            </ProtectedRoute>
          }
        />
        <Route
          path='/rapidPosts/international-print/:id'
          element={
            <ProtectedRoute>
              <InternationalRpPrint />
            </ProtectedRoute>
          }
        />
        <Route
          path='/reclamtion'
          element={
            <ProtectedRoute>
              <Reclamation />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/dashboard/colis-list' element={<ColisList />} />
        <Route
          path='/dashboard/colis-nationallist'
          element={<NationalColisList />}
        />
        <Route
          path='/dashboard/colis-agent-list'
          element={<ColisAgentList />}
        />

        <Route
          path='/dashboard/courriers-international-list'
          element={<InternationalCourriersList />}
        />
        <Route
          path='/dashboard/courriers-national-list'
          element={<NationalCourriersList />}
        />

        <Route
          path='/dashboard/courriers-agent-list'
          element={<CourrierAgentList />}
        />

        <Route
          path='/dashboard/rapidPosts-national-list'
          element={<NationalRpList />}
        />
        <Route
          path='/dashboard/rapidPosts-international-list'
          element={<InternationalRpList />}
        />

        <Route path='/dashboard/client-list' element={<ClientList />} />
        <Route path='/dashboard/agent-list' element={<AgentList />} />
        <Route path='/dashboard/agent-update/:id' element={<AgentUpdate />} />
        <Route path='/dashboard/reclamation' element={<ReclamationList />} />
      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </Router>
  );
};

export default App;
