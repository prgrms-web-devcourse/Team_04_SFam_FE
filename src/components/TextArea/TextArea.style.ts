import styled from '@emotion/styled';

export const TextAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.green100};
  border-radius: ${(props) => props.theme.borderRadius};
  word-break: keep-all;
  margin: 20px;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.color.gray700};
  font-size: ${(props) => props.theme.fontSize.b2};
  font-weight: bold;
  padding: 20px;
`;
