import { Wrapper } from "./Statistics.styled";
import { List } from "./Statistics.styled";
import { Item } from "./Statistics.styled";

export function Statistics ({title, stats}){
    return (
        <Wrapper>
        {title && <h2>{title}</h2>}
      
        <List>
          {stats.map(stat => {
            return(
                <Item key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </Item>
            );
          })}
        </List>
      </Wrapper>   
    );
};