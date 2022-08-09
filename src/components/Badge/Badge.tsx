import * as S from './Badge.styles';

interface Props {
  matchType?: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontColor?: string;
  borderRadius?: string;
  children?: string | JSX.Element;
}

const Badge = ({
  matchType,
  color = 'primary',
  width = '60px',
  height = '18px',
  fontSize = '12px',
  fontColor = 'primary',
  borderRadius = '1rem',
  children,
}: Props) => (
  <S.Container
    matchType={matchType}
    color={color}
    width={width}
    height={height}
    fontSize={fontSize}
    fontColor={fontColor}
    borderRadius={borderRadius}
  >
    {children}
  </S.Container>
);

export default Badge;
