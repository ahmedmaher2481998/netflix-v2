import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import * as routes from './constants/routes';
import { useAuthUser } from './hooks';
import { Browse, Home, SignIn, SignUp } from './pages/';

function App() {
  const { user } = useAuthUser();
  // const user = JSON.parse(localStorage.getItem('netflix-user')) || null;
  useEffect(() => {
    const country = localStorage.getItem('country') || 'egypt';
    const title = `Netflix ${country} - Watch TV Shows Online, Watch Movies Online`;
    document.title = title;
  }, []);
  return (
    <Router>
      <Routes>
        <Route path={routes.Home} element={user ? <Navigate to={routes.Browse} /> : <Home />} />
        <Route path={routes.Browse} element={user ? <Browse /> : <Navigate to={routes.SignIn} />} />
        <Route path={routes.SignIn} element={user ? <Navigate to={routes.Browse} /> : <SignIn />} />
        <Route path={routes.SignUp} element={user ? <Navigate to={routes.Browse} /> : <SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
