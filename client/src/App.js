import Card from './components/Card';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import NewActivity from './components/NewActivity';
import Searchbar from './components/Searchbar';
import AddCancel from './modals/CancelModal';
import WarningModal from './modals/WarningModal';
import CountryDetail from './Pages/CountryDetail';
import NotFound from './Pages/NotFound';
import Principal from './Pages/Principal';
import { GlobalStyled } from './utils/GlobalStyled';
import ResponseWarning from './warnings/ResponseWarning';

function App() {
  return (
    <>
      <GlobalStyled />
      <Navbar />
      {/* <Searchbar />
      <Cards /> */}
      {/* <CountryDetail /> */}
      {/* <NewActivity /> */}
      {/* <NotFound /> */}
      {/* <ResponseWarning /> */}
      <Principal />
    </>

  );
}

export default App;

