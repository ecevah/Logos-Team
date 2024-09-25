import React, {useState, useEffect} from 'react'
import FeatherIcon from 'feather-icons-react';

import {useNavigate} from 'react-router-dom';

import styles from '../../styles/Dashboard.module.scss';
import layout from '../../styles/Layout.module.scss';

import logosLogo from '../../img/logosLogoLight.svg';
import account from '../../img/01.jpg.png';
import kyk from '../../img/kykSiyah.svg';
import mimar from '../../img/mimarSiyah.png';
import mühendishane from '../../img/mühendishaneSiyah.svg';
import teknofest from '../../img/teknofestSiyah.svg';
import teknoloji from '../../img/teknolojiSiyah.svg';
import mesaj from '../../img/mesaj.svg';
import mesajpurple from '../../img/mesajpurple.svg';
import odeme from '../../img/odeme.svg';
import odemepurple from '../../img/odemepurple.svg';
import onpanel from '../../img/onpanel.svg';
import onpanelpurple from '../../img/onpanelpurple.svg';
import profil from '../../img/profile.svg';
import profilpurple from '../../img/profilepurple.svg';
import randevu from '../../img/rendevu.svg';
import randevupurple from '../../img/randevupurple.svg';
import logout from '../../img/logOut.svg';
import logoutPurple from '../../img/logOutPurple.svg';

import verify from '../../api/verify';
import axios from '../../api/axios';
import Swal from 'sweetalert2';

export default function Dashboard(){
    const navigate = useNavigate();
    const [post,setPost] = useState(null);

    const [name,setName] = useState('');
    const [surName, setSurName] = useState('');
    const [mail,setMail] = useState('');
    const [mail2, setMail2] = useState('');
    const [passOld,setPassOld] = useState('');
    const [pass,setPass] = useState('');
    const [pass2,setPass2] = useState('');
    const [file, setFile] = useState({});
    const [mailCheck, setMailCheck] = useState(true);
    const [passCheck, setPassCheck] = useState(true);

    useEffect(()=>{
        Auth();
    },[])

    const Auth = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        try {
            const res = await verify(token);
            if (res) {
              setPost(true);
            } else {
              navigate('/login');
            }
          } catch (err) {
            console.error(err);
          }
        }
    const [open, setOpen] = useState(false)

    const arrHeader = [
        {
            text:'Ön Panel',
            href:'/dashboard',
            active: '',
            icon: onpanel,
            purple: onpanelpurple
        },
        {
            text:'Randevular',
            href:'/reservation',
            active: '',
            icon: randevu,
            purple: randevupurple

        },
        {
            text:'Hasta Ödemeleri',
            href:'/pay',
            active: '',
            icon: odeme,
            purple: odemepurple
        },
        {
            text:'Yorumlar',
            href:'/comment',
            active: '',
            icon: mesaj,
            purple: mesajpurple
        },
        {
            text:'Profil Ayarları',
            href:'/setting',
            active: 'active',
            icon: profil,
            purple: profilpurple
        },
        {
            text:'Çıkış Yap',
            href:'/',
            active: '',
            icon: logout,
            purple: logoutPurple
        }
    ]

    const arrSponsor = [
        {
            img: mimar,
            alt: 'mimar'
        },
        {
            img: mühendishane,
            alt: 'mühendishane'
        },
        {
            img: teknofest,
            alt: 'teknofest'
        },
        {
            img: teknoloji,
            alt: 'teknoloji'
        },
        {
            img: kyk,
            alt: 'kyk'
        }
    ]

    const handleUpdate = async () => {
        setMailCheck(true);
        const payload = {};
        payload.id= localStorage.getItem('id');
        if (mail !== '') {
        payload.eMail = mail;
        }

        if (name !== '') {
        payload.name = name;
        }

        if (surName !== '') {
        payload.surName = surName;
        }

        try {
            const response = await axios.put('/api/psyc/update',payload,{
                headers: {
                  'x-access-token': localStorage.getItem('token'),
                }});
            if(response.data.status){
                console.log('Başarılı');
            } 
            else{
                console.log('Başarısız');
            }
        }
        catch(err){
            alert('Hata oluştu');
            navigate("/login");
        }
    }

    const handlePassUpdate = async () => {
        setMailCheck(true);
        const payload = {};
        payload.token= localStorage.getItem('token');
        if (pass !== '') {
        payload.pass = pass;
        }

        try {
            const response = await axios.put('/api/psyc/reset',payload,{
                headers: {
                  'x-access-token': localStorage.getItem('token'),
                }});
                console.log(response)
            if(response.data.status){
                console.log('Başarılı');
            } 
            else{
                console.log('Başarısız');
            }
        }
        catch(err){
            alert('Hata oluştu');
            navigate("/login");
        }
    }

    const logOut= async() =>{
        await Swal.fire({
            icon: 'success',
            title: 'Çıkış Yapıldı',
            text: 'Logos Ekibi Mutlu Günler Diler',
            confirmButtonColor: '#8C10B8',
            confirmButtonText: 'Tamam'
        })
        localStorage.setItem('token','');
        localStorage.setItem('id', '');
        localStorage.setItem('name', '');
        localStorage.setItem('surname', '');
        localStorage.setItem('unvan', '');
        localStorage.setItem('tag', '');
        localStorage.setItem('img', '');     
        navigate('/');
    }

    const hendleDelete = async () => {
        await Swal.fire({
            title: 'Emin misin?',
            text: "Bu işlem geri alınamaz!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8C10B8',
            cancelButtonColor: '#422f2f80',
            confirmButtonText: 'Eminim, Sil!',
            cancelButtonText: 'İptal'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Silindi!',
                'Hesap silindi!.',
                'success'
              )
                localStorage.setItem('token','');
                localStorage.setItem('id', '');
                localStorage.setItem('name', '');
                localStorage.setItem('surname', '');
                localStorage.setItem('unvan', '');
                localStorage.setItem('tag', '');
                localStorage.setItem('img', '');  
                navigate('/')
            }
          })
    }

    return (
    <>
        <div className={post ? styles.none : styles.isLoading}>
            <img className={styles.isloadinglogo} src={logosLogo} alt='loadingImg' width={300} height={150}/>
            <svg className={styles.isloadingImg} viewBox="0 0 24 24" width="32" height="32"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z" fill="rgba(140,16,184,1)"></path></svg>
        </div>
        <section className={styles.headerSection}>
            <div className={`${styles.headerInclusive} ${layout.containerDashboard}`}>
                <button onClick={()=> navigate("/dashboard")}>
                    <img src={logosLogo} height={58} width={115} alt='logos'></img>
                </button>
                <div>
                    <button onClick={()=>setOpen(!open)}>
                        <FeatherIcon icon={open ? 'x' : 'menu'} color='#858585' size="20" stroke-width="2.5"/>
                    </button>
                </div>
            </div>
        </section>
        <section className={open ? styles.dropdawnOpen : styles.dropdawnClose}>
                <div className={`${styles.dropdawnList}`}>
                        {arrHeader.map((item) =>
                            (item.text==='Çıkış Yap' ? 
                            <button className={styles.navbarbtn} onClick={()=>logOut()}>
                                <img src={item.icon} height={12} width={12} alt={item.text}/>
                                <a className={`${styles.headerItem} ${styles[item.active]}`}>{item.text}</a>
                            </button>
                            :<button className={styles.navbarbtn}>
                                <img src={item.active==='active' ? item.purple : item.icon} height={12} width={12} alt={item.text}/>
                                <a href={item.href} className={`${styles.headerItem} ${styles[item.active]}`}>{item.text}</a>
                            </button>
                            )
                        )}
                </div>
        </section>
        <section style={{display:'flex',justifyContent:'center'}}>
            <section className={styles.sectionInclusive}>
                <div className={styles.navbar}>
                    <div className={styles.navbarContent}>
                        <div>
                            <img src={logosLogo} height={58} width={115} alt='logos'></img>
                        </div>
                        <div className={styles.sideContent}>
                            <div className={styles.profilCard}>
                                <div>
                                    <img className={styles.profilImg} src={`https://api.teamlogos.tech/uploads/${localStorage.getItem('img')}`} alt='account'></img>
                                </div>
                                <div className={styles.profilContent}>
                                    <div className={styles.profilName}>{`${localStorage.getItem('unvan')} ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`}</div>
                                    <div className={styles.profilTag}>{`${localStorage.getItem('tag')}`}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.headerItemDiv}>
                            {arrHeader.map((item) =>
                            (item.text==='Çıkış Yap' ? 
                            <button className={styles.navbarbtn} onClick={()=>logOut()}>
                                <img src={item.icon} height={12} width={12} alt={item.text}/>
                                <a className={`${styles.headerItem} ${styles[item.active]}`}>{item.text}</a>
                            </button>
                            :<button className={styles.navbarbtn}>
                                <img src={item.active==='active' ? item.purple : item.icon} height={12} width={12} alt={item.text}/>
                                <a href={item.href} className={`${styles.headerItem} ${styles[item.active]}`}>{item.text}</a>
                            </button>
                            )
                        )}
                        </div>
                    </div>
                    <div>
                        <div className={styles.sponsorContent}>
                            {arrSponsor.map((item)=>
                                <div>
                                    <img src={item.img} alt={item.alt} width={45}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <section style={{display:'display', flexDirection:'column'}}>
                    <section className={styles.settingSection}>
                        <div className={styles.settingInclusive}>
                            <div className={styles.settingTitle}>Kişi Bilgileri</div>
                            <div className={styles.settingImgInclusive}>
                                <div>
                                    <img src={`https://api.teamlogos.tech/uploads/${localStorage.getItem('img')}`} height={80} width={80} style={{borderRadius:'50px'}} alt='logos'></img>
                                </div>
                                <div className={styles.settingImgTitleInclusive}>
                                    <div className={styles.settingImgContent}>
                                        <div className={styles.settingImgTitle}>Fotoğrafını Yükle</div>
                                        <div className={styles.settingImgText}>En iyi sonuçlar için en çok 256px*256px boyutunda görsel yükleyiniz.</div>
                                    </div>
                                    <div className={styles.settingImgButtonDiv}>
                                        <input className={styles.settingImgBtnP} type="file" name="myImage" accept="image/png, image/gif, image/jpeg" onChange={(e)=> setFile(e.target.files[0])} required/>
                                        <button onClick={()=> setFile({})} className={styles.settingImgBtnL}>Kaldır</button>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={(e)=>e.preventDefault()}>
                                <div className='row rows-col-2'>
                                    <div className='col'>
                                        <div className='row'>
                                            <label className={styles.settingLabel}>Ad</label>
                                            <input type='text' className={styles.settingInput} value={name} onChange={(e)=> setName(e.target.value)} placeholder='Adınızı giriniz'></input>
                                        </div>
                                        <div className='row'>
                                            <label className={styles.settingLabel}>Mail Adresi</label>
                                            <input type='text' className={styles.settingInput} value={mail} onChange={(e)=> setMail(e.target.value)} placeholder='Mail adresinizi giriniz'></input>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='row'>
                                            <label className={styles.settingLabel}>Soyad</label>
                                            <input type='text' className={styles.settingInput} value={surName} onChange={(e)=> setSurName(e.target.value)} placeholder='Soyadınızı giriniz'></input>
                                        </div>
                                        <div className='row'>
                                            <label className={styles.settingLabel}>Mail Adresini Tekrar Gir</label>
                                            <input type='text' className={styles.settingInput} value={mail2} onChange={(e)=> setMail2(e.target.value)} placeholder='Mail adresinizi giriniz'></input>
                                        </div>
                                    </div>
                                </div>
                                <div style={{paddingRight:'60px'}}>
                                    <button type='submit' className={styles.settingBtnContent} onClick={()=>mail===mail2?handleUpdate():setMailCheck(false)}> Değişiklikleri Kaydet</button>
                                </div>
                            </form>
                        </div>
                        <div className={styles.settingPassInclusive}>
                            <div className={styles.settingTitle}>
                                Şifre Değiştir
                            </div>
                            <form onSubmit={(e)=>e.preventDefault()} style={{display:'flex', flexDirection:'column'}}>
                                <div className={styles.passContent} style={{marginTop:'20px'}}>
                                    <label className={styles.settingLabel}>Eski şifrenizi giriniz:</label>
                                    <input type='password' className={styles.settingInput} value={passOld} onChange={(e)=> setPassOld(e.target.value)} placeholder='Eski şifrenizi giriniz' required></input>
                                </div>
                                <div className={styles.passContent}>
                                    <label className={styles.settingLabel}>Yeni Şifre:</label>
                                    <input type='password' className={styles.settingInput} value={pass} onChange={(e)=> setPass(e.target.value)} placeholder='Yeni şifre giriniz' required></input>
                                </div>
                                <div className={styles.passContent}>
                                    <label className={styles.settingLabel}>Şifreyi Tekrar Gir:</label>
                                    <input type='password' className={styles.settingInput} value={pass2} onChange={(e)=> setPass2(e.target.value)} placeholder='Yeni şifre tekrar giriniz' required></input>
                                </div>
                                <div className={styles.passContent} style={{marginTop:'15px'}}>
                                    <button type='submit' className={styles.settingBtnContent} onClick={()=>pass===pass2?handlePassUpdate():setPassCheck(false)}>Şifreyi Kaydet</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section style={{ display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center', marginLeft:'100px', marginRight:'50px'}}>
                        <div className={styles.settingDeleteTitle}>Hesabı Sil</div>
                        <div className={styles.settingDeleteText}>Hesabı silmek istediğinizden emin misiniz?</div>
                        <button onClick={()=> hendleDelete()} className={styles.settingDeleteBtn}>Hesabı Sil</button>
                    </section>
                </section>
            </section>
        </section>
    </>
  )
}
