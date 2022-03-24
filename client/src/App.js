import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import NewActivity from './components/NewActivity';
import Searchbar from './components/Searchbar';
import CountryDetail from './Pages/CountryDetail';
import NotFound from './Pages/NotFound';
import Principal from './Pages/Principal';
import { GlobalStyled } from './utils/GlobalStyled';

function App() {
  return (
    <>
      <GlobalStyled />
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Principal />}
        />
        <Route
          path='/home'
          element={<Cards />}
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

