import React, {useState} from 'react';
import styles from '../../styles/Login.module.scss';
import logosLogo from '../../img/logosLogoLight.svg';
import FeatherIcon from 'feather-icons-react';
import axios from '../../api/axios';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Forgot(){
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState(''); 
    const [page, setPage] = useState(true);

    const handle = () => {
        if(mail === '' || name ===''){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Doldurmadığın veri var!!',
            })
        }
        else{
            //api atılacak
            setPage(!page);
        }
    }
    const handlePass = () => {

    }
  return (
    <>
        <section className={styles.section}>
            <div className={styles.inclusive}>
                <button onClick={()=> navigate("/")}>
                    <img src={logosLogo} width={115} height={60} alt='logo'></img>
                </button>
                <form onSubmit={(e)=>e.preventDefault()} className={page ? styles.content : styles.none}>
                    <div className={styles.title}>Şifreni mi unuttun?</div>
                    <div className={styles.starContent}>
                        <div className={styles.blackText}>Mail Adresi </div>
                        <div className={styles.starText}>*</div>
                    </div>
                    <input type='email' className={styles.input} value={mail} onChange={(e)=> setMail(e.target.value)} required></input>
                    <div className={styles.starContent}>
                        <div className={styles.blackText}>İsim</div>
                        <div className={styles.starText}>*</div>
                    </div>
                    <input type={'text'} className={styles.input} style={{paddingRight: "40px"}} value={name} onChange={(e)=> setName(e.target.value)} required></input>
                    <button onClick={() => handle()} type='submit' className={styles.button} style={{marginTop: '40px'}}>Şifreni Değiş</button>
                    <div className={styles.signContent}>
                        <div className={styles.signText}>Hatırladınız mı?</div>
                        <button onClick={() => navigate("/login")} className={styles.signPurple}>Giriş Yap</button>
                    </div>
                </form>
                <form onSubmit={(e)=>e.preventDefault()} className={page ? styles.none : styles.content}>
                    <div className={styles.title} style={{marginBottom:'20px'}}>Şifreni mi unuttun?</div>
                    <div className={styles.starContent}>
                        <div className={styles.blackText}>Yeni Şifernizi Giriniz</div>
                        <div className={styles.starText}>*</div>
                    </div>
                    <input type={show ? 'text':'password'} className={styles.input} style={{paddingRight: "40px"}} value={pass} onChange={(e)=> setPass(e.target.value)} required></input>
                    <div className={styles.relative}>
                        <button type='button' className={styles.absoluteShow} onClick={()=> setShow(!show)}>
                            <FeatherIcon icon={show ? 'eye-off' : 'eye'} color='#858585' size="20" stroke-width="2.5"/>
                        </button>
                    </div>
                    <div className={styles.starContent}>
                        <div className={styles.blackText}>Yeni Şifrenizi Tekrar Giriniz</div>
                        <div className={styles.starText}>*</div>
                    </div>
                    <input type={show1 ? 'text':'password'} className={styles.input} style={{paddingRight: "40px"}} value={pass} onChange={(e)=> setPass(e.target.value)} required></input>
                    <div className={styles.relative}>
                        <button type='button' className={styles.absoluteShow} onClick={()=> setShow1(!show)}>
                            <FeatherIcon icon={show1 ? 'eye-off' : 'eye'} color='#858585' size="20" stroke-width="2.5"/>
                        </button>
                    </div>
                    <button onClick={() => handlePass()} type='submit' className={styles.button} style={{marginTop:'20px'}}>Şifreni Değiş</button>
                    <div className={styles.signContent}>
                        <button onClick={() => setPage(!page)} className={styles.signPurple}>Geri Dön</button>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}
