import styled from '@emotion/styled';

interface Props {
  matchType?: string;
  matchStatus?: string;
  color: string;
  width: string;
  height: string;
  fontSize: string;
  fontColor: string;
  padding?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding && '0 8px'};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ fontColor, theme }) => (fontColor === 'primary' ? `${theme.color.background}` : fontColor)};
  background-color: ${({ color, theme, matchType, matchStatus }) => {
    if (matchType) {
      return matchType === 'TEAM_MATCH' ? theme.color.primary : theme.color.yellow;
    }
    if (matchStatus) {
      switch (matchStatus) {
        case 'WAITING':
          return theme.color.yellow;
        case 'IN_GAME':
          return theme.color.secondary;
        case 'END':
          return theme.color.primary;
        default:
          return '#000';
      }
    }

    if (color === 'primary') return `${theme.color.green200}`;
    if (color === 'secondary') return `${theme.color.secondary}`;
    return color;
  }};
`;
