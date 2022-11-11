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

export const Container = styled('div')<Props>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({ width, padding, height, fontSize, theme, color, fontColor, matchType, matchStatus }) => {
    const getBgColor = () => {
      if (matchType === 'TEAM_MATCH') return theme.color.primary;
      if (matchType === 'INDIVIDUAL_MATCH') return theme.color.yellow;
      if (matchStatus === 'WAITING') return theme.color.yellow;
      if (matchStatus === 'IN_GAME') return theme.color.secondary;
      if (matchStatus === 'END') return theme.color.primary;
      if (color === 'primary') return `${theme.color.green200}`;
      if (color === 'secondary') return `${theme.color.secondary}`;
      return color;
    };
    return {
      padding: padding ? padding && '0 8px' : '0px',
      width,
      height,
      fontSize,
      borderRadius: theme.borderRadius,
      color: fontColor === 'primary' ? `${theme.color.background}` : fontColor,
      backgroundColor: getBgColor(),
    };
  },
);
