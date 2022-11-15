import styled from '@emotion/styled';

export const ReviewItemWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
});

export const ReviewText = styled('span')(
  {
    fontSize: '14px',
  },
  ({ theme }) => ({
    color: theme.color.gray600,
  }),
);

export const ReviewCount = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b1,
}));
