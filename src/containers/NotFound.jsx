import React from 'react';
import scareCrow from '../assets/static/Scarecrow.png';
import '../assets/styles/components/NotFound.scss';

const NotFount = () => (
  <>
    <h4 className='title'>404 NOT FOUND</h4>
    <section className='error'>
      <picture className='image_not_found'>
        <img src={scareCrow} alt='' />
      </picture>
      <section className='info_container'>
        <h1 className='info-title'>I have bad news for you</h1>
        <p className='info-error'>
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <button type='button'>Back to homepage</button>
      </section>
    </section>
  </>
);

export default NotFount;
