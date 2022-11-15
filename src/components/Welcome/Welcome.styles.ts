import styled from '@emotion/styled';

export const Container = styled('div')({
  padding: '0 20px',
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const ImageWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const ButtonWrapper = styled('div')({
  paddingTop: '80px',
  width: '100%',
});

export const Title = styled('span')(
  {
    fontWeight: 'bold',
    lineHeight: 2.5,
  },
  ({ theme }) => ({ fontSize: theme.fontSize.h1 }),
);

export const Paragraph = styled('span')(
  {
    lineHeight: 1.5,
    textAlign: 'center',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.b2,
  }),
);
