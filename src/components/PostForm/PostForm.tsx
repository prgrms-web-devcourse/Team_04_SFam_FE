import React from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Dropdown, Item } from '@components/Dropdown';
import { Input } from '@components/Input';
import { SPORTS_CATEGORY } from '@constants/sports';
import { DATE, MONTH, YEAR } from '@constants/date';

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
  year: number;
  month: number;
  date: number;
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
    year: 0,
    month: 0,
    date: 0,
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

  const handleSelectYear = (item: Item<{ year: number }>) => {
    const { year } = item.value;
    setState({ ...state, year });
  };

  const handleSelectMonth = (item: Item<{ month: number }>) => {
    const { month } = item.value;
    setState({ ...state, month });
  };

  const handleSelectDate = (item: Item<{ date: number }>) => {
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
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        name='title'
        placeholder='제목'
        value={state.title}
        onChange={handleChange}
      />
      <span>개인전</span>
      <Input
        type='radio'
        name='matchType'
        value='INDIVIDUAL_MATCH'
        onChange={handleChange}
      />
      <span>팀전</span>
      <Input
        type='radio'
        name='matchType'
        value='TEAM_MATCH'
        onChange={handleChange}
      />
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
      <div>경기 일자</div>
      <Dropdown
        items={YEAR}
        placeholder='년도'
        onSelect={handleSelectYear}
      />
      <Dropdown
        items={MONTH}
        placeholder='월'
        onSelect={handleSelectMonth}
      />
      <Dropdown
        items={DATE}
        placeholder='일'
        onSelect={handleSelectDate}
      />
      <div>경기 인원</div>
      <Input
        type='text'
        name='participants'
        placeholder='경기 인원'
        value={state.participants}
        onChange={handleChange}
      />
      <textarea
        name='content'
        placeholder='공고 내용'
        onChange={handleChange}
      />
      <button type='submit'>작성 완료</button>
    </form>
  );
};

export default PostForm;
