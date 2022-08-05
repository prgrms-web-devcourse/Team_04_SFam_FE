import { NextPage } from 'next';
import { useRouter } from 'next/router';

const MatchDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleClick = () => {
    if (id) {
      router.push(`${id.toString()}/proposal`);
    }
  };
  return (
    <div style={{ width: '100%', top: '120px' }}>
      {/* TODO: Rebase 예정 승연님이 구현해둠 */}
      매치 상세 페이지
      <button
        type='button'
        onClick={handleClick}
      >
        신청하기
      </button>
    </div>
  );
};

export default MatchDetailPage;
