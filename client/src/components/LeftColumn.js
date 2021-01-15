import React, { useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';

const LeftColumn = ({meta}) => {

  const [whichMeta, setWhichMeta] = useState('Welcome');
  const [text, setText] = useState('');

  const generalBio = "I'm from New York and I live in Baltimore.";
  const poetryBio = "Elias Baez is a poet, editor, and programmer living in Baltimore. He earned his MFA in Poetry from Johns Hopkins University in 2020, and has work in Mantis, No Contact, The Bitchin Kitsch, Rougarou, and forthcoming in Cobra Milk.";
  const journalismBio = "I've been working with GAYLETTER since 2016.";
  const programmingBio = "Site designed using React, Sass, Bulma, and a Node.js backend.";

  const decideWhich = () => {
    console.log('switch activated');
    switch(meta) {
      case 'general':
        setText(generalBio);
        setWhichMeta('General');
        console.log('general bio set');
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
        setText(generalBio);
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
      <h1 className="title">{whichMeta}</h1>
      </div>
      <div className="block">
      <p>{text}</p>
      </div>
    </div>
  )

}

export default LeftColumn;