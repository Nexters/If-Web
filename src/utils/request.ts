import axios from 'axios';

interface IRequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

export default async (props: IRequestProps) => {
  const accessToken = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  const { data } = await axios({
    url: `/api${props.url}`,
    method: props.method,
  });
  return data;
};
