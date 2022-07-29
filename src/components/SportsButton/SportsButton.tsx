/* eslint-disable react/require-default-props */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { ComponentProps } from 'react';
import * as S from './SportsButton.style';

interface Props {
  color?: string;
  size?: string;
  fontSize?: string;
  fontColor?: string;
  children?: string;
  onClick?: ComponentProps<'button'>['onClick'];
}

const SportsButton = ({
  color = '#62D2A2',
  size = '100px',
  fontSize = '20px',
  fontColor = '#ffffff',
  children,
  onClick,
}: Props) => {
  const buttonStyle = {
    width: `${size}`,
    height: `${size}`,
    fontSize: `${fontSize}`,
    color: `${fontColor}`,
    backgroundColor: `${color}`,
  };

  return (
    <S.Container
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </S.Container>
  );
};

export default SportsButton;
