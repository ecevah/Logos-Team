import React, {useState,useEffect} from 'react'
import AgoraRTC from "agora-rtc-sdk-ng"
import {useNavigate} from 'react-router-dom';
import phone from '../../img/phoneIcon.svg';
import html2canvas from 'html2canvas';
import FeatherIcon from 'feather-icons-react';
import { CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import logosLogo from '../../img/logosLogoLight.svg';
import anger from '../../img/anger.png';
import happy from '../../img/happy.png';
import sad from '../../img/sad.png';
import disgusd from '../../img/disgusd.png';
import fear from '../../img/fear.png';
import suprised from '../../img/suprised.png';
import naturel from '../../img/naturel.png';
import user from '../../img/user.svg';

import verify from '../../api/verify';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Meeting(){
  const [post,setPost]=useState(null);
  const [mic, setMic] = useState(true);
  const [emoImg, setEmoImg] = useState(null);
  let [angerCount, setAngerCount] = useState(0);
  let [happyCount, setHappyCount] = useState(0);
  let [sadCount, setSadCount] = useState(0);
  let [disgustCount, setDisgustCount] = useState(0);
  let [fearCount, setFearCount] = useState(0);
  let [suprisedCount, setSuprisedCount] = useState(0);
  let [naturalCount, setNaturelCount] = useState(0);
  const [root, setRoot] = useState(null);
  const [procesComp, setProcesComp] = useState(null);
  const [arrEmo, setArrEmo] = useState([])

  const navigate = useNavigate();
  useEffect(() => {
    Auth();
    const interval = setInterval(() => {
      imagePredict();
      handleRoot();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  async function imagePredict() {
    const element = document.getElementById(1);
    try {
      const canvas = await html2canvas(element);
      const resizedCanvas = document.createElement('canvas');
      resizedCanvas.width = 212;
      resizedCanvas.height = 212;
      const ctx = resizedCanvas.getContext('2d');
      ctx.drawImage(canvas, 0, 0, 212, 212);

      resizedCanvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append('file', blob, 'image.png');
        const response = await axios.post("https://ai.teamlogos.tech/upload", formData, {
          headers: { 
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            'Content-Length': '<calculated when request is sent>',
            'Host': '<calculated when request is sent>'
          }
        });
        await handleEmo(response.data.result);
      }, 'image/png');
    } catch (error) {
      console.error(error);
    }
  };

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
            navigate('/login')
          }
        }
    let options =
{
    // Pass your App ID here.
    appId: '1ba5e29566184a42a7675087fbafcaf8',
    // Set the channel name.
    channel: 'wdj',
    // Pass your temp token here.
    token: '007eJxTYDjdlK7+3OnzF/sVUyNmzZCaWPVq+sJEbtWJwY5lt90/J0xUYDBMSjRNNbI0NTMztDBJNDFKNDczNzWwME9LSkxLTkyzKOb1SmkIZGRoeT6VmZEBAkF8ZobylCwGBgBkpB+U',
    // Set the user ID.
    uid: 0
};

let channelParameters =
{
    // A variable to hold a local audio track.
    localAudioTrack: null,
    // A variable to hold a local video track.
    localVideoTrack: null,
    // A variable to hold a remote audio track.
    remoteAudioTrack: null,
    // A variable to hold a remote video track.
    remoteVideoTrack: null,
    // A variable to hold the remote user id.s
    remoteUid: 1,
};
async function startBasicCall()
{
// Create an instance of the Agora Engine

const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
// Dynamically create a container in the form of a DIV element to play the remote video track.
const remotePlayerContainer = document.createElement("div");
// Dynamically create a container in the form of a DIV element to play the local video track.
const localPlayerContainer = document.createElement('div');
// Specify the ID of the DIV container. You can use the uid of the local user.
localPlayerContainer.id = options.uid;
// Set the textContent property of the local video container to the local user id.
//localPlayerContainer.textContent = "Local user " + options.uid;
// Set the local video container size.
localPlayerContainer.style.width = "200px";
localPlayerContainer.style.height = "200px";
localPlayerContainer.style.position = 'absolute';
localPlayerContainer.style.bottom = '50px';
localPlayerContainer.style.left = '50px'
localPlayerContainer.style.zIndex= 10;
localPlayerContainer.style.borderRadius = '10px';
localPlayerContainer.style.overflow = 'hidden';
// Set the remote video container size.
remotePlayerContainer.style.width = "75vw";
remotePlayerContainer.style.height = "101vh";
remotePlayerContainer.style.position = 'absolute';
remotePlayerContainer.style.margin = '0px';
remotePlayerContainer.style.left= '0px';

// Listen for the "user-published" event to retrieve a AgoraRTCRemoteUser object.
agoraEngine.on("user-published", async (user, mediaType) =>
{ 
// Subscribe to the remote user when the SDK triggers the "user-published" event.
await agoraEngine.subscribe(user, mediaType);
console.log("subscribe success");
// Subscribe and play the remote video in the container If the remote user publishes a video track.
if (mediaType === "video")
{
    // Retrieve the remote video track.
    channelParameters.remoteVideoTrack = user.videoTrack;
    // Retrieve the remote audio track.
    channelParameters.remoteAudioTrack = user.audioTrack;
    // Save the remote user id for reuse.
    //channelParameters.remoteUid = user.uid.toString();
    // Specify the ID of the DIV container. You can use the uid of the remote user.
    remotePlayerContainer.id = channelParameters.remoteUid;
    channelParameters.remoteUid = channelParameters.remoteUid;
    // Append the remote container to the page body.
    document.body.append(remotePlayerContainer);
    // Play the remote video track.
    channelParameters.remoteVideoTrack.play(remotePlayerContainer);
}
// Subscribe and play the remote audio track If the remote user publishes the audio track only.
if (mediaType === "audio")
{
    // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
    channelParameters.remoteAudioTrack = user.audioTrack;
    // Play the remote audio track. No need to pass any DOM element.
    channelParameters.remoteAudioTrack.play();
}
// Listen for the "user-unpublished" event.
agoraEngine.on("user-unpublished", user =>
{
    console.log(user.uid+ "has left the channel");
});
    });
window.onload = function ()
{
  //Auth();
    const tabId = sessionStorage.tabId ? sessionStorage.tabId : sessionStorage.tabId = Math.random();
    localStorage.tabId = tabId;

    const interval = setInterval(async function(){
        if(tabId != localStorage.tabId){
        clearInterval(interval)
        await tabError();
        }
        document.getElementById('isLoading').style.display = 'none';
    },1000);

    function tabError(){
        document.getElementById('root').style.display = 'none';
        document.getElementById('unroot').style.display = 'flex';
        document.getElementById('isLoading').style.display = 'none';
        document.getElementById('join').style.display = 'none';
        document.getElementById('goback').style.display = 'none';
        document.getElementById('logo').style.display = 'none';
        document.getElementById('leave').style.display = 'none';
        document.getElementById('mic').style.display = 'none';
        document.getElementById('cam').style.display = 'none';
        // Destroy the local audio and video tracks.
        channelParameters.localAudioTrack.close();
        channelParameters.localVideoTrack.close();
        // Remove the containers you created for the local video and remote video.
        removeVideoDiv(remotePlayerContainer.id);
        removeVideoDiv(localPlayerContainer.id);
        // Leave the channel
        console.log("You left the channel");
        window.close();
        if (!window.closed) {
          window.location.reload();
        }
    }
    // Listen to the Join button click event.
    document.getElementById("join").onclick = async function ()
    {
        document.getElementById('join').style.display = 'none';
        document.getElementById('goback').style.display = 'none';
        document.getElementById('logo').style.display = 'none';
        document.getElementById('leave').style.display = 'block';
        document.getElementById('mic').style.display = 'block';
        document.getElementById('cam').style.display = 'block';
        // Join a channel.
        await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
        // Create a local audio track from the audio sampled by a microphone.
        channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        // Create a local video track from the video captured by a camera.
        channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
        // Append the local video container to the page body.
        document.body.append(localPlayerContainer);
        // Publish the local audio and video tracks in the channel.
        await agoraEngine.publish([channelParameters.localAudioTrack, channelParameters.localVideoTrack]);
        // Play the local video track.
        channelParameters.localVideoTrack.play(localPlayerContainer);
        console.log("publish success!");
    }
    // Listen to the Leave button click event.
    document.getElementById('leave').onclick = async function ()
    {
        Swal.fire({
        title: 'Yorum',
        text: "Konuşmayı Yorumlamak İster Misin?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8C10B8',
        cancelButtonColor: '#422f2f80',
        confirmButtonText: 'Konuşmaya Yorum Yap',
        cancelButtonText: 'Çık'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Yorum',
            inputPlaceholder: 'Yorumunu buraya yazabilirsin',
            inputAttributes: {
              'aria-label': 'Yorumunu buraya yazabilirsin'
            },
            showCancelButton: true,
            confirmButtonColor: '#8C10B8',
            cancelButtonColor: '#422f2f80',
            confirmButtonText: 'Yorum Yap',
            cancelButtonText: 'Çık'
          })
          if (text) {
            const payload = {
              happy: happyCount,
              angry: angerCount,
              sad: sadCount,
              suprised: suprisedCount,
              disgust: disgustCount,
              fear: fearCount,
              neutural: naturalCount,
              comment: text
          }
          console.log('sadsadsda',text)
          const res = axios.post(`/api/talk/put?reservation_id=${localStorage.getItem('reservation_id')}&limit=20`,payload,{
            headers: {
              'x-access-token': localStorage.getItem('token'),
            },
          });
            await Swal.fire({
              icon: 'success',
              title: 'Tamamlandı',
              text: 'Yorum Başarıyla Kaydedildi',
              confirmButtonColor: '#8C10B8',
              confirmButtonText: 'Tamam'
            })
            document.getElementById('join').style.display = 'block';
            document.getElementById('goback').style.display = 'block';
            document.getElementById('logo').style.display = 'block';
            document.getElementById('leave').style.display = 'none';
            document.getElementById('mic').style.display = 'none';
            document.getElementById('talk').style.display = 'none';
            // Destroy the local audio and video tracks.
            channelParameters.localAudioTrack.close();
            channelParameters.localVideoTrack.close();
            // Remove the containers you created for the local video and remote video.
            removeVideoDiv(remotePlayerContainer.id);
            window.location.reload();
          }
          else{
            await Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Kaydedilmedi',
              confirmButtonColor: '#8C10B8',
              confirmButtonText: 'Tamam'
            })
            document.getElementById('join').style.display = 'block';
            document.getElementById('goback').style.display = 'block';
            document.getElementById('logo').style.display = 'block';
            document.getElementById('leave').style.display = 'none';
            document.getElementById('mic').style.display = 'none';
            document.getElementById('talk').style.display = 'none';
            // Destroy the local audio and video tracks.
            channelParameters.localAudioTrack.close();
            channelParameters.localVideoTrack.close();
            // Remove the containers you created for the local video and remote video.
            removeVideoDiv(remotePlayerContainer.id);
            removeVideoDiv(localPlayerContainer.id);
            // Leave the channel
            localStorage.setItem('meet','Yapıldı')
            // Refresh the page for reuse
            window.location.reload();
          }
        }else{
          document.getElementById('join').style.display = 'block';
          document.getElementById('goback').style.display = 'block';
          document.getElementById('logo').style.display = 'block';
          document.getElementById('leave').style.display = 'none';
          document.getElementById('mic').style.display = 'none';
          document.getElementById('talk').style.display = 'none';
          // Destroy the local audio and video tracks.
          channelParameters.localAudioTrack.close();
          channelParameters.localVideoTrack.close();
          // Remove the containers you created for the local video and remote video.
          removeVideoDiv(remotePlayerContainer.id);
          removeVideoDiv(localPlayerContainer.id);
          // Leave the channel
          localStorage.setItem('meet','Yapıldı')
          // Refresh the page for reuse
          window.location.reload();
        }
      })
    }
  }
  /*document.getElementById('photo').onclick = async function (){
    const element = document.getElementById(1);
    html2canvas(element)
      .then((canvas) => {
        const img = canvas.toDataURL('image/png');
        axios.post("https://ai.teamlogos.tech/image/predict", 
        {
          "image":img
        })
              .then(response => {
                console.log(response.data.result);
              })
              .catch(error => {
                console.error(error);
              });
      })
      .catch((error) => {
        console.error('Oops, bir şeyler ters gitti!', error);
      });
  };*/
}

startBasicCall();
// Remove the video stream from the container.
function removeVideoDiv(elementId)
{
    let Div = document.getElementById(elementId);
    if (Div)
    {
        Div.remove();
    }
};

const  handleEmo = async(emo) =>{
  switch(emo){
      case 'angry':
        await setAngerCount(prevCount=> prevCount+1);
        await setEmoImg(anger);
        break;
      case 'happy':
        await setHappyCount(prevCount=> prevCount+1);
        await setEmoImg(happy);
        break;
      case 'sad':
        await setSadCount(prevCount=> prevCount+1)
        await setEmoImg(sad);
        break;  
      case 'disgust':
        await setDisgustCount(prevCount=> prevCount+1);
        await setEmoImg(disgusd);
        break;
      case 'fear':
        await setFearCount(prevCount=> prevCount+1);
        await setEmoImg(fear);
      break;
      case 'surprise':
        await setSuprisedCount(prevCount=> prevCount+1);
        await setEmoImg(suprised);
        break;
      case 'neutral':
        await setNaturelCount(prevCount=> prevCount+1);
        await setEmoImg(naturel);
        break;  
      default:
        Swal.fire({
          position: 'top-start',
          icon: 'info',
          text: 'Yüz tanımlanamıyor!!',
          showConfirmButton: false,
          timer: 2500,
          backdrop: false,
          width: 300,
          position: 'top-start',
          iconHtml: '<i class="fas fa-exclamation-circle fa-sm" style="color:red"></i>',
          customClass: {
            backdrop: 'my-backdrop-class',
            popup: 'my-popup-class'
          }
        })
        break;
  }
} 

const handleEmoCalc = (number) => {
  const total = (happyCount + angerCount + sadCount + disgustCount + fearCount + suprisedCount + naturalCount);
  const percentage = (number * 100)/total;
  const res = Math.round(percentage);
  return res || 0;
}

const handleRoot = async () => {
  const response = await axios.get(`https://api.teamlogos.tech/api/talk/find?reservation_id=${localStorage.getItem('reservation_id')}`,{
    headers: {
      'x-access-token': localStorage.getItem('token'),
    }});
    console.log(response)
  const res = await response.data.talk[0].word.map((item)=>
  <div class="col" width={80} height={80} style={{marginTop:'10px'}}>
    <CircularProgressbarWithChildren value={item.count} maxValue={response.data.totalCount} styles={{
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
      <div id='circleTitle'>{item.word}</div>
      <div id='circleText'>
          {item.count}
      </div>
    </CircularProgressbarWithChildren>
  </div>
  );
  await setRoot(res);
}

  return (
    <>
        <div className="row">
            <div>
                <img src={logosLogo} id='logo' height={176} width={345} style={{position:'absolute', top:'35%', left:'43.5%'}} alt='logos'></img>
                <button type="button" id="join"><FeatherIcon icon='phone' color='#FFFFFF' size="45" style={{marginLeft:'auto',marginRight:'auto'}} stroke-width="2.5"/></button>
                <button type="button" id="goback" onClick={()=> navigate('/reservation')}><FeatherIcon icon='log-out' color='#FFFFFF' size="45" style={{marginLeft:'auto',marginRight:'auto'}} stroke-width="2.5"/></button>
                <button type="button" id="leave" style={{display:'none'}}><img src={phone} alt='phone' width={70} height={70}></img></button>
                <img src={logosLogo} alt='logo' id='mic' style={{display:'none'}} width={250} height={100}></img>
                <div id='talk' style={{display:'none'}}>
                    <div style={{display:'flex',flexDirection:'column', alignItems:'center',padding:'60px 36px 0px 36px', justifyContent:'center', height:'100%'}}>
                      <img src={!emoImg? user : emoImg} alt='Duygu Durumu' style={{marginBottom:'82px'}} width={200} height={200}></img>
                      <div style={{display:'flex',flexDirection:'column'}}>

        <div style={{width:'400px',display:'flex',flexDirection:'row', alignItems:'center', marginBottom:'10px'}}>
          <div id='textProcess' style={{color: '#403D56',marginBottom:'0px'}}>Mutlu</div>
          <div style={{display:'flex',flexDirection:'row'}}>
          <div id='process' style={{width:`${2*handleEmoCalc(happyCount)}px`}}></div>
          <div id='textProcess' style={{color: '#403D56',marginBottom:'0px', width:'65px'}}>{`% ${handleEmoCalc(happyCount)}`}</div>
          </div>
        </div>
        <div style={{width:'400px',display:'flex',flexDirection:'row', alignItems:'center', marginBottom:'10px'}}>
        <div id='textProcess' style={{color: '#403D56',marginBottom:'0px'}}>Üzgün</div>
        <div style={{display:'flex',flexDirection:'row' }}>
          <div id='process' style={{width:`${2*handleEmoCalc(sadCount)}px`}}></div>
          <div id='textProcess' style={{color: '#403D56',marginBottom:'0px', width:'65px'}}>{`% ${handleEmoCalc(sadCount)}`}</div>
        </div>
        </div>
        <div style={{width:'400px',display:'flex',flexDirection:'row', alignItems:'center', marginBottom:'10px'}}>
        <div id='textProcess' style={{color: '#403D56',marginBottom:'0px'}}>İğrenme</div>
        <div style={{display:'flex',flexDirection:'row' }}>
          <div id='process' style={{width:`${2*handleEmoCalc(disgustCount)}px`}}></div>
          <div id='textProcess' style={{color: '#403D56',marginBottom:'0px', width:'65px'}}>{`% ${handleEmoCalc(disgustCount)}`}</div>
        </div>
        </div>
        <div style={{width:'400px',display:'flex',flexDirection:'row', alignItems:'center', marginBottom:'10px'}}>
        <div id='textProcess' style={{color: '#403D56',marginBottom:'0px'}}>Korku</div>
        <div style={{display:'flex',flexDirection:'row' }}>
          <div id='process' style={{width:`${2*handleEmoCalc(fearCount)}px`}}></div>
          <div id='textProcess' style={{color: '#403D56',marginBottom:'0px', width:'65px'}}>{`% ${handleEmoCalc(fearCount)}`}</div>
        </div>
        </div>
        <div style={{width:'400px',display:'flex',flexDirection:'row', alignItems:'center', marginBottom:'10px'}}>
        <div id='textProcess' style={{color: '#403D56',marginBottom:'0px'}}>Şaşkın</div>
        <div style={{display:'flex',flexDirection:'row' }}>
          <div id='process' style={{width:`${2*handleEmoCalc(suprisedCount)}px`}}></div>
          <div id='textProcess' style={{color: '#403D56',marginBottom:'0px', width:'65px'}}>{`% ${handleEmoCalc(suprisedCount)}`}</div>
        </div>
        </div>
        <div style={{width:'400px',display:'flex',flexDirection:'row', alignItems:'center', marginBottom:'10px'}}>
        <div id='textProcess' style={{color: '#403D56',marginBottom:'0px'}}>Öfke</div>
        <div style={{display:'flex',flexDirection:'row' }}>
          <div id='process' style={{width:`${2*handleEmoCalc(angerCount)}px`}}></div>
          <div id='textProcess' style={{color: '#403D56',marginBottom:'0px', width:'65px'}}>{`% ${handleEmoCalc(angerCount)}`}</div>
        </div>
        </div>
        <div style={{width:'400px',display:'flex',flexDirection:'row', alignItems:'center', marginBottom:'10px'}}>
        <div id='textProcess' style={{color: '#403D56',marginBottom:'0px'}}>Nötr</div>
        <div style={{display:'flex',flexDirection:'row' }}>
          <div id='process' style={{width:`${2*handleEmoCalc(naturalCount)}px`}}></div>
          <div id='textProcess' style={{color: '#403D56',marginBottom:'0px', width:'65px'}}>{`% ${handleEmoCalc(naturalCount)}`}</div>
        </div>
        </div>
        </div>
                      <div style={{width:'100%', marginTop:'80px'}}>
                      <div class="row row-cols-4">
                        {/*<div class="col" width={80} height={80} style={{marginTop:'10px'}}>
                          <CircularProgressbarWithChildren value={66} styles={{
                            path: {
                              // Path color
                              stroke: `#533AED`,
                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: 'butt',
                              // Customize transition animation
                              transition: 'stroke-dashoffset 0.5s ease 0s',
                              // Rotate the path
                              transform: 'rotate(0.25turn)',
                              transformOrigin: 'center center',
                            },
                            trail: {
                              // Trail color
                              stroke: '#6c6c6c7d',
                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: 'butt',
                              // Rotate the trail
                              transform: 'rotate(0.25turn)',
                              transformOrigin: 'center center',
                            },}}>
                            <div id='circleTitle'>Asdhasd</div>
                            <div id='circleText' style={{ fontSize: 12, marginTop: -5 }}>
                                hkjkjh
                            </div>
                          </CircularProgressbarWithChildren>
                        </div>*/
                            root
                        }
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}
