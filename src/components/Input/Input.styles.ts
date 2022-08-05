import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 8px;
  height: ${({ height }) => height};
  font-size: ${(props) => props.theme.fontSize.b3};
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.b3};
    color: ${({ theme }) => theme.color.gray400};
  }
`;
