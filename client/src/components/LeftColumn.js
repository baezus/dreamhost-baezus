import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const welcomeMessage = `Thank you for taking the time to look at my work. I'm an early career software engineer specializing in React, Node.js, and virtual computing. I also write poetry and pop culture journalism. These sound divergent, but by my lights they're all about a similar thing: information is the compression of a batch of symbols; we take talk and make it message, datum, desire. We make talk travel farther and do more.`

const LeftColumn = ({meta}) => {

  const [whichMeta, setWhichMeta] = useState(`Hi, I'm Elias.`);
  const [text, setText] = useState(welcomeMessage);

  
  const generalBio = "I was born in Manhattan, grew up mostly in Yonkers and in the sticks, and I’ve lived in Baltimore for nearly three years. I moved here from a time in Seattle to earn my MFA in Poetry from Johns Hopkins University. In summer 2020, I earned my Master’s degree, and by August I was enrolled in General Assembly, trying to feel my way away from tradition and toward the now, the future. Coding is the only craft I revere like I do poetry. I want to make it my career so that, after some years, I’ll be able to apply what I know of poetry to Natural Language Processing. I want to be in the now, and get ahead of the cutting edge, even if for just a second.";
  const poetryBio = "When I was sixteen, I wrote a whole poem thinking about an acquaintance I didn’t like, and when I read it back I could tell that I was mad at myself. The poem, between the me who wrote it and the me who read it, created a message new to me. In that poem, I saw parts of me I hadn’t known. It would be corny to say that coding is the same, and it isn’t. Coding is entirely not about yourself. It’s not about parts of you that you don’t know. It’s about what of the world that you don’t know. But that unknown is encountered, like in poetry, in words and numbers.";
  const journalismBio = "I started working with GAYLETTER four years ago, just writing online about artists I liked. No matter how bad the world was being, GAYLETTER was a place where I was safe to grow. I’d be lying if I said I planned for my role at the magazine to become what it is now. As much as anything, my time there has shown me how commitment multiplies the depth and possibility of a relationship. I’m excited for my next article to come out, an interview with two queer Puerto Rican poets. We spoke the Friday afternoon when Georgia had just flipped against Trump.";
  const programmingBio = "I built this website in nearly pure React, which sounds and feels crazy, but it's true. It doesn't even have a router. It's all hooks and effect, like the Wizard of Oz. Anyway, in the half-year I've been seriously committed to coding, I have been changed. I started out on a shared server on BlueHost, and now I've got a VPS while I build up to higher degrees of abstraction and serverlessness. I cannot wait until I can scan the AWS docs for some mislaid fact with no anxiety like I finally do now with React. It's gonna be great.";

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