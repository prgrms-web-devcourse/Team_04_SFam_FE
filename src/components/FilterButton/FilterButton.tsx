import { ComponentProps } from 'react';
import * as S from './FilterButton.style';

interface Props {
  color?: string;
  size?: string;
  fontSize?: string;
  fontColor?: string;
  children?: string;
  onClick?: ComponentProps<'button'>['onClick'];
}

const FilterButton = ({
  color = 'primary',
  size = '100px',
  fontSize = '20px',
  fontColor = 'primary',
  children,
  onClick,
}: Props) => (
  <S.Container
    color={color}
    size={size}
    fontSize={fontSize}
    fontColor={fontColor}
    onClick={onClick}
  >
    {children}
  </S.Container>
);

export default FilterButton;
