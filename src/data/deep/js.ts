export const jsDeepLessons:Record<number,any>=[
  {
    "title": "JavaScript fundamentals",
    "outcomes": [
      "Apne lafzon me bata sako ke JavaScript kya hai aur website me iska kya kaam hai.",
      "HTML file me <script> tag laga ke JavaScript code likhna aur chalana.",
      "console.log() se message likhna aur browser ke console me dekhna."
    ],
    "concept": "Soch lo ke website ek khilona ghar hai. HTML uski deewarein aur darwaze hain, CSS uska rang aur sajaawat hai, aur JavaScript uski bijli hai. Bijli ke baghair ghar me pankha nahi chalega, light nahi jalegi — bas deewarein khari rahengi. Isi tarah JavaScript website ko zinda karta hai: button dabao to kuch ho, tasveer badle, message aaye. JavaScript ek programming language hai jo browser ke andar chalti hai.",
    "why": "Baghair JavaScript ke website sirf ek tasveer jaisi hoti hai — dekh sakte ho, chhoo nahi sakte. JavaScript se website user se baat karne lagti hai, aur yahi cheez aam website ko asli web app banati hai.",
    "syntax": "<script> console.log(\"Salam!\"); </script>",
    "examples": [
      [
        "Pehla JavaScript program",
        "<script>\n  console.log(\"Salam, Coding Vibes!\");\n</script>"
      ],
      [
        "Button dabane pe message",
        "<button onclick=\"alert('Tum ne button dabaya!')\">Dabao Mujhe</button>"
      ],
      [
        "Do line code, do message",
        "<script>\n  console.log(\"Pehli line\");\n  console.log(\"Doosri line\");\n</script>"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "JavaScript code <script> tag ke andar likha jata hai, aur ye tag HTML file me hota hai.",
      "console.log() ka matlab hai: ye message console me likh do. Console browser ka ek chhupa hua notebook hai — F12 dabane se khulta hai.",
      "alert() ek chhota popup khol deta hai jo user ko foran message dikhata hai.",
      "Code oopar se neeche ki taraf, ek ek line karke chalta hai — pehli line pehle, doosri baad me."
    ],
    "mistake": "Script tag ke baghair JavaScript likh dena — browser use aam text samjhega aur kuch nahi chalega. Hamesha code <script> ... </script> ke andar likho.",
    "practice": "Ek HTML file banao, usme <script> tag lagao, aur console.log() me apna naam likho. Phir file browser me kholo, F12 dabao aur apna naam console me dekho.",
    "check": [
      "Website ko 'zinda' (interactive) kaun banata hai? (a) HTML (b) CSS (c) JavaScript",
      "JavaScript code kis tag ke andar likha jata hai? (a) <js> (b) <script> (c) <code>",
      "console.log('Salam') kya karega? (a) page pe bara heading likhega (b) console me 'Salam' likhega (c) kuch nahi karega"
    ],
    "answer": "c; b; b"
  },
  {
    "title": "Variables & data types",
    "outcomes": [
      "let aur const se variable banana aur dono ka farq samajhna.",
      "Teen basic data types pehchanna: text (string), number, aur haan/naa (boolean).",
      "Variable me value rakhna, badalna aur console me dekhna."
    ],
    "concept": "Variable ek aisa dabba hai jis pe naam likha hota hai. Dabbe ke andar koi cheez rakho — naam, umar, keemat — aur jab zaroorat ho, dabbe ka naam lo, cheez mil jayegi. let wala dabba baad me khol ke cheez badli ja sakti hai, const wala dabba ek dafa band ho jaye to uski cheez hamesha wahi rehti hai. Data types ka matlab hai cheez ki qism: lafz, ginti, ya haan/naa.",
    "why": "Har program me maloomat sambhal ke rakhni parti hai — user ka naam, uski umar, kitabon ki ginti. Variables ke baghair program kuch yaad hi nahi rakh sakta, har cheez bhool jayega.",
    "syntax": "let naam = \"Ali\"; const umar = 12; let student = true;",
    "examples": [
      [
        "Pehle variables",
        "let naam = \"Ali\";\nlet umar = 12;\nconsole.log(naam);\nconsole.log(umar);"
      ],
      [
        "let badal sakta hai, const nahi",
        "let sheher = \"Lahore\";\nsheher = \"Karachi\";\nconsole.log(sheher);\nconst mulk = \"Pakistan\";\nconsole.log(mulk);"
      ],
      [
        "Data types dekho",
        "console.log(typeof \"Ali\");\nconsole.log(typeof 12);\nconsole.log(typeof true);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Lafz hamesha quotes me likhe jate hain — 'Ali' ya \"Ali\". Is qism ko string kehte hain.",
      "Number baghair quotes ke likha jata hai — 12, 3.5. Quotes lagao ge to wo lafz ban jayega.",
      "true/false ko boolean kehte hain — ye haan ya naa wale sawalon ka jawab hota hai.",
      "typeof batata hai ke dabbe ke andar kis qism ki cheez hai."
    ],
    "mistake": "const wale variable ko dobara value dene ki koshish karna — jaise const umar = 12; phir umar = 13; — is se error aayega. Jo cheez badalni hai uske liye let use karo.",
    "practice": "Apne bare me teen variables banao: apna naam (string), apni umar (number), aur kya tum student ho (boolean). Teenon ko console.log se dikhao.",
    "check": [
      "Kaun sa variable baad me badla ja sakta hai? (a) const (b) let (c) dono nahi",
      "typeof \"5\" kya dega? (a) number (b) string (c) boolean",
      "let umar = 12; me 12 ka data type kya hai? (a) string (b) number (c) boolean"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "Operators & conditionals",
    "outcomes": [
      "Hisaab wale operators (+, -, *, /, %) se calculations karna.",
      "Comparison (>, <, ===) se do cheezon ka muqabla karna.",
      "if/else se program ko faisla karwana: agar ye to wo, warna kuch aur."
    ],
    "concept": "Operators wo chhote nishan hain jin se hisaab hota hai — jaise dukandaar + aur - se hisaab karta hai. Conditional ka matlab hai faisla: agar barish ho rahi hai to chhata lo, warna dhoop ka chashma. Program me if ka matlab 'agar' hai — agar shart poori hui to pehla kaam karo, warna (else) doosra kaam karo.",
    "why": "Program har waqt faisle karta hai — agar password sahi hai to andar aane do, agar paise kam hain to 'paise jama karo' likho. Faislon ke baghair program ek hi seedhi line pe chalta, user ki koi baat na sunta.",
    "syntax": "if (umar >= 18) { console.log(\"Andar aao\"); } else { console.log(\"Bahar raho\"); }",
    "examples": [
      [
        "Chhota calculator",
        "let a = 10;\nlet b = 3;\nconsole.log(a + b);\nconsole.log(a * b);\nconsole.log(a % b);"
      ],
      [
        "Even ya odd check karo",
        "let n = 7;\nif (n % 2 === 0) {\n  console.log(\"Even hai\");\n} else {\n  console.log(\"Odd hai\");\n}"
      ],
      [
        "Grade wala faisla",
        "let marks = 85;\nif (marks >= 90) {\n  console.log(\"A+ Grade\");\n} else if (marks >= 60) {\n  console.log(\"Pass ho!\");\n} else {\n  console.log(\"Fail\");\n}"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "% ka matlab hai taqseem ke baad bachi hui cheez — 7 % 2 ka jawab 1 hai, is liye 7 odd hai.",
      "=== ka matlab hai 'bilkul barabar' — ye qism bhi check karta hai, is liye hamesha === use karo.",
      "else if ka matlab hai: pehli shart na poori hui to doosri check karo.",
      "Shart ke andar ka code sirf tab chalta hai jab shart true ho."
    ],
    "mistake": "if ke andar = lagana jabke === lagana tha. if (x = 5) ka matlab 'x ko 5 de do' hai, 'x 5 ke barabar hai' nahi — aur ye hamesha true ban jata hai. Barabri check ke liye hamesha === likho.",
    "practice": "Ek variable me apni umar rakho. if/else se check karo: agar umar 18 ya zyada hai to 'Tum bare ho' likho, warna 'Tum chhote ho' likho.",
    "check": [
      "7 % 3 ka jawab kya hai? (a) 2 (b) 1 (c) 0",
      "Barabri check karne ke liye sahi nishan kaun sa hai? (a) = (b) == (c) ===",
      "if (marks > 50) false hua to kya chalega? (a) if wala code (b) else wala code (c) dono"
    ],
    "answer": "b; c; b"
  },
  {
    "title": "Loops & iteration",
    "outcomes": [
      "for loop se ek kaam muqarrar dafa dohrana.",
      "while loop se tab tak dohrana jab tak shart poori ho.",
      "Samajhna ke loop kab rukta hai aur infinite loop se bachna."
    ],
    "concept": "Loop ek aisi machine hai jo ek hi kaam baar baar karti hai. Socho tumhe 1 se 100 tak ginti likhni hai — haath se likhoge to din lag jayega, magar loop ko kaho '1 se shuru karo, 100 tak ek ek barhao, har dafa likh do' aur kaam 3 line me ho gaya. for loop tab use hota hai jab pehle se pata ho kitni dafa dohrana hai; while loop tab jab bas shart poori hone tak dohrana hai.",
    "why": "Real programs me hazaaron cheezein hoti hain — hazaar students, hazaar tasveerein. Loop ke baghair har ek ke liye alag line likhni parti. Loop ek chhota code hazaar dafa chalata hai.",
    "syntax": "for (let i = 1; i <= 5; i++) { console.log(i); }",
    "examples": [
      [
        "1 se 5 tak ginti",
        "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}"
      ],
      [
        "5 ka pehara (table)",
        "for (let i = 1; i <= 10; i++) {\n  console.log(\"5 x \" + i + \" = \" + (5 * i));\n}"
      ],
      [
        "while loop",
        "let ginti = 3;\nwhile (ginti > 0) {\n  console.log(ginti);\n  ginti = ginti - 1;\n}\nconsole.log(\"Khatam!\");"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "for ke teen hisse hain: shuru kahan se (let i = 1), rukna kab (i <= 5), har dafa kya badle (i++ ka matlab 1 barhao).",
      "i++ ka matlab hai i ki value me 1 jama karo.",
      "while loop pehle shart dekhta hai — shart true hai to andar ka code chalta hai, phir dobara shart dekhta hai.",
      "while me ginti khud ghatani parti hai, warna loop kabhi nahi rukega."
    ],
    "mistake": "Infinite loop — aisa loop jo kabhi na ruke, jaise while(true) ya for jisme i++ bhool jao. Browser hang ho jata hai. Hamesha check karo ke loop rukne ki shart kabhi poori hogi.",
    "practice": "for loop se 1 se 20 tak sirf even numbers (2, 4, 6...) console me likho. Hint: % wala operator yaad karo.",
    "check": [
      "for (let i = 1; i <= 3; i++) kitni dafa chalega? (a) 2 (b) 3 (c) 4",
      "i++ ka matlab kya hai? (a) i me 1 jama karo (b) i ko 2 se zarb do (c) i ko khatam karo",
      "while loop kab rukta hai? (a) 10 dafa ke baad (b) jab shart false ho jaye (c) kabhi nahi rukta"
    ],
    "answer": "b; a; b"
  },
  {
    "title": "Functions",
    "outcomes": [
      "Apna function banana: naam dena aur code andar likhna.",
      "Parameters se function ko bahar se maloomat dena.",
      "return se function se jawab wapas lena."
    ],
    "concept": "Function ek recipe ki tarah hai. Recipe ka naam hota hai — 'chai banao' — aur jab chai chahiye ho, recipe ka naam lo, chai ban jati hai, baar baar poora tareeqa likhne ki zaroorat nahi. Function me bhi naam hota hai, andar kaam likha hota hai, aur jab zaroorat ho us naam se bula lo. Parameters wo cheezein hain jo tum recipe ko dete ho — jaise 'do cup wali chai banao' me 'do' parameter hai. return ka matlab hai kaam karke jawab wapas de do.",
    "why": "Ek hi kaam program me kai jagah chahiye hota hai — do jaga jama karna, teen jaga salaam karna. Function ek dafa likho, jahan chaho bula lo. Code chhota, saaf aur ghalti se pak rehta hai.",
    "syntax": "function jama(a, b) { return a + b; }",
    "examples": [
      [
        "Salaam karne wala function",
        "function salaam(naam) {\n  console.log(\"Salam, \" + naam + \"!\");\n}\nsalaam(\"Ali\");\nsalaam(\"Sara\");"
      ],
      [
        "Jawab wapas dene wala function",
        "function dogna(n) {\n  return n * 2;\n}\nlet jawab = dogna(7);\nconsole.log(jawab);"
      ],
      [
        "Arrow function (chhota tareeqa)",
        "const jama = (a, b) => {\n  return a + b;\n};\nconsole.log(jama(4, 5));"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "function ke baad naam, phir brackets me parameters — ye wo cheezein hain jo function ko milengi.",
      "Function sirf likhne se nahi chalta — uska naam leke bulana parta hai, jaise salaam(\"Ali\").",
      "return ke baad jo likha ho wo function ka jawab ban jata hai; return ke baad wali line nahi chalti.",
      "Arrow function (=>) function likhne ka chhota tareeqa hai, kaam bilkul wahi karta hai."
    ],
    "mistake": "Function bana lena magar use bulana bhool jana — phir heran hona ke code chala kyun nahi. Yaad rakho: define karna aur call karna do alag kaam hain, dono zaroori hain.",
    "practice": "Ek function banao 'multiply' jo do numbers le aur unki zarb (multiply) return kare. Phir use 6 aur 7 deke jawab console me dikhao.",
    "check": [
      "Function ko chalane ke liye kya zaroori hai? (a) sirf banana (b) naam leke bulana (c) kuch nahi",
      "return ka kya kaam hai? (a) function rokna (b) jawab wapas dena (c) error dikhana",
      "salaam(\"Ali\") me \"Ali\" kya hai? (a) function ka naam (b) parameter ki value (c) return value"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "Arrays & objects",
    "outcomes": [
      "Array banana: ek list me kai cheezein rakhna aur index se nikalna.",
      "Object banana: ek cheez ki poori maloomat ek jagah rakhna.",
      "Array me cheez jama karna (push) aur object ki value parhna."
    ],
    "concept": "Array ek dibbon ki qataar hai — pehla dibba, doosra dibba, teesra dibba. Har dibbe ka number hota hai jo 0 se shuru hota hai. Jaise phalon ki tokri: tokri[0] me aam, tokri[1] me kela. Object ek cheez ki poori file hai — ek student ki file me uska naam bhi, umar bhi, sheher bhi. File kholne ke liye naam se pukaro: student.naam.",
    "why": "Real duniya ka data aise hi hota hai — doston ki list, ek dost ki poori details. Array liston ke liye, object ek cheez ki mukammal maloomat ke liye. Dono ke baghair bara data sambhalna namumkin hai.",
    "syntax": "let fruits = [\"aam\", \"kela\", \"angoor\"]; · let student = { naam: \"Ali\", umar: 12 };",
    "examples": [
      [
        "Array se cheez nikalna",
        "let dost = [\"Ali\", \"Sara\", \"Usman\"];\nconsole.log(dost[0]);\nconsole.log(dost[2]);\nconsole.log(dost.length);"
      ],
      [
        "Array me cheez jama karna",
        "let fruits = [\"aam\", \"kela\"];\nfruits.push(\"angoor\");\nconsole.log(fruits);\nconsole.log(fruits.length);"
      ],
      [
        "Object ki maloomat parhna",
        "let student = {\n  naam: \"Ali\",\n  umar: 12,\n  sheher: \"Lahore\"\n};\nconsole.log(student.naam);\nconsole.log(student.umar);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Array ki ginti 0 se shuru hoti hai — pehli cheez [0], doosri [1]. Isay index kehte hain.",
      ".length batata hai ke array me kitni cheezein hain.",
      ".push() array ke aakhir me nayi cheez jama kar deta hai.",
      "Object me har cheez ka naam (key) hota hai — student.naam ka matlab student ki file me se 'naam' nikalo."
    ],
    "mistake": "Array ka pehla index 1 samajhna. dost[1] doosra dost hai, pehla nahi! Pehla hamesha [0] hota hai. Ye beginners ki sab se aam ghalti hai.",
    "practice": "Apne 3 doston ke naam ka array banao aur teesre dost ka naam console me dikhao. Phir apna ek object banao: naam, umar, sheher — aur apna sheher console me dikhao.",
    "check": [
      "let x = [\"a\", \"b\", \"c\"]; me x[1] kya hai? (a) a (b) b (c) c",
      "Array ke aakhir me cheez jama karne ke liye? (a) push() (b) pop() (c) add()",
      "student.naam me 'naam' kya hai? (a) array ka index (b) object ki key (c) function"
    ],
    "answer": "b; a; b"
  },
  {
    "title": "DOM selection",
    "outcomes": [
      "Samajhna ke DOM kya hai: browser ka HTML ka banaya hua darakht.",
      "getElementById aur querySelector se page ke elements pakarna.",
      "Pakre hue element ka text JavaScript se badalna."
    ],
    "concept": "Jab browser HTML parhta hai to uska ek darakht (tree) bana leta hai — is darakht ko DOM kehte hain. Har tag darakht ka ek patta hai. JavaScript is darakht ke patte pakar sakta hai aur unhe badal sakta hai — jaise ek tehni pakar ke uska rang badal do. Element pakarne ke liye uska id ya class ka naam batana parta hai, phir JavaScript use dhoondh leta hai.",
    "why": "Page pe jo likha hai wo pehle se HTML me fixed hota hai. Use badalna ho — jaise button dabane pe heading ka text badle — to pehle us element ko pakarna parta hai. DOM selection har interactive website ki pehli seedhi hai.",
    "syntax": "document.getElementById(\"meraId\") · document.querySelector(\".meraClass\")",
    "examples": [
      [
        "Heading ka text badalna",
        "// HTML: <h1 id=\"meriHeading\">Purana Text</h1>\nlet h = document.getElementById(\"meriHeading\");\nh.textContent = \"Naya Text!\";"
      ],
      [
        "querySelector se pakarna",
        "// HTML: <p class=\"paigham\">Salam</p>\nlet p = document.querySelector(\".paigham\");\np.textContent = \"Khuda Hafiz\";"
      ],
      [
        "Style badalna",
        "// HTML: <h1 id=\"rang\">Dekho</h1>\nlet h2 = document.getElementById(\"rang\");\nh2.style.color = \"green\";"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "document ka matlab hai poora page — 'page me se dhoondho'.",
      "getElementById id se dhoondhta hai; querySelector class (.) ya id (#) dono se dhoondh sakta hai.",
      ".textContent se element ke andar ka text parha ya badla ja sakta hai.",
      ".style.color se element ka rang badla ja sakta hai."
    ],
    "mistake": "Script ko element se pehle chala dena — agar <script> heading se oopar ho to heading abhi bani hi nahi hoti, dhoondhne pe null milega. Script hamesha body ke aakhir me rakho, taake pehle saare elements ban jayein.",
    "practice": "Ek HTML page banao jisme ek h1 ho jiska id 'salam' ho. Script me use pakro aur uska text apne naam pe badal do. Page kholo aur dekho.",
    "check": [
      "DOM kya hai? (a) ek naya browser (b) HTML ka darakht jo browser banata hai (c) ek CSS file",
      "id='box' wale element ko pakarne ke liye? (a) getElementById(\"box\") (b) getElementById(\"#box\") (c) getElement(\"box\")",
      "Element ka text badalne ke liye? (a) .text (b) .textContent (c) .inner"
    ],
    "answer": "b; a; b"
  },
  {
    "title": "Events & interactions",
    "outcomes": [
      "Samajhna ke event kya hai: page pe hone wala waqia (click, type).",
      "addEventListener se button pe click ka chokidar lagana.",
      "Click aur input pe page ko jawab dilwana."
    ],
    "concept": "Event ka matlab hai waqia — user ne button dabaya, ye ek waqia hai; user ne kuch likha, ye bhi ek waqia hai. addEventListener ek chokidar hai jo darwaze pe khara rehta hai aur kehta hai: 'jab click ka waqia ho, ye kaam kar dena.' Tum chokidar ko waqie ka naam (\"click\") aur kaam (function) dete ho, bas — uske baad user jab bhi dabaye, kaam khud ho jata hai.",
    "why": "Button dabane pe kuch na ho to website murda lagti hai. Events hi wo taar hain jo user ke haath ko page se jorti hain — har like button, har menu, har game inhi se chalta hai.",
    "syntax": "button.addEventListener(\"click\", function() { ... });",
    "examples": [
      [
        "Click pe text badlo",
        "// HTML: <button id=\"btn\">Dabao</button><p id=\"msg\"></p>\nlet btn = document.getElementById(\"btn\");\nbtn.addEventListener(\"click\", function() {\n  document.getElementById(\"msg\").textContent = \"Tum ne dabaya!\";\n});"
      ],
      [
        "Click pe rang badlo",
        "// HTML: <button id=\"rangBtn\">Rang Badlo</button>\nlet rb = document.getElementById(\"rangBtn\");\nrb.addEventListener(\"click\", function() {\n  document.body.style.backgroundColor = \"lightblue\";\n});"
      ],
      [
        "Likhte hi dikhao",
        "// HTML: <input id=\"likho\" placeholder=\"Kuch likho\"><p id=\"dikhao\"></p>\nlet inp = document.getElementById(\"likho\");\ninp.addEventListener(\"input\", function() {\n  document.getElementById(\"dikhao\").textContent = inp.value;\n});"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "addEventListener ke do hisse hain: waqie ka naam (\"click\") aur wo function jo waqia hone pe chale.",
      "\"input\" wala waqia har harf likhne pe chalta hai — isi se live preview banta hai.",
      "inp.value ka matlab hai input ke dabbe me jo likha hai wo nikalo.",
      "Ek hi button pe kai chokidar (listeners) lagaye ja sakte hain."
    ],
    "mistake": "Listener me function ke naam ke saath () laga dena — addEventListener(\"click\", meraKaam()) galat hai. Brackets lagane se function foran chal jata hai, click ka intezar nahi karta. Sirf naam likho: meraKaam.",
    "practice": "Ek button banao jo dabane pe page ka background color badal de. Hint: document.body.style.backgroundColor use karo.",
    "check": [
      "Event ka matlab kya hai? (a) ek function ka naam (b) page pe hone wala waqia (c) ek error",
      "addEventListener(\"click\", meraKaam()) me kya ghalat hai? (a) kuch nahi (b) () lagane se function foran chal jayega (c) click ki spelling",
      "Input me har harf pe chalne wala event? (a) click (b) input (c) change-page"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "Forms & validation",
    "outcomes": [
      "Form ke input se user ki likhi hui value nikalna.",
      "Check karna ke input khaali to nahi (validation).",
      "Ghalat input pe user ko pyara sa error message dikhana."
    ],
    "concept": "Form ek parcha hai jo user se maloomat leta hai — naam likho, email likho, phir jama karo. Validation ka matlab hai parcha jama karne se pehle check karna: kahin koi khana khaali to nahi, email me @ to hai? Jaise ustad copy check karta hai ke sab sawalon ke jawab likhe hain ya nahi. Ye check browser me hi ho jata hai, taake ghalat parcha aage na jaye.",
    "why": "Agar khaali ya ghalat form aage bhej diya to ya to error aayega ya ghalat data save ho jayega. Pehle se check karne se user ko foran pata chalta hai kya theek karna hai — ye achhi websites ki nishani hai.",
    "syntax": "let v = input.value; if (v === \"\") { /* error dikhao */ }",
    "examples": [
      [
        "Naam leke salaam karo",
        "// HTML: <input id=\"naamInput\" placeholder=\"Apna naam\"><button id=\"okBtn\">OK</button><p id=\"jawab\"></p>\nlet okBtn = document.getElementById(\"okBtn\");\nokBtn.addEventListener(\"click\", function() {\n  let n = document.getElementById(\"naamInput\").value;\n  document.getElementById(\"jawab\").textContent = \"Salam, \" + n + \"!\";\n});"
      ],
      [
        "Khaali input pakro",
        "okBtn.addEventListener(\"click\", function() {\n  let n2 = document.getElementById(\"naamInput\").value;\n  if (n2 === \"\") {\n    document.getElementById(\"jawab\").textContent = \"Pehle naam to likho!\";\n  } else {\n    document.getElementById(\"jawab\").textContent = \"Salam, \" + n2 + \"!\";\n  }\n});"
      ],
      [
        "Email me @ check karo",
        "// HTML: <input id=\"emailInput\" placeholder=\"Email\">\nlet e = document.getElementById(\"emailInput\").value;\nif (e.includes(\"@\")) {\n  console.log(\"Email theek hai\");\n} else {\n  console.log(\"Email me @ nahi hai!\");\n}"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      ".value se input ke andar likhi hui cheez milti hai — hamesha text (string) ki soorat me.",
      "Khaali input ka matlab hai value === \"\" — kuch bhi nahi likha.",
      ".includes(\"@\") check karta hai ke text me @ mojood hai ya nahi.",
      "Error message user ko batata hai ke kya theek karna hai — gussa wala nahi, madad wala."
    ],
    "mistake": "Form ka button dabane pe page reload ho jata hai aur sab kuch ghayab — ye form ka purana tareeqa hai. Is se bachne ke liye event pe preventDefault() lagana parta hai, warna tumhara JavaScript ka kiya karaya zaya ho jayega.",
    "practice": "Ek chhota form banao: ek input (naam ke liye) aur ek button. Button dabane pe agar input khaali ho to 'Naam likhna zaroori hai!' dikhao, warna 'Shukriya, [naam]!' dikhao.",
    "check": [
      "Input ki likhi hui value kaise milti hai? (a) input.text (b) input.value (c) input.data",
      "Khaali input check karne ka sahi tareeqa? (a) value === \"\" (b) value === khaali (c) value == 0",
      "Validation kyun zaroori hai? (a) website khubsurat lage (b) ghalat data aage na jaye (c) code chhota ho"
    ],
    "answer": "b; a; b"
  },
  {
    "title": "Fetch & APIs",
    "outcomes": [
      "Samajhna ke API kya hai: doosri website se data lene ka darwaza.",
      "fetch() se internet se data mangwana.",
      "JSON data ko samajhna aur usme se kaam ki cheez nikalna."
    ],
    "concept": "API ek khirki hai jahan se ek website doosri website ko data deti hai — jaise mausam wali website tumhe mausam ka data de. fetch() ek naukar hai jise tum kehte ho 'jao, us khirki se data le aao'. Wo jata hai, data lata hai — magar thora waqt lagta hai, is liye tum kehte ho 'jab le aao to phir (.then) ye karna'. Data ek lifafe me aata hai jise JSON kehte hain — andar naam aur value ki joriyan hoti hain, bilkul object jaisi.",
    "why": "Koi website akele nahi rehti — mausam, khabrein, tasveerein, videos sab APIs se aati hain. Fetch seekh liya to tum internet ki kisi bhi khirki se data la sakte ho.",
    "syntax": "fetch(\"https://...\").then(res => res.json()).then(data => { ... });",
    "examples": [
      [
        "Pehla fetch",
        "fetch(\"https://jsonplaceholder.typicode.com/users/1\")\n  .then(function(res) {\n    return res.json();\n  })\n  .then(function(data) {\n    console.log(data.name);\n  });"
      ],
      [
        "Poori list lao",
        "fetch(\"https://jsonplaceholder.typicode.com/users\")\n  .then(function(res) {\n    return res.json();\n  })\n  .then(function(users) {\n    console.log(\"Kitne users: \" + users.length);\n    console.log(users[0].name);\n  });"
      ],
      [
        "Page pe list banao",
        "// HTML: <ul id=\"fehrist\"></ul>\nfetch(\"https://jsonplaceholder.typicode.com/users\")\n  .then(function(r) { return r.json(); })\n  .then(function(users) {\n    let ul = document.getElementById(\"fehrist\");\n    users.forEach(function(u) {\n      ul.innerHTML += \"<li>\" + u.name + \"</li>\";\n    });\n  });"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "fetch() ko ek URL do — wo us pate pe jake data mangwata hai.",
      "Pehla .then jawab ka lifafa kholta hai (res.json()), doosra .then andar ka data deta hai.",
      "JSON dikhne me bilkul JavaScript object jaisa hota hai — data.name se naam nikal aata hai.",
      "forEach array ke har bande pe ek ek karke kaam karta hai."
    ],
    "mistake": "Ye samajhna ke fetch foran data de deta hai. Nahi! Data aane me waqt lagta hai. Jo kaam data pe karna hai wo .then ke ANDAR likho — bahar likhoge to data abhi aaya hi nahi hoga.",
    "practice": "jsonplaceholder.typicode.com/users/1 se data lao aur console me us bande ka naam aur email dikhao.",
    "check": [
      "API kya hai? (a) ek naya browser (b) data lene/dene wali khirki (c) ek virus",
      "fetch() data kab deta hai? (a) foran (b) thore waqt baad, .then me (c) kabhi nahi",
      "JSON kaisa dikhta hai? (a) bilkul object jaisa (b) tasveer jaisa (c) awaz jaisa"
    ],
    "answer": "b; b; a"
  },
  {
    "title": "Async JavaScript",
    "outcomes": [
      "Samajhna ke async kaam kya hai: jo waqt le magar page ko roke nahi.",
      "Promise ko samajhna: ek wada ke kaam ho jayega to bataunga.",
      "async/await se fetch wala code saaf aur seedha likhna."
    ],
    "concept": "Socho tum chai banane rakho aur wahi khare raho jab tak ban na jaye — ye bewaqoofi hai. Aqalmandi ye hai ke chai rakho aur itne me doosra kaam karo, chai ban jaye to awaz aa jayegi. JavaScript bhi aisa hi hai: fetch jaisa kaam waqt leta hai, magar page rukta nahi — baqi kaam chalta rehta hai, data aa jaye to khabar mil jati hai. Is khabar ko promise kehte hain — ek wada. async/await is wade ko parhne ka saaf tareeqa hai: await ka matlab hai 'yahan ruko jab tak data na aaye', magar page ko chalne do.",
    "why": "Internet se data aane me second lag sakte hain. Agar page ruk jaye to user samjhega website kharab hai. Async se page zinda rehta hai aur data aate hi screen pe lag jata hai.",
    "syntax": "async function lao() { let res = await fetch(url); let data = await res.json(); }",
    "examples": [
      [
        "async/await se fetch",
        "async function pehlaUser() {\n  let res = await fetch(\"https://jsonplaceholder.typicode.com/users/1\");\n  let data = await res.json();\n  console.log(data.name);\n}\npehlaUser();"
      ],
      [
        "Seedha code, seedha matlab",
        "async function salaamUser() {\n  let res = await fetch(\"https://jsonplaceholder.typicode.com/users/2\");\n  let user = await res.json();\n  console.log(\"Salam, \" + user.name);\n}\nsalaamUser();"
      ],
      [
        "Promise seedhe lafzon me",
        "let wada = new Promise(function(resolve) {\n  setTimeout(function() {\n    resolve(\"Kaam ho gaya!\");\n  }, 1000);\n});\nwada.then(function(msg) {\n  console.log(msg);\n});"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "async function ke andar await likh sakte ho — await ka matlab 'is line pe ruko jab tak jawab na aaye'.",
      "Rukna sirf us function ke liye hai — baqa page aur code chalta rehta hai.",
      "Promise teen halaton me hota hai: intezar, kamyabi, ya nakami.",
      ".then wala purana tareeqa aur async/await naya saaf tareeqa — dono ek hi kaam karte hain."
    ],
    "mistake": "await ko aam function me likh dena — await sirf async function ke andar chalta hai. Bahar likhoge to error aayega. Function ke aage async lagana mat bhoolo.",
    "practice": "Lesson 10 wali practice dobara karo, magar is dafa .then ke bajaye async/await use karo: users/1 ka naam console me dikhao.",
    "check": [
      "async kaam ka matlab kya hai? (a) bahut tez kaam (b) waqt lene wala kaam jo page ko roke nahi (c) ghalat kaam",
      "await kahan likh sakte ho? (a) kahin bhi (b) sirf async function ke andar (c) sirf HTML me",
      "Promise kya hai? (a) ek wada ke kaam ka natija baad me milega (b) ek error (c) ek loop"
    ],
    "answer": "b; b; a"
  },
  {
    "title": "Modules",
    "outcomes": [
      "Samajhna ke module kya hai: code ka alag dibba.",
      "export se ek file ka function doosri file ko dena.",
      "import se doosri file ka function mangwana aur chalana."
    ],
    "concept": "Socho tumhare khilone ek hi bare dabbe me ghuse hon — car bhi, ball bhi, rang bhi. Dhoondhna mushkil! Behtar hai alag alag dibbe: caron ka dibba, ballon ka dibba. Code me bhi yehi hota hai: bara program ek file me ghusa ho to ganda lagta hai. Module ka matlab hai code ke alag alag dibbe (files) — hisaab wale functions ek file me, naam wale doosri me. export ka matlab hai 'ye cheez dibbe se bahar do', import ka matlab hai 'wo cheez lao'.",
    "why": "Chhota program ek file me theek hai, magar bara project ek file me sambhalna namumkin ho jata hai. Modules se har file ka ek kaam hota hai, code saaf rehta hai, aur ek function kai files me dobara use ho sakta hai.",
    "syntax": "export function jama(a, b) { return a + b; } · import { jama } from \"./hisaab.js\";",
    "examples": [
      [
        "File 1: dena (export)",
        "// file: hisaab.js\nexport function jama(a, b) {\n  return a + b;\n}\nexport function zarb(a, b) {\n  return a * b;\n}"
      ],
      [
        "File 2: lena (import)",
        "// file: app.js\nimport { jama, zarb } from \"./hisaab.js\";\nconsole.log(jama(2, 3));\nconsole.log(zarb(4, 5));"
      ],
      [
        "HTML me module lagana",
        "<!-- script tag me type=\"module\" zaroori hai -->\n<script type=\"module\" src=\"app.js\"></script>"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "export ka matlab hai: ye function is file se bahar use ho sakta hai.",
      "import ke brackets me wo naam likho jo chahiye, phir from me file ka pata.",
      "File ke naam ke saath .js lagana zaroori hai — \"./hisaab.js\".",
      "HTML me script tag pe type=\"module\" lagao, warna import kaam nahi karega."
    ],
    "mistake": "type=\"module\" lagana bhool jana — phir browser import ko samajhta hi nahi aur error deta hai. Aur yaad rakho: modules aam taur pe file:// pe nahi chalte, inhe chalane ke liye chhota server (jaise VS Code ka Live Server) chahiye.",
    "practice": "Do files banao: 'salaam.js' me ek function export karo jo naam leke 'Salam, [naam]!' return kare. 'app.js' me use import karke console me chalao. HTML me type=\"module\" wala script lagana mat bhoolna.",
    "check": [
      "Module kya hai? (a) code ka alag dibba (file) (b) ek error (c) ek browser",
      "Doosri file ka function lene ke liye? (a) export (b) import (c) copy",
      "HTML me module ke liye script tag me kya zaroori hai? (a) type=\"module\" (b) type=\"text\" (c) kuch nahi"
    ],
    "answer": "a; b; a"
  },
  {
    "title": "Error handling",
    "outcomes": [
      "Samajhna ke error aane pe program kyun ruk jata hai.",
      "try/catch se error pakarna aur program ko zinda rakhna.",
      "User ko technical bakwas ke bajaye pyara sa message dikhana."
    ],
    "concept": "Program chalte hue kabhi garbar ho jati hai — jaise ghalat data aa jaye ya koi cheez na mile. Aam haal me error aate hi program gir jata hai, bas. try/catch ek jaal hai: try ka matlab hai 'koshish karo', catch ka matlab hai 'agar gir jao to me pakar lunga'. Koshish me garbar hui to program girne ke bajaye catch me aa jata hai, wahan tum pyara message dikha sakte ho aur program aage chalta rehta hai.",
    "why": "Users ko 'undefined is not a function' jaisi bakwas samajh nahi aati — wo dar jate hain. Error pakar ke pyara message dikhane se website professional lagti hai aur program adhoora nahi rukta.",
    "syntax": "try { /* koshish */ } catch (galti) { /* sambhalo */ }",
    "examples": [
      [
        "Pehla try/catch",
        "try {\n  console.log(\"Koshish shuru\");\n  let x = ghalatNaam;\n} catch (galti) {\n  console.log(\"Koi baat nahi, error pakar liya!\");\n}\nconsole.log(\"Program aage chal raha hai\");"
      ],
      [
        "Ghalat JSON pakarna",
        "try {\n  let data = JSON.parse(\"ye json nahi hai\");\n} catch (galti) {\n  console.log(\"Data ghalat aaya hai!\");\n}"
      ],
      [
        "Khud error phenkna",
        "function umarCheck(umar) {\n  if (umar < 0) throw \"Umar minus me nahi ho sakti!\";\n  return umar;\n}\ntry {\n  umarCheck(-5);\n} catch (galti) {\n  console.log(galti);\n}"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "try ke andar wo code likho jisme garbar ho sakti hai.",
      "Garbar hui to foran catch me chale jao ge — try ki baqi lines nahi chalengi.",
      "catch ke brackets me error ki detail milti hai (galti.message).",
      "throw se tum khud bhi error phenk sakte ho jab koi ghalat cheez ho."
    ],
    "mistake": "catch ke andar kuch na likhna (khaali chhor dena). Error to pakar liya magar chhupa diya — ab na tumhe pata chalega kya hua, na user ko. catch me hamesha kuch likho: console me likho ya user ko message dikhao.",
    "practice": "Ek function banao jo ek text ko JSON.parse se parhne ki koshish kare. Use ek ghalat text do, aur catch me 'Data samajh nahi aaya!' ka message dikhao.",
    "check": [
      "try/catch ka kya faida hai? (a) error chhupana (b) error pakar ke program ko chalaye rakhna (c) error banana",
      "try me error aaya to kya hoga? (a) program gir jayega (b) catch wala code chalega (c) kuch nahi hoga",
      "throw ka matlab kya hai? (a) code phenk dena (b) khud error paida karna (c) file delete karna"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript project",
    "outcomes": [
      "Seekhi hui sab cheezon ko jor ke ek poora mini project banana.",
      "Project ko chhote tukron me torna aur ek ek karke banana.",
      "Apna bana hua kaam browser me khol ke khud test karna."
    ],
    "concept": "Ab tak tumne alag alag auzaar seekhe — variables, functions, DOM, events. Project ka matlab hai in sab auzaaron se ek poori cheez banana, jaise mistri eenton se ghar banata hai. Hum ek 'Kaam ki Fehrist' (To-Do List) banayenge: user kaam likhe, button dabaye, kaam fehrist me lag jaye; kaam pe click kare to kat jaye (ho gaya!); aur delete button se mit jaye. Ye chhota lagta hai magar isme tumhara poora JavaScript lagta hai.",
    "why": "Tutorial dekhna aur khud banana do alag duniyaein hain. Jab khud banaoge to pata chalega kya samajh aaya aur kya nahi — aur bana hua project tumhara saboot hai ke tumhe JavaScript aati hai.",
    "syntax": "input.value + document.createElement(\"li\") + addEventListener — sab ek saath",
    "examples": [
      [
        "Project ka dhancha (HTML)",
        "<!-- index.html -->\n<input id=\"kaamInput\" placeholder=\"Naya kaam likho\">\n<button id=\"jamaBtn\">Fehrist me Dalo</button>\n<ul id=\"fehrist\"></ul>\n<script src=\"app.js\"></script>"
      ],
      [
        "Kaam fehrist me dalna",
        "// app.js\nlet jamaBtn = document.getElementById(\"jamaBtn\");\njamaBtn.addEventListener(\"click\", function() {\n  let text = document.getElementById(\"kaamInput\").value;\n  if (text === \"\") return;\n  let li = document.createElement(\"li\");\n  li.textContent = text;\n  document.getElementById(\"fehrist\").appendChild(li);\n  document.getElementById(\"kaamInput\").value = \"\";\n});"
      ],
      [
        "Click pe kaam katna (ho gaya)",
        "document.getElementById(\"fehrist\").addEventListener(\"click\", function(e) {\n  if (e.target.tagName === \"LI\") {\n    e.target.style.textDecoration = \"line-through\";\n  }\n});"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "document.createElement(\"li\") ek naya list item banata hai — abhi ye hawa me hai, page pe nahi.",
      "appendChild use fehrist (ul) ke andar laga deta hai — ab ye page pe nazar aayega.",
      "if (text === \"\") return; ka matlab: khaali kaam ho to aage barho hi mat.",
      "Kaam dalne ke baad input khaali kar diya taake naya kaam likha ja sake."
    ],
    "mistake": "Poora project ek hi dafa me likhne ki koshish karna, phir 20 errors dekh ke ghabra jana. Project hamesha tukron me banao: pehle sirf kaam dalna chalao, test karo, phir katne wala feature lagao, phir delete. Ek waqt me ek feature.",
    "practice": "Apni to-do list me ek 'Saaf Karo' (Clear All) ka button khud lagao — dabane pe poori fehrist khaali ho jaye. Hint: ul.innerHTML = \"\" kaam karega.",
    "check": [
      "Naya element banane ke liye? (a) createElement() (b) makeElement() (c) newElement()",
      "Element ko page pe lagane ke liye? (a) appendChild() (b) addChild() (c) putIn()",
      "Project banate waqt sab se achhi aadat? (a) sab ek dafa me likhna (b) tukron me bana ke test karna (c) bina test kiye agla feature"
    ],
    "answer": "a; a; b"
  }
];
