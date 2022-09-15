import styled from '@emotion/styled';

export interface StyleProps {
  width: string;
  height: string;
  fontSize: string;
  backgroundColor?: string;
  round?: boolean;
  disabled?: boolean;
  outline?: boolean;
  noPointer?: boolean;
}

export const Button = styled('button')<StyleProps>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    outline: 'none',
    fontWeight: 600,
    color: '#fff',
    fontFamily: 'inherit',
  },
  ({ theme, width, height, fontSize, backgroundColor, round, disabled, outline, noPointer }) => {
    const getColor = () => {
      if (disabled) return theme.color.gray200;
      // FIXME: 컬러가 아닌 테마로(불린 값)으로 변경
      if (backgroundColor === 'primary') return theme.color.primary;
      if (backgroundColor === 'yellow') return theme.color.yellow;
      if (backgroundColor) return backgroundColor;
      return theme.color.secondary;
    };

    const getHoverColor = () => {
      if (disabled) return 'none';
      // FIXME: 컬러가 아닌 테마로(불린 값)으로 변경
      if (backgroundColor === 'primary') return theme.color.primaryHover;
      if (backgroundColor === 'yellow') return theme.color.yellow;
      if (backgroundColor) return backgroundColor;
      return theme.color.secondaryHover;
    };

    const getActiveColor = () => {
      if (disabled) return 'none';
      // FIXME: 컬러가 아닌 테마로(불린 값)으로 변경
      if (backgroundColor === 'primary') return theme.color.primaryActive;
      if (backgroundColor === 'yellow') return theme.color.yellow;
      if (backgroundColor) return backgroundColor;
      return theme.color.secondaryActive;
    };

    return {
      width,
      height,
      fontSize,
      borderRadius: round ? '50%' : theme.borderRadius,
      backgroundColor: outline ? '#fff' : getColor(),
      outline: outline ? `1px solid ${theme.color.gray300}` : 'none',
      color: outline ? theme.color.gray700 : '#fff',
      cursor: noPointer ? '' : 'pointer',
      '&:hover': {
        backgroundColor: outline ? theme.color.gray300 : getHoverColor(),
        color: '#fff',
      },
      '&:active': {
        backgroundColor: outline ? theme.color.gray400 : getActiveColor(),
        color: '#fff',
      },
    };
  },
);
