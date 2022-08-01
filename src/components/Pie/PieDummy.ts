import { PieDataProps } from './types';

// TODO: API 연동 시 수정
const winCount = 10;
const drawCount = 2;
const loseCount = 3;

export const pieData: PieDataProps[] = [
  {
    id: '승리',
    label: `승리 ${winCount}회`,
    value: 10,
  },
  {
    id: '무승부',
    label: `무승부 ${drawCount}회`,
    value: 2,
  },
  {
    id: '패배',
    label: `패배 ${loseCount}회`,
    value: 3,
  },
];
