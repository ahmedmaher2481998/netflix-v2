import { useContext, useEffect, useState } from 'react';
import SelectProfileContainer from './Profiles';
import { FireBaseContext } from '../context/firebase';
import { Loading } from '../components';
const BrowseContainer = ({ slids }) => {
  const { auth } = useContext(FireBaseContext);
  const user = auth.currentUser || {};
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('profile', profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    loading ? (
      <Loading src={profile.photoURL} />
    ) : (
      <Loading.ReleaseBody />
    )
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
