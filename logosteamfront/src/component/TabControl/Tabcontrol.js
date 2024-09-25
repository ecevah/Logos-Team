import React from 'react'

import error from '../../img/errorBG.svg';
import logo from '../../img/logosLogoLight.svg';
import x from '../../img/x.svg';


export default function Tabcontrol(){
  return (
    <>
        <div id="unroot">
        <div style="position: static; overflow: hidden; padding-top: 61px;">
            <img src={error} alt="background" height="50%" width="99%" style="position: absolute; left: 1%; z-index: -1;"/>
        </div>
        <img src={logo} height="75" width="150" alt="logo" style="margin-bottom: 200px;"/> 
        <section id="content">
            <img src={x} height="125" width="160" alt="logo" style="margin-bottom: 25px;"/>
            <div id="title">Bu penceredeki oturumunuz son buldu.</div>
            <div id="text">Başka bir pencereden açılmış.</div>
            <a href="https://www.teamlogos.tech/" id="btn">ANA SAYFAYA DÖN</a>
        </section>
        </div>
    </>
  )
}
