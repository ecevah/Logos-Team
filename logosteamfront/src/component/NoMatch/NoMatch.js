import React from 'react'
import {useNavigate} from 'react-router-dom';
import styles from '../../styles/NoMatch.module.scss';
import bg from '../../img/errorBG.svg';
import logo from '../../img/logosLogoLight.svg';
import fail from '../../img/404.svg';

export default function NoMatch(props){
  const navigate = useNavigate();
  return (
    <>
        <section className={styles.section404}>
          <div className={styles.static}>
            <img src={bg} alt="background" height='50%' width="99%" className={styles.absolute}/>
          </div>
          <img src={logo} height="75" width="150" alt="logo"/> 
          <section className={styles.content}>
            <img src={fail} height="150" width="400" alt="404" className={styles.img404}/>
            <div className={styles.title}>Bu penceredeki oturumunuz son buldu.</div>
            <div className={styles.text}>Başka bir pencereden açılmış.</div>
            <button onClick={() => navigate("/")} id="btn">ANA SAYFAYA DÖN</button>
          </section>
        </section>
    </>
  )
}
