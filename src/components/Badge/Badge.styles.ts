import styled from '@emotion/styled';

interface Props {
  matchType?: string;
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
  color: ${({ fontColor, theme }) => (fontColor === 'primary' ? `${theme.color.background}` : fontColor)};
  background-color: ${({ color, theme, matchType }) => {
    if (matchType) {
      return matchType === 'TEAM_MATCH' ? theme.color.primary : theme.color.yellow;
    }

    if (color === 'primary') return `${theme.color.green200}`;
    if (color === 'secondary') return `${theme.color.secondary}`;
    return color;
  }};
`;
