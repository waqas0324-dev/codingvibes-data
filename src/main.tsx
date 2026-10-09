// Auto-split from main.tsx (refactor commit) — no logic changes.
import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/base.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/w3features.css';
import {useRoute} from './router';
import {Home} from './components/home';
import {PathList,PathDetail} from './components/paths';
import {Lesson} from './components/lesson';
import {Projects,ProjectDetail} from './components/projects';
import {Studio,Resources,Roadmaps,RoadmapDetail,Auth,Dashboard,SearchPage,InterviewPage,CheatSheetPage} from './components/misc';

function App(){const{page,id}=useRoute();if(page==='home')return <Home/>;if(page==='paths')return <PathList/>;if(page==='path')return <PathDetail id={id}/>;if(page==='lesson')return <Lesson id={id}/>;if(page==='interview')return <InterviewPage id={id}/>;if(page==='cheatsheet')return <CheatSheetPage id={id}/>;if(page==='roadmaps')return <Roadmaps/>;if(page==='roadmap')return <RoadmapDetail id={id}/>;if(page==='projects')return <Projects/>;if(page==='project')return <ProjectDetail id={id}/>;if(page==='resources')return <Resources/>;if(page==='search')return <SearchPage/>;if(page==='login')return <Auth/>;if(page==='signup')return <Auth signup/>;if(page==='dashboard')return <Dashboard/>;if(page==='studio')return <Studio/>;return <Home/>}
createRoot(document.getElementById('root')!).render(<App/>);
