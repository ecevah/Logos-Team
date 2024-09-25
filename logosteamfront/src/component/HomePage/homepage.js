import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import styles from '../../styles/App.module.scss';
import layout from '../../styles/Layout.module.scss';

import Button from '../Button/button';

import logosLogoLight from '../../img/logosLogoLight.svg'
import logosLogo from '../../img/logosLogo.svg';
import first from '../../img/appFirst.webp';
import mimar from '../../img/mimarSinanLogo.png';
import muhendishane from '../../img/mühendishane.svg';
import mimarLight from '../../img/mimarLight.png';
import muhendishaneLight from '../../img/muhendishaneLight.svg';
import teknofest from '../../img/teknofestLogo.svg';
import teknoloji from '../../img/teknolojiTakım.svg';
import teknolojiLight from '../../img/teknolojiLight.svg';
import kyk from '../../img/kyk.svg';
import kasnak from '../../img/kasnak.svg';
import doc from '../../img/doc.svg';
import wifi from '../../img/wifi.svg';
import karalama from '../../img/karalama.svg';
import second from '../../img/second.webp';
import third from '../../img/third.png';
import secure from '../../img/secure.svg';
import logoPhone from '../../img/logoPhone.png';
import phone from '../../img/phone.png';
import bg from '../../img/lastBG.svg';

function Homepage() {
    if(localStorage.getItem('theme')== null || localStorage.getItem('theme')===undefined || localStorage.getItem('theme')===''){
        localStorage.setItem('theme', true);
    }
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const [open, setOpen] = useState(false)
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
    const arrSponsor = [
        {
            alt:'mimar',
            item: mimar,
            light: mimarLight
        },
        {
            alt:'muhendishane',
            item: muhendishane,
            light: muhendishaneLight
        },
        {
            alt:'teknofest',
            item:teknofest,
            light: teknofest
        },
        {
            alt:'teknoloji',
            item:teknoloji,
            light: teknolojiLight
        },
        {
            alt:'kyk',
            item:kyk,
            light: kyk
        }
    ]
    const arrCard = [
        {
            img:kasnak,
            title:'Kolay Arayüz',
            text:'Uygulama veya web sitesi gibi bir dijital ortamla etkileşim kurmasını sağlayan bir tasarım özelliği.',
            alt:'kasnak'
        },
        {
            img:wifi,
            title:'Online Birebir İletişim',
            text:'Birebir iletişim, iletişimdeki engelleri azaltır ve daha anlamlı ve verimli bir iletişim sağlar.',
            alt:'wifi'
        },
        {
            img:doc,
            title:'Tek Yerde Yönet',
            text:'Birebir iletişim, iletişimdeki engelleri azaltır ve daha anlamlı ve verimli bir iletişim sağlar.',
            alt:'doc'
        }
    ]
    const arrUI = [
        {
            alt: 'logoPhone',
            img:logoPhone,
            number:'1',
            title:'Hesap Oluştur',
            text: 'Bu işlem, kullanıcılara web sitesine veya platforma erişmesi için yapması gereklidir.'
        },
        {
            alt: 'phone',
            img:phone,
            number:'2',
            title:'Profili doldur',
            text: 'Diğer kullanıcılarla etkileşim kurarken daha doğru ve kapsamlı bir profil sunabilirler.'
        },
        {
            alt: 'phone2',
            img:phone,
            number:'3',
            title:'Uygun doktor ile görüş.',
            text: 'Birçok kişinin sağlık sorunlarına yönelik çözüm aradıklarında tercih ettikleri bir yöntemdir'
        }
    ]  
    const arrFaq = [
        {
            title1:'Kayıt formunu doldurdum ancak geri dönüş alamadım. Ne yapabilirim?',
            text1: 'Kayıt formunu doldurduktan sonra size en uygun psikolog ile eşleştirilmeniz için bir süreç başlatılır. Bu süreçte bir psikolog size atanacaktır ve atanma işlemi tamamlandığında size bilgi verilecektir. Ancak süreç hakkında bilgi almak isterseniz, contact@logos.com adresinden bize ulaşabilirsiniz.',
            title2: 'Online terapi seanslarına katılmak için internet hızım ne kadar olmalı?',
            text2: 'Online terapi seanslarına katılmak için minimum 512 Kbps hızında internet bağlantısı gereklidir. Ancak daha yüksek hızlar tercih edilir.'
        },
        {
            title1:'Online terapi seansları ne kadar sürüyor?',
            text1: 'Online terapi seansları genellikle 50-60 dakika sürer. Ancak psikologunuzla belirlediğiniz süreye göre değişebilir.',
            title2: 'Seans sırasında kullanabileceğimiz hangi iletişim yöntemleri var?',
            text2: 'Online terapi seanslarında video görüşme, sesli görüşme veya metin mesajlaşma yöntemlerinden biri veya birkaçı kullanılabilir. Psikologunuzla önceden belirleyebilirsiniz.'
        },
        {
            title1:'Psikologumun beni anlamaması durumunda ne yapabilirim?',
            text1: 'Eğer psikologunuz sizi anlamıyorsa, bunu açık bir şekilde dile getirmelisiniz. Birlikte farklı bir yaklaşım deneyebilir veya size daha iyi yardımcı olabilecek bir başka psikologla eşleştirilmenizi talep edebilirsiniz.',
            title2: 'Online terapi seanslarında gizlilik nasıl sağlanıyor?',
            text2: 'Logos, online terapi seanslarında gizliliğe büyük önem vermektedir. Tüm seanslar end-to-end şifreleme ile korunmaktadır ve Logos tarafından sağlanan platform dışında herhangi bir şekilde kaydedilmemektedir. Ayrıca psikologlarımız da gizliliği koruma konusunda yüksek hassasiyete sahiptirler.'
        }
    ]
    const arrlogos = [
        {
            text:'Hakkımızda',
            href:'/about'
        },
        {
            text:'Misyon&Vizyon',
            href:'/misyon'
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

    const themeChoose = () =>{
        setTheme(!theme);
        localStorage.setItem('theme', theme);
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
                        <button onClick={()=>navigate("/login")} className={styles.headerLinkItem}>Giriş Yap</button>
                        <button onClick={()=>navigate("/signup")}><Button type='primary' text='Kayıt Ol'/></button>
                        {theme ? <button onClick={()=>themeChoose()} className={styles.themeBtn}><i className={`ri-sun-line ${styles.dark}`}></i></button> : <button onClick={()=>themeChoose()} className={styles.themeBtn}><i className={`ri-moon-line ${styles.light}`}></i></button>}
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
            <div className={`${styles.firstCard} ${layout.container}`}>
                <div className={styles.firstCardDiv}>
                    <div className={theme ? styles.firstCardTitle : styles.lightfirstCardTitle}>Psikolojini harika bir şekilde tut ve iyileş.</div>
                    <div className={theme ? styles.firstCardText : styles.lightfirstCardText}>Elde edeceğiniz özellikler, ruh sağlığınızı korumanıza ve geliştirmenize yardımcı olacak şekilde tasarlanmıştır.</div>
                    <div className={styles.firstCardBtnDiv}>
                        <button onClick={()=> navigate("/howto")}><Button type='primary' text='Detaylar'/></button>
                        <div className={styles.null}></div>
                        <button onClick={()=> navigate("/howto")}><Button type='second' text='İncele' theme={theme ? null:'light'}/></button>
                    </div>
                </div>
                <div className={styles.firstImageDiv}>
                    <img src={first} alt='first' className={styles.firstImage}></img>
                </div>
            </div>
            <section className={theme ? styles.sponsorSection : styles.lightsponsorSection}>
                <div className={theme ? `${styles.sponsorDiv} ${layout.container}` : `${styles.lightsponsorDiv} ${layout.container}`}>
                    <div className={theme ? styles.sponsorTitle : styles.lightsponsorTitle}>Önde gelen sponsorlar</div>
                        <div className={styles.sponsorImg}>
                            {arrSponsor.map((item)=>
                                <div>
                                    {item.alt==='mimar'? 
                                        <img src={theme ? item.item : item.light} alt={item.alt} height={100} width={100}></img>:
                                        <img src={theme ? item.item : item.light} alt={item.alt} height={83}></img>
                                }
                                </div>
                            )}
                        </div>
                    </div>
            </section>
        </section> 
        <section className={theme ? styles.section : styles.lightsection}>
            <div className={styles.cardCizgi}>
                <div className={theme ? styles.cardCizgiTitle : styles.lightcardCizgiTitle}>Günlük ruh halinize yardımcı olacak en iyi özelliklere sahip olacaksınız.</div>
                <div className={theme ? styles.cardCizgiText : styles.lightcardCizgiText}>Günlük yaşamın zorluklarıyla başa çıkmak, stresli işler ve yoğun programlar, insanların ruh halini olumsuz etkileyebilir. Ancak, birçok farklı yöntemle günlük ruh halimizi kontrol etmek mümkündür.</div>
            </div>
            <div className={styles.cardStatic}>
                <img className={styles.cardKaralama} src={karalama} alt='karalama' height={40} width={304}></img>
            </div>
            <div className={theme ? styles.cardCardDiv : styles.lightcardCardDiv}>
                {arrCard.map((item)=>
                    <div className={styles.cardCard}>
                        <img src={item.img} alt={item.alt} height={50} width={50}></img>
                        <div className={styles.cardCardTitle}>{item.title}</div>
                        <div className={styles.cardCardText}>{item.text}</div>
                    </div>
                )}
            </div>
        </section>
        <section className={theme ? styles.section : styles.lightsection}>
            <div className={theme ? `${styles.cardSecondDiv} ${layout.container}` : `${styles.lightcardSecondDiv} ${layout.container}`}>
                <div className={styles.cardSecondContent}>
                    <div className={styles.cardSecondTitle}>Tüm randevularınızı verimli bir şekilde tek bir yerde yönetin</div>
                    <div className={styles.cardSecondText}>Farklı platformlarda ve uygulamalarda dağılmış olan verileri ve görevleri tek bir yerde toplayarak yönetmeyi amaçlayan bir yaklaşım</div>
                    <button onClick={()=> navigate("/howto")}><Button type='second' text='Detaylı bilgi al' theme={theme ? null:'light'} width='high'/></button>
                </div>
                <div>
                    <img src={second} alt='second' style={{marginTop:'20px'}}/>
                </div>
            </div>
        </section>
        <section className={theme ? styles.purpleSection : styles.lightpurpleSection}>
            <div className={styles.thirdRelative}>
                <img src={third} alt='third' className={styles.thirdImg}></img>
            </div>
            <div className={styles.purpleContent}>
                <div className={styles.lightText}>Günlük enerjinizi artıracak şeyler.</div>
                <div className={styles.purpleTitle}>Günlük ruh sağlığınız için basit araç, güçlü etki.</div>
                <div className={styles.purpleSecureDiv}>
                    <img src={secure} alt='secure' className={styles.secureImg}></img>
                    <div className={styles.secureText}>Güvenli ve korunaklı</div>
                </div>
                <div className={styles.purpleText}>Günlük hayatın koşuşturması içinde, zihinsel sağlığımızı korumak için basit ama etkili araçlara ihtiyaç duyuyoruz. Günlük hayatın rutininde uygulanabilen basit araç olan bu proje, zihinsel sağlığımızı korumada ve geliştirmede güçlü bir etkiye sahiptir.</div>
            </div>
        </section>
        <section className={theme ? styles.section : styles.lightsection}>
            <div className={`${styles.uiCardDiv} ${layout.container}`}>
                <div className={styles.uiCardContent}>
                    <div className={theme ? styles.uiCardTitle : styles.lightuiCardTitle}>"Logos ile başlamanın yolları”</div>
                    <div className={theme ? styles.uiCardText : styles.lightuiCardText}>İnsanların zor zamanlarında yardımcı olmak ve onlara destek sağlamak için tasarlanmıştır.</div>
                    <button onClick={()=> navigate("/howto")}><Button type='primary' text='Şanısın Dene' /></button>
                </div>   
                <div className={styles.uiCardPurple}>
                    {arrUI.map((item)=>
                        <div className={theme ? styles.uiCardEnclusive : styles.lightuiCardEnclusive}>
                            <div className={styles.uiPurpleDiv}>
                                <div className={styles.uiPurpleNumber}>{item.number}</div>
                                <div className={styles.uiPurpleTitle}>{item.title}</div>
                                <div className={styles.uiPurpleText}>{item.text}</div>
                            </div>
                            <div className={styles.uiPurpleDarkDiv}>
                                <img src={item.img} alt={item.alt} height={248} width={154}></img>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
        <section className={theme ? styles.sssSection : styles.lightsssSection}>
            <div className={`${layout.container} ${styles.faqContainer}`}>
                <div className={styles.cardStatic}>
                    <img className={styles.sssKaralama} src={karalama} alt='karalama' height={40} width={304}></img>
                </div>
                <div className={styles.sssTitle}>Sıkça sorulan sorular</div>
                <div className={styles.sssText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis est id faucibus iaculis. Cras et congue tortor. Integer laoreet leo risus, accumsan aliquam nisi ornare at.</div>
                <div className={styles.sssCardStatic}>
                {arrFaq.map((item)=>
                    <div className={styles.sssCardDiv}>
                        <div className={styles.faqCard}>
                            <details>
                                <summary className={theme ? null : styles.lightSummary}>{item.title1}</summary>
                                    <div className={styles.faqText}>
                                        {item.text1}
                                    </div>
                            </details>
                        </div>
                        <div className={styles.faqCard}>
                            <details>
                                <summary className={theme ? null : styles.lightSummary}>{item.title2}</summary>
                                <div className={styles.faqText}>
                                    {item.text2}
                                </div>
                            </details>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </section>
        <div className={styles.cardStatic}>
            <img className={theme ? styles.sssBG : styles.lightsssBG} src={bg} alt='bg'></img>
        </div>
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