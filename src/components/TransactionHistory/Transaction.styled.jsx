import styled from 'styled-components';

export const Wrapper = styled.table`
  width: 50%;
  height: 150px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  border: 1px solid black;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.thead`
  background-color: #7ab4e2;
`;
export const Item = styled.td`
  padding: 15px;
`;

export const Description = styled.tbody`
  text-align: center;
  border-bottom: 1px solid #ccc;
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  tr:nth-child(odd) {
    background-color: #f1dbdb;
  }
`;
