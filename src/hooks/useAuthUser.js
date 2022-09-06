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
        console.log('welcome . Listener is logging you in ....');
        setUserState(user);
      } else {
        localStorage.removeItem('netflix-user');
        console.log('Bye . Listener is logging you Out ....');
      }
    });

    return listener();
  }, []);

  return { user: userState };
};
export default UseAuthUser;
