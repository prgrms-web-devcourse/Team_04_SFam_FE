import { Badge } from '@components/Badge';
import theme from '@styles/theme';
import { Divider } from '@components/Divider';
import { Paragraph } from '@components/Paragraph';
import { Button } from '@components/Button';
import * as S from './PostDetail.styles';
import { dummyData } from './dummyData';

const { data } = dummyData;

const PostDetail = () => (
  <S.Container>
    <S.Info>
      <S.Description>
        <S.Title>{data.title}</S.Title>
        {/* TODO: 조건부 렌더링 처리 필요 */}
        <Badge
          width='100px'
          height='30px'
          color={theme.color.secondary}
        >
          {data.status}
        </Badge>
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
      <Button>신청</Button>
    </S.ButtonContainer>
  </S.Container>
);

export default PostDetail;
