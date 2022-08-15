import styled from '@emotion/styled';

export const ReviewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ReviewText = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.color.gray600};
`;

export const ReviewCount = styled.span`
  font-size: ${(props) => props.theme.fontSize.b1};
`;
