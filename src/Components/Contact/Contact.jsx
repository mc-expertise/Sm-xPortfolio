import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact__page">
      <motion.h1
        className="title__pages"
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        Contact
      </motion.h1>
      <motion.div
        className="contact__me"
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>
        <div className="contact__mail">
          <p className="contact__text">{t('mail')}</p>
          <ul className="ul">
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="arrow__contact" />
              <a href="mailto:chouati.dev@gmail.com">Chouati.dev@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="contact__medias">
          <p className="contact__text">{t('Reseau')}</p>
          <ul className="ul contact__links">
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="arrow__contact" />
              <a
                href="https://www.instagram.com/mohamed.chouati_/"
                target="_blank"
                rel="noreferrer">
                Instagram
              </a>
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="arrow__contact" />
              <a
                href="https://www.linkedin.com/in/mch05"
                target="_blank"
                rel="noreferrer">
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
