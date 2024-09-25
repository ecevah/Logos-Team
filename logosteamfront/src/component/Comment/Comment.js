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
    const [post,setPost]=useState(null);
    const [counter, setCounter] = useState(0);
    const [activee, setActivee] =useState(localStorage.getItem('active'));

    const arrClient =
        {
            "status": true,
            "comments": "",
            "total": 0,
            "client_id": {
                "_id":"",
                "name": "",
                "surName": "",
                }
        }

    const [arrRes, setArrRes] = useState(arrClient);

    useEffect(()=>{
        Auth();
    },[])

    const Auth = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
      
        if (!token || !id) {
          navigate('/login');
          return;
        }
      
        try {
            const res = await verify(token);
            if (res) {
              const resApi = await axios.get(`/api/comment/find?psyc_id=${id}&limit=9`, {
                  headers: {
                    'x-access-token': token,
                  },
                });
              await setArrRes(resApi.data);
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
            active: 'active',
            icon: mesaj,
            purple: mesajpurple
        },
        {
            text:'Profil Ayarları',
            href:'/setting',
            active: '',
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

    const parseDate = (date) => {
        const newParse = date.split("-");
        const newDate = newParse[2] + "." + newParse[1] + "." + newParse[0];
        return newDate;
    }

    const dateCalc = (date) => {
        const birth = new Date(date);
        const now = Date.now();
        const diff = now - birth.getTime();
        const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        return age;
    }

    const timeChack = (itemTime) => {
        const currentTime = new Date();
        const itemHour = parseInt(itemTime.split('.')[0]);
        const itemMinute = parseInt(itemTime.split('.')[1]);
        const itemDateTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), itemHour, itemMinute);
        if (itemDateTime > currentTime) {
            return true
        } else {
            return false
        }
    }

    const handleData = async (page) => {
        const resApi = await axios.get(`/api/comment/find?psyc_id=${localStorage.getItem('id')}`, {
            headers: {
              'x-access-token': localStorage.getItem('token'),
            },
          });
        await setArrRes(resApi);
        await setCounter(page);
    }

    const handleActiveBtn = async () => {
        try{
            const res = await axios.put(`/api/psyc/active/update?id=${localStorage.getItem('id')}&token=${localStorage.getItem('token')}&active=spes`);
            localStorage.setItem('active',res.data.psychologist.active);
            setActivee(!activee);
        }
        catch{

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

    return (
    <>
        <div className={post ? styles.none : styles.isLoading}>
            <img className={styles.isloadinglogo} src={logosLogo} alt='loadingImg' width={300} height={150}/>
            <svg className={styles.isloadingImg}  viewBox="0 0 24 24" width="32" height="32"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z" fill="rgba(140,16,184,1)"></path></svg>
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
            <div className={styles.section}>
                <div className={`${styles.inclusive}`}>
                    <div className={styles.contentInclusive}>
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
                        <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                            <div className={styles.title}>{`Yorumlar`}</div>
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end',  alignItems:'center',}}>
                                <div className={activee ? styles.activeIcon : styles.unActiveIcon}></div>
                                <div>
                                    <button className={styles.activeButton} onClick={()=>handleActiveBtn()}>Durum Değiştir</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.overflowdiv}>
                        <div className={styles.reservationPageInclusive}>
                            <div className={styles.reservationPageContent}>
                                <div className={styles.reservationPageFirstColumn}>
                                    <div className={styles.reservationPageColumn} style={{width:'52px'}}>#</div>
                                    <div className={styles.reservationPageColumn} style={{marginLeft:'5px',width:'220px'}}>Ad</div>
                                </div>
                                <div className={styles.reservationPageColumn} style={{width:'860px'}}>Yorumlar</div>
                            </div>
                            {arrRes && arrRes.commentObjects && arrRes.commentObjects.map((item, index) => (
                            <div className={styles.reservationPageContent}>
                            <div className={styles.reservationPageFirstColumn}>
                                <div className={styles.reservationPageColumn} style={{width:'52px'}}>{index+1}</div>
                                <div className={styles.reservationPageColumn} style={{marginLeft:'5px',width:'220px',justifyContent:'flex-start', paddingLeft:'20px'}}>
                                    <div className={styles.clientCard}>
                                        <div>
                                            <img className={styles.clientImg} src={`https://api.teamlogos.tech/uploads/${item.client_id.image}`} alt={item.client_id.surName} width={45} height={45}></img>
                                        </div>
                                        <div className={styles.clientContent}>
                                            <div className={styles.clientTitle} style={{marginLeft: '7px'}}>{`${item.client_id.name} ${item.client_id.surName}`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.reservationPageColumn} style={{width:'860px'}}>{item.comments}</div>
                        </div>
                        ))}
                        </div>
                        </div>
                        <div className={styles.paginationDiv}>
                            <div className={styles.paginatinBarTitle}>{`${arrRes.total} hastadan ${(counter*10)+1}-${(counter*10)+10>arrRes.total?arrRes.total:(counter*10)+10} arası gösteriliyor`}</div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li onClick={()=> {setCounter(counter-1);handleData(counter)}} className="page-item"><a className="page-link">Önceki</a></li>
                                    {Array.from({length: Math.ceil(arrRes.total/10)}, (_, i) => (
                                        <li onClick={()=> handleData(i)} className={i==counter ? `page-item active` : 'page-item'}><a className="page-link">{i+1}</a></li>
                                    ))}
                                    <li onClick={()=> {setCounter(counter+1);handleData(counter)}} className="page-item"><a className="page-link">Sonraki</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
