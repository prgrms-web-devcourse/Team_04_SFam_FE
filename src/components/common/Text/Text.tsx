import * as S from './Text.styles';

interface Props extends Partial<S.StyleProps> {
  children?: string | JSX.Element;
  tag?:
    | 'h1'
    | 'h2'
    | 'b1'
    | 'b2'
    | 'b3'
    | 'b4'
    | 'c1'
    | 'c2'
    | 'boldB1'
    | 'boldB2'
    | 'boldB3'
    | 'boldB4'
    | 'boldC1'
    | 'boldC2'
    | 'grayB2'
    | 'grayB3'
    | 'grayB4'
    | 'boldGrayB1'
    | 'boldGrayB2'
    | 'boldGrayB3'
    | 'boldGreenB3'
    | 'boldOrangeB3';
  fontSize?: string;
  fontWeight?: string | number;
  fontStyle?: string;
  color?: string;
}

const Text = ({ children, tag, fontSize, fontWeight, fontStyle, color }: Props) => (
  <S.StyledText
    tag={tag}
    fontSize={fontSize}
    fontWeight={fontWeight}
    fontStyle={fontStyle}
    color={color}
  >
    {children}
  </S.StyledText>
);
export default Text;
