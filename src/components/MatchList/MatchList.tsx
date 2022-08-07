import { MatchListItem } from '@components/MatchListItem';
import { Button } from '@components/Button';
import { FilterButton } from '@components/FilterButton';
import { useState } from 'react';
import theme from '@styles/theme';
import Link from 'next/link';
import { dummyData, categoryData } from './dummyData';
import * as S from './MatchList.styles';

const MatchList = () => {
  const [select, setSelect] = useState('');
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
      <S.Category>
        {categoryData.map((item) => (
          <FilterButton
            key={item.id}
            size='70px'
            fontSize='15px'
            margin='10px'
            color={select === item.text ? `${theme.color.primary}` : `${theme.color.green200}`}
            onClick={onClick}
          >
            {item.text}
          </FilterButton>
        ))}
      </S.Category>
      <S.ListContainer>
        {dummyData
          .filter((i) => i.data.category === select || select.length === 0)
          .map((i) => (
            <MatchListItem
              key={i.data.id}
              id={i.data.id}
              title={i.data.title}
              category={i.data.category}
              matchType={i.data.matchType}
              content={i.data.content}
              distance={i.data.distance}
              createdAt={i.data.createdAt}
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
