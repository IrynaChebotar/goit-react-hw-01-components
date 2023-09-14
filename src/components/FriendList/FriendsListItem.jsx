import { List } from './FriendList.styled';
import { Description } from './FriendList.styled';
import { Status } from './FriendList.styled';

export function FriendListItem({ avatar, isOnline, name }) {
  return (
    <List>
      <Status $isOnline={isOnline} />
      <img src={avatar} alt={`${name}`} width="48" />
      <Description>{name}</Description>
    </List>
  );
}
