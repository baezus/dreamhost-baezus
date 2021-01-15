import React, { useEffect, useState } from 'react';

const LeftColumn = ({meta}) => {

  const [whichMeta, setWhichMeta] = useState(meta);
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
        console.log('general bio set');
        break;
      case 'poetry':
        setText(poetryBio);
        console.log('poetry bio set');
        break;
      case 'journalism':
        setText(journalismBio);
        console.log('journalism bio set');
        break;
      case 'programming':
        setText(programmingBio);
        console.log('programming bio set');
        break;
      default:
        setText('wack');
        break;
    }
  }

  useEffect(() => {
    const nextMeta = decideWhich();
    setWhichMeta(nextMeta);
  }, [meta])

  return(
    <div>
      <p>{text}</p>
    </div>
  )

}

export default LeftColumn;