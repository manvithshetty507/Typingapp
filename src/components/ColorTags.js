import React ,{useState} from 'react'
import '../styles/ColorTag.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

function ColorTags() {
  const [selectedColor, setSelectedColor] = useState('');

  function handleColorChange(event) {
    const selectedValue = event.target.value;
    setSelectedColor(selectedValue);
    document.body.style.backgroundColor = selectedValue;
    
    switch(selectedValue) {
      case 'black':
        document.body.style.color = "yellow";
        break;
      case 'green':
        document.body.style.color = "black";
      case 'white':
        document.body.style.color = "pink";
      default :
        document.body.style.color = "black";
        break;
    }
  }
  return (
    <div className='foot'>
        <div className='social__tags'>
          <FaGithub className='tag'/>
          <FaLinkedin className='tag'/>
          <FaEnvelope className='tag'/>
          <FaInstagram className='tag'/>
        </div>
        <div className='theme__switch'>
        <label htmlFor="mytheme"></label>
            <select id="mytheme" onChange={handleColorChange}>
                <option value="grey">Darken-black</option>
                <option value="darkGrey">Colored-Grey</option>
                <option value="pink">Colored-Pink</option>
                <option value="darkGreen">Colored-Green</option>
                <option value="blue">Colored-Blue</option>
                <option value="white">Colored-White</option>
                <option value="purple">Colored-Purple</option>
            </select>
        </div>
    </div>
  )
}

export default ColorTags