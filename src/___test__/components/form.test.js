import { getByTestId, render } from '@testing-library/react';
import { Form } from '../../components';
jest.mock('react-router-dom');
describe('<From/>', () => {
  it('renders the form with populated data', () => {
    const { container, getByPlaceholderText, getByText, queryByText } = render(
      <Form>
        <Form.Title>Sign In Now.</Form.Title>

        <Form.Base>
          <Form.Input onChange={() => {}} type="email" placeholder="Email Address" />
          <Form.Input onChange={() => {}} type="password" placeholder="Password" />
          <Form.Submit type="submit" disabled>
            {' '}
            Sign In{' '}
          </Form.Submit>
          <Form.Text>
            New to Netflix? <Form.Link to={'/signup'}> Sign up now.</Form.Link>
          </Form.Text>
          <Form.SmallText>
            {" This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."}
          </Form.SmallText>
        </Form.Base>
      </Form>
    );
    expect(queryByText('Sign In Now.')).toBeTruthy();
    expect(queryByText('Sign In')).toBeTruthy();
    expect(queryByText('New to Netflix?')).toBeTruthy();

    expect(
      getByText(
        "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
      )
    ).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeTruthy();
    expect(getByPlaceholderText('Email Address').disabled).toBeTruthy();
    expect(getByPlaceholderText('Password').disabled).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
