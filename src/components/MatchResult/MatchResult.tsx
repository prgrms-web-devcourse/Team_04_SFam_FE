import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './MatchResult.styles';

const MatchResult = () => {
  const [select, setSelect] = useState('');
  const router = useRouter();
  const { id } = router.query;
  const results = [
    { id: 1, text: '승리' },
    { id: 2, text: '패배' },
    { id: 3, text: '무승부' },
  ];
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const value = e.target as HTMLElement;
    const { innerText } = value;
    if (select === innerText) {
      setSelect('');
    } else {
      setSelect(innerText);
    }
  };
  return (
    <S.Container>
      {results.map((result) => (
        <S.ButtonContainer
          key={result.id}
          color={select === result.text ? 'select' : ''}
          onClick={onClick}
        >
          {result.text}
        </S.ButtonContainer>
      ))}
      <Link
        href={`/matches/${id as string}/review`}
        passHref
      >
        <S.SubmitBtn>제출</S.SubmitBtn>
      </Link>
    </S.Container>
  );
};

export default MatchResult;
