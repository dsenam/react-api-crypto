import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Main from './pages/Main'

// import { Container } from './styles';

function App() {

  return (
    <>
    <ToastContainer />
    <Main />
    </>
  );
}

export default App;
