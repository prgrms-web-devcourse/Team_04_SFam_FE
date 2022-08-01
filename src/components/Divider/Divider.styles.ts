import styled from '@emotion/styled';

interface Props {
  width?: string;
}

const Divider = styled.hr<Props>`
  display: block;
  height: 1px;
  border: 0;
  background-color: #ced4da;
  width: ${({ width }) => width};
`;

export default Divider;
