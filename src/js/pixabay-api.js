import axios from 'axios';
let key = '';
export default async function getImagesByQuery(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '56410922-8c14f1efbc474126a654fcfe4',
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  });
  if (key === query || key === '') {
    page++;
    key = query;
  } else {
    page = 1;
    key = '';
  }
  return response.data;
}
