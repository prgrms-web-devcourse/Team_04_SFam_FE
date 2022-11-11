import styled from '@emotion/styled';

export const Container = styled('div')({
  padding: '50px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Button = styled('button')<{ result: string; selected: boolean }>(
  {
    width: '30%',
    height: '100px',
    fontSize: '20px',
    outline: 'none',
    transition: 'ease-in-out 0.2s',
    cursor: 'pointer',
  },
  ({ theme, result, selected }) => ({
    color: selected ? '#fff' : '#000',
    border: `1px solid ${theme.color.gray200}`,
    borderRadius: theme.borderRadius,
  }),
  // FIXME
  // backgroundColor: ${({ theme, result, selected }) => {
  //   if (selected) {
  //     if (result === 'WIN') {
  //       return theme.color.secondary,
  //     }
  //     if (result === 'LOSE') {
  //       return theme.color.primary,
  //     }
  //     if (result === 'DRAW') {
  //       return theme.color.gray400,
  //     }
  //   }
  //   return theme.color.background,
  // }},

  // FIXME
  // &:hover {
  //   backgroundColor: ${({ theme, result }) => {
  //     if (result === 'WIN') {
  //       return theme.color.secondary,
  //     }
  //     if (result === 'LOSE') {
  //       return theme.color.primary,
  //     }
  //     if (result === 'DRAW') {
  //       return theme.color.gray400,
  //     }
  //     return theme.color.background,
  //   }},
  //   border: none,
  //   color: #fff,
  //   transform: scale(1.1),
  // }
);
