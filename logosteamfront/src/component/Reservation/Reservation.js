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
import anger from '../../img/anger.png';
import happy from '../../img/happy.png';
import sad from '../../img/sad.png';
import disgusd from '../../img/disgusd.png';
import fear from '../../img/fear.png';
import suprised from '../../img/suprised.png';
import naturel from '../../img/naturel.png';

import verify from '../../api/verify';
import axios from '../../api/axios';
import Swal from 'sweetalert2';
import { CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Dashboard(){
    const navigate = useNavigate();
    const [post,setPost]=useState(null);
    const [counter, setCounter] = useState(0);
    const dateNow = new Date();
    const [activee, setActivee] =useState(localStorage.getItem('active'));
    const [talkBtn, setTalkBtn] = useState(true)
    const arrResa = {
        "status": true,
        "message": "Find Complated",
        "reservation": {
            "_id": "",
            "day": "",
            "psyc_id": {
                "_id": "64465c33a3defbbdaf27d8fe",
                "name": "Bora",
                "surName": "Körpe",
                "pass": "$2a$08$SK9STy9ZLCCXrDQf1edBFOK9UrqurYfGXfbn.vsFtkGZe0eIbKIdq",
                "eMail": "borakorpe@gmail.com",
                "tag": [
                    "Bipolar Bozukluk",
                    "Sosyal Fobi"
                ],
                "image": "image-1682332723536.png",
                "unvan": "Prof. Dr.",
                "star": [
                    5,
                    5,
                    5,
                    3,
                    5
                ],
                "starAvg": [
                    4.6
                ],
                "active": false,
                "accActive": true,
                "createAt": "2023-04-24T10:38:43.965Z",
                "updateAt": "2023-04-24T10:38:43.965Z",
                "__v": 5
            },
            "client_id": {
                "_id": "",
                "name": " ",
                "surName": "",
                "pass": "$2a$084BlRaeO5zZZzN43kEhqjPDlM1aReNzQnqYVu6",
                "eMail": "borakorpee@gmail.com",
                "city": "İzmir",
                "county": "Gaziemir",
                "job": "Mobil Developer",
                "sex": "Erkek",
                "favorites": [],
                "image": "",
                "dateOfBirth": "2023-04-24T13:25:46.797Z",
                "createAt": "2023-04-24T13:25:46.797Z",
                "__v": 0
            },
            "time": "",
            "payCheck": true,
            "__v": 0
        }
    }
    const arrTalk = {
        "status": true,
        "talk": [{
            "_id": "64471d04b0706c94791a871f",
            "reservation_id": "64468401978e155dc2498e1f",
            "meetTime": "qweqe",
            "Talk": [
                "Selam",
                "selami"
            ],
            "emo": {
                "anger": {
                    "count": 0
                },
                "sad": {
                    "count": 0
                },
                "happy": {
                    "count": 0
                },
                "surprised": {
                    "count": 0
                },
                "disgust": {
                    "count": 0
                },
                "fear": {
                    "count": 0
                },
                "neutral": {
                    "count": 0
                }
            },
            "word": [
                {
                    "count": 0,
                    "word": "",
                    "_id": ""
                }
            ],
            "__v": 0,
            "comment": ""
        }],
        "totalCount": 0
    };
    const [reservation, setReservation] = useState(arrResa);
    const [talk, setTalk] = useState(arrTalk);
    const arrClient =
        {
            "status": true,
            "total": 0,
            "reservation": [
                {
                    "day": "",
                    "client_id": {
                        "name": "",
                        "surName": "",
                    }
                }
            ]
        }

    const [arrRes, setArrRes] = useState(arrClient);

    useEffect(()=>{
        Auth();
    },[])

    const Auth = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');

        try {
            const res = await verify(token);
            if (res) {
              const resApi = await axios.get(`/api/reservation/find?psyc_id=${id}&limit=9`, {
                  headers: {
                    'x-access-token': token,
                  },
                });
              await setArrRes(resApi.data);
              console.log(arrRes)
              setPost(true);
            } else {
              navigate('/login');
            }
          } catch (err) {
            console.error(err);
            navigate('/login');
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
            active: 'active',
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

    const nowDate = () =>{
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1; // JavaScript'te aylar 0-11 arasında indexlenir, bu yüzden +1 ekliyoruz.
        const year = now.getFullYear();

        const dateStr = `${day}.${month}.${year}`;
        return dateStr;
    }

    const nowTime = () => {
        const now = new Date();
        now.setHours(now.getHours() + 1);
        const hour = now.getHours();
        const minute = now.getMinutes();

        const timeStr = `${hour}.${minute}`;
        return timeStr;
    }

    const timeChack = (itemTime) => {
        const currentTime = new Date();
        currentTime.setTime(currentTime.getTime() + 3 * 60 * 60 * 1000);
        let itemHourAfter = parseInt(itemTime.split('.')[0]);
        itemHourAfter===23?itemHourAfter=0:itemHourAfter=itemHourAfter+1;
        const itemHourBefore = (parseInt(itemTime.split('.')[0]));
        const itemMinute = parseInt(itemTime.split('.')[1]);
        const itemDateTimeAfter = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), itemHourAfter, itemMinute);
        const itemDateTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), itemHourBefore, itemMinute);
        if (itemDateTimeAfter >= currentTime && currentTime >= itemDateTime) {
            return 'active'
        }else if(currentTime>itemDateTime) {
            return 'after'
        }else{
            return 'before'
        }
    }

    const handleData = async (page) => {
        const resApi = await axios.get(`/api/reservation/find?psyc_id=${localStorage.getItem('id')}&limit=${(page*10)+9}&skip=${page*10}`, {
            headers: {
              'x-access-token': localStorage.getItem('token'),
            },
          });
        await setArrRes(resApi.data);
        await setCounter(page);
    }

    const handleTalk = async (id) => {
        localStorage.setItem('reservation_id',id);
        navigate('/talk');
    }

    const handleLogin = async () =>{
        try{
            localStorage.setItem('reservation_id','644a2f9a16f7ec3a141a0b3f')
            await axios.put(`/api/psyc/active/update?id=${localStorage.getItem('id')}&token=${localStorage.getItem('token')}&active=false`);
            navigate('/meet');
        }
        catch{
            navigate('/meet');
        }
    }

    const handleDelete = async (id) => {
        await Swal.fire({
            title: 'Emin Misin?',
            text: "Bunu geri alamazsın!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8C10B8',
            cancelButtonColor: '#422f2f80',
            confirmButtonText: 'Evet, Bunu Sil.'
          }).then((result) => {
            if (result.isConfirmed) {
                const res = axios.delete(`/api/reservation/delete/${id}`, {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                })
              Swal.fire({
                icon: 'success',
                title: 'Silindi!',
                text: 'Rezervasyon Silindi!',
                confirmButtonColor: '#8C10B8',
                confirmButtonText: 'Tamam'
            }).then((result)=> {
                if(result.isConfirmed){
                    window.location.reload();
                }
            })
        }
        })
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

    const calcDate = (dateStr) =>{
        const date = new Date(dateStr);
        const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        return formattedDate;
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
            <div className={talkBtn?styles.none:styles.section} style={{paddingTop:'0px'}}>
                <div className={`${styles.inclusive}`}>
                    <div className={styles.contentInclusive} style={{overflow:'auto', height:'800px'}}>
                        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems: 'center'}}>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'50%',paddingLeft:'88px',paddingRight:'88px'}}>
                                <div className={styles.talkClientTitleCard}>Hasta Detayları</div>
                                <div style={{display:'flex', flexDirection:'row',justifyContent:'center', alignItems: 'center'}}>
                                    <div>
                                        <img src={`https://api.teamlogos.tech/uploads/${reservation.reservation.client_id.image}`} alt='Client İmage' width={100} height={100} style={{marginRight:'50px'}}></img>
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <div className={styles.talkClientText}>{`İsim Soyisim: ${reservation.reservation} ${reservation.reservation}`}</div>
                                        <div className={styles.talkClientText}>{`Tarih: ${calcDate(reservation.reservation)}`}</div>
                                        <div className={styles.talkClientText}>{`Saat: ${reservation.reservation}`}</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                <div style={{width:'100%'}}>
                                    <div className={styles.emoTitleCard}>Duygu Durumu Geçmişi</div>
                                    <div className='row rows-col-7'>
                                        <div className='col'>
                                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                                <img src={happy} alt='duygu' width={100} height={100}></img>
                                                <div className={styles.emoCardTextTitle}>Mutlu</div>
                                                <div className={styles.emoCardText}>Count</div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                                <img src={anger} alt='duygu' width={100} height={100}></img>
                                                <div className={styles.emoCardTextTitle}>Kızgın</div>
                                                <div className={styles.emoCardText}>Count</div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                                <img src={sad} alt='duygu' width={100} height={100}></img>
                                                <div className={styles.emoCardTextTitle}>Üzgün</div>
                                                <div className={styles.emoCardText}>Count</div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                                <img src={disgusd} alt='duygu' width={100} height={100}></img>
                                                <div className={styles.emoCardTextTitle}>İğrenme</div>
                                                <div className={styles.emoCardText}>Count</div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                                <img src={fear} alt='duygu' width={100} height={100}></img>
                                                <div className={styles.emoCardTextTitle}>Korku</div>
                                                <div className={styles.emoCardText}>Count</div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                                <img src={suprised} alt='duygu' width={100} height={100}></img>
                                                <div className={styles.emoCardTextTitle}>Şaşkın</div>
                                                <div className={styles.emoCardText}>Count</div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                                <img src={naturel} alt='duygu' width={100} height={100}></img>
                                                <div className={styles.emoCardTextTitle}>Nötr</div>
                                                <div className={styles.emoCardText}>Count</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                    <div className={styles.emoTitleCard}>Konuşma Metni</div>
                                    <div style={{width:'90%', height:'400px', overflow:'auto'}}>
                                        <div className={styles.talkClientText}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.emoTitleCard}>Kelime Kökleri</div>
                                    <div className='row rows-col-10' style={{height:'400px', overflow:'auto'}}>
                                        <div class="col" width={80} height={80} style={{marginTop:'10px'}}>
                                            <CircularProgressbarWithChildren value={12} maxValue={100} styles={{
                                                path: {
                                                // Path color
                                                stroke: `#533AED`,
                                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                strokeLinecap: 'butt',
                                                // Customize transition animation
                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                                // Rotate the path
                                                transform: 'rotate(0.15turn)',
                                                transformOrigin: 'center center',
                                                },
                                                trail: {
                                                // Trail color
                                                stroke: '#6c6c6c7d',
                                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                strokeLinecap: 'butt',
                                                // Rotate the trail
                                                transform: 'rotate(0.15turn)',
                                                transformOrigin: 'center center',
                                                },}}>
                                                <div id='circleTitle'>word</div>
                                                <div id='circleText'>
                                                    count
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        </div>
                                            </div>
                                            </div>
                            </div>
                        </div>
                        <div className={styles.sponsorContent}>
                            {arrSponsor.map((item)=>
                                <div>
                                    <img src={item.img} alt={item.alt} width={45}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={talkBtn?styles.section:styles.none}>
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
                            <div className={styles.title}>{`Rezervasyonlar`}</div>
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
                                <div className={styles.reservationPageColumn} style={{width:'55px'}}>Yaş</div>
                                <div className={styles.reservationPageColumn} style={{width:'86px'}}>Cinsiyet</div>
                                <div className={styles.reservationPageColumn} style={{width:'140px'}}>Tarih</div>
                                <div className={styles.reservationPageColumn} style={{width:'64px'}}>Saat</div>
                                <div className={styles.reservationPageColumn} style={{width:'106px'}}>Durum</div>
                            </div>
                            <div className={styles.reservationPageContent}>
                                <div className={styles.reservationPageFirstColumn}>
                                    <div className={styles.reservationPageColumn} style={{width:'52px'}}>1</div>
                                    <div className={styles.reservationPageColumn} style={{marginLeft:'5px',width:'220px',justifyContent:'flex-start', paddingLeft:'20px'}}>
                                        <div className={styles.clientCard}>
                                            <div>
                                                <img className={styles.clientImg} src={account} alt='Ahmet' width={45} height={45}></img>
                                            </div>
                                            <div className={styles.clientContent}>
                                                <div className={styles.clientTitle} style={{marginLeft: '7px'}}>{`${'Ahmet'} ${'Ecevit'}`}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.reservationPageColumn} style={{width:'55px'}}>{'22'}</div>
                                <div className={styles.reservationPageColumn} style={{width:'86px',textAlign:'center'}}>{'Erkek'}</div>
                                <div className={styles.reservationPageColumn} style={{width:'140px'}}>{nowDate()}</div>
                                <div className={styles.reservationPageColumn} style={{width:'64px'}}>{nowTime()}</div>
                                <div className={styles.reservationPageColumn} style={{width:'106px'}}>
                                        <button className={styles.reservationPageBtnLogIn} onClick={()=> handleLogin()}>
                                            <FeatherIcon icon='log-in' color='#00B383' size="15" stroke-width="2.5"/>
                                        </button>
                                </div>
                            </div>
                            {arrRes && arrRes.reservation && arrRes.reservation.map((item, index) => (
                            <div className={styles.reservationPageContent}>
                            <div className={styles.reservationPageFirstColumn}>
                                <div className={styles.reservationPageColumn} style={{width:'52px'}}>{index===0 ? index+2 : index+1}</div>
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
                            <div className={styles.reservationPageColumn} style={{width:'55px'}}>{dateCalc(item.client_id.dateOfBirth)}</div>
                            <div className={styles.reservationPageColumn} style={{width:'86px',textAlign:'center'}}>{item.client_id.sex}</div>
                            <div className={styles.reservationPageColumn} style={{width:'140px'}}>{parseDate(item.day)}</div>
                            <div className={styles.reservationPageColumn} style={{width:'64px'}}>{item.time}</div>
                            <div className={styles.reservationPageColumn} style={{width:'106px'}}>
                                {
                                    new Date(item.day)>Date.now() ?
                                    <button className={styles.reservationPageBtn} onClick={()=> handleDelete(item._id)}>
                                        <FeatherIcon icon='x' color='#F0735A' size="15" stroke-width="2.5"/>
                                    </button>:
                                    (
                                        item.day=== new Date().toISOString().split('T')[0] ? 
                                            (timeChack==='active'?
                                                <button className={styles.reservationPageBtnLogIn} onClick={()=> navigate('/meet')}>
                                                    <FeatherIcon icon='log-in' color='#00B383' size="15" stroke-width="2.5"/>
                                                </button>: (timeChack==='before'?
                                                       <button className={styles.reservationPageBtn} onClick={()=> handleDelete(item._id)}>
                                                            <FeatherIcon icon='x' color='#F0735A' size="15" stroke-width="2.5"/>
                                                        </button>:
                                                        <button className={styles.reservationPageBtnCheck} onClick={()=> handleTalk(item._id)}>
                                                            <FeatherIcon icon='check' color='#3e221c4d' size="15" stroke-width="2.5"/>
                                                        </button>
                                                )
                                            ):
                                            <button className={styles.reservationPageBtnCheck} onClick={()=> handleTalk(item._id)}>
                                                <FeatherIcon icon='check' color='#3e221c4d' size="15" stroke-width="2.5"/>
                                            </button>
                                    )
                                }
                            </div>
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
                                        <li onClick={()=> handleData(i)} className={i===counter ? `page-item active` : 'page-item'}><a className="page-link">{i+1}</a></li>
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
