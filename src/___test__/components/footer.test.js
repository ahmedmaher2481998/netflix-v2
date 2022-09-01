import { getByText, render } from '@testing-library/react';
import { Footer } from '../../components';
describe('render <Footer/>', () => {
  it('renders footer component', () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions? Contact us.</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Help Center</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Corporate Information</Footer.Link>
            <Footer.Link href="#">Only on Netflix</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Media Center</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>
          <Footer.Break />
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>Netflix </Footer.Text>
      </Footer>
    );
    expect(getByText('FAQ')).toBeTruthy();
    expect(getByText('Questions? Contact us.')).toBeTruthy();
    expect(getByText('Help Center')).toBeTruthy();
    expect(getByText('Account')).toBeTruthy();
    expect(getByText('Media Center')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
