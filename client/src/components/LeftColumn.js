import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const welcomeMessage = `Thank you for taking the time to look at my work. I'm an early career software engineer specializing in React, Node.js, and virtual computing. I also write poetry and pop culture journalism. These fields appear divergent, but by my lights they're all about the same thing: refining inefficiencies out of language so a message can travel farther and do more.`

const LeftColumn = ({meta}) => {

  const [whichMeta, setWhichMeta] = useState(`Hi, I'm Elias.`);
  const [text, setText] = useState(welcomeMessage);

  
  const generalBio = "I was born in Manhattan, grew up mostly in Yonkers and in the sticks, and I’ve lived in Baltimore for nearly three years. I moved here from a stint in Seattle to earn my MFA in Poetry from Johns Hopkins University. In summer 2020, I earned my Master’s degree, and by August I was enrolled in General Assembly, pursuing my next evolution. Coding is the only craft I love like I love poetry. I want to make it my career so that, after some years, I’ll be able to apply what I know of poetry to Natural Language Processing. A lot of poets are still looking backward in time. I want to be in the now, and work my lights out to get ahead of the cutting edge, even if for just a second.";
  const poetryBio = "I earned my MFA in Poetry from Johns Hopkins University in 2020, and have work in Mantis, No Contact, The Bitchin Kitsch, Rougarou, and forthcoming in Cobra Milk.";
  const journalismBio = "I started working with @GAYLETTER four years ago, just writing online abt artists I liked. No matter how bad the world was being, this is a place where I was safe to grow. Interviewing @shamir326 was a moment last year that brought me pride in my work. I’m grateful for these opportunities, and excited to keep sharing what comes of them with u. .";
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
        <h1 className="title is-hidden-mobile is-clickable">{whichMeta}</h1>
      </div>
      <div className="block">
        <p className="bio_body">
          <TransitionGroup>
            <CSSTransition 
              key={meta}
              timeout={1000}
              classNames="biochange"
              >
              <div className="is-size-6-mobile">
                {text}
              </div>
            </CSSTransition>
          </TransitionGroup>
          </p>
      </div>
      <div className="block">
      </div>
    </div>
  )

}

export default LeftColumn;