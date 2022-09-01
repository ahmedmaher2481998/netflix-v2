import { render, fireEvent } from '@testing-library/react';
import SelectProfileContainer from '../../containers/Profiles';

jest.mock('react-router-dom');

describe('<SelectProfileContainer/>', () => {
  it('renders the <SelectProfileContainer/>', () => {
    const user = { displayName: 'ahmed maher', photoURL: 'profile.png' };
    const setProfile = jest.fn();
    const { getByTestId } = render(<SelectProfileContainer user={user} setProfile={setProfile} />);

    fireEvent.click(getByTestId('profile-user'));
    expect(setProfile).toHaveBeenCalled();
  });
});
