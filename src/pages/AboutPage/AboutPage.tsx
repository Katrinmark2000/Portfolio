import styles from './about-page.module.scss';
import { MainImage } from '../../shared/ui/mainImage/mainImage';
import myPhoto from '../../assets/images/myPhoto.jpg'
import { Button } from '../../shared/ui/button/button';
import { PiArrowRightLight, PiDownloadSimpleLight} from "react-icons/pi";
import { LearningJourney } from '../../widgets/learningJourneySection/learningJourneySection';

export const AboutPage = () => {
  const pdfUrl = '/public/rezume.pdf';
  const pdfFileName = 'rezume.pdf';

  return (
    <>
    <div className={styles.about}>
      <div className={styles.textBlock}>
      <h2 className={styles.title}>
      Frontend <span>
      Developer</span>
      </h2>
      <h3 className={styles.subTitle}>
        <span>Открыта</span> к новому опыту
      </h3>
      <div className={styles.text}>
          <p>
          Привет! Я фронтенд-разработчик, создаю быстрые, адаптивные и удобные интерфейсы. Уверенно работаю с React, TypeScript и современным стеком. Люблю чистый код, продуманный UX и задачи, которые бросают вызов.
          </p>
        </div>
        <div className={styles.buttons}>
<Button color={'shaded'} width='180px'>
  View My Skills 
  <PiArrowRightLight className={styles.icon}/>
</Button>
<Button color={'primary'} width='180px'>
<a href={pdfUrl} download={pdfFileName}>
  Download Resume
<PiDownloadSimpleLight className={styles.icon}/>
</a>
</Button>
</div>
        </div>
      <div className={styles.content}>
          <MainImage src={myPhoto}/>
        </div>
    </div>
    <LearningJourney/>
    </>
  );
};
