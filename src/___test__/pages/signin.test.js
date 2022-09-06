import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SignIn } from '../../pages';
import { FireBaseContext } from '../../context/firebase';
import { act } from 'react-dom/test-utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => {}
}));

const auth = jest.fn(() => ({}));
const app = jest.fn(() => ({}));
const db = jest.fn(() => ({}));
describe('<SignIn/>', () => {
  it('renders the sign in page', async () => {
    const { getByTestId, queryByTestId, getByPlaceholderText } = render(
      <Router>
        <FireBaseContext.Provider value={{ app, auth, db }}>
          <SignIn />
        </FireBaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('Email address'), {
        target: { value: 'ahmed@gmail.com' }
      });
      await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
      fireEvent.click(getByTestId('sign-in'));

      expect(getByPlaceholderText('Email address').value).toBe('ahmed@gmail.com');
      expect(getByPlaceholderText('Password').value).toBe('password');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});
