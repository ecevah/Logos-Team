import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import styles from '../../styles/App.module.scss';
import sub from '../../styles/Sub.module.scss';
import layout from '../../styles/Layout.module.scss';

import Button from '../Button/button';

import logosLogoLight from '../../img/logosLogoLight.svg'
import logosLogo from '../../img/logosLogo.svg';
import karalama from '../../img/karalama.svg';
import Swal from 'sweetalert2';

function Homepage(props) {
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

    const arrPage = [
        {
            ref:'about',
            title:'Hakkımızda',
            text: '2022 yılında İzmir de Mühendishane topluluğu destekleriyle kurulan logos takımı olarak hedefimiz farklı branşlarla teknolojiyi bir araya getirerek, yerli ve milli olarak etkin çözümler oluşturmaktır. Bu doğrultuda günümüzde ciddi boyutlara ulaşmış psikolojik hastalıklara yenilikçi çözümler ile hem mesleki hem de toplumsal farkındalığı arttırmayı hedefliyoruz.'
        },
        {
            ref:'howto',
            title:'Nasıl Çalışır?',
            text:`Merhaba! Online terapi uygulamamızı kullanmaya başlamak için aşağıdaki adımları izleyebilirsiniz:\nKayıt Olma: Kullanıcılar uygulamamızda kayıt olabilirler. Kayıt olmak için uygulamamızın ana sayfasındaki "Kayıt Ol" butonunu tıklayabilir ve gerekli bilgileri doldurabilirler. Kullanıcıların güvenliği için kişisel verilerini koruyacağımızı ve gizlilik politikalarımızı açıklayacağımız bir gizlilik sözleşmesi sunulur.\nGiriş Yapma: Kayıt işlemi tamamlandıktan sonra kullanıcılar, kullanıcı adı ve şifreleriyle giriş yapabilirler. Giriş yapmak için ana sayfadaki "Giriş Yap" butonunu tıklayabilirler.\nTerapi Randevusu Alma: Kullanıcılar, giriş yaptıktan sonra terapi randevusu alabilirler. Randevu almak için "Randevu Al" butonunu tıklayabilirler ve terapi türünü, terapisti ve uygun bir tarih ve saat seçebilirler. Randevu onaylandığında kullanıcıya bir bildirim gönderilir.\nGörüntülü ve Sesli Görüşmeye Katılma: Randevu zamanı geldiğinde kullanıcılar, uygulama üzerinden görüntülü ve sesli görüşmeye katılabilirler. Kullanıcılar, terapistle sesli ve görüntülü iletişim kurabilir ve terapi seansını başlatabilirler.\nKamera ile Yüzünün Tamamının Görünmesi: Kullanıcılar, terapi seansı sırasında yüzlerinin tamamını kameraya göstermelidir. Bu, terapistin kullanıcının ifadelerini ve duygularını tam olarak anlamasını sağlar ve etkili bir terapi deneyimi için önemlidir.\nVerilen Tavsiyelerin Görüntülenmesi ve Uygulanması: Terapi seansı sonrasında kullanıcılar, terapistin verdiği tavsiyeleri uygulaması gerekmektedir. Uygulama üzerinden terapistin verdiği tavsiyeler kullanıcıya görüntülenir ve kullanıcılar, tavsiyeleri not alabilir veya terapistle paylaşabilirler. Uygulama aynı zamanda kullanıcılara hatırlatmalar gönderebilir ve terapi sürecini takip etmelerine yardımcı olabilir.\nUnutmayın, online terapi uygulamamız kullanıcıların gizliliğini ve güvenliğini önemsemektedir. Tüm kullanıcı verileri gizli tutulacak ve yalnızca terapi süreci için kullanılacaktır.`        },
        {
            ref:'misyon',
            title:'misyon',
            text:'asdlkasdjalsşdlaisd'
        },
        {
            ref:'kvkk',
            title:'kvkk',
            text:''
        },
        {
            ref:'contact',
            title:'İletişim',
            text:`Merhaba! Online terapi uygulamamızı kullanmaya başlamak için aşağıdaki adımları izleyebilirsiniz:\nKayıt Olma: Kullanıcılar uygulamamızda kayıt olabilirler. Kayıt olmak için uygulamamızın ana sayfasındaki "Kayıt Ol" butonunu tıklayabilir ve gerekli bilgileri doldurabilirler. Kullanıcıların güvenliği için kişisel verilerini koruyacağımızı ve gizlilik politikalarımızı açıklayacağımız bir gizlilik sözleşmesi sunulur.\nGiriş Yapma: Kayıt işlemi tamamlandıktan sonra kullanıcılar, kullanıcı adı ve şifreleriyle giriş yapabilirler. Giriş yapmak için ana sayfadaki "Giriş Yap" butonunu tıklayabilirler.\nTerapi Randevusu Alma: Kullanıcılar, giriş yaptıktan sonra terapi randevusu alabilirler. Randevu almak için "Randevu Al" butonunu tıklayabilirler ve terapi türünü, terapisti ve uygun bir tarih ve saat seçebilirler. Randevu onaylandığında kullanıcıya bir bildirim gönderilir.\nGörüntülü ve Sesli Görüşmeye Katılma: Randevu zamanı geldiğinde kullanıcılar, uygulama üzerinden görüntülü ve sesli görüşmeye katılabilirler. Kullanıcılar, terapistle sesli ve görüntülü iletişim kurabilir ve terapi seansını başlatabilirler.\nKamera ile Yüzünün Tamamının Görünmesi: Kullanıcılar, terapi seansı sırasında yüzlerinin tamamını kameraya göstermelidir. Bu, terapistin kullanıcının ifadelerini ve duygularını tam olarak anlamasını sağlar ve etkili bir terapi deneyimi için önemlidir.\nVerilen Tavsiyelerin Görüntülenmesi ve Uygulanması: Terapi seansı sonrasında kullanıcılar, terapistin verdiği tavsiyeleri uygulaması gerekmektedir. Uygulama üzerinden terapistin verdiği tavsiyeler kullanıcıya görüntülenir ve kullanıcılar, tavsiyeleri not alabilir veya terapistle paylaşabilirler. Uygulama aynı zamanda kullanıcılara hatırlatmalar gönderebilir ve terapi sürecini takip etmelerine yardımcı olabilir.\nUnutmayın, online terapi uygulamamız kullanıcıların gizliliğini ve güvenliğini önemsemektedir. Tüm kullanıcı verileri gizli tutulacak ve yalnızca terapi süreci için kullanılacaktır.`        },
    ]

    const themeChoose = () =>{
        setTheme(!theme);
        localStorage.setItem('theme', theme);
    }

    const handleForm = () => {
        Swal.fire({
            icon: 'success',
            title: 'Başarıyla Gönderildi',
            text: 'En yakın zamanda dönüş yapılacaktır.',
            confirmButtonColor: '#8C10B8',
            confirmButtonText: 'Tamam'
        })
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
            {arrPage.map((item)=>
                {
                    if(item.ref===props.type){
                        if(item.ref==='contact'){
                            return(
                            <section className={`${layout.container}`} style={{paddingTop:'100px',paddingBottom:'100px'}}>
                                    <div className={theme ? sub.subTitle : sub.lightsubTitle}>{item.title}</div>
                                    <div className={sub.subStatic}>
                                        <img className={sub.subKaralama} src={karalama} alt='karalama' height={40} width={304}></img>
                                    </div>
                                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-around',marginTop:'100px',}}>
                                        <div>
                                            <div className={theme ? sub.subText : sub.lightsubText} style={{fontWeight:'600',marginTop:'0px'}}>İletşim:</div>
                                            <div className={theme ? sub.subText : sub.lightsubText} style={{marginTop:'5px'}}>logosteamcolab@gmail.com</div>
                                        </div>
                                        <div style={{width:'30%'}}>
                                        <form onSubmit={(e)=>e.preventDefault()}>
                                            <div className="col">
                                                <label for="exampleFormControlInput1" className="form-label" style={theme?{color:'#FFFFFF'}:{color:'#858585'}}>Ad Soyad</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                            </div>
                                            <div className="col">
                                                <label for="exampleFormControlInput1" className="form-label" style={theme?{color:'#FFFFFF',marginTop:'10px'}:{color:'#858585',marginTop:'10px'}}>Email address</label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                            </div>
                                            <div className="col">
                                                <label for="exampleFormControlInput1" className="form-label" style={theme?{color:'#FFFFFF',marginTop:'10px'}:{color:'#858585',marginTop:'10px'}}>Telefon Numarası</label>
                                                <input type="tel" pattern="0[1-9][0-9]{8}" className="form-control" id="exampleFormControlInput1" placeholder="0(555)555 55 55"/>
                                            </div>
                                            <div className="col" >
                                                <label for="exampleFormControlTextarea1" className="form-label" style={theme?{color:'#FFFFFF',marginTop:'10px'}:{color:'#858585',marginTop:'10px'}}>Mesajınız</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" ></textarea>
                                            </div>
                                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'30px'}}>
                                                <button onClick={()=> handleForm()}><Button type='primary' text='Gönder'/></button>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                </section>
                            )
                        }else{
                            return(
                                <section className={`${sub.subSection} ${layout.container}`}>
                                    <div className={theme ? sub.subTitle : sub.lightsubTitle}>{item.title}</div>
                                    <div className={sub.subStatic}>
                                        <img className={sub.subKaralama} src={karalama} alt='karalama' height={40} width={304}></img>
                                    </div>
                                    <p className={theme ? sub.subText : sub.lightsubText}>{item.text}</p>
                                </section>
                                )
                        }
                    }
                    return null;
                }
            )}
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