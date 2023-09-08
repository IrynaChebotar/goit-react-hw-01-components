import { List } from './FriendList.style';
import { Description } from './FriendList.style';
import { Status } from './FriendList.style';

export function FriendListItem ({avatar, isOnline, name}) {
return (
    <List>
  <Status $isOnline={isOnline} />
      <img src={avatar} alt={`${name}`} width="48" />
      <Description>{name}</Description>
</List>
)
};