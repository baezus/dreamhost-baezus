import React from 'react';
import Breadcrumb from './Breadcrumb';
import Picture from './Picture';

const RightColumn = () => {

  return(
    <div>
      <p>And here's some meta information.</p>
      <Picture/>
      <Breadcrumb/>
    </div>
  )

}

export default RightColumn;