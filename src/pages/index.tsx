import { axiosAuthInstance } from '@api/axiosInstances';

const HomePage = () => {
  const handleClick = () => {
    axiosAuthInstance({
      method: 'POST',
      url: '/api/users/signin',
      data: {
        username: 'test12',
        password: 'Qwer1234!',
      },
    });
  };

  return (
    <button
      type='button'
      onClick={handleClick}
    >
      로그인
    </button>
  );
};

export default HomePage;
