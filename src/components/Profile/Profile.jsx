import { Wrapper } from './Profile.styled';
import { Description } from './Profile.styled';
import { Item } from './Profile.styled';
import { List } from './Profile.styled';

export function Profile ({username, tag, location, avatar, stats}) {
    return(
        <Wrapper>
  <Description>
    <img
      src= {avatar}
      alt= {`${username}`}
    />
    <p>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </Description>

  <Item>
    <List>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </List>
    <List>
      <span>Views</span>
      <span>{stats.views}</span>
    </List>
    <List>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </List>
  </Item>
</Wrapper>
    )
};
