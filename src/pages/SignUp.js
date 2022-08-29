import { useState, useContext } from 'react';
import FooterContainer from '../containers/FooterContainer';
import HeaderContainer from '../containers/HeaderContainer';
import { Form } from '../components';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as routers from '../constants/routes';
import { useNavigate } from 'react-router-dom';
import { FireBaseContext } from '../context/firebase';
const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const validate = firstName === '' || password === '' || emailAddress === '';
  const { auth } = useContext(FireBaseContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log(auth.currentUser);
        navigate(routers.Browse);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setEmailAddress('');
        setPassword('');
        setFirstName('');
        setError(errorMessage);
        // ..
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp}>
            <Form.Input
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
              type="text"
              placeholder="First name"
            />
            <Form.Input
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              type="email"
              placeholder="Email Address"
            />
            <Form.Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              placeholder="Password"
            />
            <Form.Submit type="submit" disabled={validate}>
              {' '}
              Sign In{' '}
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to={routers.SignIn}> Sign in now.</Form.Link>
            </Form.Text>
            <Form.SmallText>
              {
                "   This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
              }
            </Form.SmallText>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignIn;
