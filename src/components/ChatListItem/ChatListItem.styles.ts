import styled from '@emotion/styled';

export const Container = styled('div')({
  display: 'flex',
  gap: '16px',
  cursor: 'pointer',
});

export const GrayB3 = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b3,
  color: theme.color.gray400,
}));
