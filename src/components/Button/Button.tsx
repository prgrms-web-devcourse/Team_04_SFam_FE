import { ComponentProps } from 'react';
import ButtonContainer from './Button.styles';

interface Props {
  color?: string;
  width?: string;
  height?: string;
  children?: string;
  radius?: string;
  fontSize?: string;
  onClick?: ComponentProps<'button'>['onClick'];
}

const Button = ({
  color = 'primary',
  width = '384px',
  height = '50px',
  radius = '8px',
  fontSize = '20px',
  onClick,
  children,
  ...props
}: Props) => (
  <ButtonContainer
    color={color}
    width={width}
    height={height}
    radius={radius}
    fontSize={fontSize}
    onClick={onClick}
    {...props}
  >
    {children}
  </ButtonContainer>
);

export default Button;
