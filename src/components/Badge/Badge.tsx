import * as S from './Badge.style';

interface Props {
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontColor?: string;
  children?: string;
}

const Badge = ({
  color = '#62D2A2',
  width = '65px',
  height = '20px',
  fontSize = '12px',
  fontColor = '#ffffff',
  children,
}: Props) => {
  const badgeStyle = {
    width: `${width}`,
    height: `${height}`,
    fontSize: `${fontSize}`,
    color: `${fontColor}`,
    backgroundColor: `${color}`,
  };
  return <S.Container style={badgeStyle}>{children}</S.Container>;
};

export default Badge;
