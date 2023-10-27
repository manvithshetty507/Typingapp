import './App.css';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Words from './components/Words';
import Feats from './components/Feats'
import ColorTags from './components/ColorTags';
import { ParaProvider } from './utils/ParaContext';


function App() {
  return (
    <ParaProvider>
      <div className="App">
        <Navbar />
        <Timer />
        <Words />
        <Feats />
        <ColorTags />
      </div>
    </ParaProvider>
  );
}

export default App;
