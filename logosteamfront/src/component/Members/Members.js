import React from 'react'
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

import styles from '../../styles/App.module.scss';
import sub from '../../styles/Sub.module.scss';
import layout from '../../styles/Layout.module.scss';

import Button from '../Button/button';

import logosLogoLight from '../../img/logosLogoLight.svg'
import logosLogo from '../../img/logosLogo.svg';
import karalama from '../../img/karalama.svg';
import okan from '../../img/okan.png';
import kerem from '../../img/kerem.png';
import mehmetcan from '../../img/mehmetcan.png';
import ahmet from '../../img/ahmet.png';
import alper from '../../img/alper.png';
import bora from '../../img/bora.png';
import halil from '../../img/halil.png';
import dincer from '../../img/dincer.png';
import samed from '../../img/samed.png';

function Homepage() {
    if(localStorage.getItem('theme')== null || localStorage.getItem('theme')===undefined || localStorage.getItem('theme')===''){
        localStorage.setItem('theme', true);
    }
    const [theme, setTheme] = useState(localStorage.getItem('theme'));  
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const arr = [
        {
            text:'Nasıl Çalışır',
            link:'/howto'
        },
        {
            text:'Hakkımızda',
            link:'/about'
        },
        {
            text:'Takım Üyeleri',
            link:'/members'
        },
        {
            text:'İletişim',
            link:'/contact'
        }
    ]

    const arrlogos = [
        {
            text:'Hakkımızda',
            href:'/about'
        },
        {
            text:'Misyon&Vizyon',
            href:'/'
        },
        {
            text:'Ekip Üyelerimiz',
            href:'/members'
        },
        {
            text:'Projemiz',
            href:'/howto'
        },
        {
            text:'KVKK',
            href:'/kvkk'
        }
    ]
    const arrBlog = [
        {
            text:'Medium',
            href:''
        }
    ]
    const arrSocial = [
        {
            text:'Linkedin',
            href:'https://www.linkedin.com/company/logos-team/'
        },
        {
            text:'Twitter',
            href:''
        },
        {
            text:'Instagram',
            href:'https://www.instagram.com/logos_team2023/'
        },
        {
            text:'YouTube',
            href:''
        },
    ]
    const arrIcon = [
        {
            icon:'ri-instagram-line',
            href:'https://www.linkedin.com/company/logos-team/'
        },
        {
            icon:'ri-linkedin-fill',
            href:'https://www.linkedin.com/company/logos-team/'
        },
        {
            icon:'ri-twitter-fill',
            href:''
        },
        {
            icon:'ri-medium-fill',
            href:''
        },
        {
            icon:'ri-youtube-fill',
            href:''
        }
    ]
    const arrMember = [
        {
            photo:kerem,
            name:'Nihat Kerem Bora',
            tag:'Ekip Kaptanı',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'https://www.linkedin.com/in/nihat-kerem-bora-2ba933209    ',
            instagram:'',
            github:'https://github.com/NKeremBora',
            twitter:'',
            behance:''
        },
        {
            photo:mehmetcan,
            name:'Mehmetcan Sevinçli',
            tag:'Ruh Sağlığı Profesyoneli',
            title:'Hacettepe Üniversitesi Doktora Sosyal Psikoloji',
            linkedin:'https://www.linkedin.com/in/mehmet-can-sevincli',
            instagram:'',
            github:'',
            twitter:'',
            behance:''
        },
        {
            photo:ahmet,
            name:'Ahmet Ecevit',
            tag:'Full Stack Developer',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'https://www.linkedin.com/in/ahmet-ecevit/',
            instagram:'https://www.instagram.com/eecevah/',
            github:'https://github.com/ecevah',
            twitter:'https://twitter.com/ecevah',
            behance:''
        },
        {
            photo:alper,
            name:'Ali Alper Şahin',
            tag:'Backend Developer',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'https://www.linkedin.com/in/ali-alper-%C5%9Fahin-363bb9209/',
            instagram:'https://www.instagram.com/alialper_sahin/?hl=tr',
            github:'https://github.com/alialpershn',
            twitter:'',
            behance:''
        },
        {
            photo: bora,
            name:'Bora Körpe',
            tag:'Mobile Developer',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'https://tr.linkedin.com/in/bora-k%C3%B6rpe-4603121b5',
            instagram:'',
            github:'https://github.com/borakorpee',
            twitter:'',
            behance:''
        },
        {
            photo:halil,
            name:'Halil İbrahim Hatun',
            tag:'Ai Developer',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'https://www.linkedin.com/in/halil-ibrahim-hatun-8535a01bb/',
            instagram:'',
            github:'https://github.com/Halil3509',
            twitter:'',
            behance:''
        },
        {
            photo:dincer,
            name:'Dinçer Kaan Turnalı',
            tag:'Ai Developer',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 3. Sınıf',
            linkedin:'https://www.linkedin.com/in/din%C3%A7er-kaan-turanl%C4%B1/',
            instagram:'',
            github:'https://github.com/dincerkaan',
            twitter:'',
            behance:''
        },
        {
            photo:samed,
            name:'Samed Karakuş',
            tag:'UI/UX Desinger',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. - 2. Sınıf',
            linkedin:'https://www.linkedin.com/in/samedkarakusceng',
            instagram:'https://instagram.com/karakus.samed?igshid=YmMyMTA2M2Y=',
            github:'https://github.com/samedkarakus',
            twitter:'https://twitter.com/samed_karakus0',
            behance:'https://www.behance.net/samedkarakus'
        },
        {
            photo:okan,
            name:'Okan Bursa',
            tag:'Danışman',
            title:'İzmir Bakırçay Üniversitesi Bilgisayar Müh. Bölüm Başkan Yardımcısı',
            linkedin:'https://www.linkedin.com/in/okan-bursa-phd-99841b8',
            instagram:'',
            github:'',
            twitter:'',
            behance:''
        }
    ]

    const themeChoose = async () =>{
        await localStorage.setItem('theme', !theme);
        await setTheme(!theme);
    }

  return (
    <>
        <section className={open ? theme ? styles.hamburgerBg : styles.lighthamburgerBg : theme ? styles.headers : styles.lightHeaders}>
        <div className={ theme ? open ? styles.headerFixed : null : open ? styles.lightheaderFixed : null } >
                <section className={`${layout.container} ${styles.headersDiv}`}>
                    <button onClick={()=> navigate("/")}><img src={theme ? logosLogo : logosLogoLight} alt='logo' className={styles.logosImage} height={75} width={150}/></button>
                    <div className={styles.headerLink}>
                    {arr.map((item)=>
                        <button className={theme ? styles.headerLinkItem : styles.lightheaderLinkItem} onClick={()=> navigate(item.link)}>{item.text}</button>
                    )}
                    </div>
                    <div className={styles.btnHeaderDiv}>
                        <button onClick={()=>navigate("/login")} className={theme ? styles.headerLinkItem:sub.lightheaderLinkItem}>Giriş Yap</button>
                        <button onClick={()=>navigate("/signup")}><Button type='primary' text='Kayıt Ol'/></button>
                        {theme ? <button onClick={()=>themeChoose()} className={styles.themeBtn}><i className={`ri-sun-line ${styles.dark}`}></i></button> : <button onClick={()=>themeChoose()} className={styles.themeBtn}><i className={`ri-moon-line ${open ? styles.openlight : styles.light}`}></i></button>}
                    </div>
                    <div className={styles.mobileBtnDiv}>
                        {theme ? <button onClick={()=>themeChoose()} className={styles.themeBtn}><i className={`ri-sun-line ${styles.dark}`}></i></button> : <button onClick={()=>themeChoose()} className={styles.themeBtn}><i className={`ri-moon-line ${open ? styles.openlight : styles.light}`}></i></button>}
                        <button className={styles.mobileBtn} onClick={()=>setOpen(!open)}>
                            {open ? <i className={`ri-close-line ${theme ? styles.hamburgerMenu : styles.lighthamburgerMenu}`}></i> : <i className={`ri-menu-line ${theme ? styles.hamburgerMenu : styles.lighthamburgerMenu}`}></i>}
                        </button>
                    </div>
                </section>
            </div>
            <section className={open ? theme ? styles.dropdownMenu : styles.lightdropdownMenu : styles.dropdownMenuNone}>
                <div className={styles.dropdownInclusive}>
                    <div className={styles.dropdownContent}>
                        {arr.map((item)=>
                            <button onClick={()=> navigate(item.link)} className={theme ? styles.headerLinkItemHamburger : styles.lightheaderLinkItemHamburger} href={item.link}>{item.text}</button>
                        )}
                    </div>
                    <div className={styles.dropdawnBtn}>
                        <button onClick={()=> navigate("/login")}><Button type='second' text='Giriş Yap' theme={theme ? null:'light'}/></button>
                        <button onClick={()=> navigate("/signup")}><Button type='primary' text='Kayıt Ol'/></button>
                    </div>
                </div>
            </section>
            <section className={`${sub.memberSection} ${layout.container}`}>
                <div className={theme ? sub.lightmemberTitle : sub.memberTitle}>Ekip Üyelerimiz</div>
                <div className={sub.subStatic}>
                    <img className={sub.subKaralama} src={karalama} alt='karalama' height={40} width={304}></img>
                </div>
                <div className='container'>
                    <div className={`row row-cols-1 row-cols-xl-3`}>
                        {arrMember.map((item)=>
                            <div className={theme ? `col ${sub.lightmember}` :`col ${sub.member}`}>
                                <div>
                                    <img src={item.photo} alt={item.name} className={sub.image} height={200} width={200}></img>
                                </div>
                                <div className={sub.memberName}>{item.name}</div>
                                <div className={sub.memberTag}>{item.tag} </div>
                                <div className={sub.memberText}>{item.title}</div>
                                <div>
                                    <a className={item.linkedin===''? sub.none : sub.a} target="_blank" rel="noopener noreferrer" href={item.linkedin}>
                                        <i className={`ri-linkedin-fill ${theme ? sub.icon : sub.lighticon}`}></i>
                                    </a>
                                    <a className={item.instagram===''? sub.none : sub.a} target="_blank" rel="noopener noreferrer" href={item.instagram}>
                                        <i className={`ri-instagram-line ${theme ? sub.icon : sub.lighticon}`}></i>
                                    </a>
                                    <a className={item.github===''? sub.none : sub.a} target="_blank" rel="noopener noreferrer" href={item.github}>
                                        <i className={`ri-github-fill ${theme ? sub.icon : sub.lighticon}`}></i>
                                    </a>
                                    <a className={item.twitter===''? sub.none : sub.a} target="_blank" rel="noopener noreferrer" href={item.twitter}>
                                        <i className={`ri-twitter-fill ${theme ? sub.icon : sub.lighticon}`}></i>
                                    </a>
                                    <a className={item.behance===''? sub.none : sub.a} target="_blank" rel="noopener noreferrer" href={item.twitter}>
                                        <i className={`ri-behance-fill ${theme ? sub.icon : sub.lighticon}`}></i>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </section>
        <section className={theme ? styles.section : styles.lightsectionfooter}>
            <div className={layout.container}>
                <div className={styles.footerSection}>
                    <div className={styles.footerInclusive}>
                        <div className={styles.footerLogoDiv}>
                            <div>
                                <img src={theme ? logosLogo : logosLogoLight} alt='logos' width={157.56} height={79.32} />
                            </div>
                            <div className={theme ? styles.footerLogoTitle : styles.lightfooterLogoTitle}>İletişim</div>
                            <div className={theme ? styles.footerLogoText : styles.lightfooterLogoText}>contact@logos.com.tr</div>
                        </div>
                        <div className={styles.footerContent}>
                            <div className={theme ? styles.footerItemContent : styles.lightfooterItemContent}>
                                <div className={styles.footerItemTitle}>Logos</div>
                                {arrlogos.map((item)=>
                                    <button onClick={()=> navigate(item.href)} className={styles.footerItemText}>{item.text}</button>
                                )}
                            </div>
                            <div className={theme ? styles.footerItemContent : styles.lightfooterItemContent}>
                                <div className={styles.footerItemTitle}>Blog</div>
                                {arrBlog.map((item)=>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer"className={styles.footerItemText}>{item.text}</a>
                                )}
                            </div>
                            <div className={theme ? styles.footerItemContent : styles.lightfooterItemContent}>
                                <div className={styles.footerItemTitle}>Sosyal Medya</div>
                                {arrSocial.map((item)=>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.footerItemText}>{item.text}</a>
                                )}
                            </div>
                            <div className={theme ? styles.footerSocial : styles.lightfooterSocial}>
                            <div className={styles.footerSocialTitle}>Social</div>
                            <div className={styles.footerSocialCardDiv}>
                                {arrIcon.map((item)=>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                                        <i className={`${item.icon} ${styles.icon}`}></i>
                                    </a>
                                )}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className={theme ? styles.copyright : styles.lightcopyright}>
                        Copyright © 2023 Logos
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Homepage;