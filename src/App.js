import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import Visual from './components/home/Visual.jsx';
import GalleryList from './components/home/GalleryList.jsx';
import Content from './components/home/Content.jsx';
import Banner from './components//Banner.jsx';
import Footer from './components//Footer.jsx';
/* import './assets/css/style.scss'; */

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Visual/>
      <GalleryList/>
      <Content/>
      <Banner/>
      <Footer/>
    </div>
  )
}


export default App;