import styled from '@emotion/styled';

export const ReviewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const ReviewText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color.gray600};
  padding: 8px;
`;

export const ReviewCount = styled.span`
  font-size: ${(props) => props.theme.fontSize.b1};
`;
