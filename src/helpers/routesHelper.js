import { Navigate, Route, useNavigate } from 'react-router-dom';
import * as routes from '../constants/routes';
const ProtectRouter = ({ user, children, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log('now at location', location);
        if (user) {
          return children;
        } else if (!user) {
          return <Navigate to={routes.SignIn} state={{ from: location }} />;
        } else {
          return null;
        }
      }}
    />
  );
};

const IsUserLoggedIn = ({ loggedInRoute, user, children, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log('hitting location from is logged in ', location);
        if (user) {
          return <Navigate to={loggedInRoute} />;
        } else if (!user) {
          return children;
        } else {
          return null;
        }
      }}
    />
  );
};

export { ProtectRouter, IsUserLoggedIn };
