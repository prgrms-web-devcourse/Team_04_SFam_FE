import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
  padding: 10px;
  border-radius: 8px;
  background-color: #1fab89;
  max-width: 200px;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100px;
  margin-bottom: 4px;
`;

export const ChatText = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
  color: #fff;
`;
