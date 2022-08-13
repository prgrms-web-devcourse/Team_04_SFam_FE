import styled from '@emotion/styled';

export interface StyleProps {
  active?: boolean;
}

export const FilterButton = styled('button')<StyleProps>(
  {
    height: 32,
    outline: 'none',
    padding: '4px 12px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  ({ theme, active }) => ({
    fontSize: theme.fontSize.b3,
    backgroundColor: active ? theme.color.secondary : theme.color.background,
    color: active ? '#fff' : '#000',
    border: active ? `1px solid ${theme.color.secondary}` : `1px solid ${theme.color.gray200}`,
    borderRadius: theme.borderRadius,
  }),
);
