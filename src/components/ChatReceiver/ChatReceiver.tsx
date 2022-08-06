import { CgProfile } from 'react-icons/cg';
import { B3, GrayB3, InnerWrapper } from '@styles/common';
import { Paragraph } from '@components/Paragraph';
import * as S from './ChatReceiver.styles';

const ChatReceiver = () => {
  console.log('');
  // TODO: API 연동한 데이터 props로 넘겨줄 것
  return (
    <InnerWrapper>
      <CgProfile size='42px' />
      <S.ReceiverWrapper>
        <B3>정기홍 님이 대화를 수락했어요!! 대화를 시작해보세요!</B3>
      </S.ReceiverWrapper>
      <S.TimeWrapper>
        <GrayB3>오전 10:10</GrayB3>
      </S.TimeWrapper>
    </InnerWrapper>
  );
};

export default ChatReceiver;
