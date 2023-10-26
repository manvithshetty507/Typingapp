import React from 'react'
import '../styles/ColorTag.css'

function ColorTags() {
  return (
    <div className='foot'>
        <div className='social__tags'>

        </div>
        <div className='theme__switch'>
        <label htmlFor="mytheme"></label>
            <select id="mytheme">
                <option value="black">Darken-black</option>
                <option value="grey">Colored-Grey</option>
                <option value="pink">Colored-Pink</option>
                <option value="green">Colored-Green</option>
                <option value="blue">Colored-Blue</option>
                <option value="white">Colored-White</option>
                <option value="purple">Colored-Purple</option>
            </select>
        </div>
    </div>
  )
}

export default ColorTags