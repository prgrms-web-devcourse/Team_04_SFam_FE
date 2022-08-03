import { MatchListItem } from '@components/MatchListItem';
import { Button } from '@components/Button';
import { FilterButton } from '@components/FilterButton';
import { useState } from 'react';
import theme from '@styles/theme';
import { dummyData, categoryData } from './dummyData';
import * as S from './MatchList.style';

const MatchList = () => {
  const [select, setSelect] = useState('');
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const data = e.target as HTMLElement;
    const { innerText } = data;
    if (select === innerText) {
      setSelect('');
    } else {
      setSelect(innerText);
    }
    console.log(e);
  };
  return (
    <S.Container>
      <S.Category>
        {/* select가 비어있지 않으면 filter를 해야하는듯 */}
        {categoryData.map((item) => (
          <FilterButton
            size='70px'
            fontSize='15px'
            margin='10px'
            color={select === item ? `${theme.color.primary}` : `${theme.color.green200}`}
            onClick={onClick}
          >
            {item}
          </FilterButton>
        ))}
      </S.Category>
      <S.ListContainer>
        {dummyData
          .filter((i) => i.data.category === select || select.length === 0)
          .map((i) => (
            <MatchListItem
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
        <Button
          width='150px'
          height='53px'
          radius='2rem'
        >
          글쓰기
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default MatchList;
