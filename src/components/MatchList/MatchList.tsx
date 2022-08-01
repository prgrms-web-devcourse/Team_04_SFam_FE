import { MatchListItem } from '@components/MatchListItem';
import { Button } from '..';
import { dummyData } from './dummyData';
import * as S from './MatchList.style';

const MatchList = () => (
  <S.Container>
    {dummyData.map((i) => (
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

export default MatchList;
