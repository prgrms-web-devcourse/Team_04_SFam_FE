import dynamic from 'next/dynamic';
import { pieData } from '../Pie/Pie';
import * as S from './TeamChart.style';

const MyPie = dynamic(() => import('../Pie/Pie'), {
  ssr: false,
});

const TeamChart = () => (
  <S.TeamChartWrapper>
    <MyPie data={pieData} />
  </S.TeamChartWrapper>
);

export default TeamChart;
