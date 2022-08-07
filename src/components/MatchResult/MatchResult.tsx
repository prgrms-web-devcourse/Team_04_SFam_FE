import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';

import * as S from './MatchResult.styles';

const MatchResult = () => {
  const [select, setSelect] = useState('');
  const router = useRouter();
  const { id } = router.query;
  const results = [
    { id: 1, text: '승리', value: 'WIN' },
    { id: 2, text: '패배', value: 'LOSE' },
    { id: 3, text: '무승부', value: 'DRAW' },
  ];
  const handleResult = (e: React.MouseEvent<HTMLElement>, value: string) => {
    if (select === value) {
      setSelect('');
    } else {
      setSelect(value);
    }
  };
  const handleSubmit = () => {
    try {
      const fetch = async () => {
        const res = await axiosAuthInstance({
          method: 'post',
          url: `/api/matches/${id as string}/records`,
          data: {
            proposalId: id,
            result: select,
          },
        });
        console.log(res);
      };
      fetch();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <S.Container>
      {results.map((result) => (
        <S.ButtonContainer
          width=''
          height='45px'
          fontSize='20px'
          key={result.id}
          color={select === result.value ? 'select' : ''}
          onClick={(e) => handleResult(e, result.value)}
        >
          {result.text}
        </S.ButtonContainer>
      ))}
      <Link
        href={`/matches/${id as string}/review`}
        passHref
      >
        <S.SubmitBtn
          onClick={handleSubmit}
          fontSize='20px'
          width=''
          height='45px'
        >
          제출
        </S.SubmitBtn>
      </Link>
    </S.Container>
  );
};

export default MatchResult;
