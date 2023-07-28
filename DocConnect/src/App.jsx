import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
