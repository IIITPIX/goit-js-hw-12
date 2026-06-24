import axios from 'axios';

export default function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '56410922-8c14f1efbc474126a654fcfe4',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.log(error);
    });
}
