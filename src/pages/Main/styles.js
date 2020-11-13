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
