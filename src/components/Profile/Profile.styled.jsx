import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 20px;
  border: 2px solid lightgrey;
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  img {
    width: 40%;
    padding: 25px;
    margin: auto;
    
  }
`;
export const Item = styled.ul`
  display: flex;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;
  border: 1px solid #fff;
  background-color: #bbe2c2;
`;