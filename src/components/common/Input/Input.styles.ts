import styled from '@emotion/styled';

export const Input = styled('input')(
  {
    width: '100%',
    padding: '8px',
    fontFamily: 'inherit',
  },
  ({ theme, height }) => ({
    border: `1px solid ${theme.color.gray300}`,
    borderRadius: theme.borderRadius,
    height,
    fontSize: theme.fontSize.b3,
    '::placeholder': {
      fontSize: theme.fontSize.b3,
      color: theme.color.gray400,
    },
  }),
);
