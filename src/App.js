
import './App.css';
import { useRef } from 'react';
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import Contact from './pages/contact/Contact';
import Scrol from './components/scrol/Scrol';
//import {NavLink} from 'react-router-dom';

function App() {

  const home = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <div className="App">
      <Scrol/>
      <div className='nav'>
        <h2 className='logo'>
          Travel world
        </h2>
        <ul>
          <li className='list' onClick={()=>scrollToSection(home)}>Destination</li>
          <li className='list' onClick={()=>scrollToSection(about)}>Life Style</li>
          <li className='list' onClick={()=>scrollToSection(contact)}>Contact</li>
        </ul>
      </div>
     
     <div ref={home}>
      <Home/>
     </div>
     
     <div ref={about}>
      <Explore/>
     </div>
     
     <div ref={contact}>
      <Contact/>
     </div>

     <footer>
      <div className='foot'>
        copyright.2020 Travel point
      </div>
      
     </footer>
    </div>
   
  );
}

export default App;
