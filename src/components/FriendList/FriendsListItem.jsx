export function FriendListItem ({avatar, isOnline, name}) {
return (
    <li>
  <span />
  <img  src={avatar} alt={`${name}`} width="48" />
  <p>{name}</p>
</li>
)
};