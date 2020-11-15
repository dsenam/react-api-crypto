import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: whitesmoke;
  justify-content: center;

  img {
      width: 25px;
      margin-right: 5px;
  }

  h1 {
      font-size: 20px;
  }
`;

export const Content = styled.div`
    display: flex;
    background: white;
    width: 70%;
    align-items: center;
    margin: 10px 0 10px 0;
    border: 1px solid #dcdcdc;

    p {
        margin-left: 5px;
        font-size: 16px;
    }

    img {
        margin-left: 5px;
    }

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`;
