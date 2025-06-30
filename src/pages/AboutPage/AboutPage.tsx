import styles from './about-page.module.scss';
import myPhoto from '../../assets/images/myPhoto.jpg';

export const AboutPage = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>
        about. <span className={styles.highlight}>Me</span>
      </h1>

      <div className={styles.content}>
        <div className={styles.photoContainer}>
          <img 
            src={myPhoto} 
            alt="Моя фотография" 
            className={styles.photo}
          />
          <div className={styles.photoBorder}></div>
        </div>

        <div className={styles.text}>
          <p>
          Текст
          </p>
        </div>
      </div>
    </div>
  );
};
