import dynamic from 'next/dynamic';

import { MatchRecord } from 'types';

import * as S from './MatchRecordChart.styles';

interface Props {
  matchRecord: MatchRecord;
}

const PieChart = dynamic(() => import('../common/PieChart/PieChart'), {
  ssr: false,
});

const MatchRecordToPieData = (matchRecord: MatchRecord) =>
  Object.entries(matchRecord).map(([type, value]: [string, number]) => {
    switch (type) {
      case 'win':
        return { id: '승리', label: `승리 ${value}회`, value };
      case 'draw':
        return { id: '무승부', label: `무승부 ${value}회`, value };
      case 'lose':
        return { id: '패배', label: `패배 ${value}회`, value };
      default:
        return { id: '', label: '', value: 0 };
    }
  });

const MatchRecordChart = ({ matchRecord }: Props) => (
  <S.Wrapper>
    <PieChart data={MatchRecordToPieData(matchRecord)} />
  </S.Wrapper>
);

export default MatchRecordChart;
