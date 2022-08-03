import { Avatar } from '@components/Avatar';
import { B2, InnerWrapper } from '@styles/common';
import { TeamListItemContainer } from './TeamListItem.styles';

interface Props {
  userName: string;
}

const TeamListItem = ({ userName }: Props) => (
  <TeamListItemContainer>
    {/* TODO: 왕관 표시 */}
    <Avatar imgSize='70px' />
    <InnerWrapper
      margin='0 16px'
      alignItems='center'
    >
      <B2>{userName}</B2>
    </InnerWrapper>
  </TeamListItemContainer>
);

export default TeamListItem;
