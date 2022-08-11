import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const MessageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ReceiverWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #e6e6e6;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100px;
  margin-bottom: 5px;
`;

export const ChatText = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: #000;
`;
export const ProfileText = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: #000;
  padding: 8px 0 8px 0;
`;
