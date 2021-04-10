import './App.css';
import Toolbar from './sections/toolbar.js'
import Intro from './sections/intro.js'
import WhatIDo from './sections/whatIDo.js'

function App() {
  return (
    <div className="App" style={{"width": "100vw", "overflowX": "hidden"}}>
      <Toolbar/>
      <Intro />
      <WhatIDo/>
    </div>
  );
}

export default App;
