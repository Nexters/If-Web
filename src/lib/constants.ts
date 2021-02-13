import { NationIconType } from '@/components/NationIcon/NationIcon';

export interface INationList {
  id: number;
  name: NationIconType;
  title: string;
}

export const nationList: INationList[] = [
  {
    id: 1,
    name: 'taiwan',
    title: '대만',
  },
  {
    id: 2,
    name: 'korea',
    title: '대한민국',
  },
  {
    id: 3,
    name: 'russia',
    title: '러시아',
  },
  {
    id: 4,
    name: 'macau',
    title: '마카오',
  },
  {
    id: 5,
    name: 'usa',
    title: '미국',
  },
  {
    id: 6,
    name: 'vietnam',
    title: '베트남',
  },
  {
    id: 7,
    name: 'spain',
    title: '스페인',
  },
  {
    id: 8,
    name: 'singapore',
    title: '싱가포르',
  },
  {
    id: 9,
    name: 'uk',
    title: '영국',
  },
  {
    id: 10,
    name: 'italy',
    title: '이탈리아',
  },
  {
    id: 11,
    name: 'japan',
    title: '일본',
  },
  {
    id: 12,
    name: 'china',
    title: '중국',
  },
  {
    id: 13,
    name: 'thailand',
    title: '태국',
  },
  {
    id: 14,
    name: 'france',
    title: '프랑스',
  },
  {
    id: 15,
    name: 'australia',
    title: '호주',
  },
  {
    id: 16,
    name: 'hongkong',
    title: '홍콩',
  },
];
