import React from 'react';
import styles from './index.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
       <footer className={styles.footer}>
           <div className={styles.footer__container}>

               <div className={styles.footer__social}>
                   <a href="https://www.linkedin.com/in/glory-david-48890a25b/" className={styles.footer__social_link}
                      target="_blank" rel="noopener noreferrer">
                       <i className="fab fa-linkedin"></i>
                   </a>
                   <a href="https://github.com/chi-touch" className={styles.footer__social_link} target="_blank"
                      rel="noopener noreferrer">
                       <i className="fab fa-github"></i>
                   </a>
               </div>
               <span className={styles.footer__copy}>&#169; David Glory. All rights reserved</span>
           </div>
       </footer>
    );
}

export default Footer;
