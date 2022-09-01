import { render, fireEvent } from '@testing-library/react';
import { Card, Player } from '../../components';
const category = 'series';
const slideRow = [
  {
    title: 'Documentaries',
    data: [
      {
        genre: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
        description: 'Tiger King description',
        id: '07adcf19-517f-41b4-8f8b-04fee694bce1',
        title: 'Tiger King',
        docId: 'IcRxJBanzE7nmIp2GMGb'
      }
    ]
  },
  {
    title: 'Feel Good',
    data: [
      {
        title: 'Juno',
        genre: 'feel-good',
        description: 'Juno description',
        maturity: '0',
        id: 'a938b5a6-fe25-4a06-8050-353bc7146ccd',
        slug: 'juno',
        docId: '4JDgdf5vE0K3YrW9ZnbP'
      }
    ]
  }
];
describe('<Card/>', () => {
  it('renders <Card/> with populated data ', () => {
    const { container, queryByText, getByAltText } = render(
      <Card.Group>
        {slideRow.map((slideItem, i) => (
          <Card key={`${category}${i}-${slideItem?.title?.toLowerCase()}`}>
            <Card.Title>{slideItem?.title}</Card.Title>
            <Card.Entities>
              {slideItem?.data?.map((item) => (
                <Card.Item item={item} key={item.docId}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    alt={item.slug}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src={'/videos/bunny.mp4'} />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );
    expect(queryByText(slideRow[0].title)).toBeTruthy();
    expect(queryByText(slideRow[0].data[0].title)).toBeTruthy();
    expect(getByAltText(slideRow[0].data[0].slug)).toBeTruthy();
    expect(queryByText(slideRow[0].data[0].description)).toBeTruthy();

    expect(queryByText(slideRow[1].title)).toBeTruthy();
    expect(queryByText(slideRow[1].data[0].title)).toBeTruthy();
    expect(getByAltText(slideRow[1].data[0].slug)).toBeTruthy();
    expect(queryByText(slideRow[1].data[0].description)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('toggles the feature upon clicking  a card item', () => {
    const { queryByText, getByAltText, container, getByTestId } = render(
      <Card.Group>
        {slideRow.map((slideItem, i) => (
          <Card key={`${category}${i}-${slideItem?.title?.toLowerCase()}`}>
            <Card.Title>{slideItem?.title}</Card.Title>
            <Card.Entities>
              {slideItem?.data?.map((item) => (
                <Card.Item item={item} key={item.docId} data-testid={`${item.slug}-item-feature`}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    alt={item.slug}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src={'/videos/bunny.mp4'} />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(queryByText('18')).toBeFalsy();
    fireEvent.click(getByTestId('tiger-king-item-feature'));
    expect(queryByText('18')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('18')).toBeFalsy();

    expect(queryByText('PG')).toBeFalsy();
    fireEvent.click(getByTestId('juno-item-feature'));
    expect(queryByText('PG')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('PG')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
