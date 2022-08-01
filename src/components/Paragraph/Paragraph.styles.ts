import styled from '@emotion/styled';
import { Props } from './types';

export const ParagraphWrapper = styled.div<Props>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${(props) => props.theme.color.green100};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 20px;
`;

export const Paragraph = styled.p<Props>`
  color: ${({ fontColor, theme }) => (fontColor === 'default' ? `${theme.color.gray700}` : fontColor)};
  font-size: ${({ fontSize, theme }) => (fontSize === 'default' ? `${theme.fontSize.b3}` : fontSize)};
  font-weight: bold;
  padding: 20px;
  white-space: pre-line;
  word-break: break-all;
`;
