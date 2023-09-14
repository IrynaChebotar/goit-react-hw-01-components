import { Wrapper } from './Transaction.styled';
import { Title } from './Transaction.styled';
import { Description } from './Transaction.styled';
import { Item } from './Transaction.styled';

export default function TransactionHistory({ transactions }) {
  return (
    <>
      <Wrapper>
        <Title>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </Title>
        <Description>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <Item>{transaction.type}</Item>
              <Item>{transaction.amount}</Item>
              <Item>{transaction.currency}</Item>
            </tr>
          ))}
        </Description>
      </Wrapper>
    </>
  );
}
