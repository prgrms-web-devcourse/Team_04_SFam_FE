import React from 'react';

import { useRouter } from 'next/router';

import { Button } from '@components/common/Button';
import { Navigator } from '@components/common/Navigator';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Heading } from '@components/Heading';
import { ProposalInfo, Response } from 'types';

import * as S from './MatchResult.styles';

const results = [
  { id: 1, text: '승리', value: 'WIN' },
  { id: 2, text: '무승부', value: 'DRAW' },
  { id: 3, text: '패배', value: 'LOSE' },
];

const MatchResult = () => {
  const router = useRouter();
  const { id, proposalId } = router.query;

  const [loading, setLoading] = React.useState(true);
  const [select, setSelect] = React.useState('');

  const handleResult = (e: React.MouseEvent<HTMLElement>, value: string) => {
    if (select === value) {
      setSelect('');
    } else {
      setSelect(value);
    }
  };

  const handleSubmit = () => {
    if (!select) {
      // TODO: 변경 예정
      alert('경기 결과 선택 후 제출해주세요.');
      return;
    }
    try {
      const fetch = async () => {
        const res = await axiosAuthInstance({
          method: 'post',
          url: `/api/matches/${id as string}/records`,
          data: {
            proposalId,
            result: select,
          },
        });
        if (res.status === 200) {
          await router.replace({
            pathname: `/matches/${id as string}/review`,
            query: { proposalId },
          });
        }
      };
      fetch();
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    if (!router.isReady) return;

    const getProposal = async () => {
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<ProposalInfo>>(`/api/matches/proposals/${proposalId as string}`);

      if (!data.isMatchAuthor) {
        await router.replace({
          pathname: `/matches/${id as string}/review`,
          query: { proposalId },
        });
      }

      if (data.status === 'FIXED') {
        await router.replace({
          pathname: `/matches/${id as string}/review`,
          query: { proposalId },
        });
      }
    };

    (async () => {
      await getProposal();
      setLoading(false);
    })();
  }, [router.isReady]);

  if (loading) return null;
  return (
    <>
      <Heading />
      <S.Container>
        <S.ButtonContainer>
          {results.map((result) => (
            <S.Button
              result={result.value}
              key={result.id}
              selected={select === result.value}
              onClick={(e) => handleResult(e, result.value)}
            >
              {result.text}
            </S.Button>
          ))}
        </S.ButtonContainer>
        <Button
          onClick={handleSubmit}
          fontSize='20px'
          width='auto'
          height='40px'
        >
          제출
        </Button>
      </S.Container>
      <Navigator />
    </>
  );
};

export default MatchResult;
