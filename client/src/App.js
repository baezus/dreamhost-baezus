import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

function App() {

  const [meta, setMeta] = useState('Welcome');
  const [text, setText] = useState('')

  return (
    <div className="App">
      <div className="block">
        <Header/>
      </div>
      <div className="block">
      <div className="columns">
        <div className="column is-three-fifths">
          <LeftColumn meta={meta}/>
        </div>
        <div className="column is-two-fifths">
          <RightColumn meta={meta}/>
        </div>
        </div>
      </div>
      <footer className="footer">
              <button 
              className="button is-rounded is-large is-size-5-mobile" 
              onClick={() => {setMeta('programming')}}>coding</button>
      
              <button 
              className="button is-rounded is-large is-size-5-mobile" 
              onClick={() => {setMeta('journalism')}}>pop writing</button> 
            
              <button 
              className="button is-rounded is-large is-size-5-mobile"
              onClick={()=> {setMeta('poetry')}}>poetry</button>
  
    </footer>

    <article className="message is-small is-hidden-mobile">
          <div className="message-body is-size-6 is-clickable">
          To read more about me personally, click:<br/> 
          <button 
              className="button is-rounded is-size-5-mobile" 
              onClick={()=>{setMeta('about')}}>About Me</button>
          </div>
        </article>

    <button 
            className="button is-rounded is-medium is-hidden-mobile is-pulled-right grow">elias@baez.us</button>
    </div>
  );
}

export default App;
