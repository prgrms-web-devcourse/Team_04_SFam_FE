import styled from '@emotion/styled';

export interface StyleProps {
  width: string;
  height: string;
  fontSize: string;
  backgroundColor?: string;
  round?: boolean;
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
  ({ theme, width, height, fontSize, backgroundColor, round }) => ({
    width,
    height,
    fontSize,
    borderRadius: round ? 24 : theme.borderRadius,
    backgroundColor: backgroundColor || theme.color.secondary,
  }),
);
