import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewActivity from './components/NewActivity';
import CountryDetail from './Pages/CountryDetail';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Principal from './Pages/Principal';
import { GlobalStyled } from './utils/GlobalStyled';
import ErrorNotification from './warnings/ErrorWarning';

function App() {
  return (
    <>
      <GlobalStyled />
      <Navbar />
      <ErrorNotification />
      <Routes>
        <Route
          path='/'
          element={<Principal />}
        />
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path='/details/:id'
          element={<CountryDetail />}
        />
        <Route
          path='add'
          element={<NewActivity />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>

  );
}

export default App;

