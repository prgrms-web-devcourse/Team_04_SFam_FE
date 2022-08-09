import React from 'react';
import * as S from './FilterButton.styles';

interface Props extends S.StyleProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FilterButton = ({ onClick, children, active, ...props }: Props) => (
  <S.FilterButton
    active={active}
    onClick={onClick}
    {...props}
  >
    {children}
  </S.FilterButton>
);

export default FilterButton;
