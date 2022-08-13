import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
`;

export const GrayB3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: ${(props) => props.theme.color.gray400};
`;
