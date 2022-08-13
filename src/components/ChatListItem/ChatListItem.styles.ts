import styled from '@emotion/styled';

export const ChatListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 0;
  cursor: pointer;
`;

export const GrayB3 = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: ${(props) => props.theme.color.gray400};
`;
