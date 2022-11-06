import React from 'react'
import { Feature, Navbar } from './components'
import { Footer, What, Header, FAQ, Wallet} from './containers'
import './App.css'
import { useState, useEffect } from 'react';
import ethers from 'ethers';

const App = () => {

  const { status, connect, account, chainId, ethereum } = useMetaMask();

  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar status = {status} connect = {connect}/>
          <Header />
        </div>
        <What />
        <Footer />
    </div>
  )
}

export default App