import { useContext, useEffect, useState } from 'react';
import SelectProfileContainer from './Profiles';
import { FireBaseContext } from '../context/firebase';
import { Loading, Header, Card, Player } from '../components';
import * as routes from '../constants/routes';
import { signOut } from 'firebase/auth';
import Fuse from 'fuse.js';
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
  }, [category, slides]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    const options = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      keys: ['data.description', 'data.title', 'data.genre']
    };
    const fuse = new Fuse(slideRow, options);
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRow.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRow(results);
    } else {
      setSlideRow(slides[category]);
    }
  }, [searchTerm]);
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
      <Card.Group>
        {slideRow.map((slideItem, i) => (
          <Card key={`${category}${i}-${slideItem?.title?.toLowerCase()}`}>
            <Card.Title>{slideItem?.title}</Card.Title>
            <Card.Entities>
              {slideItem?.data?.map((item) => (
                <Card.Item item={item} key={item.docId}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    alt={item.slug}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src={'/videos/bunny.mp4'} />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
