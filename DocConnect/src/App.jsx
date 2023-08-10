import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
