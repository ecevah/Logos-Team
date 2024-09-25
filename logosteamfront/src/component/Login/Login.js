import React, {useState} from 'react';
import styles from '../../styles/Login.module.scss';
import logosLogo from '../../img/logosLogoLight.svg';
import FeatherIcon from 'feather-icons-react';
import axios from '../../api/axios';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'


export default function Login() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    const handle = async () => {
        const payload = {
            email: mail,
            pass: pass
        }
        
        try {
            const response = await axios.post('/api/psyc/login',payload);
            if(response.data.status){
                if(mail==='admin@admin'){
                    localStorage.setItem('id',response.data.psychologist._id);
                    localStorage.setItem('token', response.data.token);
                    await Swal.fire({
                        icon: 'success',
                        title: 'Hoş Geldin Patron',
                        text: 'Panele Yönlendiriliyorsun',
                        confirmButtonColor: '#8C10B8',
                        confirmButtonText: 'Tamam'
                    })
                    window.location.replace("https://admin.teamlogos.tech");
                }
                if(response.data.active){
                    localStorage.setItem('id',response.data.psychologist._id);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('active', response.data.psychologist.active);
                    try{
                        await axios.put(`/api/psyc/active/update?id=${response.data.psychologist._id}&token=${response.data.token}&active=true`);
                    }catch{}
                    await Swal.fire({
                        icon: 'success',
                        title: 'Giriş Başarılı',
                        text: 'Dashboarda Yönlendiriliyorsun',
                        confirmButtonColor: '#8C10B8',
                        confirmButtonText: 'Tamam'
                    })
                    navigate("/dashboard");
                }else{
                    await Swal.fire({
                        icon: 'info',
                        title: 'Giriş Başarısız',
                        text: 'Hesabınız Aktifleştiğinde Ekibimiz Tarafından Bilgilendirileceksiniz',
                        confirmButtonColor: '#8C10B8',
                        confirmButtonText: 'Tamam'
                    })
                }
                
            } 
            else{
                console.log('Başarısız');
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Mail ya da Şifre Hatalı',
                    footer: '<a href="/signup">Hesabınız Yok Mu?</a>'
                })
            }
        }
        catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Bir Şeyler Yanlış Gitti',
              })
        }
        
    }

  return (
    <section className={styles.section}>
        <div className={styles.inclusive}>
            <button onClick={()=> navigate("/")}>
                <img src={logosLogo} width={115} height={60} alt='logo'></img>
            </button>
            <form onSubmit={(e)=>e.preventDefault()} className={styles.content}>
                <div className={styles.title}>Giriş Yap</div>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Mail Adresi </div>
                    <div className={styles.starText}>*</div>
                </div>
                <input type='email' className={styles.input} value={mail} onChange={(e)=> setMail(e.target.value)} required></input>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Şifre</div>
                    <div className={styles.starText}>*</div>
                </div>
                <input type={show ? 'text':'password'} className={styles.input} style={{paddingRight: "40px"}} value={pass} onChange={(e)=> setPass(e.target.value)} required></input>
                <div className={styles.relative}>
                    <button type='button' className={styles.absoluteShow} onClick={()=> setShow(!show)}>
                        <FeatherIcon icon={show ? 'eye-off' : 'eye'} color='#858585' size="20" stroke-width="2.5"/>
                    </button>
                </div>
                <div type='button' onClick={()=> navigate('/forgot')} className={styles.forgot}>Şifreni mi unuttun?</div>
                <button onClick={() => handle()} type='submit' className={styles.button}>Giriş Yap</button>
                <div className={styles.signContent}>
                    <div className={styles.signText}>Hesabın yok mu?</div>
                    <button onClick={() => navigate("/signup")} className={styles.signPurple}>Kayıt Ol</button>
                </div>
            </form>
        </div>
    </section>
  )
}
