import styled from '@emotion/styled';

export const Container = styled('div')(
  {
    width: '100%',
    minHeight: '100%',
    position: 'relative',
  },
  ({ theme }) => ({
    backgroundColor: theme.color.gray200,
  }),
);

export const Category = styled('div')(
  {
    position: 'sticky',
    top: 0,
    width: '100%',
    padding: '8px 16px',
    display: 'flex',
    gap: '8px',
    overflow: 'auto',
    whiteSpace: 'nowrap',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  ({ theme }) => ({
    backgroundColor: theme.color.background,
    borderBottom: `1px solid ${theme.color.gray200}`,
  }),
);

export const ListContainer = styled('div')(
  {
    padding: '8px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  ({ theme }) => ({
    backgroundColor: theme.color.gray200,
  }),
);

export const DropdownWrapper = styled('div')<{ width: string }>(({ width }) => ({
  width,
}));
