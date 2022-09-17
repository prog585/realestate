import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      //'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
      'x-rapidapi-key': '4855b626b8mshc56ea0b69cc4fb5p16489ajsn6e84403fbf3b',
    },
  });

  return data;
};
