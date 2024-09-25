import React, {useState} from 'react';
import styles from '../../styles/Login.module.scss';
import logosLogo from '../../img/logosLogoLight.svg';
import FeatherIcon from 'feather-icons-react';
import axios from '../../api/axios';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Register() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [check, setCheck] = useState('first');

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [unvan, setUnvan] = useState('');
    const [tecrübe, setTecrube] = useState(0);
    const [file, setFile] = useState(null);
    const [onay, setOnay] = useState(false);

    const [tag1, setTag1] = useState(false);
    const [tag2, setTag2] = useState(false);
    const [tag3, setTag3] = useState(false);
    const [tag4, setTag4] = useState(false);
    const [tag5, setTag5] = useState(false);
    const [tag6, setTag6] = useState(false);
    
    const arrTag = [
        {
            tag: 'Obsesif-Kompulsif Bozukluk',
            test: tag1
        },
        {
            tag: 'Tramva Sonrası Stres Bozukluğu',
            test: tag2
        },
        {
            tag: 'Bipolar Bozukluk',
            test: tag3
        },
        {
            tag: 'Ergen Psikoloji',
            test: tag4
        },
        {
            tag: 'Sosyal Fobi',
            test: tag5
        },
        {
            tag: 'Depresyon',
            test: tag6
        }
    ]

    const firstHandle = () => {
        if(name!=='' && surname!==''&& mail!==''&&pass!=='' && onay!==false){
        setCheck('second');}
    }

    const secondHandle = async () => {
        const arr = [];
        document.getElementById('isLoadingx').style.display = 'block';
        arrTag.map((item)=>
            item.test === true ? arr.push(item.tag) : null
        );
        const formData = new FormData();
        formData.append('name', name);
        formData.append('surname', surname);
        formData.append('pass', pass);
        formData.append('tag', arr);
        formData.append('unvan', unvan);
        formData.append('tecrübe', tecrübe);
        formData.append('image', file);
        formData.append('email', mail);
        try{
            const response = await axios.post('/api/psyc/add', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'x-access-token' : localStorage.getItem('token')
                }
              });
            if(response.data.status){
                document.getElementById('isLoadingx').style.display = 'none';
                await Swal.fire({
                    icon: 'success',
                    title: 'Kayıt Başarılı',
                    text: 'Hesabınız aktifleştiğinde ekibimiz tarafından bilgilendirileceksiniz.',
                    confirmButtonColor: '#8C10B8',
                    confirmButtonText: 'Tamam',
                })
                navigate('/');
            } 
            else{
                console.log('Başarısız');
                document.getElementById('isLoadingx').style.display = 'none';
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Boşlukları Doğru Doldurduğundan Emin Ol!',
                    confirmButtonColor: '#8C10B8',
                    confirmButtonText: 'Tamam'
                })
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Bir Şeyler Yanlış Gitti',
                confirmButtonColor: '#8C10B8',
                confirmButtonText: 'Tamam'
            })
            document.getElementById('isLoadingx').style.display = 'none';
            return err  
        }
    }

    const backHandle = () =>{
        setCheck('first');
    }

    const popup = () =>{
        Swal.fire({
            title: 'Şartlar ve Koşullar',
            text: 'ŞArtlar ve koşullar',
            confirmButtonColor: '#8C10B8',
            confirmButtonText: 'Tamam'
        })
    }

  return (
    <>
    <div className='isLoadingx' id="isLoadingx">
      <img className='isloadinglogo' src="./logosLogoLight.svg" alt='loadingImg' width='300' height='150'/>
      <svg className='isloadingImg' viewBox="0 0 24 24" width="32" height="32"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z" fill="rgba(140,16,184,1)"></path></svg>
    </div>

    <section className={styles.section}>
        <div className={styles.inclusive}>
            <button onClick={()=> navigate("/")}>
                <img src={logosLogo} width={115} height={60} alt='logo'></img>
            </button>
            <form onSubmit={(e)=>e.preventDefault()} className={check==='first' ? styles.contentSign : styles.none}>
                <div className={styles.title}>Kayıt Ol</div>
                <div className={styles.starContentHalf}>
                    <div className={styles.starInclusive}>
                        <div className={styles.starContent}>
                            <div className={styles.blackText}>Ad </div>
                            <div className={styles.starText}>*</div>
                        </div>
                        <input type='text' className={styles.input} value={name} onChange={(e)=> setName(e.target.value)} required></input>
                    </div>
                    <div className={styles.starInclusive}>
                        <div className={styles.starContent}>
                            <div className={styles.blackText}>Soyad</div>
                            <div className={styles.starText}>* </div>
                        </div>
                        <input type='text'  className={styles.input} value={surname} onChange={(e)=> setSurname(e.target.value)} required></input>
                    </div>
                </div>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Mail Adresi </div>
                    <div className={styles.starText}>*</div>
                </div>
                <input type='email' className={styles.input} value={mail} onChange={(e)=> setMail(e.target.value)} required></input>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Şifre</div>
                    <div className={styles.starText}>* </div>
                </div>
                <input type={show ? 'text':'password'} className={styles.input} style={{paddingRight: "40px"}} value={pass} onChange={(e)=> setPass(e.target.value)} required></input>
                <div className={styles.relative}>
                    <button className={styles.absoluteShow} type="button" onClick={()=> setShow(!show)}>
                        <FeatherIcon icon={show ? 'eye-off' : 'eye'} color='#858585' size="20" stroke-width="2.5"/>
                    </button>
                </div>
                <div className={styles.ifContent}>
                    <input type='checkbox' className={styles.check} id='check' required onChange={()=>setOnay(!onay)}></input>
                    <button onClick={()=>popup()} className={styles.ifBtn} type="button">Şartları ve koşulları</button>
                    <div className={styles.ifText}>kabul ediyorum.</div>
                </div>
                <button type='submit' className={styles.button} onClick={async()=> await firstHandle()}>Kayıt Ol</button>
                <div className={styles.signContent}>
                    <div className={styles.signText}>Hesabın var mı?</div>
                    <button onClick={()=> navigate("/login")} className={styles.signPurple}>Giriş Yap</button>
                </div>
            </form>
            <form onSubmit={(e)=>e.preventDefault()} className={check==='second' ? styles.contentSign : styles.none}>
                <div className={styles.title}>Kayıt Ol</div>
                <div className={styles.starContentHalf}>
                    <div className={styles.starInclusive}>
                        <div className={styles.starContent}>
                            <div className={styles.blackText}>Unvan </div>
                            <div className={styles.starText}>*</div>
                        </div>
                        <input type='text' className={styles.input} value={unvan} onChange={(e)=> setUnvan(e.target.value)} required></input>
                    </div>
                    <div className={styles.starInclusive}>
                        <div className={styles.starContent}>
                            <div className={styles.blackText}>Tecrübe</div>
                            <div className={styles.starText}>* </div>
                        </div>
                        <div className={styles.relative}>
                            <div className={styles.absoluteText}>Yıl</div>
                        </div>
                        <input type='number' className={styles.input} value={tecrübe} onChange={(e)=> setTecrube(e.target.value)} required></input>
                    </div>
                </div>
                <div className={styles.starContent}>
                    <div className={styles.blackText}>Tag </div>
                    <div className={styles.starText}>*</div>
                </div>
                <div className='row row-cols-2'>
                    <div className='col d-flex align-items-center'>
                        <input type='checkbox' style={{marginRight:'6px'}} id='check' className={styles.check} onChange={()=> setTag1(!tag1)}></input>
                        <label style={{width:'150px'}}>Obsesif- Kompulsif Bozukluk</label>
                    </div>
                    <div className='col d-flex align-items-center'>
                        <input type='checkbox' style={{marginRight:'6px'}} id='check' className={styles.check} onChange={()=> setTag2(!tag2)}></input>
                        <label style={{width:'150px'}}>Tramva Sonrası Stres Bozukluğu</label>
                    </div>
                    <div className='col d-flex align-items-center'>
                        <input type='checkbox' style={{marginRight:'6px'}} id='check' className={styles.check} onChange={()=> setTag3(!tag3)}></input>
                        <label>Bipolar Bozukluk</label>
                    </div>
                    <div className='col d-flex align-items-center'>
                        <input type='checkbox' style={{marginRight:'6px'}} id='check' className={styles.check} onChange={()=> setTag4(!tag4)}></input>
                        <label>Ergen Psikoloji</label>
                    </div>
                    <div className='col d-flex align-items-center'>
                        <input type='checkbox' style={{marginRight:'6px'}} id='check' className={styles.check} onChange={()=> setTag5(!tag5)}></input>
                        <label>Sosyal Fobi</label>
                    </div>
                    <div className='col d-flex align-items-center'>
                        <input type='checkbox' style={{marginRight:'6px'}} id='check' className={styles.check} onChange={()=> setTag6(!tag6)}></input>
                        <label>Depresyon</label>
                    </div>
                </div>
                <div className={styles.image}>
                    <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" onChange={(e)=> setFile(e.target.files[0])} style={{marginTop:'30px', marginBottom:'12px'}}/>
                </div>
                <div>
                    <label>Diploma ve Yerkinlik Belgesi</label>
                <input type="file" name="myImage" style={{marginTop:'10px', marginBottom:'10px'}}/>
                </div>
                <button className={styles.button} type='submit' onClick={async()=> await secondHandle()}>Kayıt Ol</button>
                <button type="button" className={styles.buttonArrow} onClick={async()=> await backHandle()}>Geri Dön</button>
            </form>
        </div>
    </section>
    </>
  )
}
