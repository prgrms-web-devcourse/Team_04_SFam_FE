import React from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Dropdown, Item } from '@components/Dropdown';
import { Input } from '@components/Input';
import { DATE, MONTH, SPORTS_CATEGORY, YEAR } from '@constants/dropdown';
import {
  B3,
  ColWrapper,
  Container,
  DropdownWrapper,
  InnerWrapper,
  Label,
  RadioInput,
  RadioWrapper,
  RowWrapper,
  TextArea,
} from '@styles/common';

interface Team {
  id: number;
  name: string;
  sportsCategory: string;
}

interface SuccessResponse<T> {
  data: T;
}

interface RequestBody {
  title: string;
  matchDate: string;
  matchType: string;
  teamId?: number;
  partcipants: number;
  sportsCategory: string;
  content: string;
}

interface State {
  title: string;
  matchType: string;
  sportsCategory: string;
  teamId?: number;
  matchDate: string;
  participants: string;
  year: string;
  month: string;
  date: string;
  content: string;
}

const changeTeamsToDropdownItems = (teams: Team[]) =>
  teams.map(({ id, name, sportsCategory }, idx) => ({ id: idx, text: name, value: { id, sportsCategory } }));

const changeStateToRequestBody = (state: State) => {
  const requestBody = {
    title: state.title,
    matchType: state.matchType,
    sportsCategory: state.sportsCategory,
    matchDate: `${state.year}-${state.month}-${state.date}`,
    participants: +state.participants,
    content: state.content,
  };

  if (state.teamId) return { ...requestBody, teamId: state.teamId };
  return requestBody;
};

const PostForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [teams, setTeams] = React.useState<Team[]>([]);
  const [state, setState] = React.useState<State>({
    title: '',
    matchType: '',
    sportsCategory: '',
    matchDate: '',
    participants: '',
    year: '',
    month: '',
    date: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSelectSports = (item: Item<{ sportsCategory: string }>) => {
    const { sportsCategory } = item.value;
    setState({ ...state, sportsCategory });
  };

  const handleSelectTeam = (item: Item<{ id: number; sportsCategory: string }>) => {
    const { id, sportsCategory } = item.value;
    setState({ ...state, teamId: id, sportsCategory });
  };

  const handleSelectYear = (item: Item<{ year: string }>) => {
    const { year } = item.value;
    setState({ ...state, year });
  };

  const handleSelectMonth = (item: Item<{ month: string }>) => {
    const { month } = item.value;
    setState({ ...state, month });
  };

  const handleSelectDate = (item: Item<{ date: string }>) => {
    const { date } = item.value;
    setState({ ...state, date });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = changeStateToRequestBody(state);
    axiosAuthInstance.post<RequestBody>('/api/matches', data);
  };

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const {
        data: { data },
      } = await axiosAuthInstance.get<SuccessResponse<Team[]>>('/api/teams/me/leader');

      setTeams(data);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper gap='16px'>
          <Input
            type='text'
            name='title'
            placeholder='제목'
            value={state.title}
            onChange={handleChange}
            height='50px'
          />
          <RowWrapper>
            <RadioWrapper>
              <RadioInput
                type='radio'
                name='matchType'
                value='INDIVIDUAL_MATCH'
                onChange={handleChange}
              />
              <B3>개인전</B3>
            </RadioWrapper>
            <RadioWrapper>
              <RadioInput
                type='radio'
                name='matchType'
                value='TEAM_MATCH'
                onChange={handleChange}
              />
              <B3>팀전</B3>
            </RadioWrapper>
          </RowWrapper>
          {state.matchType === 'INDIVIDUAL_MATCH' && (
            <Dropdown
              items={SPORTS_CATEGORY}
              placeholder='종목 선택'
              onSelect={handleSelectSports}
            />
          )}
          {loading ||
            (state.matchType === 'TEAM_MATCH' && (
              <Dropdown
                items={changeTeamsToDropdownItems(teams)}
                placeholder='팀 선택'
                onSelect={handleSelectTeam}
              />
            ))}
          <Label>경기 일자</Label>
          <InnerWrapper justifyContent='space-between'>
            <DropdownWrapper width='150px'>
              <Dropdown
                items={YEAR}
                placeholder='년도'
                onSelect={handleSelectYear}
              />
            </DropdownWrapper>
            <DropdownWrapper width='100px'>
              <Dropdown
                items={MONTH}
                placeholder='월'
                onSelect={handleSelectMonth}
              />
            </DropdownWrapper>
            <DropdownWrapper width='100px'>
              <Dropdown
                items={DATE}
                placeholder='일'
                onSelect={handleSelectDate}
              />
            </DropdownWrapper>
          </InnerWrapper>
          <Label>경기 인원</Label>
          <Input
            type='text'
            name='participants'
            placeholder='경기 인원'
            value={state.participants}
            onChange={handleChange}
          />
          <TextArea
            name='content'
            placeholder='공고 내용'
            onChange={handleChange}
          />
          <InnerWrapper>
            <Button>작성 완료</Button>
          </InnerWrapper>
        </ColWrapper>
      </form>
    </Container>
  );
};

export default PostForm;
