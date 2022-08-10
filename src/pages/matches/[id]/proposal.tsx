import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Dropdown, Item } from '@components/Dropdown';
import { Match } from '@interface/match';
import { Response } from '@interface/response';
import { TeamInfo, Team } from '@interface/team';
import { Container, ColWrapper, TextArea } from '@styles/common';

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
    (async () => {
      setLoading(true);
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<Team[]>>('/api/teams/me/leader');

      setTeams(data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    const getMatchInfoApi = async () => {
      await axiosAuthInstance
        .get<Response<Match>>(`/api/matches/${id as string}`)
        .then((res) => setMatchInfo(res.data.data));
    };
    getMatchInfoApi();
  }, [id, router.isReady]);

  const handleSelect = (item: Item<{ id: number; sportsCategory: string }>) => {
    setProposalData({ ...proposalData, teamId: item.value.id });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProposalData(() => ({ ...proposalData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (matchInfo?.matchType === 'INDIVIDUAL_MATCH') {
      (async () => {
        const res = await axiosAuthInstance({
          method: 'POST',
          url: `/api/matches/${id as string}/proposals`,
          data: proposalData,
        });
        try {
          if (res.status === 200) {
            // TODO: 토스트 나중에 띄울 것
            alert(`[${matchInfo?.title}] 공고에 신청되었습니다!`);
            // TODO: 공고 신청 후에 매치 상세로 넘어가면 공고 상세 출력 안되는 버그 발생({"code":"C0004","message":"Runtime error"})
            router.push(`/matches/${id as string}`);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }

    if (matchInfo?.matchType === 'TEAM_MATCH' && proposalData.teamId === 0) {
      alert('팀을 선택하세요!');
      return;
    }

    (async () => {
      const {
        data: { data },
      } = await axiosAuthInstance.get<Response<TeamInfo>>(`/api/teams/${id as string}`);

      if (matchInfo?.matchType === 'TEAM_MATCH' && matchInfo?.participants !== data.members.length) {
        alert('참여 인원이 맞지 않습니다!');
      } else {
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
      }
    })();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper gap='16px'>
          {matchInfo?.matchType === 'TEAM_MATCH' ? (
            <Dropdown
              items={changeTeamsToDropdownItems(teams)}
              onSelect={handleSelect}
              placeholder='팀 선택'
            />
          ) : (
            <div />
          )}
          <TextArea
            name='content'
            placeholder='요청 내용을 입력해주세요'
            onChange={handleChange}
          />
          <Button width='100%'>제출</Button>
        </ColWrapper>
      </form>
    </Container>
  );
};

export default Proposal;
