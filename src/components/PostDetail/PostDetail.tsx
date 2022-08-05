import { Badge } from '@components/Badge';
import theme from '@styles/theme';
import { Divider } from '@components/Divider';
import { Paragraph } from '@components/Paragraph';
import { Button } from '@components/Button';
import { useRouter } from 'next/router';
import * as S from './PostDetail.styles';
import { dummyData } from './dummyData';

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = dummyData;

  const handleClick = () => {
    if (id && data.status === 'WAITING') {
      router.push(`${id.toString()}/proposal`);
    } else if (id) {
      router.push(`${id.toString()}/review`);
    }
  };
  return (
    <S.Container>
      <S.Info>
        <S.Description>
          <S.Title>{data.title}</S.Title>
          {/* TODO: 조건부 렌더링 처리 필요 */}
          {data.status === 'WAITING' ? (
            <Badge
              width='100px'
              height='30px'
              color={theme.color.secondary}
            >
              모집 중
            </Badge>
          ) : (
            <Badge
              width='100px'
              height='30px'
              color={theme.color.secondary}
            >
              모집완료
            </Badge>
          )}
        </S.Description>
        <S.Detail>
          <S.DetailTitle>팀명: </S.DetailTitle>
          <S.DetailItem>{data.team.name} </S.DetailItem>
        </S.Detail>
        <S.Detail>
          <S.DetailTitle>종목: </S.DetailTitle>
          <S.DetailItem>{data.team.sportsCategory} </S.DetailItem>
        </S.Detail>
        <S.Detail>
          <S.DetailTitle>개인전/팀전: </S.DetailTitle>
          <S.DetailItem>{data.matchDate} </S.DetailItem>
        </S.Detail>
        <S.Detail>
          <S.DetailTitle>경기일자: </S.DetailTitle>
          <S.DetailItem>{data.matchDate} </S.DetailItem>
        </S.Detail>
        <Divider />
      </S.Info>
      <S.Content>
        <Paragraph>{data.content}</Paragraph>
      </S.Content>
      <S.ButtonContainer>
        {data.status === 'DONE' ? (
          <Button onClick={handleClick}>후기 작성하기</Button>
        ) : (
          <Button onClick={handleClick}>신청하기</Button>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
};

export default PostDetail;
