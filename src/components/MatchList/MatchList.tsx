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
        {categoryData.map((category) => (
          <FilterButton
            key={category.id}
            size='70px'
            fontSize='15px'
            margin='10px'
            color={select === category.text ? `${theme.color.primary}` : `${theme.color.green200}`}
            onClick={onClick}
          >
            {category.text}
          </FilterButton>
        ))}
      </S.Category>
      <S.ListContainer>
        {dummyData
          .filter((post) => post.data.category === select || select.length === 0)
          .map((post) => (
            <MatchListItem
              key={post.data.id}
              id={post.data.id}
              title={post.data.title}
              category={post.data.category}
              matchType={post.data.matchType}
              content={post.data.content}
              distance={post.data.distance}
              createdAt={post.data.createdAt}
            />
          ))}
      </S.ListContainer>

      <S.ButtonContainer>
        <Link href='/post/create'>
          <Button
            width='150px'
            height='50px'
            radius='2rem'
          >
            글쓰기
          </Button>
        </Link>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default MatchList;
