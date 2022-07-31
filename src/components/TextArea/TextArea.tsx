import * as S from './TextArea.style';

interface Props {
  children: string | JSX.Element;
}

const TextArea = ({ children }: Props) => (
  <S.TextAreaWrapper>
    <S.Text>{children}</S.Text>
  </S.TextAreaWrapper>
);

export default TextArea;
