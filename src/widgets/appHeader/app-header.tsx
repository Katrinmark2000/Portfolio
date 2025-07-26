import styles from './app-header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { PiTelegramLogoLight, PiMoonLight, PiGithubLogoLight, PiStarLight, PiLineVerticalLight} from "react-icons/pi";

export const AppHeader = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
  `${styles.navLink} ${isActive ? styles.active : ''}`;

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
        <Link to="/" className={styles.logoText}>
              <div className={styles.logoTextTitle}>Markova Katrin</div>
              <div className={styles.logoTextDescription}>Frontend Developer</div>
        </Link>

          <li>
            <NavLink to="/about" className={getNavLinkClass}>about</NavLink>
          </li>
          <li>
            <NavLink to="/project" className={getNavLinkClass}>project</NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={getNavLinkClass}>experience</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getNavLinkClass}>contact</NavLink>
          </li>

          <li className={styles.socialIcons}>
            <a href="https://github.com/Katrinmark2000" target="_blank" rel="noopener noreferrer">
              <PiGithubLogoLight className={styles.icon} />
            </a>
            <a href="https://t.me/mkkkash" target="_blank" rel="noopener noreferrer">
              <PiTelegramLogoLight className={styles.icon} />
            </a>
          
          <PiLineVerticalLight/>
          <div className={styles.buttons}>
          <button className={styles.themeButton}>
            <PiMoonLight className={styles.icon} />
          </button>
          <button className={styles.themeButton}>
            <PiStarLight className={styles.icon} />
          </button>
          </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};