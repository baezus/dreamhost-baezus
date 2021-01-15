import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const welcomeMessage = `Hi, my name is Elias Baez. I'm a Full Stack Software Engineer and a writer of poetry and pop journalism. Welcome to my website. The buttons below toggle information for you, and the links below my picture will take you off-site to examples of my work.`

const LeftColumn = ({meta}) => {

  const [whichMeta, setWhichMeta] = useState('Welcome');
  const [text, setText] = useState(welcomeMessage);

  
  const generalBio = "I'm from New York and I live in Baltimore.";
  const poetryBio = "Elias Baez is a poet, editor, and programmer living in Baltimore. He earned his MFA in Poetry from Johns Hopkins University in 2020, and has work in Mantis, No Contact, The Bitchin Kitsch, Rougarou, and forthcoming in Cobra Milk.";
  const journalismBio = "I've been working with GAYLETTER since 2016.";
  const programmingBio = "Site designed using React, Sass, Bulma, and a Node.js backend.";

  const decideWhich = () => {
    console.log('switch activated');
    switch(meta) {
      case 'about':
        setText(generalBio);
        setWhichMeta('About');
        console.log('about bio set');
        break;
      case 'welcome':
        setText(welcomeMessage);
        setWhichMeta('Welcome');
        console.log('welcome message set');
        break;
      case 'poetry':
        setText(poetryBio);
        setWhichMeta('Poetry');
        console.log('poetry bio set');
        break;
      case 'journalism':
        setText(journalismBio);
        setWhichMeta('Journalism');
        console.log('journalism bio set');
        break;
      case 'programming':
        setText(programmingBio);
        setWhichMeta('Programming');
        console.log('programming bio set');
        break;
      default:
        setText(welcomeMessage);
        break;
    }
  }

  useEffect(() => {
    const nextMeta = decideWhich();
    // setWhichMeta(nextMeta);
  }, [meta])

  return(
    <div>
      <div className="block">
        <h1 className="title is-hidden-mobile">{whichMeta}</h1>
      </div>
      <div className="block">
        <p className="bio_body">
          <TransitionGroup>
            <CSSTransition 
              key={meta}
              timeout={1000}
              classNames="biochange"
              >
              <div>
                {text}
              </div>
            </CSSTransition>
          </TransitionGroup>
          </p>
      </div>
    </div>
  )

}

export default LeftColumn;