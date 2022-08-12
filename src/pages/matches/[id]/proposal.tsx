import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Dropdown, Item } from '@components/Dropdown';
import { SPORTS_TEXT } from '@constants/text';
import { Match } from '@interface/match';
import { Response } from '@interface/response';
import { Container, ColWrapper, TextArea, BoldOrangeB3, Anchor } from '@styles/common';
import { Team } from 'interface/team';

const changeTeamsToDropdownItems = (teams: Team[]) =>
  teams.map(({ id, name, sportsCategory }, idx) => ({ id: idx, text: name, value: { id, sportsCategory } }));

const Proposal: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [matchInfo, setMatchInfo] = useState<Match>();
  const [proposalData, setProposalData] = useState({ teamId: 0, content: '' });

  useEffect(() => {
    if (!router.isReady) return;
    const getMatchInfoApi = async () => {
      const res = await axiosAuthInstance.get<Response<Match>>(`/api/matches/${id as string}`);
      setMatchInfo(res.data.data);
      console.log(res.data.data);
      (async () => {
        setLoading(true);
        const {
          data: { data },
        } = await axiosAuthInstance.get<Response<Team[]>>('/api/teams/me/leader');
        setTeams(data.filter((item) => item.sportsCategory === res.data.data.sportsCategory));
        setLoading(false);
      })();
    };
    getMatchInfoApi();
  }, [id, router.isReady]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProposalData(() => ({ ...proposalData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    (async () => {
      const res = await axiosAuthInstance({
        method: 'POST',
        url: `/api/matches/${id as string}/proposals`,
        data: proposalData,
      });

      try {
        if (res.status === 200) {
          // TODO: 토스트 나중에 띄울 것
          alert(`[${matchInfo?.title as string}] 공고에 신청되었습니다!`);
          // TODO: 공고 신청 후에 매치 상세로 넘어가면 공고 상세 출력 안되는 버그 발생({"code":"C0004","message":"Runtime error"})
          router.push(`/matches/${id as string}`);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleSelect = (item: Item<{ id: number; sportsCategory: string }>) => {
    setProposalData({ ...proposalData, teamId: item.value.id });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper gap='16px'>
          {matchInfo?.matchType === 'TEAM_MATCH' ? (
            <>
              <Dropdown
                items={changeTeamsToDropdownItems(teams)}
                onSelect={handleSelect}
                placeholder='팀 선택'
                disabled={teams.length === 0}
              />
              {teams.length === 0 && (
                <>
                  <BoldOrangeB3>
                    {SPORTS_TEXT[matchInfo?.sportsCategory]} 팀이 없습니다. 새로운 팀을 만들어보세요.
                  </BoldOrangeB3>
                  <Link
                    href='/team/create'
                    passHref
                    replace
                  >
                    <Anchor>
                      <Button>새 팀 생성하기</Button>
                    </Anchor>
                  </Link>
                </>
              )}
            </>
          ) : (
            <div />
          )}
          <TextArea
            name='content'
            placeholder='요청 내용을 입력해주세요'
            onChange={handleChange}
          />
          <Button
            width='100%'
            disabled={matchInfo?.matchType === 'TEAM_MATCH' && teams.length === 0}
          >
            제출
          </Button>
        </ColWrapper>
      </form>
    </Container>
  );
};

export default Proposal;
