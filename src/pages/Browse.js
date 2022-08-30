import { useState } from 'react';
import BrowseContainer from '../containers/BrowseContainer';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
const Browse = () => {
  const [films, setFilms] = useState(null);
  const [series, setSeries] = useState(null);
  useContent({ target: 'films', setTarget: setFilms });
  useContent({ target: 'series', setTarget: setSeries });
  const silds = selectionFilter({ films, series });

  return <BrowseContainer silds={silds} />;
};

export default Browse;
