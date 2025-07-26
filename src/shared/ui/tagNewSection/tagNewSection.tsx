import styles from './tagNewSection.module.scss'

type TagNewSections = {
text: string
}

export const TagNewSections = ({text}: TagNewSections) => {
    return(
    <div className={styles.tagSection}>
        <span>{text}</span>
        </div>
    )
}