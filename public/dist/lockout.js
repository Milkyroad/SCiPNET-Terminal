(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{VQ8e:function(t,e,a){"use strict";a.r(e),a.d(e,"lock",(function(){return o})),a.d(e,"unlock",(function(){return r}));var s,n=a("mUSF");const o=()=>{1==setting.audioStatus&&((s=new Audio("../src/ex_file/audio/alert.mp3")).addEventListener("ended",(function(){this.currentTime=0,this.play()}),!1),s.play()),$(".close").hide(),popUp("TERMINAL LOCKOUT",`<div style='text-align:center'>EMERGENCY LOCKOUT PROTOCOL INITIATED<br>.<br>.<br><span style="opacity:0.7;font-size:10px">INSTRUCTED BY ${String(displayName).toUpperCase()}, LEVEL ${clearance} CLEARANCE ORDER</span><br><span style="opacity:0.7;font-size:10px">Assigned via SCiPNET ${displayLoc} SCP FOUNDATION PORTAL</span></div>`),$("#NormalModalId").css("background","none"),$(".modal-content").attr("style","background-color:transparent!important"),$("#NormalModalId h1").css("text-align","center"),$(".modal").css("z-index","4"),Object(n.c)(`TERMINAL LOCKOUT - SYSTEM VALUE LOGGED<br><small>INSTRUCTED BY ${String(displayName).toUpperCase()}, LEVEL ${clearance} CLEARANCE ORDER</small>`),$("#input").attr("placeholder","EMERGENCY LOCKOUT PROTOCOL INITIATED, ENTER PASSCODE TO UNLOCK =>"),$("#ok").text("FILE SECURED, TERMINAL LOCKOUT"),$("#alarm").text("STANDBY MODE"),$("smallres").css("color","#e7192d")},r=()=>{1==setting.audioStatus&&(s.pause(),s.currentTime=0),$(".close").show(),$("#NormalModalId").css("background",""),$("#NormalModalId h1").css("text-align",""),$(".modal").css("z-index",""),$("#input").attr("placeholder","Enter Command..."),$("#ok").text("OK"),$("#alarm").text("NORMAL"),$("smallres").css("color","")}}}]);
