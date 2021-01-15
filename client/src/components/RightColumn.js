import React from 'react';
import Breadcrumb from './Breadcrumb';
import Picture from './Picture';

const RightColumn = ({meta}) => {

  return(
    <div>
      <div className="block">
        <p>And here's some {meta} information.</p>
      </div>
      <div className="block">
        <Picture/>
      </div>
      <div className="block">
        <Breadcrumb/>
      </div>
    </div>
  )

}

export default RightColumn;