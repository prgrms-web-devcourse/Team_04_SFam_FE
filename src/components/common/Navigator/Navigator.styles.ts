import styled from '@emotion/styled';

export const Container = styled('div')(
  {
    width: '100%',
    height: '56px',
    position: 'absolute',
    bottom: 0,
  },
  ({ theme }) => ({
    borderTop: `1px solid ${theme.color.gray200}`,
    backgroundColor: theme.color.background,
  }),
);

export const Nav = styled('ul')({
  display: 'flex',
  height: '100%',
});

export const NavItem = styled('li')(
  {
    width: '20%',
  },
  ({ theme }) => ({
    '&:hover': {
      backgroundColor: theme.color.gray100,
    },
  }),
);

export const Anchor = styled('a')(
  {
    width: '100%',
    height: '100%',
    display: 'flex',
    paddingTop: '4px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2px',
    color: 'black',
    textDecoration: 'none',
  },
  ({ theme }) => ({
    span: {
      ':first-of-type': {
        fontSize: theme.fontSize.b1,
      },
      ':last-of-type': {
        fontSize: theme.fontSize.b4,
      },
    },
  }),
);
