import axios from 'axios';

interface IRequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

export default async (props: IRequestProps) => {
  const { data } = await axios({
    url: `/api${props.url}`,
    method: props.method,
  });
  return data;
};
