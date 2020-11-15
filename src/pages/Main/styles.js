import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: #03bb85;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

svg {
    color: yellow;
    font-size: 100px;
    margin-bottom: 10px;
}

  h1 {
      color: whitesmoke;
  }

  input {
      margin-bottom: 30px;
      margin-top: 20px;
      width: 300px;
      height: 50%;
      border-radius: 7px;
      ::placeholder {
          color: #DCDCDC;
          padding-left: 5px;
      }
  }
`;

export const ControlPage = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;

  button {
    font-size: 20px;
    margin: 10px 10px 15px 10px;
    background-color: ${props => props.disabled || "#03bb85"};
    color: white;
    border-radius: 7px;
    padding: 8px;

    :hover {
      background-color: #008c63;
    }    
  }

  span {
    font-size: 14px;
    margin-top: 12px;
  }
`;