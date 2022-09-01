import { render } from '@testing-library/react';
import { JumboTron } from '../../components';
import jumboData from '../../fixtures/jumbo.json';

describe('<JumboTron />', () => {
  it('renders the <JumboTron /> with populated data', () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <JumboTron.Container>
        {jumboData.map((item) => (
          <JumboTron direction={item.direction} key={item.id}>
            <JumboTron.Pane>
              <JumboTron.Title>{item.title}</JumboTron.Title>
              <JumboTron.Subtitle>{item.subTitle}</JumboTron.Subtitle>
            </JumboTron.Pane>
            <JumboTron.Pane>
              <JumboTron.Image
                data-testid={`${item.id}-jumbo-image`}
                src={item.image}
                alt={item.alt}
              />
            </JumboTron.Pane>
          </JumboTron>
        ))}
      </JumboTron.Container>
    );

    expect(getByText('Enjoy on your TV.')).toBeTruthy();
    expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
    expect(getByTestId('1-jumbo-image')).toBeTruthy();
    expect(
      getByText(
        'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
