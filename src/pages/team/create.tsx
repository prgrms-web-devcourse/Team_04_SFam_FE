import { axiosAuthInstance } from '@api/axiosInstances';
import { NextPage } from 'next';

const TeamCreatePage: NextPage = () => {
  const handleClick = () => {
    const createTeam = async () => {
      const res = await axiosAuthInstance({
        method: 'POST',
        url: '/api/teams',
        data: {
          name: '팀 테스트 1',
          description: '팀 테스트 1 소개',
          sportsCategory: 'BADMINTON',
        },
      });

      console.log(res);
    };

    createTeam();
  };

  return (
    <button
      type='button'
      onClick={handleClick}
    >
      팀 생성
    </button>
  );
};

export default TeamCreatePage;
