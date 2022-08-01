import styled from '@emotion/styled';

export const StrongText = styled.span`
  color: ${({ theme }) => theme.color.green200};
  font-weight: bold;
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.color.primary};
`;
