import React,{useEffect,useMemo,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import * as THREE from 'three';
import JSZip from 'jszip';
import {ArrowRight,BookOpen,Boxes,Check,CheckCircle2,ChevronRight,Code2,Download,FileCode2,GitBranch,Layers3,LogIn,Menu,Play,Route,Search,Settings,ShieldCheck,Sparkles,Terminal,Upload,Users,X} from 'lucide-react';
import {siHtml5,siCss,siJavascript,siReact,siNodedotjs} from 'simple-icons';
import {dbConfigured,getPublishedProjects as fetchPublishedProjects,getProjectFiles as fetchProjectFiles,getAllAdminProjects as fetchAdminProjects,saveProject as persistProject,saveProjectFiles as persistProjectFiles,deleteProject as removeProject,uploadProjectAsset,signInAdmin,getSessionUser,signOutAdmin,supabase} from './lib/supabase';
import './styles.css';

type Page='home'|'paths'|'path'|'lesson'|'roadmaps'|'roadmap'|'projects'|'project'|'resources'|'search'|'login'|'signup'|'dashboard'|'studio';
const paths=[
 {id:'html',title:'HTML',desc:'Build a semantic foundation for every web experience.',lessons:10,level:'Beginner',time:'4h 30m'},
 {id:'css',title:'CSS',desc:'Turn structure into responsive, polished interfaces.',lessons:12,level:'Beginner',time:'6h 00m'},
 {id:'javascript',title:'JavaScript',desc:'Add logic, interaction, APIs and browser behavior.',lessons:14,level:'Intermediate',time:'8h 30m'},
 {id:'react',title:'React',desc:'Build component-driven interfaces that scale.',lessons:16,level:'Intermediate',time:'9h 30m'},
 {id:'node',title:'Node.js',desc:'Create backend services, APIs and server-side tools.',lessons:15,level:'Intermediate',time:'8h 30m'},
 {id:'fullstack',title:'Full Stack',desc:'Connect frontend, backend, databases and deployment.',lessons:28,level:'Advanced',time:'18h 00m'}
];
const lessons=[
 ['01','How the web is structured','HTML','Understand documents, elements and semantic structure.'],
 ['02','Elements & attributes','HTML','Build useful content with semantic elements and attributes.'],
 ['03','Links, images & media','HTML','Connect pages and add accessible media.'],
 ['04','Lists, tables & forms','HTML','Collect and present structured information.'],
 ['05','Semantic page layout','HTML','Use header, nav, main, section, article and footer correctly.'],
 ['06','Forms & validation','HTML','Create usable forms with browser validation.'],
 ['07','Accessibility foundations','HTML','Build keyboard-friendly and meaningful markup.'],
 ['08','Metadata & SEO','HTML','Give search engines and social previews useful context.'],
 ['09','Project: profile page','HTML','Combine your skills into a responsive profile.'],
 ['10','Project review & next steps','HTML','Review the foundation and move into CSS.']
];
const projects=[
 {id:'dashboard',title:'Responsive Admin Dashboard',seoTitle:'Responsive Admin Dashboard HTML CSS JavaScript Project',tags:'admin dashboard, responsive dashboard, html css javascript project',tech:'HTML · CSS · JavaScript',level:'Intermediate',desc:'A modern responsive admin dashboard with sidebar navigation, analytics cards, charts, recent orders and interactive filters.'},
 {id:'todo',title:'Focus To-Do App',seoTitle:'To Do List App HTML CSS JavaScript Project',tags:'todo app, to do list, javascript project, localstorage',tech:'HTML · CSS · JavaScript',level:'Beginner',desc:'A focused task manager with priorities, filters, completion states and browser persistence using LocalStorage.'},
 {id:'weather',title:'Weather Explorer',seoTitle:'Weather App JavaScript API Project',tags:'weather app, javascript api project, fetch api',tech:'JavaScript · APIs',level:'Intermediate',desc:'A clean weather interface that practices API requests, loading states, error handling and readable weather data.'},
 {id:'portfolio',title:'Developer Portfolio',seoTitle:'Responsive Developer Portfolio HTML CSS Project',tags:'developer portfolio, html css portfolio, responsive website',tech:'HTML · CSS',level:'Beginner',desc:'A responsive portfolio with hero, projects, about and contact sections.'},
 {id:'quiz',title:'JavaScript Quiz App',seoTitle:'JavaScript Quiz App HTML CSS JS Project',tags:'javascript quiz app, quiz project, html css js',tech:'HTML · CSS · JavaScript',level:'Intermediate',desc:'A quiz app with questions, scoring, progress and retry states.'},
 {id:'expense',title:'Expense Tracker',seoTitle:'Expense Tracker JavaScript LocalStorage Project',tags:'expense tracker, javascript localstorage project',tech:'JavaScript · LocalStorage',level:'Intermediate',desc:'Track transactions, categories, totals and persistent local data.'},
 {id:'react-tasks',title:'React Task Board',seoTitle:'React Task Management Board TypeScript Project',tags:'react task board, typescript project, react components',tech:'React · TypeScript',level:'Intermediate',desc:'A component-driven task board for practicing props, state, filters and reusable UI.'},
 {id:'node-api',title:'Node REST API',seoTitle:'Node.js Express REST API Project for Beginners',tags:'node express api, rest api project, backend javascript',tech:'Node.js · Express',level:'Intermediate',desc:'A structured REST API with routes, middleware, validation and predictable JSON responses.'},
 {id:'auth-app',title:'Full Stack Auth App',seoTitle:'Full Stack Authentication React Node.js Project',tags:'full stack authentication, react node auth, protected routes',tech:'React · Node.js · Database',level:'Advanced',desc:'A learning project covering signup, login, sessions, protected routes and profile data.'},
 {id:'capstone',title:'Coding Vibes Capstone',seoTitle:'Full Stack Learning Platform Capstone Project',tags:'full stack capstone, learning platform, react node database',tech:'React · Node.js · Database',level:'Advanced',desc:'A complete platform-style build combining dashboard, CMS, learning content and deployment.'}
];
const resources=[
 ['VS Code Setup','Install VS Code, extensions, terminal basics and project folders.','Setup'],
 ['Git & GitHub','Learn repositories, commits, branches, remotes, push, pull and README workflow.','Git'],
 ['Deploy Your Website','Take a project live with GitHub, Vercel and a custom domain.','Deployment'],
 ['Build Your Own Website','Plan, design, code, test and ship a complete website.','Project'],
 ['AI for Coding','Use AI to explain, debug, review and learn without skipping verification.','AI']
];
const roadmapNodes=[
 ['01','Computer Basics','Foundations','Start here','2–3 hrs','Setup Lab'],
 ['02','HTML','Frontend','Structure & Basics','6–8 hrs','Developer Portfolio'],
 ['03','CSS','Frontend','Styling & Layouts','8–10 hrs','Responsive Dashboard'],
 ['04','JavaScript','Frontend','Logic & Interactivity','12–16 hrs','Quiz App'],
 ['05','React','Frontend','Frontend Framework','14–18 hrs','React Task Board'],
 ['06','Node.js','Backend','Backend Development','8–10 hrs','REST API'],
 ['07','Database','Backend','MongoDB / MySQL','8–10 hrs','Course Database'],
 ['08','Authentication','Full Stack','Users & Security','6–8 hrs','Auth App'],
 ['09','APIs','Full Stack','Build & Integrate','5–7 hrs','Projects API'],
 ['10','Deployment','DevOps','Go Live','4–6 hrs','Production Launch'],
 ['11','Build Projects','Portfolio','Build & Ship','10–20 hrs','Coding Vibes Capstone']
];



const lessonContent:Record<string,{objective:string;explanation:string;example:string;language:string;task:string;question:string;answers:string[];correct:number}> = {
 'html-1':{objective:'Understand how a browser turns an HTML document into a page.',explanation:'HTML is the structure layer of the web. A document is made from elements such as html, head, body, headings, paragraphs, links and sections. The browser reads this structure and builds the page you see. Start with meaningful structure before styling.',example:'<main>\n  <h1>My first page</h1>\n  <p>Welcome to Coding Vibes.</p>\n</main>',language:'HTML',task:'Create a page with one h1 and one paragraph. Change the text and run it.',question:'What is HTML mainly responsible for?',answers:['Page structure and meaning','Database storage','Server hosting','Image compression'],correct:0},
 'html-2':{objective:'Use elements and attributes correctly.',explanation:'An element describes a piece of content. Attributes add information to an element, such as href on a link, src on an image or class for styling hooks. Keep attributes meaningful and use quotes around their values.',example:'<a href="/about" title="About Coding Vibes">About</a>',language:'HTML',task:'Create a link with an href and a useful title attribute.',question:'Which attribute tells an anchor where to navigate?',answers:['src','href','alt','class'],correct:1},
 'html-3':{objective:'Add links and images with accessible alternatives.',explanation:'Links connect documents and sections. Images use src for the resource and alt for a text alternative. Good alt text describes the purpose of an image when it conveys information; decorative images can use an empty alt value.',example:'<a href="https://example.com">Visit the site</a>\n<img src="photo.jpg" alt="Student coding at a desk">',language:'HTML',task:'Add a link and an image with useful alt text.',question:'Why is alt text important?',answers:['It provides an accessible text alternative','It changes image colors','It loads JavaScript','It creates a database'],correct:0},
 'html-4':{objective:'Present repeated information and collect input.',explanation:'Lists represent groups of related items, tables represent tabular data, and forms collect user input. Choose the semantic structure that matches the meaning of the content rather than using elements only for visual appearance.',example:'<form>\n  <label for="email">Email</label>\n  <input id="email" type="email" required>\n  <button>Join</button>\n</form>',language:'HTML',task:'Build a small form with a labelled email field and submit button.',question:'Which element groups user input controls into a form?',answers:['form','table','img','footer'],correct:0},
 'html-5':{objective:'Create a semantic page layout.',explanation:'Semantic elements communicate the role of content. Header, nav, main, section, article, aside and footer help users, browsers and assistive technology understand your page. Use div when no more meaningful element fits.',example:'<header>Site header</header>\n<nav>Navigation</nav>\n<main>\n  <section><h2>Courses</h2></section>\n</main>\n<footer>Copyright</footer>',language:'HTML',task:'Create a page with header, nav, main and footer.',question:'Which element should contain the page main content?',answers:['main','head','meta','script'],correct:0},
 'html-6':{objective:'Build forms with useful browser validation.',explanation:'HTML can validate common input types before JavaScript is needed. Required fields, email, min, max, minlength and pattern can communicate basic rules directly to the browser. Validation messages should still be backed by server-side validation in real applications.',example:'<label for="age">Age</label>\n<input id="age" type="number" min="13" max="120" required>',language:'HTML',task:'Make a required email input and a number input limited from 13 to 120.',question:'Which attribute makes a control mandatory?',answers:['required','checked','selected','target'],correct:0},
 'html-7':{objective:'Build accessible structure from the start.',explanation:'Accessibility is not a final decoration. Use real buttons for actions, links for navigation, labels for inputs, headings in a logical order and alt text for meaningful images. Keyboard users should be able to reach and understand interactive controls.',example:'<button type="button" aria-label="Open menu">Menu</button>\n<label for="name">Name</label>\n<input id="name">',language:'HTML',task:'Replace a clickable div with a real button and label an input.',question:'Which is the correct element for an action?',answers:['button','span','div','p'],correct:0},
 'html-8':{objective:'Add useful metadata and search-friendly structure.',explanation:'The head contains metadata that helps browsers, search engines and social platforms understand a document. A meaningful title, description, viewport setting and semantic headings are basic foundations. SEO is about making useful content understandable, not stuffing keywords.',example:'<head>\n  <meta name="description" content="Learn HTML with Coding Vibes">\n  <title>HTML Course | Coding Vibes</title>\n</head>',language:'HTML',task:'Add a descriptive title and meta description to a page.',question:'Where does the document title belong?',answers:['title inside head','h1 inside footer','p inside body only','style inside main'],correct:0},
 'html-9':{objective:'Combine HTML foundations into a small profile project.',explanation:'A project is where isolated concepts become a useful structure. Plan the content first: header, navigation, profile section, skills list, projects and contact form. Use semantic elements and labels rather than styling your way out of structural problems.',example:'<main>\n  <article>\n    <h1>Alex — Frontend Developer</h1>\n    <p>I build accessible interfaces.</p>\n  </article>\n</main>',language:'HTML',task:'Build a one-page profile with a heading, bio, skills and contact form.',question:'What should you do before adding lots of CSS?',answers:['Build meaningful structure','Remove headings','Use div for everything','Skip accessibility'],correct:0},
 'html-10':{objective:'Review the HTML foundation and prepare for CSS.',explanation:'You now have the core HTML workflow: structure content, choose semantic elements, add accessible attributes, validate forms and provide useful metadata. CSS will add presentation while HTML remains responsible for meaning and structure.',example:'<main class="course-summary">\n  <h1>HTML complete</h1>\n  <p>Next: make it beautiful with CSS.</p>\n</main>',language:'HTML',task:'Review your profile project and improve its semantic structure before starting CSS.',question:'What is the next layer after HTML in our learning journey?',answers:['CSS','Database','Deployment','Authentication'],correct:0}
};
const curriculum:Record<string,string[]> = {
 html:['How the web is structured','Elements & attributes','Links, images & media','Lists, tables & forms','Semantic page layout','Forms & validation','Accessibility foundations','Metadata & SEO','Project: profile page','Project review & next steps'],
 css:['CSS syntax & selectors','Colors, units & typography','The box model','Display & positioning','Flexbox layouts','CSS Grid','Responsive design','Transitions & transforms','Animations','Forms & UI states','Component styling','CSS project'],
 javascript:['JavaScript fundamentals','Variables & data types','Operators & conditionals','Loops & iteration','Functions','Arrays & objects','DOM selection','Events & interactions','Forms & validation','Fetch & APIs','Async JavaScript','Modules','Error handling','JavaScript project'],
 react:['React mental model','Vite project setup','Components & JSX','Props','State','Events','Conditional rendering','Lists & keys','Forms','Effects','Fetching APIs','Custom hooks','Routing','Reusable UI','Performance basics','React project'],
 node:['Node.js fundamentals','npm & packages','Modules','HTTP server','Express setup','Routes','Middleware','REST APIs','Validation','Environment variables','Error handling','Authentication basics','Database connection','Testing APIs','Node project'],
 fullstack:['Computer & web basics','HTML foundations','CSS foundations','JavaScript foundations','Git & GitHub','React','Component architecture','Node.js','Express APIs','Database design','SQL & queries','Authentication','Authorization','API integration','Forms & validation','Security basics','Testing','Deployment','Environment configuration','Performance','Accessibility','SEO','Project architecture','Portfolio project','Capstone planning','Capstone build','Capstone deployment','Final review']
};
function go(page:Page,id?:string){const u=id?'/'+page+'/'+id:'/'+page;if(page==='home')history.pushState({},'', '/');else history.pushState({},'',u);window.dispatchEvent(new PopStateEvent('popstate'));setTimeout(()=>window.scrollTo({top:0,behavior:'auto'}),0)}
function route():{page:Page,id?:string}{const p=location.pathname.split('/').filter(Boolean);if(!p.length)return{page:'home'};const map:any={paths:'paths',path:'path',lesson:'lesson',roadmaps:'roadmaps',roadmap:'roadmap',projects:'projects',project:'project',resources:'resources',search:'search',login:'login',signup:'signup',dashboard:'dashboard',studio:'studio'};return{page:map[p[0]]||'home',id:p[1]}}
function useRoute(){const[,setTick]=useState(0);useEffect(()=>{const f=()=>setTick(x=>x+1);addEventListener('popstate',f);return()=>removeEventListener('popstate',f)},[]);return route()}

function Scene3D(){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!ref.current)return;const el=ref.current;const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(45,1,.1,100);camera.position.set(0,0,7.2);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(el.clientWidth,el.clientHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;el.appendChild(renderer.domElement);
 const root=new THREE.Group();scene.add(root);
 const core=new THREE.Mesh(new THREE.IcosahedronGeometry(1.22,2),new THREE.MeshStandardMaterial({color:0x18b957,emissive:0x063b20,metalness:.75,roughness:.18}));root.add(core);
 const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(1.58,2),new THREE.MeshBasicMaterial({color:0x63f39a,wireframe:true,transparent:true,opacity:.3}));root.add(wire);
 const ring1=new THREE.Mesh(new THREE.TorusGeometry(2.05,.012,12,180),new THREE.MeshBasicMaterial({color:0x38bdf8,transparent:true,opacity:.65}));ring1.rotation.x=.75;root.add(ring1);
 const ring2=ring1.clone();ring2.rotation.x=1.25;ring2.rotation.y=.5;root.add(ring2);
 const pts=new THREE.BufferGeometry(),count=900,pos=new Float32Array(count*3);for(let i=0;i<count;i++){const r=3+Math.random()*3.5,a=Math.random()*Math.PI*2;pos[i*3]=Math.cos(a)*r;pos[i*3+1]=(Math.random()-.5)*5.5;pos[i*3+2]=(Math.random()-.5)*5.5}pts.setAttribute('position',new THREE.BufferAttribute(pos,3));scene.add(new THREE.Points(pts,new THREE.PointsMaterial({color:0x4ade80,size:.018,transparent:true,opacity:.7})));
scene.add(new THREE.AmbientLight(0xb8ffda,.55));const light=new THREE.PointLight(0x22c55e,8,14);light.position.set(2,2,4);scene.add(light);const cyan=new THREE.PointLight(0x38bdf8,3,12);cyan.position.set(-3,-1,2);scene.add(cyan);
const mouse={x:0,y:0};const move=(e:MouseEvent)=>{mouse.x=e.clientX/innerWidth-.5;mouse.y=e.clientY/innerHeight-.5};addEventListener('mousemove',move);
let raf=0;const animate=()=>{raf=requestAnimationFrame(animate);root.rotation.y+=.0025;root.rotation.x+=(mouse.y*.22-root.rotation.x)*.025;root.position.x+=(mouse.x*.35-root.position.x)*.025;wire.rotation.y-=.004;ring1.rotation.z+=.006;ring2.rotation.z-=.004;renderer.render(scene,camera)};animate();
const resize=()=>{const w=el.clientWidth,h=el.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h)};addEventListener('resize',resize);resize();
return()=>{cancelAnimationFrame(raf);removeEventListener('mousemove',move);removeEventListener('resize',resize);renderer.dispose();el.removeChild(renderer.domElement)}} ,[]);
return <div className="scene3d" ref={ref}/>;
}

function TechIcon({name,color}:{name:string;color?:string}){const icons:any={html:siHtml5,css:siCss,javascript:siJavascript,react:siReact,node:siNodedotjs};const palette:any={html:'E34F26',css:'1572B6',javascript:'F7DF1E',react:'61DAFB',node:'68A063'};const icon=icons[name];const fill=color||palette[name]||'FFFFFF';return icon?<svg className="tech-icon-img" viewBox="0 0 24 24" role="img" aria-label={name+' logo'}><path fill={'#'+fill} d={icon.path}/></svg>:<Layers3 className="tech-icon-img-fallback"/>}
function Nav(){
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
function Footer(){return <footer><div className="footer-main"><div><button className="brand" onClick={()=>go('home')}><span className="brand-word">Coding<span>Vibes</span></span></button><p>Learn visually. Build confidently.</p></div><div className="footer-links"><button onClick={()=>go('paths')}>Learning Paths</button><button onClick={()=>go('roadmaps')}>Roadmaps</button><button onClick={()=>go('projects')}>Projects</button><button onClick={()=>go('resources')}>Resources</button></div></div><div className="footer-bottom">© 2026 Coding Vibes <span>Built for curious builders.</span></div></footer>}

function Home(){return <><Nav/><main className="home reference-home"><section className="home-hero reference-hero"><div className="home-hero-copy"><div className="home-pill"><span>LEARN</span><i>•</i><span>PRACTICE</span><i>•</i><span>BUILD</span><i>•</i><span>GROW</span></div><h1>Start Your<br/><em>Coding</em> Journey<br/>Today</h1><p>Step by step learning paths, interactive projects, and real world skills to take you from beginner to professional.</p><div className="hero-actions"><button className="primary" onClick={()=>go('paths')}>Start Learning <ArrowRight/></button><button className="secondary" onClick={()=>go('roadmaps')}>Explore Roadmaps</button></div><div className="hero-stats reference-stats"><span><CheckCircle2/><b>100K+</b><small>Active Learners</small></span><span><BookOpen/><b>500+</b><small>Hands-on Projects</small></span><span><BookOpen/><b>10</b><small>HTML Core Lessons</small></span><span><Sparkles/><b>4.8/5</b><small>Community Rating</small></span></div></div><div className="reference-hero-visual exact-reference-hero-art"><div className="hero-art-stage"><img className="hero-reference-image" src="/assets/cv-hero-art.webp" alt="Coding Vibes student learning with future skills" loading="eager" onError={(e)=>{e.currentTarget.style.display='none'}}/><div className="hero-skill-card">
   <span className="kicker">YOUR FUTURE SKILLS</span><b>START HERE.</b>
   <div className="hero-skill-checks">
    <span>✓ <i>Structured Learning</i></span>
    <span>✓ <i>Interactive Practice</i></span>
    <span>✓ <i>Real World Projects</i></span>
    <span>✓ <i>Career Guidance</i></span>
    <span>✓ <i>Community Support</i></span>
   </div>
  </div><div className="hero-tech-orbit orbit-one"><TechIcon name="html"/></div><div className="hero-tech-orbit orbit-two"><TechIcon name="css"/></div><div className="hero-tech-orbit orbit-three"><TechIcon name="javascript"/></div><div className="hero-tech-orbit orbit-four"><TechIcon name="react"/></div><div className="hero-tech-orbit orbit-five"><TechIcon name="node"/></div><div className="hero-project-chip"><Play size={14}/> Build • Run • Learn</div></div></div></section><section className="home-paths reference-paths"><div className="home-section-head"><div><h2>Popular Learning Paths</h2><p>Choose a path and start learning with structured lessons, practice and projects.</p></div><button className="text-link" onClick={()=>go('paths')}>View All Paths <ArrowRight size={16}/></button></div><div className="path-cards reference-path-grid">{paths.map((p,i)=><button className={'path-card reference-path-card path-card-'+i} key={p.id} onClick={()=>go('path',p.id)}><div className="path-icon"><TechIcon name={p.id==='fullstack'?'full':p.id}/></div><span className="path-name">{p.title}</span><small>{p.id==='javascript'?'Complete Roadmap':p.id==='react'?'Frontend Development':p.id==='node'?'Backend Development':p.id==='fullstack'?'Complete Roadmap':'Beginner to Advanced'}</small><strong>{p.lessons} Lessons</strong><i><ArrowRight size={17}/></i></button>)}</div></section><section className="home-why reference-why"><div className="why-title"><span className="kicker">WHY CHOOSE CODING VIBES?</span><h2>More than just tutorials —<br/>a complete coding<br/>learning experience.</h2><p>We combine structured learning, hands-on practice, real projects and career guidance to help you truly build real skills.</p><button className="primary" onClick={()=>go('paths')}>Start Learning Now <ArrowRight/></button></div><div className="why-grid reference-why-grid">{[['Interactive Learning',Code2,'Learn with visuals, examples and live practice.'],['Real Projects',Sparkles,'Build real world projects step by step.'],['Career Roadmaps',Users,'Get clear guidance to reach your goals.'],['Free Resources',BookOpen,'Access notes, source code and useful tools.']].map(([title,Icon,desc]:any,i)=><div className="why-card" key={title}><span className="why-icon"><Icon/></span><div><b>{title}</b><p>{desc}</p></div></div>)}</div></section></main><Footer/></>}
function PathList(){const[filter,setFilter]=useState('All');const visible=paths.filter(p=>filter==='All'||p.level===filter||(filter==='Frontend'&&['html','css','javascript','react'].includes(p.id))||(filter==='Backend'&&p.id==='node')||(filter==='Full Stack'&&p.id==='fullstack'));return <><Nav/><main className="listing reference-listing"><section className="paths-reference-hero"><div><span className="kicker">LEARNING PATHS</span><h1>Choose Your <em>Learning Path</em></h1><p>Structured courses to help you build real skills from beginner to professional.</p></div><div className="paths-hero-orb"><Layers3/></div></section><div className="filter-row reference-filters">{['All','Beginner','Frontend','Backend','Full Stack'].map(f=><button className={filter===f?'filter active':'filter'} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div><div className="card-grid reference-path-list-grid">{visible.map((p,i)=><button className={'feature-card reference-feature-card path-tone-'+i} key={p.id} onClick={()=>go('path',p.id)}><div className="feature-card-icon"><TechIcon name={p.id==='fullstack'?'full':p.id}/></div><div><span className="card-meta">{p.level} · {p.time}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="card-foot">{p.lessons} Lessons <ChevronRight size={16}/></div></div><span className="feature-arrow"><ArrowRight size={17}/></span></button>)}</div><section className="paths-start-banner"><div><span className="kicker">NOT SURE WHERE TO START?</span><h2>Find the right path for your goals.</h2><p>Start with a guided route, practise as you learn and build real projects along the way.</p><button className="primary" onClick={()=>go('roadmaps')}>Explore Roadmaps <ArrowRight/></button></div><div className="paths-banner-code"><span>&lt;learn&gt;</span><b>build()</b><i>practice → project → grow</i></div></section></main><Footer/></>}
function PageHero({kicker,title,sub}:{kicker:string,title:string,sub:string}){return <div className="page-hero"><span className="kicker">{kicker}</span><h1>{title}</h1><p>{sub}</p></div>}

function PathDetail({id}:{id?:string}){const p=paths.find(x=>x.id===id)||paths[0];const[completed,setCompleted]=useState(Number(localStorage.getItem('cv-progress-'+p.id)||0));const accent=['orange','blue','yellow','cyan','green','purple'][paths.findIndex(x=>x.id===p.id)]||'green';const rows=p.id==='html'?lessons:Array.from({length:p.lessons},(_,i)=>[String(i+1).padStart(2,'0'),(curriculum[p.id]||[])[i]||p.title+' lesson '+(i+1),'Lesson','Learn the concept, see a worked example, practice it and check your understanding.']);const percent=Math.round(completed/p.lessons*100);return <><Nav/><main className="inner-page path-detail-page"><button className="back" onClick={()=>go('paths')}>← Learning Paths</button><section className={'path-hero path-hero-'+accent}><div className="path-hero-copy"><span className="kicker">{p.level} · {p.time}</span><div className="path-orb"><span>{p.id==='html'?'HTML':p.id==='css'?'CSS':p.id==='javascript'?'JS':p.id==='react'?'⚛':p.id==='node'?'JS':'FULL'}</span></div><h1>{p.title}<em> path</em></h1><p>{p.desc}</p><div className="path-hero-meta"><span><BookOpen/> {p.lessons} lessons</span><span><Terminal/> Practice included</span><span><CheckCircle2/> Progress saved</span></div></div><div className="path-progress-card"><span>YOUR PROGRESS</span><strong>{completed}<small> / {p.lessons}</small></strong><div className="progress"><i style={{width:percent+'%'}}/></div><b>{percent}% complete</b><button className="primary" onClick={()=>go('lesson',p.id+'-'+Math.min(completed+1,p.lessons))}>{completed>=p.lessons?'Review last lesson':'Continue learning'} <ArrowRight/></button></div></section><section className="curriculum-head"><div><span className="kicker">CURRICULUM</span><h2>Learn in the right order.</h2><p>Every lesson follows the same workflow: Read → Understand → Practice → Check → Complete.</p></div><div className="curriculum-count"><b>{completed}/{p.lessons}</b><span>completed</span></div></section><div className="lesson-list premium-lesson-list">{rows.map((l:any,i:number)=><button className="lesson-row premium-lesson-row" key={l[0]} onClick={()=>go('lesson',p.id+'-'+(i+1))}><span className="lesson-number">{l[0]}</span><div><span>{i<completed?'COMPLETED':i===completed?'UP NEXT':'LESSON'}</span><h3>{l[1]}</h3><p>{l[3]}</p></div><span className={i<completed?'lesson-check done':'lesson-check'}>{i<completed?<Check/>:<Play size={15}/>}</span><ChevronRight/></button>)}</div></main><Footer/></>}
function generatedLessonData(pathId:string,title:string,idx:number){
 const html:any={
  3:{objective:'Learn how links connect pages and how images and media become part of a meaningful document.',explanation:'Links use the anchor element to connect users to another page or section. Images use src for the resource and alt for an accessible text alternative. Media should be placed where it supports the meaning of the page.',example:'<a href="/about">About Coding Vibes</a>\\n<img src="student.jpg" alt="Student coding at a desk">',language:'HTML',task:'Create one link and one image. Change the href and write meaningful alt text.',question:'Which attribute tells a link where to go?',answers:['href','src','alt','class'],correct:0},
  4:{objective:'Use lists, tables and forms for the right kind of information.',explanation:'Unordered and ordered lists group related items. Tables represent rows and columns of data. Forms collect information from users. Choose the element that matches the meaning instead of using a table or div only for layout.',example:'<ul>\\n  <li>HTML</li>\\n  <li>CSS</li>\\n</ul>\\n<table><tr><th>Course</th></tr><tr><td>HTML</td></tr></table>',language:'HTML',task:'Make a three-item list and a small two-column table. Then add a labelled email input.',question:'Which element is designed for tabular data?',answers:['table','form','ul','img'],correct:0},
  5:{objective:'Build a page with semantic sections that communicate meaning.',explanation:'Semantic HTML makes the role of content clear to browsers, assistive technology and other developers. Use header, nav, main, section, article, aside and footer where they describe the content accurately.',example:'<header>Site header</header>\\n<nav>Navigation</nav>\\n<main><section><h2>Courses</h2></section></main>\\n<footer>Copyright</footer>',language:'HTML',task:'Replace generic div containers with meaningful semantic elements.',question:'Which element should contain the primary content of the page?',answers:['main','head','meta','script'],correct:0},
  6:{objective:'Create forms that give users clear input fields and useful browser validation.',explanation:'Labels explain controls and connect them to inputs. Input types such as email and number provide built-in browser behavior, while required, min, max and minlength express simple validation rules.',example:'<form>\\n  <label for="email">Email</label>\\n  <input id="email" type="email" required>\\n  <button type="submit">Join</button>\\n</form>',language:'HTML',task:'Build a required email field with a visible label and submit button.',question:'Which attribute makes an input mandatory?',answers:['required','target','class','alt'],correct:0},
  7:{objective:'Make HTML usable with keyboards, screen readers and assistive technology.',explanation:'Accessibility starts with correct HTML. Use buttons for actions, links for navigation, labels for controls, logical headings and useful alt text. Do not make a div behave like a button when a real button already exists.',example:'<button type="button">Open menu</button>\\n<label for="name">Name</label>\\n<input id="name">',language:'HTML',task:'Replace a clickable div with a real button and connect a label to an input.',question:'Which element is correct for an action such as opening a menu?',answers:['button','div','span','p'],correct:0},
  8:{objective:'Give browsers and search engines useful document metadata.',explanation:'The head contains metadata such as the title, description and viewport settings. Semantic headings and meaningful content also help search engines understand the page. Good SEO starts with useful, well-structured content.',example:'<head>\\n  <meta name="description" content="Learn HTML with Coding Vibes">\\n  <title>HTML Course | Coding Vibes</title>\\n</head>',language:'HTML',task:'Add a useful title and meta description to your page.',question:'Where should the document title be placed?',answers:['Inside head','Inside footer','Inside a table','Inside a button'],correct:0},
  9:{objective:'Combine HTML foundations into a complete profile page.',explanation:'A project turns individual elements into a useful document. Plan the structure first, then add headings, profile information, a skills list, project links and a contact form using semantic HTML.',example:'<main>\\n  <article>\\n    <h1>Alex — Frontend Developer</h1>\\n    <p>I build accessible interfaces.</p>\\n    <ul><li>HTML</li><li>CSS</li></ul>\\n  </article>\\n</main>',language:'HTML',task:'Build a one-page profile with a heading, bio, skills and contact section.',question:'What should you build before spending time on visual styling?',answers:['Meaningful HTML structure','Only animations','A database','A deployment pipeline'],correct:0},
  10:{objective:'Review HTML structure, semantics, accessibility and forms before moving to CSS.',explanation:'HTML is the meaning and structure layer. Before moving on, check that your headings are logical, links work, images have appropriate alt text, forms have labels and semantic elements describe the page correctly.',example:'<main>\\n  <h1>HTML Complete</h1>\\n  <p>Next: style this structure with CSS.</p>\\n</main>',language:'HTML',task:'Review your profile project and fix one structural or accessibility issue.',question:'Which technology is the next learning layer after HTML?',answers:['CSS','Database','Deployment','Authentication'],correct:0}
 };
 const map:any={
  css:{example:'<style>\\n  .card {\\n    display: grid;\\n    gap: 1rem;\\n    padding: 1.5rem;\\n  }\\n</style>',language:'CSS',task:'Create a responsive card and change its spacing, color and layout.',explanation:'CSS controls presentation. Select an element, choose a property and give it a value. Start with readable structure, then use Flexbox, Grid and responsive rules to create polished interfaces.'},
  javascript:{example:'const button = document.querySelector("button");\\nbutton?.addEventListener("click", () => {\\n  console.log("Hello Coding Vibes");\\n});',language:'JavaScript',task:'Select a button and add a click handler that changes visible text.',explanation:'JavaScript adds behavior to web pages. Learn fundamentals first, then connect code to the DOM through selection and events. Test small changes and handle errors clearly.'},
  react:{example:'function Welcome({ name }: { name: string }) {\\n  return <h2>Hello, {name}</h2>;\\n}',language:'React',task:'Create a reusable component that accepts one prop and renders it.',explanation:'React helps you compose interfaces from reusable components. Start with JSX and props, then learn state, events, effects, data fetching and routing.'},
  node:{example:'import http from "node:http";\\n\\nconst server = http.createServer((req, res) => {\\n  res.end("Coding Vibes API");\\n});',language:'Node.js',task:'Create a small server response and identify the request and response objects.',explanation:'Node.js runs JavaScript outside the browser. Backend applications receive requests, validate input, perform work and return responses. Express adds routing and middleware, while databases persist application data.'},
  fullstack:{example:'// Browser → React → API → Node/Express → Database\\nconst request = { method: "GET", path: "/api/projects" };',language:'Full Stack',task:'Describe the data flow from a browser action to an API and back to the UI.',explanation:'Full-stack development connects frontend, backend and data layers. A user interacts with the UI, the frontend calls an API, the backend validates and processes the request, and the response returns to the interface.'}
 };
 const base=pathId==='html'?(html[idx]||{example:'<main><h1>HTML practice</h1></main>',language:'HTML',task:'Build a small semantic HTML example.',explanation:'Practice semantic HTML by creating a small page and testing it in the browser.',question:'What is HTML mainly responsible for?',answers:['Page structure and meaning','Database storage','Server hosting','Image compression'],correct:0}):(map[pathId]||{example:'// Practice today\\nconsole.log("Build something small and test it");',language:title,task:'Apply the concept in a small example and test your result.',explanation:'Learn the idea, inspect the example, change one thing, run it and explain why the result changed.',question:'What is the most useful next step after learning this concept?',answers:['Apply it in a small practice task','Skip the example','Only memorise the heading','Move on without testing'],correct:0});
 return {objective:base.objective||title+' — understand the concept and apply it in a small project.',explanation:base.explanation,example:base.example,language:base.language,task:base.task,question:base.question||'What is the most useful next step after learning this concept?',answers:base.answers||['Apply it in a small practice task','Skip the example','Only memorise the heading','Move on without testing'],correct:base.correct??0};
}
function lessonLineNote(language:string,line:string,index:number){
 const t=line.trim();
 if(!t)return 'Blank spacing keeps the code readable.';
 if(language==='HTML'){
   if(/^<!doctype/i.test(t))return 'Declares the document as modern HTML so the browser uses the current parsing rules.';
   if(/^<html/i.test(t))return 'Opens the root HTML element. Attributes such as lang describe the document.';
   if(/^<head/i.test(t))return 'Opens the metadata area. Information here supports the document rather than appearing as page content.';
   if(/^<title/i.test(t))return 'Sets the text shown in the browser tab and used as the document title.';
   if(/^<body/i.test(t))return 'Opens the visible document area where page content is rendered.';
   if(/^<h1/i.test(t))return 'Creates the main heading. h1 communicates the primary topic of this page.';
   if(/^<p/i.test(t))return 'Creates a paragraph. The browser renders the text as normal flowing content.';
   if(/^<a\b/i.test(t))return 'Creates a link. The href attribute stores the destination the browser should navigate to.';
   if(/^<img\b/i.test(t))return 'Embeds an image. src points to the resource and alt provides an accessible text alternative.';
   if(/^<\/body/i.test(t))return 'Closes the visible document area.';
   if(/^<\/html/i.test(t))return 'Closes the root HTML element and completes the document structure.';
 }
 if(language==='CSS'){
   if(t.includes('{'))return 'Opens a CSS rule. The selector before the brace chooses which elements receive the declarations.';
   if(t.includes(':'))return 'This declaration sets one visual property. Change the value and run the example to see its effect.';
   if(t==='}')return 'Closes the rule so the next selector starts a separate style block.';
 }
 if(language==='JavaScript'){
   if(/^(const|let|var)\b/.test(t))return 'Creates a variable and stores a value that later code can read or update.';
   if(/function|=>/.test(t))return 'Defines behavior that can run when the function is called or the event occurs.';
   if(/querySelector|addEventListener/.test(t))return 'Connects JavaScript to the browser document so code can find an element or respond to an event.';
   if(/fetch\(/.test(t))return 'Starts an HTTP request. Real applications should handle loading, success and failure states.';
   if(/return\b/.test(t))return 'Sends a value back to the code that called this function.';
 }
 if(language==='React'){
   if(/function\s+\w+/.test(t))return 'Defines a reusable React component. Its returned JSX describes the UI for the current props and state.';
   if(/useState/.test(t))return 'Creates state and its setter. Calling the setter schedules a new render with the updated value.';
   if(/useEffect/.test(t))return 'Starts an effect used to synchronize the component with something outside normal rendering.';
   if(/return/.test(t))return 'Returns the JSX tree React should render for this component.';
 }
 if(language==='Node.js'||language==='Full Stack'){
   if(/express\(/.test(t))return 'Creates the server application that will receive HTTP requests.';
   if(/app\.(get|post|patch|delete)/.test(t))return 'Registers an API route for a specific HTTP method and URL path.';
   if(/res\.(json|send|end)/.test(t))return 'Builds the HTTP response sent back to the client.';
   if(/fetch\(/.test(t))return 'Connects one application layer to another through an HTTP request.';
 }
 return index===0?'Start by identifying what this line creates or controls.':'Connect this line to the previous one and check what changes in the final output.';
}

function lessonTeachingMeta(pathId:string,title:string){
 const t=title.toLowerCase();
 const meta={outcomes:['Explain what the topic is and the problem it solves.','Read a small working example and identify the important parts.','Change one meaningful value, run it, and explain the result.'],syntax:'Start with the smallest valid pattern, then add only the pieces required by the current task.',commonMistake:'Copying the example without changing or testing it.',use:'Real websites, interfaces and projects use this concept as part of a larger feature.',takeaway:'If you can explain the purpose, read the example, change it, and verify the output, you understand the core idea.'};
 if(pathId==='html'){
   if(t.includes('link'))return {...meta,outcomes:['Create links with the correct destination and meaningful link text.','Use image and media elements with appropriate attributes when the topic requires them.','Test navigation and accessibility instead of judging the result only by appearance.'],syntax:'<a href="destination">Link text</a>  ·  <img src="image.jpg" alt="Description">',commonMistake:'Using a non-semantic element for navigation or leaving meaningful images without useful alt text.',use:'Navigation menus, article links, portfolios, documentation and media-rich pages.'};
   if(t.includes('list')||t.includes('table')||t.includes('form'))return {...meta,outcomes:['Choose lists for grouped items and tables for tabular data.','Build form controls with labels and meaningful input types.','Check the structure before adding visual styling.'],syntax:'Choose the element that matches the meaning: <ul>/<ol>, <table>, or <form> with labelled controls.',commonMistake:'Using tables for page layout or inputs without associated labels.',use:'Menus, product data, comparison tables, contact forms, signup and checkout flows.'};
   if(t.includes('semantic'))return {...meta,outcomes:['Recognize common semantic landmarks.','Choose elements based on meaning rather than visual appearance.','Improve structure for users, browsers and assistive technology.'],syntax:'<header> <nav> <main> <section> <article> <aside> <footer>',commonMistake:'Using <div> for everything when a meaningful semantic element exists.',use:'Accessible page layouts, blogs, dashboards, landing pages and documentation.'};
   if(t.includes('validation'))return {...meta,outcomes:['Connect labels to controls.','Use built-in input types and validation attributes.','Know when server-side validation is still required.'],syntax:'<input type="email" required> · <input type="number" min="13" max="120">',commonMistake:'Treating browser validation as a replacement for server-side validation.',use:'Signup, login, contact, checkout and data-entry forms.'};
   if(t.includes('access'))return {...meta,outcomes:['Use native controls for keyboard interaction.','Provide labels, headings and alternative text.','Check the page without relying only on a mouse.'],syntax:'Use real <button>, <a>, <label>, headings and meaningful alt text before adding ARIA.',commonMistake:'Making a <div> behave like a button instead of using a real button.',use:'Every public website and application that should be usable by more people.'};
   if(t.includes('metadata')||t.includes('seo'))return {...meta,outcomes:['Set a useful document title and description.','Understand what belongs in <head>.','Connect semantic structure with search-friendly content.'],syntax:'<head> → <meta charset> → <meta name="description"> → <title>…</title>',commonMistake:'Stuffing keywords while ignoring useful content and document structure.',use:'Search results, browser tabs, sharing previews and production websites.'};
 }
 if(pathId==='css'){
   if(t.includes('selector'))return {...meta,outcomes:['Target the intended elements with selectors.','Understand specificity at a practical level.','Keep selectors readable and maintainable.'],syntax:'selector { property: value; }',commonMistake:'Writing overly specific selectors that become difficult to override.',use:'Every styled web interface, from buttons to complete design systems.'};
   if(t.includes('flex'))return {...meta,outcomes:['Create a flex container.','Control main-axis and cross-axis alignment.','Build common one-dimensional layouts without hacks.'],syntax:'display:flex; · justify-content:… · align-items:… · gap:…',commonMistake:'Confusing the main axis with the cross axis.',use:'Navigation bars, cards, toolbars, form rows and responsive components.'};
   if(t.includes('grid'))return {...meta,outcomes:['Create rows and columns with Grid.','Control gaps and track sizes.','Use Grid for two-dimensional layouts.'],syntax:'display:grid; · grid-template-columns:… · gap:…',commonMistake:'Using Grid when a simple Flexbox row or column would be clearer.',use:'Dashboards, galleries, card layouts and page-level sections.'};
   if(t.includes('responsive'))return {...meta,outcomes:['Think mobile-first.','Use flexible sizes and media queries where needed.','Test layouts at more than one viewport width.'],syntax:'@media (min-width: …) { … } plus fluid widths, flex and grid.',commonMistake:'Designing only for one screen width.',use:'Phones, tablets, laptops and large displays.'};
 }
 if(pathId==='javascript'){
   if(t.includes('variable')||t.includes('data type'))return {...meta,outcomes:['Store values with let and const appropriately.','Recognize common JavaScript data types.','Predict the result of simple expressions.'],syntax:'const name = "Coding Vibes"; · let count = 0;',commonMistake:'Using const/let without understanding whether the binding needs reassignment.',use:'State, configuration, calculations and application data.'};
   if(t.includes('loop'))return {...meta,outcomes:['Choose a loop that matches the task.','Track the current value or item safely.','Avoid accidental infinite loops.'],syntax:'for (const item of items) { … }',commonMistake:'Changing the loop condition incorrectly and creating an infinite loop.',use:'Rendering lists, processing data and repeating a task.'};
   if(t.includes('function'))return {...meta,outcomes:['Define reusable behavior.','Pass values through parameters and return results.','Keep functions focused on one job.'],syntax:'function add(a, b) { return a + b; }',commonMistake:'Writing one giant function that mixes unrelated responsibilities.',use:'Event handlers, data transformations, validation and reusable logic.'};
   if(t.includes('dom')||t.includes('event'))return {...meta,outcomes:['Find elements in the document.','Respond to user events.','Update the interface from JavaScript.'],syntax:'document.querySelector("button")?.addEventListener("click", handler)',commonMistake:'Trying to manipulate an element before it exists or selecting the wrong element.',use:'Menus, forms, buttons, modals, tabs and interactive UI.'};
   if(t.includes('fetch')||t.includes('api'))return {...meta,outcomes:['Send an HTTP request with fetch.','Handle asynchronous results and errors.','Use returned data to update the UI.'],syntax:'const response = await fetch(url); const data = await response.json();',commonMistake:'Ignoring loading and error states or assuming every response is successful.',use:'Weather apps, dashboards, search, payments and data-driven interfaces.'};
 }
 if(pathId==='react'){
   if(t.includes('component')||t.includes('jsx'))return {...meta,outcomes:['Create a reusable component.','Return readable JSX.','Split UI into sensible pieces instead of one giant component.'],syntax:'function Card(){ return <article>…</article>; }',commonMistake:'Putting unrelated UI and state into one oversized component.',use:'Dashboards, product interfaces and reusable component systems.'};
   if(t.includes('prop'))return {...meta,outcomes:['Pass data from parent to child.','Destructure props clearly.','Keep component APIs small and predictable.'],syntax:'function Card({title}:{title:string}) { return <h2>{title}</h2>; }',commonMistake:'Mutating props instead of treating them as input.',use:'Reusable cards, lists, layouts and configurable UI components.'};
   if(t.includes('state'))return {...meta,outcomes:['Store changing UI data with state.','Update state through its setter.','Understand that state changes trigger a render.'],syntax:'const [count,setCount] = useState(0);',commonMistake:'Mutating state directly instead of using the state setter.',use:'Forms, counters, filters, toggles and interactive application state.'};
   if(t.includes('effect')||t.includes('fetch'))return {...meta,outcomes:['Identify when an effect is needed.','Keep dependencies accurate.','Clean up subscriptions or requests when appropriate.'],syntax:'useEffect(() => { /* synchronize with an external system */ }, [dependency]);',commonMistake:'Using effects for ordinary calculations that can happen during render.',use:'Subscriptions, browser APIs, data fetching and external synchronization.'};
 }
 if(pathId==='node'){
   if(t.includes('route')||t.includes('rest')||t.includes('api'))return {...meta,outcomes:['Define an HTTP endpoint.','Read request data and return a predictable response.','Use the correct HTTP method for the action.'],syntax:'app.get("/api/items", (req,res) => res.json(items));',commonMistake:'Returning inconsistent status codes or accepting invalid input.',use:'Web APIs, mobile backends, dashboards and full-stack applications.'};
   if(t.includes('middleware'))return {...meta,outcomes:['Understand middleware order.','Read or modify request/response data safely.','Pass control with next() when appropriate.'],syntax:'app.use((req,res,next) => { …; next(); });',commonMistake:'Forgetting next() in middleware that should continue the request.',use:'Logging, authentication, validation, CORS and request processing.'};
   if(t.includes('auth'))return {...meta,outcomes:['Understand authentication versus authorization.','Protect sensitive routes.','Avoid storing secrets directly in source code.'],syntax:'Authorization: Bearer <token> → verify → attach user → authorize',commonMistake:'Trusting client-provided identity or hard-coding production secrets.',use:'Accounts, dashboards, admin panels and protected APIs.'};
 }
 if(pathId==='fullstack'){
   if(t.includes('database')||t.includes('sql'))return {...meta,outcomes:['Model the data your feature actually needs.','Read and write data through a controlled server layer.','Validate input before persistence.'],syntax:'UI → API → server validation → database query → response → UI',commonMistake:'Letting the browser connect directly to a production database.',use:'Accounts, products, orders, dashboards and persistent application data.'};
   if(t.includes('deploy'))return {...meta,outcomes:['Prepare a production build.','Configure environment variables safely.','Verify the live application after deployment.'],syntax:'git push → CI/build → deploy → production URL → verify',commonMistake:'Deploying without checking build output, environment variables and routes.',use:'Publishing real websites and applications for users.'};
 }
 return meta;
}

const htmlDeepLessons:Record<number,any>=[
  {
    "title": "How the web is structured",
    "outcomes": [
      "Explain HTML's job in the browser.",
      "Recognize the document skeleton: doctype, html, head and body.",
      "Build a valid first page and understand where visible content belongs."
    ],
    "concept": "HTML is the structure and meaning layer of a web page. The browser reads HTML markup, builds a document tree, and uses that structure to decide what each piece of content represents. CSS will later control presentation, while JavaScript can add behavior.",
    "why": "If the structure is wrong, styling and interaction become harder to reason about. Good HTML gives every later layer a clear foundation.",
    "syntax": "<!doctype html> → <html> → <head> → <body>",
    "examples": [
      [
        "A minimal HTML document",
        "<!doctype html>\\n<html lang=\"en\">\\n  <head>\\n    <meta charset=\"UTF-8\">\\n    <title>My First Page</title>\\n  </head>\\n  <body>\\n    <h1>Hello, Coding Vibes!</h1>\\n    <p>My first web page.</p>\\n  </body>\\n</html>"
      ],
      [
        "Visible content belongs in body",
        "<body>\\n  <h1>About Me</h1>\\n  <p>I am learning web development.</p>\\n</body>"
      ]
    ],
    "explain": [
      "The doctype tells the browser to use modern HTML parsing rules.",
      "The html element is the root of the document; lang=\"en\" describes the document language.",
      "The head contains metadata such as the title and character encoding.",
      "The body contains the content users actually see on the page."
    ],
    "mistake": "Putting visible page content inside head, or treating HTML as a styling language.",
    "practice": "Create an HTML file with a title, one main heading and two paragraphs. Open it directly in your browser and identify which lines belong to head and which belong to body.",
    "check": [
      "Where does visible page content normally live?",
      "What is the purpose of <!doctype html>?",
      "Which element is the root of an HTML document?"
    ],
    "answer": "body; it triggers modern HTML parsing; html"
  },
  {
    "title": "Elements & attributes",
    "outcomes": [
      "Distinguish a tag, element and attribute.",
      "Use opening/closing tags and void elements correctly.",
      "Add meaningful attributes such as id, class, href, src and alt.",
      "Nest elements in a valid parent-child structure."
    ],
    "concept": "An HTML element represents a piece of content and its meaning. Many elements have an opening tag, content, and a closing tag. Attributes add extra information to an element and appear in the opening tag.",
    "why": "Attributes are how HTML elements receive destinations, identifiers, alternatives, relationships and other behavior. Correct nesting also creates the document tree that CSS and assistive technology depend on.",
    "syntax": "<element attribute=\"value\">content</element>",
    "examples": [
      [
        "Element + attribute",
        "<p class=\"intro\">Welcome to Coding Vibes.</p>\\n<a href=\"/courses\" id=\"courses-link\">Explore courses</a>"
      ],
      [
        "A void element",
        "<img src=\"student.jpg\" alt=\"Student coding at a laptop\">"
      ]
    ],
    "explain": [
      "class can be shared by many elements; id should identify one unique element in a document.",
      "href tells an anchor where to navigate; src points to a resource such as an image.",
      "alt supplies a text alternative for a meaningful image.",
      "Some elements, such as img, are void elements and do not use a closing tag."
    ],
    "mistake": "Using attributes as decoration without understanding their meaning, or incorrectly nesting elements.",
    "practice": "Create a heading with a class, a link with href, and an image with src and useful alt text. Change each attribute and observe what changes.",
    "check": [
      "Which attribute gives an anchor its destination?",
      "Which attribute provides alternative text for an image?",
      "Can an img element have a closing </img> tag?"
    ],
    "answer": "href; alt; no, img is a void element"
  },
  {
    "title": "Links, images & media",
    "outcomes": [
      "Create absolute and relative links.",
      "Write meaningful link text and understand fragment links.",
      "Embed images with src, alt, width and height considerations.",
      "Use figure/figcaption and basic audio/video elements appropriately."
    ],
    "concept": "Links connect the web together. Images and media add information or experience to a document, but they should still be meaningful, accessible and appropriately sized.",
    "why": "A page is more useful when users can navigate it, understand its images, and access media without depending on visual context alone.",
    "syntax": "<a href=\"destination\">Link text</a> · <img src=\"file\" alt=\"description\">",
    "examples": [
      [
        "Absolute vs relative links",
        "<a href=\"https://example.com\">External site</a>\\n<a href=\"/courses/html\">HTML course</a>\\n<a href=\"#practice\">Jump to practice</a>"
      ],
      [
        "Image with caption",
        "<figure>\\n  <img src=\"student.jpg\" alt=\"Student writing HTML code\" width=\"640\" height=\"400\">\\n  <figcaption>Learning HTML through practice.</figcaption>\\n</figure>"
      ],
      [
        "Audio and video",
        "<audio controls src=\"lesson.mp3\"></audio>\\n<video controls width=\"640\" src=\"demo.mp4\"></video>"
      ]
    ],
    "explain": [
      "Absolute URLs point to a complete external address; relative URLs point within your own site.",
      "A fragment link targets an element whose id matches the fragment.",
      "Meaningful images need useful alt text. Decorative images can use alt=\"\".",
      "width and height help reserve space; CSS can later make media responsive."
    ],
    "mistake": "Writing 'click here' for every link, leaving informative images without alt text, or using huge media files without considering performance.",
    "practice": "Build a small About Me section with an internal link, external link, image with caption, and one media element.",
    "check": [
      "What attribute stores a link destination?",
      "What does alt describe?",
      "What does href=\"#practice\" target?"
    ],
    "answer": "href; the image's text alternative; the element with id=\"practice\""
  },
  {
    "title": "Lists, tables & forms",
    "outcomes": [
      "Choose unordered, ordered and description lists correctly.",
      "Build a table with headings and grouped sections.",
      "Know when a table is appropriate and when it is not.",
      "Recognize a form as a structured way to collect user input."
    ],
    "concept": "Lists group related items, tables represent two-dimensional data, and forms collect user input. The important skill is choosing the structure because of meaning, not because it happens to look convenient.",
    "why": "Semantic structure makes content easier to scan, style and understand. Tables should represent data, never be used as a page-layout hack.",
    "syntax": "<ul>/<ol> + <li> · <table> + <tr>/<th>/<td> · <form> + controls",
    "examples": [
      [
        "Ordered and unordered lists",
        "<ul>\\n  <li>HTML</li>\\n  <li>CSS</li>\\n</ul>\\n<ol>\\n  <li>Plan</li>\\n  <li>Build</li>\\n  <li>Test</li>\\n</ol>"
      ],
      [
        "A structured data table",
        "<table>\\n  <caption>Course progress</caption>\\n  <thead><tr><th scope=\"col\">Course</th><th scope=\"col\">Progress</th></tr></thead>\\n  <tbody><tr><td>HTML</td><td>60%</td></tr>\\n</tbody>\\n</table>"
      ],
      [
        "A first form",
        "<form>\\n  <label for=\"email\">Email</label>\\n  <input id=\"email\" name=\"email\" type=\"email\">\\n  <button type=\"submit\">Join</button>\\n</form>"
      ]
    ],
    "explain": [
      "Use ul when order does not matter, ol when sequence matters, and description lists for term/description pairs.",
      "A table needs rows and cells; th identifies headers and caption gives the table a useful title.",
      "A form groups controls that collect or submit information; detailed form controls come in the next lesson."
    ],
    "mistake": "Using tables to position page sections, or choosing a list only because CSS makes it easy to style.",
    "practice": "Create a course list, a two-column progress table, and a small email form. Add a caption and column headings to the table.",
    "check": [
      "Which list is best for step-by-step instructions?",
      "What is a table for?",
      "Which element starts a form?"
    ],
    "answer": "ol; tabular data; form"
  },
  {
    "title": "Semantic page layout",
    "outcomes": [
      "Use header, nav, main, section, article, aside and footer appropriately.",
      "Build a page outline before styling it.",
      "Understand why semantic structure helps accessibility and maintainability.",
      "Know when a generic div is actually appropriate."
    ],
    "concept": "Semantic HTML gives content a meaningful role. A header is not simply a box at the top; nav is for navigation, main is the page's primary content, article represents a self-contained composition, and footer contains closing information.",
    "why": "Meaningful structure helps browsers, assistive technology, search engines and other developers understand the page without relying on visual styling.",
    "syntax": "<header> <nav> <main> <section> <article> <aside> <footer>",
    "examples": [
      [
        "Semantic page skeleton",
        "<header>\\n  <h1>Coding Vibes</h1>\\n</header>\\n<nav>...</nav>\\n<main>\\n  <section><h2>Courses</h2></section>\\n  <article><h2>Latest lesson</h2></article>\\n  <aside>Related resources</aside>\\n</main>\\n<footer>© Coding Vibes</footer>"
      ],
      [
        "Use div when no semantic element fits",
        "<section>\\n  <h2>Courses</h2>\\n  <div class=\"course-grid\">...</div>\\n</section>"
      ]
    ],
    "explain": [
      "main should represent the primary content of the page and normally should not be repeated as multiple main landmarks.",
      "section should usually have a meaningful heading; article is useful for self-contained content that could stand alone.",
      "div is still valid when you need a generic grouping with no more appropriate semantic meaning."
    ],
    "mistake": "Replacing every div with a semantic element without considering meaning, or using header/nav/footer purely because they sound professional.",
    "practice": "Take a simple page and write its outline as text first. Then replace generic containers with the semantic elements that actually describe each region.",
    "check": [
      "Which element contains primary page content?",
      "Which element is intended for navigation links?",
      "When is div appropriate?"
    ],
    "answer": "main; nav; when no more meaningful semantic element fits"
  },
  {
    "title": "Forms & validation",
    "outcomes": [
      "Build a complete form with form, label, input and button.",
      "Choose useful input types such as email, password, number, date and tel.",
      "Connect labels using for/id and understand the name attribute.",
      "Use required, min, max, minlength, maxlength and pattern for basic browser validation.",
      "Understand action/method and why server-side validation is still required."
    ],
    "concept": "Forms are the web's main mechanism for collecting user input. A useful form has a clear structure: the form container, labelled controls, appropriate input types, and a submit action. Browser validation can catch simple mistakes before data is sent.",
    "why": "Forms appear in login, signup, checkout, search, feedback and admin workflows. A form that looks good but has missing labels, wrong types or no validation is still a poor form.",
    "syntax": "<form action=\"/submit\" method=\"post\"> → <label> + <input> → <button type=\"submit\">",
    "examples": [
      [
        "A complete accessible form",
        "<form action=\"/signup\" method=\"post\">\\n  <label for=\"name\">Full name</label>\\n  <input id=\"name\" name=\"name\" type=\"text\" autocomplete=\"name\" required>\\n\\n  <label for=\"email\">Email address</label>\\n  <input id=\"email\" name=\"email\" type=\"email\" autocomplete=\"email\" required>\\n\\n  <label for=\"password\">Password</label>\\n  <input id=\"password\" name=\"password\" type=\"password\" minlength=\"8\" required>\\n\\n  <button type=\"submit\">Create account</button>\\n</form>"
      ],
      [
        "Grouped controls",
        "<fieldset>\\n  <legend>Contact preference</legend>\\n  <label><input type=\"radio\" name=\"contact\" value=\"email\"> Email</label>\\n  <label><input type=\"radio\" name=\"contact\" value=\"phone\"> Phone</label>\\n</fieldset>"
      ],
      [
        "Select and textarea",
        "<label for=\"course\">Course</label>\\n<select id=\"course\" name=\"course\">\\n  <option value=\"html\">HTML</option>\\n  <option value=\"css\">CSS</option>\\n</select>\\n<label for=\"message\">Message</label>\\n<textarea id=\"message\" name=\"message\" rows=\"5\"></textarea>"
      ]
    ],
    "explain": [
      "form groups the controls and can use action/method to define submission behavior.",
      "label connects visible instructions to a control. for must match the input id.",
      "name is the key used when form data is submitted; id is primarily for document association and targeting.",
      "required and type=email provide browser-side checks; min/max and length attributes add more constraints.",
      "Client-side validation improves feedback, but real applications must validate again on the server."
    ],
    "mistake": "Using placeholder text as the only label, forgetting name, using type=\"text\" for every field, or trusting browser validation as security.",
    "practice": "Build a registration form with name, email, password, age, course select, contact radio buttons, agreement checkbox and submit button. Make required fields validate in the browser.",
    "check": [
      "Why should label for match input id?",
      "Why is name important when submitting form data?",
      "Does client-side validation replace server-side validation?"
    ],
    "answer": "It associates the label with the control; it supplies the submitted field name; no"
  },
  {
    "title": "Accessibility foundations",
    "outcomes": [
      "Use semantic elements before reaching for ARIA.",
      "Make forms understandable with labels and grouping.",
      "Provide meaningful image alternatives and logical headings.",
      "Keep keyboard users able to reach and understand interactive controls.",
      "Recognize common accessibility mistakes in HTML."
    ],
    "concept": "Accessible HTML is mostly about using the correct native element and giving content meaningful text. A real button already knows how to receive focus and activate; a div pretending to be a button creates extra work and often misses keyboard behavior.",
    "why": "Accessibility is part of correct HTML, not a final visual polish. Semantic elements expose useful information to browsers and assistive technologies.",
    "syntax": "Native HTML first: <button>, <a>, <label>, headings, lists, tables and meaningful alt text.",
    "examples": [
      [
        "Correct action vs navigation",
        "<button type=\"button\">Open menu</button>\\n<a href=\"/courses\">Browse courses</a>"
      ],
      [
        "Accessible form control",
        "<label for=\"phone\">Phone number</label>\\n<input id=\"phone\" name=\"phone\" type=\"tel\" autocomplete=\"tel\">"
      ],
      [
        "Decorative vs meaningful image",
        "<img src=\"shape.svg\" alt=\"\">\\n<img src=\"certificate.png\" alt=\"HTML course completion certificate\">"
      ]
    ],
    "explain": [
      "Use button for an action and anchor for navigation.",
      "Headings should form a sensible outline; do not choose heading levels only because a size looks good.",
      "Alt text should communicate the purpose of a meaningful image. Decorative images can have an empty alt value.",
      "Use fieldset and legend when several controls form one logical group."
    ],
    "mistake": "Click handlers on divs, missing labels, vague alt text, skipped heading levels for visual size, and unnecessary ARIA replacing native semantics.",
    "practice": "Audit your profile project with the keyboard only. Tab through controls, check focus visibility, inspect labels and decide which images need alt text.",
    "check": [
      "Which element should trigger an action?",
      "What should a meaningful image's alt text communicate?",
      "What should you prefer before ARIA?"
    ],
    "answer": "button; its purpose/information; native semantic HTML"
  },
  {
    "title": "Metadata & SEO",
    "outcomes": [
      "Understand what belongs inside head.",
      "Write useful title and meta description content.",
      "Use viewport and language metadata appropriately.",
      "Understand how semantic structure contributes to discoverability.",
      "Recognize SEO as useful content and structure, not keyword stuffing."
    ],
    "concept": "The head contains information about the document rather than the page's main visible content. Title, description, character encoding and viewport settings help browsers, search engines and sharing systems understand and present the page.",
    "why": "Production pages need more than visible markup. A useful title improves browser tabs and search presentation; a clear description helps communicate what the page is about.",
    "syntax": "<head> → charset → viewport → title → description → relevant links",
    "examples": [
      [
        "A production-ready head foundation",
        "<head>\\n  <meta charset=\"UTF-8\">\\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n  <meta name=\"description\" content=\"Learn HTML with structured lessons and practice at Coding Vibes.\">\\n  <title>HTML Course | Coding Vibes</title>\\n</head>"
      ],
      [
        "Useful page title",
        "<title>HTML Forms & Validation | Coding Vibes</title>"
      ]
    ],
    "explain": [
      "charset declares how text is encoded; UTF-8 covers the characters used by modern web pages.",
      "viewport helps responsive pages render correctly on mobile devices.",
      "title should be specific to the page and readable; it is not a hidden keyword list.",
      "A description should summarize useful page content rather than repeat a pile of keywords."
    ],
    "mistake": "Leaving every page with the same title, writing spammy descriptions, or putting visible page content inside head.",
    "practice": "Add a unique title and description to your profile project. Make sure the title describes the actual page and the description reads naturally.",
    "check": [
      "Where does title belong?",
      "What does viewport metadata help with?",
      "What is the goal of a meta description?"
    ],
    "answer": "head; responsive/mobile rendering; clearly summarize the page"
  },
  {
    "title": "Project: profile page",
    "outcomes": [
      "Plan a page before writing markup.",
      "Combine headings, links, images, lists and forms semantically.",
      "Use accessibility and metadata practices together.",
      "Produce a complete HTML-only profile ready for CSS styling."
    ],
    "concept": "This project combines the previous lessons into one realistic page. The goal is not to make it beautiful yet. The goal is to produce clean, meaningful HTML that CSS can style later without fixing structural problems.",
    "why": "Projects turn isolated syntax into a workflow. You learn to decide what the content means, which element represents it, and how different parts connect.",
    "syntax": "head metadata → header/nav → main → profile/article → skills/projects → contact form → footer",
    "examples": [
      [
        "Complete profile structure",
        "<!doctype html>\\n<html lang=\"en\">\\n<head>\\n  <meta charset=\"UTF-8\">\\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n  <title>Alex | Frontend Developer</title>\\n  <meta name=\"description\" content=\"Alex's frontend developer profile and selected projects.\">\\n</head>\\n<body>\\n  <header><h1>Alex — Frontend Developer</h1></header>\\n  <nav><a href=\"#projects\">Projects</a> · <a href=\"#contact\">Contact</a></nav>\\n  <main>\\n    <section><h2>About me</h2><p>I build accessible web interfaces.</p></section>\\n    <section><h2>Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></section>\\n    <section id=\"projects\"><h2>Projects</h2><article><h3>Dashboard</h3><p>Responsive admin interface.</p></article></section>\\n    <section id=\"contact\"><h2>Contact</h2><form>\\n      <label for=\"email\">Email</label><input id=\"email\" name=\"email\" type=\"email\" required>\\n      <button type=\"submit\">Send</button>\\n    </form></section>\\n  </main>\\n  <footer><p>© 2026 Alex</p></footer>\\n</body>\\n</html>"
      ]
    ],
    "explain": [
      "Start with content and page regions, not CSS classes.",
      "Give every section a meaningful heading and every interactive control the correct native element.",
      "Run the page, inspect it, test links, test the form and check the document with browser DevTools."
    ],
    "mistake": "Starting with visual divs and class names, then trying to retrofit semantic structure after the design is finished.",
    "practice": "Build the profile from scratch. Do not copy the complete example. Use the checklist to decide the elements and write your own content.",
    "check": [
      "What should you plan before styling?",
      "Which section contains primary content?",
      "What must every important form control have?"
    ],
    "answer": "content and semantic structure; main; an associated label"
  },
  {
    "title": "Project review & next steps",
    "outcomes": [
      "Audit HTML structure, semantics, links, media, forms and metadata.",
      "Use browser DevTools to inspect the DOM.",
      "Find and correct common markup mistakes.",
      "Explain what HTML is responsible for before moving into CSS."
    ],
    "concept": "Finishing HTML means being able to read a page as a document, not just recognizing tags. You should be able to explain why each major element exists, test it in the browser, and fix structural or accessibility issues.",
    "why": "A strong review prevents gaps from following you into CSS and JavaScript. The next layer should enhance a sound HTML foundation rather than hide structural problems.",
    "syntax": "Read → inspect → test → fix → explain",
    "examples": [
      [
        "Final semantic checklist",
        "<header>...</header>\\n<nav>...</nav>\\n<main>\\n  <section>...</section>\\n  <article>...</article>\\n</main>\\n<footer>...</footer>"
      ],
      [
        "Debug with DevTools",
        "Right click → Inspect\\nCheck: DOM nesting, attributes, links, form labels, image alt text, console/network clues."
      ]
    ],
    "explain": [
      "Inspect the DOM tree to see whether your nesting matches your intention.",
      "Test links and forms rather than assuming they work from appearance.",
      "Use browser validation and developer tools to find structural issues.",
      "Then move to CSS: presentation should build on meaning, not replace it."
    ],
    "mistake": "Calling HTML complete because the page looks okay. Visual correctness alone does not prove semantic or accessible correctness.",
    "practice": "Audit your profile page against a 10-point checklist: document structure, headings, links, images, lists, tables/forms where relevant, labels, keyboard use, metadata, and clean nesting.",
    "check": [
      "What should CSS change?",
      "What should remain HTML's responsibility?",
      "What is the final test before moving on?"
    ],
    "answer": "presentation/layout; content structure and meaning; inspect, test and fix the HTML"
  }
];

function lessonTableRows(pathId:string,title:string){
 const t=title.toLowerCase();
 if(pathId==='html'){
  if(t.includes('web is structured'))return [['doctype','Tells the browser to use modern HTML parsing rules.'],['html','Root element of the document.'],['head','Contains document metadata.'],['body','Contains visible page content.']];
  if(t.includes('elements'))return [['Element','Represents a piece of content and its meaning.'],['Attribute','Adds information to an element.'],['class','Reusable styling/targeting hook.'],['id','Unique identifier for an element.']];
  if(t.includes('links'))return [['href','Destination of an anchor link.'],['src','Resource location for media such as images.'],['alt','Text alternative for meaningful images.'],['figure','Groups media with an optional caption.']];
  if(t.includes('lists'))return [['ul / ol','Groups unordered or ordered items.'],['li','Individual list item.'],['table','Represents tabular data.'],['form','Groups controls used to collect/submit data.']];
  if(t.includes('semantic'))return [['header','Introductory content for a page or section.'],['nav','Major navigation links.'],['main','Primary content of the page.'],['section / article','Meaningful content group / self-contained composition.'],['footer','Closing information for a page or section.']];
  if(t.includes('forms'))return [['label','Identifies a form control.'],['input','Collects typed or selected data.'],['select','Provides a list of options.'],['fieldset','Groups related controls.'],['required','Makes a field mandatory in browser validation.']];
  if(t.includes('accessibility'))return [['button','Use for actions.'],['a','Use for navigation.'],['alt','Provides an image alternative.'],['label','Makes form controls understandable.'],['heading hierarchy','Creates a navigable content outline.']];
  if(t.includes('metadata'))return [['title','Names the document/browser tab.'],['description','Summarizes page content.'],['viewport','Supports correct responsive rendering.'],['lang','Declares the document language.']];
  if(t.includes('profile'))return [['Plan','Decide the content and page regions.'],['Structure','Choose semantic HTML elements.'],['Test','Open, inspect and test the document.'],['Refine','Fix semantics, labels, links and metadata.']];
  return [['HTML','Structure and meaning layer.'],['CSS','Presentation and layout layer.'],['JavaScript','Behavior and interaction layer.']];
 }
 return [['Concept','What this lesson teaches.'],['Syntax','Smallest useful pattern.'],['Practice','A task that proves understanding.'],['Check','Questions before moving on.']];
}
function Lesson({id}:{id?:string}){
 const parts=(id||'html-1').split('-');
 const p=paths.find(x=>x.id===parts[0])||paths[0];
 const idx=Math.max(1,Number(parts[1]||1));
 const lesson=p.id==='html'?lessons[idx-1]:[String(idx).padStart(2,'0'),(curriculum[p.id]||[])[idx-1]||p.title+' lesson '+idx,p.title,'Learn the concept, see a worked example, practice it and check your understanding.'];
 const key='cv-complete-'+p.id+'-'+idx;
 const fallback=lessonContent[p.id+'-'+idx]||generatedLessonData(p.id,lesson[1],idx);
 const data=p.id==='html'?htmlDeepLessons[idx-1]:fallback;
 const savedKey='cv-draft-code-'+p.id+'-'+idx;
 const[savedNotice,setSavedNotice]=useState('');
 const[done,setDone]=useState(localStorage.getItem(key)==='1');
 const[tab,setTab]=useState<'text'|'practice'>('text');
 const[code,setCode]=useState(()=>localStorage.getItem(savedKey)||data.example);
 const[output,setOutput]=useState('');
 const[selected,setSelected]=useState<number|null>(null);
 useEffect(()=>{const saved=localStorage.getItem(savedKey);if(saved)setCode(saved);else setCode(data.example)},[savedKey,data.example]);
 const complete=()=>{const n=!done;setDone(n);localStorage.setItem(key,n?'1':'0');if(n){const current=Number(localStorage.getItem('cv-progress-'+p.id)||0);localStorage.setItem('cv-progress-'+p.id,String(Math.max(current,idx)))}};
 const runCode=()=>{if(p.id==='html'||data.language==='HTML'){const safe=code.replace(/<script[\\s\\S]*?<\\/script>/gi,'');setOutput(safe)}else if(data.language==='CSS'){setOutput('<style>'+code.replace(/<style>|<\\/style>/gi,'')+'</style><main style="font-family:system-ui;padding:32px"><h1>CSS Playground</h1><p>Edit the CSS and run it.</p></main>')}else if(data.language==='JavaScript'){setOutput('<main style="font-family:system-ui;padding:32px"><h1 id="title">JavaScript Playground</h1><button id="btn">Run interaction</button><pre id="log"></pre></main><script>'+code.replace(/<script>|<\\/script>/gi,'')+'<\\/script>')}else setOutput('<main style="font-family:system-ui;padding:32px"><h2>Practice preview</h2><p>This playground is ready for '+data.language+' examples.</p></main>')};
 const nextIdx=idx+1,prevIdx=idx-1;
 const nextTitle=nextIdx<=p.lessons?(p.id==='html'?lessons[nextIdx-1]?.[1]:curriculum[p.id]?.[nextIdx-1])||'Next lesson':'';
 const prevTitle=prevIdx>=1?(p.id==='html'?lessons[prevIdx-1]?.[1]:curriculum[p.id]?.[prevIdx-1])||'Previous lesson':'';
 const tableRows=lessonTableRows(p.id,lesson[1]);
 const sectionItems=['WHAT YOU\'LL LEARN','THE CONCEPT','CORE PATTERN','WORKED EXAMPLES','DEEP DIVE','COMMON MISTAKE','PRACTICE','QUICK CHECK','QUICK SUMMARY'];
 return <><Nav/><main className="lesson-page lesson-page-v2">
  <button className="back" onClick={()=>go('path',p.id)}>← {p.title} path</button>
  <div className="lesson-layout">
   <aside className="lesson-sidebar" aria-label="Lesson navigation">
    <div className="lesson-sidebar-inner">
     <span className="sidebar-kicker">{p.title} COURSE</span>
     <b className="sidebar-title">Course contents</b>
     <div className="lesson-sidebar-list">{(p.id==='html'?lessons:curriculum[p.id].map((x,i)=>[String(i+1).padStart(2,'0'),x])).map((l:any,i:number)=><button key={i} className={i===idx-1?'active':''} onClick={()=>go('lesson',p.id+'-'+(i+1))}><span>{String(i+1).padStart(2,'0')}</span><em>{l[1]||l}</em>{i<Number(localStorage.getItem('cv-progress-'+p.id)||0)&&<Check size={13}/>}</button>)}</div>
     <div className="lesson-sidebar-note"><span>LEARNING FLOW</span><b>Read → Understand → Practice → Check</b><small>Videos are intentionally not part of the current lesson flow.</small></div>
    </div>
   </aside>
   <article>
    <span className="kicker">{p.title.toUpperCase()} · LESSON {lesson[0]}</span>
    <h1>{lesson[1]}</h1><p className="lead">{data.objective}</p>
    <div className="learning-tabs learning-tabs-text-only">
     <button className={tab==='text'?'active':''} onClick={()=>setTab('text')}><BookOpen/> Learn by text</button>
     <button className={tab==='practice'?'active':''} onClick={()=>setTab('practice')}><Terminal/> Practice</button>
    </div>
    {tab==='text'&&<div className="text-lesson rich-reading rich-reading-html">
     <div className="lesson-language-note"><b>Learning language:</b> English with simple explanations, examples and practical code. <span>Lesson flow: Learn → Understand → Example → Practice → Check → Next topic.</span></div>
     <div className="lesson-callout"><Sparkles/><div><b>Lesson objective</b><p>{data.objective}</p></div></div>
     <section className="lesson-section" id="learn"><span className="section-kicker">01 · WHAT YOU'LL LEARN</span><h2>Learning outcomes</h2><ul className="lesson-summary-list">{data.outcomes.map((x:string)=><li key={x}>{x}</li>)}</ul></section>
     <section className="lesson-section" id="concept"><span className="section-kicker">02 · THE CONCEPT</span><h2>{data.title}</h2><p>{data.concept}</p><div className="lesson-deep-card lesson-why-card"><span>WHY THIS MATTERS</span><p>{data.why}</p></div>
      <div className="lesson-reference-table"><div className="lesson-table-title"><span>REFERENCE TABLE</span><b>Key elements at a glance</b></div><div className="table-scroll"><table><thead><tr><th>Element / idea</th><th>Purpose</th></tr></thead><tbody>{tableRows.map((r:any)=><tr key={r[0]}><td><code>{r[0]}</code></td><td>{r[1]}</td></tr>)}</tbody></table></div></div>
     </section>
     <section className="lesson-section" id="syntax"><span className="section-kicker">03 · CORE PATTERN</span><h2>Start with the smallest useful syntax</h2><div className="syntax-card"><code>{data.syntax}</code><button onClick={()=>{navigator.clipboard?.writeText(data.syntax);setSavedNotice('Syntax copied.')}}>Copy syntax</button></div>{data.explain.slice(0,2).map((x:string,i:number)=><p key={i}>{x}</p>)}</section>
     <section className="lesson-section" id="examples"><span className="section-kicker">04 · WORKED EXAMPLES</span><h2>Read it, then change it</h2>{data.examples.map((ex:any,i:number)=><div className="worked-example" key={ex[0]}><div className="worked-example-head"><b>{String(i+1).padStart(2,'0')} · {ex[0]}</b><span>{p.title}</span></div><p>{data.explain[i%data.explain.length]}</p><div className="code"><div>{p.title} example <span>{p.title}</span><button onClick={()=>{navigator.clipboard?.writeText(ex[1]);setSavedNotice('Example copied.')}}>Copy</button></div><pre>{ex[1]}</pre></div><div className="line-by-line">{ex[1].split('\n').slice(0,10).map((line:string,j:number)=><div className={line.trim()?'code-line':'code-line blank'} key={j}><b>Line {j+1}</b><span><code>{line||' '}</code><small>{lessonLineNote(data.language||'HTML',line,j)}</small></span></div>)}</div></div>)}</section>
     <section className="lesson-section" id="deep-dive"><span className="section-kicker">05 · DEEP DIVE</span><h2>Important details</h2><div className="lesson-detail-grid">{data.explain.map((x:string,i:number)=><div className="lesson-detail-card" key={x}><b>{['Understand','Remember','Build correctly','Think like a developer'][i%4]}</b><p>{x}</p></div>)}</div></section>
     <section className="lesson-section" id="mistakes"><span className="section-kicker">06 · COMMON MISTAKE</span><h2>What to avoid</h2><div className="lesson-warning-card"><span>⚠ COMMON MISTAKE</span><p>{data.mistake}</p></div></section>
     <section className="lesson-section" id="practice"><span className="section-kicker">07 · PRACTICE</span><h2>Now build it yourself</h2><div className="reading-challenge"><Terminal/><div><b>Practice task</b><p>{data.practice}</p></div><button className="primary small" onClick={()=>setTab('practice')}>Open Practice <ArrowRight size={15}/></button></div></section>
     <section className="lesson-section" id="check"><span className="section-kicker">08 · QUICK CHECK</span><h2>Can you explain it?</h2><div className="quiz-card">{data.check.map((q:string,i:number)=><button key={q} className={selected===i?'selected':''} onClick={()=>setSelected(i)}><span>{i+1}</span><b>{q}</b><ChevronRight/></button>)}</div><div className="lesson-check-note">{selected!==null?'Now explain the answer in your own words before continuing.':'Answer these questions mentally or in your notes before continuing.'}</div></section>
     <section className="lesson-section" id="summary"><span className="section-kicker">09 · QUICK SUMMARY</span><h2>What you should remember</h2><div className="summary-card"><ul>{data.outcomes.map((x:string)=><li key={x}>✓ {x}</li>)}</ul></div></section>
     <div className="lesson-complete-bar"><div><b>{done?'Lesson completed':'Finish this lesson'}</b><span>{done?'Your progress is saved in this browser.':'Mark it complete when you can explain the concept and reproduce the example without copying.'}</span></div><button className={done?'secondary':'primary'} onClick={complete}>{done?'Completed ✓':'Mark lesson complete'}</button></div>
     {savedNotice&&<div className="save-toast">{savedNotice}</div>}
    </div>}
    {tab==='practice'&&<section className="practice-lab"><div className="practice-head"><span className="kicker">PRACTICE LAB</span><h2>Change the code. Run it. Explain the result.</h2><p>{data.practice||data.task}</p></div><div className="practice-grid"><div className="practice-editor"><div className="source-head">{data.language||p.title}<button onClick={()=>{setCode(data.example);setSavedNotice('Starter code restored.')}}>Reset</button></div><textarea value={code} onChange={e=>setCode(e.target.value)} spellCheck={false}/><div className="editor-actions"><button className="primary" onClick={()=>{localStorage.setItem(savedKey,code);runCode();setSavedNotice('Practice saved and preview refreshed.')}}>Run code <Play size={15}/></button></div></div><div className="practice-output"><div className="source-head">Output <span>Sandbox</span></div>{output?<iframe title="practice output" sandbox="allow-scripts" srcDoc={output}/>:<div className="practice-empty"><Terminal/><p>Run your code to see the result.</p></div>}</div></div></section>}
    <nav className="lesson-bottom-nav lesson-topic-nav" aria-label="Lesson navigation">
     <button className="lesson-nav-btn prev" disabled={idx===1} onClick={()=>idx>1&&go('lesson',p.id+'-'+prevIdx)}><span>← Previous lesson</span><b>{prevTitle||'First lesson'}</b></button>
     <button className="lesson-nav-btn next" disabled={idx>=p.lessons} onClick={()=>idx<p.lessons&&go('lesson',p.id+'-'+nextIdx)}><span>Next lesson →</span><b>{nextTitle||'Course complete'}</b></button>
    </nav>
   </article>
  </div>
 </main><Footer/></>
}
function Studio(){
 const[authLoading,setAuthLoading]=useState(dbConfigured());const[user,setUser]=useState<any>(null);const[authEmail,setAuthEmail]=useState('');const[authPassword,setAuthPassword]=useState('');const[authError,setAuthError]=useState('');
 const[tab,setTab]=useState('overview');const[editingId,setEditingId]=useState<string|undefined>(undefined);const[title,setTitle]=useState('');const[description,setDescription]=useState('');const[level,setLevel]=useState('Beginner');const[tech,setTech]=useState('HTML · CSS · JavaScript');const[slug,setSlug]=useState('');const[thumbnail,setThumbnail]=useState<File|null>(null);const[thumbnailUrl,setThumbnailUrl]=useState('');const[selected,setSelected]=useState('index.html');const[status,setStatus]=useState('');const[saving,setSaving]=useState(false);const[dbProjects,setDbProjects]=useState<any[]>([]);const[drafts,setDrafts]=useState<any[]>(()=>{try{return JSON.parse(localStorage.getItem('cv-studio-drafts')||'[]')}catch{return[]}});
 const[fileMap,setFileMap]=useState<Record<string,string>>({'index.html':'<main>\n  <h1>My Coding Vibes Project</h1>\n</main>','style.css':'body { font-family: system-ui; }','app.js':'console.log("Coding Vibes");'});
 useEffect(()=>{if(!dbConfigured()){setAuthLoading(false);return}getSessionUser().then(setUser).finally(()=>setAuthLoading(false))},[]);
 useEffect(()=>{if(user&&dbConfigured())refreshDb()},[user]);
 async function refreshDb(){try{setDbProjects(await fetchAdminProjects())}catch(e:any){setStatus(e.message||'Could not load project library.')}};
 const reset=()=>{setEditingId(undefined);setTitle('');setDescription('');setLevel('Beginner');setTech('HTML · CSS · JavaScript');setSlug('');setThumbnail(null);setThumbnailUrl('');setFileMap({'index.html':'<main>\n  <h1>My Coding Vibes Project</h1>\n</main>','style.css':'body { font-family: system-ui; }','app.js':'console.log("Coding Vibes");'});setSelected('index.html');setStatus('New project form ready.');};
 const saveLocalDraft=()=>{const id=slugify(slug||title)||'project-'+Date.now();const d={id,title:title||'Untitled project',description,level,tech,slug:id,files:fileMap,updatedAt:new Date().toISOString()};const next=[d,...drafts.filter(x=>x.id!==id)];localStorage.setItem('cv-studio-drafts',JSON.stringify(next));setDrafts(next);setStatus('Local draft saved.');};
 const saveDb=async(publish=false)=>{if(!dbConfigured()){setStatus('Supabase is not configured for this build.');return}if(!title.trim()){setStatus('Project title is required.');return}setSaving(true);setStatus('Saving project to Supabase…');try{const slugValue=slugify(slug||title)||'project-'+Date.now();let imageUrl=thumbnailUrl;if(thumbnail){imageUrl=await uploadProjectAsset(thumbnail,slugValue,'thumbnail');setThumbnailUrl(imageUrl)}const techList=tech.split(/[·,|]/).map(x=>x.trim()).filter(Boolean);const saved=await persistProject({id:editingId,title:title.trim(),slug:slugValue,short_description:description.trim()||'Original Coding Vibes project.',full_description:description.trim()||'Original Coding Vibes project with complete source and an editable browser sandbox.',category:'Coding Vibes Projects',difficulty:level.toLowerCase() as any,technologies:techList,thumbnail_url:imageUrl||('/project-thumbnails/'+slugValue+'.svg'),status:publish?'published':'draft',featured:false,seo_title:(title.trim()+' | Coding Vibes'),seo_description:description.trim()||'Build and learn with Coding Vibes.'});await persistProjectFiles(saved.id,Object.entries(fileMap).map(([name,code],i)=>({project_id:saved.id,file_name:name,language:languageForFile(name),content:code,sort_order:i})));await refreshDb();window.dispatchEvent(new Event('cv-projects-updated'));setStatus(publish?'Project published to the database.':'Project saved as a database draft.');}catch(e:any){setStatus(e.message||'Project save failed.')}finally{setSaving(false)}};
 const loadDb=(p:any)=>{setEditingId(p.id);setTitle(p.title||'');setDescription(p.short_description||'');setLevel((p.difficulty||'beginner').replace(/^./,(c:string)=>c.toUpperCase()));setTech(Array.isArray(p.technologies)?p.technologies.join(' · '):'HTML · CSS · JavaScript');setSlug(p.slug||'');setThumbnail(null);setThumbnailUrl(p.thumbnail_url||'');fetchProjectFiles(p.id).then(files=>{const fallback=projectFileSets[p.slug]||projectFileSets[p.id]||[];setFileMap(files.length?Object.fromEntries(files.map((f:any)=>[f.file_name,f.content])):Object.fromEntries((fallback as any[]).map((f:any)=>[f.name,f.code])));setSelected(files[0]?.file_name||((fallback as any[])[0]?.name)||'index.html');}).catch(()=>{const fallback=(projectFileSets[p.slug]||projectFileSets[p.id]||[]) as any[];setFileMap(Object.fromEntries(fallback.map((f:any)=>[f.name,f.code])));setSelected(fallback[0]?.name||'index.html')});setTab('create');setStatus('Project loaded from Supabase.');};
 const removeDb=async(id:string)=>{if(!confirm('Remove this project from the database?'))return;try{await removeProject(id);await refreshDb();window.dispatchEvent(new Event('cv-projects-updated'));setStatus('Project removed.')}catch(e:any){setStatus(e.message||'Delete failed.')}};
 const handleFiles=(list:FileList|null)=>{if(!list)return;Array.from(list).forEach(file=>{if(file.name.toLowerCase().endsWith('.zip')){JSZip.loadAsync(file).then(async zip=>{const entries=Object.values(zip.files).filter((x:any)=>!x.dir) as any[];const imported:Record<string,string>={};for(const entry of entries){if(/\.(html?|css|js|jsx|ts|tsx|json|md|txt)$/i.test(entry.name))imported[entry.name]=await entry.async('string')}setFileMap(prev=>({...prev,...imported}));setStatus('ZIP imported. Review the files before saving.');});return}if(/\.(html?|css|js|jsx|ts|tsx|json|md|txt)$/i.test(file.name)){const reader=new FileReader();reader.onload=()=>{setFileMap(prev=>({...prev,[file.name]:String(reader.result||'')}));setSelected(file.name)};reader.readAsText(file)}});};
 const updateCurrent=(value:string)=>setFileMap(prev=>({...prev,[selected]:value}));
 const copyCurrent=()=>{navigator.clipboard?.writeText(fileMap[selected]||'');setStatus('Current file copied.');};
 const downloadStudioZip=async()=>{const zip= new JSZip();Object.entries(fileMap).forEach(([name,code])=>zip.file(name,code));const blob=await zip.generateAsync({type:'blob'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(slugify(slug||title)||'coding-vibes-project')+'-source.zip';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);setStatus('ZIP downloaded.');};
 const login=async(e:React.FormEvent)=>{e.preventDefault();setAuthError('');try{const u=await signInAdmin(authEmail,authPassword);setUser(u)}catch(err:any){setAuthError(err.message||'Admin login failed.')}};
 if(authLoading)return <main className="studio-login"><div className="studio-login-card"><Sparkles/><h1>Opening Developer Studio…</h1></div></main>;
 if(dbConfigured()&&!user)return <main className="studio-login"><div className="studio-login-card"><div className="brand"><span className="brand-mark">&lt;/&gt;</span><span>Coding<span>Vibes</span></span></div><span className="kicker">DEVELOPER STUDIO</span><h1>Private project workspace.</h1><p>Sign in with an authorized Developer Studio account to create, edit, upload and publish projects.</p><form onSubmit={login}><label>Email<input type="email" required value={authEmail} onChange={e=>setAuthEmail(e.target.value)} placeholder="studio email"/></label><label>Password<input type="password" required value={authPassword} onChange={e=>setAuthPassword(e.target.value)} placeholder="••••••••"/></label><button className="primary full" type="submit">Sign in <LogIn/></button></form>{authError&&<div className="quiz-result">{authError}</div>}<button className="auth-switch" onClick={()=>go('home')}>← Back to Coding Vibes</button></div></main>;
 const counts={projects:mergeProjectLists(projects,dbProjects).length,published:dbProjects.filter(p=>p.status==='published').length,drafts:dbProjects.filter(p=>p.status==='draft').length,paths:paths.length};
 return <><div className="studio-shell"><aside className="studio-side"><button className="brand" onClick={()=>go('home')}><span className="brand-mark">&lt;/&gt;</span><span>Coding<span>Vibes</span></span></button><div className="studio-nav">{[['overview','Dashboard',Layers3],['projects','Projects',Boxes],['create','Create Project',Code2],['lessons','Lessons',BookOpen],['roadmaps','Roadmaps',Route],['media','Media',Upload],['users','Users',Users],['settings','Settings',Settings]].map((item:any)=>{const [id,label,Icon]=item;return <button className={tab===id?'active':''} onClick={()=>setTab(id as string)} key={id}><Icon size={17}/>{label}</button>})}</div><button className="studio-exit" onClick={async()=>{await signOutAdmin();setUser(null);go('home')}}>Sign out</button></aside>
 <main className="studio-main"><div className="studio-top"><div><span className="kicker">DEVELOPER STUDIO</span><h1>{tab==='create'?'Create a project':tab==='overview'?'Workspace overview':tab==='projects'?'Project library':tab[0].toUpperCase()+tab.slice(1)}</h1></div><div className="secure"><ShieldCheck size={16}/> Supabase protected</div></div>
 {tab==='overview'&&<><div className="studio-grid"><div><span>Total library</span><b>{counts.projects}</b></div><div><span>Published</span><b>{counts.published}</b></div><div><span>Drafts</span><b>{counts.drafts}</b></div><div><span>Learning paths</span><b>{counts.paths}</b></div></div><div className="studio-placeholder"><Sparkles/><h2>Professional project publishing</h2><p>Upload a thumbnail, write the project information, import a ZIP or individual files, edit source, save drafts and publish to the live project library. Project metadata and source files are stored in Supabase; images live in Supabase Storage.</p><div className="studio-action-row"><button className="primary" onClick={()=>setTab('create')}>Create a project <ArrowRight/></button><button className="secondary" onClick={()=>setTab('projects')}>Manage projects <Boxes/></button></div><div className="studio-checklist"><span><Check/> Professional thumbnail upload</span><span><Check/> ZIP + individual file import</span><span><Check/> Source editor + copy/download</span><span><Check/> Draft / publish workflow</span></div></div></>}
 {tab==='create'&&<div className="studio-create-layout"><section className="studio-form"><div className="form-grid-2"><label>Project title<input value={title} onChange={e=>{setTitle(e.target.value);if(!slug)setSlug(slugify(e.target.value))}} placeholder="e.g. Neon Portfolio"/></label><label>URL slug<input value={slug} onChange={e=>setSlug(slugify(e.target.value))} placeholder="neon-portfolio"/></label></div><label>Description<textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="What will students build?"/></label><div className="form-grid-2"><label>Level<select value={level} onChange={e=>setLevel(e.target.value)}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label><label>Technology<input value={tech} onChange={e=>setTech(e.target.value)} placeholder="HTML · CSS · JavaScript"/></label></div><label>Professional thumbnail<input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" onChange={e=>{const file=e.target.files?.[0]||null;setThumbnail(file);if(file)setThumbnailUrl(URL.createObjectURL(file))}}/></label>{thumbnailUrl&&<img className="studio-thumb-preview" src={thumbnailUrl} alt="Project thumbnail preview"/>}<div className="upload-box"><Upload/><b>Import project package</b><span>Upload a ZIP or individual HTML, CSS, JS, React, TypeScript, JSON and Markdown files.</span><input type="file" multiple accept=".zip,.html,.htm,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt" onChange={e=>handleFiles(e.target.files)}/></div><div className="studio-file-tabs">{Object.keys(fileMap).map(name=><button className={selected===name?'active':''} onClick={()=>setSelected(name)} key={name}>{name}</button>)}</div><textarea className="studio-code-editor" value={fileMap[selected]||''} onChange={e=>updateCurrent(e.target.value)} spellCheck={false}/><div className="studio-action-row"><button className="secondary" onClick={saveLocalDraft}>Save local draft <Check/></button><button className="secondary" disabled={saving} onClick={()=>saveDb(false)}>Save database draft <Check/></button><button className="primary" disabled={saving} onClick={()=>saveDb(true)}>Publish project <Upload/></button><button className="secondary" onClick={reset}>Reset</button></div>{status&&<div className="quiz-result success">{status}</div>}<p className="studio-note">Database publishing is protected by Supabase Auth + RLS. Only authorized Developer Studio accounts can create, edit, publish or remove projects.</p></section><aside className="studio-preview"><div className="source-head">Project package <span>{Object.keys(fileMap).length} files</span></div><div className="studio-preview-card"><b>{title||'Untitled project'}</b><span>{level} · {tech}</span>{thumbnailUrl&&<img className="studio-thumb-preview small" src={thumbnailUrl} alt="Thumbnail"/>}<p>{description||'Add a description to explain the student outcome.'}</p><div className="preview-list">{Object.keys(fileMap).map(x=><span key={x}><FileCode2 size={14}/>{x}</span>)}</div></div></aside></div>}
 {tab==='projects'&&<div className="studio-manage"><div className="studio-manage-head"><div><b>Database project library</b><span>{dbProjects.length} project(s)</span></div><button className="primary" onClick={()=>{reset();setTab('create')}}><Code2/> New project</button></div>{dbProjects.length===0?<div className="studio-placeholder"><Boxes/><h2>No database projects yet</h2><p>Create the first project above.</p></div>:<div className="studio-project-list">{dbProjects.map(p=><article key={p.id}><div>{p.thumbnail_url&&<img className="studio-list-thumb" src={p.thumbnail_url} alt=""/>}<span className="card-meta">{p.difficulty} · {(p.technologies||[]).join(' · ')}</span><h3>{p.title}</h3><p>{p.short_description}</p><small>{p.status.toUpperCase()} · Updated {new Date(p.updated_at).toLocaleString()}</small></div><div><button className="secondary" onClick={()=>loadDb(p)}>Edit</button><button className="secondary" onClick={()=>removeDb(p.id)}>Remove</button></div></article>)}</div>}</div>}
 {tab==='lessons'&&<div className="studio-placeholder"><BookOpen/><h2>Lesson publishing checklist</h2><p>Curriculum is structured into learning paths and lessons. Use this area as the editorial checklist before adding new lesson content.</p></div>}
 {tab==='roadmaps'&&<div className="studio-placeholder"><Route/><h2>Roadmap editor checklist</h2><p>Roadmaps are connected to projects and learning paths. Review the skill order, milestone project and estimated time before publishing a new route.</p></div>}
 {tab==='media'&&<div className="studio-placeholder"><Upload/><h2>Media workspace</h2><p>Project thumbnails are uploaded to the protected-authoring Supabase Storage bucket and served publicly after publishing.</p></div>}
 {tab==='users'&&<div className="studio-placeholder"><Users/><h2>Developer access</h2><p>Developer Studio access is controlled by Supabase Auth and the developer_users allow-list.</p></div>}
 {tab==='settings'&&<div className="studio-placeholder"><Settings/><h2>Workspace settings</h2><p>Database, Storage, Auth and RLS are connected. Production environment variables still need to be supplied to local development environments.</p></div>}
 </main></div></>
}
function languageForFile(name:string){const ext=name.toLowerCase().split('.').pop();return ext==='html'||ext==='htm'?'html':ext==='css'?'css':ext==='js'?'javascript':ext==='jsx'?'react':ext==='ts'||ext==='tsx'?'typescript':ext||'text'}
function Resources(){const[selected,setSelected]=useState<number|null>(null);return <><Nav/><main className="listing"><PageHero kicker="RESOURCES & TUTORIALS" title="The setup behind the code." sub="Practical guides for the tools and workflows developers use every day."/><div className="resource-grid">{resources.map((r,i)=><button className="resource-card" key={i} onClick={()=>setSelected(i)}><div><span className="card-meta">{r[2]}</span><h3>{r[0]}</h3><p>{r[1]}</p></div><ChevronRight/></button>)}</div>{selected!==null&&<div className="resource-detail"><button className="back" onClick={()=>setSelected(null)}>← Resources</button><span className="kicker">{resources[selected][2]}</span><h2>{resources[selected][0]}</h2><p>{resources[selected][1]}</p><div className="text-lesson"><h3>What you'll learn</h3><ul><li>Understand the tool and why developers use it.</li><li>Follow the workflow step by step instead of copying blindly.</li><li>Practice the workflow on a Coding Vibes project.</li><li>Finish with a checklist you can reuse on future projects.</li></ul></div></div>}</main><Footer/></>};

function ProjectThumb({id,title,thumbnail}:{id:string,title:string,thumbnail?:string}){return <div className="project-thumb-image"><img src={thumbnail||('/project-thumbnails/'+id+'.svg')} alt={title+' project thumbnail'}/><div className="thumb-image-overlay"><span>CODING VIBES</span><b>Source • Preview • ZIP</b></div></div>}
function Projects(){
 const[q,setQ]=useState('');const[level,setLevel]=useState('All');const[tech,setTech]=useState('All');const[dbProjects,setDbProjects]=useState<any[]>([]);const[loading,setLoading]=useState(dbConfigured());const all=mergeProjectLists(projects,dbProjects);
 useEffect(()=>{if(!dbConfigured()){setLoading(false);return}fetchPublishedProjects().then(setDbProjects).catch(()=>{}).finally(()=>setLoading(false));},[]);
 const visible=all.filter(p=>(level==='All'||p.level===level)&&(tech==='All'||p.tech.toLowerCase().includes(tech.toLowerCase()))&&(p.title+' '+p.tech+' '+p.desc).toLowerCase().includes(q.toLowerCase()));
 return <><Nav/><main className="inner-page projects-page reference-projects-page">
  <section className="listing-hero projects-hero reference-projects-hero"><div><span className="kicker">PROJECT LIBRARY</span><h1>Build it.<em> Break it.</em> Understand it.</h1><p>Original projects with professional thumbnails, complete source, a sandbox preview and practical explanations. Pick a build, inspect the files, change the code and learn why it works.</p><div className="project-library-stats"><span><b>{all.length}</b><small>original builds</small></span><span><b>Source</b><small>editable files</small></span><span><b>Live</b><small>browser previews</small></span></div></div><div className="hero-mini-stat premium-project-stat"><Code2/><b>{all.length}</b><span>complete builds</span><i>Thumbnail · Source · Preview</i></div></section>
  <div className="project-toolbar premium-project-toolbar"><div className="searchbox big"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search projects, technologies..." aria-label="Search projects, technologies" /></div><div className="filter-row">{['All','Beginner','Intermediate','Advanced'].map(x=><button className={level===x?'filter active':'filter'} onClick={()=>setLevel(x)} key={x}>{x}</button>)}</div><div className="filter-row">{['All','HTML','CSS','JavaScript','React','Node.js','Database'].map(x=><button className={tech===x?'filter active':'filter'} onClick={()=>setTech(x)} key={x}>{x}</button>)}</div></div>
  {loading&&<div className="project-db-loading"><span className="loader-dot"/><span>Loading published project library…</span></div>}
  <div className="project-library-grid reference-project-grid">{visible.map((p,i)=><button className={'project-card premium-project-card project-tone-'+(i%5)} key={p.id} onClick={()=>go('project',p.id)}>
   <div className="project-preview premium-project-preview"><ProjectThumb id={p.id} title={p.title} thumbnail={p.thumbnail}/></div>
   <div className="project-card-body"><span className="card-meta">{p.level} · {p.tech}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="project-card-bottom"><small>Original build · source included</small><span>Open project <ArrowRight size={14}/></span></div></div>
  </button>)}</div>
  {!visible.length&&!loading&&<div className="empty-library"><Search/><b>No projects found</b><span>Try another keyword or filter.</span></div>}
 </main><Footer/></>
}
function getPublishedProjects():any[]{try{return JSON.parse(localStorage.getItem('cv-published-projects')||'[]')}catch{return[]}}
function getPublishedProjectFiles(id:string):{name:string,code:string}[]{try{return JSON.parse(localStorage.getItem('cv-project-files-'+id)||'[]')}catch{return[]}}
function getAllProjects():any[]{return mergeProjectLists(projects,getPublishedProjects())}
function normalizeDbProject(p:any){return {id:p.slug,title:p.title,seoTitle:p.seo_title||p.title,tags:Array.isArray(p.technologies)?p.technologies.join(', ').toLowerCase():p.technologies||'',tech:Array.isArray(p.technologies)?p.technologies.join(' · '):p.technologies||'',level:(p.difficulty||'beginner').replace(/^./,(c:string)=>c.toUpperCase()),desc:p.short_description||p.full_description||'',thumbnail:p.thumbnail_url||undefined,dbId:p.id,status:p.status}}
function mergeProjectLists(base:any[],db:any[]){const map=new Map<string,any>();[...base,...db.map((p:any)=>p.slug?normalizeDbProject(p):p)].forEach((p:any)=>map.set(p.id,p));return Array.from(map.values())}
function slugify(value:string){return value.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,60)}
const projectFileSets:Record<string,{name:string,code:string}[]>={
"dashboard":[
  {name:"index.html",code:"<!doctype html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\"><title>Pulse Admin Dashboard</title><link rel=\"stylesheet\" href=\"style.css\"></head>\n<body>\n<div class=\"app\">\n  <aside class=\"sidebar\"><div class=\"brand\">&lt;/&gt; Pulse</div><nav><button class=\"nav active\">Overview</button><button class=\"nav\">Orders</button><button class=\"nav\">Customers</button><button class=\"nav\">Settings</button></nav></aside>\n  <main class=\"main\"><header><div><small>CODING VIBES / ORIGINAL BUILD</small><h1>Good morning, Alex.</h1><p>Here is what is happening with your store today.</p></div><button id=\"themeBtn\">Toggle theme</button></header>\n    <section class=\"metrics\"><article><span>Revenue</span><strong>$24,680</strong><em>+18.4%</em></article><article><span>Orders</span><strong>1,284</strong><em>+12.1%</em></article><article><span>Customers</span><strong>8,942</strong><em>+8.7%</em></article><article><span>Conversion</span><strong>4.82%</strong><em>+1.3%</em></article></section>\n    <section class=\"grid\"><article class=\"panel chart-panel\"><div class=\"panel-head\"><h2>Revenue</h2><select id=\"period\"><option>7 days</option><option>30 days</option></select></div><div id=\"chart\" class=\"chart\"></div></article>\n    <article class=\"panel\"><div class=\"panel-head\"><h2>Top products</h2><button id=\"filterBtn\">Filter</button></div><div id=\"products\"></div></article></section>\n    <section class=\"panel\"><div class=\"panel-head\"><h2>Recent orders</h2><input id=\"orderSearch\" placeholder=\"Search order\"></div><div class=\"table-wrap\"><table><thead><tr><th>Order</th><th>Customer</th><th>Total</th><th>Status</th></tr></thead><tbody id=\"orders\"></tbody></table></div></section>\n  </main>\n</div><script src=\"app.js\"></script>\n</body></html>"},
  {name:"style.css",code:":root{font-family:Inter,system-ui,sans-serif;color:#eafaf1;background:#061015}*{box-sizing:border-box}body{margin:0}.app{min-height:100vh;display:flex}.sidebar{width:230px;padding:24px;border-right:1px solid #17313a;background:#07151b;position:sticky;top:0;height:100vh}.brand{font-weight:900;font-size:22px;color:#35e77f;margin-bottom:35px}.sidebar nav{display:grid;gap:8px}.nav,#themeBtn,#filterBtn{border:1px solid transparent;background:transparent;color:#8fa3ac;padding:12px 14px;border-radius:12px;text-align:left;cursor:pointer}.nav.active,.nav:hover{background:#0d242a;color:#fff;border-color:#1a4a3a}.main{flex:1;padding:36px;max-width:1400px;margin:auto}header{display:flex;justify-content:space-between;gap:20px;align-items:start}small{color:#4fe98b;letter-spacing:.12em}h1{font-size:clamp(32px,4vw,52px);margin:8px 0}header p{color:#81949d}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:28px 0}.metrics article,.panel{border:1px solid #17313a;background:linear-gradient(145deg,#0a1a21,#071218);border-radius:18px;padding:20px}.metrics span,.metrics em{display:block;color:#81949d;font-size:12px;font-style:normal}.metrics strong{display:block;font-size:28px;margin:8px 0}.metrics em{color:#4fe98b}.grid{display:grid;grid-template-columns:1.5fr 1fr;gap:14px;margin-bottom:14px}.panel-head{display:flex;justify-content:space-between;align-items:center;gap:12px}.panel-head h2{margin:0}.chart{height:210px;display:flex;align-items:end;gap:10px;padding-top:25px}.bar{flex:1;background:linear-gradient(#28e97b,#0e6d42);border-radius:8px 8px 3px 3px;min-width:10px}.product{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid #15303a}.product:last-child{border:0}.product span{color:#879ba5}.table-wrap{overflow:auto}table{width:100%;border-collapse:collapse;margin-top:10px}th,td{text-align:left;padding:14px;border-bottom:1px solid #15303a;color:#a9b8be}th{color:#6f838c;font-size:11px;text-transform:uppercase}.status{color:#55eb91}.status.warn{color:#f6c86a}select,input{background:#07141a;border:1px solid #1a3942;color:#dff7e9;border-radius:9px;padding:9px 11px}@media(max-width:900px){.sidebar{display:none}.main{padding:20px}.metrics{grid-template-columns:1fr 1fr}.grid{grid-template-columns:1fr}}@media(max-width:520px){.metrics{grid-template-columns:1fr}header{display:block}.main{padding:15px}}"},
  {name:"app.js",code:"const products=[['Neon Keyboard',2480],['Focus Headset',1920],['CodePad Pro',1480],['USB-C Hub',1260],['Desk Light',980]];\nconst orders=[['#10482','Ayesha Khan','$128.00','Paid'],['#10481','Hamza Saleem','$84.50','Paid'],['#10480','Mina Carter','$214.20','Pending'],['#10479','Noah Reed','$62.00','Paid'],['#10478','Sara Ali','$156.80','Paid']];\nconst productBox=document.querySelector('#products');const orderBox=document.querySelector('#orders');\nfunction renderProducts(filter=''){productBox.innerHTML=products.filter(x=>x[0].toLowerCase().includes(filter.toLowerCase())).map(x=>'<div class=\"product\"><span>'+x[0]+'</span><b>$'+x[1].toLocaleString()+'</b></div>').join('')}\nfunction renderOrders(q=''){orderBox.innerHTML=orders.filter(x=>x.join(' ').toLowerCase().includes(q.toLowerCase())).map(x=>'<tr><td>'+x[0]+'</td><td>'+x[1]+'</td><td>'+x[2]+'</td><td class=\"status '+(x[3]==='Pending'?'warn':'')+'\">'+x[3]+'</td></tr>').join('')}\nconst chart=document.querySelector('#chart');[42,58,51,78,66,91,74,96,82,88,70,98].forEach(v=>{const b=document.createElement('i');b.className='bar';b.style.height=v+'%';chart.appendChild(b)});\nrenderProducts();renderOrders();document.querySelector('#orderSearch').addEventListener('input',e=>renderOrders(e.target.value));document.querySelector('#filterBtn').addEventListener('click',()=>renderProducts(productBox.dataset.filtered?'':'c'));document.querySelector('#themeBtn').addEventListener('click',()=>document.body.classList.toggle('light'));"}
 ],
"todo":[
  {name:"index.html",code:"<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Focus Task Manager</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><main class=\"shell\"><header><div><small>CODING VIBES / ORIGINAL BUILD</small><h1>Focus Task Manager</h1><p>Plan less. Finish more.</p></div><button id=\"clearDone\">Clear completed</button></header><form id=\"taskForm\"><input id=\"taskInput\" required placeholder=\"What needs to be done?\"><select id=\"priority\"><option>Low</option><option selected>Medium</option><option>High</option></select><button>Add task</button></form><div class=\"filters\"><button data-filter=\"all\" class=\"active\">All</button><button data-filter=\"open\">Open</button><button data-filter=\"done\">Completed</button></div><section id=\"tasks\"></section><footer><span id=\"count\"></span><span>Saved locally</span></footer></main><script src=\"app.js\"></script></body></html>"},
  {name:"style.css",code:"*{box-sizing:border-box}body{margin:0;background:#061015;color:#eafaf1;font-family:Inter,system-ui}.shell{width:min(900px,92%);margin:70px auto}small{color:#4fe98b;letter-spacing:.12em}h1{font-size:52px;margin:8px 0}p{color:#82969f}.shell header{display:flex;justify-content:space-between;gap:20px;align-items:end}.shell header button,.filters button,form button{border:1px solid #1b4144;background:#0b1d23;color:#dff7e9;border-radius:10px;padding:11px 14px;cursor:pointer}form{display:grid;grid-template-columns:1fr 130px auto;gap:10px;margin:30px 0}input,select{background:#07161c;border:1px solid #1a3942;color:#fff;border-radius:10px;padding:13px}.filters{display:flex;gap:8px;margin-bottom:14px}.filters .active{background:#22c55e;color:#031008;border-color:#22c55e}.task{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;padding:16px;border:1px solid #16333b;background:#09171d;border-radius:14px;margin:8px 0}.task.done strong{text-decoration:line-through;color:#657980}.task small{letter-spacing:0;color:#81949d}.task button{background:none;border:0;color:#eafaf1;cursor:pointer}.high{color:#ff8d8d!important}.medium{color:#f5ca72!important}.low{color:#64e99a!important}footer{display:flex;justify-content:space-between;color:#61757e;font-size:12px;margin-top:18px}@media(max-width:650px){.shell{margin:30px auto}h1{font-size:40px}.shell header{display:block}form{grid-template-columns:1fr}.task{grid-template-columns:auto 1fr}.task>button{grid-column:2}}"},
  {name:"app.js",code:"const key='cv-focus-tasks';let tasks=JSON.parse(localStorage.getItem(key)||'[]');let filter='all';const form=document.querySelector('#taskForm'),input=document.querySelector('#taskInput'),priority=document.querySelector('#priority'),list=document.querySelector('#tasks');\nfunction save(){localStorage.setItem(key,JSON.stringify(tasks));render()}\nfunction render(){const visible=tasks.filter(t=>filter==='all'||(filter==='done'&&t.done)||(filter==='open'&&!t.done));list.innerHTML=visible.map(t=>'<article class=\"task '+(t.done?'done':'')+'\"><input type=\"checkbox\" '+(t.done?'checked':'')+' data-id=\"'+t.id+'\"><div><strong>'+escapeHtml(t.title)+'</strong><br><small class=\"'+t.priority.toLowerCase()+'\">'+t.priority+' priority · '+new Date(t.created).toLocaleDateString()+'</small></div><button data-delete=\"'+t.id+'\">Delete</button></article>').join('');document.querySelector('#count').textContent=tasks.filter(t=>!t.done).length+' open task(s)';document.querySelectorAll('[data-id]').forEach(x=>x.onchange=()=>{const t=tasks.find(t=>t.id===Number(x.dataset.id));t.done=x.checked;save()});document.querySelectorAll('[data-delete]').forEach(x=>x.onclick=()=>{tasks=tasks.filter(t=>t.id!==Number(x.dataset.delete));save()})}\nfunction escapeHtml(s){return s.replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#039;'}[c]))}\nform.onsubmit=e=>{e.preventDefault();tasks.unshift({id:Date.now(),title:input.value.trim(),priority:priority.value,done:false,created:Date.now()});input.value='';save()};document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()});document.querySelector('#clearDone').onclick=()=>{tasks=tasks.filter(t=>!t.done);save()};render();"}
 ],
"weather":[
  {name:"index.html",code:"<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Weather Explorer</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><section class=\"hero\"><small>CODING VIBES / ORIGINAL BUILD</small><h1>Weather Explorer</h1><p>Search a city and explore a realistic weather experience.</p><form id=\"search\"><input id=\"city\" value=\"Lahore\" aria-label=\"City\"><button>Search</button></form><div id=\"state\" class=\"state\">Ready to search.</div></section><section id=\"weather\" class=\"weather hidden\"></section></main><script src=\"app.js\"></script></body></html>"},
  {name:"style.css",code:"*{box-sizing:border-box}body{margin:0;min-height:100vh;background:radial-gradient(circle at 70% 10%,#124b43,#061015 42%);color:#ecfff4;font-family:Inter,system-ui}.hero{width:min(900px,92%);margin:80px auto 20px}.hero small{color:#4fe98b;letter-spacing:.12em}.hero h1{font-size:clamp(46px,8vw,86px);margin:12px 0 4px}.hero p{color:#91a4ac;font-size:18px}.hero form{display:flex;gap:10px;margin:28px 0}.hero input{flex:1;background:#07161d;border:1px solid #1d4148;color:#fff;padding:15px;border-radius:12px}.hero button{background:#22c55e;color:#031008;border:0;padding:0 22px;border-radius:12px;font-weight:800}.state{color:#78909a}.weather{width:min(900px,92%);margin:20px auto;padding:28px;border:1px solid #1b3c42;border-radius:24px;background:rgba(5,18,23,.82);display:grid;grid-template-columns:1fr 2fr;gap:20px}.weather.hidden{display:none}.current strong{font-size:70px}.current p{color:#8da1a9}.forecast{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.day{padding:16px;border:1px solid #17343a;border-radius:14px;background:#08161c}.day b,.day span{display:block}.day span{color:#71868f;margin-top:10px}@media(max-width:700px){.weather{grid-template-columns:1fr}.forecast{grid-template-columns:1fr 1fr}.hero{margin-top:35px}.hero form{display:grid}.hero button{height:48px}}"},
  {name:"app.js",code:"const form=document.querySelector('#search'),input=document.querySelector('#city'),state=document.querySelector('#state'),box=document.querySelector('#weather');const cities={lahore:{temp:31,condition:'Clear skies',humidity:48,wind:14},london:{temp:17,condition:'Light rain',humidity:78,wind:12},newyork:{temp:22,condition:'Partly cloudy',humidity:61,wind:16},dubai:{temp:35,condition:'Sunny',humidity:42,wind:19},toronto:{temp:15,condition:'Cloudy',humidity:70,wind:11}};\nfunction normalize(s){return s.trim().toLowerCase().replace(/\\s+/g,'')};function render(city){const d=cities[normalize(city)];if(!d){state.textContent='City not in the demo dataset. Try Lahore, London, New York, Dubai or Toronto.';box.classList.add('hidden');return}state.textContent='Weather updated just now';box.classList.remove('hidden');const base=d.temp;box.innerHTML='<div class=\"current\"><small>'+city.toUpperCase()+'</small><strong>'+base+'°</strong><h2>'+d.condition+'</h2><p>Humidity '+d.humidity+'% · Wind '+d.wind+' km/h</p></div><div class=\"forecast\">'+['Now','10 AM','1 PM','4 PM','7 PM'].map((t,i)=>'<article class=\"day\"><b>'+t+'</b><strong>'+(base+i-1)+'°</strong><span>'+['Clear','Clear','Cloudy','Clear','Clear'][i]+'</span></article>').join('')+'</div>'};form.onsubmit=e=>{e.preventDefault();state.textContent='Loading weather...';setTimeout(()=>render(input.value),350)};render(input.value);"}
 ],
"portfolio":[
  {name:"index.html",code:"<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Nova — Developer Portfolio</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><nav><a href=\"#work\">Work</a><a href=\"#about\">About</a><a href=\"#contact\">Contact</a></nav><header class=\"hero\"><small>CODING VIBES / ORIGINAL BUILD</small><h1>Nova builds digital products that feel <span>alive.</span></h1><p>Frontend developer focused on accessible interfaces, thoughtful motion and clean systems.</p><a class=\"cta\" href=\"#work\">View selected work ↓</a></header><main><section id=\"work\"><small>SELECTED WORK</small><div class=\"projects\"><article><b>01</b><h2>Pulse Dashboard</h2><p>Analytics experience for a growing product team.</p></article><article><b>02</b><h2>Orbit Commerce</h2><p>Conversion-focused storefront with fast interactions.</p></article><article><b>03</b><h2>Focus Mobile</h2><p>Task planning concept built around calm workflows.</p></article></div></section><section id=\"about\" class=\"about\"><small>ABOUT</small><h2>I care about the details users notice without thinking.</h2><p>I turn product ideas into responsive interfaces, document decisions and keep accessibility in the loop from the first component.</p></section><section id=\"contact\"><small>CONTACT</small><h2>Have a project in mind?</h2><a class=\"cta\" href=\"mailto:hello@example.com\">hello@example.com</a></section></main><script src=\"script.js\"></script></body></html>"},
  {name:"style.css",code:"*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#061015;color:#ecfff5;font-family:Inter,system-ui}body:before{content:'';position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at 75% 15%,rgba(34,197,94,.13),transparent 25%)}nav{position:sticky;top:0;z-index:5;display:flex;justify-content:flex-end;gap:24px;padding:22px 6%;background:rgba(6,16,21,.75);backdrop-filter:blur(14px);border-bottom:1px solid #143039}nav a{color:#91a4ad;text-decoration:none}nav a:hover{color:#fff}.hero,main{width:min(1120px,88%);margin:auto}.hero{padding:110px 0 90px}.hero small,section small{color:#4fe98b;letter-spacing:.12em}.hero h1{font-size:clamp(48px,8vw,100px);line-height:.95;max-width:950px;margin:15px 0}.hero h1 span{color:#34e77d}.hero p{max-width:680px;color:#91a4ad;font-size:19px;line-height:1.7}.cta{display:inline-block;margin-top:20px;padding:13px 17px;border-radius:10px;background:#22c55e;color:#041009;text-decoration:none;font-weight:800}section{padding:75px 0}.projects{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:25px}.projects article,.about{border:1px solid #18343c;background:#09171d;border-radius:20px;padding:25px;min-height:240px}.projects b{color:#4fe98b}.projects h2{font-size:28px;margin-top:70px}.projects p,.about p{color:#8498a1;line-height:1.7}.about{max-width:850px}.about h2{font-size:clamp(32px,5vw,58px);line-height:1.05}@media(max-width:700px){nav{justify-content:center}.hero{padding:70px 0}.projects{grid-template-columns:1fr}.projects h2{margin-top:45px}}"},
  {name:"script.js",code:"document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>document.title='Nova — Developer Portfolio'));"}
 ],
"quiz":[
  {name:"index.html",code:"<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>JS Sprint Quiz</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><main class=\"quiz\"><header><small>CODING VIBES / ORIGINAL BUILD</small><span id=\"progress\"></span></header><section id=\"card\"></section><div class=\"bar\"><i id=\"bar\"></i></div><button id=\"next\" disabled>Next question →</button></main><script src=\"app.js\"></script></body></html>"},
  {name:"style.css",code:"*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#061015;color:#edfff5;font-family:Inter,system-ui}.quiz{width:min(760px,92%)}header{display:flex;justify-content:space-between;color:#80959e;margin-bottom:30px}small{color:#4fe98b;letter-spacing:.12em}.card{padding:30px;border:1px solid #193740;background:#0a191f;border-radius:22px}.card h1{font-size:34px;line-height:1.15}.answer{width:100%;display:block;text-align:left;margin:10px 0;padding:15px;border:1px solid #1b3b43;background:#07151b;color:#cfe1d8;border-radius:12px;cursor:pointer}.answer:hover{border-color:#35e77f}.answer.correct{background:#0c3b27;border-color:#35e77f}.answer.wrong{background:#3a1a20;border-color:#ef7272}.bar{height:5px;background:#122a31;border-radius:99px;margin:18px 0}.bar i{display:block;height:100%;width:0;background:#22c55e;border-radius:inherit;transition:.25s}#next{border:0;background:#22c55e;color:#041009;font-weight:800;border-radius:11px;padding:13px 17px;cursor:pointer}#next:disabled{opacity:.45;cursor:not-allowed}.result{text-align:center;padding:35px}.result strong{font-size:64px;display:block;color:#4fe98b}@media(max-width:600px){.card{padding:20px}.card h1{font-size:27px}}"},
  {name:"app.js",code:"const questions=[{q:'What does CSS primarily control?',a:['Database records','Presentation and layout','Server routes','Git branches'],c:1},{q:'Which method adds an item to the end of an array?',a:['push()','join()','slice()','map()'],c:0},{q:'Which keyword creates block-scoped state that can be reassigned?',a:['const','let','class','return'],c:1},{q:'What does fetch() return?',a:['A Promise','A CSS rule','An array only','A DOM element'],c:0},{q:'Why should a form input have a label?',a:['To improve semantics and accessibility','To make CSS faster','To create a database','To hide validation'],c:0}];let index=0,score=0,answered=false;const card=document.querySelector('#card'),next=document.querySelector('#next'),bar=document.querySelector('#bar'),progress=document.querySelector('#progress');\nfunction render(){if(index>=questions.length){card.innerHTML='<div class=\"result\"><small>QUIZ COMPLETE</small><strong>'+score+'/'+questions.length+'</strong><p>'+ (score===questions.length?'Excellent — every answer was correct.':score>=3?'Strong work — review the missed concepts once more.':'Good first attempt — revisit the lessons and try again.')+'</p></div>';next.textContent='Restart quiz';next.disabled=false;progress.textContent='Finished';bar.style.width='100%';return}answered=false;next.disabled=true;progress.textContent=(index+1)+' / '+questions.length;bar.style.width=(index/questions.length*100)+'%';const q=questions[index];card.innerHTML='<small>QUESTION '+(index+1)+'</small><h1>'+q.q+'</h1>'+q.a.map((a,i)=>'<button class=\"answer\" data-i=\"'+i+'\">'+String.fromCharCode(65+i)+'. '+a+'</button>').join('');document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>{if(answered)return;answered=true;const i=Number(b.dataset.i);if(i===q.c){score++;b.classList.add('correct')}else{b.classList.add('wrong');document.querySelectorAll('.answer')[q.c].classList.add('correct')}next.disabled=false})}next.onclick=()=>{if(index>=questions.length){index=0;score=0;render()}else{index++;render()}};render();"}
 ],
"expense":[
  {name:"index.html",code:"<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Ledger Expense Tracker</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><header><div><small>CODING VIBES / ORIGINAL BUILD</small><h1>Ledger</h1><p>Know where your money goes.</p></div><div class=\"total\"><span>Total spent</span><strong id=\"total\">$0</strong></div></header><form id=\"form\"><input id=\"title\" required placeholder=\"Expense name\"><input id=\"amount\" required type=\"number\" min=\"0.01\" step=\"0.01\" placeholder=\"Amount\"><select id=\"category\"><option>Food</option><option>Travel</option><option>Work</option><option>Bills</option><option>Other</option></select><button>Add</button></form><div class=\"filters\"><button data-cat=\"All\" class=\"active\">All</button><button data-cat=\"Food\">Food</button><button data-cat=\"Travel\">Travel</button><button data-cat=\"Work\">Work</button><button data-cat=\"Bills\">Bills</button></div><section id=\"list\"></section></main><script src=\"app.js\"></script></body></html>"},
  {name:"style.css",code:"*{box-sizing:border-box}body{margin:0;background:#061015;color:#edfff5;font-family:Inter,system-ui}main{width:min(1000px,92%);margin:65px auto}small{color:#4fe98b;letter-spacing:.12em}header{display:flex;justify-content:space-between;align-items:end;gap:20px}h1{font-size:72px;margin:4px 0}.total{padding:20px 24px;border:1px solid #193740;border-radius:16px;background:#0a191f}.total span{display:block;color:#7e929b;font-size:12px}.total strong{font-size:30px;color:#4fe98b}form{display:grid;grid-template-columns:2fr 1fr 150px auto;gap:10px;margin:32px 0}input,select{background:#07151b;color:#fff;border:1px solid #1a3941;border-radius:10px;padding:13px}form button{border:0;border-radius:10px;background:#22c55e;font-weight:800}.filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:15px}.filters button{background:#0a191f;color:#90a4ac;border:1px solid #18353d;border-radius:9px;padding:10px 13px}.filters .active{background:#22c55e;color:#041009;border-color:#22c55e}.expense{display:grid;grid-template-columns:1fr auto auto;gap:20px;align-items:center;padding:16px;border:1px solid #17333b;background:#09171d;border-radius:14px;margin:8px 0}.expense p{margin:4px 0;color:#80949d}.expense strong{font-size:17px}.expense button{background:none;border:0;color:#ff9b9b;cursor:pointer}@media(max-width:700px){main{margin:30px auto}header{display:block}h1{font-size:55px}.total{margin-top:18px}form{grid-template-columns:1fr}.expense{grid-template-columns:1fr auto}.expense button{grid-column:2;grid-row:1/3}}"},
  {name:"app.js",code:"const key='cv-ledger';let items=JSON.parse(localStorage.getItem(key)||'[]');let category='All';const list=document.querySelector('#list');\nfunction save(){localStorage.setItem(key,JSON.stringify(items));render()}\nfunction render(){const visible=items.filter(x=>category==='All'||x.category===category);const total=items.reduce((s,x)=>s+x.amount,0);document.querySelector('#total').textContent='$'+total.toFixed(2);list.innerHTML=visible.length?visible.map(x=>'<article class=\"expense\"><div><strong>'+escapeHtml(x.title)+'</strong><p>'+x.category+' · '+new Date(x.date).toLocaleDateString()+'</p></div><strong>$'+x.amount.toFixed(2)+'</strong><button data-id=\"'+x.id+'\">Delete</button></article>').join(''):'<p style=\"color:#72868f\">No expenses in this category yet.</p>';document.querySelectorAll('[data-id]').forEach(b=>b.onclick=()=>{items=items.filter(x=>x.id!==Number(b.dataset.id));save()})}\nfunction escapeHtml(s){return s.replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#039;'}[c]))}\ndocument.querySelector('#form').onsubmit=e=>{e.preventDefault();items.unshift({id:Date.now(),title:document.querySelector('#title').value.trim(),amount:Number(document.querySelector('#amount').value),category:document.querySelector('#category').value,date:Date.now()});e.target.reset();save()};document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{category=b.dataset.cat;document.querySelectorAll('[data-cat]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()});render();"}
 ],
"react-tasks":[
  {name:"package.json",code:"{\"scripts\":{\"dev\":\"vite\",\"build\":\"vite build\"},\"dependencies\":{\"@vitejs/plugin-react\":\"latest\",\"react\":\"latest\",\"react-dom\":\"latest\",\"vite\":\"latest\",\"typescript\":\"latest\"}}"},
  {name:"src/main.tsx",code:"import React,{useState} from 'react';import{createRoot}from'react-dom/client';import'./styles.css';\ntype Task={id:number;title:string;priority:'Low'|'Medium'|'High';column:'Todo'|'Doing'|'Done'};\nconst seed:Task[]=[{id:1,title:'Map the interface',priority:'High',column:'Todo'},{id:2,title:'Build task card',priority:'Medium',column:'Doing'},{id:3,title:'Check mobile layout',priority:'Low',column:'Done'}];\nfunction App(){const[tasks,setTasks]=useState(seed);const[title,setTitle]=useState('');const add=()=>{if(!title.trim())return;setTasks(t=>[...t,{id:Date.now(),title,priority:'Medium',column:'Todo'}]);setTitle('')};const move=(id:number,column:Task['column'])=>setTasks(t=>t.map(x=>x.id===id?{...x,column}:x));return <main><header><div><small>CODING VIBES / ORIGINAL REACT BUILD</small><h1>React Task Board</h1><p>Move work through a simple delivery pipeline.</p></div><div className=\"add\"><input value={title} onChange={e=>setTitle(e.target.value)} placeholder=\"New task\"/><button onClick={add}>Add</button></div></header><section className=\"board\">{(['Todo','Doing','Done'] as Task['column'][]).map(c=><div className=\"column\" key={c}><h2>{c}<span>{tasks.filter(t=>t.column===c).length}</span></h2>{tasks.filter(t=>t.column===c).map(t=><article className=\"task\" key={t.id}><small className={t.priority.toLowerCase()}>{t.priority}</small><b>{t.title}</b><div>{c!=='Todo'&&<button onClick={()=>move(t.id,'Todo')}>Todo</button>}{c!=='Doing'&&<button onClick={()=>move(t.id,'Doing')}>Doing</button>}{c!=='Done'&&<button onClick={()=>move(t.id,'Done')}>Done</button>}</div></article>)}</div>)}</section></main>}createRoot(document.getElementById('root')!).render(<App/>);"},
  {name:"src/styles.css",code:"*{box-sizing:border-box}body{margin:0;background:#061015;color:#edfff5;font-family:Inter,system-ui}main{width:min(1200px,92%);margin:60px auto}small{color:#4fe98b;letter-spacing:.1em}header{display:flex;justify-content:space-between;gap:20px;align-items:end}h1{font-size:58px;margin:7px 0}.add{display:flex;gap:8px}.add input{background:#07151b;border:1px solid #1a3942;color:#fff;padding:12px;border-radius:9px}.add button{background:#22c55e;border:0;border-radius:9px;padding:0 17px;font-weight:800}.board{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:30px}.column{min-height:450px;padding:18px;border:1px solid #17343b;border-radius:18px;background:#09171d}.column h2{display:flex;justify-content:space-between}.column h2 span{font-size:12px;color:#6f838c}.task{padding:16px;margin:10px 0;border:1px solid #193740;border-radius:14px;background:#07151b;display:grid;gap:10px}.task small{font-size:9px}.task .high{color:#ff8b8b}.task .medium{color:#f3c96b}.task .low{color:#62e99a}.task button{background:#0c2027;border:1px solid #1b3b42;color:#9eb0b7;border-radius:7px;padding:7px;margin-right:5px;cursor:pointer}@media(max-width:800px){header{display:block}.add{margin-top:20px}.board{grid-template-columns:1fr}h1{font-size:45px}}"}
 ],
"node-api":[
  {name:"package.json",code:"{\"type\":\"module\",\"scripts\":{\"dev\":\"node src/server.js\",\"start\":\"node src/server.js\"},\"dependencies\":{\"express\":\"latest\",\"cors\":\"latest\"}}"},
  {name:"src/server.js",code:"import express from 'express';import cors from 'cors';import projects from './data/projects.js';const app=express();const PORT=process.env.PORT||3000;app.use(cors());app.use(express.json());app.get('/api/health',(req,res)=>res.json({ok:true,service:'coding-vibes-projects'}));app.get('/api/projects',(req,res)=>res.json({count:projects.length,data:projects}));app.get('/api/projects/:id',(req,res)=>{const item=projects.find(x=>x.id===req.params.id);if(!item)return res.status(404).json({error:'Project not found'});res.json(item)});app.post('/api/projects',(req,res)=>{const{title,level='Beginner',tech='JavaScript'}=req.body||{};if(!title)return res.status(400).json({error:'title is required'});const item={id:Date.now().toString(),title,level,tech};projects.push(item);res.status(201).json(item)});app.use((req,res)=>res.status(404).json({error:'Route not found'}));app.listen(PORT,()=>console.log('Coding Vibes API listening on '+PORT));"},
  {name:"src/data/projects.js",code:"const projects=[{id:'pulse-dashboard',title:'Pulse Admin Dashboard',level:'Intermediate',tech:'HTML CSS JavaScript'},{id:'focus-tasks',title:'Focus Task Manager',level:'Beginner',tech:'HTML CSS JavaScript'},{id:'ledger',title:'Ledger Expense Tracker',level:'Intermediate',tech:'JavaScript LocalStorage'}];export default projects;"},
  {name:"README.md",code:"# Coding Vibes Node REST API\n\nAn original teaching API with health checks, project listing, single-project lookup and a validated create endpoint.\n\n## Routes\n- GET /api/health\n- GET /api/projects\n- GET /api/projects/:id\n- POST /api/projects with JSON {\"title\":\"My project\",\"level\":\"Beginner\",\"tech\":\"JavaScript\"}\n\n## Run\nnpm install\nnpm run dev\n\nThe project intentionally keeps data in memory so students can see the request/response flow before adding a database."}
 ],
"auth-app":[
  {name:"package.json",code:"{\"type\":\"module\",\"scripts\":{\"dev\":\"node server/server.js\"},\"dependencies\":{\"express\":\"latest\",\"cors\":\"latest\",\"bcryptjs\":\"latest\",\"jsonwebtoken\":\"latest\"}}"},
  {name:"server/server.js",code:"import express from 'express';import cors from 'cors';import bcrypt from 'bcryptjs';import jwt from 'jsonwebtoken';const app=express();const PORT=3000;const SECRET=process.env.JWT_SECRET||'coding-vibes-dev-secret';const users=[];app.use(cors());app.use(express.json());\napp.post('/api/auth/signup',async(req,res)=>{const{email,password,name}=req.body||{};if(!email||!password||password.length<6)return res.status(400).json({error:'Email and a 6+ character password are required'});if(users.some(u=>u.email===email.toLowerCase()))return res.status(409).json({error:'Account already exists'});const passwordHash=await bcrypt.hash(password,10);const user={id:Date.now().toString(),name:name||email.split('@')[0],email:email.toLowerCase(),passwordHash};users.push(user);const token=jwt.sign({sub:user.id},SECRET,{expiresIn:'2h'});res.status(201).json({token,user:{id:user.id,name:user.name,email:user.email}})});\napp.post('/api/auth/login',async(req,res)=>{const{email,password}=req.body||{};const user=users.find(u=>u.email===String(email).toLowerCase());if(!user||!(await bcrypt.compare(password||'',user.passwordHash)))return res.status(401).json({error:'Invalid credentials'});res.json({token:jwt.sign({sub:user.id},SECRET,{expiresIn:'2h'}),user:{id:user.id,name:user.name,email:user.email}})});\nfunction auth(req,res,next){try{const h=req.headers.authorization||'';const token=h.startsWith('Bearer ')?h.slice(7):'';req.user=jwt.verify(token,SECRET);next()}catch{res.status(401).json({error:'Authentication required'})}}\napp.get('/api/me',auth,(req,res)=>{const user=users.find(u=>u.id===req.user.sub);res.json({id:user.id,name:user.name,email:user.email})});app.listen(PORT,()=>console.log('Auth API on '+PORT));"},
  {name:"client/index.html",code:"<!doctype html><html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Coding Vibes Auth Lab</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><small>CODING VIBES / ORIGINAL BUILD</small><h1>Secure Auth Lab</h1><p>Practice signup, login, JWT protection and profile access.</p><form id=\"auth\"><input id=\"name\" placeholder=\"Name\"><input id=\"email\" type=\"email\" required placeholder=\"Email\"><input id=\"password\" type=\"password\" minlength=\"6\" required placeholder=\"Password\"><div><button data-mode=\"signup\">Create account</button><button data-mode=\"login\">Log in</button></div></form><pre id=\"output\">No request yet.</pre></main><script src=\"app.js\"></script></body></html>"},
  {name:"client/style.css",code:"body{margin:0;background:#061015;color:#edfff5;font-family:Inter,system-ui}main{width:min(620px,90%);margin:70px auto}small{color:#4fe98b;letter-spacing:.12em}h1{font-size:58px}form{display:grid;gap:10px;padding:25px;border:1px solid #193740;border-radius:18px;background:#09171d}input{padding:13px;border-radius:9px;border:1px solid #1b3a42;background:#07151b;color:#fff}button{padding:12px 15px;margin-right:8px;border:0;border-radius:9px;background:#22c55e;font-weight:800}pre{margin-top:15px;padding:18px;overflow:auto;border:1px solid #193740;border-radius:14px;background:#030a0f;color:#9ff3bd}"},
  {name:"client/app.js",code:"let token='';const out=document.querySelector('#output');document.querySelectorAll('[data-mode]').forEach(button=>button.onclick=async()=>{const mode=button.dataset.mode;const body={email:document.querySelector('#email').value,password:document.querySelector('#password').value,name:document.querySelector('#name').value};const r=await fetch('http://localhost:3000/api/auth/'+mode,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});const data=await r.json();out.textContent=JSON.stringify(data,null,2);if(data.token){token=data.token;const me=await fetch('http://localhost:3000/api/me',{headers:{Authorization:'Bearer '+token}});out.textContent+='\\n\\nProtected /api/me:\\n'+JSON.stringify(await me.json(),null,2)}});"}
 ],
"capstone":[
  {name:"README.md",code:"# Coding Vibes Capstone — Learn, Build, Ship\n\nAn original full-stack learning-platform capstone that connects a student dashboard, learning content, project library and developer studio.\n\n## Product modules\n- Public learning paths and roadmaps\n- Lesson flow: Watch → Read → Practice → Quiz → Complete\n- Project source browser and sandbox previews\n- Student dashboard with progress\n- Developer Studio for project drafts and publishing workflow\n\n## Suggested production stack\nReact + TypeScript, Node/Express, PostgreSQL/Supabase, object storage for media, and Vercel for deployment.\n\n## Build order\n1. Auth and roles\n2. Courses/lessons/content tables\n3. Project source storage\n4. Student progress\n5. Admin publishing\n6. Search and SEO\n7. Observability and deployment"},
  {name:"src/server/api.ts",code:"export type Role='student'|'admin';export type Project={id:string;title:string;slug:string;description:string;status:'draft'|'published';tech:string[];files:{path:string;content:string}[]};\nexport const routes={auth:['POST /api/auth/signup','POST /api/auth/login','GET /api/me'],content:['GET /api/paths','GET /api/lessons/:id'],projects:['GET /api/projects','GET /api/projects/:id','POST /api/projects','PATCH /api/projects/:id','POST /api/projects/:id/publish'],progress:['GET /api/progress','PUT /api/progress/:lessonId']};"},
  {name:"src/content/project.ts",code:"export const capstoneSeed={title:'Coding Vibes Capstone',slug:'coding-vibes-capstone',description:'A learning platform where students move from lessons to real projects.',status:'draft',tech:['React','Node.js','Database'],modules:['Home','Learning Paths','Roadmaps','Projects','Resources','Dashboard','Developer Studio']};"},
  {name:"src/ui/architecture.ts",code:"export const architecture=[{layer:'Experience',items:['Responsive web UI','Accessible navigation','Lesson player','Project sandbox']},{layer:'Application',items:['Auth','Progress','Search','Publishing workflow']},{layer:'Data',items:['Users','Paths','Lessons','Projects','Files','Progress']},{layer:'Delivery',items:['GitHub CI','Preview checks','Vercel production','Error monitoring']}];"}
 ]
};
function useProjectSEO(p:any){
 useEffect(()=>{
   document.title=p.seoTitle||p.title+' | Coding Vibes';
   const desc=p.desc||'Learn and build this Coding Vibes project with source code and practice.';
   let meta=document.querySelector('meta[name="description"]') as HTMLMetaElement|null;
   if(!meta){meta=document.createElement('meta');meta.name='description';document.head.appendChild(meta);}
   meta.content=desc;
 },[p.id,p.seoTitle,p.title,p.desc]);
}
function ProjectDetail({id}:{id?:string}){
 const[dbProject,setDbProject]=useState<any>(null);const[dbFiles,setDbFiles]=useState<any[]>([]);const[loading,setLoading]=useState(dbConfigured());const[active,setActive]=useState(0);const[detailTab,setDetailTab]=useState('Preview');const[editable,setEditable]=useState('');const[notice,setNotice]=useState('');const[previewVersion,setPreviewVersion]=useState(0);const p=normalizeDbProject(dbProject||getAllProjects().find(x=>x.id===id)||({id:id||'dashboard',title:'Developer Project',tech:'HTML · CSS · JavaScript',level:'Intermediate',desc:'Practice project.'} as any));
 useProjectSEO(p);
 useEffect(()=>{let live=true;if(dbConfigured()){fetchPublishedProjects().then(list=>{const found=list.find((x:any)=>x.slug===id);if(found){setDbProject(found);return fetchProjectFiles(found.id).then(setDbFiles)}}).catch(()=>{}).finally(()=>live&&setLoading(false));}else setLoading(false);return()=>{live=false}},[id]);
 const bundled=projectFileSets[p.id]||getPublishedProjectFiles(p.id)||projectFileSets.dashboard;
 const files=dbFiles.length?dbFiles.map(f=>({name:f.file_name,code:f.content})):bundled;
 useEffect(()=>{setActive(0);setEditable(files[0]?.code||'')},[p.id,dbFiles.length]);
 const file=files[active]||files[0];
 useEffect(()=>{setEditable(file?.code||'')},[active,dbFiles.length]);
 const copy=()=>{navigator.clipboard?.writeText(editable);setNotice('Code copied.');};
 const downloadFile=()=>{const blob=new Blob([editable],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=file?.name.split('/').pop()||'source.txt';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
 const downloadZip=async()=>{const zip=new JSZip();files.forEach((f,i)=>zip.file(f.name,i===active?editable:f.code));const blob=await zip.generateAsync({type:'blob'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=p.id+'-source.zip';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
 const buildPreview=()=>{const current=files.map((f,i)=>i===active?{...f,code:editable}:f);const html=current.find(f=>f.name.toLowerCase().endsWith('.html'))?.code||'';const css=current.find(f=>f.name.toLowerCase().endsWith('.css'))?.code||'';const js=current.find(f=>f.name.toLowerCase().endsWith('.js'))?.code||'';if(html)return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css.replace(/<style>|<\/style>/gi,'')+'</style></head><body>'+html.replace(/<!doctype html>|<html>|<\/html>|<head>[\s\S]*?<\/head>|<body>|<\/body>/gi,'')+'<script>'+js.replace(/<script>|<\/script>/gi,'')+'<\/script></body></html>';const fallback='<main><h1>'+p.title+'</h1><p>This project preview is ready for the current source package.</p><p><b>'+p.tech+'</b></p></main>';return '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Inter,system-ui;padding:40px;background:#071016;color:#e8fff0}main{max-width:900px;margin:auto}h1{font-size:42px;color:#52ef93}</style></head><body>'+fallback+'</body></html>'};
 return <><Nav/><main className="project-detail premium-project-detail"><button className="back" onClick={()=>go('projects')}>← Projects</button><section className="project-detail-hero project-detail-hero-v2"><div className="project-detail-copy"><span className="kicker">{p.level} · {p.tech}</span><h1>{p.title}</h1><p>{p.desc}</p><div className="detail-keywords">{(p.tags||'source code, practice project, coding tutorial').split(', ').map((x:string)=><span key={x}>{x}</span>)}</div><div className="project-detail-tags"><span><CheckCircle2/> Original source</span><span><Terminal/> Editable sandbox</span><span><Download/> ZIP download</span></div></div><div className="project-detail-cover">{p.thumbnail&&<img className="project-detail-thumb" src={p.thumbnail} alt={p.title+" project interface thumbnail"} loading="eager"/>}{!p.thumbnail&&<div className="project-cover-mock" aria-label={p.title+" project thumbnail preview"}><div className="project-cover-sidebar"><b>CV</b><i>Dashboard</i><i>Analytics</i><i>Projects</i><i>Settings</i></div><div className="project-cover-main"><div className="project-cover-top"><b>{p.title}</b><span>LIVE PREVIEW</span></div><div className="project-cover-cards"><span></span><span></span><span></span></div><div className="project-cover-chart"><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div>}<span>CODING VIBES · PROJECT PREVIEW</span></div></section><div className="project-detail-tabs">{["Preview","Source Code","Files","Documentation","How to Use"].map(x=><button className={detailTab===x?"active":""} onClick={()=>{setDetailTab(x);const target=x==="Preview"?"project-preview":x==="Source Code"?"project-source":x==="Files"?"project-files":"project-doc";setTimeout(()=>document.getElementById(target)?.scrollIntoView({behavior:"smooth",block:"start"}),0)}} key={x}>{x}</button>)}</div><div className="project-workspace premium-workspace" id="project-workspace"><aside className="file-tree premium-file-tree" id="project-files"><b>PROJECT FILES</b>{files.map((f,i)=><button className={i===active?'selected':''} onClick={()=>setActive(i)} key={f.name}><FileCode2 size={15}/><span>{f.name}</span></button>)}<div className="tree-note">Edit the source, run the sandbox, then download your changed build.</div></aside><section className="source-view premium-source-view" id="project-source"><div className="source-head">{file?.name}<div className="source-actions"><button onClick={copy}>Copy</button><button onClick={downloadFile}>Download</button></div></div><textarea className="project-code-editor" value={editable} onChange={e=>setEditable(e.target.value)} spellCheck={false}/><div className="editor-actions"><button className="secondary" onClick={()=>setEditable(file?.code||'')}>Reset file</button><button className="primary" onClick={()=>{setPreviewVersion(v=>v+1);setNotice('Preview refreshed from your edited source.')}}>Run preview <Play size={15}/></button></div>{notice&&<div className="save-toast">{notice}</div>}</section><section className="live-preview premium-live-preview" id="project-preview"><div className="source-head">Live Preview <span>Sandboxed</span></div><iframe key={previewVersion} title="editable project preview" sandbox="allow-scripts allow-forms" srcDoc={buildPreview()}/></section></div><div className="project-next" id="project-doc"><div><span className="kicker">HOW TO LEARN FROM THIS</span><h2>Inspect → change → run → explain.</h2><p>Read one file, make a small change, refresh the sandbox and explain what changed. That cycle is the skill.</p></div><button className="secondary" onClick={()=>go('paths')}>Continue learning <ArrowRight/></button></div></main><Footer/></>}
function Roadmaps(){
 const cards=[
  ['full-stack','Full Stack Roadmap','Computer basics → HTML → CSS → JavaScript → React → Node → database → deployment.','13','Full journey','Start from zero and build toward production-ready full-stack projects.'],
  ['frontend','Frontend Roadmap','HTML → CSS → JavaScript → React → production UI.','6','Frontend','Master the browser, responsive UI and component-driven interfaces.'],
  ['backend','Backend Roadmap','Node.js → Express → APIs → databases → authentication → deployment.','7','Backend','Learn how real services receive requests, work with data and ship safely.']
 ];
 return <><Nav/><main className="inner-page roadmaps-page reference-roadmaps-list">
  <section className="listing-hero roadmap-hero reference-roadmap-library-hero">
   <div><span className="kicker">INTERACTIVE ROADMAPS</span><h1>Know what to learn <em>next.</em></h1><p>Stop guessing what comes after the basics. Follow a connected route where every milestone explains the skill, practice and project that comes next.</p><div className="roadmap-library-stats"><span><b>3</b><small>guided routes</small></span><span><b>26</b><small>connected milestones</small></span><span><b>10+</b><small>build projects</small></span></div></div>
   <div className="roadmap-visual premium-roadmap-visual"><span>HTML</span><i/><span>CSS</span><i/><span>JS</span><i/><span>React</span><i/><span>Node</span></div>
  </section>
  <div className="roadmap-library-grid reference-roadmap-library-grid">{cards.map((x,i)=><button className={'roadmap-library-card premium-roadmap-card roadmap-tone-'+i} key={x[0]} onClick={()=>go('roadmap',x[0])}>
    <div className="roadmap-card-art"><span>{String(i+1).padStart(2,'0')}</span><b>{x[4]}</b><div className="roadmap-mini-line">{Array.from({length:7},(_,j)=><i key={j}/>)}</div><strong>{x[3]} steps</strong></div>
    <div className="roadmap-card-content"><span className="card-meta">CONNECTED LEARNING ROUTE</span><h3>{x[1]}</h3><p>{x[5]}</p><div className="roadmap-flow"><span>{x[2].split(' → ')[0]}</span><i>→</i><span>{x[2].split(' → ').slice(-1)[0]}</span></div><div className="card-foot">Open interactive roadmap <ChevronRight size={16}/></div></div>
  </button>)}</div>
  <section className="roadmap-method"><div><span className="kicker">HOW THE ROADMAP WORKS</span><h2>Learn → build → prove → move forward.</h2><p>Each milestone connects a concept to practice and a real build. Mark a node complete only when you can explain it and use it.</p></div><div className="roadmap-method-steps"><span><b>01</b>Learn the concept</span><span><b>02</b>Practice it</span><span><b>03</b>Build the project</span><span><b>04</b>Unlock the next node</span></div></section>
 </main><Footer/></>
}
function RoadmapDetail({id}:{id?:string}){
 const title=id==='frontend'?'Frontend':id==='backend'?'Backend':'Full Stack';
 const nodes=id==='frontend'?roadmapNodes.slice(1,5):id==='backend'?roadmapNodes.slice(5,10):roadmapNodes;
 const key='cv-roadmap-'+(id||'full-stack');
 const[done,setDone]=useState<string[]>(()=>JSON.parse(localStorage.getItem(key)||'[]'));
 const toggle=(n:string)=>{const next=done.includes(n)?done.filter(x=>x!==n):[...done,n];setDone(next);localStorage.setItem(key,JSON.stringify(next))};
 const percent=Math.round(done.length/nodes.length*100);
 const iconFor=(name:string)=>{if(name==='HTML')return <TechIcon name="html"/>;if(name==='CSS')return <TechIcon name="css"/>;if(name==='JavaScript')return <TechIcon name="javascript"/>;if(name==='React')return <TechIcon name="react"/>;if(name==='Node.js')return <TechIcon name="node"/>;if(name==='Authentication')return <ShieldCheck/>;if(name==='APIs')return <Code2/>;if(name==='Database')return <Layers3/>;if(name==='Deployment')return <Download/>;if(name==='Build Projects')return <Sparkles/>;return <Terminal/>};
 return <><Nav/><main className="inner-page roadmap-detail-page reference-roadmap-page">
  <button className="back" onClick={()=>go('roadmaps')}>← Roadmaps</button>
  <section className="reference-roadmap-top">
   <div><span className="kicker">INTERACTIVE VISUAL ROADMAP</span><h1>{title} Developer Roadmap</h1><p>Step by step journey from beginner to professional developer.</p></div>
   <div className="roadmap-filter-row">{['Beginner','Frontend','Backend','Full Stack','Data Science'].map(x=><button key={x} className={x===title||(!id&&x==='Full Stack')?'active':''} onClick={()=>x==='Frontend'?go('roadmap','frontend'):x==='Backend'?go('roadmap','backend'):x==='Full Stack'?go('roadmap','full-stack'):undefined}>{x}</button>)}<button className="roadmap-pdf" onClick={()=>window.print()}><Download size={14}/> Download as PDF</button></div>
  </section>
  <section className="reference-roadmap-stage">
   <div className="roadmap-scene-bg"><span/><span/><span/><span/><span/><span/></div>
   <svg className="roadmap-connectors" viewBox="0 0 1000 680" preserveAspectRatio="none" aria-hidden="true"><path d="M100 110 C230 70 270 70 370 150 S560 250 690 160 S850 100 900 220 S760 330 620 350 S350 360 220 470 S450 590 620 520 S820 470 900 590" fill="none" stroke="rgba(34,197,94,.9)" strokeWidth="7" strokeLinecap="round" strokeDasharray="2 18"/><path d="M100 110 C230 70 270 70 370 150 S560 250 690 160 S850 100 900 220 S760 330 620 350 S350 360 220 470 S450 590 620 520 S820 470 900 590" fill="none" stroke="rgba(16,185,129,.28)" strokeWidth="24" strokeLinecap="round"/></svg>
   <div className="reference-roadmap-nodes">{nodes.map((n:any,i:number)=><button key={n[0]} className={'reference-visual-node node-'+(i+1)+(done.includes(n[1])?' done':'')} onClick={()=>toggle(n[1])}>
    <span className="visual-platform"><span className="visual-node-number">{done.includes(n[1])?<Check size={16}/>:n[0]}</span><span className="visual-node-icon">{iconFor(n[1])}</span></span>
    <span className="visual-node-copy"><small>{n[2]}</small><b>{n[1]}</b><em>{n[3]}</em></span>
   </button>)}</div>
  </section>
  <aside className="roadmap-progress-card reference-roadmap-progress"><span>ROADMAP PROGRESS</span><strong>{done.length}<small> / {nodes.length} Steps</small></strong><div className="progress"><i style={{width:percent+'%'}}/></div><b>{percent}% complete</b><p>Complete a node when you can explain the concept and build the linked project.</p></aside>
 </main><Footer/></>
}
function Auth({signup=false}:{signup?:boolean}){const[email,setEmail]=useState('');const[name,setName]=useState('');const submit=(e:React.FormEvent)=>{e.preventDefault();localStorage.setItem('cv-user',JSON.stringify({name:name||email.split('@')[0],email}));go('dashboard')};return <main className="auth"><div className="auth-card"><button className="brand auth-brand" onClick={()=>go('home')}><span className="brand-mark">&lt;/&gt;</span><span>Coding<span>Vibes</span></span></button><span className="kicker">{signup?'CREATE ACCOUNT':'WELCOME BACK'}</span><h1>{signup?'Start learning.':'Continue learning.'}</h1><p>{signup?'Create your local learning profile and track your progress.':'Log in to continue your saved learning progress.'}</p><form onSubmit={submit}>{signup&&<label>Name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></label>}<label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Password<input required type="password" minLength={6} placeholder="••••••••"/></label><button className="primary full" type="submit">{signup?'Create account':'Log in'} <ArrowRight/></button></form><button className="auth-switch" onClick={()=>go(signup?'login':'signup')}>{signup?'Already have an account? Log in':'New here? Create an account'}</button></div></main>}

function Dashboard(){const user=JSON.parse(localStorage.getItem('cv-user')||'null');const htmlPath=paths.find(p=>p.id==='html')!;const progress=Number(localStorage.getItem('cv-progress-html')||0);return <><Nav/><main className="dashboard-page"><div className="dash-head"><div><span className="kicker">STUDENT DASHBOARD</span><h1>Keep building{user?.name?', '+user.name:''}.</h1><p>Your learning progress is saved in this browser.</p></div><button className="primary" onClick={()=>go('path','html')}>Continue HTML <ArrowRight/></button></div><div className="stats-grid"><div><span>HTML PROGRESS</span><b>{progress}/{htmlPath.lessons}</b><i style={{width:(progress/htmlPath.lessons*100)+'%'}}/></div><div><span>PROJECTS</span><b>{getAllProjects().length}</b><small>Original practice builds</small></div><div><span>ROADMAP</span><b>{JSON.parse(localStorage.getItem('cv-roadmap-full-stack')||'[]').length}/{roadmapNodes.length}</b><small>Full Stack nodes completed</small></div></div><div className="dashboard-section"><span className="kicker">CONTINUE LEARNING</span><h2>HTML foundations</h2><div className="continue-card"><BookOpen/><div><b>{progress<htmlPath.lessons?(curriculum.html[progress]||'HTML lesson '+(progress+1)):'HTML path complete'}</b><p>Read, practice and check your understanding.</p></div><button className="secondary" onClick={()=>go('lesson','html-'+Math.min(progress+1,htmlPath.lessons))}>Continue <ArrowRight/></button></div></div></main><Footer/></>}

function SearchPage(){const[q,setQ]=useState('');const items=[...paths.map(p=>({type:'Path',title:p.title,desc:p.desc,id:p.id})),...getAllProjects().map(p=>({type:'Project',title:p.title,desc:p.desc,id:p.id})),...resources.map((r,i)=>({type:'Resource',title:r[0],desc:r[1],id:String(i)}))];const results=items.filter(x=>(x.title+' '+x.desc).toLowerCase().includes(q.toLowerCase()));return <><Nav/><main className="listing"><PageHero kicker="SEARCH" title="Find your next topic." sub="Search learning paths, projects and resources."/><div className="searchbox big"><Search/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Try HTML, React, Git, projects..." /></div><div className="search-results">{q&&results.map(x=><button key={x.type+x.id} onClick={()=>go(x.type==='Path'?'path':x.type==='Project'?'project':'resources',x.type==='Resource'?undefined:x.id)}><span>{x.type}</span><b>{x.title}</b><p>{x.desc}</p><ChevronRight/></button>)}</div></main><Footer/></>}

function App(){const{page,id}=useRoute();if(page==='home')return <Home/>;if(page==='paths')return <PathList/>;if(page==='path')return <PathDetail id={id}/>;if(page==='lesson')return <Lesson id={id}/>;if(page==='roadmaps')return <Roadmaps/>;if(page==='roadmap')return <RoadmapDetail id={id}/>;if(page==='projects')return <Projects/>;if(page==='project')return <ProjectDetail id={id}/>;if(page==='resources')return <Resources/>;if(page==='search')return <SearchPage/>;if(page==='login')return <Auth/>;if(page==='signup')return <Auth signup/>;if(page==='dashboard')return <Dashboard/>;if(page==='studio')return <Studio/>;return <Home/>}
createRoot(document.getElementById('root')!).render(<App/>);
