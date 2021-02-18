import axios from 'axios';

interface IRequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: any;
}

export default async (props: IRequestProps) => {
  const { data } = await axios({
    url: `/api${props.url}`,
    method: props.method,
    data: props.data,
    headers: {
      Authorization: `Bearer ${process.env.TEST_TOKEN}`,
    },
  });
  return data;
};
