import style from './resumePage.module.scss'
import myResumePDF from '../../../public/rezume.pdf'

export const ResumePage = () => {
    return (
    <div className={style.resume}>
    <div className={style.textBlock}>
      <h2 className={style.title}>
        Здесь можно скачать PDF файл моего резюме
        </h2>
    </div>
      <div className={style.downloadPDF}>
        <a href={myResumePDF} download>
        Скачать резюме
        </a>
      </div>
    </div>
    )
  };