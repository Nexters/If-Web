import axios from 'axios';

interface IRequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: any;
}

export default async (props: IRequestProps) => {
  const accessToken = localStorage.getItem('token');
  const { data } = await axios({
    url: `/api${props.url}`,
    method: props.method,
    headers: { Authorization: `Bearer ${accessToken}` },
    data: props.data,
  });
  return data;
};
