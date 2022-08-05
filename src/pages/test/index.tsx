import { axiosAuthInstance } from '@api/axiosInstances';
import { getCategoricalMatches } from '@recoil/match';
import { useEffect, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';

const MatchList = () => {
  const matches = useRecoilValueLoadable(getCategoricalMatches);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = () => {
    axiosAuthInstance({
      method: 'POST',
      url: '/api/users/signin',
      data: {
        username: 'test12',
        password: 'Qwer1234!',
      },
    });
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      <button
        type='button'
        onClick={handleLogin}
      >
        로그인
      </button>
      {!isLoading ? <div>{JSON.stringify(matches)}</div> : <div>loading</div>}
    </div>
  );
};

export default MatchList;
