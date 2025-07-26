import { TagNewSections } from '../../shared/ui/tagNewSection/tagNewSection'
import styles from './learningJourneySection.module.scss'



export const LearningJourney = () => {
    return (
        <>
        <div className={styles.fullBackground}>
    <div className={styles.inner}>
    <TagNewSections text='Learning Journey'/>
        <div className={styles.textBlock}>
        <h3 className={styles.title}>My Learning History</h3>
        <p className={styles.text}>Эта история — про рост, ошибки, рефакторинг и сотни строк кода. Я продолжаю развиваться, исследовать новые технологии и стремлюсь к тому, чтобы писать чистый, читаемый и устойчивый код. Здесь — ключевые этапы моего профессионального становления.</p>
        </div>
    </div>
    
    </div>
    </>
    )
}