export const reactDeepLessons:Record<number,any>=[
  {
    "title": "React mental model",
    "outcomes": [
      "Samjho React kya hai: UI banane ki JavaScript library.",
      "Samjho poori screen ko chhote reusable components me kaise baanta jata hai.",
      "Samjho declarative soch: state badlo, React screen khud update kar dega."
    ],
    "concept": "React ek JavaScript library hai jo website ke screen parts (UI) banane me madad karti hai. React ka core idea simple hai: poori screen ko chhote-chhote components me baant do, jaise LEGO ke blocks. Har component ek kaam karta hai, aur React in blocks ko jor kar poori screen bana deta hai. Tum sirf data (state) batao, screen update karna React ka kaam hai.",
    "why": "Jab tum component-wise sochte ho to badi websites manage karna asaan ho jata hai. Ek jagah change karo, wo har jagah update ho jata hai. Aur bug aaye to pata hota hai wo kis block me hai.",
    "syntax": "UI = f(state) — state badlo, React screen dobara bana dega",
    "examples": [
      [
        "React ka core idea",
        "const count = 3;\n// Screen pe: 'Aap ke paas 3 messages hain'\n// count = 4 hua to React khud screen update kar dega\n// Tum ne screen ko haath nahi lagaya, sirf number badla"
      ],
      [
        "Components LEGO blocks ki tarah",
        "function Header() {\n  return <h1>Meri Website</h1>;\n}\n\nfunction Page() {\n  return <Header />;\n}\n// Page ne Header block ko use kiya"
      ]
    ],
    "explain": [
      "React library hai, poora framework nahi — ye sirf UI ka hissa handle karti hai.",
      "Component UI ka chhota reusable tukda hai, jaise ek button ya ek card.",
      "Tum state describe karte ho, React screen update karta hai — isay declarative approach kehte hain."
    ],
    "language": "React",
    "mistake": "React ko normal JavaScript ki tarah sochna aur har cheez ko manually update karne ki koshish karna. React me tum screen ko haath nahi lagate, sirf state badalte ho — screen React khud update karta hai.",
    "practice": "Paper pe apni favorite website ke 4-5 components boxes me banao: header, button, card, list waghera. Phir socho kon sa box dobara use ho sakta hai.",
    "check": [
      "React me screen update karne ka sahi tareeqa kya hai?",
      "Component ko simple lafzon me kya kehte hain?",
      "React library hai ya full framework?"
    ],
    "answer": "state badlo, React screen khud update karega; UI ka reusable tukda; library"
  },
  {
    "title": "Vite project setup",
    "outcomes": [
      "Vite se naya React project banao.",
      "Project ki main files (main.jsx, App.jsx) pehchano.",
      "Dev server chalao aur browser me result dekho."
    ],
    "concept": "Vite ek fast tool hai jo React project ka ready-made setup bana deta hai. Socho jaise khaana banane se pehle saari cheezein kaat kar ready mil jayein — Vite tumhein wohi ready setup deta hai. Ek command chalao, project ban jata hai. Phir dev server start karo aur browser me apni site live dekho — code badlo, result foran dikhega.",
    "why": "Khud se saari setting karna beginner ke liye mushkil aur time waste hai. Vite se tum seedha React seekhne pe focus kar sakte ho, setup ki tension nahi rehti.",
    "syntax": "npm create vite@latest my-app → cd my-app → npm install → npm run dev",
    "examples": [
      [
        "Naya project banana",
        "npm create vite@latest my-first-app\ncd my-first-app\nnpm install\nnpm run dev\n// Browser me http://localhost:5173 kholo"
      ],
      [
        "Project ki important files",
        "main.jsx  → React ko browser se jorta hai\nApp.jsx   → tumhara pehla component yahin hai\nindex.html → page ka khaaka, React yahin lagta hai"
      ]
    ],
    "explain": [
      "npm create vite@latest project ka khaaka (template) bana deta hai.",
      "npm install zaroori packages download karta hai — ye step bhoolna mat.",
      "npm run dev development server start karta hai, code badalne pe browser khud refresh hota hai."
    ],
    "language": "React",
    "mistake": "npm install kiye baghair npm run dev chalana — phir 'module not found' errors aate hain. Order yaad rakho: pehle install, phir dev.",
    "practice": "Apne computer pe ek naya Vite + React project banao, dev server chalao, aur App.jsx me apna naam likh kar browser me dekho.",
    "check": [
      "Naya React project banane ki pehli command kaun si hai?",
      "npm install kis liye hota hai?",
      "Tumhara pehla component kis file me hota hai?"
    ],
    "answer": "npm create vite@latest; zaroori packages download karne ke liye; App.jsx"
  },
  {
    "title": "Components & JSX",
    "outcomes": [
      "Function component likho jo JSX return kare.",
      "JSX me HTML jaisa code likho aur {curly braces} se JavaScript mix karo.",
      "Component ko <Name /> likh kar dobara use karo."
    ],
    "concept": "Component ek chhota function hai jo screen ka ek hissa return karta hai. JSX React ka special tareeqa hai: tum HTML jaisa code JavaScript ke andar likhte ho, aur { } ke andar JavaScript chala sakte ho. Yaad rakho: component ka naam hamesha capital letter se shuru hota hai, jaise Button ya Header — warna React usay HTML tag samjhega.",
    "why": "Components se code repeat nahi hota. Ek Button component banao aur poori site me 50 jagah use karo. Design change karna ho to ek jagah karo, sab jagah update.",
    "syntax": "function Name() { return <h1>Hello</h1>; } → use: <Name />",
    "examples": [
      [
        "Pehla component",
        "function Welcome() {\n  return <h1>Assalam-o-Alaikum!</h1>;\n}"
      ],
      [
        "JSX me JavaScript mix karna",
        "function Greeting() {\n  const name = 'Waqas';\n  return <h1>Hello, {name}!</h1>;\n}\n// {name} ki jagah Waqas print hoga"
      ],
      [
        "Component dobara use karna",
        "function App() {\n  return (\n    <div>\n      <Welcome />\n      <Welcome />\n    </div>\n  );\n}"
      ]
    ],
    "explain": [
      "Component ka naam capital letter se shuru hota hai, warna React usay HTML tag samjhega.",
      "JSX me { } ke andar koi bhi JavaScript expression chal sakta hai.",
      "JSX ko ek parent element me wrap karna zaroori hai — div ya khaali <> </>."
    ],
    "language": "React",
    "mistake": "Component ka naam chhote letter se likhna, jaise <welcome />. React isay ignore kar dega. Hamesha capital likho: <Welcome />.",
    "practice": "Ek Profile component banao jo tumhara naam aur ek line ki bio dikhaye. Phir App me usay 3 baar use karo.",
    "check": [
      "Component ka naam kis letter se shuru hota hai?",
      "JSX me JavaScript likhne ke liye kya use hota hai?",
      "Kya ek component do alag elements baghair wrapper ke return kar sakta hai?"
    ],
    "answer": "capital letter; curly braces { }; nahi, ek parent wrapper zaroori hai"
  },
  {
    "title": "Props",
    "outcomes": [
      "Props se parent component se child ko data bhejo.",
      "Props ko function ke parameter se read karo.",
      "Ek hi component ko different props de kar different result banao."
    ],
    "concept": "Props component ko di jane wali settings hain — jaise TV ka remote: same TV, different button dabao, different result. Parent child ko props bhejta hai: <Welcome name=\"Ali\" />. Child function me props parameter se ye values read karta hai. Props hamesha parent se child ki taraf jate hain, ulta kabhi nahi.",
    "why": "Props ke baghair har alag data ke liye alag component banana parega. Props se ek hi component hazaron different cheezein dikha sakta hai — jaise ek ProductCard hazaron products.",
    "syntax": "<Welcome name=\"Ali\" /> → function Welcome(props) { return <h1>{props.name}</h1>; }",
    "examples": [
      [
        "Props bhejna aur read karna",
        "function Welcome(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}\n\n<Welcome name=\"Ali\" />\n<Welcome name=\"Sara\" />\n// Pehla 'Hello, Ali!', dusra 'Hello, Sara!'"
      ],
      [
        "Destructuring shortcut",
        "function Welcome({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n// props.name ki jagah seedha { name }"
      ],
      [
        "Number aur boolean props",
        "<ProductCard price={500} inStock={true} />\n// String quotes me, baqi sab curly braces me"
      ]
    ],
    "explain": [
      "Props HTML attributes ki tarah likhe jate hain.",
      "String quotes me likho, numbers aur true/false curly braces me.",
      "Props read-only hain — child component unhein change nahi kar sakta."
    ],
    "language": "React",
    "mistake": "Props ko child component ke andar change karne ki koshish karna. Props read-only hote hain. Value change karni hai to parent me state use karo.",
    "practice": "Ek ProductCard component banao jo name aur price props le. App me 3 different products inhi props ke saath dikhao.",
    "check": [
      "Props kis direction me travel karte hain?",
      "Number prop bhejne ka sahi tareeqa kya hai?",
      "Kya child component props change kar sakta hai?"
    ],
    "answer": "parent se child ki taraf; curly braces me: price={500}; nahi, props read-only hain"
  },
  {
    "title": "State",
    "outcomes": [
      "useState se component me yaad rakhne wali value banao.",
      "Setter function se state update karo.",
      "Samjho state change pe React dobara render karta hai."
    ],
    "concept": "State component ki yaaddasht hai — wo value jo waqt ke saath badalti hai, jaise counter ka number ya light ka on/off. useState ek hook hai: const [count, setCount] = useState(0). count current value hai, setCount usay badalne ka button. Jab setCount chalta hai, React component ko dobara bana kar screen update kar deta hai.",
    "why": "Static screen to HTML bhi bana deta hai. Website ko zinda state banati hai — clicks, forms, toggles, sab state pe chalte hain. State ke baghair React ka koi faida nahi.",
    "syntax": "const [value, setValue] = useState(initialValue);",
    "examples": [
      [
        "Counter",
        "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n    </div>\n  );\n}"
      ],
      [
        "Toggle on/off",
        "function Light() {\n  const [isOn, setIsOn] = useState(false);\n  return (\n    <button onClick={() => setIsOn(!isOn)}>\n      {isOn ? 'ON' : 'OFF'}\n    </button>\n  );\n}"
      ]
    ],
    "explain": [
      "useState ek array return karta hai: pehli cheez current value, dusri update function.",
      "State ko direct change mat karo (count = 5 galat hai) — hamesha setter use karo.",
      "Setter chalne pe React component dobara render karta hai aur screen update ho jati hai."
    ],
    "language": "React",
    "mistake": "State variable ko direct assign karna: count = count + 1. Screen update nahi hogi! Hamesha setter use karo: setCount(count + 1).",
    "practice": "Ek LikeButton banao — click pe likes barhein aur button ka text 'Liked' ho jaye. Dobara click pe wapas normal ho jaye.",
    "check": [
      "useState kya return karta hai?",
      "State update karne ka sahi tareeqa kya hai?",
      "State change hone pe kya hota hai?"
    ],
    "answer": "array: [value, setter function]; setter function se, jaise setCount; React component dobara render karta hai"
  },
  {
    "title": "Events",
    "outcomes": [
      "onClick jaise event handlers lagao.",
      "Event handler function likho aur sahi tareeqe se attach karo.",
      "Event object se useful info (jaise input ki value) nikalo."
    ],
    "concept": "Event user ka action hai — click, typing, mouse move. React me tum element pe onClick={handleClick} likhte ho. Do cheezein dhyaan rakho: naam camelCase hai (HTML wala onclick nahi), aur function ka naam dete ho, usay call nahi karte. Jab user click karega, React tumhara function khud chala dega.",
    "why": "Baghair events ke website sirf dekhne ki cheez hai, use karne ki nahi. Buttons, forms, menus — har interaction events pe chalta hai.",
    "syntax": "<button onClick={handleClick}>Click</button>",
    "examples": [
      [
        "Click handler",
        "function handleClick() {\n  alert('Button dabaya gaya!');\n}\n\n<button onClick={handleClick}>Dabao</button>\n// Naam diya, call nahi ki — brackets nahi lagaye"
      ],
      [
        "State ke saath event",
        "function Typing() {\n  const [text, setText] = useState('');\n  return (\n    <div>\n      <input\n        value={text}\n        onChange={(e) => setText(e.target.value)}\n      />\n      <p>Tum ne likha: {text}</p>\n    </div>\n  );\n}"
      ]
    ],
    "explain": [
      "onClick me function ka reference do, call mat karo — {handleClick} sahi hai, {handleClick()} galat.",
      "onChange input me har typing pe chalta hai.",
      "e.target.value se input ki current value milti hai."
    ],
    "language": "React",
    "mistake": "onClick={handleClick()} likhna — brackets lagane se function page load hote hi chal jayega, click ka wait nahi karega. Brackets hatao: onClick={handleClick}.",
    "practice": "Ek button banao jo click pe random emoji dikhaye. Hint: emojis ki ek array banao aur Math.random() se ek pick karo.",
    "check": [
      "React me click event ka naam kya hai — onclick ya onClick?",
      "onClick={handleClick()} me kya masla hai?",
      "Input ki current value event se kaise milti hai?"
    ],
    "answer": "onClick (camelCase); function foran chal jayega, reference dena tha; e.target.value se"
  },
  {
    "title": "Conditional rendering",
    "outcomes": [
      "if aur ternary se different conditions pe different UI dikhao.",
      "&& operator se short conditional rendering karo.",
      "Login/logout jaisi real situations handle karo."
    ],
    "concept": "Conditional rendering ka matlab hai situation ke hisaab se alag screen dikhana. Jaise darwaze pe guard: ID hai to andar, nahi to bahar. React me ye normal JavaScript se hota hai: {isLoggedIn ? <Home /> : <Login />} ya {isNew && <Badge />}. Is me koi special React magic nahi — sirf JavaScript logic JSX ke andar.",
    "why": "Har real app me ye chahiye hota hai: login ke baad dashboard, loading ke waqt spinner, error pe message. Ye sab conditional rendering hai.",
    "syntax": "{condition ? <A /> : <B />} · {condition && <A />}",
    "examples": [
      [
        "Ternary operator",
        "function Greeting({ isLoggedIn }) {\n  return isLoggedIn\n    ? <h1>Welcome back!</h1>\n    : <h1>Please log in</h1>;\n}"
      ],
      [
        "&& shortcut",
        "function Cart({ items }) {\n  return (\n    <div>\n      <h2>Cart</h2>\n      {items.length > 0 && <p>{items.length} items hain</p>}\n    </div>\n  );\n}"
      ]
    ],
    "explain": [
      "? : dono me se ek cheez dikhata hai — if/else jaisa.",
      "&& sirf tab dikhata hai jab condition true ho.",
      "Logic complex ho to JSX se pehle normal if statement bhi likh sakte ho."
    ],
    "language": "React",
    "mistake": "&& ke saath 0 ya khaali value use karna. {count && <p/>} me agar count 0 hua to screen pe '0' print ho jayega! Safe tareeqa: {count > 0 && <p/>}.",
    "practice": "Ek toggle banao: button dabao to 'Dark mode ON' wala box dikhe, dobara dabao to ghaib ho jaye.",
    "check": [
      "Ternary operator kab use hota hai?",
      "&& operator ka JSX me kya kaam hai?",
      "{count && <p>Hello</p>} me count 0 ho to screen pe kya dikhega?"
    ],
    "answer": "do me se ek UI chunne ke liye; condition true ho to hi UI dikhao; screen pe 0 print ho jayega"
  },
  {
    "title": "Lists & keys",
    "outcomes": [
      "Array ko .map() se list me convert karo.",
      "Har item ko unique key do.",
      "Samjho key React ko items pehchanne me kyun madad karti hai."
    ],
    "concept": "React me list banane ke liye array pe .map() chalate ho — har item ek JSX element ban jata hai. Lekin React ko har item ki pehchaan chahiye hoti hai, is liye key prop dete ho — jaise class me har bache ka roll number. Key unique honi chahiye, warna React confuse ho jayega ke kon sa item badla hai.",
    "why": "Real websites lists se bhari hain: products, messages, comments, todos. Keys ke baghair list update hone pe ajeeb bugs aate hain — galat item delete ho jata hai ya galat update hota hai.",
    "syntax": "{items.map(item => <li key={item.id}>{item.name}</li>)}",
    "examples": [
      [
        "Simple list",
        "const fruits = ['Apple', 'Mango', 'Banana'];\n\n<ul>\n  {fruits.map((fruit) => (\n    <li key={fruit}>{fruit}</li>\n  ))}\n</ul>"
      ],
      [
        "Objects ki list",
        "const users = [\n  { id: 1, name: 'Ali' },\n  { id: 2, name: 'Sara' }\n];\n\n{users.map((u) => (\n  <p key={u.id}>{u.name}</p>\n))}"
      ]
    ],
    "explain": [
      "key hamesha stable aur unique honi chahiye — database wali id sab se best hai.",
      "key sirf React ke internal use ke liye hai, ye props me nahi milti.",
      "map ke andar JSX ko brackets me wrap karna mat bhoolo."
    ],
    "language": "React",
    "mistake": "key me array ka index use karna, jaise key={index}. List me items add ya remove hone pe React galat items update kar dega. Hamesha unique id use karo.",
    "practice": "Apne 5 favorite khaano ki array banao aur unhein numbered list me dikhao — har item ko sahi unique key do.",
    "check": [
      "Array ko list me badalne ke liye kaun sa method use hota hai?",
      "Key kyun zaroori hai?",
      "Key ke liye index kyun safe nahi hai?"
    ],
    "answer": ".map(); taake React har item ko pehchan sake; items add/remove hone pe React confuse ho jata hai"
  },
  {
    "title": "Forms",
    "outcomes": [
      "Controlled inputs banao (value + onChange + state).",
      "Form submit handle karo aur page reload roko.",
      "Multiple inputs wala form manage karo."
    ],
    "concept": "React me form ka controlled tareeqa hai: input ki value state me hoti hai, aur har typing pe onChange se state update hoti hai. Matlab input screen pe jo dikhata hai, wo hamesha state ke barabar hota hai — control React ke paas hai. Submit pe e.preventDefault() lagana zaroori hai, warna page reload ho jayega aur saara likha hua data ur jayega.",
    "why": "Login, signup, search, checkout — har form isi pattern pe chalta hai. Ye React ka sab se zyada use hone wala real-world skill hai.",
    "syntax": "<input value={name} onChange={(e) => setName(e.target.value)} />",
    "examples": [
      [
        "Controlled input",
        "function NameForm() {\n  const [name, setName] = useState('');\n  return (\n    <input\n      value={name}\n      onChange={(e) => setName(e.target.value)}\n      placeholder=\"Tumhara naam\"\n    />\n  );\n}"
      ],
      [
        "Submit handle karna",
        "function Signup() {\n  const [name, setName] = useState('');\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    alert('Hello, ' + name);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={name} onChange={(e) => setName(e.target.value)} />\n      <button type=\"submit\">Bhejo</button>\n    </form>\n  );\n}"
      ]
    ],
    "explain": [
      "value={state} + onChange={setter} — in dono ka combination hi controlled input hai.",
      "e.preventDefault() form ka default page-reload rokta hai.",
      "Har input ki apni state hoti hai, ya sab ek object wali state me."
    ],
    "language": "React",
    "mistake": "Sirf value dena aur onChange bhool jana. Input lock ho jayega — us me type hi nahi hoga. Dono hamesha saath chahiye: value aur onChange.",
    "practice": "Ek simple signup form banao: naam aur email ke inputs. Submit pe dono values alert me dikhao — page reload nahi hona chahiye.",
    "check": [
      "Controlled input ke 2 lazmi hisse kaun se hain?",
      "e.preventDefault() kyun lagate hain?",
      "Sirf value dene se input me kya hoga?"
    ],
    "answer": "value={state} aur onChange; page reload rokne ke liye; type nahi hoga, input lock ho jayega"
  },
  {
    "title": "Effects",
    "outcomes": [
      "useEffect se side effects (jaise title change, timer) chalao.",
      "Dependency array samjho: effect kab dobara chalega.",
      "Cleanup function se timer aur listeners saaf karo."
    ],
    "concept": "Component ka main kaam screen banana hai. Baqi kaam — jaise page ka title badalna, timer lagana, ya data mangwana — side effects kehlate hain. useEffect inhi kaamo ke liye hai: useEffect(() => { ... }, [count]). Dusra parameter (dependency array) batata hai ke effect kab dobara chale. Khali array [] ka matlab hai: sirf ek baar, shuru me.",
    "why": "Real apps sirf screen nahi hoti — timers, page titles, saved data sab effects me hote hain. Galat likhe effects se app slow ya buggy ho jati hai.",
    "syntax": "useEffect(() => { /* kaam */ return () => { /* safai */ }; }, [deps]);",
    "examples": [
      [
        "Page title update karna",
        "useEffect(() => {\n  document.title = 'Count: ' + count;\n}, [count]);\n// count badle ga to title bhi badle ga"
      ],
      [
        "Sirf ek baar chalne wala effect",
        "useEffect(() => {\n  console.log('Component screen pe aaya!');\n}, []);\n// Khali array = sirf pehli baar"
      ],
      [
        "Cleanup ke saath timer",
        "useEffect(() => {\n  const timer = setInterval(() => {\n    setSec((s) => s + 1);\n  }, 1000);\n  return () => clearInterval(timer);\n}, []);\n// Component hate ga to timer bhi band"
      ]
    ],
    "explain": [
      "Pehla argument function hai (effect), dusra dependency array.",
      "[] ka matlab sirf ek baar. [count] ka matlab har baar jab count badle.",
      "Return ki gayi function cleanup hai — component hatne pe chalti hai."
    ],
    "language": "React",
    "mistake": "Dependency array bhool jana. Phir effect har render pe chalega aur infinite loop lag sakta hai. Hamesha soch kar deps likho.",
    "practice": "Ek timer banao jo har second me 1 add kare (useEffect + setInterval + cleanup). Ek button se timer roko aur chalao.",
    "check": [
      "useEffect ke 2 arguments kaun se hain?",
      "Khali dependency array [] ka matlab kya hai?",
      "Cleanup function kab chalti hai?"
    ],
    "answer": "effect function aur dependency array; effect sirf ek baar chalega; component hatne ya effect dobara chalne se pehle"
  },
  {
    "title": "Fetching APIs",
    "outcomes": [
      "fetch se internet se data mangwao.",
      "Loading aur error states dikhao.",
      "Aaye hue data ko list me render karo."
    ],
    "concept": "API internet pe mojood data ki dukaan hai — tum fetch() se request bhejte ho, wo JSON data bhejti hai. Data aane me time lagta hai, is liye 3 states hoti hain: loading (wait karo), error (kuch garbar hui), success (data aa gaya). Teenon states banana hi asli skill hai — sirf success case banana aadha kaam hai.",
    "why": "Har real app ka data kahin na kahin se aata hai: products, posts, weather. API fetching ke baghair app khaali dabba hai.",
    "syntax": "fetch(url).then(res => res.json()).then(data => setData(data));",
    "examples": [
      [
        "Data mangwana",
        "useEffect(() => {\n  fetch('https://jsonplaceholder.typicode.com/users')\n    .then((res) => res.json())\n    .then((data) => {\n      setUsers(data);\n      setLoading(false);\n    });\n}, []);"
      ],
      [
        "Loading aur error states",
        "if (loading) return <p>Loading...</p>;\nif (error) return <p>Kuch garbar hui!</p>;\n\nreturn (\n  <ul>\n    {users.map((u) => (\n      <li key={u.id}>{u.name}</li>\n    ))}\n  </ul>\n);\n// Teenon haalat cover: loading, error, data"
      ]
    ],
    "explain": [
      "fetch promise return karta hai — pehle response milta hai, phir .json() se data.",
      "useEffect me khali [] ke saath fetch karo taake data sirf ek baar aaye.",
      "Render me teenon haalat handle karo: loading, error, aur data."
    ],
    "language": "React",
    "mistake": "Sirf success case banana aur loading/error bhool jana. Slow internet pe user khaali screen dekhega aur confuse hoga ke app chal rahi hai ya nahi.",
    "practice": "JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts) se posts lao aur pehle 5 ke titles list me dikhao — loading text ke saath.",
    "check": [
      "fetch se data lene ke steps kya hain?",
      "API call ke waqt kaun si 3 states banana zaroori hain?",
      "fetch ko useEffect me kyun rakhte hain?"
    ],
    "answer": "request bhejo, phir .json() se data nikalo; loading, error, success; taake sirf ek baar chale, har render pe nahi"
  },
  {
    "title": "Custom hooks",
    "outcomes": [
      "Apna custom hook banao (use se shuru hone wala function).",
      "Repeat hone wali logic ko hook me daal kar dobara use karo.",
      "Samjho hook sirf logic share karta hai, UI nahi."
    ],
    "concept": "Custom hook ek aisa function hai jo React ke hooks (useState, useEffect) use karta hai, aur is ka naam use se shuru hota hai — jaise useCounter(). Socho jaise kitchen me masala dabba: common cheezein ek jagah rakhi hain, har dish me thoda nikaal lo. Jo logic 2-3 components me repeat ho raha hai, usay ek hook me daal do.",
    "why": "Repeat code bugs ka ghar hai. Custom hooks se logic ek jagah rehta hai — fix ek jagah karo, sab jagah theek ho jata hai.",
    "syntax": "function useCounter() { const [c, setC] = useState(0); return [c, setC]; }",
    "examples": [
      [
        "useCounter hook",
        "function useCounter() {\n  const [count, setCount] = useState(0);\n  const increment = () => setCount(count + 1);\n  return { count, increment };\n}\n\nfunction App() {\n  const { count, increment } = useCounter();\n  return <button onClick={increment}>{count}</button>;\n}"
      ],
      [
        "useLocalStorage hook",
        "function useLocalStorage(key, initial) {\n  const [value, setValue] = useState(initial);\n  useEffect(() => {\n    localStorage.setItem(key, value);\n  }, [key, value]);\n  return [value, setValue];\n}\n// Value badle gi to browser me save ho jayegi"
      ]
    ],
    "explain": [
      "Naam hamesha use se shuru ho — ye React ka rule hai.",
      "Hook ke andar useState aur useEffect use kar sakte ho.",
      "Har component jo hook use karta hai, us ki apni alag state hoti hai — shared nahi hoti."
    ],
    "language": "React",
    "mistake": "Hook ko if ke andar ya loop me call karna. Hooks hamesha component ke top level pe hone chahiye, warna React hooks ka order bhool jata hai aur app toot jati hai.",
    "practice": "Ek useToggle hook banao jo [isOn, toggle] return kare. Phir isay 2 alag components me use karke dekho ke dono ki state alag hai.",
    "check": [
      "Custom hook ka naam kis se shuru hota hai?",
      "Hooks ko if ya loop ke andar kyun nahi call karte?",
      "Do components ek hi hook use karein to state shared hoti hai?"
    ],
    "answer": "'use' se; React hooks ka order track karta hai, toot jayega; nahi, har component ki apni alag state hoti hai"
  },
  {
    "title": "Routing",
    "outcomes": [
      "react-router se multiple pages wali app banao.",
      "Routes aur Link se navigation lagao.",
      "URL parameters se dynamic pages banao."
    ],
    "concept": "React by default single page hai — routing se aisa lagta hai jaise multiple pages hain. react-router URL ko dekhta hai aur us hisaab se component dikhata hai: / pe Home, /about pe About. <Link> se page reload ke baghair navigate hota hai, is liye sab kuch fast rehta hai.",
    "why": "Real websites me pages hote hain: home, about, product details. Routing ke baghair sab kuch ek hi screen pe thonsna parega, jo bekaar lagega.",
    "syntax": "<Route path=\"/about\" element={<About />} /> · <Link to=\"/about\">About</Link>",
    "examples": [
      [
        "Basic routes",
        "import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Link to=\"/\">Home</Link>\n      <Link to=\"/about\">About</Link>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}"
      ],
      [
        "Dynamic route",
        "<Route path=\"/product/:id\" element={<Product />} />\n\nfunction Product() {\n  const { id } = useParams();\n  return <h1>Product {id}</h1>;\n}\n// /product/5 kholo to id = 5"
      ]
    ],
    "explain": [
      "BrowserRouter poori app ko wrap karta hai.",
      "Link normal <a> jaisa hai lekin page reload nahi karta.",
      ":id URL ka dynamic hissa hai — useParams() se is ki value milti hai."
    ],
    "language": "React",
    "mistake": "Navigation ke liye <a href=\"/about\"> use karna. Poora page reload ho jayega aur React app dobara load hogi. Hamesha <Link> use karo.",
    "practice": "3 pages wali app banao: Home, About, Contact. Navbar me Link lagao aur har page pe alag heading dikhao.",
    "check": [
      "Page reload ke baghair navigate karne ke liye kya use hota hai?",
      "URL ka dynamic hissa (jaise /product/5) kaise define hota hai?",
      "useParams() kya deta hai?"
    ],
    "answer": "<Link>; colon se, jaise :id; URL parameters ki values"
  },
  {
    "title": "Reusable UI",
    "outcomes": [
      "Design system jaisa Button aur Input component banao.",
      "children prop se flexible components banao.",
      "Variants (primary/secondary) props se handle karo."
    ],
    "concept": "Reusable UI ka matlab hai: ek dafa acha component banao, poori app me use karo. children ek special prop hai — component ke andar likhi hui cheez: <Card>ye children hai</Card>. Aur variant props (jaise variant=\"primary\") se ek hi Button alag-alag style me dikh sakta hai. Ek component, kayi roop.",
    "why": "Agar har page ka button alag hoga to site be-tarteeb lagegi. Reusable components se design consistent rehta hai aur change ek jagah karne se sab jagah hota hai.",
    "syntax": "<Card><h2>Title</h2></Card> → function Card({ children }) { return <div className=\"card\">{children}</div>; }",
    "examples": [
      [
        "children prop",
        "function Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}\n\n<Card>\n  <h2>Meri Card</h2>\n  <p>Kuch text yahan</p>\n</Card>\n// h2 aur p dono children me chale gaye"
      ],
      [
        "Variant wala Button",
        "function Button({ variant, children }) {\n  return (\n    <button className={variant === 'primary' ? 'btn-primary' : 'btn'}>\n      {children}\n    </button>\n  );\n}\n\n<Button variant=\"primary\">Save</Button>\n<Button>Cancel</Button>"
      ]
    ],
    "explain": [
      "children wo cheez hai jo opening aur closing tags ke darmiyan likhi ho.",
      "Ek component, multiple variants — props se control karo.",
      "JSX me CSS class ke liye className likhte hain, class nahi."
    ],
    "language": "React",
    "mistake": "Har thodi si styling ke liye naya component bana dena. Pehle props aur variants try karo — components kam hon, flexible zyada.",
    "practice": "Ek Alert component banao jo type prop le ('success' ya 'error') aur children dikhaye. Dono types ko test karo.",
    "check": [
      "children prop me kya aata hai?",
      "Ek Button ko primary aur secondary dono banane ka best tareeqa kya hai?",
      "JSX me CSS class ke liye kya likhte hain?"
    ],
    "answer": "tags ke darmiyan likhi hui cheez; variant prop; className"
  },
  {
    "title": "Performance basics",
    "outcomes": [
      "Samjho React kab dobara render hota hai.",
      "React.memo se bekaar renders roko.",
      "Samjho useMemo/useCallback kab use karne hain aur kab nahi."
    ],
    "concept": "React state ya props badalne pe component dobara render hota hai — ye normal hai aur aksar fast bhi hota hai. Masla tab hota hai jab bari list ya bhaari component baar-baar bekaar me render ho. React.memo kehta hai: props same hain to dobara mat bano. Ye optimization hai — har jagah lagane ki cheez nahi, sirf jahan zaroorat ho.",
    "why": "Chhoti app me farq nahi parta, lekin bari list ya slow mobile pe bekaar renders app ko laggy bana dete hain. Performance user ka experience hai.",
    "syntax": "const FastCard = memo(Card); · const x = useMemo(() => heavyCalc(), [deps]);",
    "examples": [
      [
        "React.memo",
        "import { memo } from 'react';\n\nconst UserCard = memo(function UserCard({ user }) {\n  return <div>{user.name}</div>;\n});\n// Props same hon to dobara render nahi hoga"
      ],
      [
        "Bhaari calculation cache karna",
        "const total = useMemo(() => {\n  return items.reduce((sum, i) => sum + i.price, 0);\n}, [items]);\n// items na badlein to dobara calculate nahi hoga"
      ]
    ],
    "explain": [
      "Pehle sahi code likho, phir measure karo, phir optimize karo — yehi sahi order hai.",
      "React.memo sirf tab kaam karta hai jab props actually same hon.",
      "Har cheez pe memo lagana code complex karta hai baghair faide ke."
    ],
    "language": "React",
    "mistake": "Har component pe React.memo laga dena ye soch kar ke fast hoga. Chhote components me is ka faida zero hai aur nuksaan sirf complexity hai. Pehle asli problem dhoondo.",
    "practice": "200 items ki list banao. Parent me ek unrelated counter lagao aur dekho ke list dobara render hoti hai ya nahi. Phir memo lagakar farq check karo.",
    "check": [
      "Component dobara kab render hota hai?",
      "React.memo kya karta hai?",
      "Optimization ka sahi order kya hai?"
    ],
    "answer": "state ya props badalne pe; same props pe render rokta hai; pehle sahi code, phir measure, phir optimize"
  },
  {
    "title": "React project",
    "outcomes": [
      "Ab tak ki saari cheezein ek project me joro.",
      "Components, state, effects aur routing ek saath use karo.",
      "Project ko build karke deploy-ready banao."
    ],
    "concept": "Ye final project hai — ek mini app jis me sab kuch hai: multiple pages (routing), API se data (fetching), forms, aur reusable components. Plan simple rakho: pehle pages aur components ki list banao, phir ek-ek karke banao, aur aakhir me npm run build se final fast version tayyar karo.",
    "why": "Tutorial dekhna aur khud banana do alag cheezein hain. Ye project proof hai ke tum React jante ho — isay apne portfolio me lagao.",
    "syntax": "Plan → Components → State → Effects/Routing → Build (npm run build)",
    "examples": [
      [
        "Project structure",
        "src/\n  components/  → Button.jsx, Card.jsx, Navbar.jsx\n  pages/       → Home.jsx, About.jsx, Products.jsx\n  hooks/       → useFetch.js\n  App.jsx      → Routes yahan lagte hain"
      ],
      [
        "Build command",
        "npm run build\n// dist/ folder banega\n// Yehi folder website pe deploy hota hai"
      ]
    ],
    "explain": [
      "Pehle kagaz pe plan banao: kon se pages, kon se components, data kahan se aayega.",
      "Chhote reusable components banao — ek bara component mat banao.",
      "npm run build production version banata hai jo fast hoti hai."
    ],
    "language": "React",
    "mistake": "Baghair plan ke seedha code likhna shuru kar dena. Aadhe raste me ulajh jao ge. 10 minute ka plan ghanton ki pareshani bachata hai.",
    "practice": "Ek 'My Notes' app banao: notes add karo (form + state), list dikhao (map + keys), delete karo, aur localStorage me save karo (effect).",
    "check": [
      "Project shuru karne se pehle pehla step kya hai?",
      "npm run build kya karta hai?",
      "Components chhote rakhne ka faida kya hai?"
    ],
    "answer": "plan banana; production-ready fast version banata hai; reuse aur debugging asaan ho jati hai"
  }
];
