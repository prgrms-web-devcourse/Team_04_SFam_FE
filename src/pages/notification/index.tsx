import { NotificationListItem } from '@components/NotificationListItem';
import { ColWrapper, Container } from '@styles/common';
import { NextPage } from 'next';

const NotificationPage: NextPage = () => (
  <Container>
    {/* TODO: API 연동 후 배열로 map해서 렌더링 필요 */}
    <ColWrapper>
      <NotificationListItem name='우주 최강 축구팀' />
      <NotificationListItem name='탁구왕 연승팀' />
    </ColWrapper>
  </Container>
);

export default NotificationPage;
