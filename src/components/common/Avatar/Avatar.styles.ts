import styled from '@emotion/styled';

interface Props {
  block: boolean;
  imgSrc: string;
  imgSize: string;
  borderRadius: string;
}

export const ImageWrapper = styled('div')<Props>(
  {
    position: 'relative',
    overflow: 'hidden',
    '> img': {
      transition: 'opacity 0.3s ease-out',
      objectFit: 'cover',
    },
  },
  ({ block, imgSize, imgSrc, theme, borderRadius }) => ({
    display: block ? 'block' : 'inline-block',
    width: imgSize,
    height: imgSize,
    border: `1px solid ${theme.color.gray200}`,
    'border-radius': (borderRadius && borderRadius) || '8px',
    'background-color': imgSrc ? 'none' : theme.color.green200,
  }),
);

export const Container = styled('div')({
  position: 'relative',
  cursor: 'pointer',
});

export const IconBadgeWrapper = styled('div')(
  {
    width: '30px',
    height: '30px',
    position: 'absolute',
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  ({ theme }) => ({
    backgroundColor: theme.color.secondary,
    '&:hover': {
      backgroundColor: theme.color.secondaryHover,
    },
    '&:active': {
      backgroundColor: theme.color.secondaryActive,
    },
  }),
);
