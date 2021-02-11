import { atom } from 'recoil';
import { NationIconType } from '@/components/NationIcon/NationIcon';

interface IAddContentState {
  title: string | null;
  place: string | null;
  nation: {
    id: number | null;
    name: NationIconType;
    title: string;
  };
  content: string | null;
  images: string[];
}

export const addContentState = atom<IAddContentState>({
  key: 'addContentState',
  default: {
    title: '',
    place: null,
    nation: {
      id: null,
      name: 'korea',
      title: '여행한 나라',
    },
    content: '',
    images: [],
  },
});
