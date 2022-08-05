import styled from '@emotion/styled';

export const Wrapper = styled('div')({
  position: 'relative',
});

export const SelectedItem = styled('div')(
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  ({ theme }) => ({
    border: `1px solid ${theme.color.gray300}`,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.color.background,
  }),
);

export const RoundSelectedItem = styled(SelectedItem)(
  {
    color: '#fff',
    border: 'none',
    borderRadius: '24px',
    padding: '6px 12px',
  },
  ({ theme }) => ({
    backgroundColor: theme.color.secondary,
  }),
);

export const Text = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b3,
}));

export const TextWhite = styled('span')({ color: '#fff' });

export const TextGray = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b3,
  color: theme.color.gray300,
}));

export const List = styled('ul')(
  {
    width: '100%',
    position: 'absolute',
    zIndex: 10,
    overflow: 'auto',
    maxHeight: '200px',
  },
  ({ theme }) => ({
    border: `1px solid  ${theme.color.gray300}`,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.color.background,
  }),
);

export const ListItem = styled('li')(
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '8px',
  },
  ({ theme }) => ({
    backgroundColor: theme.color.background,
    ':not(:last-of-type)': {
      borderBottom: `1px solid ${theme.color.gray300}`,
    },
    ':active': {
      backgroundColor: theme.color.gray200,
    },
  }),
);
