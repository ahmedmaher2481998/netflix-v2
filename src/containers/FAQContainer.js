import React from 'react';
import { Accordion } from '../components';
import { OptForm } from '../components/';
import FAQData from '../fixtures/faqs.json';
const FAQContainer = () => {
  return (
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

        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now </OptForm.Button>
          <OptForm.Break />
        </OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </Accordion>
    </>
  );
};

export default FAQContainer;
