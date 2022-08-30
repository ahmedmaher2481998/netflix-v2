import { useState } from 'react';
import BrowseContainer from '../containers/BrowseContainer';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
const Browse = () => {
  const [films, setFilms] = useState(null);
  const [series, setSeries] = useState(null);
  useContent({ target: 'films', setTarget: setFilms });
  useContent({ target: 'series', setTarget: setSeries });
  const slides = selectionFilter({ films, series });

  return <BrowseContainer slides={slides} />;
};

export default Browse;
