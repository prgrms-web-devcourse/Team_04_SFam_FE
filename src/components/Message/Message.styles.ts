import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 56px;
  width: 100%;
  padding: 12px 16px;
  border-top: ${(props) => `1px solid ${props.theme.color.gray200}`};
  background-color: #fff;
`;
