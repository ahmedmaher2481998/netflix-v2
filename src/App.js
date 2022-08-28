import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as routes from './constants/routes';
// { Browse, Home, SignIn, SignUp }
import { Browse, Home, SignIn, SignUp } from './pages/';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.Home} element={<Home />} />
        <Route path={routes.Browse} element={<Browse />} />
        <Route path={routes.SignIn} element={<SignIn />} />
        <Route path={routes.SignUp} element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
