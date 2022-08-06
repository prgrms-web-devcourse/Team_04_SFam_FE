import * as S from './Button.styles';

interface Props extends Partial<S.StyleProps> {
  children: string;
  round?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  width = '100%',
  height = '50px',
  fontSize = '20px',
  backgroundColor,
  round,
  onClick,
  children,
}: Props) => (
  <S.Button
    color={backgroundColor}
    width={width}
    height={height}
    fontSize={fontSize}
    onClick={onClick}
    round={round}
  >
    {children}
  </S.Button>
);

export default Button;
