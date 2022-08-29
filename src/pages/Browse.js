import { useState } from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
const Browse = () => {
  const [films, setFilms] = useState(null);
  const [series, setSeries] = useState(null);
  useContent({ target: 'films', setTarget: setFilms });
  useContent({ target: 'series', setTarget: setSeries });
  console.log(selectionFilter({ films, series }));

  return <div>This is a big deal</div>;
};

export default Browse;
