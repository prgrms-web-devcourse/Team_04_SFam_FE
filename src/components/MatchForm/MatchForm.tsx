import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { Dropdown, Item } from '@components/Dropdown';
import { Input } from '@components/Input';
import { DATE, MONTH, SPORTS_CATEGORY, YEAR } from '@constants/dropdown';
import { Response } from '@interface/response';
import {
  Anchor,
  B3,
  BoldOrangeB3,
  ColWrapper,
  Container,
  DropdownWrapper,
  InnerWrapper,
  Label,
  RadioInput,
  RadioWrapper,
  TextArea,
} from '@styles/common';

import { validation } from './helper';

interface Team {
  id: number;
  name: string;
  sportsCategory: string;
  memberCount: string | number;
}

interface SuccessResponse<T> {
  data: T;
}

interface State {
  title: string;
  matchType: string;
  sportsCategory: string;
  teamId?: number | string;
  matchDate: string;
  participants: string | number;
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
  const router = useRouter();
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
  const [errors, setErrors] = React.useState<Partial<State>>({});
  const [selectedMemberCount, setSelectedMemberCount] = React.useState<number>();
  const [isFirstSubmit, setIsFirstSubmit] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'matchType') {
      setState({
        ...state,
        [name]: value,
        participants: value === 'INDIVIDUAL_MATCH' ? '1' : '',
      });
      return;
    }
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
    setSelectedMemberCount(teams.filter((team) => team.id === id)[0].memberCount as number);
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
    setIsFirstSubmit(false);
    const error = validation({ ...state, memberCount: selectedMemberCount });
    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }
    const submit = async () => {
      const data = changeStateToRequestBody(state);
      const res = await axiosAuthInstance.post<Response<{ data: number }>>('/api/matches', data);
      if (res.status === 200) {
        router.replace(`/matches/${res.data.data.toString()}`);
      }
    };
    submit();
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

  React.useEffect(() => {
    if (!isFirstSubmit) {
      setErrors(validation({ ...state, memberCount: selectedMemberCount }));
    }
  }, [state]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ColWrapper gap='16px'>
          <InnerWrapper
            flexDirection='column'
            gap='8px'
          >
            <Input
              type='text'
              name='title'
              placeholder='제목'
              value={state.title}
              onChange={handleChange}
              height='40px'
            />
            {errors.title && <BoldOrangeB3>{errors.title}</BoldOrangeB3>}
          </InnerWrapper>
          <InnerWrapper
            flexDirection='column'
            gap='8px'
          >
            <InnerWrapper>
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
            </InnerWrapper>
            {errors.matchType && <BoldOrangeB3>{errors.matchType}</BoldOrangeB3>}
          </InnerWrapper>
          {state.matchType === 'INDIVIDUAL_MATCH' && (
            <InnerWrapper
              flexDirection='column'
              gap='8px'
            >
              <Dropdown
                items={SPORTS_CATEGORY}
                placeholder='종목 선택'
                onSelect={handleSelectSports}
              />
              {errors.sportsCategory && <BoldOrangeB3>{errors.sportsCategory}</BoldOrangeB3>}
            </InnerWrapper>
          )}
          {loading ||
            (state.matchType === 'TEAM_MATCH' && (
              <InnerWrapper
                flexDirection='column'
                gap='8px'
              >
                <Dropdown
                  disabled={teams.length === 0}
                  items={changeTeamsToDropdownItems(teams)}
                  placeholder='팀 선택'
                  onSelect={handleSelectTeam}
                />
                {state.matchType === 'TEAM_MATCH' && errors.teamId && <BoldOrangeB3>{errors.teamId}</BoldOrangeB3>}
                {teams.length === 0 && (
                  <>
                    <BoldOrangeB3>내가 운영하는 팀이 없습니다. 새로운 팀을 만들어보세요.</BoldOrangeB3>
                    <Link
                      href='/team/create'
                      passHref
                      replace
                    >
                      <Anchor>
                        <Button
                          type='button'
                          backgroundColor='primary'
                        >
                          새 팀 만들기
                        </Button>
                      </Anchor>
                    </Link>
                  </>
                )}
              </InnerWrapper>
            ))}
          <InnerWrapper
            flexDirection='column'
            gap='8px'
          >
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
            {errors.matchDate && <BoldOrangeB3>{errors.matchDate}</BoldOrangeB3>}
          </InnerWrapper>
          {state.matchType === 'TEAM_MATCH' && (
            <InnerWrapper
              flexDirection='column'
              gap='8px'
            >
              <Label>경기 인원</Label>
              <Input
                type='text'
                name='participants'
                placeholder='경기 인원'
                value={state.participants as string}
                onChange={handleChange}
                height='40px'
              />
              {errors.participants && <BoldOrangeB3>{errors.participants}</BoldOrangeB3>}
            </InnerWrapper>
          )}
          <InnerWrapper
            flexDirection='column'
            gap='8px'
          >
            <TextArea
              name='content'
              placeholder='공고 내용'
              onChange={handleChange}
            />
            {errors.content && <BoldOrangeB3>{errors.content}</BoldOrangeB3>}
          </InnerWrapper>
          <InnerWrapper>
            <Button>작성 완료</Button>
          </InnerWrapper>
        </ColWrapper>
      </form>
    </Container>
  );
};

export default PostForm;
