import * as S from './Button.styles';

interface Props extends Partial<S.StyleProps> {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  round?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  type,
  width = '100%',
  height = '50px',
  fontSize = '20px',
  backgroundColor,
  round,
  onClick,
  children,
}: Props) => (
  <S.Button
    backgroundColor={backgroundColor}
    width={width}
    height={height}
    fontSize={fontSize}
    onClick={onClick}
    round={round}
    type={type}
  >
    {children}
  </S.Button>
);

export default Button;
