import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const List = styled.ul`
  display: flex;
`;

const getColor = props => {
  switch (props.label) {
    case '.docx':
      return 'blue';
    case '.pdf':
      return 'purple';
    case '.mp3':
      return 'red';
    case '.psd':
      return 'green';
    default:
      return 'blue';
  }
};

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 25px;
  background-color: ${props => getColor(props)};
`;