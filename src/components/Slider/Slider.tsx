import { ChangeEvent, useEffect, useRef } from 'react';

import * as S from './Slider.styles';

interface Props {
  setDistance: (value: number) => void;
  distance: number;
}

const Slider = ({ distance, setDistance }: Props) => {
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
  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.valueAsNumber);
    setDistance(e.target.valueAsNumber);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.valueAsNumber = distance;
    }
  });

  return (
    <S.Container>
      <S.RangeInput
        ref={ref}
        type='range'
        width={width}
        min={min}
        max={max}
        step={step}
        onInput={handleChange}
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
