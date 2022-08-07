
import bg from './bg.jpg';
import bg1 from './bg1.svg';
import bg2 from './bg2.svg';
import bg3 from './bg3.svg';
import Txt from './pageOneText.jsx';
import './App.scss'

import {Parallax, ParallaxLayer} from '@react-spring/parallax';

function App() {


  return (
  <div className='app'>
    <Parallax pages={3} horizontal>

      <ParallaxLayer offset={0} horizontal factor={1} style={{backgroundImage: `url(${bg1})`, backgroundSize: 'cover'}}>
      <div className="sections">
        <Txt/>
      </div>


      </ParallaxLayer>

      <ParallaxLayer horizontal offset={1} style={{backgroundImage: `url(${bg2})`, backgroundSize: 'cover'}}>
        <h1> welcome..... to my </h1>
      </ParallaxLayer>
      
      <ParallaxLayer offset={2} horizonta style={{backgroundImage: `url(${bg3})`, backgroundSize: 'cover'}}l>
      <h1>WEBSITE</h1>
      </ParallaxLayer>

    </Parallax>

  </div>
  
    );
}

export default App;
