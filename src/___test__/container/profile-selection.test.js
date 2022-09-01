import selectionFilter from '../../utils/selection-filter';

test('selection filter works as intended ', () => {
  const series = [
    {
      id: 'x1-series',
      title: 'ninja cat movie',
      description:
        'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
      genre: 'comedies',
      maturity: '12',
      slug: 'ninja-cat'
    }
  ];
  const films = [
    {
      id: 'x1-films',
      title: 'The Prestige',
      description: 'Great film...',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige'
    }
  ];

  const slides = selectionFilter({ films, series });

  expect(slides.films[0].title).toBe('Drama');
  expect(slides.films[0].data[0].description).toBe('Great film...');
  expect(slides.films[0].data[0].genre).toBe('drama');
  expect(slides.films[0].data[0].maturity).toBe('15');
  expect(slides.films[0].data[0].slug).toBe('the-prestige');

  expect(slides.series[1].title).toBe('Comedies');
  expect(slides.series[1].data[0].description).toBe(
    'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.'
  );
  expect(slides.series[1].data[0].genre).toBe('comedies');
  expect(slides.series[1].data[0].maturity).toBe('12');
  expect(slides.series[1].data[0].slug).toBe('ninja-cat');
});

test('selection filter with noe parameters', () => {
  const slides = selectionFilter();

  expect(slides.series[0].title).toBe('Documentaries');
  expect(slides.films[0].title).toBe('Drama');
  expect(slides.series[0].data).toBe(undefined);
  expect(slides.films[0].data).toBe(undefined);
});
