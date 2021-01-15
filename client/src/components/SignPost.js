import React, { useState, useEffect } from 'react';


const SignPost = ({meta}) => {

  const [currentMeta, setCurrentMeta] = useState(meta);
  const [text, setText] = useState('For more about my career transition:');

  return (
    <>
      <div>
        <article className="message is-small is-hidden-mobile">
          <div className="message-body is-size-6 is-clickable">
            {text} {currentMeta}
          <br/> 
          <button 
            className="button is-rounded is-size-5-mobile" 
            onClick={()=>{setCurrentMeta('about')}}>About Me</button>
          </div>
        </article>
      </div>
    </>
  )
}

export default SignPost;