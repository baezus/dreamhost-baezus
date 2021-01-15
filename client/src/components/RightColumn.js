import React from 'react';
import Breadcrumb from './Breadcrumb';
import Picture from './Picture';

const RightColumn = ({meta}) => {

  return(
    <div>
      <div className="block">
        <p className="is-hidden-tablet is-capitalized">{meta}</p>
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