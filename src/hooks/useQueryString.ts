import { useLocation } from 'react-router-dom';

const useQueryString = () => new URLSearchParams(useLocation().search);

export default useQueryString;
