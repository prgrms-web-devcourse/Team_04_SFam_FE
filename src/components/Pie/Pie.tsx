import { ResponsivePie } from '@nivo/pie';

interface Props {
  data: PieDataProps[];
}

interface PieDataProps {
  id: string;
  label: string;
  value: number;
}

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

const Pie = ({ data }: Props) => (
  <ResponsivePie
    data={data}
    colors={['#62d2a2', '#FDCF65', '#F19A78']}
    margin={{ top: 80, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.2]],
    }}
    enableArcLabels={false}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor='#333333'
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [['darker', 2]],
    }}
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 105,
        translateY: 0,
        itemsSpacing: 16,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#000',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
);

export default Pie;
