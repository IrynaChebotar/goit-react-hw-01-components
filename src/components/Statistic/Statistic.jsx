import { Wrapper } from './Statistic.styled';
import { List } from './Statistic.styled';
import { Item } from './Statistic.styled';

export default function Statistics({ title, stats }) {
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}

      <List>
        {stats.map(stat => {
          return (
            <Item key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
}
