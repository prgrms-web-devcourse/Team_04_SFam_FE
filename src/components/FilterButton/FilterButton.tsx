import * as S from './FilterButton.styles';

interface Props {
  color?: string;
  size?: string;
  fontSize?: string;
  fontColor?: string;
  margin?: string;
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FilterButton = ({
  color = 'primary',
  size = '100px',
  fontSize = '20px',
  fontColor = 'primary',
  margin = 'default',
  onClick,
  children,
  ...props
}: Props) => (
  <S.Container
    color={color}
    size={size}
    fontSize={fontSize}
    fontColor={fontColor}
    onClick={onClick}
    margin={margin}
    {...props}
  >
    {children}
  </S.Container>
);

export default FilterButton;
