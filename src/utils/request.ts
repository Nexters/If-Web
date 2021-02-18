import axios from 'axios';

interface IRequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

export default async (props: IRequestProps) => {
  const accessToken = localStorage.getItem('token');
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  const url =
    process.env.NODE_ENV === 'production' ? props.url : `/api${props.url}`;
  const { data } = await axios({
    url,
    method: props.method,
  });
  return data;
};
