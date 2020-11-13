import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import Coin from '../../components/Coin'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import { SearchContainer } from './styles';

function Main() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  //Requisição axios + promise
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data)
    }).catch(e => toast.error('Erro ao realizar requisição'))
  }, [])

  
  const handleChange = e => {
    setSearch(e.target.value)
  }

  //Filtrar resultados
  const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

  return (
    <>
    <ToastContainer />
    <SearchContainer>
    <MonetizationOnIcon />
    <h1>BUSCADOR CRIPTOMOEDAS</h1>
        <form>
          <input type="text" placeholder="Digite uma moeda" className="coin-input" onChange={handleChange}/>
        </form>
    </SearchContainer>
        
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} volume={coin.market_cap}/>
            
        )
      })}
      
    </>
  );
}

export default Main;
