import React, { useState } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../../scss/navbar.module.scss';
import { FaAlignRight } from 'react-icons/fa';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import logo from '../../images/logo.svg';

const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button className={styles.logoBtn} onClick={() => setState(!state)}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            state
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map(link => (
            <li key={link.path}>
              <AniLink fade to={link.path}>
                {' '}
                {link.text}{' '}
              </AniLink>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map(icon => (
            <a
              key={icon.url}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
