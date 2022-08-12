import styled from '@emotion/styled';

interface Props {
  matchType?: string;
  color: string;
  width: string;
  height: string;
  fontSize: string;
  fontColor: string;
  padding?: boolean;
}

export const Container = styled.span<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding && '0 12px'};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ theme }) => theme.borderRadius};
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
