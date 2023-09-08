import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;
  margin-bottom: 50px;
`;
export const List = styled.li`
  display: flex;
  align-items: left;
  width: 350px;
  background-color: #fff;
  
  img {
    padding: 10px;
    width: 20%;
  }
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 15px;
    border-radius: 50%;
    background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  }
`;

export const Description = styled.p`
  text-align: left;
`;

