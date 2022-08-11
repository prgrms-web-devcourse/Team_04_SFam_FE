import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Dropdown, Item } from '@components/Dropdown';
import { Paragraph } from '@components/Paragraph';
import { MATCH_STATUS_DETAIL } from '@constants/dropdown';
import { MATCH_STATUS_TEXT, MATCH_TYPE_TEXT, SPORTS_TEXT } from '@constants/text';
import { Proposer } from '@interface/match';
import { Response } from '@interface/response';
import { userState } from '@recoil/atoms';
import { Anchor, InnerWrapper, RowWrapper } from '@styles/common';

import * as S from './MatchDetail.styles';
import { MatchDetail } from './types';

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user] = useRecoilState(userState);
  const [matchDetail, setMatchDetail] = React.useState<MatchDetail>();
  const [status, setStatus] = React.useState('');
  const [isAuthor, setIsAuthor] = React.useState(false);
  const [proposer, setProposal] = React.useState<Proposer | null>();

  const handleSelect = (item: Item<{ status: string }>) => {
    axiosAuthInstance.patch(`/api/matches/${id as string}`, {
      status: item.value.status,
    });
  };

  React.useEffect(() => {
    if (!router.isReady) return;
    try {
      (async () => {
        const {
          data: { data },
        } = await axiosAuthInstance.get<Response<MatchDetail>>(`/api/matches/${id as string}`);
        setMatchDetail(data);
        setIsAuthor(data.author.id === user.id);
        setStatus(data.status);
        setProposal(data.proposer);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [router.isReady]);

  return (
    <S.Container>
      <RowWrapper
        justifyContent='space-between'
        alignItems='center'
      >
        <S.Title>{matchDetail?.title}</S.Title>
        <Dropdown
          round
          placeholder={MATCH_STATUS_TEXT[status]}
          disabled={!isAuthor}
          items={MATCH_STATUS_DETAIL}
          onSelect={handleSelect}
        />
      </RowWrapper>
      <S.Info>
        <S.Detail>
          <S.DetailTitle>종목 </S.DetailTitle>
          <S.DetailItem>{SPORTS_TEXT[matchDetail?.sportsCategory as string]} </S.DetailItem>
        </S.Detail>
        <S.Detail>
          <S.DetailTitle>개인전/팀전 </S.DetailTitle>
          <S.DetailItem>{MATCH_TYPE_TEXT[matchDetail?.matchType as string]} </S.DetailItem>
        </S.Detail>
        {matchDetail?.team && (
          <InnerWrapper
            alignItems='center'
            justifyContent='space-between'
          >
            <S.Detail>
              <S.DetailTitle>팀명 </S.DetailTitle>
              <S.DetailItem>{matchDetail?.team?.name} </S.DetailItem>
            </S.Detail>
            <Link
              href={`/team/${matchDetail.team.id}`}
              passHref
            >
              <Anchor>팀 정보 보러 가기</Anchor>
            </Link>
          </InnerWrapper>
        )}
        <S.Detail>
          <S.DetailTitle>경기일자 </S.DetailTitle>
          <S.DetailItem>{matchDetail?.matchDate} </S.DetailItem>
        </S.Detail>
      </S.Info>
      <RowWrapper>
        <Paragraph width='100%'>{matchDetail?.content}</Paragraph>
      </RowWrapper>
      {isAuthor && (
        <Link
          href={`/matches/${id as string}/chatlist`}
          passHref
        >
          <Anchor>
            <Button>채팅 목록</Button>
          </Anchor>
        </Link>
      )}
      {!isAuthor &&
        status === 'WAITING' &&
        (proposer && proposer.status === 'APPROVED' ? (
          <Link
            href={`/matches/${id as string}/chatlist/${proposer.id}`}
            passHref
          >
            <Anchor>
              <Button>채팅 하기</Button>
            </Anchor>
          </Link>
        ) : (
          <Link
            href={`/matches/${id as string}/proposal`}
            passHref
          >
            <Anchor>
              <Button>신청하기</Button>
            </Anchor>
          </Link>
        ))}
    </S.Container>
  );
};

export default PostDetail;
