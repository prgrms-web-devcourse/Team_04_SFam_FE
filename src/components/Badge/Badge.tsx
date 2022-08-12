import * as S from './Badge.styles';

interface Props {
  matchType?: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontColor?: string;
  padding?: boolean;
  children?: string | JSX.Element;
}

const Badge = ({
  matchType,
  color = 'primary',
  width = '64px',
  height = '20px',
  fontSize = '12px',
  fontColor = 'primary',
  padding,
  children,
}: Props) => (
  <S.Container
    matchType={matchType}
    color={color}
    width={width}
    height={height}
    fontSize={fontSize}
    fontColor={fontColor}
    padding={padding}
  >
    {children}
  </S.Container>
);

export default Badge;
