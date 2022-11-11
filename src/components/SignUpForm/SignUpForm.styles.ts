import styled from '@emotion/styled';

export const StrongText = styled('span')(
  {
    fontWeight: 'bold',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.b3,
    color: theme.color.secondary,
  }),
);

export const ErrorText = styled('div')(({ theme }) => ({
  color: theme.color.primary,
}));
