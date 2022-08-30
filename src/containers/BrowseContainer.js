import { useContext, useEffect, useState } from 'react';
import SelectProfileContainer from './Profiles';
import { FireBaseContext } from '../context/firebase';

const BrowseContainer = () => {
  const { auth } = useContext(FireBaseContext);
  const user = auth.currentUser || {};
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(profile);
    const t = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return clearTimeout(t);
  }, [profile.displayName]);

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
};

export default BrowseContainer;
