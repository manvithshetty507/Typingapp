import React from 'react';
import reset from '../icons/reset.png';
import '../styles/Feats.css';
import { usePara } from '../utils/ParaContext';

function Feats() {
  const { updatePara } = usePara();

  // Pass the desired value directly as an argument
  function handleButtonClick(val) {

    const tenWords = "In the bustling city neon lights painted the streets with vibrant hues casting a surreal glow upon the bustling crowds"
    const fiftyWords = "Heart bustling metropolis neon lights painted streets vibrant hues casting enchanting surreal glow upon teeming crowds cloaked figure emerged shrouded enigma navigating urban labyrinth with purpose rhythmic beats street musicians drums resonated through labyrinthine alleys weaving intoxicating auditory tapestry night deepened laughter conversation filled air creating orchestration urban life hidden corner cafe rich aroma freshly brewed coffee sweet pastries formed sanctuary warmth comfort amidst citys pulsating energy endless source inspiration"
    const eightyWords = "Amidst the vibrant metropolis neon lights painted streets with their captivating hues casting a surreal glow upon the bustling crowds a mysterious figure emerged cloaked in enigma navigating the urban labyrinth with purpose rhythmic beats from street musicians drums echoed through the labyrinthine alleys weaving an intoxicating auditory tapestry as the night deepened laughter and conversation filled the air creating an orchestration of urban life in a hidden corner cafe the rich aroma of freshly brewed coffee and sweet pastries formed a sanctuary of warmth and comfort amidst the citys pulsating energy and endless source of inspiration"
    const hunWords = "In throbbing metropolis neon lights adorned streets vivid hues cast surreal enchanting glow upon bustling crowds mysterious figure cloaked in enigma strode through urban labyrinth with determined purpose rhythmic beats of street musicians drums resonated through labyrinthine alleys weaving intoxicating auditory tapestry night deepened air filled with symphony of laughter and animated conversations orchestrating urban life's vivacious rhythm in concealed corner cafe rich aroma of freshly brewed coffee and sweet scent of pastries cocooned patrons offering haven of warmth and comfort amid city's pulsating energy an ever-flowing fount of inspiration"

  function randomPara() {
    const paragraphs = [tenWords, fiftyWords, eightyWords, hunWords];
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[randomIndex];
  }

    switch (val) {
      case 10:
        updatePara(tenWords);
        break;
      case 50:
        updatePara(fiftyWords);
        break;
      case 80:
        updatePara(eightyWords);
        break;
      case 100:
        updatePara(hunWords);
        break;
      case 'reset':
        updatePara(randomPara());
        break;
      default:
        updatePara(randomPara())
        break;
    }
  }

  return (
    <div className="feats">
      <div className="reset__logo">
        <button onClick={() => handleButtonClick('reset')}><img src={reset} alt='reset image' /></button>
      </div>

      <div className="instruction__esc">
        <span className="esc">esc</span>
        <span className="rst"> - reset</span>
      </div>

      <div className="instruction__words">
        <button onClick={() => handleButtonClick(10)}>10</button>
        <button onClick={() => handleButtonClick(50)}>50</button>
        <button onClick={() => handleButtonClick(80)}>80</button>
        <button onClick={() => handleButtonClick(100)}>100</button>
        <span> - no of words</span>
      </div>
    </div>
  );
}

export default Feats;
