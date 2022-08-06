import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AxiosResponse } from 'axios';
import { axiosAuthInstance } from '@api/axiosInstances';
import { Button } from '@components/Button';
import { FilterButton } from '@components/FilterButton';
import { MatchListItem } from '@components/MatchListItem';
import theme from '@styles/theme';
import { categoryData } from './dummyData';
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
  });
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const { dataset } = e.target as HTMLElement;
    const { value } = dataset;
    if (category === value) {
      setCategory('');
    } else {
      setCategory(value as string);
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
          distance: 30, // TODO: 거리는 사용자가 설정한 값으로 적용해야 함.
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
          distance: 30,
        },
      });
      const data = (res.data as AxiosResponse).data as Response;
      setState({
        values: data.values,
        hasNext: data.hasNext,
        cursor: data.cursor,
      });

      setIsLoading(false);
    };
    getMatchList();
  }, [category]);

  useEffect(() => {
    if (state.values?.length && observerRef.current !== null && state.hasNext) {
      const lastItem = observerRef.current.children[observerRef.current.children.length - 1];

      const io = new IntersectionObserver(
        (entries, observer) => {
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
  }, [state.values?.length]);

  return (
    <S.Container>
      <S.Category>
        {categoryData.map((item) => (
          <FilterButton
            key={item.id}
            size='70px'
            fontSize='15px'
            margin='10px'
            data-value={item.value}
            color={category === item.value ? `${theme.color.primary}` : `${theme.color.green200}`}
            onClick={onClick}
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
            distance={item.distance}
            createdAt={item.createdAt}
          />
        ))}
      </S.ListContainer>

      <S.ButtonContainer>
        <Link
          href='/matches/create'
          passHref
        >
          <S.Anchor>
            <Button
              round
              width='120px'
              height='35px'
            >
              글쓰기
            </Button>
          </S.Anchor>
        </Link>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default MatchList;
