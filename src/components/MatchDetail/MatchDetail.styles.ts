import styled from '@emotion/styled';

export const Container = styled('div')({
  padding: '16px 24px',
});

export const Description = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Title = styled('span')({
  fontSize: '28px',
});

export const DetailItem = styled('span')({
  fontSize: '16px',
  fontWeight: 'bold',
});

export const DetailTitle = styled('span')({
  fontSize: '16px',
});

export const Message = styled('div')(
  {
    textAlign: 'center',
  },
  ({ theme }) => ({
    color: theme.color.gray400,
  }),
);

export const StatusWrapper = styled('div')({
  position: 'absolute',
  top: 0,
  right: 0,
});
