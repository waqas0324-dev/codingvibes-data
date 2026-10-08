// Auto-split from main.tsx (refactor commit) — no logic changes.
export const interviewBank:Record<string,{q:string;a:string}[]>={
 html:[
  {q:'HTML kya hai aur is ka kaam kya hai?',a:'HTML (HyperText Markup Language) web pages ki structure banata hai. Ye content ko meaning deta hai — headings, paragraphs, links, images, forms. Design CSS ka kaam hai, behavior JavaScript ka.'},
  {q:'Semantic HTML kya hai? Example do.',a:'Semantic tags apna meaning batate hain — jaise header, nav, main, article, footer. In se screen readers aur search engines page ko behtar samajhte hain. div generic hai, semantic nahi.'},
  {q:'<!DOCTYPE html> kyun likhte hain?',a:'Ye browser ko batata hai ke document modern HTML5 hai, taake browser standards mode me page render kare na ke purane quirks mode me.'},
  {q:'Block aur inline elements me farq?',a:'Block elements (div, p, h1) poori line lete hain aur nayi line se shuru hote hain. Inline elements (span, a, strong) sirf jitni zaroorat ho utni jagah lete hain.'},
  {q:'Form validation ke liye HTML me kya options hain?',a:'required attribute, type="email"/"number", minlength/maxlength, min/max, pattern (regex). Ye browser-level validation hai — server par dobara check karna lazmi hai.'},
  {q:'Alt attribute kyun important hai?',a:'Alt image ka text alternative hai — screen readers ise parhte hain, aur image load na ho to ye nazar aata hai. SEO me bhi madad karta hai.'},
  {q:'<head> me kya hota hai?',a:'Metadata — title, meta tags (description, viewport, charset), CSS/JS ke links. Ye content page par nazar nahi aata.'},
  {q:'Absolute vs relative URL?',a:'Absolute poora address hota hai (https://...), relative current page ke hisab se (/about). Internal links ke liye relative behtar hai.'},
  {q:'Accessibility ke liye 3 zaroori cheezein?',a:'1) Har input ke saath label, 2) Images par meaningful alt text, 3) Logical heading order (h1 phir h2). Sab kuch keyboard se accessible hona chahiye.'},
  {q:'HTML me sab se common ghalti kya hai?',a:'Tags band na karna, har jagah div ka istemal (div-soup), alt text bhool jana, aur presentation ke liye table ya br ka ghalat istemal.'}
 ],
 css:[
  {q:'CSS specificity kya hai?',a:'Jab do rules takrayein to browser specificity se faisla karta hai: inline style > id > class > element. !important sab ko override karta hai — avoid karo.'},
  {q:'Box model samjhao.',a:'Har element ek box hai: content → padding → border → margin. By default width/height sirf content ki hoti hai; box-sizing: border-box se padding+border included ho jati hai.'},
  {q:'Flexbox vs Grid?',a:'Flexbox ek direction (row ya column) me layout ke liye hai, Grid do dimensions (rows + columns) ke liye. Nav aur flexible rows → Flexbox; page layout → Grid.'},
  {q:'position: absolute ka relative se kya talluq hai?',a:'Absolute element apne nearest positioned ancestor (relative/absolute/fixed) ke hisab se position hota hai. Koi positioned parent na ho to document ke hisab se.'},
  {q:'Responsive design kaise karte ho?',a:'Fluid units (%, rem), Flexbox/Grid, media queries (@media max-width), responsive images (max-width:100%), aur mobile-first approach.'},
  {q:'CSS variables kyun use karte hain?',a:'--main-color jaise variables se poori site ka theme ek jagah se control hota hai. Dark mode aur re-theming aasan ho jati hai.'},
  {q:'z-index kab kaam karta hai?',a:'Sirf positioned elements (relative/absolute/fixed/sticky) par. Bara z-index oopar render hota hai — stacking context ka khayal rakho.'},
  {q:'Pseudo-classes kya hain? Example?',a:':hover, :focus, :nth-child() jaise selectors jo element ki state par style lagate hain — bina extra class ke.'},
  {q:'CSS performance ka khayal kaise rakho?',a:'Animations me transform/opacity use karo (GPU), @import se bacho, unused CSS hatao, width/height animate karne se bacho.'},
  {q:'em vs rem?',a:'em parent ke font-size ke hisab se, rem root (html) ke hisab se. rem predictable hai — isi liye modern CSS me zyada use hota hai.'}
 ],
 javascript:[
  {q:'var, let, const me farq?',a:'var function-scoped aur hoisted hai (purana tareeqa). let block-scoped hai aur dubara assign ho sakta hai. const block-scoped hai, dubara assign nahi ho sakta. Aaj kal let/const use karo.'},
  {q:'Closure kya hai?',a:'Jab ek function apne outer scope ke variables ko yaad rakhe — chahe outer function khatam ho jaye. Counter aur private data ke liye istemal hota hai.'},
  {q:'== vs ===?',a:'== type convert karke compare karta hai ("5" == 5 true), === type bhi check karta hai ("5" === 5 false). Hamesha === use karo.'},
  {q:'Event delegation kya hai?',a:'Parent par ek listener lagana jo children ke events handle kare (bubbling se). Dynamic lists ke liye behtareen — har item par alag listener nahi lagana parta.'},
  {q:'Promise aur async/await?',a:'Promise future value ka wada hai (pending → fulfilled/rejected). async/await isay synchronous jaisa parhne laiq banata hai. Errors try/catch se handle karo.'},
  {q:'Hoisting kya hai?',a:'Declarations (var, function) scope ke top par uthaye jate hain — isi liye var ko pehle use kar sakte ho. let/const temporal dead zone me hote hain.'},
  {q:'"this" keyword kya hai?',a:'this us object ko refer karta hai jis ke context me function chal raha hai. Arrow functions me this outer scope se aata hai.'},
  {q:'map vs forEach?',a:'forEach sirf iterate karta hai (kuch return nahi karta), map nayi transformed array return karta hai. Data transform ke liye map use karo.'},
  {q:'Debounce kya hai?',a:'Bar bar hone wale events (typing, resize) ko control karna — function tab chalao jab event ruk jaye (masalan 300ms). Search inputs me lazmi hai.'},
  {q:'JavaScript me "falsy" values kaunsi hain?',a:'false, 0, "", null, undefined, NaN. if(value) me ye sab false hote hain.'}
 ],
 react:[
  {q:'React kya hai aur kyun use hota hai?',a:'UI banane ki JavaScript library — component-based. State change par sirf zaroori hissa dobara render hota hai (virtual DOM diffing), is liye fast aur maintainable.'},
  {q:'State vs Props?',a:'Props parent se aane wali read-only inputs hain. State component ka apna mutable data hai — setter se badlo to re-render hota hai.'},
  {q:'useEffect kab chalta hai?',a:'Render ke baad — side effects (API calls, subscriptions, timers) ke liye. Dependency array se control karo: [] sirf mount par, [x] x badle par.'},
  {q:'Key prop kyun zaroori hai?',a:'Lists me React key se items track karta hai — bina key ke re-order/add par ghalat updates ya performance issues aate hain.'},
  {q:'Controlled vs uncontrolled components?',a:'Controlled me input ki value React state me hoti hai (value + onChange). Uncontrolled me DOM khud handle karta hai (ref se parho). Forms me controlled behtar.'},
  {q:'Lifting state up kya hai?',a:'Jab do child components ko shared data chahiye to state common parent me rakho aur props se neeche bhejo.'},
  {q:'useMemo aur useCallback?',a:'useMemo expensive calculation ka result cache karta hai, useCallback function reference. Dono unnecessary re-renders rokte hain.'},
  {q:'Conditional rendering kaise karte ho?',a:'{condition && <Comp/>}, ternary {x ? <A/> : <B/>}, ya early return. JSX me if statement direct nahi likh sakte.'},
  {q:'React me forms ka best tareeqa?',a:'Controlled inputs + ek state object + submit par validation. Bade forms ke liye React Hook Form library.'},
  {q:'Custom hooks kya hain?',a:'use- se shuru hone wale functions jo hooks use karte hain — reusable logic (jaise useFetch) components me share karne ke liye.'}
 ],
 node:[
  {q:'Node.js kya hai?',a:'Chrome ke V8 engine par bana runtime jo JavaScript ko browser ke bahar (server par) chalata hai. Event-driven, non-blocking I/O — APIs ke liye fast.'},
  {q:'Express kya hai?',a:'Node ka minimalist framework — routing (app.get/post), middleware, request/response handling aasan banata hai. REST APIs ka standard.'},
  {q:'Middleware kya hai? Example do.',a:'Request → response ke darmiyan chalne wale functions. Example: auth check, logging, JSON parsing (express.json()). next() se agle handler par jata hai.'},
  {q:'REST API ke principles?',a:'Resources URLs par (GET /users), sahi HTTP methods (GET parho, POST banao, PUT/PATCH update, DELETE hatao), stateless requests, JSON responses, sahi status codes.'},
  {q:'Status codes 200, 201, 400, 404, 500?',a:'200 OK, 201 Created (nayi cheez bani), 400 Bad Request (client ki ghalti), 404 Not Found, 500 Server Error.'},
  {q:'Environment variables kyun?',a:'Secrets (API keys, DB passwords) code me hardcode nahi karte — .env file me rakhte hain taake GitHub par leak na hon.'},
  {q:'npm vs npx?',a:'npm packages install karta hai, npx bina install kiye package chalata hai (jaise npx create-react-app).'},
  {q:'Blocking vs non-blocking?',a:'Node single-threaded hai — blocking code sab rok deta hai. Non-blocking (async/promises) me Node wait kiye baghair agla kaam karta hai.'},
  {q:'CORS kya hai?',a:'Browser ki security jo ek domain ki site ko doosre domain ki API hit karne se rokti hai. Server par CORS headers/middleware se allow karte hain.'},
  {q:'API me validation kyun zaroori hai?',a:'Client se aaya data kabhi trust nahi karte — ghalat data database kharab ya hack kar sakta hai. Validation lazmi hai.'}
 ],
 fullstack:[
  {q:'Full stack project ka architecture samjhao.',a:'Frontend (React) → HTTP/API → Backend (Node/Express) → Database. Frontend UI dikhata hai, backend logic aur data handle karta hai.'},
  {q:'JWT authentication kaise kaam karta hai?',a:'Login par server signed token deta hai. Client har request me token bhejta hai (Authorization header). Server verify karke access deta hai.'},
  {q:'SQL vs NoSQL?',a:'SQL (PostgreSQL/MySQL): structured tables, relations, complex queries. NoSQL (MongoDB): flexible documents, fast iteration. Data shape se faisla karo.'},
  {q:'Deployment ka process kya hai?',a:'Code → GitHub → hosting (Vercel/Render) → env variables set → database connect → domain. CI/CD se har push par auto-deploy.'},
  {q:'Frontend-backend ko alag deploy kyun karte hain?',a:'Dono independent scale aur update hote hain — frontend Vercel par, backend Render/Railway par. API URL env variable me.'},
  {q:'API me pagination kyun?',a:'Hazaaron records ek saath bhejna slow hai — page/limit se thora thora data bhejo. Performance aur UX dono behtar.'},
  {q:'Caching kya hai?',a:'Bar bar chahiye data ko temporary store karna (memory/Redis) taake database har baar hit na ho — response fast.'},
  {q:'WebSockets vs HTTP?',a:'HTTP request-response hai (ek sawal, ek jawab). WebSocket persistent connection hai — real-time (chat, live updates) ke liye.'},
  {q:'Monolith vs microservices?',a:'Monolith ek hi app hai (shuru ke liye best). Microservices chhoti independent services hain (scale par). Beginners monolith se shuru karein.'},
  {q:'Production me sab se common ghaltiyan?',a:'Secrets code me hardcode karna, validation na karna, proper logging na hona, aur bina testing ke deploy karna.'}
 ]
};
export const cheatSheetBank:Record<string,{section:string;items:{label:string;code:string}[]}[]>={
 html:[
  {section:'Document Structure',items:[
   {label:'Basic page',code:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Title</title>\n</head>\n<body>\n  <!-- content -->\n</body>\n</html>'},
   {label:'Semantic layout',code:'<header>...</header>\n<nav>...</nav>\n<main>\n  <section>...</section>\n  <article>...</article>\n</main>\n<footer>...</footer>'}
  ]},
  {section:'Links & Images',items:[
   {label:'Link',code:'<a href="/about">About</a>'},
   {label:'Image',code:'<img src="pic.jpg" alt="Description">'}
  ]},
  {section:'Lists & Tables',items:[
   {label:'Lists',code:'<ul>\n  <li>Item</li>\n</ul>\n<ol>\n  <li>First</li>\n</ol>'},
   {label:'Table',code:'<table>\n  <tr><th>Name</th></tr>\n  <tr><td>Ali</td></tr>\n</table>'}
  ]},
  {section:'Forms',items:[
   {label:'Form',code:'<form>\n  <label for="email">Email</label>\n  <input id="email" type="email" required>\n  <button>Join</button>\n</form>'},
   {label:'Input types',code:'<input type="text">\n<input type="email">\n<input type="password">\n<input type="number">'}
  ]}
 ],
 css:[
  {section:'Selectors',items:[
   {label:'Basics',code:'.card { }   /* class */\n#main { }    /* id */\ndiv p { }    /* descendant */\na:hover { }  /* pseudo-class */'},
   {label:'Specificity',code:'/* inline > id > class > element */\n#nav .link { color: red; }'}
  ]},
  {section:'Box Model',items:[
   {label:'Spacing',code:'.box {\n  margin: 16px;   /* bahar */\n  padding: 12px;  /* andar */\n  border: 1px solid #ccc;\n}'},
   {label:'box-sizing',code:'* { box-sizing: border-box; }'}
  ]},
  {section:'Flexbox',items:[
   {label:'Center anything',code:'.wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}'},
   {label:'Row with gap',code:'.row {\n  display: flex;\n  gap: 12px;\n}'}
  ]},
  {section:'Grid',items:[
   {label:'2 columns',code:'.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}'}
  ]},
  {section:'Responsive',items:[
   {label:'Media query',code:'@media (max-width: 720px) {\n  .grid { grid-template-columns: 1fr; }\n}'}
  ]}
 ],
 javascript:[
  {section:'Variables',items:[
   {label:'Declare',code:'const name = "Ali";\nlet age = 20;\n// const = fixed, let = changeable'},
   {label:'Template string',code:'const msg = `Hello ${name}`;'}
  ]},
  {section:'Functions',items:[
   {label:'Arrow function',code:'const add = (a, b) => a + b;\nadd(2, 3); // 5'}
  ]},
  {section:'DOM',items:[
   {label:'Select',code:'const btn = document.querySelector("button");\nbtn.textContent = "Clicked!";'},
   {label:'Create',code:'const el = document.createElement("p");\nel.textContent = "Hi";\ndocument.body.appendChild(el);'}
  ]},
  {section:'Events',items:[
   {label:'Click',code:'btn.addEventListener("click", () => {\n  console.log("clicked");\n});'}
  ]},
  {section:'Async',items:[
   {label:'fetch',code:'const res = await fetch("/api/data");\nconst data = await res.json();'},
   {label:'async/await',code:'async function load() {\n  try {\n    const r = await fetch(url);\n  } catch (e) {\n    console.error(e);\n  }\n}'}
  ]}
 ],
 react:[
  {section:'Components',items:[
   {label:'Function component',code:'function Welcome({ name }) {\n  return <h2>Hello, {name}</h2>;\n}'},
   {label:'Props',code:'<Welcome name="Ali" />'}
  ]},
  {section:'State',items:[
   {label:'useState',code:'const [count, setCount] = useState(0);\n<button onClick={() => setCount(count + 1)}>\n  {count}\n</button>'}
  ]},
  {section:'Effects',items:[
   {label:'useEffect',code:'useEffect(() => {\n  // mount par chalta hai\n  return () => { /* cleanup */ };\n}, []);'}
  ]},
  {section:'Lists & Keys',items:[
   {label:'Render list',code:'{items.map(item => (\n  <li key={item.id}>{item.name}</li>\n))}'}
  ]},
  {section:'Conditional',items:[
   {label:'Show/hide',code:'{isOpen && <Modal />}\n{loading ? <Spinner/> : <Content/>}'}
  ]}
 ],
 node:[
  {section:'Server',items:[
   {label:'Express app',code:'import express from "express";\nconst app = express();\napp.listen(3000);'}
  ]},
  {section:'Routing',items:[
   {label:'Routes',code:'app.get("/users", (req, res) => {\n  res.json(users);\n});\napp.post("/users", (req, res) => {\n  res.status(201).json(newUser);\n});'}
  ]},
  {section:'Middleware',items:[
   {label:'JSON + logger',code:'app.use(express.json());\napp.use((req, res, next) => {\n  console.log(req.method, req.path);\n  next();\n});'}
  ]},
  {section:'Env',items:[
   {label:'Variables',code:'// .env file:\nPORT=3000\nDB_URL=...\n\n// code:\nprocess.env.PORT'}
  ]}
 ],
 fullstack:[
  {section:'API Flow',items:[
   {label:'Frontend call',code:'const res = await fetch("/api/projects");\nconst projects = await res.json();'},
   {label:'Backend route',code:'app.get("/api/projects", async (req, res) => {\n  const rows = await db.query("SELECT * FROM projects");\n  res.json(rows);\n});'}
  ]},
  {section:'Auth',items:[
   {label:'Send token',code:'fetch("/api/me", {\n  headers: { Authorization: "Bearer " + token }\n});'}
  ]},
  {section:'Deploy Checklist',items:[
   {label:'Go live',code:'1. git push GitHub\n2. Vercel/Render connect\n3. Env variables set\n4. Database connect\n5. Domain attach'}
  ]}
 ]
};
