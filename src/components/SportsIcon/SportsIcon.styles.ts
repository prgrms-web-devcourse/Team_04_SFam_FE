import styled from '@emotion/styled';

interface Props {
  fontSize?: number;
}

export const Wrapper = styled('div')<Props>(
  {
    fontSize: 21,
  },
  ({ fontSize }) => ({
    fontSize,
  }),
);
