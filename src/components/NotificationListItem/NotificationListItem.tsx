import Link from 'next/link';

import { Avatar } from '@components/Avatar';
import { Anchor, B1, GrayB3, InnerWrapper } from '@styles/common';

interface Props {
  name: string;
  invitationId: number;
  teamId: number;
  imgSrc?: string | null;
}

const NotificationListItem = ({ name, invitationId, teamId, imgSrc }: Props) => (
  <Link
    href={`/notification/${invitationId}/${teamId}`}
    passHref
  >
    <Anchor>
      <InnerWrapper gap='16px'>
        <div>
          {imgSrc === null ? (
            <Avatar imgSize='64px' />
          ) : (
            <Avatar
              imgSrc={imgSrc as string}
              imgSize='64px'
            />
          )}
        </div>
        <InnerWrapper
          flexDirection='column'
          justifyContent='center'
        >
          <B1>{name}</B1>
          {/* TODO: 알림 타임에 따라 조건부 렌더링 */}
          <GrayB3>{name}에서 회원님을 초대했습니다.</GrayB3>
        </InnerWrapper>
      </InnerWrapper>
    </Anchor>
  </Link>
);

export default NotificationListItem;
