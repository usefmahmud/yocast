import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { useState } from 'react/cjs/react.development';

import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Player from './components/Player/Player';
import Home from './pages/Home/Home';
import Podcast from './pages/Podcast/Podcast';

function App() {
  const [currUrl, setCurrUrl] = useState('')

  return (
    <div className="App">
    
      <Router>
        <button onClick={e => setCurrUrl('https://res.cloudinary.com/usefmahmud/video/upload/v1639569930/yocast/audio/Ilyas_Mao_-_RISE_UP_ft._Muslim_Belal_Boonaa_Mohammed_Official_Video_ryyztp.mp4')}>
          First Song
        </button>

        <button onClick={e => setCurrUrl('https://res.cloudinary.com/usefmahmud/video/upload/v1639497817/yocast/audio/%D9%83%D9%84%D9%83_%D8%B9%D9%84%D9%89_%D8%A8%D8%B9%D8%B6%D9%83_%D8%AC%D9%85%D9%8A%D9%84_-_%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA_%D8%B9%D9%84%D9%85%D9%8A_%D8%AC%D8%AF%D8%A7_jkxp4p.mp3')}>
          Second Song
        </button>
        <Navbar />
        <Player url={currUrl} />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/podcast/:id' element={<Podcast/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
