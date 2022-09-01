import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature/>', () => {
  it('renders the <Feature/> with populated data', () => {
    const { queryByText, container } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
      </Feature>
    );
    expect(queryByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
    expect(queryByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Feature/> with only Title', () => {
    const { queryByText, container } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
      </Feature>
    );
    expect(queryByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
    expect(queryByText('Watch anywhere. Cancel anytime.')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the <Feature/> with only subtitle', () => {
    const { queryByText, container } = render(
      <Feature>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
      </Feature>
    );
    expect(queryByText('Unlimited movies, TV shows, and more.')).toBeFalsy();
    expect(queryByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
