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
    cursor: 'pointer',
  },
  ({ theme }) => ({
    border: `1px solid ${theme.color.gray300}`,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.color.background,
  }),
);

export const RoundSelectedItem = styled(SelectedItem)<{ text: string }>(
  {
    height: '32px',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0 6px 0 12px',
  },
  ({ theme, text }) => {
    switch (text) {
      case '모집 중':
        return { backgroundColor: theme.color.yellow };
      case '모집 완료':
        return { backgroundColor: theme.color.secondary };
      case '경기 완료':
        return { backgroundColor: theme.color.primary };
      default:
        return { backgroundColor: theme.color.background };
    }
  },
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
    cursor: 'pointer',
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
