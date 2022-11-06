import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'
import { useState } from 'react'

import { useMetaMask } from "metamask-react";

window.MyVars = {
    status: ''
}

const App = () => {

  const x = useMetaMask();

  const [accountAddress, setAccountAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccountAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  }

  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <What />
        <Footer />
    </div>
  )
}

export default App