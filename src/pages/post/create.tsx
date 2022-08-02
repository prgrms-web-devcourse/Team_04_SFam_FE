import { axiosAuthInstance } from '@api/axiosInstances';

const MatchPostCreatePage = () => {
  const handleClick = () => {
    axiosAuthInstance({
      method: 'POST',
      url: '/api/matches',
      data: {
        title: '타이틀 1',
        matchDate: '2022-08-04',
        matchType: 'INDIVIDUAL_MATCH',
        participants: 1,
        sportsCategory: 'BADMINTON',
        content: '컨텐트 1',
      },
    });
  };

  const handleClickTwo = () => {
    axiosAuthInstance({
      method: 'GET',
      url: '/api/teams/me/leader',
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div>MatchPost</div>
      <button
        type='button'
        onClick={handleClick}
      >
        매칭 게시글 작성
      </button>
      <button
        type='button'
        onClick={handleClickTwo}
      >
        내가 리더인 팀 조회
      </button>
    </>
  );
};

export default MatchPostCreatePage;
