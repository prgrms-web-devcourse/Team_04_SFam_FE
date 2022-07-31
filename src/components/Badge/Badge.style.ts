import styled from '@emotion/styled';
import theme from '@styles/theme';

interface Props {
  color: string;
  width: string;
  height: string;
  fontSize: string;
  fontColor: string;
  borderRadius: string;
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ fontColor }) => (fontColor === 'primary' ? `${theme.color.background}` : fontColor)};
  background-color: ${({ color }) => (color === 'primary' ? `${theme.color.green200}` : color)};
`;
