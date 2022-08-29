import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import * as routes from './constants/routes';
// { Browse, Home, SignIn, SignUp }
import { Browse, Home, SignIn, SignUp } from './pages/';

function App() {
  const user = { hi: 'ahmed' };
  // const user = null;
  return (
    <Router>
      <Routes>
        <Route path={routes.Home} element={user ? <Navigate to={routes.Browse} /> : <Home />} />

        <Route path={routes.Browse} element={user ? <Browse /> : <Navigate to={routes.SignIn} />} />

        <Route path={routes.SignIn} element={<SignIn />} />
        <Route path={routes.SignUp} element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
