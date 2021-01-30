import NationListItem from '@/components/NationListItem';
import React, { FC } from 'react';

interface INationContent {
  id: number;
  name: string;
  foods?: string;
}

const nationList: INationContent[] = [
  {
    id: 1,
    name: '대만',
    foods: '망고빙수, 밀크티, 지파이, 펑리수',
  },
  {
    id: 2,
    name: '대한민국',
    foods: '곱창, 불고기, 비빔밥, 삼겹살, 떡볶이',
  },
  {
    id: 3,
    name: '러시아',
    foods: '보드카, 샤슬릭, 새우, 킹크랩',
  },
  {
    id: 4,
    name: '마카오',
    foods: '버블티, 에그타르트, 우유푸딩, 아몬드쿠키',
  },
  {
    id: 5,
    name: '미국',
    foods: '햄버거, 핫도그, 맥앤치즈, 바베큐',
  },
  {
    id: 6,
    name: '베트남',
    foods: '쌀국수, 반미, 반쎼오, 분짜, 스프링롤',
  },
  {
    id: 7,
    name: '스페인',
    foods: '감바스, 빠에야, 뱅쇼, 이베리코, 하몽',
  },
  {
    id: 8,
    name: '싱가포르',
    foods: '카야토스트, 칠리크랩, 락사, 당근케이크',
  },
  {
    id: 9,
    name: '영국',
    foods: '홍차, 브런치, 피시앤칩스',
  },
  {
    id: 10,
    name: '이탈리아',
    foods: '피자, 파스타, 티라미수, 젤라또, 라자냐',
  },
  {
    id: 11,
    name: '일본',
    foods: '초밥, 라멘, 오코노미야키, 타코야키',
  },
  {
    id: 12,
    name: '중국',
    foods: '마라탕, 마라샹궈, 마파두부, 짜장면, 짬뽕',
  },
  {
    id: 13,
    name: '태국',
    foods: '똠양꿍, 팟타이, 솜땀, 푸팟퐁커리',
  },
  {
    id: 14,
    name: '프랑스',
    foods: '라따뚜이, 마카롱, 크로와상, 바게트',
  },
  {
    id: 15,
    name: '호주',
    foods: '미트파이, 팀탐, 캥거루고기,',
  },
  {
    id: 16,
    name: '홍콩',
    foods: '에그타르트, 딤심, 완탕면, 우육면, 계란와플',
  },
];

const NationList: FC = () => {
  return (
    <ul>
      {nationList.map(({ id, name, foods }) => (
        <NationListItem key={id} name={name} foods={foods} />
      ))}
    </ul>
  );
};

export default NationList;
