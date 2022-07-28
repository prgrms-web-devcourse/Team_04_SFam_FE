/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import { ComponentProps } from 'react';
import ButtonContainer from './Button.style';

interface Props {
  color?: string;
  width?: string | number;
  height?: string | number;
  children?: string;
  round?: boolean;
  fontSize?: string | number;
  onClick?: ComponentProps<'button'>['onClick'];
}

const Button = ({
  color,
  children,
  width = 384,
  height = 50,
  round = false,
  fontSize = 20,
  onClick,
  ...props
}: Props) => {
  let replacedWidth = '';
  let replacedHeight = '';
  let replacedFontSize = '';
  if (typeof width === 'number') {
    replacedWidth = `${width}px`;
  }
  if (typeof height === 'number') {
    replacedHeight = `${height}px`;
  }
  if (typeof fontSize === 'number') {
    replacedFontSize = `${fontSize}px`;
  }

  return (
    <ButtonContainer
      color={color}
      width={replacedWidth}
      height={replacedHeight}
      round={round}
      fontSize={replacedFontSize}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
