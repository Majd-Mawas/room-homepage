import './index.css'
import Nav from "./components/Nav";
import Hero from './components/Hero';
import Footer from './components/Footer';
import React from 'react';

function App() {

  const [render,setRender] = React.useState(0)
  function handleClick(counter) {
    
    setRender(counter)
  }

  React.useEffect(()=>{

  },[render])

  return (
    <div className="App">
     <Nav />
     <Hero handleClick={handleClick}/>
     <Footer />
    </div>
  );
}

export default App;
