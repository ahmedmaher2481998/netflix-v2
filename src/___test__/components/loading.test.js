import { render } from '@testing-library/react';
import { Loading } from '../../components';
describe('<Loading/>', () => {
  it('Renders <loading/>', () => {
    const { getByTestId, container, getByAltText } = render(
      <Loading src={`/images/users/4.png`} />
    );

    expect(getByTestId('loading')).toBeTruthy();
    expect(getByAltText('user profile image')).toBeTruthy();
    expect(container.firstChild).toBeTruthy();
  });
  it('checks for the releaseBody', () => {
    const { container } = render(<Loading.ReleaseBody />);
    expect(container.firstChild).toBeTruthy();
  });
});
