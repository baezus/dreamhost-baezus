import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

function App() {

  const [meta, setMeta] = useState('welcome');
  const [text, setText] = useState('')

  return (
    <div className="App">
      <Header/>
      <div className="columns">
        <div className="column is-two-thirds">
          <LeftColumn meta={meta}/>
        </div>
        <div className="column">
          <RightColumn meta={meta}/>
        </div>
      </div>
      <footer className="footer">
      <div className="content has-text-centered">
        
          <p className="control">
              <button 
              className="button is-rounded is-large is-size-6-mobile" 
              onClick={()=>{setMeta('general')}}>general</button>
            </p>
            <p className="control">
              <button 
              className="button is-rounded is-large is-size-6-mobile"
              onClick={()=> {setMeta('poetry')}}>poetry</button>
            </p>
            <p className="control">
              <button 
              className="button is-rounded is-large is-size-6-mobile" 
              onClick={() => {setMeta('journalism')}}>journalism</button> 
            </p>
            <p className="control">
              <button 
              className="button is-rounded is-large is-size-6-mobile" 
              onClick={() => {setMeta('programming')}}>programming</button>
            </p>
        
      </div>
    </footer>
    </div>
  );
}

export default App;
