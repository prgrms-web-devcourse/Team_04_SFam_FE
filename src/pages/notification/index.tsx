import { NextPage } from 'next';

import { NotificationListItem } from '@components/NotificationListItem';
import { ColWrapper, Container } from '@styles/common';

const NotificationPage: NextPage = () => (
  <Container>
    {/* TODO: API 연동 후 배열로 map해서 렌더링 필요 */}
    <ColWrapper gap='16px'>
      <NotificationListItem name='우주 최강 축구팀' />
      <NotificationListItem name='탁구왕 연승팀' />
    </ColWrapper>
  </Container>
);

export default NotificationPage;
