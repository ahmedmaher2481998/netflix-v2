import { render } from '@testing-library/react';
import { Card } from '../../components';
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
    const { container, queryByText, getByText, getByAltText, getByTestId } = render(
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
            <Card.Feature category={category}></Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );
  });
});
