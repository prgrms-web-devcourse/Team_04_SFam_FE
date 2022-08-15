import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.span`
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: bold;
`;

export const SuggestionText = styled.span`
  font-size: ${(props) => props.theme.fontSize.b2};
  font-weight: bold;
`;
