import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import { useState } from 'react'
const root = ReactDOM.createRoot(document.getElementById('root'));

function renderForm(){

}

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#what">What is CryptoMint?</a></p>
  <p><a href="#faq">FAQ</a></p>
  <p><button onClick={crenderForm}>Connect Wallet</button></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ckmint__navbar'>
      <div className='ckmint__navbar-links'>
        <div className='ckmint__navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='ckmint__navbar-links_container'>
          <Menu />
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