import styled from '@emotion/styled';

export interface StyleProps {
  width: string;
  height: string;
  fontSize: string;
  backgroundColor?: string;
  round?: boolean;
  disabled?: boolean;
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
  ({ theme, width, height, fontSize, backgroundColor, round, disabled }) => ({
    width,
    height,
    fontSize,
    borderRadius: round ? 24 : theme.borderRadius,
    backgroundColor: disabled ? theme.color.gray200 : backgroundColor || theme.color.secondary,
  }),
);
