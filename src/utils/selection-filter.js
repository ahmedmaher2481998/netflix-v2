export default function selectionFilter({ films, series } = []) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: getGenreItem('documentaries', series)
      },
      {
        title: 'Comedies',
        data: getGenreItem('comedies', series)
      },
      {
        title: 'Children',
        data: getGenreItem('children', series)
      },
      {
        title: 'Crime',
        data: getGenreItem('crime', series)
      },
      {
        title: 'Feel Good',
        data: getGenreItem('feel-good', series)
      }
    ],
    films: [
      {
        title: 'Drama',
        data: getGenreItem('drama', films)
      },
      {
        title: 'Thriller',
        data: getGenreItem('thriller', films)
      },
      {
        title: 'Children',
        data: getGenreItem('children', films)
      },
      {
        title: 'Suspense',
        data: getGenreItem('suspense', films)
      },
      {
        title: 'Romance',
        data: getGenreItem('romance', films)
      }
    ]
  };
}
const getGenreItem = (genre, items) => items?.filter((item) => genre === item.genre);
