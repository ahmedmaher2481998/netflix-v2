import { useState, useContext } from 'react';
import FooterContainer from '../containers/FooterContainer';
import HeaderContainer from '../containers/HeaderContainer';
import { Form } from '../components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as routers from '../constants/routes';
import { useNavigate } from 'react-router-dom';
import { FireBaseContext } from '../context/firebase';
const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const validate = password === '' || emailAddress === '';
  const { auth } = useContext(FireBaseContext);
  const handleSignIn = (e) => {
    e.preventdefault();
    signInWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem('netflix-user', JSON.stringify(user));

        setEmailAddress('');
        setPassword('');
        setError('');
        navigate(routers.Browse);
        // ...
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        console.log(error);
        setError(error);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn}>
            <Form.Input
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              type="email"
              placeholder="Email address"
            />
            <Form.Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              placeholder="Password"
            />
            <Form.Submit data-testid="sign-in" type="submit" disabled={validate}>
              {' '}
              Sign In{' '}
            </Form.Submit>
            <Form.Text>
              New to Netflix? <Form.Link to={routers.SignUp}> Sign up now.</Form.Link>
            </Form.Text>
            <Form.SmallText>
              This page is protected by Google reCAPTCHA to ensure you&quot;re not a bot. Learn
              more.
            </Form.SmallText>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignIn;
