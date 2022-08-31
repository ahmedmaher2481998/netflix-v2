import { useState, createContext, useContext, Children } from 'react';
import { Button, Close, Container, Inner, Overlay } from './styles/player';
import { createPortal } from 'react-dom';

const PlayerContext = createContext();

const Player = ({ children, ...rest }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={(showPlayer, setShowPlayer)}>
      <Container {...rest}>{children}</Container>
    </PlayerContext.Provider>
  );
};

Player.Video = function PlayerVideo({ src, ...rest }) {
  const { setShowPlayer, showPlayer } = useContext(PlayerContext);
  return showPlayer
    ? createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...rest}>
          <Inner>
            <video id="netflix-video-player">
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...rest }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return (
    <Button {...rest} onClick={() => setShowPlayer((pre) => !pre)}>
      Play
    </Button>
  );
};
export default Player;
