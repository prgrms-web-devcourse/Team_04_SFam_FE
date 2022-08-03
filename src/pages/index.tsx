import { MatchList } from '@components/MatchList';
import styled from '@emotion/styled';

// 이 부분은 header와 navigation컴포넌트 개발 후 수정하겠습니다.

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
  background-color: yellow;
`;

const Navi = styled.div`
  width: 100%;
  bottom: 0;
  height: 70px;
  position: fixed;
  border-top: 1px solid black;
  background-color: yellow;
`;

const Home = () => (
  <div>
    <Header>헤더 자리</Header>
    <MatchList />
    <Navi>네비게이션 자리</Navi>
  </div>
);

export default Home;
