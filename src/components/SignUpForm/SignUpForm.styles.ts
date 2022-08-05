import styled from '@emotion/styled';

export const StrongText = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: ${(props) => props.theme.color.secondary};
  font-weight: bold;
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.color.primary};
`;
