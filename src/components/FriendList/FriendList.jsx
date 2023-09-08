import { FriendListItem } from "./FriendsListItem";
import { Wrapper } from './FriendList.styled';

export function FriendList ({friends}) {
return (
    <Wrapper>
    {friends.map(friend => (
          <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          />
    ))}
  </Wrapper> 
)
};