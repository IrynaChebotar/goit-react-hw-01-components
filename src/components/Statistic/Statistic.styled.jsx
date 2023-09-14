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
  padding: 0;
`;

const getColor = props => {
  switch (props.label) {
    case '.docx':
      return 'purple';
    case '.pdf':
      return 'tomato';
    case '.mp3':
      return 'coral';
    case '.psd':
      return 'yellow';
    default:
      return 'red';
  }
};

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: ${getColor};
`;
