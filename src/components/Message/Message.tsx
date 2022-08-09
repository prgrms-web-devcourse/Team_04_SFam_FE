import { ChangeEvent, useState } from 'react';
import { MdSend } from 'react-icons/md';

import { Container, InnerWrapper, MessageInput } from '@styles/common';

const Message = () => {
  const [text, setText] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    // TODO: API 호출 (text 사용해서 보내면 됩니다.)
  };
  return (
    <Container>
      <InnerWrapper
        alignItems='center'
        justifyContent='center'
      >
        <MessageInput
          placeholder='메시지 보내기'
          onChange={handleChange}
        />
        <MdSend
          size='25px'
          onClick={handleClick}
        />
      </InnerWrapper>
    </Container>
  );
};

export default Message;
