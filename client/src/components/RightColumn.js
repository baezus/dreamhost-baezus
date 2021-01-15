import React from 'react';
import Breadcrumb from './Breadcrumb';
import Picture from './Picture';

const RightColumn = ({meta}) => {

  return(
    <div className="is-hidden-mobile">
      <div className="block">
        <p>{meta}</p>
      </div>
      <div className="block">
        <Picture meta={meta}/>
      </div>
      <div className="block">
        <Breadcrumb meta={meta}/>
      </div>
      <div className="block">

      </div>
    </div>
  )

}

export default RightColumn;