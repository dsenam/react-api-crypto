import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

// import { Container } from './styles';

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

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data)
    }).catch(e => toast.error('Erro ao realizar requisição'))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

  return (
    <>
    <ToastContainer />
    <div className='coin-app'>
      <div className='coin-search'>
        <h1>Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} volume={coin.market_cap}/>
            
        )
      })}
    </div>
      
    </>
  );
}

export default App;
