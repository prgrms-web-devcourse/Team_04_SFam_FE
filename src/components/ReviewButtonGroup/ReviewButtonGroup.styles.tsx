import styled from '@emotion/styled';

interface Props {
  review: string;
}

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const BestWrapper = styled('div')<Props>(
  {
    '&:hover': {
      fontWeight: 'bold',
      opacity: 1,
    },
  },
  ({ review }) => ({
    opacity: review === 'BEST' ? 1 : 0.5,
    fontWeight: review === 'BEST' ? 'bold' : 'none',
  }),
);

export const LikeWrapper = styled('div')<Props>(
  {
    '&:hover': {
      fontWeight: 'bold',
      opacity: 1,
    },
  },
  ({ review }) => ({
    opacity: review === 'LIKE' ? 1 : 0.5,
    fontWeight: review === 'LIKE' ? 'bold' : 'none',
  }),
);

export const DislikeWrapper = styled('div')<Props>(
  {
    '&:hover': {
      fontWeight: 'bold',
      opacity: 1,
    },
  },
  ({ review }) => ({
    opacity: review === 'DISLIKE' ? 1 : 0.5,
    fontWeight: review === 'DISLIKE' ? 'bold' : 'none',
  }),
);
