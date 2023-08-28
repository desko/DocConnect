import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound';
import {
  HOME_PAGE,
  LOGIN_PAGE,
  PRIVACY_POLICY_PAGE,
  FORGOTTEN_PASSWORD_PAGE,
  SIGNUP_PAGE,
  USER_AGREEMENT_PAGE,
  USER_VERIFICATION,
  RESET_PASSWORD_PAGE,
  RESET_PASSWORD_VALIDATION_PAGE,
} from './common/routes';
import {Logged} from './hoc/Logged';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserAgreement from './pages/UserAgreement';
import ForgottenPassword from './pages/ForgottenPassword';
import UserVerification from './pages/UserVerification';
import SystemNotification from './components/SystemNotification/SystemNotification';
import {NotVerified} from './hoc/NotVerified';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordValidation from './pages/ResetPasswordValidation';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <NotVerified>
        <SystemNotification />
      </NotVerified>


      <Routes>
        <Route path={HOME_PAGE} element={<Home />}></Route>
        <Route path={USER_VERIFICATION} element={<UserVerification />}></Route>
        <Route path={LOGIN_PAGE} element={
          <Logged>
            <Login />
          </Logged>
        }></Route>
        <Route path={FORGOTTEN_PASSWORD_PAGE} element={
          <Logged>
            <ForgottenPassword />
          </Logged>
        }></Route>
        <Route path={RESET_PASSWORD_PAGE} element={
          <Logged>
            <ResetPassword />
          </Logged>
        }></Route>
        <Route path={RESET_PASSWORD_VALIDATION_PAGE} element={
          <Logged>
            <ResetPasswordValidation/>
          </Logged>
        }></Route>
        <Route path={SIGNUP_PAGE} element={
          <Logged>
            <Signup />
          </Logged>
        }></Route>
        <Route path={PRIVACY_POLICY_PAGE} element={<PrivacyPolicy />}></Route>
        <Route path={USER_AGREEMENT_PAGE} element={<UserAgreement />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
