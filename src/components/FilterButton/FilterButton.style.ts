import styled from '@emotion/styled';
import theme from '@styles/theme';

interface Props {
  color: string;
  size: string;
  fontSize: string;
  fontColor: string;
}

export const Container = styled.button<Props>`
  position: relative;
  display: inline-block;
  border: none;
  border-radius: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ color }) => (color === 'primary' ? `${theme.color.green200}` : color)};
  color: ${({ fontColor }) => (fontColor === 'primary' ? `${theme.color.background}` : fontColor)};
`;
