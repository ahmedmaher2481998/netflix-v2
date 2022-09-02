import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SignIn } from '../../pages';
import { FireBaseContext } from '../../context/firebase';
import { act } from 'react-dom/test-utils';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => {}
}));

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve('Iam signed in '))
  }))
};

describe('<SignIn/>', () => {
  it('renders the sign in page', async () => {
    const { getByTestId, queryByTestId, getByPlaceholderText } = render(
      <Router>
        <FireBaseContext.Provider value={firebase}>
          <SignIn />
        </FireBaseContext.Provider>
      </Router>
    );

    await act(async () => {
      /*
      await fireEvent.change(getByPlaceholderText('Email Address'), {
        target: { value: 'ahmed@maher.com' }
      });
      await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'Password' } });
      fireEvent.click(getByTestId('sign-in'));

      expect(getByPlaceholderText('Email Address')).toBe('ahmed@maher.com');
      expect(getByPlaceholderText('Password')).toBe('Password');
      expect(getByTestId('error')).toBeFalsy();*/

      await fireEvent.change(getByPlaceholderText('Email address'), {
        target: { value: 'karl@gmail.com' }
      });
      await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
      fireEvent.click(getByTestId('sign-in'));

      expect(getByPlaceholderText('Email address').value).toBe('karl@gmail.com');
      expect(getByPlaceholderText('Password').value).toBe('password');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });
});
