import { NextPage } from 'next';
import { useRouter } from 'next/router';

const DummyData = {
  id: 1,
  title: 'string',
  // TODO: 임의로 표시해 놨습니다. 상태가 어떤게 있는지 몰라서 이 부분에 따라 조건부 렌더링 수정해야합니다.
  status: 'DONE',
  sportsCategory: 'BADMINTON',
  author: {
    id: 1,
    nickname: '규범장',
  },
  team: {
    id: 0,
    name: 'string',
    sportsCategory: 'BADMINTON',
  },
  participants: 0,
  matchDate: '2022-08-04',
  matchType: 'TEAM_MATCH',
  content: 'string',
};

const MatchDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleClick = () => {
    if (id && DummyData.status === 'WAITING') {
      router.push(`${id.toString()}/proposal`);
    } else if (id) {
      router.push(`${id.toString()}/review`);
    }
  };
  return (
    <div style={{ width: '100%', top: '120px' }}>
      {/* TODO: Rebase 예정 승연님이 구현해둠 */}
      매치 상세 페이지
      {DummyData.status === 'DONE' ? (
        <button
          type='button'
          onClick={handleClick}
        >
          후기 작성하기
        </button>
      ) : (
        <button
          type='button'
          onClick={handleClick}
        >
          신청하기
        </button>
      )}
    </div>
  );
};

export default MatchDetailPage;
