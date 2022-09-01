import { render, fireEvent, queryByTestId, getByText, getByTestId } from '@testing-library/react';
import { Player } from '../../components';

describe('<Player/>', () => {
  it('renders Player with bunny video', () => {
    const { container, queryByTestId, getByText } = render(
      <Player>
        <Player.Button />
        <Player.Video src="/videos/bunny.mp4" />
      </Player>
    );
    expect(queryByTestId('player')).toBeFalsy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeTruthy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeFalsy();
    expect(container.fireEvent).toMatchSnapshot();
  });
});
