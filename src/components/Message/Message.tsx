import { ChangeEvent, Dispatch, KeyboardEventHandler, MouseEventHandler, SetStateAction, useState } from 'react';
import { MdSend } from 'react-icons/md';

import { MessageReq } from '@interface/chat';
import { Container, InnerWrapper, MessageInput, ResetBtn } from '@styles/common';

interface Props {
  message: MessageReq;
  setMessage: Dispatch<SetStateAction<MessageReq>>;
  handleMessage: MouseEventHandler<HTMLButtonElement>;
  handleKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const Message = ({ message, setMessage, handleMessage, handleKeyPress, disabled }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessage({ ...message, content: value });
  };

  return (
    <Container>
      <InnerWrapper
        alignItems='center'
        justifyContent='center'
      >
        <MessageInput
          placeholder='메시지 보내기'
          value={message.content}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <ResetBtn
          disabled={disabled}
          type='button'
          onClick={handleMessage}
        >
          <MdSend size='25px' />
        </ResetBtn>
      </InnerWrapper>
    </Container>
  );
};

export default Message;
