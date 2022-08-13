import styled from '@emotion/styled';

export const ReviewButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const ReviewText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color.gray600};
  font-weight: bold;
  padding: 8px;
`;
