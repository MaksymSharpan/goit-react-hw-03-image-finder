// import React from 'react';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '20935726-589ec499a748a6b46fa10a9d7';

const fetchArticles = async (searchQuery, page, limit) => {
  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${limit}`,
  );
  return response.data.hits;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchArticles };

// const instance = axios.create({
//   BASE_URL: 'https://pixabay.com/api/',
//   KEY: '20935726-589ec499a748a6b46fa10a9d7',
// });

// const getAllPosts = () => {
//   return instance.get();
// };
