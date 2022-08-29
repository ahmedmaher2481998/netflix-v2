import { useContext, useState, useEffect } from 'react';
import { FireBaseContext } from '../context/firebase';
import { onAuthStateChanged } from 'firebase/auth';
const UseAuthUser = () => {
  const { auth } = useContext(FireBaseContext);
  const [userState, setUserState] = useState(JSON.parse(localStorage.getItem('netflix-user')));
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('netflix-user', JSON.stringify(user));
        setUserState(user);
      } else {
        localStorage.removeItem('netflix-user');
      }
    });

    return listener();
  }, []);

  return { user: userState };
};
export default UseAuthUser;
