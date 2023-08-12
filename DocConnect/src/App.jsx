import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound';
import {HOME_PAGE, LOGIN_PAGE, SIGNUP_PAGE} from './common/routes';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>

      <Routes>
        <Route path={HOME_PAGE} element={<Home />}></Route>
        <Route path={LOGIN_PAGE} element={<Login />}></Route>
        <Route path={SIGNUP_PAGE} element={<Signup />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
