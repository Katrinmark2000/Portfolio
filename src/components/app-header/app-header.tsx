import styles from './app-header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import { FaGithub, FaTelegram, FaVk } from 'react-icons/fa6'; 

export const AppHeader = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
  `${styles.navLink} ${isActive ? styles.active : ''}`;

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
        <Link to="/" className={styles.logoLink}>
              <img 
                src={logo} 
                alt="Логотип портфолио" 
                className={styles.logo}
              />
        </Link>
          <li>
            <NavLink to="/about" className={getNavLinkClass}>about</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={getNavLinkClass}>portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/rezume" className={getNavLinkClass}>resume</NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={getNavLinkClass}>contact</NavLink>
          </li>

          <li className={styles.socialIcons}>
            <a href="https://github.com/Katrinmark2000" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
            </a>
            <a href="https://t.me/mkkkash" target="_blank" rel="noopener noreferrer">
              <FaTelegram className={styles.icon} />
            </a>
            <a href="https://m.vk.com/cathrinemkkkash" target="_blank" rel="noopener noreferrer">
              <FaVk className={styles.icon} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};