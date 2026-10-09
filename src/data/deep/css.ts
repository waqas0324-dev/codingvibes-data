export const cssDeepLessons: Record<number, any> = [
  {
    "title": "CSS syntax & selectors",
    "outcomes": [
      "CSS rule ka structure samjhega: selector, property aur value.",
      "Tag, class (.) aur id (#) selectors se elements ko target karega.",
      "Apne HTML page pe pehla style laga ke result dekhega."
    ],
    "concept": "Socho HTML ek ghar ka dhancha hai — deewarain aur darwaze. CSS us ghar ka rang-rogan hai. CSS ka har rule teen hisson se banta hai: selector batata hai KIS cheez pe kaam karna hai, property batati hai KYA badalna hai (jaise color), aur value batati hai KAISA badalna hai (jaise neela).",
    "why": "Bina CSS ke har website bilkul saadi, kaali-sufaid kitab jaisi lagti hai. CSS hi page ko rang-biranga, khoobsurat aur professional banata hai.",
    "syntax": "selector { property: value; }",
    "examples": [
      [
        "Tag selector se sab paragraphs rangna",
        `<style>
p {
  color: blue;
}
</style>
<p>Ye line neeli nazar aayegi.</p>
<p>Ye wali bhi neeli hogi.</p>`
      ],
      [
        "Class selector — sirf ek khaas group",
        `<style>
.red {
  color: red;
}
</style>
<p class="red">Ye line laal hogi.</p>
<p>Ye wali kaali hi rahegi.</p>`
      ],
      [
        "ID selector — sirf ek khaas element",
        `<style>
#top-heading {
  color: green;
}
</style>
<h1 id="top-heading">Ye hari heading hai.</h1>`
      ]
    ],
    "language": "CSS",
    "mistake": "Class ke naam ke aage dot (.) lagana bhool jana — `red { color: red; }` kuch nahi karega, sahi tareeqa `.red` hai. Aur har line ke end pe semicolon (;) lagana mat bhoolo.",
    "practice": "Ek page me 3 paragraphs banao. Do paragraphs ko class=\"dost\" do aur unka color purple karo — teesra paragraph kaala hi rehne do.",
    "check": [
      {
        "question": "CSS rule me selector ka kaam kya hai?",
        "options": [
          "Ye batata hai ke style kis element pe lagna hai",
          "Ye batata hai ke page ka title kya hai",
          "Ye batata hai ke file kahan save hogi",
          "Ye batata hai ke browser konsa use ho raha hai"
        ]
      },
      {
        "question": "Class selector kaise likhte hain?",
        "options": [".name", "#name", "*name", "@name"]
      },
      {
        "question": "Har CSS declaration ke end me kya lagana zaroori hai?",
        "options": ["semicolon (;)", "comma (,)", "full stop (.)", "colon (:)"]
      }
    ]
  },
  {
    "title": "Colors, units & typography",
    "outcomes": [
      "Teen tareeqon se rang dega: naam, hex code aur rgb.",
      "Font size ke liye px unit sahi tarah use karega.",
      "Text ko khoobsurat font, size aur alignment dega."
    ],
    "concept": "Computer ko rang batane ke teen aasaan tareeqe hain: naam se (red), hex code se (#ff0000), ya rgb se (rgb(255,0,0)) — teenon ka matlab laal hai. Size ke liye px use hota hai (screen ke chhote dots), aur typography ka matlab hai likhai ka style aur size set karna.",
    "why": "Rang aur likhai hi page ki pehchan hain. Sahi colors aur saaf fonts ke baghair user page pe 5 second bhi nahi rukta.",
    "syntax": "color: red | #ff0000 | rgb(255,0,0); · font-size: 20px;",
    "examples": [
      [
        "Teen tareeqon se rang",
        `<style>
.a { color: red; }
.b { color: #00aa00; }
.c { color: rgb(0, 0, 255); }
</style>
<p class="a">Laal</p>
<p class="b">Hara</p>
<p class="c">Neela</p>`
      ],
      [
        "Font size aur family",
        `<style>
h1 {
  font-size: 32px;
  font-family: Arial, sans-serif;
}
</style>
<h1>Bari aur saaf heading</h1>`
      ],
      [
        "Bold aur center text",
        `<style>
.note {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
</style>
<p class="note">Ye note beech me mota likha hai.</p>`
      ]
    ],
    "language": "CSS",
    "mistake": "Sirf number likhna aur unit bhool jana — `font-size: 20;` kaam nahi karega. Hamesha unit lagao: `font-size: 20px;`. px, % ya em likhna zaroori hai.",
    "practice": "Apni pasand ka ek quote likho: rang hex code se do, font-size 24px rakho, aur text ko center me lagao.",
    "check": [
      {
        "question": "Hex color code kis se shuru hota hai?",
        "options": ["# (hash)", "$ (dollar)", "@ (at sign)", "& (aur)"]
      },
      {
        "question": "rgb(255, 0, 0) ka matlab kya hai?",
        "options": [
          "poora laal, zero hara, zero neela",
          "poora neela rang",
          "kaala rang",
          "sufaid rang"
        ]
      },
      {
        "question": "font-size: 20; kyun kaam nahi karta?",
        "options": [
          "kyunke unit (px) missing hai",
          "kyunke 20 bohot bara number hai",
          "kyunke font-size galat property hai",
          "kyunke browser kharab hai"
        ]
      }
    ]
  },
  {
    "title": "The box model",
    "outcomes": [
      "Box model ki 4 layers samjhega: content, padding, border, margin.",
      "Padding se andar aur margin se bahar faasla dega.",
      "box-sizing se box ka total size control karega."
    ],
    "concept": "Har HTML element ek dabbe jaisa hai. Sab se andar samaan (content), phir naram gadda (padding), phir dabbe ki deewar (border), aur sab se bahar hawa ka faasla (margin). Ye 4 layers mil ke box model kehlata hai.",
    "why": "Jab do cheezein aapas me chipak jati hain ya dabba soch se bara nazar aata hai, to 90% masla box model ka hi hota hai. Ye samajh lo to layout ke aadhe masle khud hal ho jayenge.",
    "syntax": "margin → border → padding → content (bahar se andar)",
    "examples": [
      [
        "Box model ki 4 layers",
        `<style>
.box {
  padding: 20px;
  border: 3px solid black;
  margin: 30px;
}
</style>
<div class="box">Andar ka text</div>`
      ],
      [
        "box-sizing se exact size",
        `<style>
.fix {
  width: 200px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
<div class="fix">Ye dabba 200px se bara nahi hoga.</div>`
      ]
    ],
    "language": "CSS",
    "mistake": "Padding lagane pe box ka bara ho jana — `width: 200px` + `padding: 20px` mil ke 240px ka box ban jata hai. Agar exact size chahiye to `box-sizing: border-box;` lagao, phir padding andar hi adjust ho jata hai.",
    "practice": "Ek dabba banao: width 300px, padding 20px, 2px ki neeli border, aur 40px margin. Phir `box-sizing: border-box` laga ke farq khud dekho.",
    "check": [
      {
        "question": "Box model me sab se andar wali layer kaunsi hai?",
        "options": ["content", "margin", "border", "padding"]
      },
      {
        "question": "Margin ka kaam kya hai?",
        "options": [
          "box ke bahar doosre elements se faasla rakhna",
          "box ke andar text ko jagah dena",
          "box ki deewar banana",
          "box ka rang badalna"
        ]
      },
      {
        "question": "box-sizing: border-box kya karta hai?",
        "options": [
          "padding aur border ko width ke andar hi ginta hai",
          "box ko gayab kar deta hai",
          "margin ko zero kar deta hai",
          "text ko bara kar deta hai"
        ]
      }
    ]
  },
  {
    "title": "Display & positioning",
    "outcomes": [
      "Block aur inline display ka farq samjhega.",
      "display se elements ko ek line me lagayega.",
      "position se element ko screen pe kahin bhi chipkayega."
    ],
    "concept": "display batata hai ke element line me baithta hai ya poori line le leta hai — jaise kursi pe ek banda (inline) ya poora sofa (block). position batata hai ke element apni jagah pe rahega ya screen pe kahin bhi chipkaya ja sakta hai.",
    "why": "Menu ko ek line me lagana ho ya Help button ko screen ke corner me chipkana ho — ye dono kaam display aur position ke baghair namumkin hain.",
    "syntax": "display: block | inline | inline-block · position: static | relative | absolute | fixed",
    "examples": [
      [
        "Menu links ek line me",
        `<style>
li { display: inline; margin-right: 15px; }
</style>
<ul>
  <li>Home</li>
  <li>Courses</li>
  <li>Contact</li>
</ul>`
      ],
      [
        "Fixed button screen ke corner me",
        `<style>
.help {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
<button class="help">Help</button>`
      ]
    ],
    "language": "CSS",
    "mistake": "absolute position lagaya lekin parent ko `position: relative` dena bhool gaye — to element apne parent ki jagah poori screen ke hisaab se corner me chala jata hai. Absolute child ke liye parent ka relative hona zaroori hai.",
    "practice": "Ek menu banao jisme 4 links ek line me hon (display: inline se). Phir ek button ko screen ke neeche-dayein corner me fixed karo.",
    "check": [
      {
        "question": "display: inline ka kya asar hota hai?",
        "options": [
          "element sirf apne content jitni jagah leta hai, agli cheez saath baithti hai",
          "element poori line le leta hai",
          "element gayab ho jata hai",
          "element screen ke corner me chala jata hai"
        ]
      },
      {
        "question": "position: fixed kya karta hai?",
        "options": [
          "element scroll karne pe bhi screen pe wahin chipka rehta hai",
          "element ko relative bana deta hai",
          "element ko center kar deta hai",
          "element ka rang badal deta hai"
        ]
      },
      {
        "question": "Absolute positioned child ke parent ko kya hona chahiye?",
        "options": ["position: relative", "display: none", "color: red", "kuch khaas nahi"]
      }
    ]
  },
  {
    "title": "Flexbox layouts",
    "outcomes": [
      "display: flex se items ko ek line me sajayega.",
      "justify-content se left-right aur align-items se up-down alignment karega.",
      "Ek simple navbar ya centered layout banayega."
    ],
    "concept": "Flexbox ek jaadui dabba hai: uske andar ki cheezein khud-ba-khud ek line me saj jati hain — barabar faasle pe, beech me ya kinaaron pe. Jaise almari me kitabein khud tartib se lag jayein. Bas parent ko `display: flex` kehna hota hai.",
    "why": "Navbar, button ki line, cards ki qataar — aaj ki har modern website ki layout flexbox pe khari hai. Iske baghair cheezon ko seedha lagana bohot mushkil kaam tha.",
    "syntax": "display: flex; · justify-content (left-right) · align-items (up-down)",
    "examples": [
      [
        "Teen boxes ek line me",
        `<style>
.row { display: flex; gap: 10px; }
.box { background: lightblue; padding: 20px; }
</style>
<div class="row">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>`
      ],
      [
        "Box bilkul beech me",
        `<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}
</style>
<div class="center"><p>Bilkul beech me!</p></div>`
      ]
    ],
    "language": "CSS",
    "mistake": "Sirf `justify-content: center` likhna aur `display: flex` bhool jana — flexbox ki properties sirf us waqt kaam karti hain jab parent pe `display: flex` laga ho. Pehle flex on karo, phir alignment.",
    "practice": "Ek navbar banao: logo left pe aur 3 links right pe — flexbox se (hint: justify-content: space-between use karo).",
    "check": [
      {
        "question": "Flexbox shuru karne ke liye parent pe kya lagana zaroori hai?",
        "options": ["display: flex", "display: block", "position: flex", "flex: on"]
      },
      {
        "question": "justify-content: center kya karta hai?",
        "options": [
          "items ko left-right me beech me karta hai",
          "items ko upar-neeche beech me karta hai",
          "items ka rang badal deta hai",
          "items ko chhota kar deta hai"
        ]
      },
      {
        "question": "gap property ka kaam kya hai?",
        "options": [
          "flex items ke darmiyan barabar faasla rakhna",
          "box ka rang set karna",
          "text ka size badalna",
          "border ki motai set karna"
        ]
      }
    ]
  },
  {
    "title": "CSS Grid",
    "outcomes": [
      "display: grid se rows aur columns wali layout banayega.",
      "grid-template-columns se column ka size set karega.",
      "fr unit aur gap ka sahi istemal karega."
    ],
    "concept": "Grid ek jaal hai — page ko seedhi lines me khaanon (rows aur columns) me baant deta hai, jaise copy ka khaana-daar safha. Flexbox ek line sambhalta hai, jabke grid poori table jaisi 2D layout banata hai.",
    "why": "Photo gallery, dashboard, ya 3-column wala page — grid se ye layouts sirf 3-4 lines me ban jate hain jo pehle bohot mushkil the.",
    "syntax": "display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;",
    "examples": [
      [
        "3 column grid",
        `<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
</style>
<div class="grid">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>`
      ],
      [
        "Ek bara, ek chhota column",
        `<style>
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 15px;
}
</style>
<div class="layout">
  <div>Main content</div>
  <div>Sidebar</div>
</div>`
      ]
    ],
    "language": "CSS",
    "mistake": "Grid ki properties (jaise grid-template-columns) items pe lagana — ye hamesha PARENT (container) pe lagti hain. Items pe lagane se kuch nahi hoga.",
    "practice": "4 photos wali gallery banao: 2 columns hon aur beech me 10px ka gap ho.",
    "check": [
      {
        "question": "grid-template-columns: 1fr 1fr ka matlab kya hai?",
        "options": ["do barabar columns", "sirf ek column", "do rows", "koi column nahi"]
      },
      {
        "question": "Grid ki properties kahan lagti hain?",
        "options": [
          "parent container pe",
          "har item pe alag alag",
          "lazmi body pe",
          "style tag ke bahar"
        ]
      },
      {
        "question": "fr unit ka matlab kya hai?",
        "options": [
          "available jagah ka hissa",
          "fixed pixel size",
          "font ka size",
          "rang ka code"
        ]
      }
    ]
  },
  {
    "title": "Responsive design",
    "outcomes": [
      "Media query se screen size ke hisaab se style badlega.",
      "Fixed px ki jagah flexible sizes use karega.",
      "Apni site ko mobile pe tootne se bachayega."
    ],
    "concept": "Responsive design ka matlab: website har screen pe achhi lage — bara computer ho ya chhota mobile. Trick ye hai ke fixed pixel ki jagah lachakdaar sizes use karo, aur media query se kaho: 'agar screen chhoti ho to layout badal do'.",
    "why": "Aaj zyada tar log mobile se website kholte hain. Jo site mobile pe tooti hui lage, uska user wapas nahi aata.",
    "syntax": "@media (max-width: 600px) { ... }",
    "examples": [
      [
        "Mobile pe rang aur padding badlo",
        `<style>
.box { background: lightblue; padding: 30px; }
@media (max-width: 600px) {
  .box { background: lightgreen; padding: 15px; }
}
</style>
<div class="box">Screen chhoti karo, rang badlega!</div>`
      ],
      [
        "Image kabhi screen se bahar na nikle",
        `<style>
img { max-width: 100%; }
</style>
<img src="photo.jpg" alt="Meri photo">`
      ]
    ],
    "language": "CSS",
    "mistake": "Har cheez ko fixed px width dena, jaise `width: 1200px` — mobile (380px) pe page side se kat jayega. Widths % me do ya max-width use karo taake cheez screen se bahar na nikle.",
    "practice": "Ek heading banao jo desktop pe 40px ho, lekin mobile (600px se kam screen) pe 24px ho jaye — media query se.",
    "check": [
      {
        "question": "@media (max-width: 600px) ka matlab kya hai?",
        "options": [
          "ye styles sirf 600px ya us se chhoti screen pe lagenge",
          "ye styles sirf bari screen pe lagenge",
          "screen ki width 600px kar do",
          "600 images load karo"
        ]
      },
      {
        "question": "Mobile pe image katne se bachane ke liye kya use karo ge?",
        "options": ["max-width: 100%", "width: 2000px", "display: none", "position: fixed"]
      },
      {
        "question": "Responsive design kyun zaroori hai?",
        "options": [
          "taake site mobile aur desktop dono pe sahi lage",
          "taake site tez rang badle",
          "taake zyada ads lag saken",
          "koi khaas wajah nahi"
        ]
      }
    ]
  },
  {
    "title": "Transitions & transforms",
    "outcomes": [
      "transition se naram (smooth) tabdeeli lagayega.",
      "transform se element ko ghumayega, bara-chhota karega aur sarkayega.",
      "Hover pe premium feel wale effects banayega."
    ],
    "concept": "Transition matlab naram tabdeeli — jaise button pe mouse le jao to rang aik dum se nahi, dheere se badle. Transform matlab cheez ko hilana: ghumana (rotate), bara-chhota karna (scale), ya idhar-udhar sarakana (translate).",
    "why": "Naram movements website ko zinda aur premium feel deti hain. Aik dum se hone wali tabdeeli sasti aur rukhi lagti hai.",
    "syntax": "transition: property time; · transform: scale(1.2) | rotate(10deg)",
    "examples": [
      [
        "Hover pe naram rang",
        `<style>
.btn {
  background: blue;
  transition: background 0.3s;
}
.btn:hover { background: green; }
</style>
<button class="btn">Mujh pe mouse lao</button>`
      ],
      [
        "Hover pe bara button",
        `<style>
.zoom { transition: transform 0.3s; }
.zoom:hover { transform: scale(1.2); }
</style>
<button class="zoom">Bara ho jaunga!</button>`
      ]
    ],
    "language": "CSS",
    "mistake": "Sirf `:hover` wali state me transition likhna — transition NORMAL state pe lagta hai (jaise `.btn`), taake aane aur jaane dono taraf narmi ho. Hover pe lagao ge to mouse hatate waqt jhatka lagega.",
    "practice": "Ek card banao jo hover pe thora upar uthe (translateY(-10px)) aur uska saya (box-shadow) narmi se zahir ho.",
    "check": [
      {
        "question": "transition: background 0.3s ka matlab kya hai?",
        "options": [
          "background ka rang 0.3 second me narmi se badlega",
          "0.3 second baad page band ho jayega",
          "background hamesha ke liye gayab ho jayega",
          "rang 3 second me badlega"
        ]
      },
      {
        "question": "transform: scale(1.2) kya karta hai?",
        "options": [
          "element ko 20% bara karta hai",
          "element ko ghumata hai",
          "element ka rang badal deta hai",
          "element ko gayab kar deta hai"
        ]
      },
      {
        "question": "transition kahan lagana chahiye?",
        "options": [
          "normal state pe, hover pe nahi",
          "sirf hover wali state pe",
          "body pe",
          "kahin bhi, farq nahi parta"
        ]
      }
    ]
  },
  {
    "title": "Animations",
    "outcomes": [
      "@keyframes se animation ke scenes likhega.",
      "animation property se usay element pe chaleyega.",
      "infinite loop wali harkatein banayega."
    ],
    "concept": "Animation matlab khud chalne wali harkat — bina mouse ke. @keyframes me tum film ke scenes likhte ho (shuru me kya, beech me kya, end me kya), aur phir kehte ho 'ye film is element pe chalao'.",
    "why": "Loading spinner, slide hota banner, dharakta dil — ye sab animations hain. Inke baghair modern websites adhoori lagti hain.",
    "syntax": "@keyframes naam { from {...} to {...} } · animation: naam time infinite;",
    "examples": [
      [
        "Dharakta dil",
        `<style>
@keyframes beat {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}
.heart { animation: beat 1s infinite; font-size: 40px; }
</style>
<div class="heart">❤️</div>`
      ],
      [
        "Slide hota box",
        `<style>
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
.move { animation: slide 2s infinite alternate; }
</style>
<div class="move">➡️</div>`
      ]
    ],
    "language": "CSS",
    "mistake": "@keyframes to bana liya lekin element pe `animation` property lagana bhool gaye — film ban gayi magar chalai hi nahi. Dono zaroori hain: keyframes bhi, aur element pe animation bhi.",
    "practice": "Ek circle banao jo 360 degree ghoomta rahe (rotate use karo, 2s time, infinite loop).",
    "check": [
      {
        "question": "@keyframes ka kaam kya hai?",
        "options": [
          "animation ke scenes (shuru, beech, end) define karna",
          "rang choose karna",
          "font select karna",
          "page ka title likhna"
        ]
      },
      {
        "question": "animation: beat 1s infinite me 'infinite' ka matlab?",
        "options": [
          "animation baar baar chalti rahegi",
          "animation 1 second me khatam ho jayegi",
          "animation kabhi start nahi hogi",
          "animation sirf ek dafa chalegi"
        ]
      },
      {
        "question": "Animation chalane ke liye kya zaroori hai?",
        "options": [
          "@keyframes bhi aur element pe animation property bhi",
          "sirf @keyframes kaafi hai",
          "sirf transition kaafi hai",
          "kuch nahi, khud chalti hai"
        ]
      }
    ]
  },
  {
    "title": "Forms & UI states",
    "outcomes": [
      "Input aur button ko padding, border aur radius se khoobsurat banayega.",
      ":hover aur :focus states se form ko responsive feel dega.",
      "User-friendly form banane ke basic usool samjhega."
    ],
    "concept": "Form woh jagah hai jahan user tum se baat karta hai — naam likhta hai, button dabata hai. UI states batati hain ke element is waqt kis haal me hai: mouse us pe hai (:hover), us me likha ja raha hai (:focus), ya woh band hai (:disabled).",
    "why": "Jo form saaf lage aur haath lagane pe jawab de (focus pe highlight, hover pe button chamke), user us me bharosa kar ke apna data deta hai. Bura form dekht user bhaag jata hai.",
    "syntax": "input:focus { ... } · button:hover { ... } · button:disabled { ... }",
    "examples": [
      [
        "Khoobsurat input",
        `<style>
input {
  padding: 10px;
  border: 2px solid gray;
  border-radius: 8px;
}
input:focus { border-color: blue; outline: none; }
</style>
<input type="text" placeholder="Apna naam likho">`
      ],
      [
        "Hover wala button",
        `<style>
.send {
  padding: 10px 25px;
  background: green;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.send:hover { background: darkgreen; }
</style>
<button class="send">Bhejo</button>`
      ]
    ],
    "language": "CSS",
    "mistake": "Input ko bina padding aur border ke chhor dena — chipka hua badsurat box banta hai. Hamesha padding do, border-radius se kone gol karo, aur focus ka outline bilkul mat hatao (keyboard se chalane walon ke liye zaroori hai).",
    "practice": "Ek chhota login form banao: email input + password input + button. Focus pe border neeli ho, hover pe button gehara ho.",
    "check": [
      {
        "question": ":focus ka matlab kya hai?",
        "options": [
          "jab user element pe click kar ke us me likh raha ho",
          "jab page load ho raha ho",
          "jab mouse element se door ho",
          "jab form submit ho jaye"
        ]
      },
      {
        "question": "Button pe cursor: pointer kyun lagate hain?",
        "options": [
          "taake mouse haath ban jaye aur pata chale ke click ho sakta hai",
          "button ko tez karne ke liye",
          "button ka rang badalne ke liye",
          "iska koi faida nahi"
        ]
      },
      {
        "question": "Input ko achha dikhane ke liye sab se pehle kya do?",
        "options": [
          "padding aur saaf border",
          "bohot bara font size",
          "kaala background",
          "kuch nahi"
        ]
      }
    ]
  },
  {
    "title": "Component styling",
    "outcomes": [
      "Ek reusable component (jaise card) ki class banayega.",
      "Ek hi class ko kai jagah use kar ke time bachayega.",
      "Component ke andar chhoti classes se parts style karega."
    ],
    "concept": "Component matlab dobara use hone wala tayyar hissa — jaise ek card ka design banao, phir usi class ko 10 jagah lagao aur 10 cards tayyar. Ek dafa style likho, har jagah use karo. Yehi professional tareeqa hai.",
    "why": "Agar har card ko alag style karo ge to 50 cards ka matlab 50 designs, aur ek chhoti tabdeeli ke liye 50 jagah jana parega. Component me ek jagah badlo, sab jagah badal jata hai.",
    "syntax": ".card { ... } · .card-title { ... } · .card-btn { ... }",
    "examples": [
      [
        "Ek reusable card",
        `<style>
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
}
</style>
<div class="card">
  <h3>Mera Card</h3>
  <p>Ye dobara use ho sakta hai.</p>
</div>`
      ],
      [
        "Card ke andar ka button",
        `<style>
.card-btn {
  background: blue;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
}
</style>
<button class="card-btn">Aur parho</button>`
      ]
    ],
    "language": "CSS",
    "mistake": "Har card ke liye nayi class banana (card1, card2, card3) — yehi sab se bari galti hai. Ek `.card` class banao aur sab pe lagao; andar farq chahiye to chhoti classes (jaise .card-title) use karo.",
    "practice": "Ek product card component banao (naam, qeemat, button). Phir usi class se 3 alag products ke card banao — style dobara mat likho.",
    "check": [
      {
        "question": "Component styling ka sab se bara faida kya hai?",
        "options": [
          "ek dafa likho, har jagah use karo — tabdeeli sirf ek jagah se",
          "zyada code likhna parta hai",
          "page slow ho jata hai",
          "koi faida nahi"
        ]
      },
      {
        "question": "Teen cards ke liye sahi tareeqa kaunsa hai?",
        "options": [
          "ek .card class teenon pe lagao",
          "card1, card2, card3 alag classes banao",
          "har card pe inline style likho",
          "style bilkul na do"
        ]
      },
      {
        "question": "Card ke andar button ko alag style dene ke liye kya karo ge?",
        "options": [
          ".card-btn jaisi chhoti class banao",
          "poori .card class dobara likho",
          "button tag ka naam badal do",
          "style tag hata do"
        ]
      }
    ]
  },
  {
    "title": "CSS project",
    "outcomes": [
      "Project ka plan kagaz pe banayega phir code likhega.",
      "Selectors, box model, flexbox aur colors ko ek page me jorega.",
      "Apna kaam mobile screen pe test kar ke complete karega."
    ],
    "concept": "Ab waqt hai sab kuch jor ne ka — selectors, colors, box model, flexbox aur thori animation mila ke ek poora mini page banao ge. Project hi asal seekhne ki jagah hai: yahan tum faislay karte ho, galti karte ho, aur khud theek karte ho.",
    "why": "Alag alag lesson yaad rehte hain, lekin jab tak unhe ek project me nahi jora, skill nahi banti. Ye project tumhara pehla portfolio piece bhi ban sakta hai.",
    "syntax": "Plan → HTML structure → CSS step by step → mobile pe test",
    "examples": [
      [
        "Profile card project",
        `<style>
.profile { width: 300px; padding: 25px; text-align: center;
  border-radius: 15px; box-shadow: 0 4px 10px gray; }
</style>
<div class="profile">
  <h2>Waqas</h2>
  <p>Frontend Developer</p>
</div>`
      ]
    ],
    "language": "CSS",
    "mistake": "Bina plan ke seedha code likhna shuru kar dena — phir beech me ulajh jao ge. Pehle kagaz pe sketch banao ke kahan kya aayega, phir HTML likho, phir CSS ek ek hissa kar ke lagao.",
    "practice": "Ek personal profile card page banao: naam, ek line intro, aur 3 skill badges. Flexbox se page ke beech me lagao aur mobile pe test karo.",
    "check": [
      {
        "question": "Project shuru karne se pehle sab se pehle kya karna chahiye?",
        "options": [
          "kagaz pe layout ka sketch aur plan",
          "seedha animation likhna",
          "sirf rang choose karna",
          "kuch nahi, code likhna shuru kar do"
        ]
      },
      {
        "question": "box-shadow: 0 4px 10px gray ka matlab kya hai?",
        "options": [
          "card ke neeche halka saya (shadow)",
          "card ka rang gray kar do",
          "card 4px hilega",
          "text ka rang gray hoga"
        ]
      },
      {
        "question": "Project complete hone ke baad zaroor kya check karo ge?",
        "options": [
          "mobile screen pe kaisa lag raha hai",
          "sirf desktop pe dekho",
          "code kitna lamba hai",
          "kuch check karne ki zaroorat nahi"
        ]
      }
    ]
  }
];
