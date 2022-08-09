import styled from '@emotion/styled';

export interface StyleProps {
  active?: boolean;
}

export const FilterButton = styled('button')<StyleProps>(
  {
    outline: 'none',
    padding: '4px 12px',
  },
  ({ theme, active }) => ({
    border: active ? 'none' : `1px solid ${theme.color.gray200}`,
    fontSize: theme.fontSize.b3,
    backgroundColor: active ? theme.color.secondary : theme.color.background,
    color: active ? '#fff' : '#000',
    borderRadius: theme.borderRadius,
  }),
);
