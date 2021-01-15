import React, { useEffect, useState } from 'react';


const Breadcrumb = ({meta}) => {

  const [whichOne, setWhichOne] = useState(meta);
  const [ulArray, setUlArray] = useState(['GitHub','LinkedIn','Instagram'])
  const [ulLinks, setUlLinks] = useState(['//www.github.com/baezus', '//www.linkedin.com/in/baezus/', '//www.instagram.com/baez.us/?hl=en']);

  const metaValue = () => {
    let trueValue = meta;
    switch (trueValue) {
      case 'about':
        setUlArray(['GitHub','LinkedIn','Instagram'])
        setUlLinks(['//www.github.com/baezus', '//www.linkedin.com/in/baezus/', '//www.instagram.com/baez.us/?hl=en'])
        break;
      case 'poetry':
        setUlArray(['Miss Bay & The Parasite','I wanna tutor Katy Perry','The Demon Star'])
        setUlLinks(['//www.nocontactmag.com/miss-bay-the-parasite', '//issuu.com/chris_talbot/docs/bkvol11issue4fall/s/11050728', '//rougarou.org/the-demon-star-a-locket-for-algol/'])
        break;
      case 'journalism':
        setUlArray(['Jericho Brown','Shamir','Tegan & Sara']);
        setUlLinks(['//gayletter.com/jericho-brown/','//gayletter.com/shamir/','//gayletter.com/tegan-and-sara/']);
        break;
      case 'programming':
        setUlArray(['Portfolio']);
        setUlLinks(['//baez.us']);
        break;
      default:
    }
  };

  useEffect(() => {
    const newMeta = metaValue();
    setWhichOne(newMeta)
  }, [meta])

  return (
    <>
      <nav className="breadcrumb is-right" aria-label="breadcrumbs">
        <ul className="metaBio_links">
          <li><a 
          href={ulLinks[0]} 
          className="is-size-5" 
          target="_blank"
          rel="noreferrer">{ulArray[0]}</a></li>
          <li><a 
          href={ulLinks[1]} 
          className="is-size-5" 
          target="_blank"
          rel="noreferrer">{ulArray[1]}</a></li>
          <li><a href={ulLinks[2]}
          className="is-size-5" 
          target="_blank"
          rel="noreferrer">{ulArray[2]}</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Breadcrumb;