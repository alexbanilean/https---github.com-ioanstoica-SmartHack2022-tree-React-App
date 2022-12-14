import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import ConnectWallet from '../../App'

<<<<<<< HEAD
=======


function ConnectToWallet(state){

  // const { status, connect, account, chainId, ethereum } = useMetaMask();
  return <div> 
      {status}
      </div>
  //alert(state.status);

  // if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

  // if (status === "unavailable") return <div>MetaMask not available :</div>

  // if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

  // if (status === "connecting") return <div>Connecting...</div>

  // if (status === "connected") return <div>Connected account {account} on chain ID {chainId}</div>
}

>>>>>>> 660a18291e115aeaf566559707de407624a21f53
const Menu = (props) => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#what">What is CryptoMint?</a></p>
<<<<<<< HEAD
  <p><a href="#faq">FAQ</a></p>
  {(props.status === "connected") ? <p>Status&#160;:&#160;Connected</p> : <p>Status&#160;:&#160;NotConnected</p>}
  {(props.status === "connected") ? null : <p><a href="#" onClick = {props.connect}>Connect to wallet</a></p>}
=======
  <p><a href="#faq">{props.status}</a></p>
  <p><a href="#" onClick = {props.connect}>Connect to wallet</a></p>
>>>>>>> 660a18291e115aeaf566559707de407624a21f53
  </>
)

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ckmint__navbar'>
      <div className='ckmint__navbar-links'>
        <div className='ckmint__navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='ckmint__navbar-links_container'>
          <Menu connect = {props.connect} status = {props.status}/>
        </div>
      </div>
      <div className='ckmint__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="ckmint__navbar-menu_container scale-up-center">
            <div className='ckmint__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar