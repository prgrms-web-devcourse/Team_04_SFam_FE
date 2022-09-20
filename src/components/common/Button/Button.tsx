import * as S from './Button.styles';

interface Props extends Partial<S.StyleProps> {
  children: string | JSX.Element;
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
  noPointer = false,
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
    noPointer={noPointer}
  >
    {children}
  </S.Button>
);

export default Button;
