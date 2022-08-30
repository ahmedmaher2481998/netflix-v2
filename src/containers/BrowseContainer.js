import { useContext, useEffect, useState } from 'react';
import SelectProfileContainer from './Profiles';
import { FireBaseContext } from '../context/firebase';
import { Loading, Header } from '../components';
import * as routes from '../constants/routes';
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
    <>
      ( loading ? (
      <Loading src={profile.photoURL} />
      ) : (
      <Loading.ReleaseBody />) )
      <Header bg={'joker1'} hideOnSmallScreen>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={routes.Home}
              viewBox="0 0 111 30"
              className="svg-icon svg-icon-netflix-logo"
              aria-hidden="true"
              focusable="false"
              alt="Netflix"
            />
            <Header.TextLink>Films</Header.TextLink>
            <Header.TextLink>Series</Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.DropDown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
              </Header.DropDown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            {`Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the
            streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a
            clown, and the guise he projects in a futile attempt to feel like he's part of the world
            around him.`}
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
