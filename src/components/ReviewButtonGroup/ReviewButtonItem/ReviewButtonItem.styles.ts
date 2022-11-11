import styled from '@emotion/styled';

export const ReviewButton = styled('button')({
  border: 'none',
  backgroundColor: '#fff',
  cursor: 'pointer',
});

export const ReviewWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
});

export const ReviewText = styled('p')(
  {
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '8px',
  },
  ({ theme }) => ({
    color: theme.color.gray600,
  }),
);
