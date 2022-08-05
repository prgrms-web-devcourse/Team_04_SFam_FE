import { ChangeEvent, useState } from 'react';
import { RowWrapper } from '@styles/common';
import * as S from './Slider.styles';

const Slider = () => {
  const [distance, setDistance] = useState('');
  const [min, max] = [5, 40];
  const width = 388;
  const step = 5;
  const RangeTexts = [
    { id: 1, value: 5 },
    { id: 2, value: 10 },
    { id: 3, value: 15 },
    { id: 4, value: 20 },
    { id: 5, value: 25 },
    { id: 6, value: 30 },
    { id: 7, value: 35 },
    { id: 8, value: 40 },
  ];
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setDistance(e.target.value);
  };
  console.log(distance);

  return (
    <S.Container>
      <S.RangeInput
        type='range'
        width={width}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
      />
      <S.RowWrapper>
        {RangeTexts.map((text) => (
          <S.RangeText key={text.id}>{text.value}</S.RangeText>
        ))}
      </S.RowWrapper>
    </S.Container>
  );
};

export default Slider;
