import React from 'react'
import reset from '../icons/reset.png'
import '../styles/Feats.css'

function Feats() {
  return (
    <div className='feats'>
        <div className='reset__logo'>
            <button><img src={reset} alt='reset image'/></button>
        </div>

        <div className='instruction__esc'>
            <span className='esc'>esc</span>
            <span className='rst'> - reset</span>
        </div>

        <div className='instruction__words'>
            <button>10</button>
            <button>50</button>
            <button>80</button>
            <button>100</button>
            <span> - no of words</span>
        </div>
    </div>
  )
}

export default Feats