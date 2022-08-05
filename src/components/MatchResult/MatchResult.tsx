import { Button } from '@components/Button';
import * as S from './MatchResult.styles';

const MatchResult = () => (
  <S.Container>
    <Button>승리</Button>
    <Button>무승부</Button>
    <Button>패배</Button>
    <Button>제출</Button>
  </S.Container>
);

export default MatchResult;
