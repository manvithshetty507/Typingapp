import React from 'react'
import account from '../icons/account.png'
import keyboard from '../icons/keyboard.png'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo__keyboard'>
            <div className='logo'>
                TYPECAT
            </div>
            <div className='keyboard'>
                <img src={keyboard} alt="Keyboard Icon" />
            </div>
        </div>
        <div className='account'>
        <img src={account} alt="Account Icon" />
        </div>
    </div>
  )
}

export default Navbar