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
      <div className="block">
        <Header/>
      </div>
      <div className="block">
      <div className="columns">
        <div className="column is-three-fifths">
          <LeftColumn meta={meta}/>
        </div>
        <div className="column is-one-third">
          <RightColumn meta={meta}/>
        </div>
        </div>
      </div>
      <footer className="footer">
      <div className="field is-grouped">
          <p className="control">
              <button 
              className="button is-rounded is-medium is-size-6-mobile" 
              onClick={()=>{setMeta('general')}}>general</button>
            </p>
            <p className="control">
              <button 
              className="button is-rounded is-medium is-size-6-mobile"
              onClick={()=> {setMeta('poetry')}}>poetry</button>
            </p>
            <p className="control">
              <button 
              className="button is-rounded is-medium is-size-6-mobile" 
              onClick={() => {setMeta('journalism')}}>journalism</button> 
            </p>
            <p className="control">
              <button 
              className="button is-rounded is-medium is-size-6-mobile" 
              onClick={() => {setMeta('programming')}}>programming</button>
            </p>
      </div>
    </footer>
    </div>
  );
}

export default App;
