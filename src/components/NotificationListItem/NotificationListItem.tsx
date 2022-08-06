import { Avatar } from '@components/Avatar';
import { B1, B3, InnerWrapper } from '@styles/common';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './NotificationListItem.styles';

interface Props {
  name: string;
}

const NotificationListItem = ({ name }: Props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    // 여기서 어디로 가야하는건가
    <Link
      href={`/notification/${id as string}`}
      passHref
    >
      <S.NotificationListItemContainer>
        <div>
          <Avatar />
        </div>
        <InnerWrapper
          flexDirection='column'
          padding='0 16px'
          justifyContent='center'
        >
          <B1>{name}</B1>
          {/* TODO: 알림 타임에 따라 조건부 렌더링 */}
          <B3>{name}에서 회원님을 초대했습니다.</B3>
        </InnerWrapper>
      </S.NotificationListItemContainer>
    </Link>
  );
};

export default NotificationListItem;
