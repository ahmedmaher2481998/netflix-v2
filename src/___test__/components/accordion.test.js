import { fireEvent, render } from '@testing-library/react';
import { Accordion } from '../../components';
import FAQData from '../../fixtures/faqs.json';

describe('<Accordion>', () => {
  it('Renders <Accordion/> with populated data', () => {
    const { container, getByText } = render(
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

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText(FAQData[0].header)).toBeTruthy();
    expect(getByText(FAQData[1].header)).toBeTruthy();
    expect(getByText(FAQData[2].header)).toBeTruthy();
    expect(getByText(FAQData[3].header)).toBeTruthy();
    expect(getByText(FAQData[4].header)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('toggles the body of the <Accordion.Item/> on click', () => {
    const { container, queryByText, getByTestId } = render(
      <>
        <Accordion>
          <Accordion.Title>Frequently Asked Questions</Accordion.Title>
          <Accordion.Frame>
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
    const whatIsNetflixBodyText =
      "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

    expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
    fireEvent.click(queryByText('What is Netflix?'));
    expect(queryByText(whatIsNetflixBodyText)).toBeTruthy();

    fireEvent.click(queryByText('What is Netflix?'));
    expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
