import { useContext, useEffect, useState } from 'react';
import SelectProfileContainer from './Profiles';
import { FireBaseContext } from '../context/firebase';
import { Loading, Header } from '../components';
import * as routes from '../constants/routes';
import { signOut } from 'firebase/auth';

const BrowseContainer = ({ slides }) => {
  const { auth } = useContext(FireBaseContext);
  const user = auth.currentUser || {};
  const [profile, setProfile] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('series');
  const [slideRow, setSlideRow] = useState([]);

  useEffect(() => {
    setSlideRow(() => slides[category]);
    console.log(slideRow, category);
  }, [category, slideRow]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
      <Header bg={true} src={'joker1'} hideOnSmallScreen>
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
            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}>
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}>
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink
                    onClick={() => {
                      signOut(auth);
                      setProfile({});
                    }}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the
            streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a
            clown, and the guise he projects in a futile attempt to feel like he&apos;s part of the
            world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
