import * as S from './Paragraph.styles';
import { Props } from './types';

const Paragraph = ({ width, height, fontSize = 'default', fontColor = 'default', children }: Props) => (
  <S.ParagraphWrapper
    width={width}
    height={height}
  >
    <S.Paragraph
      fontSize={fontSize}
      fontColor={fontColor}
    >
      {children}
    </S.Paragraph>
  </S.ParagraphWrapper>
);

export default Paragraph;
