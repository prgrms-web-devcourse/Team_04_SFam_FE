import Link from 'next/link';

import { Avatar } from '@components/Avatar';
import { B1, GrayB3, InnerWrapper } from '@styles/common';

import * as S from './NotificationListItem.styles';

interface Props {
  name: string;
  invitationId: number;
  teamId: number;
  imgSrc?: string;
}

const NotificationListItem = ({ name, invitationId, teamId, imgSrc }: Props) => (
  <Link
    href={`/notification/${invitationId}/${teamId}`}
    passHref
  >
    <S.NotificationListItemContainer>
      <div>
        <Avatar
          imgSrc={imgSrc}
          imgSize='60px'
          borderRadius='50%'
        />
      </div>
      <InnerWrapper
        flexDirection='column'
        padding='0 16px'
        justifyContent='center'
      >
        <B1>{name}</B1>
        {/* TODO: 알림 타임에 따라 조건부 렌더링 */}
        <GrayB3>{name}에서 회원님을 초대했습니다.</GrayB3>
      </InnerWrapper>
    </S.NotificationListItemContainer>
  </Link>
);

export default NotificationListItem;
