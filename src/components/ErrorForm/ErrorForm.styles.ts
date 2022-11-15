import styled from '@emotion/styled';

export const Container = styled('div')({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ErrorText = styled('span')(
  {
    fontWeight: 'bold',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.h1,
  }),
);

export const SuggestionText = styled('span')(
  {
    fontWeight: 'bold',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.b2,
  }),
);
