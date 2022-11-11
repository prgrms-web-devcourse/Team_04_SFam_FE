import styled from '@emotion/styled';

export const Container = styled('div')(
  {
    position: 'absolute',
    left: 0,
    bottom: '56px',
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#fff',
  },
  ({ theme }) => ({
    borderTop: `1px solid ${theme.color.gray200}`,
  }),
);
