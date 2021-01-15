import React from 'react';

const Picture = (props) => {

  return (
    <>
      <div>
        <figure className="image is-square is-rounded">
          <img 
            className="image is-rounded"
            src='https://avatars2.githubusercontent.com/u/69644463?s=460&u=068a3d5c3e5d8b54f6462690521c81decc3ceb01&v=4.jpg'
          />
        </figure>
        <p>image</p>
      </div>
    </>
  )
}

export default Picture;