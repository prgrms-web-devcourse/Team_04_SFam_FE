import * as S from './Badge.styles';

interface Props {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontColor?: string;
  borderRadius?: string;
  children?: string | JSX.Element;
}

const Badge = ({
  color = 'primary',
  width = '65px',
  height = '20px',
  fontSize = '12px',
  fontColor = 'primary',
  borderRadius = '1rem',
  children,
}: Props) => (
  <S.Container
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
