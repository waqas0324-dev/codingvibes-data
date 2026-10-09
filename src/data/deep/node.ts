export const nodeDeepLessons:Record<number,any>=[
  {
    "title": "Node.js fundamentals",
    "outcomes": [
      "Samjho ke Node.js kya hai aur ye JavaScript ko browser se bahar kyun chalata hai.",
      "Apne computer par Node ka version check karo.",
      "Pehli JavaScript file banao aur use terminal me node command se chalao."
    ],
    "concept": "Pehle JavaScript sirf browser ke andar chalti thi, jaise button dabane par kuch hona. Node.js ek program hai jo JavaScript ko browser se bahar nikal kar computer par chalata hai. Is se tum server bana sakte ho, files parh sakte ho, aur wohi JavaScript jo website me use hoti hai ab computer ke kaam bhi kar sakti hai.",
    "why": "Server banana hai to pehle ye samajhna zaroori hai ke Node.js hai kya. Is ke baad tum ek hi language (JavaScript) se website ka agla hissa bhi bana sakte ho aur peeche chalne wala server bhi.",
    "syntax": "node app.js",
    "examples": [
      [
        "Terminal me version check karo",
        "node --version"
      ],
      [
        "Pehla Node program (app.js me likho)",
        "console.log('Hello from Node.js');\\nconst naam = 'Waqas';\\nconsole.log('Welcome, ' + naam);"
      ],
      [
        "File ko terminal se chalao",
        "node app.js\\n// upar wali dono lines terminal me print hongi"
      ]
    ],
    "explain": [
      "Node.js install hone ke baad terminal me node command mil jati hai.",
      "node --version batata hai ke Node theek install hai ya nahi.",
      "console.log browser ki tarah Node me bhi text print karta hai, bas result terminal me nazar aata hai.",
      "node app.js ka matlab hai: app.js file ka JavaScript code chala do."
    ],
    "language": "Node.js",
    "mistake": "File ko browser me kholne ki koshish karna, ya node likhe baghair sirf app.js chalane ki koshish karna. Node ke programs terminal me chalte hain, browser me nahi.",
    "practice": "Ek nayi file hello.js banao jo tumhara naam aur tumhara sheher print kare. Phir terminal me node hello.js likh kar chalao.",
    "check": [
      "Node.js ka sab se bara faida kya hai? a) Sirf website ka design banana b) JavaScript ko browser ke bahar chalana c) Sirf games banana",
      "node app.js likhne se kya hota hai? a) File delete ho jati hai b) File ka code terminal me chalta hai c) Browser khul jata hai",
      "Node install hai ya nahi, ye kaise check karte hain? a) node --version b) node install c) check node"
    ],
    "answer": "b) JavaScript ko browser ke bahar chalana; b) File ka code terminal me chalta hai; a) node --version"
  },
  {
    "title": "npm & packages",
    "outcomes": [
      "Samjho ke npm kya hai aur ready-made packages kyun use hote hain.",
      "npm init se apne project ki package.json file banao.",
      "Koi package install karo aur zaroorat par uninstall bhi karo."
    ],
    "concept": "npm ek bahut bara store hai jahan hazaaron ready-made code ke packet (packages) rakhe hain. Tumhe har cheez khud likhne ki zaroorat nahi. Jaise tum cycle ka naya tyre khareed lete ho, khud banate nahi, waise hi npm se ready code le kar apne project me laga lete ho.",
    "why": "Real projects me har cheez khud likhna namumkin hai. npm se tum minutes me woh cheezein laga lete ho jinhe banane me hafte lagte, jaise server banana ya password mehfooz karna.",
    "syntax": "npm init -y  →  npm install <package-ka-naam>",
    "examples": [
      [
        "Project start karo",
        "npm init -y\\n// package.json ban jayegi, ye project ka taaruf-nama hai"
      ],
      [
        "Package install karo",
        "npm install express\\n// express download ho kar node_modules folder me aa jayega"
      ],
      [
        "package.json ka hissa dekho",
        "{\\n  \"name\": \"mera-project\",\\n  \"dependencies\": {\\n    \"express\": \"^4.18.2\"\\n  }\\n}"
      ]
    ],
    "explain": [
      "npm init -y project ka taaruf-nama (package.json) banata hai.",
      "npm install ke baad package node_modules folder me download hota hai.",
      "package.json me dependencies ki list hoti hai taake doosra banda npm install se sab kuch wapas la sake.",
      "npm uninstall <naam> se koi package hata sakte ho."
    ],
    "language": "Node.js",
    "mistake": "node_modules folder ko GitHub par push kar dena. Ye folder bahut bara hota hai aur dobara ban sakta hai, is liye ise .gitignore me daalo, push mat karo.",
    "practice": "Ek khaali folder banao, us me npm init -y chalao, phir npm install express chalao. package.json khol kar dekho ke express dependencies me aa gaya hai.",
    "check": [
      "npm kya hai? a) Code ka store jahan se ready packages milte hain b) Ek naya computer c) Website banane wala button",
      "package.json kis kaam aati hai? a) Tasveer dikhane ke liye b) Project ka taaruf aur packages ki list rakhne ke liye c) Internet chalane ke liye",
      "Doosre computer par project chalana ho to kya karna chahiye? a) node_modules copy karna b) npm install chalana c) Kuch nahi, khud chal jayega"
    ],
    "answer": "a) Code ka store jahan se ready packages milte hain; b) Project ka taaruf aur packages ki list rakhne ke liye; b) npm install chalana"
  },
  {
    "title": "Modules",
    "outcomes": [
      "Samjho ke module kya hota hai.",
      "Apni file se code export karke doosri file me require se mangwao.",
      "Node ke built-in modules (jaise fs) use karo."
    ],
    "concept": "Module ka matlab hai code ka ek alag dabba. Tum apna code chhoti chhoti files me baant lete ho, aur ek file doosri file se cheez le sakti hai. Jaise tumhare paas alag alag dibbe hon, ek me kapre, ek me kitaabein, aur zaroorat par tum dibbe se cheez nikaal lo.",
    "why": "Jab project bara hota hai to sab kuch ek file me likhna mushkil ho jata hai. Modules se code saaf rehta hai, chhota rehta hai, aur ek hi cheez dobara likhni nahi parti.",
    "syntax": "module.exports = cheez;  →  const cheez = require('./file-ka-naam');",
    "examples": [
      [
        "Apna module banao (math.js)",
        "function jama(a, b) {\\n  return a + b;\\n}\\nmodule.exports = jama;"
      ],
      [
        "Module use karo (app.js)",
        "const jama = require('./math');\\nconsole.log(jama(2, 3)); // 5 print hoga"
      ],
      [
        "Built-in module: file parho",
        "const fs = require('fs');\\nconst text = fs.readFileSync('note.txt', 'utf8');\\nconsole.log(text);"
      ]
    ],
    "explain": [
      "module.exports se tum file ke bahar cheez bhejte ho.",
      "require se tum doosri file ki cheez mangwate ho.",
      "Apni file ka naam likhte waqt ./ lagana zaroori hai, warna Node samjhega ke npm package hai.",
      "fs Node ka built-in module hai, ise install karne ki zaroorat nahi hoti."
    ],
    "language": "Node.js",
    "mistake": "require('math') likhna jabke file tumhari apni hai. Apni files ke liye hamesha ./ lagao: require('./math'). Baghair ./ ke Node npm packages me dhoondta hai aur error deta hai.",
    "practice": "Ek file greet.js banao jis me ek function ho jo naam lekar salaam kare. Phir app.js me ise require karke apne naam par chalao.",
    "check": [
      "module.exports kis kaam aata hai? a) File se cheez bahar bhejne ke liye b) File delete karne ke liye c) Internet chalane ke liye",
      "Apni file ko require karte waqt kya zaroori hai? a) Kuch nahi b) Naam ke aage ./ lagana c) File ko pehle delete karna",
      "fs module kis liye hai? a) Tasveer banane ke liye b) Files parhne aur likhne ke liye c) Games khelne ke liye"
    ],
    "answer": "a) File se cheez bahar bhejne ke liye; b) Naam ke aage ./ lagana; b) Files parhne aur likhne ke liye"
  },
  {
    "title": "HTTP server",
    "outcomes": [
      "Samjho ke server kya hota hai aur request/response kya hai.",
      "Node ke http module se apna pehla server banao.",
      "Samjho ke port kya hoti hai aur browser me server kaise kholo."
    ],
    "concept": "Server ek dukandaar ki tarah hai jo dukaan par baitha rehta hai. Browser (gahak) aata hai aur kehta hai mujhe ye cheez do (request), dukandaar cheez de deta hai (response). Node ka http module tumhe ye dukaan kholne deta hai.",
    "why": "Har website aur har app ke peeche ek server hota hai. Server banana seekhna backend ka pehla aur sab se zaroori qadam hai.",
    "syntax": "http.createServer((req, res) => { ... }).listen(3000);",
    "examples": [
      [
        "Sab se chhota server (server.js)",
        "const http = require('http');\\nconst server = http.createServer((req, res) => {\\n  res.end('Hello, main server hoon!');\\n});\\nserver.listen(3000);"
      ],
      [
        "Alag raaste, alag jawab",
        "const server = http.createServer((req, res) => {\\n  if (req.url === '/about') {\\n    res.end('Ye about page hai');\\n  } else {\\n    res.end('Ye home page hai');\\n  }\\n});\\nserver.listen(3000);"
      ],
      [
        "Browser me kholo",
        "// terminal me: node server.js\\n// phir browser me kholo:\\n// http://localhost:3000\\n// http://localhost:3000/about"
      ]
    ],
    "explain": [
      "createServer ek function leta hai jo har request par chalta hai.",
      "req me gahak ki maang hoti hai, res se hum jawab bhejte hain.",
      "listen(3000) ka matlab hai 3000 number darwaze (port) par baith jao.",
      "localhost ka matlab hai tumhara apna computer."
    ],
    "language": "Node.js",
    "mistake": "Code badalne ke baad server dobara start karna bhool jana. Node purana code yaad rakhta hai, is liye har tabdeeli ke baad terminal me server band karke (Ctrl+C) dobara node server.js chalao.",
    "practice": "Ek server banao jo / par 'Welcome' aur /time par aaj ki tareekh bheje. Browser me dono addresses khol kar dekho.",
    "check": [
      "Server kis ki tarah kaam karta hai? a) Dukandaar ki tarah jo maang par jawab deta hai b) TV ki tarah jo sirf dikhata hai c) Kitaab ki tarah jo sirf parhi jati hai",
      "Port kya hai? a) Server ka darwaza number b) Ek tasveer c) Ek password",
      "localhost:3000 ka matlab kya hai? a) Doosre mulk ka computer b) Tumhara apna computer, port 3000 par c) Internet ki dukaan"
    ],
    "answer": "a) Dukandaar ki tarah jo maang par jawab deta hai; a) Server ka darwaza number; b) Tumhara apna computer, port 3000 par"
  },
  {
    "title": "Express setup",
    "outcomes": [
      "Samjho ke Express kya hai aur ye kaam kyun asaan karta hai.",
      "Express install karke apne project me lagao.",
      "Express se pehla server banao aur chalao."
    ],
    "concept": "Express Node ke liye ek ready-made khaana-pakane ka set hai. Pichle lesson me tumne http se hath se server banaya tha, jo lamba kaam tha. Express wohi kaam chhoti aur saaf lines me kar deta hai. Real duniya me takreeban sab Node servers Express se bante hain.",
    "why": "Khud har cheez likhne me waqt lagta hai aur ghaltiyan hoti hain. Express se code chhota hota hai, parhna asaan hota hai, aur tum jaldi asli cheezein bana sakte ho.",
    "syntax": "const express = require('express');\\nconst app = express();",
    "examples": [
      [
        "Express install karo",
        "npm install express"
      ],
      [
        "Pehla Express server (app.js)",
        "const express = require('express');\\nconst app = express();\\napp.get('/', (req, res) => {\\n  res.send('Express chal raha hai!');\\n});\\napp.listen(3000);"
      ],
      [
        "Chalao aur dekho",
        "// terminal me: node app.js\\n// browser me kholo: http://localhost:3000"
      ]
    ],
    "explain": [
      "express() ek app banata hai, ye tumhara naya server hai.",
      "app.get ka matlab hai: jab koi / par GET request bheje to ye function chalao.",
      "res.send jawab bhejta hai, ye res.end se zyada asaan hai.",
      "app.listen batata hai ke server kis port par sune."
    ],
    "language": "Node.js",
    "mistake": "Express install kiye baghair require('express') likh dena. Pehle npm install express chalao, warna 'Cannot find module express' wala error aayega.",
    "practice": "Express install karo aur ek server banao jo / par tumhare naam ka welcome message bheje.",
    "check": [
      "Express kya hai? a) Node ke liye ready-made server banane wala package b) Ek nayi language c) Tasveer banane wala app",
      "Express use karne se pehle kya zaroori hai? a) Kuch nahi b) npm install express c) Computer restart karna",
      "app.get('/', ...) ka matlab kya hai? a) File delete karo b) Home page ki request par ye function chalao c) Server band karo"
    ],
    "answer": "a) Node ke liye ready-made server banane wala package; b) npm install express; b) Home page ki request par ye function chalao"
  },
  {
    "title": "Routes",
    "outcomes": [
      "Samjho ke route kya hota hai.",
      "GET aur POST routes banao.",
      "Route params (/users/5) aur query (?name=ali) ka farq samjho."
    ],
    "concept": "Route ka matlab hai raasta. Tumhare ghar me alag alag kamre hote hain, har kamre ka apna kaam. Waise hi server me alag alag raaste hote hain: /users ek kamra, /products doosra. Har raaste par jaane wale ko us ke mutabiq jawab milta hai.",
    "why": "Har page aur har feature ka apna address hota hai. Routes ke baghair tumhara server sirf ek hi jawab de sakta hai, chahe koi bhi address khole.",
    "syntax": "app.get('/users/:id', (req, res) => { ... });",
    "examples": [
      [
        "Simple routes",
        "app.get('/users', (req, res) => {\\n  res.send('Saare users');\\n});\\napp.get('/products', (req, res) => {\\n  res.send('Saare products');\\n});"
      ],
      [
        "Route param: ek user",
        "app.get('/users/:id', (req, res) => {\\n  res.send('User number ' + req.params.id);\\n});\\n// /users/5 kholo to 'User number 5' milega"
      ],
      [
        "Query: talash",
        "app.get('/search', (req, res) => {\\n  res.send('Tumne dhoonda: ' + req.query.q);\\n});\\n// /search?q=chai kholo"
      ]
    ],
    "explain": [
      ":id ek khaali jagah hai, us me jo likha ho wo req.params.id me milta hai.",
      "?q=chai jaisi cheez query hoti hai aur req.query me milti hai.",
      "Route param cheez ki pehchan ke liye hota hai (kaun sa user), query talash ya filter ke liye.",
      "GET data mangne ke liye hai, POST naya data bhejne ke liye."
    ],
    "language": "Node.js",
    "mistake": "/users/new ko /users/:id ke neeche likhna. Express upar se neeche check karta hai, to /users/new kholne par wo 'new' ko id samajh lega. Khaas route hamesha aam route se upar likho.",
    "practice": "Ek /hello/:name route banao jo /hello/waqas kholne par 'Assalam o Alaikum, waqas!' bheje.",
    "check": [
      "/users/:id me :id kya hai? a) Ek khaali jagah jisme koi bhi value aa sakti hai b) Ek ghalti c) Ek password",
      "/search?q=chai me q kya hai? a) Route param b) Query c) Port number",
      "Naya data bhejne ke liye kaun sa tareeqa hai? a) GET b) POST c) DELETE"
    ],
    "answer": "a) Ek khaali jagah jisme koi bhi value aa sakti hai; b) Query; b) POST"
  },
  {
    "title": "Middleware",
    "outcomes": [
      "Samjho ke middleware kya hota hai.",
      "Apna middleware function banao.",
      "express.json() use karke aane wala JSON data parho."
    ],
    "concept": "Middleware ek check-post hai. Request jab browser se nikal kar tumhare route tak jati hai to raaste me is check-post se guzarti hai. Jaise school ke gate par guard har bache ko dekhta hai, waise hi middleware har request ko dekh sakta hai, kuch likh sakta hai, ya rok bhi sakta hai.",
    "why": "Har route me baar baar wohi kaam likhne ki jagah (jaise request ka hisaab rakhna ya JSON parhna) ek middleware me likho. Code saaf rehta hai aur ghalti kam hoti hai.",
    "syntax": "app.use((req, res, next) => { ...; next(); });",
    "examples": [
      [
        "Hisaab rakhne wala middleware",
        "app.use((req, res, next) => {\\n  console.log(req.method, req.url);\\n  next();\\n});"
      ],
      [
        "JSON parhne ke liye",
        "app.use(express.json());\\napp.post('/users', (req, res) => {\\n  res.send('Naam mila: ' + req.body.name);\\n});"
      ],
      [
        "Rokne wala middleware",
        "function ijazat(req, res, next) {\\n  if (req.query.key === '1234') {\\n    next();\\n  } else {\\n    res.send('Ijazat nahi hai');\\n  }\\n}"
      ]
    ],
    "explain": [
      "app.use se middleware lagta hai, ye har request par chalta hai.",
      "next() ka matlab hai: agle check-post ya route ki taraf bhejo.",
      "express.json() aane wale JSON ko parh kar req.body me rakh deta hai.",
      "Middleware route se pehle lagao taake pehle wahi chale."
    ],
    "language": "Node.js",
    "mistake": "Middleware me next() likhna bhool jana. Agar next() na likho to request wahin atak jati hai aur browser ghoomta rehta hai, jawab kabhi nahi aata.",
    "practice": "Ek middleware banao jo har request ka waqt terminal me print kare. Phir koi bhi route khol kar dekho ke waqt print hua ya nahi.",
    "check": [
      "Middleware kya hai? a) Raaste me lagne wala check-post jo har request se guzarta hai b) Ek nayi file c) Ek error",
      "next() na likhne se kya hoga? a) Kuch nahi hoga b) Request atak jayegi, jawab nahi aayega c) Server tez chalega",
      "express.json() kis kaam aata hai? a) Tasveer dikhane ke liye b) Aane wale JSON data ko parhne ke liye c) Server band karne ke liye"
    ],
    "answer": "a) Raaste me lagne wala check-post jo har request se guzarta hai; b) Request atak jayegi, jawab nahi aayega; b) Aane wale JSON data ko parhne ke liye"
  },
  {
    "title": "REST APIs",
    "outcomes": [
      "Samjho ke REST API kya hoti hai.",
      "GET, POST, PUT, DELETE ka matlab aur farq samjho.",
      "JSON format me jawab bhejo."
    ],
    "concept": "REST ek tareeqa hai server se baat karne ka. Socho server ek waiter hai: 'menu dikhao' (GET), 'ye khana lao' (POST), 'order badal do' (PUT), 'order cancel karo' (DELETE). Tumhara mobile app aur website isi zabaan me server se baat karte hain.",
    "why": "Aaj kal website aur server alag alag hote hain aur API se baat karte hain. REST seekhna matlab tum kisi bhi app ka peeche wala hissa bana sakte ho.",
    "syntax": "app.get() → lao  |  app.post() → banao  |  app.put() → badlo  |  app.delete() → hatao",
    "examples": [
      [
        "List lao (GET)",
        "app.get('/users', (req, res) => {\\n  res.json([\\n    { id: 1, name: 'Ali' },\\n    { id: 2, name: 'Sara' }\\n  ]);\\n});"
      ],
      [
        "Naya banao (POST)",
        "app.post('/users', (req, res) => {\\n  const naya = req.body;\\n  res.status(201).json(naya);\\n});"
      ],
      [
        "Hatao (DELETE)",
        "app.delete('/users/:id', (req, res) => {\\n  res.json({ message: 'User ' + req.params.id + ' hata diya' });\\n});"
      ]
    ],
    "explain": [
      "res.json JavaScript cheez ko JSON bana kar bhejta hai.",
      "GET sirf data laata hai, kuch badalta nahi.",
      "POST naya data banata hai, PUT purana badalta hai, DELETE hatata hai.",
      "201 ka matlab hai 'ban gaya', 200 ka matlab hai 'theek hai'."
    ],
    "language": "Node.js",
    "mistake": "Naya data banane ke liye GET use karna. GET ka kaam sirf laana hai. Data banane ke liye hamesha POST use karo, warna browser tumhara data dobara bhej sakta hai.",
    "practice": "Ek chhoti todo API banao: GET /todos se list lao, POST /todos se naya kaam joro. Dono ko browser ya Thunder Client se test karo.",
    "check": [
      "Naya user banane ke liye kaun sa tareeqa sahi hai? a) GET /users b) POST /users c) DELETE /users",
      "res.json kya karta hai? a) File delete karta hai b) Data ko JSON bana kar bhejta hai c) Server band karta hai",
      "PUT kis kaam aata hai? a) Naya banana b) Purana data badalna c) Sab kuch dekhna"
    ],
    "answer": "b) POST /users; b) Data ko JSON bana kar bhejta hai; b) Purana data badalna"
  },
  {
    "title": "Validation",
    "outcomes": [
      "Samjho ke validation kyun zaroori hai.",
      "Aane wale data ki simple checking likho.",
      "Ghalat data par saaf error jawab bhejo."
    ],
    "concept": "Validation ka matlab hai darwaze par checking. Jab koi form bharta hai to tum check karte ho: naam khaali to nahi? email me @ hai ya nahi? Jaise cinema ke gate par ticket check hota hai, waise hi server par data check hota hai. Ghalat data andar nahi aane dena.",
    "why": "Agar ghalat ya aadha data andar aa gaya to app toot sakti hai ya database ganda ho jayega. Pehle din se checking lagana achi aadat hai.",
    "syntax": "if (!req.body.name) { return res.status(400).json({ error: 'Naam zaroori hai' }); }",
    "examples": [
      [
        "Naam zaroori hai",
        "app.post('/users', (req, res) => {\\n  if (!req.body.name) {\\n    return res.status(400).json({ error: 'Naam zaroori hai' });\\n  }\\n  res.json({ message: 'Theek hai' });\\n});"
      ],
      [
        "Email check karo",
        "const email = req.body.email;\\nif (!email || !email.includes('@')) {\\n  return res.status(400).json({ error: 'Sahi email likho' });\\n}"
      ],
      [
        "Umar number honi chahiye",
        "const umar = Number(req.body.umar);\\nif (!umar || umar < 1) {\\n  return res.status(400).json({ error: 'Sahi umar likho' });\\n}"
      ]
    ],
    "explain": [
      "400 ka matlab hai 'tumhari bheji hui cheez me ghalti hai'.",
      "return likhna zaroori hai taake error ke baad aage ka code na chale.",
      "Har zaroori field ko alag alag check karo aur saaf message do.",
      "includes('@') email ki sab se simple checking hai."
    ],
    "language": "Node.js",
    "mistake": "Sirf website (frontend) par checking karna aur server par na karna. Koi bhi seedha server ko ghalat data bhej sakta hai, is liye asli checking hamesha server par hoti hai.",
    "practice": "POST /users me ye lagao: naam khaali na ho, email me @ ho. Phir Thunder Client se ghalat data bhej kar dekho ke 400 error aata hai.",
    "check": [
      "Validation kya hai? a) Darwaze par data ki checking b) Tasveer banana c) Server tez karna",
      "400 status code ka matlab kya hai? a) Sab theek hai b) Bheje gaye data me ghalti hai c) Server so raha hai",
      "Asli checking kahan honi chahiye? a) Sirf frontend par b) Server par c) Kahin bhi nahi"
    ],
    "answer": "a) Darwaze par data ki checking; b) Bheje gaye data me ghalti hai; b) Server par"
  },
  {
    "title": "Environment variables",
    "outcomes": [
      "Samjho ke environment variable kya hota hai.",
      ".env file banao aur use karo.",
      "Secret cheezein (password, keys) code se alag rakho."
    ],
    "concept": "Socho tumhare ghar ki chaabi hai. Tum chaabi ko darwaze par latka kar nahi rakhte, alag jagah chhupate ho. Waise hi password aur secret keys code me nahi likhte. Unhe .env naam ki ek alag chhupi file me rakhte hain, aur code wahan se parh leta hai.",
    "why": "Tumhara code GitHub par jata hai jahan sab dekh sakte hain. Agar password code me likha hoga to sab ko nazar aa jayega. .env me rakhne se secret mehfooz rehta hai.",
    "syntax": "process.env.PORT",
    "examples": [
      [
        ".env file banao",
        "PORT=5000\\nDB_PASSWORD=meri-secret-chaabi"
      ],
      [
        "dotenv lagao aur parho",
        "require('dotenv').config();\\nconst port = process.env.PORT;\\nconsole.log('Port hai: ' + port);"
      ],
      [
        "Server me use karo",
        "require('dotenv').config();\\napp.listen(process.env.PORT);"
      ]
    ],
    "explain": [
      ".env ek simple text file hai jis me naam=value likhte hain.",
      "dotenv package is file ko parh kar process.env me daal deta hai.",
      "require('dotenv').config() sab se upar, sab se pehle likho.",
      "dotenv ko npm install dotenv se install karna parta hai."
    ],
    "language": "Node.js",
    "mistake": ".env file ko GitHub par push kar dena. .gitignore naam ki file me .env likh do taake wo kabhi upload na ho. Secret ek baar public ho gaya to use badalna parta hai.",
    "practice": "Ek .env file banao jis me PORT=4000 ho. dotenv install karo aur server ko process.env.PORT par chalao. Phir .gitignore me .env likhna mat bhoolo.",
    "check": [
      ".env file kis kaam aati hai? a) Secret cheezein code se alag rakhne ke liye b) Tasveer rakhne ke liye c) Games khelne ke liye",
      "process.env.PORT ka matlab kya hai? a) .env me likha PORT naam ka value lao b) Port band karo c) Naya port banao",
      ".env ko GitHub par jaane se kaise rokte hain? a) File delete karke b) .gitignore me .env likh kar c) Roka nahi ja sakta"
    ],
    "answer": "a) Secret cheezein code se alag rakhne ke liye; a) .env me likha PORT naam ka value lao; b) .gitignore me .env likh kar"
  },
  {
    "title": "Error handling",
    "outcomes": [
      "Samjho ke error handling kyun zaroori hai.",
      "try/catch se error pakro.",
      "Error middleware se user ko saaf jawab bhejo."
    ],
    "concept": "Error handling ka matlab hai plan B. Socho tum cycle chala rahe ho aur achanak tyre puncture ho jaye. Acha cycle wala ghabrata nahi, us ke paas extra tube hoti hai. Waise hi jab code me kuch ghalat ho to app girne ki jagah seedha jawab de: 'kuch ghalat hua, hum dekh rahe hain'.",
    "why": "Bina plan B ke app achanak band ho jati hai aur user naraaz hota hai. Saaf error se tumhe pata bhi chalta hai ke ghalti kahan hui.",
    "syntax": "try { ... } catch (err) { ... }",
    "examples": [
      [
        "try/catch se bachao",
        "app.get('/users/:id', (req, res) => {\\n  try {\\n    const user = dhoondo(req.params.id);\\n    res.json(user);\\n  } catch (err) {\\n    res.status(500).json({ error: 'Kuch ghalat ho gaya' });\\n  }\\n});"
      ],
      [
        "404 jab cheez na mile",
        "app.get('/users/:id', (req, res) => {\\n  const user = dhoondo(req.params.id);\\n  if (!user) {\\n    return res.status(404).json({ error: 'User nahi mila' });\\n  }\\n  res.json(user);\\n});"
      ],
      [
        "Error middleware (sab se aakhir me lagao)",
        "app.use((err, req, res, next) => {\\n  console.error(err);\\n  res.status(500).json({ error: 'Server me ghalti hui' });\\n});"
      ]
    ],
    "explain": [
      "try me wo code jo toot sakta hai, catch me wo jo tootne par chale.",
      "404 ka matlab hai 'cheez mili nahi', 500 ka matlab hai 'server me ghalti hui'.",
      "Error middleware 4 cheezein leta hai (err, req, res, next) aur sab routes ke baad lagta hai.",
      "console.error se asal ghalti terminal me likho taake tum dekh sako."
    ],
    "language": "Node.js",
    "mistake": "catch ko khaali chhor dena. Agar catch me kuch na likho to ghalti chhup jayegi aur tumhe kabhi pata nahi chalega ke masla kya tha. Hamesha error ko likho ya user ko batao.",
    "practice": "Ek /divide route banao jo ?a=10&b=0 par 400 error bheje ('zero se divide nahi hota') aur sahi numbers par sahi jawab de.",
    "check": [
      "try/catch kis kaam aata hai? a) Ghalti hone par app ko girne se bachane ke liye b) Code tez karne ke liye c) File banane ke liye",
      "404 ka matlab kya hai? a) Sab theek hai b) Maangi hui cheez nahi mili c) Server band hai",
      "Khaali catch kyun bura hai? a) Code lamba hota hai b) Ghalti chhup jati hai, pata nahi chalta c) Koi farq nahi parta"
    ],
    "answer": "a) Ghalti hone par app ko girne se bachane ke liye; b) Maangi hui cheez nahi mili; b) Ghalti chhup jati hai, pata nahi chalta"
  },
  {
    "title": "Authentication basics",
    "outcomes": [
      "Samjho ke authentication kya hota hai.",
      "Login ka basic flow samjho.",
      "Samjho ke password seedha text me kyun nahi save karte."
    ],
    "concept": "Authentication ka matlab hai pehchan. Jaise school me har bache ke paas ID card hota hai aur guard check karta hai ke tum waqai is school ke ho. Waise hi jab tum login karte ho to server check karta hai ke tum waqai tum ho, phir tumhara data dikhata hai.",
    "why": "Har user ka data alag hota hai. Bina pehchan ke koi bhi kisi ka bhi account khol lega. Login system har real app ki bunyaad hai.",
    "syntax": "app.post('/login', (req, res) => { ... });",
    "examples": [
      [
        "Simple login route",
        "app.post('/login', (req, res) => {\\n  const { email, password } = req.body;\\n  if (email === 'ali@mail.com' && password === '1234') {\\n    res.json({ message: 'Welcome, Ali!' });\\n  } else {\\n    res.status(401).json({ error: 'Email ya password ghalat' });\\n  }\\n});"
      ],
      [
        "Token ka idea",
        "// login kamyab ho to server ek token deta hai:\\nres.json({ token: 'abc-123-xyz' });\\n// user har agli request me ye token bhejta hai"
      ],
      [
        "Token check karne wala middleware",
        "function checkLogin(req, res, next) {\\n  if (req.headers.token === 'abc-123-xyz') {\\n    next();\\n  } else {\\n    res.status(401).json({ error: 'Pehle login karo' });\\n  }\\n}"
      ]
    ],
    "explain": [
      "401 ka matlab hai 'tumhari pehchan nahi hui'.",
      "Login kamyab ho to server token deta hai, ye user ka temporary ID card hai.",
      "Har private route se pehle token check hota hai.",
      "Real apps me password ko hash (code me badal) karke save karte hain."
    ],
    "language": "Node.js",
    "mistake": "Password ko seedha text me save karna. Agar database kisi ke hath lag gaya to sab ke password khul jayenge. Hamesha password ko hash karke rakho (jaise bcrypt se).",
    "practice": "Ek /login route banao jo sahi email/password par 'Welcome' kahe aur ghalat par 401 error bheje. Phir ek /profile route banao jo sirf sahi token par khule.",
    "check": [
      "Authentication kya hai? a) User ki pehchan check karna b) Tasveer banana c) Server tez karna",
      "401 ka matlab kya hai? a) Sab theek hai b) Pehchan nahi hui, login ghalat hai c) File mil gayi",
      "Password seedha text me kyun nahi save karte? a) Jagah kam hoti hai b) Database khul jaye to sab ke password zahir ho jayenge c) Koi wajah nahi"
    ],
    "answer": "a) User ki pehchan check karna; b) Pehchan nahi hui, login ghalat hai; b) Database khul jaye to sab ke password zahir ho jayenge"
  },
  {
    "title": "Database connection",
    "outcomes": [
      "Samjho ke database kyun zaroori hai.",
      "Node ko database se connect karo.",
      "Data save karo aur wapas parh kar dekho."
    ],
    "concept": "Database ek aisi almari hai jo server ke band hone par bhi cheezein sambhal kar rakhti hai. Socho whiteboard aur notebook ka farq: whiteboard (server ki yaad) light jaane par saaf ho jati hai, notebook (database) me likha rehta hai. User ka data isi notebook me save hota hai.",
    "why": "Bina database ke har restart par saara data gayab ho jayega. Real app ka data database me rehta hai taake hamesha mehfooz rahe.",
    "syntax": "mongoose.connect(process.env.DB_URL);",
    "examples": [
      [
        "Database se connect karo",
        "const mongoose = require('mongoose');\\nmongoose.connect(process.env.DB_URL)\\n  .then(() => console.log('Database jur gaya!'))\\n  .catch((err) => console.error('Ghalti:', err));"
      ],
      [
        "Ek cheez save karo",
        "const User = mongoose.model('User', { name: String });\\nconst ali = new User({ name: 'Ali' });\\nali.save(); // database me save ho gaya"
      ],
      [
        "Wapas parho",
        "app.get('/users', async (req, res) => {\\n  const sab = await User.find();\\n  res.json(sab);\\n});"
      ]
    ],
    "explain": [
      "mongoose MongoDB se baat karne wala mashhoor package hai.",
      "connect ek baar app start hote hi hota hai, har request par nahi.",
      "model ka matlab hai almari ka ek khana, jaise users ka khana.",
      "await ka matlab hai: database se jawab aane tak ruko."
    ],
    "language": "Node.js",
    "mistake": "Database se connect kiye baghair query chala dena, ya har request par naya connection kholna. Connection app start par ek baar banta hai, phir sab requests usi ko use karti hain.",
    "practice": "MongoDB Atlas ka free account banao, DB_URL ko .env me rakho, connect karo, aur ek user save karke GET /users se wapas parho.",
    "check": [
      "Database kyun zaroori hai? a) Tasveer ke liye b) Server band hone ke baad bhi data mehfooz rahe c) Koi zaroorat nahi",
      "Database se connection kab banta hai? a) Har request par naya b) App start hote hi ek baar c) Kabhi nahi",
      "await kis kaam aata hai? a) Database se jawab aane tak rukne ke liye b) Server band karne ke liye c) File delete karne ke liye"
    ],
    "answer": "b) Server band hone ke baad bhi data mehfooz rahe; b) App start hote hi ek baar; a) Database se jawab aane tak rukne ke liye"
  },
  {
    "title": "Testing APIs",
    "outcomes": [
      "Samjho ke API testing kyun zaroori hai.",
      "Thunder Client ya Postman se API test karo.",
      "Simple automated test ka idea samjho."
    ],
    "concept": "Testing ka matlab hai khana chakna. Customer ko khana dene se pehle bawarchi khud taste karta hai. Waise hi app launch karne se pehle tum apni API ko request bhej kar dekhte ho: jawab theek aa raha hai? Ghalat data par error aa raha hai?",
    "why": "Tum code badalte rehte ho, aur kabhi kabhi purani cheez toot jati hai. Testing se tootne ka pata pehle chal jata hai, user ke shikaayat karne se pehle.",
    "syntax": "POST http://localhost:3000/users   (Thunder Client me)",
    "examples": [
      [
        "GET test karo",
        "// Thunder Client me nayi request banao:\\n// GET http://localhost:3000/users\\n// Check karo: kya users ki list wapas aayi?"
      ],
      [
        "POST test karo",
        "// POST http://localhost:3000/users\\n// Body (JSON): { \"name\": \"Ali\" }\\n// Check karo: kya 201 status aur naya user wapas aaya?"
      ],
      [
        "Ghalat data test karo",
        "// POST http://localhost:3000/users\\n// Body (JSON): { }\\n// Check karo: kya 400 error aaya?\\n// (matlab validation kaam kar rahi hai)"
      ]
    ],
    "explain": [
      "Thunder Client VS Code ka free extension hai, Postman bhi yehi kaam karta hai.",
      "Har route ko sahi data aur ghalat data dono se test karo.",
      "Status code dekho: 200/201 matlab theek, 400/404/500 matlab masla hai.",
      "Automated test ka matlab hai ye checking code me likhna taake ek click par sab test chal jayein."
    ],
    "language": "Node.js",
    "mistake": "'Lagta hai kaam kar raha hai' keh kar bina test kiye deploy kar dena. Jo cheez test nahi hui wo tootegi zaroor, aur sab se bure waqt par tootegi.",
    "practice": "Apni todo API ke GET aur POST routes ko Thunder Client se test karo. Phir jaan boojh kar ghalat data bhejo aur dekho ke validation wala error aata hai.",
    "check": [
      "API testing kya hai? a) API ko request bhej kar jawab check karna b) Tasveer banana c) Server khareedna",
      "Thunder Client kis kaam aata hai? a) Bijli banane ke liye b) API requests bhej kar test karne ke liye c) Games khelne ke liye",
      "Ghalat data bhejne par kya check karna chahiye? a) Kuch nahi b) Ke sahi error (jaise 400) wapas aaye c) Ke server band ho jaye"
    ],
    "answer": "a) API ko request bhej kar jawab check karna; b) API requests bhej kar test karne ke liye; b) Ke sahi error (jaise 400) wapas aaye"
  },
  {
    "title": "Node project",
    "outcomes": [
      "Sab seekhi hui cheezon ko jor kar ek poora project banao.",
      "Sahi folder structure use karo.",
      "Project complete hone ki checklist khud check karo."
    ],
    "concept": "Ab tak tumne alag alag tukre seekhe: server, routes, validation, database. Ab waqt hai poori building banane ka. Ek chhota notes API project banao jis me notes banein, parhe jayein, badlein aur hatein. Yehi real backend developer ka kaam hai.",
    "why": "Tukre janna aur poora project banana do alag skills hain. Jab tum ek mukammal project bana lete ho to tum use job ya client ko dikhane ke qabil ho jate ho.",
    "syntax": "notes-app/ → .env → app.js → routes/notes.js → models/note.js",
    "examples": [
      [
        "Folder structure",
        "notes-app/\\n  .env              // secret cheezein\\n  app.js            // server start hota hai\\n  routes/notes.js   // saare routes\\n  models/note.js    // database ka khana"
      ],
      [
        "app.js ka khaaka",
        "require('dotenv').config();\\nconst express = require('express');\\nconst app = express();\\napp.use(express.json());\\napp.use('/notes', require('./routes/notes'));\\napp.listen(process.env.PORT);"
      ],
      [
        "Aakhri checklist",
        "// 1. npm init hua?\\n// 2. .env .gitignore me hai?\\n// 3. Har route Thunder Client se test hua?\\n// 4. Ghalat data par sahi error aata hai?"
      ]
    ],
    "explain": [
      "Routes alag folder me, database wala hissa alag folder me, yehi saaf structure hai.",
      "app.js sirf cheezon ko jorta hai, asal kaam routes aur models me hota hai.",
      "Project khatam karne se pehle checklist se har cheez test karo.",
      "Ye project tumhare portfolio me jayega, is liye saaf code likho."
    ],
    "language": "Node.js",
    "mistake": "Saara code ek hi app.js file me likh dena: routes bhi, database bhi, validation bhi. Shuru me theek lagta hai, lekin 200 lines ke baad kuch samajh nahi aata. Pehle din se alag files banao.",
    "practice": "Notes API project banao: POST /notes (naya note), GET /notes (saare notes), DELETE /notes/:id (hatao). Validation lagao, .env use karo, aur har route Thunder Client se test karo.",
    "check": [
      "Routes alag file me kyun rakhte hain? a) Code saaf aur sambhalne me asaan rahe b) Koi wajah nahi c) Server tez chale",
      "app.js ka kaam kya hai? a) Sab kuch usi me likhna b) Cheezon ko jorna: middleware, routes, server start c) Database banana",
      "Project deploy karne se pehle sab se zaroori kya hai? a) Har route ko test karna b) Kuch nahi c) Sirf design dekhna"
    ],
    "answer": "a) Code saaf aur sambhalne me asaan rahe; b) Cheezon ko jorna: middleware, routes, server start; a) Har route ko test karna"
  }
];
