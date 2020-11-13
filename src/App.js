import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Main from './pages/Main'
import GlobalStyle from './styles/global'

function App() {

  return (
    <>
    <ToastContainer />
    <GlobalStyle/>
    <Main />
    </>
  );
}

export default App;
