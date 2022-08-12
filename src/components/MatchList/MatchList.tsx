import { AxiosResponse } from 'axios';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { FilterButton } from '@components/FilterButton';
import { MatchListItem } from '@components/MatchListItem';
import { SPORTS_CATEGORY } from '@constants/dropdown';
import { userState } from '@recoil/atoms';

import * as S from './MatchList.styles';
import { Match, Response } from './types';

const MatchList = () => {
  const [state, setState] = useState<Response>({
    cursor: {
      createdAt: '',
      id: null,
    },
    values: [],
    hasNext: false,
    category: '',
  });
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);
  const user = useRecoilValue(userState);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { dataset } = e.target as HTMLElement;
    const { value } = dataset;
    if (category === value) {
      setCategory('');
      setState({
        ...state,
        category: '',
      });
    } else {
      setCategory(value as string);
      setState({
        ...state,
        category: value as string,
      });
    }
  };

  const getMoreMatchList = () => {
    const getMore = async () => {
      const res = await axiosAuthInstance.get('/api/matches', {
        params: {
          createdAt: state.cursor.createdAt,
          id: state.cursor.id,
          size: 10,
          category,
          status: 'WAITING',
          distance: user.searchDistance,
        },
      });
      const data = (res.data as AxiosResponse).data as Response;

      setState({
        ...state,
        values: [...state.values, ...data.values],
        hasNext: data.hasNext,
        cursor: data.cursor,
      });
    };
    getMore();
  };

  useEffect(() => {
    const getMatchList = async () => {
      const res = await axiosAuthInstance.get('/api/matches', {
        params: {
          size: 10,
          category,
          status: 'WAITING',
          distance: user.searchDistance,
        },
      });
      const data = (res.data as AxiosResponse).data as Response;
      setState({
        values: data.values,
        hasNext: data.hasNext,
        cursor: data.cursor,
        category: state.category,
      });

      setIsLoading(false);
    };
    getMatchList();
  }, [category]);

  useEffect(() => {
    if (state.values?.length && observerRef.current !== null && state.hasNext) {
      const lastItem = observerRef.current.children[observerRef.current.children.length - 1];
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!isLoading && entry.isIntersecting) {
              getMoreMatchList();
              io.unobserve(lastItem);
            }
          });
        },
        { threshold: 1 },
      );
      io.observe(lastItem);
    }
  }, [state.values?.length, state.category]);

  return (
    <S.Container>
      <S.Category>
        {SPORTS_CATEGORY.map((item) => (
          <FilterButton
            key={item.id}
            data-value={item.value.sportsCategory}
            active={item.value.sportsCategory === category}
            onClick={handleClick}
          >
            {item.text}
          </FilterButton>
        ))}
      </S.Category>
      <S.ListContainer ref={observerRef}>
        {state.values.map((item: Match) => (
          <MatchListItem
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            matchType={item.matchType}
            content={item.content}
            createdAt={item.createdAt}
          />
        ))}
      </S.ListContainer>
    </S.Container>
  );
};

export default MatchList;
