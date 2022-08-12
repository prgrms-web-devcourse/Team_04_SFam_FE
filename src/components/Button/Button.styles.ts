import styled from '@emotion/styled';
import { MdBrightness1 } from 'react-icons/md';

export interface StyleProps {
  width: string;
  height: string;
  fontSize: string;
  backgroundColor?: string;
  round?: boolean;
  disabled?: boolean;
  outline?: boolean;
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
  },
  ({ theme, width, height, fontSize, backgroundColor, round, disabled, outline }) => {
    const getColor = () => {
      if (disabled) return theme.color.gray200;
      // FIXME: 컬러가 아닌 테마로(불린 값)으로 변경
      if (backgroundColor === 'primary') return theme.color.primary;
      if (backgroundColor === 'yellow') return theme.color.yellow;
      if (backgroundColor) return backgroundColor;
      return theme.color.secondary;
    };

    const getHoverColor = () => {
      if (disabled) return theme.color.gray300;
      // FIXME: 컬러가 아닌 테마로(불린 값)으로 변경
      if (backgroundColor === 'primary') return theme.color.primaryHover;
      if (backgroundColor === 'yellow') return theme.color.yellow;
      if (backgroundColor) return backgroundColor;
      return theme.color.secondaryHover;
    };

    const getActiveColor = () => {
      if (disabled) return theme.color.gray400;
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
      borderRadius: round ? 24 : theme.borderRadius,
      backgroundColor: outline ? '#fff' : getColor(),
      outline: outline ? `1px solid ${theme.color.gray300}` : 'none',
      color: outline ? `${theme.color.gray700}` : '#fff',
      '&:hover': {
        backgroundColor: getHoverColor(),
      },
      '&:active': {
        backgroundColor: getActiveColor(),
      },
    };
  },
);
