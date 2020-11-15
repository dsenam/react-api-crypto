import React from 'react'

import {Container, Content} from './styles'

function Coin({image, name, symbol, price, volume}) {
    return (
      <>
      <Container>
        <Content>
          <img src={image} alt="crypto"/>
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
          <p>Preço:</p>
          <p className="coin-price">R${price}</p>
          <p>Volume:</p>
          <p className="coin-volume">R${volume.toLocaleString()}</p>
        </Content>
        
      </Container>
        
      </>
    );
  }

  export default Coin;