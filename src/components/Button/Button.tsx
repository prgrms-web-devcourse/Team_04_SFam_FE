import { ComponentProps } from 'react';
import ButtonContainer from './Button.style';

interface Props {
  color?: string;
  width?: string;
  height?: string;
  children?: string;
  round?: boolean;
  fontSize?: string;
  onClick?: ComponentProps<'button'>['onClick'];
}

const Button = ({
  color = 'primary',
  width = '384px',
  height = '50px',
  round = false,
  fontSize = '20px',
  onClick,
  children,
  ...props
}: Props) => (
  <ButtonContainer
    color={color}
    width={width}
    height={height}
    round={round}
    fontSize={fontSize}
    onClick={onClick}
    {...props}
  >
    {children}
  </ButtonContainer>
);

export default Button;
