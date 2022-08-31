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

Player.Video = function PlayerVideo({ children, ...rest }) {
  return <></>;
};

Player.Button = function PlayerButton({ children, ...rest }) {
  return <></>;
};
export default Player;
