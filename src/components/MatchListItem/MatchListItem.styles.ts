import styled from '@emotion/styled';

export const Container = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '120px',
    padding: '0 16px',
    cursor: 'pointer',
  },
  ({ theme }) => ({
    backgroundColor: theme.color.background,
  }),
);

export const Description = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const TitleWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Title = styled('div')({
  fontSize: '20px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const Content = styled('div')({
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
