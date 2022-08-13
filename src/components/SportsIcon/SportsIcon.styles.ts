import styled from '@emotion/styled';

interface Props {
  size?: number;
}

export const Wrapper = styled('div')<Props>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({ size }) => ({
    fontSize: size,
    width: size,
    height: size,
  }),
);
