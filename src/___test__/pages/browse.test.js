import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Browse } from '../../pages';
import { FireBaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({})
}));

jest.mock('../../utils/selection-filter', () => ({
  selectionFilter: () => ({
    series: [
      {
        title: 'Documentaries',
        data: [
          {
            id: 'series-1x',
            title: 'Tiger King',
            description:
              'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
            genre: 'documentaries',
            maturity: '18',
            slug: 'tiger-king'
          }
        ]
      }
    ],
    films: [
      {
        title: 'Suspense',
        data: [
          {
            id: 'film-1x',
            title: 'Amanda Knox',
            description:
              'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
            genre: 'documentaries',
            maturity: '12',
            slug: 'amanda-knox'
          }
        ]
      }
    ]
  })
}));

const firebase = {
  auth: jest.fn(() => ({
    currentUser: { displayName: 'ahmed', photoURL: 1, email: 'ahmed@gmail.com' },
    signOut: jest.fn(() => Promise.resolve('I am signed out!'))
  })),
  firestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve('I get content!')),
      add: jest.fn(() => Promise.resolve('I add content!'))
    }))
  }))
};

describe('<Browse />', () => {
  it('renders the browse page with <SelectProfileContainer />', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId, debug } = render(
      <Router>
        <FireBaseContext.Provider value={{ firebase }}>
          <Browse />
        </FireBaseContext.Provider>
      </Router>
    );
  });
});
