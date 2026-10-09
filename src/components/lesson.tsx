// Auto-split from main.tsx (refactor commit) — no logic changes.
import React,{useEffect,useState} from 'react';
import {ArrowRight,BookOpen,Check,ChevronRight,Play,Sparkles,Terminal} from 'lucide-react';
import {go} from '../router';
import {paths,lessons} from '../data/content';
import {lessonContent,curriculum,generatedLessonData,lessonLineNote,lessonTeachingMeta,buildPreviewDoc,normalizeLessonData,lessonLineNoteUrdu} from '../data/lessons';
import {deepLessons} from '../data/deep';
import {quizBank} from '../data/quiz';
import {Nav,Footer} from './layout';
import {HighlightedCode} from './highlight';
// W3Schools-style Example Explained: bullet points with key element + short explanation.
// Uses the lesson's own explain array (simple English, W3Schools style).
export function ExampleExplained({code,language,defaultOpen,bullets}:{code:string;language:string;defaultOpen?:boolean;bullets?:string[]}){
 const[open,setOpen]=useState(!!defaultOpen);
 // Extract key elements from code for bullet display (e.g. <p class="x"> -> p)
 const keys:Array<{el:string;note:string}>=[];
 const seen=new Set<string>();
 const tagRe=/<([a-zA-Z][a-zA-Z0-9-]*)/g;let tm:RegExpExecArray|null;
 while((tm=tagRe.exec(code))&&keys.length<6){const t=tm[1].toLowerCase();if(!seen.has(t)){seen.add(t);keys.push({el:'<'+t+'>',note:''});}}
 const notes=bullets||[];
 return <div className="explained">
  <button className="explained-toggle" onClick={()=>setOpen(o=>!o)}><BookOpen size={15}/><b>Example Explained</b><span>in simple words, like W3Schools</span><ChevronRight size={15} className={open?'tryit-chev open':''}/></button>
  {open&&<ul className="explained-bullets">{(notes.length?notes:keys.map(x=>x.el)).slice(0,6).map((n,i)=>{
    if(notes.length)return <li key={i}>{n}</li>;
    const el=keys[i];return <li key={i}><code>{el.el}</code><span>{lessonLineNoteUrdu(language,el.el.replace(/[<>]/g,''),i)}</span></li>;
  })}</ul>}
 </div>;
}

export function MiniPlayground({code,language}:{code:string;language:string}){
 const[open,setOpen]=useState(false);
 const[edited,setEdited]=useState(code);
 const[out,setOut]=useState('');
 useEffect(()=>{setEdited(code);setOut('')},[code]);
 const run=()=>setOut(buildPreviewDoc(language,edited));
 return <div className="tryit">
  <button className="tryit-toggle" onClick={()=>setOpen(o=>!o)}><Play size={15}/><b>{open?'Close playground':'Try it Yourself'}</b><span>edit the code, press Run</span><ChevronRight size={15} className={open?'tryit-chev open':''}/></button>
  {open&&<div className="tryit-body"><div className="tryit-grid">
   <div className="tryit-editor"><div className="source-head">{language}<button onClick={()=>{setEdited(code);setOut('')}}>Reset</button></div><textarea value={edited} onChange={e=>setEdited(e.target.value)} spellCheck={false} aria-label="Editable code"/><div className="editor-actions"><button className="primary small" onClick={run}>Run code <Play size={14}/></button></div></div>
   <div className="tryit-output"><div className="source-head">Output <span>Live</span></div>{out?<iframe title="try it yourself output" sandbox="allow-scripts" srcDoc={out}/>:<div className="practice-empty"><Terminal/><p>Press Run — see the result here.</p></div>}</div>
  </div></div>}
 </div>;
}

export function LessonQuiz({pathId,lessonIdx}:{pathId:string;lessonIdx:number}){
 const bank=quizBank[pathId]||quizBank['html'];
 const start=((lessonIdx-1)*3)%bank.length;
 const qs=[0,1,2].map(k=>bank[(start+k)%bank.length]);
 const storageKey='cv-quiz-'+pathId+'-'+lessonIdx;
 const[answers,setAnswers]=useState<(number|null)[]>([null,null,null]);
 const[done,setDone]=useState(false);
 const[best,setBest]=useState(()=>{try{return Number(localStorage.getItem(storageKey)||0)}catch{return 0}});
 const[earned,setEarned]=useState(0);
 const score=answers.filter((a,i)=>a===qs[i].correct).length;
 const allAnswered=answers.every(a=>a!==null);
 const submit=()=>{
  setDone(true);
  if(score>best){setBest(score);try{localStorage.setItem(storageKey,String(score))}catch{}}
  const xpGain=score*10;setEarned(xpGain);
  try{const xp=Number(localStorage.getItem('cv-xp')||0);localStorage.setItem('cv-xp',String(xp+xpGain))}catch{}
 };
 const reset=()=>{setAnswers([null,null,null]);setDone(false);setEarned(0)};
 return <div className="mcq">
  {best>0&&!done&&<div className="mcq-best">Best score: {best}/3 — play again and beat it!</div>}
  {qs.map((q,qi)=>{const chosen=answers[qi];const locked=done||chosen!==null;
   return <div className="mcq-q" key={qi}><b><span>Q{qi+1}</span>{q.q}</b>
   <div className="mcq-opts">{q.options.map((opt,oi)=>{const isCorrect=oi===q.correct;const isChosen=chosen===oi;
    const cls='mcq-opt'+(locked&&isCorrect?' correct':'')+(locked&&isChosen&&!isCorrect?' wrong':'')+(isChosen&&!done?' picked':'');
    return <button key={oi} className={cls} disabled={locked} onClick={()=>{const n=[...answers];n[qi]=oi;setAnswers(n)}}><i>{['A','B','C','D'][oi]}</i>{opt}{locked&&isCorrect&&<Check size={15}/>}</button>})}</div>
   {locked&&<div className={'mcq-why '+(chosen===q.correct?'ok':'no')}><b>{chosen===q.correct?'Sahi!':'Ghalat.'}</b> {q.why}</div>}
  </div>})}
  {!done
   ?<div className="mcq-actions"><button className="primary" disabled={!allAnswered} onClick={submit}>Check score <ArrowRight size={15}/></button>{!allAnswered&&<span>Teenon sawalon ke jawab do.</span>}</div>
   :<div className="mcq-result"><div><b>{score}/3</b><span>{score===3?'Perfect! Full marks.':score===2?'Great! One more could have been right.':score===1?'Good try — read the lesson again.':'No problem — review the concept and retry.'}</span></div><div className="mcq-xp">+{earned} XP {best>=score&&score>0?'(best: '+best+'/3)':''}</div><button className="secondary small" onClick={reset}>Play again</button></div>}
 </div>;
}

export function Lesson({id}:{id?:string}){
 const parts=(id||'html-1').split('-');
 const p=paths.find(x=>x.id===parts[0])||paths[0];
 const idx=Math.max(1,Number(parts[1]||1));
 const lesson=p.id==='html'?lessons[idx-1]:[String(idx).padStart(2,'0'),(curriculum[p.id]||[])[idx-1]||p.title+' lesson '+idx,p.title,'Learn the concept, see a worked example, practice it and check your understanding.'];
 const key='cv-complete-'+p.id+'-'+idx;
 const fallback=lessonContent[p.id+'-'+idx]||generatedLessonData(p.id,lesson[1],idx);
 const deep=(deepLessons[p.id]||[])[idx-1];
 const data=normalizeLessonData(deep||fallback,p,idx,lesson);
 const savedKey='cv-draft-code-'+p.id+'-'+idx;
 const[savedNotice,setSavedNotice]=useState('');
 const[done,setDone]=useState(localStorage.getItem(key)==='1');
 const[tab,setTab]=useState<'text'|'practice'>('text');
 const[code,setCode]=useState(()=>localStorage.getItem(savedKey)||data.example);
 const[output,setOutput]=useState('');
 useEffect(()=>{const saved=localStorage.getItem(savedKey);if(saved)setCode(saved);else setCode(data.example)},[savedKey,data.example]);
 const complete=()=>{const n=!done;setDone(n);localStorage.setItem(key,n?'1':'0');if(n){const current=Number(localStorage.getItem('cv-progress-'+p.id)||0);localStorage.setItem('cv-progress-'+p.id,String(Math.max(current,idx)))}};
 const runCode=()=>{setOutput(buildPreviewDoc(data.language||p.title,code))};
 const nextIdx=idx+1,prevIdx=idx-1;
 const nextTitle=nextIdx<=p.lessons?(p.id==='html'?lessons[nextIdx-1]?.[1]:curriculum[p.id]?.[nextIdx-1])||'Next lesson':'';
 const prevTitle=prevIdx>=1?(p.id==='html'?lessons[prevIdx-1]?.[1]:curriculum[p.id]?.[prevIdx-1])||'Previous lesson':'';
 return <><Nav/><main className="lesson-page lesson-page-v2">
  <button className="back" onClick={()=>go('path',p.id)}>← {p.title} path</button>
  <div className="lesson-layout"><article>
   <span className="kicker">{p.title.toUpperCase()} · LESSON {lesson[0]}</span>
   <h1>{lesson[1]}</h1><p className="lead">{data.objective}</p>
   <div className="learning-tabs learning-tabs-text-only">
    <button className={tab==='text'?'active':''} onClick={()=>setTab('text')}><BookOpen/> Learn by text</button>
    <button className={tab==='practice'?'active':''} onClick={()=>setTab('practice')}><Terminal/> Practice</button>
   </div>
   {tab==='text'&&<div className="text-lesson rich-reading rich-reading-html">
    <div className="lesson-language-note"><b>Learning language:</b> English with simple explanations, examples and practical code. <span>Lesson flow: Learn → Understand → Example → Practice → Check → Next topic.</span></div>
    <div className="lesson-callout"><Sparkles/><div><b>Lesson objective</b><p>{data.objective}</p></div></div>
    <section className="lesson-section"><span className="section-kicker">01 · WHAT YOU'LL LEARN</span><h2>Learning outcomes</h2><ul className="lesson-summary-list">{data.outcomes.map((x:string)=><li key={x}>{x}</li>)}</ul></section>
    <section className="lesson-section"><span className="section-kicker">02 · THE CONCEPT</span><h2>{data.title}</h2><p>{data.concept}</p><div className="lesson-deep-card lesson-why-card"><span>WHY THIS MATTERS</span><p>{data.why}</p></div></section>
    <section className="lesson-section"><span className="section-kicker">03 · CORE PATTERN</span><h2>Start with the smallest useful syntax</h2><div className="syntax-card"><code>{data.syntax}</code><button onClick={()=>{navigator.clipboard?.writeText(data.syntax);setSavedNotice('Syntax copied.')}}>Copy syntax</button></div>{data.explain.slice(0,2).map((x:string,i:number)=><p key={i}>{x}</p>)}</section>
    <section className="lesson-section"><span className="section-kicker">04 · WORKED EXAMPLES</span><h2>Read it, then change it</h2>{data.examples.map((ex:any,i:number)=><div className="worked-example" key={ex[0]}><div className="worked-example-head"><b>{String(i+1).padStart(2,'0')} · {ex[0]}</b><span>{p.title}</span></div><p>{data.explain[i%data.explain.length]}</p><div className="code"><div>{p.title} example <span>{p.title}</span><button onClick={()=>{navigator.clipboard?.writeText(ex[1]);setSavedNotice('Example copied.')}}>Copy</button></div><pre><HighlightedCode code={ex[1]} language={data.language||p.title}/></pre></div><MiniPlayground code={ex[1]} language={data.language||p.title}/><ExampleExplained code={ex[1]} language={data.language||p.title} defaultOpen={i===0} bullets={data.explain}/></div>)}</section>
    <section className="lesson-section"><span className="section-kicker">05 · DEEP DIVE</span><h2>Important details</h2><div className="lesson-detail-grid">{data.explain.map((x:string,i:number)=><div className="lesson-detail-card" key={x}><b>{['Understand','Remember','Build correctly','Think like a developer'][i%4]}</b><p>{x}</p></div>)}</div></section>
    <section className="lesson-section"><span className="section-kicker">06 · COMMON MISTAKE</span><h2>What to avoid</h2><div className="lesson-warning-card"><span>⚠ COMMON MISTAKE</span><p>{data.mistake}</p></div></section>
    <section className="lesson-section"><span className="section-kicker">07 · PRACTICE</span><h2>Now build it yourself</h2><div className="reading-challenge"><Terminal/><div><b>Practice task</b><p>{data.practice}</p></div><button className="primary small" onClick={()=>setTab('practice')}>Open Practice <ArrowRight size={15}/></button></div></section>
    <section className="lesson-section"><span className="section-kicker">08 · QUICK CHECK</span><h2>Test yourself</h2><p className="quiz-intro">Three questions — earn XP for correct answers. Think first, then answer.</p><LessonQuiz pathId={p.id} lessonIdx={idx}/></section>
    <section className="lesson-section"><span className="section-kicker">09 · QUICK SUMMARY</span><h2>What you should remember</h2><div className="summary-card"><ul>{data.outcomes.map((x:string)=><li key={x}>✓ {x}</li>)}</ul></div></section>
    <div className="lesson-complete-bar"><div><b>{done?'Lesson completed':'Finish this lesson'}</b><span>{done?'Your progress is saved in this browser.':'Mark it complete when you can explain the concept and reproduce the example without copying.'}</span></div><button className={done?'secondary':'primary'} onClick={complete}>{done?'Completed ✓':'Mark lesson complete'}</button></div>
    {savedNotice&&<div className="save-toast">{savedNotice}</div>}
   </div>}
   {tab==='practice'&&<section className="practice-lab"><div className="practice-head"><span className="kicker">PRACTICE LAB</span><h2>Change the code. Run it. Explain the result.</h2><p>{data.practice||data.task}</p></div><div className="practice-grid"><div className="practice-editor"><div className="source-head">{data.language||p.title}<button onClick={()=>{setCode(data.example);setSavedNotice('Starter code restored.')}}>Reset</button></div><textarea value={code} onChange={e=>setCode(e.target.value)} spellCheck={false}/><div className="editor-actions"><button className="primary" onClick={()=>{localStorage.setItem(savedKey,code);runCode();setSavedNotice('Practice saved and preview refreshed.')}}>Run code <Play size={15}/></button></div></div><div className="practice-output"><div className="source-head">Output <span>Sandbox</span></div>{output?<iframe title="practice output" sandbox="allow-scripts" srcDoc={output}/>:<div className="practice-empty"><Terminal/><p>Run your code to see the result.</p></div>}</div></div></section>}
   <nav className="lesson-bottom-nav lesson-topic-nav">
    <button className="lesson-nav-btn prev" disabled={idx===1} onClick={()=>idx>1&&go('lesson',p.id+'-'+prevIdx)}><span>← Previous</span><b>{prevTitle||'First lesson'}</b></button>
    <button className="lesson-nav-btn next" disabled={idx>=p.lessons} onClick={()=>idx<p.lessons&&go('lesson',p.id+'-'+nextIdx)}><span>Next topic →</span><b>{nextTitle||'Course complete'}</b></button>
   </nav>
  </article></div>
 </main><Footer/></>
}
