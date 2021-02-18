import axios from 'axios';

interface IRequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: any;
}

export default async (props: IRequestProps) => {
  const accessToken = localStorage.getItem('token');
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  try {
    const { data } = await axios({
      url: `/api${props.url}`,
      method: props.method,
      data: props.data,
    });
    return data;
  } catch (e) {
    return false;
  }
};
