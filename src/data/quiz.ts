// Auto-split from main.tsx (refactor commit) — no logic changes.
export const quizBank:Record<string,{q:string;options:string[];correct:number;why:string}[]>={
 html:[
  {q:'HTML ka asal kaam kya hai?',options:['Page ki structure aur meaning banana','Database chalana','Server host karna','Images compress karna'],correct:0,why:'HTML web ka structure layer hai — content ko meaning deta hai. Design CSS ka kaam hai.'},
  {q:'Link banane ke liye kaunsa tag istemal hota hai?',options:['<link>','<a>','<href>','<url>'],correct:1,why:'<a> (anchor) tag link banata hai aur href attribute me destination hota hai.'},
  {q:'Image ke liye alt attribute kyun zaroori hai?',options:['Image ka color badalne ke liye','Screen readers ke liye text alternative dene ke liye','Image ko bara karne ke liye','Page ko fast karne ke liye'],correct:1,why:'Alt text un users ke liye hai jo image nahi dekh sakte — accessibility ke liye lazmi hai.'},
  {q:'Form me email lene ke liye best input type kaunsa hai?',options:['type="text"','type="email"','type="password"','type="number"'],correct:1,why:'type="email" browser se muft validation deta hai — ghalat email par khud rokta hai.'},
  {q:'Page ka main content kis tag me hona chahiye?',options:['<div>','<head>','<main>','<span>'],correct:2,why:'<main> page ke asal content ke liye hai — har page me sirf ek main hota hai.'},
  {q:'Khule hue tag ko band karna kyun zaroori hai?',options:['Browser kharab ho jata hai','Structure toot sakti hai aur layout bigar sakta hai','Koi farq nahi parta','Sirf style ke liye hai'],correct:1,why:'Band na kiya to browser guess karta hai — aksar layout toot jata hai.'}
 ],
 css:[
  {q:'CSS me "color: red;" ka matlab kya hai?',options:['Element ka background lal','Element ka text color lal','Element ko hide karna','Element ko bara karna'],correct:1,why:'color property text ka rang set karti hai — background ke liye background-color hota hai.'},
  {q:'Class selector kaise likha jata hai?',options:['#card','.card','*card','@card'],correct:1,why:'Dot (.) class ko select karta hai, hash (#) id ko.'},
  {q:'Flexbox me items ko center karne ke liye kya use hota hai?',options:['display: block','justify-content: center','float: center','text-align: justify'],correct:1,why:'justify-content main axis par items ko align karta hai — center value darmiyan me le aati hai.'},
  {q:'Padding aur margin me farq kya hai?',options:['Koi farq nahi','Padding andar ki space, margin bahar ki space','Margin andar ki, padding bahar ki','Dono sirf text ke liye'],correct:1,why:'Padding element ke andar, margin element ke bahar space deta hai.'},
  {q:'Responsive design ke liye kya istemal hota hai?',options:['Media queries','Sirf fixed pixels','Table layout','Flash'],correct:0,why:'Media queries screen size ke hisab se alag styles lagati hain — yehi responsive ka base hai.'},
  {q:'Ye rule kya karega: h1 { font-size: 32px; }?',options:['Saare paragraphs 32px','Saare h1 headings 32px','Sirf pehla h1','Kuch nahi'],correct:1,why:'h1 selector page ke tamam h1 elements ko select karta hai.'}
 ],
 javascript:[
  {q:'const aur let me farq kya hai?',options:['Koi farq nahi','const dubara assign nahi ho sakta, let ho sakta hai','let fast hai','const sirf numbers ke liye'],correct:1,why:'const wali value fix rehti hai — bugs kam karta hai. Badalne wali value ke liye let.'},
  {q:'Button click par code chalane ke liye kya use hota hai?',options:['addEventListener','click()','onpress','listen()'],correct:0,why:"addEventListener('click', ...) button par click sunta hai aur function chalata hai."},
  {q:'document.querySelector("button") kya karta hai?',options:['Naya button banata hai','Pehla button element dhoondta hai','Button delete karta hai','Page reload karta hai'],correct:1,why:'querySelector CSS selector se pehla matching element return karta hai.'},
  {q:'Function kab chalti hai?',options:['Likhte hi foran','Jab usay call kiya jaye','Page load par hamesha','Kabhi nahi'],correct:1,why:'Function define karne se sirf tayyar hoti hai — chalti tab hai jab call ho.'},
  {q:'console.log() kis liye hai?',options:['User ko message dikhane','Developer console me debug message','Page ka title','Database save'],correct:1,why:'console.log debugging ke liye hai — values check karne ka sab se aasan tareeqa.'},
  {q:'arr = [10,20,30] me teesra item kaise access hoga?',options:['arr[3]','arr[2]','arr(3)','arr.third'],correct:1,why:'Indexing 0 se shuru hoti hai — teesra item index 2 par hai.'}
 ],
 react:[
  {q:'React me component kya hai?',options:['Ek CSS file','Reusable UI ka tukra (function)','Ek database','Ek server'],correct:1,why:'Component UI ka reusable hissa hai — ek function jo JSX return karta hai.'},
  {q:'Props ka matlab kya hai?',options:['Component ko di gayi inputs','Ek styling library','Ek hook','Ek error'],correct:0,why:'Props parent se child component ko data bhejne ka tareeqa hain.'},
  {q:'State badalne ke liye kya use hota hai?',options:['Direct variable assign','useState ka setter function','Props change','CSS'],correct:1,why:'State hamesha setter (jaise setCount) se update karo — taake React dobara render kare.'},
  {q:'JSX me JavaScript likhne ke liye kya use hota hai?',options:['{{ }}','{ }','[ ]','< >'],correct:1,why:'Curly braces { } ke andar JavaScript expressions likhe jate hain.'},
  {q:'useEffect kis liye hai?',options:['Styling ke liye','Side effects (data fetch, subscriptions) ke liye','Routing ke liye','Testing ke liye'],correct:1,why:'useEffect render ke baad chalne wale kaam (API calls, timers) ke liye hai.'},
  {q:'List render karte waqt key prop kyun zaroori hai?',options:['Styling ke liye','React ko items pehchanne me madad','Zaroori nahi, sirf convention','Speed ke liye'],correct:1,why:'Key se React samajhta hai kaunsa item badla — bina key ke list updates me bugs aate hain.'}
 ],
 node:[
  {q:'Node.js kya hai?',options:['Ek browser','Browser ke bahar JavaScript chalane ka runtime','Ek CSS framework','Ek database'],correct:1,why:'Node.js server par JavaScript chalata hai — isi se backend banta hai.'},
  {q:'Express kis liye istemal hota hai?',options:['Mobile apps','Node me routing aur APIs aasan banana','Game development','Video editing'],correct:1,why:'Express Node ka framework hai — routes, middleware aur APIs likhna aasan karta hai.'},
  {q:'API ka matlab kya hai?',options:['Ek design tool','Do softwares ke darmiyan baat-cheet ka tareeqa','Ek file type','Ek error'],correct:1,why:'API ek contract hai — frontend is ke zariye backend se data mangta/bhejta hai.'},
  {q:'GET aur POST me farq kya hai?',options:['Koi farq nahi','GET data mangta hai, POST data bhejta hai','POST fast hai','GET secure hai'],correct:1,why:'GET parhne ke liye, POST bhejne/banane ke liye — ye REST ka basic rule hai.'},
  {q:'Middleware kya hai?',options:['Ek database','Request aur response ke darmiyan chalne wala function','Ek UI component','Ek test'],correct:1,why:'Middleware request ko process karta hai (auth check, logging) phir agle handler ko bhejta hai.'},
  {q:'npm kis liye hai?',options:['Code likhne ka editor','JavaScript packages install/manage karne ka tool','Ek hosting service','Ek language'],correct:1,why:'npm se libraries (jaise express) install hoti hain — Node ecosystem ka package manager.'}
 ],
 fullstack:[
  {q:'Full stack developer kaun hota hai?',options:['Sirf design karne wala','Frontend + backend dono banane wala','Sirf database wala','Sirf tester'],correct:1,why:'Full stack UI se lekar server aur database tak poora system banata hai.'},
  {q:'Browser se database tak data ka safar kya hai?',options:['Browser → CSS → HTML','Browser → API → Server → Database','Database → Browser direct','Server → Browser → API'],correct:1,why:'User UI par action karta hai → frontend API call karta hai → server database se data leta/deta hai.'},
  {q:'Frontend aur backend ko kaun jorta hai?',options:['CSS','API','HTML tags','Fonts'],correct:1,why:'API dono ke darmiyan bridge hai — JSON me data aata-jata hai.'},
  {q:'Deployment ka matlab kya hai?',options:['Code likhna','Website ko live (internet par) karna','Bug fix karna','Design banana'],correct:1,why:'Deploy ka matlab apni site/app ko server (jaise Vercel) par live karna.'},
  {q:'Database me data kaise store hota hai?',options:['Sirf text files','Tables/collections me organized records','Browser me','Email me'],correct:1,why:'Database data ko tables (SQL) ya collections (MongoDB) me record ki surat me rakhta hai.'},
  {q:'Authentication kyun zaroori hai?',options:['Site fast karne ke liye','Sirf sahi users ko access dene ke liye','SEO ke liye','Design ke liye'],correct:1,why:'Auth (login/signup) ensure karta hai ke sensitive data sirf authorized users dekhen.'}
 ]
};
