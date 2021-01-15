import React from 'react';

const Breadcrumb = (props) => {

  return (
    <>
      <nav className="breadcrumb is-right" aria-label="breadcrumbs">
        <ul className="metaBio_links is-hidden-mobile">
          <li><a href={'https://github.com/baezus'} className="is-size-5" target="_blank">GitHub</a></li>
          <li><a href={'https://www.linkedin.com/in/baezus'} className="is-size-5" target="_blank">LinkedIn</a></li>
          <li><a href={'https://twitter.com/baez_us'} className="is-size-5" target="_blank">Twitter</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Breadcrumb;