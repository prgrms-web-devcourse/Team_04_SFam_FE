import styled from '@emotion/styled';

export const ReviewButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    font-weight: bold;
    opacity: 1;
  }
  &:focus {
    font-weight: bold;
    opacity: 1;
  }
  &:active {
    font-weight: bold;
    opacity: 1;
  }
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
  padding: 8px;
`;
