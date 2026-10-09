export const fullstackDeepLessons:Record<number,any>=[
  {
    "title": "Computer & web basics",
    "outcomes": [
      "Samajhna ke computer kya karta hai aur website browser me kaise chalti hai.",
      "Frontend (jo screen par nazar aata hai) aur backend (jo peeche kaam karta hai) me farq batana.",
      "Ek page ke safar ko trace karna: address likho, browser mangta hai, server deta hai."
    ],
    "concept": "Soch lo ke computer ek bohot tez khana-pakanay wala helper hai jo tumhari hidayat par foran amal karta hai. Website asal me ek computer (server) par rehne wali files ka set hai, aur tumhara phone ya laptop (browser) un files ko mang kar screen par sajata hai. Jab tum address likhte ho, browser server se kehta hai 'yeh page de do', server bhej deta hai, aur browser usay tumhare liye design karke dikha deta hai.",
    "why": "Full stack ka matlab hai dono side samajhna — jo screen par hai aur jo peeche hai. Pehle yeh big picture clear ho to aage har topic aasani se lagta hai.",
    "syntax": "browser (request) → server (files bhejta hai) → browser (page dikhata hai)",
    "examples": [
      [
        "Ek web request ka safar",
        "// 1. Tum likhte ho: www.meriwebsite.com\n// 2. Browser server se poochta hai: 'yeh page bhej do'\n// 3. Server HTML, CSS, JS files bhej deta hai\n// 4. Browser un files ko parh kar tumhe khubsurat page dikhata hai"
      ],
      [
        "Frontend vs backend ek line me",
        "// Frontend = jo tum dekhte ho (button, tasveer, text)\n// Backend = jo peeche kaam karta hai (data save karna, login check karna)\n// Full stack = dono kaam aana"
      ]
    ],
    "explain": [
      "Server woh computer hai jahan website ki files rehti hain; woh hamesha on rehta hai.",
      "Browser tumhara program hai jo server se files mangta aur dikhata hai.",
      "Frontend browser ke andar chalta hai; backend server par chalta hai.",
      "Har website ki life isi request aur response ke chakkar me guzarti hai."
    ],
    "language": "Full Stack",
    "mistake": "Ye samajhna ke website ek jadu hai — asal me yeh sirf files hain jo ek computer se doosre computer tak bhej jaati hain.",
    "practice": "Apne browser me koi bhi website kholo, right-click karke 'View page source' dekho. Wohi files hain jo server ne bheji thi.",
    "check": [
      "Browser aur server me kya farq hai?",
      "Frontend aur backend ka matlab kya hai?"
    ],
    "answer": "Browser files mangta aur dikhata hai; server files rakhta aur bhejta hai. Frontend screen par nazar aata hai; backend peeche kaam karta hai."
  },
  {
    "title": "HTML foundations",
    "outcomes": [
      "HTML tags ka kaam samajhna — woh page ki hadiyan (structure) banate hain.",
      "Ek basic page banana: heading, paragraph, link aur image lagana.",
      "Samajhna ke browser HTML ko parh kar page par cheezein dikhata hai."
    ],
    "concept": "HTML page ka dhancha hai, jaise ghar ki deewarein. Har cheez ek 'tag' me likhi jaati hai — jaise <h1> bara heading hai, <p> paragraph hai, <a> link hai. Browser in tags ko parhta hai aur samajhta hai ke 'yahaan heading dikhani hai, wahaan tasveer lagani hai'.",
    "why": "Bina HTML ke browser ko pata hi nahi chalega ke page par kya hai. Har website — chhoti ho ya bari — ki buniyad HTML hi hai.",
    "syntax": "<tagname>content</tagname> → jaise <h1>Mera Naam</h1>",
    "examples": [
      [
        "Tumhara pehla page",
        "<h1>Assalam-o-Alaikum!</h1>\n<p>Mera naam Ahmed hai. Main web developer ban raha hun.</p>\n<a href=\"https://google.com\">Google kholo</a>"
      ],
      [
        "Tasveer lagana",
        "<img src=\"meri-photo.jpg\" alt=\"Meri tasveer\">\n<p>Upar wali line browser ko kehti hai: 'yeh tasveer dikhao'.</p>"
      ]
    ],
    "explain": [
      "Har HTML tag < > ke andar likha jaata hai; zyada tar tags khulte aur band hote hain.",
      "h1 sab se bara heading hai, p paragraph (aam text) hai.",
      "a tag link banata hai; href me woh address hota hai jahan link le jaye.",
      "img tag tasveer dikhata hai; src me tasveer ka naam hota hai."
    ],
    "language": "HTML",
    "mistake": "Tag band karna bhool jaana — jaise <p> likha magar </p> na likha. Browser phir ulajh jaata hai.",
    "practice": "Ek file banao, usme apna naam h1 me, ek paragraph apne bare me, aur ek link apni pasand ki website ka lagao. Browser me kholo.",
    "check": [
      "<p> tag ka kya kaam hai?",
      "Link banane ke liye kaunsa tag use hota hai?"
    ],
    "answer": "Paragraph (aam text) dikhane ke liye. <a> tag."
  },
  {
    "title": "CSS foundations",
    "outcomes": [
      "Samajhna ke CSS HTML ko khubsurat banata hai — rang, size, jagah.",
      "Basic styling karna: text ka rang, background, font size badalna.",
      "Samajhna ke ek hi CSS poore page ki shakal badal sakta hai."
    ],
    "concept": "Agar HTML ghar ki deewarein hain to CSS uska rang-roghan aur sajawat hai. Tum kehte ho 'yeh heading laal ho', 'yeh text bara ho', 'yeh dabba beech me aaye' — aur browser sab ko waise saja deta hai. HTML batata hai KYA hai, CSS batata hai KAISA lagega.",
    "why": "Bina CSS ke har website ek jaisi boring safed page lagti. CSS hi woh cheez hai jo websites ko professional aur attractive banati hai.",
    "syntax": "selector { property: value; } → jaise h1 { color: red; }",
    "examples": [
      [
        "Pehli styling",
        "h1 {\n  color: blue;\n  font-size: 40px;\n}\np {\n  color: gray;\n}"
      ],
      [
        "Background aur dabba",
        "body {\n  background-color: black;\n  color: white;\n}\n// Ab poora page kaala background aur safed text wala ho jayega"
      ]
    ],
    "explain": [
      "CSS me pehle batate ho KIS cheez ko (h1, p), phir KYA badalna hai (color, font-size).",
      "color text ka rang badalta hai; background-color peeche ka rang.",
      "Ek CSS rule poore page ke sabhi matching elements par lagta hai.",
      "HTML aur CSS alag files me bhi likhe ja sakte hain — structure aur design alag alag."
    ],
    "language": "CSS",
    "mistake": "Har element ko alag alag style karna bhool kar poore page ko ek hi rang de dena — selector sahi choose karo.",
    "practice": "Apne HTML page me CSS lagao: heading ko apne pasand ke rang ka karo, background halka rang do, text ka size bara karo.",
    "check": [
      "CSS ka kaam kya hai?",
      "h1 { color: red; } me h1, color aur red kya hain?"
    ],
    "answer": "Page ko khubsurat banana (design). h1 selector hai, color property hai, red value hai."
  },
  {
    "title": "JavaScript foundations",
    "outcomes": [
      "Samajhna ke JavaScript page ko 'zinda' karta hai — click par kaam hota hai.",
      "Variables me values save karna aur unhe badalna.",
      "Button dabane par ek chhota action chalana."
    ],
    "concept": "Agar HTML deewarein hain aur CSS rang hai, to JavaScript ghar ki bijli aur darwaze hain — jo cheezein HILTI aur KAAM karti hain. Button dabao to message aaye, form bharo to check ho — yeh sab JavaScript karta hai. Yeh browser ke andar chalne wali zabaan hai jo page ko interactive banati hai.",
    "why": "Bina JavaScript ke website ek poster hai — dekh sakte ho, chhu nahi sakte. Har modern website me click, type aur animation JavaScript se hoti hai.",
    "syntax": "let naam = \"Ahmed\"; → value save karo; function kaam karo;",
    "examples": [
      [
        "Pehla variable",
        "let naam = \"Ahmed\";\nlet umar = 20;\n// naam ek dabba hai jisme 'Ahmed' rakha hai\n// Jab chaho dabba khol kar value dekh lo"
      ],
      [
        "Button par click",
        "<button onclick=\"salam()\">Dabao</button>\n<script>\nfunction salam() {\n  alert(\"Assalam-o-Alaikum!\");\n}\n</script>"
      ]
    ],
    "explain": [
      "let se ek 'dabba' (variable) banta hai jisme koi value rakhi jaati hai.",
      "Value text ho to quotes me, number ho to bina quotes ke.",
      "function ek naam diya hua kaam hai — jab bulao tab chalta hai.",
      "onclick ka matlab hai 'jab click ho to yeh function chalao'."
    ],
    "language": "JavaScript",
    "mistake": "Quotes bhool jaana — let naam = Ahmed; likhne se error aayega, sahi hai let naam = \"Ahmed\";.",
    "practice": "Ek button banao jo click par tumhara naam alert me dikhaye. Variable me naam save karo, function me alert lagao.",
    "check": [
      "JavaScript ka kaam kya hai?",
      "Variable kis kaam aata hai?"
    ],
    "answer": "Page ko interactive banana (click waghera par action). Value save karke rakhne ke liye."
  },
  {
    "title": "Git & GitHub",
    "outcomes": [
      "Samajhna ke Git code ke 'save points' banata hai — game ki tarah.",
      "Basic flow samajhna: change karo, save (commit) karo, GitHub par bhejo (push).",
      "Samajhna ke GitHub code ko online mehfooz rakhta hai aur team se share karta hai."
    ],
    "concept": "Git tumhare code ka time machine hai. Socho tum game khel rahe ho aur har level par save kar lete ho — agar aage galti ho to peeche wale save par wapas aa sakte ho. Git bhi aise hi har change ka save point (commit) banata hai. GitHub woh online jagah hai jahan tum apne save points rakhte ho taake kahin se bhi access ho aur doston ke saath mil kar kaam kar sako.",
    "why": "Bina Git ke ek galti poora project kharab kar sakti hai aur wapas jaane ka rasta nahi hota. Har professional developer Git use karta hai — yeh industry ka standard hai.",
    "syntax": "git add . → git commit -m \"kaam ka naam\" → git push",
    "examples": [
      [
        "Pehla save point",
        "git add .\n// matlab: saari changes pack karo\n\ngit commit -m \"pehla page banaya\"\n// matlab: is pack par naam ki mohar lagao"
      ],
      [
        "GitHub par bhejna",
        "git push\n// matlab: mere save points GitHub (online) par bhej do\n// Ab code kahin se bhi mil sakta hai"
      ]
    ],
    "explain": [
      "Commit ek save point hai — us waqt code kaisa tha, yeh record ho jaata hai.",
      "Commit message me likho ke kya kaam kiya, taake baad me yaad rahe.",
      "Push ka matlab apne commits ko GitHub (online) par bhejna.",
      "Repository (repo) woh folder hai jahan project aur uski poori history rehti hai."
    ],
    "language": "Git",
    "mistake": "Bina commit kiye dinon tak kaam karte rehna — phir ek galti sab kuch kharab kar deti hai aur wapas jaane ka rasta nahi hota. Chhote chhote commits karo.",
    "practice": "Apne project folder me Git start karo, ek commit banao 'pehla commit', phir GitHub par repo bana kar push karo.",
    "check": [
      "Commit ka kya faida hai?",
      "Git aur GitHub me farq kya hai?"
    ],
    "answer": "Code ka save point banta hai, galti par wapas aa sakte hain. Git tool hai jo save points banata hai; GitHub online jagah hai jahan woh save hote hain."
  },
  {
    "title": "React",
    "outcomes": [
      "Samajhna ke React UI banane ka tareeqa hai — page ko chhote tukron (components) me torna.",
      "Ek simple component banana jo screen par kuch dikhaye.",
      "Samajhna ke data badalne par React screen khud update kar deta hai."
    ],
    "concept": "React LEGO ki tarah hai. Bara page banane ke bajaye tum chhote chhote tukre (components) banate ho — ek button ka tukra, ek card ka tukra, ek header ka tukra — phir unhe jor kar poora page bana lete ho. Aur sab se achhi baat: jab data badalta hai, React screen ko khud hi update kar deta hai, tumhe har cheez dobara likhne ki zaroorat nahi.",
    "why": "Bari websites me hazaaron cheezein hoti hain. React ke baghair unhe sambhalna na-mumkin ho jaata hai. Aaj ki zyada tar bari websites React ya isi jaisi cheez par bani hain.",
    "syntax": "function Naam() { return (<h1>...</h1>); } → component",
    "examples": [
      [
        "Pehla component",
        "function Salam() {\n  return <h1>Assalam-o-Alaikum!</h1>;\n}\n// Salam ek tukra hai jo heading dikhata hai\n// Jahan chaho <Salam /> likh kar laga do"
      ],
      [
        "Component ko use karna",
        "function App() {\n  return (\n    <div>\n      <Salam />\n      <Salam />\n    </div>\n  );\n}\n// Ek hi tukra do jagah lag gaya — dobara code nahi likha!"
      ]
    ],
    "explain": [
      "Component ek function hai jo screen par dikhne wali cheez return karta hai.",
      "Component ka naam bara harf (capital) se shuru hota hai, jaise Salam.",
      "Ek component ko jitni baar chaho utni baar use kar sakte ho.",
      "HTML jaisa code JS ke andar likhna JSX kehlata hai."
    ],
    "language": "React",
    "mistake": "Component ka naam chhote harf se likhna — jaise function salam(). React ise pehchanta nahi; naam hamesha capital se shuru karo.",
    "practice": "Ek 'MeraCard' component banao jo tumhara naam aur ek line dikhaye. Phir use 3 baar alag alag jagah lagao.",
    "check": [
      "Component kya hota hai?",
      "Ek component ko dobara use karne ka faida kya hai?"
    ],
    "answer": "UI ka chhota tukra (function) jo screen par kuch dikhata hai. Code dobara nahi likhna parta, ek jagah badlo sab jagah badal jaata hai."
  },
  {
    "title": "Component architecture",
    "outcomes": [
      "Samajhna ke bara UI chhote components me kaise tora jaata hai.",
      "Props ke zariye parent se child ko data bhejna.",
      "Ek page ka component tree (darakht) banana."
    ],
    "concept": "Socho tum ek ghar bana rahe ho — tum poora ghar ek saath nahi banate, kamre alag alag banate ho phir jorte ho. Component architecture bhi yahi hai: page ko chhote zimmedar tukron me torno, har tukra ek kaam kare. Props woh lifafa hai jisme parent component child ko data bhejta hai — jaise ammi bache ko khaane ka dabba deti hain.",
    "why": "Bina architecture ke code ek uljha hua jaal ban jaata hai jisme ek chhoti tabdeeli sab kuch tor deti hai. Achhi architecture se team mil kar kaam kar sakti hai aur code saaf rehta hai.",
    "syntax": "<Bacha naam=\"Ahmed\" /> → props = { naam: \"Ahmed\" }",
    "examples": [
      [
        "Props bhejna",
        "function Card(props) {\n  return <h2>{props.naam}</h2>;\n}\n\n<Card naam=\"Ahmed\" />\n<Card naam=\"Sara\" />\n// Ek hi Card, alag alag naam — props se data aaya"
      ],
      [
        "Component tree",
        "// App\n//  ├── Header\n//  ├── Card (naam='Ahmed')\n//  ├── Card (naam='Sara')\n//  └── Footer\n// Bara page = chhote tukron ka darakht"
      ]
    ],
    "explain": [
      "Props parent se child tak data bhejne ka tareeqa hai — ek taraf ka safar.",
      "Child props ko badal nahi sakta, sirf use kar sakta hai.",
      "Har component ki ek zimmedari honi chahiye — jo sab kuch kare woh component bura hai.",
      "Component tree se pata chalta hai kaunsa tukra kiske andar hai."
    ],
    "language": "React",
    "mistake": "Ek hi component me poora page likh dena — phir woh dobara use nahi ho sakta aur samajhna mushkil ho jaata hai. Chhota rakho, ek kaam do.",
    "practice": "Ek page ko 4 components me toro: Header, Card, List, Footer. Card ko props se alag alag naam bhejo.",
    "check": [
      "Props ka kya kaam hai?",
      "Ek component me kitne kaam hone chahiye?"
    ],
    "answer": "Parent se child ko data bhejna. Sirf ek kaam — chhota aur saaf."
  }
,
  {
    "title": "Node.js",
    "outcomes": [
      "Samajhna ke JavaScript sirf browser me nahi, server par bhi chal sakti hai.",
      "Node.js se ek simple program chalana jo server par kaam kare.",
      "Samajhna ke backend aur frontend ek hi zabaan (JS) me likhe ja sakte hain."
    ],
    "concept": "Pehle JavaScript sirf browser ke andar rehti thi — jaise machli sirf pani me. Phir Node.js aaya aur us machli ko bahar nikaal diya: ab JavaScript server par bhi chalti hai! Matlab wohi zabaan jo button dabane par kaam karti thi, ab server par file parh sakti hai, data save kar sakti hai, aur browser ko jawab bhej sakti hai.",
    "why": "Ek hi zabaan dono taraf — is se seekhna aadha ho jaata hai. Tumhe backend ke liye nayi zabaan nahi seekhni parti, aur frontend-backend ka milna aasan ho jaata hai.",
    "syntax": "node app.js → terminal me JS file chalao",
    "examples": [
      [
        "Pehla Node program",
        "// app.js\nconsole.log(\"Server chal raha hai!\");\n// Terminal me likho: node app.js\n// Yeh browser ke baghair chalega — seedha computer par"
      ],
      [
        "File parhna (sirf server par mumkin)",
        "// Node server par files ko chhu sakta hai\n// Browser wala JS yeh nahi kar sakta (security ki waja se)\n// Isi liye backend ke liye Node chahiye"
      ]
    ],
    "explain": [
      "Node.js ek program hai jo JavaScript ko browser ke bahar chalata hai.",
      "Terminal me 'node file.js' likhne se woh file chalti hai.",
      "Browser ka JS sirf page ke andar kaam karta hai; Node ka JS poore computer par.",
      "Isi liye backend (server ka kaam) JS me likha ja sakta hai."
    ],
    "language": "Node.js",
    "mistake": "Ye samajhna ke Node.js ek alag zabaan hai — nahi, yeh wahi JavaScript hai, bas chalne ki jagah badal gayi hai (browser se server).",
    "practice": "Ek file hello.js banao jisme tumhara naam print ho. Terminal me 'node hello.js' chala kar dekho.",
    "check": [
      "Node.js kya karta hai?",
      "Browser JS aur Node JS me buniyadi farq kya hai?"
    ],
    "answer": "JavaScript ko server par chalata hai. Browser JS sirf page me kaam karta hai; Node JS server par files aur data tak pahunch sakta hai."
  },
  {
    "title": "Express APIs",
    "outcomes": [
      "Samajhna ke API ek 'menu' hai — frontend us se cheezein mangta hai.",
      "Express se ek simple server banana jo ek address par jawab de.",
      "Route ka matlab samajhna: alag address, alag jawab."
    ],
    "concept": "Restaurant me tum waiter ko menu se order dete ho — tumhe kitchen me jaane ki zaroorat nahi. API bhi aisa hi menu hai: frontend (customer) backend (kitchen) se kehta hai 'mujhe users ki list do', aur backend data bhej deta hai. Express Node.js ka ek toolkit hai jo aisa server banana bohot aasan kar deta hai — tum bas batate ho ke 'is address par aao to yeh jawab do'.",
    "why": "Frontend aur backend isi API ke zariye baat karte hain. API samajhna matlab full stack ka dil samajhna — yahi woh pul hai jo dono ko jorta hai.",
    "syntax": "app.get('/address', (req, res) => { res.send('jawab'); })",
    "examples": [
      [
        "Pehla Express server",
        "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Assalam-o-Alaikum! Server chal raha hai.');\n});\n\napp.listen(3000);\n// Browser me localhost:3000 kholo → message nazar aayega"
      ],
      [
        "Alag address, alag jawab",
        "app.get('/users', (req, res) => {\n  res.send('Yahaan users ki list aayegi');\n});\n// / kholne par ek jawab, /users kholne par doosra"
      ]
    ],
    "explain": [
      "Route ek address hai — jaise '/' ya '/users' — har address ka apna jawab hota hai.",
      "GET ka matlab hai 'mujhe data do' — sab se aam request.",
      "req me aane wali request ki info hoti hai; res se jawab bhejte hain.",
      "Server ek port (jaise 3000) par sunta hai — wohi uska darwaza hai."
    ],
    "language": "Node.js",
    "mistake": "Server chalana bhool kar browser me address kholna — pehle terminal me server start karo (node app.js), phir browser me dekho.",
    "practice": "Express server banao jisme do routes hon: '/' par tumhara naam, '/course' par 'Full Stack' likha aaye. Dono browser me khol kar check karo.",
    "check": [
      "API kya hai? Restaurant wali misaal se samjhao.",
      "Route ka kya matlab hai?"
    ],
    "answer": "Frontend aur backend ke darmiyan menu — frontend mangta hai, backend deta hai. Server ka ek address jiska apna jawab hota hai."
  },
  {
    "title": "Database design",
    "outcomes": [
      "Samajhna ke database ek digital almari hai jisme data saaf suthra rakha jaata hai.",
      "Tables, rows aur columns ka matlab samajhna.",
      "Do tables ke darmiyan rishta (jaise user aur uske orders) samajhna."
    ],
    "concept": "Database ek bohot organized almari hai. Har khana (table) ek topic ka hai — ek khana users ka, ek khana products ka. Har khane me daraz (rows) hain — har daraz ek record hai, jaise ek user. Aur har daraz me dibbe (columns) hain — naam, email, umar. Jab tables aapas me juri hon — jaise har order kisi user ka hai — to data kabhi gum nahi hota aur dobara nahi likhna parta.",
    "why": "Har app ka data kahin na kahin save hota hai. Bina achhi design ke data ulajh jaata hai — ek hi naam teen jagah alag alag likha ho to update karna na-mumkin ho jaata hai.",
    "syntax": "users table: id | naam | email → har row ek user",
    "examples": [
      [
        "Users table ka design",
        "// users (table)\n// id | naam  | email\n// 1  | Ahmed | ahmed@mail.com\n// 2  | Sara  | sara@mail.com\n// Har row = ek user, har column = uski ek info"
      ],
      [
        "Tables ka rishta",
        "// orders (table)\n// id | user_id | cheez\n// 1  | 1       | Kitaab\n// user_id batata hai yeh order user #1 (Ahmed) ka hai\n// Naam dobara nahi likha — sirf id jori"
      ]
    ],
    "explain": [
      "Table ek topic ka data rakhta hai; row ek record hai; column uski ek property.",
      "Har row ki ek unique id hoti hai — jaise har bache ka roll number.",
      "Do tables id ke zariye jurte hain — naam copy karne ke bajaye id likho.",
      "Achhi design me koi info do jagah repeat nahi hoti."
    ],
    "language": "SQL",
    "mistake": "Ek hi info har jagah copy kar dena — jaise har order me poora naam-email likhna. Phir naam badle to sab jagah badalna parega. Sirf id joro.",
    "practice": "Ek school ke liye 2 tables design karo kagaz par: students (id, naam, class) aur books (id, student_id, kitaab_ka_naam). 3 students aur 4 books ki rows likho.",
    "check": [
      "Row aur column me farq kya hai?",
      "Do tables aapas me kaise jurte hain?"
    ],
    "answer": "Row ek record hai (ek user), column uski ek property (naam). Unique id ke zariye — ek table doosre ki id rakhti hai."
  },
  {
    "title": "SQL & queries",
    "outcomes": [
      "Samajhna ke SQL database se baat karne ki zabaan hai.",
      "SELECT se data nikalna aur WHERE se filter karna.",
      "INSERT se naya data dalna."
    ],
    "concept": "Agar database almari hai to SQL us almari ke chokidar se baat karne ki zabaan hai. Tum kehte ho 'mujhe users wale khane se sab naam do' — aur woh de deta hai. 'Sirf woh do jinki umar 20 se zyada hai' — filter lag jaata hai. 'Ek naya user daal do' — record save ho jaata hai. Bas chand lafz seekhne hain, aur tum database se kuch bhi mang sakte ho.",
    "why": "Har app ko data chahiye hota hai — login par user nikalna, list dikhana, naya record banana. SQL ke baghair backend bekaar hai; yeh har backend developer ki roz ki zabaan hai.",
    "syntax": "SELECT columns FROM table WHERE shart;",
    "examples": [
      [
        "Data nikalna",
        "SELECT naam, email FROM users;\n-- users table se sab ke naam aur email do\n\nSELECT * FROM users WHERE umar > 20;\n-- sirf woh users jinki umar 20 se zyada hai"
      ],
      [
        "Naya data dalna",
        "INSERT INTO users (naam, email) VALUES ('Ahmed', 'ahmed@mail.com');\n-- users me ek naya record daal do"
      ]
    ],
    "explain": [
      "SELECT ka matlab 'nikal kar do'; * ka matlab 'sab columns'.",
      "WHERE filter lagata hai — sirf woh rows jo shart poori karein.",
      "INSERT INTO nayi row daalta hai; VALUES me data likhte hain.",
      "SQL ke lafz capital me likhne ki aadat achhi hai, magar zaroori nahi."
    ],
    "language": "SQL",
    "mistake": "WHERE bhool kar poori table utha lena — jaise 10 lakh users nikal liye jab sirf ek chahiye tha. Hamesha socho: mujhe exactly kya chahiye?",
    "practice": "Ek students table socho (naam, class, marks). 3 queries likho: sab naam nikalo; sirf class 10 walon ke marks nikalo; ek naya student daalo.",
    "check": [
      "SELECT aur INSERT me farq kya hai?",
      "WHERE kis kaam aata hai?"
    ],
    "answer": "SELECT data nikalta hai; INSERT naya data daalta hai. WHERE rows ko filter karta hai."
  },
  {
    "title": "Authentication",
    "outcomes": [
      "Samajhna ke authentication ka matlab hai 'tum kaun ho?' verify karna.",
      "Login ka flow samajhna: username/password check, phir pehchan ka saboot (token).",
      "Samajhna ke password kabhi seedhe nahi rakhe jaate — unhe 'hash' kiya jaata hai."
    ],
    "concept": "Ghar ka darwaza socho — andar aane se pehle tumhe chaabi dikhani parti hai. Authentication bhi yahi hai: app poochti hai 'tum kaun ho?' aur tum username/password dikhate ho. Agar sahi hua to app tumhe ek token (jaise haath par lagne wali mohar) deti hai — phir har baar password nahi mangti, mohar dekh kar pehchan leti hai. Aur password almari me khula nahi rakha jaata — use hash karke aisa bigar diya jaata hai ke chor bhi parh na sake.",
    "why": "Bina login ke har koi har kisi ka account khol sakta hai. Authentication hi woh deewar hai jo tumhara data doosron se bachati hai — har serious app me yeh sab se pehla kaam hai.",
    "syntax": "login → check password → token do → har request me token bhejo",
    "examples": [
      [
        "Login ka flow",
        "// 1. User bhejta hai: { email: 'ahmed@mail.com', password: '***' }\n// 2. Server password check karta hai (hash se compare)\n// 3. Sahi hua to server token deta hai: 'abc123xyz'\n// 4. Ab user har request me token bhejta hai — password dobara nahi"
      ],
      [
        "Password hash karna",
        "// Asli password: 'meraSecret123'\n// Hash ban gaya: 'x7$kL9#mQ2...'\n// Server sirf hash rakhta hai — chor hash chura bhi le to password nahi nikal sakta"
      ]
    ],
    "explain": [
      "Authentication = pehchan verify karna (kaun ho?).",
      "Token ek temporary saboot hai ke 'yeh user login hai'.",
      "Hash ek one-way bigar hai — password se hash banta hai, hash se password nahi.",
      "Login ke baad har request me token bheja jaata hai taake server pehchan le."
    ],
    "language": "Full Stack",
    "mistake": "Password ko database me seedha (plain text me) rakhna — yeh sab se khatarnak galti hai. Ek leak aur sab passwords chor ke paas. Hamesha hash karo.",
    "practice": "Kagaz par login flow ke 4 steps likho apne lafzon me: user kya bhejta hai, server kya check karta hai, token kya hai, token kab bheja jaata hai.",
    "check": [
      "Authentication ka matlab kya hai?",
      "Password hash kyun kiya jaata hai?"
    ],
    "answer": "Verify karna ke user kaun hai (login). Taake database se password chori bhi ho to koi use parh na sake."
  },
  {
    "title": "Authorization",
    "outcomes": [
      "Authentication aur authorization ka farq samajhna — 'kaun ho' vs 'kya kar sakte ho'.",
      "Roles samajhna: admin sab kar sakta hai, aam user sirf apna kaam.",
      "Samajhna ke har request par permission check hoti hai."
    ],
    "concept": "Office ki building socho: gate par guard tumhara card dekh kar andar aane deta hai — yeh authentication hai. Magar andar ja kar tum sirf apne floor par ja sakte ho, manager ke kamre me nahi — yeh authorization hai! Login hone ke baad app dekhti hai ke 'tum kaunsi category ke ho?' — admin ho to sab buttons nazar aayenge, aam user ho to sirf apne wale.",
    "why": "Agar har login user admin ka kaam kar sake to koi bhi kisi ka data delete kar dega. Authorization hi faisla karta hai ke kaun kya chhu sakta hai — yeh app ki hifazat ka doosra darwaza hai.",
    "syntax": "agar (user.role === 'admin') → ijazat do, warna mana karo",
    "examples": [
      [
        "Role check karna",
        "// User login hai, ab dekho woh kya kar sakta hai:\nif (user.role === 'admin') {\n  // sab users ki list dikhao\n} else {\n  // sirf apni profile dikhao\n}"
      ],
      [
        "Mana karna",
        "// Aam user ne kaha: 'sab users delete karo'\n// Server check karta hai: role = 'user', admin nahi\n// Jawab: 'Tumhe ijazat nahi hai' (403 Forbidden)"
      ]
    ],
    "explain": [
      "Authentication = kaun ho; Authorization = kya kar sakte ho.",
      "Role user ki category hai — jaise 'admin', 'user', 'guest'.",
      "Permission check server par hoti hai, frontend par nahi.",
      "Frontend button chhupa sakta hai, magar asal rok server lagata hai."
    ],
    "language": "Full Stack",
    "mistake": "Sirf frontend me button chhupa kar samajhna ke kaam ho gaya — smart user API ko seedha hit kar sakta hai. Permission ka check HAMESHA server par karo.",
    "practice": "Ek app socho (school system): likho ke admin kya kya kar sakta hai, teacher kya kar sakta hai, student kya kar sakta hai. 3 roles ki list banao.",
    "check": [
      "Authentication aur authorization me farq kya hai?",
      "Permission check kahan honi chahiye — frontend ya backend?"
    ],
    "answer": "Authentication pehchan hai (kaun ho), authorization ijazat hai (kya kar sakte ho). Backend (server) par."
  },
  {
    "title": "API integration",
    "outcomes": [
      "Samajhna ke frontend API se data kaise mangta hai.",
      "fetch se server ko request bhejna aur jawab lena.",
      "Aaye hue data ko screen par dikhana."
    ],
    "concept": "Frontend aur backend do alag sheher hain, aur API unke darmiyan ka phone line hai. Frontend phone uthata hai (fetch), kehta hai 'users ki list bhejo', backend jawab bhejta hai, aur frontend us jawab ko screen par saja deta hai. Yeh poora chakkar har website me din me hazaaron baar hota hai — tumne abhi tak sirf ek side dekhi thi, ab dono jur rahi hain!",
    "why": "Yahi woh jagah hai jahan full stack poora hota hai — frontend akela kuch nahi dikha sakta, backend akela kuch nahi dikhata. Dono ka milna hi asal website hai.",
    "syntax": "fetch('/api/users') → jawab lo → screen par dikhao",
    "examples": [
      [
        "Data mangna",
        "fetch('/api/users')\n  .then(res => res.json())\n  .then(users => {\n    console.log(users); // server ne list bhej di!\n  });\n// fetch = phone call, .json() = jawab ko samajhna"
      ],
      [
        "Data screen par dikhana",
        "// Server ne bheja: [{ naam: 'Ahmed' }, { naam: 'Sara' }]\n// Frontend har naam ko list me dikhata hai:\n// • Ahmed\n// • Sara"
      ]
    ],
    "explain": [
      "fetch browser ka tareeqa hai server se baat karne ka.",
      "Server aam tor par JSON (data ka saaf format) bhejta hai.",
      "Jawab aane me waqt lagta hai — is liye 'phir' (then) me kaam hota hai.",
      "Data aane ke baad frontend use screen par render karta hai."
    ],
    "language": "JavaScript",
    "mistake": "Ye samajhna ke data foran mil jaata hai — fetch me waqt lagta hai. Jawab aane se pehle screen par data dikhane ki koshish karoge to khaali milega. Pehle wait, phir dikhao.",
    "practice": "Ek Express route /api/mera-naam banao jo tumhara naam bheje. Phir fetch se use mang kar console me print karo.",
    "check": [
      "fetch ka kya kaam hai?",
      "Server aam tor par kis format me data bhejta hai?"
    ],
    "answer": "Server se data mangna (request bhejna). JSON format me."
  }
,
  {
    "title": "Forms & validation",
    "outcomes": [
      "Samajhna ke form user se info lene ka tareeqa hai.",
      "Input fields banana: text, email, password, button.",
      "Validation samajhna: galat data ko pehle hi rokna."
    ],
    "concept": "Form ek digital form hai — jaise school me dakhle ka form bharte ho: naam likho, email likho, dabao 'submit'. Browser yeh info pack karke server ko bhej deta hai. Validation woh check hai jo kehta hai 'email me @ hona chahiye', 'password 8 harf se chhota nahi' — taake ghalat ya aadha data server tak pahunche hi nahi.",
    "why": "Har app me forms hain — signup, login, order, feedback. Bina validation ke user kuch bhi bhej dega aur database gand se bhar jayega. Form hi user aur app ke darmiyan ka darwaza hai.",
    "syntax": "<form> → <input> → <button>submit</button> → server ko bhejo",
    "examples": [
      [
        "Ek simple form",
        "<form>\n  <input type=\"text\" placeholder=\"Tumhara naam\" />\n  <input type=\"email\" placeholder=\"Email\" />\n  <input type=\"password\" placeholder=\"Password\" />\n  <button>Submit</button>\n</form>"
      ],
      [
        "Validation lagana",
        "<input type=\"email\" required />\n<!-- required = khaali nahi chhor sakte -->\n<!-- type='email' = email jaisa hona chahiye -->\n<input type=\"password\" minlength=\"8\" />\n<!-- kam se kam 8 harf hon\" -->"
      ]
    ],
    "explain": [
      "form sab inputs ko ek pack me bandhta hai; submit par pack server ko jaata hai.",
      "input ka type batata hai kis kisam ka data hai — text, email, password.",
      "required khaali field ko rokta hai; minlength chhote password ko.",
      "Browser ki validation pehli deewar hai; server par dobara check zaroori hai."
    ],
    "language": "HTML",
    "mistake": "Sirf browser ki validation par bharosa karna — koi bhi browser ke check ko bypass kar sakta hai. Asal validation HAMESHA server par bhi karo.",
    "practice": "Ek signup form banao: naam (required), email (required, email type), password (min 8). Submit dabao aur dekho browser khud rokta hai ya nahi.",
    "check": [
      "Validation kyun zaroori hai?",
      "required attribute kya karta hai?"
    ],
    "answer": "Taake ghalat ya aadha data server tak na pahunche. Field khaali chhorne se rokta hai."
  },
  {
    "title": "Security basics",
    "outcomes": [
      "Samajhna ke hackers app par kaise hamla karte hain (simple idea).",
      "SQL injection aur XSS ka basic concept samajhna.",
      "3 buniyadi hifazati aadatain apnana."
    ],
    "concept": "Tumhara ghar kitna bhi khubsurat ho, darwaze par tala lagana zaroori hai. Websites par bhi chor hamle karte hain: koi form me khatarnak code likh kar database churane ki koshish karta hai (SQL injection), koi doosre users ko jhoota page dikhata hai (XSS). Hifazat ka usool simple hai — user ki har cheez par shak karo, har input ko check karo, aur secret cheezein kabhi khuli na chhoro.",
    "why": "Ek chhoti laparwahi — jaise password khula rakhna — poori company ko le doob sakti hai. Security koi extra feature nahi, buniyad hai. Har developer ko yeh soch aani chahiye.",
    "syntax": "kabhi bharosa mat karo: har input check karo, har secret chhupao",
    "examples": [
      [
        "SQL injection kya hai",
        "// User ne password ki jagah likha: ' OR '1'='1\n// Agar server ne check na kiya to database samjhega: 'password sahi hai!'\n// Aur hacker bina password ke andar!\n// Hal: input ko hamesha saaf karke query me dalo"
      ],
      [
        "XSS kya hai",
        "// User ne comment me likha: <script>chori-karo()</script>\n// Agar page ne ise code samajh kar chala diya to har dekhne wale ka data khatre me\n// Hal: user ka text hamesha 'text' ki tarah dikhao, 'code' ki tarah nahi"
      ]
    ],
    "explain": [
      "SQL injection: form me database wali chaal likh kar data churana.",
      "XSS: page me apna script ghusa kar doosre users par hamla.",
      "Bachao ka pehla usool: user ke input ko kabhi seedha database ya page me mat dalo.",
      "Passwords hash karo, secrets env me rakho, libraries update rakho."
    ],
    "language": "Full Stack",
    "mistake": "Ye sochna ke 'meri chhoti website ko kaun hack karega' — bots har website ko automatically check karte hain, chhoti ya bari. Security sab ke liye hai.",
    "practice": "Apne kisi form ko dekho aur 3 sawal poocho: kya khaali input ja sakta hai? Kya ajeeb characters ja sakte hain? Kya password hash ho raha hai?",
    "check": [
      "SQL injection kya hai?",
      "Security ka sab se pehla usool kya hai?"
    ],
    "answer": "Form me khatarnak database code likh kar data churana. User ke input par kabhi andha bharosa mat karo — har input check karo."
  },
  {
    "title": "Testing",
    "outcomes": [
      "Samajhna ke testing ka matlab hai 'code ko khud se check karna'.",
      "Unit test ka idea samajhna: ek function, ek sawal — sahi jawab aaya?",
      "Samajhna ke test likhne se dar khatam hota hai — change karo, test chalao, sukoon."
    ],
    "concept": "Khana pakane ke baad tum chakhte ho ke namak theek hai ya nahi — yeh testing hai! Code me bhi tum ek chhota program likhte ho jo tumhare asal code se sawal poochta hai: '2 aur 2 jama karo to kya 4 aata hai?' Agar jawab sahi aaya to test pass, warna fail. Jab sau tests pass hon to tumhe yaqeen hota hai ke code theek kaam kar raha hai — aur baad me kuch badlo to test foran bata dega ke kuch toota ya nahi.",
    "why": "Bina test ke har change ek dar hota hai — 'kahin kuch toot na gaya ho'. Test woh safety net hai jo professional developers ko tez aur confident banata hai.",
    "syntax": "test('naam', () => { expect(jama(2,2)).toBe(4); })",
    "examples": [
      [
        "Pehla test",
        "function jama(a, b) {\n  return a + b;\n}\n\n// Test poochta hai:\n// jama(2, 3) ka jawab 5 hona chahiye\nif (jama(2, 3) === 5) {\n  console.log(\"Test PASS!\");\n} else {\n  console.log(\"Test FAIL!\");\n}"
      ],
      [
        "Test tootne par",
        "// Kisi ne jama() me galti ki: return a - b;\n// Test chalao → FAIL!\n// Test ne foran pakar liya ke kuch ghalat hai\n// Bina test ke yeh galti users tak pahunch jaati"
      ]
    ],
    "explain": [
      "Test ek chhota program hai jo tumhare code ko check karta hai.",
      "Unit test sab se chhoti cheez (ek function) ko test karta hai.",
      "Pass = sab theek; Fail = kuch toota, foran theek karo.",
      "Code badalne ke baad test chalana aadat banao."
    ],
    "language": "JavaScript",
    "mistake": "Ye samajhna ke testing waqt zaya hai — asal me bina test ke debugging me us se zyada waqt lagta hai. Chhote test likhna bari pareshani se bachata hai.",
    "practice": "Ek function likho jo do numbers ko multiply kare. Phir ek test likho jo check kare ke multiply(3, 4) ka jawab 8 nahi, 12 hai.",
    "check": [
      "Testing ka matlab kya hai?",
      "Test fail hone ka kya matlab hai?"
    ],
    "answer": "Code ko khud se check karna ke woh sahi kaam kar raha hai. Ke code me kuch ghalat hai — foran theek karo."
  },
  {
    "title": "Deployment",
    "outcomes": [
      "Samajhna ke deployment ka matlab hai app ko internet par 'live' karna.",
      "Localhost aur live website ka farq samajhna.",
      "Deployment ke basic steps samajhna: code bhejo, server lagao, duniya dekhe."
    ],
    "concept": "Tumne ghar me ek khubsurat cake banaya — magar mehmaan use dekh nahi sakte jab tak tum use table par na rakho. Deployment bhi yahi hai: tumhara code abhi sirf tumhare computer (localhost) par hai. Deploy karne ka matlab hai use ek asal server par rakhna taake duniya me koi bhi uska address khol kar dekh sake. Vercel, Netlify jaise tools yeh kaam itna aasan kar dete hain ke bas GitHub se joro aur button dabao!",
    "why": "Jo app live nahi, woh portfolio me nahi. Client, employer ya dost — sab live link mangte hain. Deployment hi tumhare kaam ko duniya ke saamne laata hai.",
    "syntax": "code → GitHub → hosting (Vercel) → live link mil gaya!",
    "examples": [
      [
        "Deployment ke steps",
        "// 1. Code GitHub par push karo\n// 2. Vercel me GitHub repo connect karo\n// 3. 'Deploy' dabao\n// 4. Mil gaya link: meri-app.vercel.app\n// Ab duniya me koi bhi khol sakta hai!"
      ],
      [
        "Localhost vs Live",
        "// localhost:3000 = sirf tumhare computer par\n// meri-app.vercel.app = poori duniya ke liye\n// Deployment = localhost se live tak ka safar"
      ]
    ],
    "explain": [
      "Localhost sirf tumhare computer par chalta hai; live website sab ke liye.",
      "Hosting woh server hai jahan tumhari app rehti hai.",
      "Vercel/Netlify GitHub se code le kar khud deploy kar dete hain.",
      "Har push par nayi version khud live ho jaati hai."
    ],
    "language": "Full Stack",
    "mistake": "Project complete karke deploy karna bhool jaana — phir portfolio me dikhane ko kuch nahi hota. Bano, deploy karo, link save karo. Yeh aadat banao.",
    "practice": "Apna koi chhota project Vercel par deploy karo aur live link apne paas save karo. Dost ko bhejo aur poocho ke khulta hai ya nahi.",
    "check": [
      "Deployment ka matlab kya hai?",
      "Localhost aur live link me farq kya hai?"
    ],
    "answer": "App ko internet par live karna taake sab dekh sakein. Localhost sirf apne computer par; live link duniya me kahin se bhi khulta hai."
  },
  {
    "title": "Environment configuration",
    "outcomes": [
      "Samajhna ke secret cheezein (passwords, keys) code me nahi likhi jaatin.",
      ".env file ka matlab samajhna — secrets ki alag diary.",
      "Samajhna ke alag jagah (local vs live) alag settings hoti hain."
    ],
    "concept": "Tum ghar ki chaabi darwaze par latka kar nahi jaate — use jeb me rakhte ho. Code me bhi secret cheezein hoti hain: database ka password, API ki key. Inhe code me likhna matlab chaabi darwaze par latkana — jo GitHub dekhega woh sab dekh lega! Is liye secrets ek alag file (.env) me rakhe jaate hain jo GitHub par kabhi nahi jaati. Code bas kehta hai 'wahan se utha lo'.",
    "why": "Ek leaked API key se hazaaron ka bill aa sakta hai ya poora database leak ho sakta hai. Yeh professional developers ki sab se buniyadi hifazati aadat hai.",
    "syntax": ".env me: PASSWORD=meraSecret → code me: process.env.PASSWORD",
    "examples": [
      [
        ".env file",
        "// .env (yeh file GitHub par KABHI nahi jaati)\nDB_PASSWORD=meraBohotSecretPassword123\nAPI_KEY=abc-xyz-123\n\n// Code me use:\nconst password = process.env.DB_PASSWORD;\n// Code me password nazar nahi aata — .env se aata hai"
      ],
      [
        "Ghalat vs sahi",
        "// GHALAT: password code me likha\nconst password = \"meraBohotSecretPassword123\";\n\n// SAHI: password .env me, code me sirf naam\nconst password = process.env.DB_PASSWORD;"
      ]
    ],
    "explain": [
      ".env ek simple file hai jisme secrets 'NAAM=value' me likhe hote hain.",
      "Yeh file GitHub par nahi jaati — .gitignore me daal do.",
      "Code process.env.NAAM se value uthata hai.",
      "Live server par alag .env hoti hai — local aur live ki settings alag."
    ],
    "language": "Full Stack",
    "mistake": ".env file ko GitHub par push kar dena — phir secrets duniya ke saamne. Hamesha check karo ke .env git me nahi gayi.",
    "practice": "Ek .env file banao, usme MERA_NAAM= apna naam likho. Code me process.env.MERA_NAAM se print karo. Phir check karo ke git me .env nahi gayi.",
    "check": [
      ".env file kis kaam aati hai?",
      "Secret ko code me likhna kyun ghalat hai?"
    ],
    "answer": "Secrets (passwords, keys) ko code se alag rakhne ke liye. Kyunke code GitHub par jata hai aur sab dekh lenge."
  },
  {
    "title": "Performance",
    "outcomes": [
      "Samajhna ke tez website ka matlab hai khush user.",
      "Bari tasveeron aur zyada requests ko slow hone ki waja samajhna.",
      "3 simple tez karne ke tareeqe seekhna."
    ],
    "concept": "Dukaan me agar 10 minute line me lagna pare to customer wapas chala jaata hai — website par bhi yahi hota hai! Agar page 5 second me khule to aadhe log wapas chale jaate hain. Performance ka matlab hai page ko tez banana: tasveerein halki karo, sirf zaroori cheezein pehle bhejo, baaki baad me. Tez website = zyada log rukte hain.",
    "why": "Google slow websites ko neeche dikhata hai aur users intezar nahi karte. Ek second ki tezzi bhi business badal sakti hai — yeh invisible magar bohot powerful skill hai.",
    "syntax": "chhoti files + kam requests + lazy load = tez website",
    "examples": [
      [
        "Bari tasveer = slow page",
        "// 5MB ki tasveer: khulne me 8 second\n// 200KB ki tasveer: khulne me 1 second\n// Hal: tasveer ko chhota/compress karo, phir lagao\n// User ko farq nazar nahi aayega, speed me zameen aasmaan ka farq"
      ],
      [
        "Lazy loading",
        "<img src=\"photo.jpg\" loading=\"lazy\" />\n<!-- loading='lazy' ka matlab: tasveer tabhi lao jab user scroll karke wahaan pahunche -->\n<!-- Pehli screen foran khul jaati hai -->"
      ]
    ],
    "explain": [
      "Har file (tasveer, code) ko aane me waqt lagta hai — chhoti file, kam waqt.",
      "Compress ka matlab quality zyada ghataye baghair size ghatana.",
      "Lazy loading: jo nazar nahi aa raha use baad me lao.",
      "Kam requests bhejo — 50 chhoti files se behtar hai 5 mili hui files."
    ],
    "language": "Full Stack",
    "mistake": "Phone se seedhi 10MB tasveer utha kar website par laga dena — page itna slow ke koi rukta hi nahi. Hamesha pehle compress karo.",
    "practice": "Apni kisi tasveer ka size check karo. Use compress karke (online tool se) aadhe se kam karo aur farq dekho.",
    "check": [
      "Slow website ka sab se aam sabab kya hai?",
      "Lazy loading kya karti hai?"
    ],
    "answer": "Bari files (khaas tor par tasveerein). Tasveer tabhi load karti hai jab user scroll karke wahaan pahunche."
  },
  {
    "title": "Accessibility",
    "outcomes": [
      "Samajhna ke website sab ke liye honi chahiye — dekhne, sunne ya mouse use na kar sakne walon ke liye bhi.",
      "Alt text, labels aur keyboard ka basic idea samajhna.",
      "Apni website ko keyboard se chala kar check karna."
    ],
    "concept": "Building me ramp is liye hota hai taake wheelchair wala bhi andar aa sake — website me bhi aisa hi khayal rakhna accessibility hai. Koi aankhon se nahi dekh sakta to screen reader (bolne wala software) page parhega — is liye tasveer ko alt text do taake woh bata sake 'yahaan kya hai'. Koi mouse nahi chala sakta to keyboard se sab hona chahiye. Website sab ki hai, sirf perfect users ki nahi.",
    "why": "Duniya me karoron log kisi na kisi mushkil ke saath internet use karte hain. Accessible website zyada logon tak pahunchti hai — aur kai mulkon me yeh qanoon bhi hai. Achha developer sab ka sochta hai.",
    "syntax": "<img alt=\"tasveer ki wazahat\"> + <label> + keyboard se sab chale",
    "examples": [
      [
        "Alt text dena",
        "<img src=\"cat.jpg\" alt=\"Ek safed billi dhoop me so rahi hai\" />\n<!-- Dekh na sakne wala user screen reader se sunega: 'Ek safed billi...' -->\n<!-- alt khaali chhora to woh samjhega hi nahi yahaan kya tha -->"
      ],
      [
        "Label lagana",
        "<label for=\"email\">Email likho:</label>\n<input id=\"email\" type=\"email\" />\n<!-- Label se screen reader bata sakta hai yeh field kis liye hai -->\n<!-- Bina label ke woh sirf 'khaali dabba' kahega -->"
      ]
    ],
    "explain": [
      "Alt text tasveer ki zubani wazahat hai — screen reader ise parhta hai.",
      "Label har input field ko naam deta hai.",
      "Sab kuch keyboard se hona chahiye: Tab se aage, Enter se dabao.",
      "Rangon ka contrast itna ho ke halki nazar wala bhi parh sake."
    ],
    "language": "HTML",
    "mistake": "Div ko button bana kar click lagana — keyboard use karne wala use daba hi nahi sakta. Asli <button> use karo, woh khud keyboard-friendly hota hai.",
    "practice": "Apni website kholo aur mouse ko haath mat lagao — sirf Tab aur Enter se poori site chalao. Jahan atak jao, wahaan accessibility ki kami hai.",
    "check": [
      "Alt text kis kaam aata hai?",
      "Accessibility ka matlab kya hai?"
    ],
    "answer": "Tasveer ki wazahat jo screen reader parhta hai. Website ko har kisi ke liye usable banana."
  }
,
  {
    "title": "SEO",
    "outcomes": [
      "Samajhna ke SEO ka matlab hai Google me aasani se milna.",
      "Title aur description ka kaam samajhna.",
      "3 simple cheezein karna jinse Google tumhari site ko pasand kare."
    ],
    "concept": "Google ek bohot bara library ka librarian hai. Jab koi 'best biryani recipe' likhta hai to librarian woh kitaab nikaalta hai jiska naam aur pehla page sab se clear ho. SEO ka matlab hai apni website ko librarian ke liye clear banana: har page ka clear title ho, wazahat (description) ho, headings sahi hon. Koi jadu nahi — bas saaf suthri, helpful website banao aur Google ko samjhne do ke yeh page kis bare me hai.",
    "why": "Duniya ki zyada tar websites par log Google se aate hain. Bina SEO ke tumhari site ek aisi dukaan hai jiska board hi nahi laga — andar sab kuch hai, magar koi dhoondh nahi sakta.",
    "syntax": "<title>clear naam</title> + <meta description> + sahi headings",
    "examples": [
      [
        "Achha title aur description",
        "<title>Asaan Biryani Recipe | Mera Kitchen</title>\n<meta name=\"description\" content=\"Ghar par mazedaar chicken biryani banane ka asaan tareeqa, step by step.\" />\n<!-- Google search me yahi do cheezein nazar aayengi -->"
      ],
      [
        "Bura vs achha",
        "<!-- BURA: har page ka ek hi title -->\n<title>Home</title>\n\n<!-- ACHHA: har page ka apna clear title -->\n<title>HTML Seekho - Lesson 1 | Coding Vibes</title>"
      ]
    ],
    "explain": [
      "Title woh naam hai jo Google search me neela nazar aata hai.",
      "Description uske neeche wali 2 lines ki wazahat hai.",
      "Har page ka title unique aur clear hona chahiye.",
      "Sahi headings (h1, h2) Google ko batati hain page kis bare me hai."
    ],
    "language": "HTML",
    "mistake": "Har page par 'Home', 'Page 1' jaise bekaar titles rakhna — Google samajhta hai sab pages ek jaise hain aur kisi ko upar nahi dikhata. Har page ka apna clear title likho.",
    "practice": "Apne project ke har page ka title likho — aisa ke Google me parh kar samajh aaye yeh page kis bare me hai. Phir description bhi likho.",
    "check": [
      "SEO ka matlab kya hai?",
      "Title tag kyun zaroori hai?"
    ],
    "answer": "Website ko Google me aasani se milne ke qabil banana. Kyunke wahi search result me nazar aata hai aur click decide karta hai."
  },
  {
    "title": "Project architecture",
    "outcomes": [
      "Samajhna ke bari app me files ko saaf suthra organize karna parta hai.",
      "Frontend, backend aur database ka alag alag hissa samajhna.",
      "Ek simple folder structure banana."
    ],
    "concept": "Kitchen me bartan ek jagah, masale ek jagah, sabzi ek jagah — warna khana pakana na-mumkin ho jaata hai. Bari app me bhi files ko aise hi alag alag rakha jaata hai: screen wali files ek folder me (frontend), server wali ek folder me (backend), database wali cheezein alag. Is tarteeb ko architecture kehte hain. Jab har cheez apni jagah ho to 100 files wali app bhi sambhal jaati hai.",
    "why": "Chhota project ek file me chal jaata hai, magar real app me hazaaron lines hoti hain. Bina architecture ke ek change dhoondhne me ghante lag jaate hain. Yeh professional kaam ka farq hai.",
    "syntax": "my-app/ → frontend/ + backend/ + database/",
    "examples": [
      [
        "Simple folder structure",
        "my-app/\n├── frontend/      ← jo screen par nazar aata hai (React)\n│   ├── components/  ← chhote tukre\n│   └── pages/       ← poore pages\n├── backend/       ← server ka kaam (Node + Express)\n│   ├── routes/      ← API addresses\n│   └── models/      ← database wali cheezein\n└── .env            ← secrets (alag se)"
      ],
      [
        "Har cheez apni jagah",
        "// Button ka design badalna hai? → frontend/components me jao\n// Naya API banana hai? → backend/routes me jao\n// Pata hai kahan jana hai — dhoondhna nahi parta"
      ]
    ],
    "explain": [
      "Frontend folder me woh sab jo user dekhta hai.",
      "Backend folder me server, API aur database ka code.",
      "Components chhote tukre; pages un tukron se bane poore screens.",
      "Har file ka naam uske kaam ko bataye — 'cheez1.js' na rakho."
    ],
    "language": "Full Stack",
    "mistake": "Sab kuch ek hi file ya ek hi folder me daal dena — shuru me aasan lagta hai, magar 20 files ke baad kuch samajh nahi aata. Pehle din se folders banao.",
    "practice": "Kagaz par apni capstone app ke liye folder structure banao: frontend me kaunse pages, backend me kaunse routes, database me kaunsi tables.",
    "check": [
      "Project architecture kyun zaroori hai?",
      "Frontend aur backend ke folders me kya farq hai?"
    ],
    "answer": "Taake bari app me har file apni jagah ho aur change aasani se mile. Frontend me UI, backend me server/API ka code."
  },
  {
    "title": "Portfolio project",
    "outcomes": [
      "Samajhna ke portfolio tumhare kaam ka 'showcase' hai.",
      "Ek project ko portfolio-ready banana: live link + code + wazahat.",
      "Samajhna ke employer code nahi, bana hua kaam dekhna chahta hai."
    ],
    "concept": "Darzi apne silay hue kapre dikhata hai, degree nahi — developer ka portfolio bhi yahi hai. Portfolio ek website hai jahan tum apne banaye hue projects sajate ho: har project ka live link, thodi wazahat, aur code ka link. Jab koi tumhara kaam dekhe to kahe 'wah, yeh isne banaya hai!' — degree se zyada yeh bolta hai.",
    "why": "Job ya client ke liye portfolio hi tumhara interview hai. 'Main full stack developer hun' kehne se zyada powerful hai ek live website ka link bhejna.",
    "syntax": "portfolio = tumhara intro + projects (live link + wazahat + code)",
    "examples": [
      [
        "Ek project ki entry",
        "// Project: Mera Todo App\n// Kya hai: Kaam ki list banane wali app — add, delete, tick karo\n// Tech: React (frontend) + Node (backend)\n// Live: meri-todo.vercel.app\n// Code: github.com/mera-naam/todo-app"
      ],
      [
        "Portfolio ka structure",
        "// 1. Tumhara naam + ek line intro\n// 2. Skills ki list (HTML, CSS, JS, React, Node...)\n// 3. 3-4 best projects (har ek: tasveer, wazahat, live link)\n// 4. Contact ka tareeqa"
      ]
    ],
    "explain": [
      "Har project me 3 cheezein hon: kya hai, live link, code link.",
      "3 achhe projects 10 aadhe-adhure se behtar hain.",
      "Wazahat simple ho — koi bhi parh kar samjhe yeh app kya karti hai.",
      "Portfolio khud bhi ek project hai — use bhi deploy karo."
    ],
    "language": "Full Stack",
    "mistake": "10 aadhe-adhure projects daal dena — ek bhi poora nahi. Employer ko quantity nahi, quality chahiye. Kam rakho, magar polished.",
    "practice": "Apne ab tak ke best 2 projects chuno. Har ek ke liye ek paragraph wazahat likho: yeh kya karta hai, kin cheezon se bana, live link kya hai.",
    "check": [
      "Portfolio kya hai?",
      "Har project entry me kya kya hona chahiye?"
    ],
    "answer": "Tumhare banaye hue kaam ka showcase. Wazahat, live link aur code ka link."
  },
  {
    "title": "Capstone planning",
    "outcomes": [
      "Samajhna ke capstone tumhara sab se bara project hai — sab kuch ek jagah.",
      "Project ko chhote steps me torna (planning).",
      "Ek simple plan likhna: kya banega, kaunse hisse, kitne din."
    ],
    "concept": "Ghar banane se pehle naqsha banta hai — deewar kahan, darwaza kahan. Capstone bhi aisa hi hai: yeh tumhara final project hai jisme HTML se lekar deployment tak SAB kuch use hoga. Planning ka matlab hai code likhne se PEHLE sochna: app kya karegi? Kaunse pages honge? Kaunsa data save hoga? Kaun login karega? Jo pehle sochta hai, woh baad me nahi phansta.",
    "why": "Bina plan ke bara project beech me atak jaata hai — pata nahi chalta kya reh gaya. Plan tumhara naqsha hai; jab bhatko to wapas dekho aur seedhe ho jao.",
    "syntax": "idea → features ki list → pages → database tables → din divide karo",
    "examples": [
      [
        "Ek capstone plan",
        "// Project: Kitaab Store (online book shop)\n// Features:\n//  1. Kitaabon ki list dikhana\n//  2. Search karna\n//  3. Signup/Login\n//  4. Cart me daalna\n//  5. Order karna\n// Pages: Home, Kitaab detail, Cart, Login\n// Tables: users, books, orders"
      ],
      [
        "Din divide karna",
        "// Din 1-2: Frontend pages (React)\n// Din 3-4: Backend API (Express)\n// Din 5: Database + login\n// Din 6: Dono ko jorna (integration)\n// Din 7: Deploy + portfolio me daalna"
      ]
    ],
    "explain": [
      "Pehle ek line me likho: yeh app kya karti hai?",
      "Phir features ki list — chhoti chhoti, taake har ek poori ho sake.",
      "Har feature ke liye socho: frontend kya dikhayega, backend kya karega.",
      "Plan itna bara na ho ke poora na ho — chhota aur complete behtar hai."
    ],
    "language": "Full Stack",
    "mistake": "Itna bara plan banana ke poora na ho — 'Facebook jaisi app banaunga!' Phir beech me himmat toot jaati hai. Chhota socho, poora karo, phir barao.",
    "practice": "Apne capstone ka ek page ka plan likho: app ka naam, ek line me kya karti hai, 5 features, kaunse pages, kaunsi tables.",
    "check": [
      "Capstone project kya hai?",
      "Code likhne se pehle plan kyun zaroori hai?"
    ],
    "answer": "Final bara project jisme sab kuch use hota hai. Taake pata ho kya banana hai aur beech me na atko."
  },
  {
    "title": "Capstone build",
    "outcomes": [
      "Plan ke mutabiq project banana shuru karna.",
      "Frontend aur backend ko step by step jorna.",
      "Atakne par masla chhota karke hal karna."
    ],
    "concept": "Naqsha ban gaya, ab ghar banana hai — eent par eent. Capstone build ka matlab hai plan ko haqeeqat banana: pehle frontend ke pages, phir backend ke API, phir dono ko jorna. Roz ek chhota hissa poora karo. Aur jab atko — ghabrao mat! Masle ko chhota karo: 'poori app nahi chal rahi' ke bajaye poocho 'yeh ek button kyun nahi chal raha?' Chhota masla, chhota hal.",
    "why": "Yahi woh stage hai jahan tum 'seekhne wale' se 'banane wale' bante ho. Jo bana sakta hai, wohi developer hai — certificate se zyada yeh project bolega.",
    "syntax": "ek feature → banao → test karo → agla feature",
    "examples": [
      [
        "Ek din ka kaam",
        "// Aaj ka target: Login page + login API\n// 1. React me login form banao\n// 2. Express me /api/login route banao\n// 3. Dono ko fetch se joro\n// 4. Test karo: sahi password → andar, ghalat → error\n// Ho gaya? Kal ka target lo."
      ],
      [
        "Masla chhota karo",
        "// 'App nahi chal rahi' → bohot bara masla\n// Toro: 'Kya frontend khul raha hai? Haan.'\n// 'Kya API jawab de rahi hai? Nahi!' \n// Ab pata hai masla backend me hai — wahin dekho"
      ]
    ],
    "explain": [
      "Roz ek feature poora karo — aadhe kaam jama mat karo.",
      "Pehle frontend akela test karo, phir backend akela, phir joro.",
      "Har feature ke baad Git me commit karo — save point banate jao.",
      "Atko to masla chhota karo, phir hal dhoondo."
    ],
    "language": "Full Stack",
    "mistake": "Sab kuch ek saath banana aur aakhir me test karna — phir 10 masle ek saath nikalte hain aur pata nahi chalta kahan se shuru karein. Chhota banao, foran test karo.",
    "practice": "Apne capstone ka pehla feature chuno (sab se aasan wala). Use poora banao aur test karo. Phir Git me commit karo.",
    "check": [
      "Build ke doran atak jao to kya karna chahiye?",
      "Har feature ke baad kya karna chahiye?"
    ],
    "answer": "Masle ko chhota karke dekho ke exactly kahan problem hai. Test karo aur Git me commit karo."
  },
  {
    "title": "Capstone deployment",
    "outcomes": [
      "Apne capstone project ko internet par live karna.",
      "Frontend aur backend dono ko deploy karna.",
      "Live link ko test karna aur portfolio me lagana."
    ],
    "concept": "Cake ban gaya, ab use table par rakhna hai taake mehmaan kha sakein! Capstone deployment ka matlab hai tumhari poori app — frontend aur backend dono — ko internet par live karna. Frontend Vercel/Netlify par, backend bhi Vercel ya Render par. Dono ke live links mil jayenge, phir frontend ko backend ka live address bata do — bas! Ab tum apne phone se bhi apni app khol sakte ho.",
    "why": "Jo live nahi, woh portfolio me nahi ja sakta. Live link hi saboot hai ke tumne waqai banaya hai. Yeh tumhare developer safar ka sab se bara milestone hai.",
    "syntax": "frontend → Vercel | backend → Render/Vercel | dono ke live links jor do",
    "examples": [
      [
        "Deployment checklist",
        "// [ ] Frontend Vercel par deploy — link mila?\n// [ ] Backend Render par deploy — link mila?\n// [ ] Backend ka .env live server par lagaya?\n// [ ] Frontend me API ka address localhost se badal kar live kiya?\n// [ ] Phone se khol kar test kiya?"
      ],
      [
        "API address badalna",
        "// Local me tha:\nfetch('http://localhost:3000/api/books')\n// Live me hoga:\nfetch('https://meri-app.onrender.com/api/books')\n// Localhost sirf tumhare computer par chalta hai — live me live address chahiye"
      ]
    ],
    "explain": [
      "Frontend aur backend alag alag deploy hote hain — dono ke apne links.",
      "Live server par .env dobara lagana parta hai — secrets saath nahi jaate.",
      "Frontend me API ka address live wala hona chahiye, localhost nahi.",
      "Deploy ke baad phone se khol kar poori app test karo."
    ],
    "language": "Full Stack",
    "mistake": "Frontend deploy karke samajhna ke kaam ho gaya — magar API ka address abhi bhi localhost par hai. Live site par data nahi aayega. Hamesha live address lagao.",
    "practice": "Apna capstone deploy karo. Checklist ke har point par tick lagao. Aakhir me apne phone se khol kar ek feature use karo.",
    "check": [
      "Deploy ke baad frontend me kya badalna zaroori hai?",
      "Live server par secrets kaise pahunchte hain?"
    ],
    "answer": "API ka address localhost se live backend ke address par. Live server par alag se .env lagani parti hai."
  },
  {
    "title": "Final review",
    "outcomes": [
      "Poore safar ko dohrana: frontend se deployment tak.",
      "Apni kamzor jagah pehchan kar use mazboot karna.",
      "Aage ka rasta samajhna: ab kya seekhna hai."
    ],
    "concept": "Match se pehle team apni practice doharti hai — final review bhi yahi hai. Tumne 27 lessons me poora full stack dekha: computer kaise kaam karta hai, HTML/CSS/JS, React, Node, database, security, deployment. Ab peeche mur kar dekho: kaunsa topic sab se aasan laga? Kaunsa mushkil? Mushkil wale ko ek baar phir parho — is baar woh aasan lagega, kyunke tum ab wohi nahi rahe jo pehle the!",
    "why": "Bina review ke seekha hua bhool jaata hai. Review knowledge ko pakka karta hai — aur tumhe dikhata hai ke tum kitni door aa gaye ho. Yeh confidence tumhe agle step ke liye tayyar karta hai.",
    "syntax": "dohrao → kamzori dhoondo → mazboot karo → aage ka plan banao",
    "examples": [
      [
        "Khud se sawal",
        "// 1. Bina dekhe batao: API kya hai?\n// 2. Bina dekhe batao: authentication vs authorization?\n// 3. Ek naya banda pooche 'database kya hai' to kya jawab doge?\n// Jo jawab atak jaye, woh lesson dobara parho"
      ],
      [
        "Aage ka rasta",
        "// Ab tum jaante ho: full stack ka big picture\n// Agle steps: ek topic me deep jao (jaise React advanced)\n// Ya naye projects banao — har project tumhe 10 lessons se zyada sikhayega"
      ]
    ],
    "explain": [
      "Har lesson ka ek line ka khulasa apne lafzon me likho.",
      "Jahan atak jao, wohi tumhari agli manzil hai.",
      "Apna capstone kisi ko dikhao aur samjhao — sikhana sab se bara review hai.",
      "Portfolio update rakho — har naya project use behtar banata hai."
    ],
    "language": "Full Stack",
    "mistake": "Course khatam karke ruk jaana — 'ab sab aa gaya'. Technology rukti nahi, aur bina practice ke sab bhool jaata hai. Banaate raho, seekhte raho.",
    "practice": "Ek page par poore course ka khulasa likho apne lafzon me — har lesson ek line. Phir apne capstone ka live link kisi dost ko bhejo.",
    "check": [
      "Final review kyun zaroori hai?",
      "Course ke baad sab se achha agla step kya hai?"
    ],
    "answer": "Taake seekha hua pakka ho aur kamzoriyan pata chalein. Naye projects banana aur ek topic me deep jaana."
  }
];
