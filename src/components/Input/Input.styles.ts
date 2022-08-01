import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 8px;

  ::placeholder {
    color: ${({ theme }) => theme.color.gray500};
  }
`;
