import * as S from './Button.styles';

interface Props extends Partial<S.StyleProps> {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  round?: boolean;
  outline?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  type,
  width = '100%',
  height = '40px',
  fontSize = '20px',
  backgroundColor,
  round,
  outline,
  onClick,
  children,
  disabled = false,
}: Props) => (
  <S.Button
    backgroundColor={backgroundColor}
    width={width}
    height={height}
    fontSize={fontSize}
    onClick={onClick}
    round={round}
    outline={outline}
    type={type}
    disabled={disabled}
  >
    {children}
  </S.Button>
);

export default Button;
