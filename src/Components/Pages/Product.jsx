import React, { useEffect, useState } from 'react';
import './Styles.css';
import vdproduct from '../../Asset/PhotospROJECTS (7).mp4';
import { useTranslation } from 'react-i18next';

const Product = () => {
  const [clicked1, setClicked1] = useState(false);
  const [hover, setHover] = useState(true);
  const [counter, setCounter] = useState(1);
  const { t } = useTranslation();
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 1180) {
        setCounter(2);
      }
    };

    window.addEventListener('click', handleWindowResize);

    return () => {
      window.removeEventListener('click', handleWindowResize);
    };
  }, [counter]);

  const close = () => {
    setClicked1(false);
    setHover(true);
  };
  const counterClick = () => {
    setCounter(counter + 1);
    if (counter === 2) {
      close();
      setCounter(counter - 1);
    }
    console.log(counter);
  };
  const handleclicked = () => {
    setClicked1(true);
    setHover(false);
    counterClick();
  };

  return (
    <div className="smeex__page">
      <div className="video__landing">
        <video
          src={vdproduct}
          loop
          autoPlay
          muted
          className={
            clicked1 ? 'smeexyt__video1 smeexyt__active' : 'smeexyt__video1'
          }
          onClick={handleclicked}></video>

        <style>
          {`.smeexyt__video1:hover {
          transform: ${hover ? 'scale(1.02)' : ''};
        }`}
        </style>
        <style>
          {`.smeexyt__video2:hover {
          transform: ${hover ? 'scale(1.02)' : ''};
        }`}
        </style>
      </div>

      <div className="content__smeex">
        <h1 className="title__pages title__smeex">{t('h1prod')}</h1>
        <div className="smeex__text">
          <p>
            <span>Page Produit</span> {t('descriptioncode1')}{' '}
            <span>JavaScript ,HTML, CSS.</span>{' '}
            <a
              href="https://github.com/MohamedCh99/Product-Page"
              target="_blank"
              rel="noreferrer">
              {t('liencode')}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
