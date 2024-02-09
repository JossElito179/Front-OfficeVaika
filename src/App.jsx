import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import ThemeContext from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage';
import Login from './Login';
// import VoirAnnonces from './pages/VoirAnnonces';
// import ChatBox from './components/type/ChatBox';
// import GlobalStyles from './styles/GlobalStyles';
// import VoirChat from './pages/VoirChat';

function App() {
  // const { theme } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<LandingPage />} ></Route>
      </Routes>
    </>
  );
}

export default App;
