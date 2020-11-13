import React from 'react'

function Coin({image, name, symbol, price, volume}) {
    return (
      <>
        <div className="coin-container">
          <div className="coin-row">
            <div className="coin">
              <img src={image} alt="crypto"/>
              <h1>{name}</h1>
              <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className="coin-data">
              <p className="coin-prince">R${price}</p>
              <p className="coin-volume">R${volume.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Coin;