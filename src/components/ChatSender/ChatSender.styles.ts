import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const SenderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 130px;
  padding: 20px;
  border-radius: 30px;
  background-color: #1fab89;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100px;
  margin-bottom: 20px;
`;

export const ChatText = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: #fff;
`;
