// Auto-split from main.tsx (refactor commit) — no logic changes.
import React,{useEffect,useState} from 'react';
import {Layers3,Menu,X} from 'lucide-react';
import {siHtml5,siCss,siJavascript,siReact,siNodedotjs} from 'simple-icons';
import {go, type Page} from '../router';
export function TechIcon({name,color}:{name:string;color?:string}){const icons:any={html:siHtml5,css:siCss,javascript:siJavascript,react:siReact,node:siNodedotjs};const palette:any={html:'E34F26',css:'1572B6',javascript:'F7DF1E',react:'61DAFB',node:'68A063'};const icon=icons[name];const fill=color||palette[name]||'FFFFFF';return icon?<svg className="tech-icon-img" viewBox="0 0 24 24" role="img" aria-label={name+' logo'}><path fill={'#'+fill} d={icon.path}/></svg>:<Layers3 className="tech-icon-img-fallback"/>}
export function Nav(){
 const[open,setOpen]=useState(false);
 const[dark,setDark]=useState(()=>localStorage.getItem('cv-theme')!=='light');
 const current=location.pathname.split('/').filter(Boolean)[0]||'home';
 useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('cv-theme',dark?'dark':'light')},[dark]);
 useEffect(()=>{const close=()=>setOpen(false);addEventListener('popstate',close);return()=>removeEventListener('popstate',close)},[]);
 const navItems:[Page,string,string][]=[['home','Home','home'],['paths','Learning Paths','paths'],['roadmaps','Roadmaps','roadmaps'],['paths','Courses','courses'],['projects','Projects','projects'],['resources','Resources','resources']];
 return <header className="nav"><div className="nav-inner">
   <button className="brand" onClick={()=>go('home')} aria-label="Coding Vibes home"><span className="brand-word">Coding<span>Vibes</span></span></button>
   <nav className={open?'nav-links open':'nav-links'} aria-label="Primary navigation">
    {navItems.map(([p,t,key])=><button className={current===key||((key==='courses'||key==='paths')&&current==='path')?'active':''} key={key} onClick={()=>{go(p as Page);setOpen(false)}}>{t}</button>)}
   </nav>
   
   <div className="nav-actions"><button className="theme-toggle" aria-label="Toggle theme" aria-pressed={!dark} onClick={()=>setDark(!dark)}>{dark?'☾':'☀'}</button><button className="login-link" onClick={()=>go('login')}>Login</button><button className="primary small" onClick={()=>go('signup')}>Sign Up</button><button className="menu" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
 </div></header>
}
export function Footer(){return <footer><div className="footer-main"><div><button className="brand" onClick={()=>go('home')}><span className="brand-word">Coding<span>Vibes</span></span></button><p>Learn visually. Build confidently.</p></div><div className="footer-links"><button onClick={()=>go('paths')}>Learning Paths</button><button onClick={()=>go('roadmaps')}>Roadmaps</button><button onClick={()=>go('projects')}>Projects</button><button onClick={()=>go('resources')}>Resources</button></div></div><div className="footer-bottom">© 2026 Coding Vibes <span>Built for curious builders.</span></div></footer>}
export function PageHero({kicker,title,sub}:{kicker:string,title:string,sub:string}){return <div className="page-hero"><span className="kicker">{kicker}</span><h1>{title}</h1><p>{sub}</p></div>}
