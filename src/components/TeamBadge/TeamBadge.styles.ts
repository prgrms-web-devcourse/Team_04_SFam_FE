import styled from '@emotion/styled';

export const BadgeInner = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  cursor: 'pointer',
});

export const IconWrapper = styled('div')({
  paddingRight: '4px',
});

export const BadgeText = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.b3,
}));
