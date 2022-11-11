import styled from '@emotion/styled';

interface Props {
  pointer?: boolean;
}

export const HeadingContainer = styled('div')(
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    height: '64px',
    top: 0,
    left: 0,
    right: 0,
    padding: '1rem',
    zIndex: 1,
  },
  ({ theme }) => ({
    backgroundColor: theme.color.background,
    borderBottom: `1px solid ${theme.color.gray200}`,
  }),
);

export const HeadingTitle = styled('h1')<Props>(
  {
    fontWeight: 'bold',
  },
  ({ theme, pointer }) => ({
    fontSize: theme.fontSize.b1,
    cursor: pointer ? 'pointer' : 'none',
  }),
);

export const MyMatch = styled('div')(
  {
    cursor: 'pointer',
  },
  ({ theme }) => ({
    fontSize: theme.fontSize.b3,
  }),
);
