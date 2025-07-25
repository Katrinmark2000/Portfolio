import { useState } from 'react';
import styles from './mainImage.module.scss'
import {PiHeartLight } from "react-icons/pi";


type TmainImage = {
    src: string
}

export const MainImage = ({
    src,
}: TmainImage) => {
    const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };
  
    return (
        <>
    <div className={styles.imageContainer}>
    <img 
    src={src} 
    className={styles.mainImage}
    alt='Мое изображение'
    />
    
    <div className={styles.photoBlockText}>
    <button 
    className={`${styles.buttonHeart} ${liked ? styles.active : ''}`}
    onClick={toggleLike}>

    <PiHeartLight style={{ width: '20px', height: '20px' }}
    color={liked ? 'red' : 'inherit'}
    />
    </button>
  Shall we collaborate?
  </div>
  </div>
  </>
    )
}