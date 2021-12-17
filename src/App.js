import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';


import './App.scss';
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar/Navbar';
import Player from './components/Player/Player';
import Home from './pages/Home/Home';
import Podcast from './pages/Podcast/Podcast';

function App() {
  const [currTrack, setCurrTrack] = useState({})

  return (
    <div className="App">
    
      <Router>
        <Navbar />
        <Player track={currTrack} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/podcast/:id' element={<Podcast onChooseTrack={episode => setCurrTrack(episode)}/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
