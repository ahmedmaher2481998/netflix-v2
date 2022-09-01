import { fireEvent, render } from '@testing-library/react';
import { Accordion } from '../../components';
import FAQData from '../../fixtures/faqs.json';

describe('<Accordion>', () => {
  it('Renders <Accordion/> with populated data', () => {
    const { container, queryByText } = render(
      <>
        <Accordion>
          <Accordion.Frame>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {FAQData.map((item) => {
              return (
                <Accordion.Item key={item.id}>
                  <Accordion.Header> {item.header} </Accordion.Header>
                  <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion.Frame>
        </Accordion>
      </>
    );

    expect(queryByText('Frequently Asked Questions')).toBeTruthy();
    expect(queryByText(FAQData[0].header)).toBeTruthy();
    expect(queryByText(FAQData[1].header)).toBeTruthy();
    expect(queryByText(FAQData[2].header)).toBeTruthy();
    expect(queryByText(FAQData[3].header)).toBeTruthy();
    expect(queryByText(FAQData[4].header)).toBeTruthy();
  });

  it('toggles the body of the item on click', () => {
    const { container, queryByText } = render(
      <>
        <Accordion>
          <Accordion.Frame>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {FAQData.map((item) => {
              return (
                <Accordion.Item key={item.id}>
                  <Accordion.Header> {item.header} </Accordion.Header>
                  <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion.Frame>
        </Accordion>
      </>
    );

    expect(queryByText(FAQData[0].body)).toBeFalsy();
    fireEvent.click(queryByText(FAQData[0].body));
    expect(queryByText(FAQData[0].body)).toBeTruthy();
    fireEvent.click(queryByText(FAQData[0].body));
    expect(queryByText(FAQData[0].body)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
