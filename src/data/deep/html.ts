export const htmlDeepLessons:Record<number,any>=[
  {
    "title": "How the web is structured",
    "outcomes": [
      "Batao ke HTML browser me kya kaam karta hai.",
      "Document ke khaake (skeleton) ko pehchano: doctype, html, head aur body.",
      "Ek sahi pehla page banao aur samjho ke nazar ane wala content kahan jata hai."
    ],
    "concept": "HTML web page ki bunyad (structure) aur matlab (meaning) wali layer hai. Browser HTML markup ko parhta hai, document ka darakht (tree) banata hai, aur isi structure se faisla karta hai ke content ka har hissa kis cheez ko zahir karta hai. CSS baad me rang-roop (presentation) sambhalegi, aur JavaScript harkat (behavior) add karega.",
    "why": "Agar structure ghalat ho to styling aur interaction samajhna mushkil ho jata hai. Achha HTML aage wali har layer ko saaf bunyad deta hai.",
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
      "Doctype browser ko batata hai ke modern HTML ke rules istemal karo.",
      "html element document ki jarr (root) hai; lang=\"en\" batata hai ke document kis zuban me hai.",
      "head me metadata hota hai — jaise title aur character encoding.",
      "body me woh content hota hai jo user ko page par asal me nazar aata hai."
    ],
    "mistake": "Nazar ane wala page content head ke andar daal dena, ya HTML ko styling ki zuban samajhna — ye ghalti mat karo.",
    "practice": "Ek HTML file banao jisme title, ek main heading aur do paragraphs hon. Use browser me seedha kholo aur khud pehchano ke konsi lines head ki hain aur konsi body ki.",
    "check": [
      "Nazar ane wala page content normally kahan rehta hai?",
      "<!doctype html> ka maqsad kya hai?",
      "HTML document ka root element konsa hai?"
    ],
    "answer": "body; ye modern HTML parsing trigger karta hai; html"
  },
  {
    "title": "Elements & attributes",
    "outcomes": [
      "Tag, element aur attribute me farq batao.",
      "Opening/closing tags aur void elements ko sahi tarah istemal karo.",
      "Matlabdar attributes lagao — jaise id, class, href, src aur alt.",
      "Elements ko sahi parent-child tartib me nest karo."
    ],
    "concept": "HTML element content ke ek hisse aur uske matlab ko zahir karta hai. Bohat se elements me opening tag, content aur closing tag hota hai. Attributes element ko extra maloomat dete hain aur opening tag me likhe jate hain.",
    "why": "Attributes ke zariye HTML elements ko manzil (destination), pehchan (identifier), alternative, rishte aur doosri harkat milti hai. Sahi nesting se document tree banta hai jise CSS aur screen readers (bol kar parhne wale tools) istemal karte hain.",
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
      "class bohat se elements share kar sakte hain; id ek document me sirf ek element ki pehchan honi chahiye.",
      "href anchor ko batata hai ke kahan jana hai; src image jaise resource ki taraf ishara karta hai.",
      "alt matlab wali image ke liye text alternative deta hai.",
      "Kuch elements, jaise img, void elements hain — inka closing tag nahi hota."
    ],
    "mistake": "Attributes ko bina matlab samjhe sirf decoration ke liye istemal karna, ya elements ko ghalat tartib me nest karna.",
    "practice": "Ek heading banao jisme class ho, ek link banao jisme href ho, aur ek image jisme src aur mufeed alt text ho. Har attribute ko badal kar dekho ke kya badalta hai.",
    "check": [
      "Anchor ko uski manzil konsa attribute deta hai?",
      "Image ke liye alternative text konsa attribute deta hai?",
      "Kya img element ka closing </img> tag ho sakta hai?"
    ],
    "answer": "href; alt; nahi, img ek void element hai"
  },
  {
    "title": "Links, images & media",
    "outcomes": [
      "Absolute aur relative links banao.",
      "Matlabdar link text likho aur fragment links samjho.",
      "src, alt, width aur height ke sath images lagao.",
      "figure/figcaption aur basic audio/video elements sahi tarah istemal karo."
    ],
    "concept": "Links web ko aapas me jorte hain. Images aur media document me maloomat ya tajurba add karte hain, lekin inhe phir bhi matlabdar, har user ke liye usable, aur sahi size ka hona chahiye.",
    "why": "Page tab zyada mufeed hota hai jab user is me ghoom sake, uski images samajh sake, aur media ko sirf dekhne par depend kiye baghair use kar sake.",
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
      "Absolute URLs poore external address ki taraf ishara karte hain; relative URLs tumhari apni site ke andar ki taraf ishara karte hain.",
      "Fragment link us element ko target karta hai jiski id fragment se match kare.",
      "Matlab wali images ko mufeed alt text chahiye hota hai. Sirf decoration wali images me alt=\"\" use kar sakte ho.",
      "width aur height jagah reserve karne me madad karte hain; CSS baad me media ko responsive bana sakti hai."
    ],
    "mistake": "Har link ke liye 'click here' likhna, matlab wali images ko alt text diye baghair chor dena, ya bohat bari media files istemal karna bina performance ka soche.",
    "practice": "Ek chhota About Me section banao jisme ek internal link, ek external link, caption wali ek image, aur ek media element ho.",
    "check": [
      "Link ki manzil konsa attribute store karta hai?",
      "alt kya bayan karta hai?",
      "href=\"#practice\" kis ko target karta hai?"
    ],
    "answer": "href; image ka text alternative; us element ko jiski id=\"practice\" hai"
  },
  {
    "title": "Lists, tables & forms",
    "outcomes": [
      "Unordered, ordered aur description lists ko sahi tarah chuno.",
      "Headings aur grouped sections wali table banao.",
      "Jano ke table kab use karni hai aur kab nahi.",
      "Form ko user se input lene ka ek structured tareeka samjho."
    ],
    "concept": "Lists related items ko group karti hain, tables do-dimensional data dikhati hain, aur forms user se input lete hain. Asal hunar structure chunna hai — uske matlab ki wajah se, na ke sirf is liye ke woh convenient lagta hai.",
    "why": "Semantic structure content ko scan karna, style karna aur samajhna asan banata hai. Tables data ke liye honi chahiye — page layout ke trick ke tor par kabhi nahi.",
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
      "ul use karo jab tartib matter na kare, ol jab sequence matter kare, aur description lists term/description ke joron ke liye.",
      "Table ko rows aur cells chahiye hote hain; th headings ki pehchan karta hai aur caption table ko mufeed title deta hai.",
      "Form un controls ko group karta hai jo maloomat lete ya bhejte hain; tafseeli form controls agle lesson me aayenge."
    ],
    "mistake": "Page sections ko position karne ke liye tables use karna, ya list sirf is liye chunna ke CSS se style karna asan hai.",
    "practice": "Ek course list, do-column wali progress table, aur ek chhoti email form banao. Table me caption aur column headings add karo.",
    "check": [
      "Step-by-step instructions ke liye konsi list behtar hai?",
      "Table kis kaam ki hoti hai?",
      "Form konsa element start karta hai?"
    ],
    "answer": "ol; tabular data; form"
  },
  {
    "title": "Semantic page layout",
    "outcomes": [
      "header, nav, main, section, article, aside aur footer ko sahi tarah use karo.",
      "Style karne se pehle page ka outline banao.",
      "Samjho ke semantic structure accessibility aur maintainability me kyun madad karta hai.",
      "Jano ke generic div asal me kab sahi hai."
    ],
    "concept": "Semantic HTML content ko matlabdar role deta hai. Header sirf upar wala box nahi hai; nav navigation ke liye hai, main page ka asal content hai, article khud-mukammal composition hai, aur footer aakhir ki maloomat rakhta hai.",
    "why": "Matlabdar structure browsers, assistive technology, search engines aur doosre developers ko page samajhne me madad karta hai — bina visual styling par depend kiye.",
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
      "main page ka primary content hona chahiye aur normally ek se zyada main landmarks nahi hone chahiye.",
      "section me normally ek matlabdar heading honi chahiye; article khud-mukammal content ke liye mufeed hai jo akele bhi khara ho sake.",
      "div tab bhi sahi hai jab tumhe generic grouping chahiye ho aur koi semantic element fit na ho."
    ],
    "mistake": "Har div ko bina matlab soche semantic element se replace kar dena, ya header/nav/footer sirf is liye use karna ke ye professional lagte hain.",
    "practice": "Ek simple page lo aur pehle uska outline text me likho. Phir generic containers ko un semantic elements se replace karo jo har hisse ko asal me bayan karte hon.",
    "check": [
      "Primary page content konsa element rakhta hai?",
      "Navigation links ke liye konsa element hai?",
      "div kab sahi hai?"
    ],
    "answer": "main; nav; jab koi zyada matlabdar semantic element fit na ho"
  },
  {
    "title": "Forms & validation",
    "outcomes": [
      "form, label, input aur button ke sath mukammal form banao.",
      "Mufeed input types chuno — jaise email, password, number, date aur tel.",
      "for/id ke zariye labels jorna aur name attribute ko samjho.",
      "Basic browser validation ke liye required, min, max, minlength, maxlength aur pattern use karo.",
      "action/method ko samjho aur ye bhi ke server-side validation phir bhi zaroori kyun hai."
    ],
    "concept": "Forms web me user se input lene ka asal tareeka hain. Ek mufeed form me wazeh structure hota hai: form container, labelled controls, sahi input types, aur ek submit action. Browser validation data bhejne se pehle chhoti ghaltiyan pakar sakti hai.",
    "why": "Forms login, signup, checkout, search, feedback aur admin workflows me aate hain. Ek form jo achha lagta ho lekin jisme labels missing hon, types ghalat hon ya validation na ho — woh phir bhi kharab form hai.",
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
      "form controls ko group karta hai aur action/method se submission ka behavior define kar sakta hai.",
      "label nazar ane wali instructions ko control se jorta hai. for ko input ki id se match karna chahiye.",
      "name woh key hai jo form data submit hote waqt use hoti hai; id asal me document association aur targeting ke liye hoti hai.",
      "required aur type=email browser-side checks dete hain; min/max aur length attributes aur constraints add karte hain.",
      "Client-side validation feedback behtar karti hai, lekin real applications ko server par dobara validation zaroor karni chahiye."
    ],
    "mistake": "Sirf placeholder text ko label bana dena, name bhool jana, har field ke liye type=\"text\" use karna, ya browser validation ko security samajh lena.",
    "practice": "Ek registration form banao — name, email, password, age, course select, contact radio buttons, agreement checkbox aur submit button ke sath. Required fields browser me validate hon.",
    "check": [
      "label for ko input id se kyun match karna chahiye?",
      "Form data submit hote waqt name kyun zaroori hai?",
      "Kya client-side validation server-side validation ki jagah le sakti hai?"
    ],
    "answer": "Ye label ko control ke sath jorta hai; ye submitted field ka naam deta hai; nahi"
  },
  {
    "title": "Accessibility foundations",
    "outcomes": [
      "ARIA ki taraf jane se pehle semantic elements use karo.",
      "Labels aur grouping ke sath forms ko samajhne ke qabil banao.",
      "Matlabdar image alternatives aur logical headings do.",
      "Keyboard use karne walon ke liye interactive controls reachable aur samajhne ke qabil rakho.",
      "HTML me aam accessibility ghaltiyan pehchano."
    ],
    "concept": "Accessible HTML asal me sahi native element use karne aur content ko matlabdar text dene ka naam hai. Ek asli button khud janta hai ke focus kaise lena hai aur activate kaise hona hai; ek div jo button banna chah raha hai extra mehnat banata hai aur aksar keyboard behavior miss kar deta hai.",
    "why": "Accessibility sahi HTML ka hissa hai, na ke aakhir me visual polish. Semantic elements browsers aur assistive technologies ko mufeed maloomat expose karte hain.",
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
      "Action ke liye button aur navigation ke liye anchor use karo.",
      "Headings ka sensible outline banna chahiye; heading levels sirf is liye mat chuno ke size achha lagta hai.",
      "Alt text ko matlab wali image ke maqsad ko bayan karna chahiye. Decorative images ka alt empty ho sakta hai.",
      "Jab kayi controls ek logical group banate hon to fieldset aur legend use karo."
    ],
    "mistake": "Divs par click handlers, missing labels, vague alt text, visual size ke liye skipped heading levels, aur native semantics ki jagah ghair-zaroori ARIA.",
    "practice": "Apne profile project ka sirf keyboard se audit karo. Controls me Tab se ghoomo, focus visibility check karo, labels dekho aur faisla karo ke konsi images ko alt text chahiye.",
    "check": [
      "Action trigger karne ke liye konsa element hona chahiye?",
      "Matlab wali image ka alt text kya bayan kare?",
      "ARIA se pehle kya prefer karna chahiye?"
    ],
    "answer": "button; uska maqsad/information; native semantic HTML"
  },
  {
    "title": "Metadata & SEO",
    "outcomes": [
      "Samjho ke head ke andar kya aata hai.",
      "Mufeed title aur meta description content likho.",
      "Viewport aur language metadata sahi tarah use karo.",
      "Samjho ke semantic structure discoverability me kaise madad karta hai.",
      "SEO ko mufeed content aur structure samjho, na ke keyword stuffing."
    ],
    "concept": "head me document ke baare me maloomat hoti hai, na ke page ka asal nazar ane wala content. Title, description, character encoding aur viewport settings browsers, search engines aur sharing systems ko page samajhne aur present karne me madad karte hain.",
    "why": "Production pages ko sirf nazar ane wale markup se zyada chahiye. Ek mufeed title browser tabs aur search presentation ko behtar karta hai; ek wazeh description batata hai ke page kis baare me hai.",
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
      "charset batata hai ke text kaise encode hua hai; UTF-8 modern web pages ke characters cover karta hai.",
      "viewport responsive pages ko mobile devices par sahi render karne me madad karta hai.",
      "title page ke hisaab se specific aur parhne ke qabil hona chahiye; ye chhupi keyword list nahi hai.",
      "Description ko mufeed page content ka khulasa karna chahiye, na ke keywords ka dher repeat karna."
    ],
    "mistake": "Har page ko same title dena, spammy descriptions likhna, ya nazar ane wala page content head ke andar daal dena.",
    "practice": "Apne profile project me unique title aur description add karo. Yaqeen karo ke title asal page ko bayan kare aur description natural lage.",
    "check": [
      "title kahan belong karta hai?",
      "viewport metadata kis me madad karta hai?",
      "Meta description ka goal kya hai?"
    ],
    "answer": "head; responsive/mobile rendering; page ka wazeh khulasa"
  },
  {
    "title": "Project: profile page",
    "outcomes": [
      "Markup likhne se pehle page ko plan karo.",
      "Headings, links, images, lists aur forms ko semantically combine karo.",
      "Accessibility aur metadata practices ko ek sath use karo.",
      "CSS styling ke liye tayyar mukammal HTML-only profile banao."
    ],
    "concept": "Ye project pichhle lessons ko ek realistic page me jorta hai. Goal abhi ise khoobsurat banana nahi hai. Goal saaf, matlabdar HTML banana hai jise CSS baad me structure fix kiye baghair style kar sake.",
    "why": "Projects alag-alag syntax ko ek workflow me badalte hain. Tum seekhte ho ke faisla karo content ka matlab kya hai, konsa element usay represent karta hai, aur mukhtalif hisse kaise jurte hain.",
    "syntax": "head metadata → header/nav → main → profile/article → skills/projects → contact form → footer",
    "examples": [
      [
        "Complete profile structure",
        "<!doctype html>\\n<html lang=\"en\">\\n<head>\\n  <meta charset=\"UTF-8\">\\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n  <title>Alex | Frontend Developer</title>\\n  <meta name=\"description\" content=\"Alex's frontend developer profile and selected projects.\">\\n</head>\\n<body>\\n  <header><h1>Alex — Frontend Developer</h1></header>\\n  <nav><a href=\"#projects\">Projects</a> · <a href=\"#contact\">Contact</a></nav>\\n  <main>\\n    <section><h2>About me</h2><p>I build accessible web interfaces.</p></section>\\n    <section><h2>Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></section>\\n    <section id=\"projects\"><h2>Projects</h2><article><h3>Dashboard</h3><p>Responsive admin interface.</p></article></section>\\n    <section id=\"contact\"><h2>Contact</h2><form>\\n      <label for=\"email\">Email</label><input id=\"email\" name=\"email\" type=\"email\" required>\\n      <button type=\"submit\">Send</button>\\n    </form></section>\\n  </main>\\n  <footer><p>© 2026 Alex</p></footer>\\n</body>\\n</html>"
      ]
    ],
    "explain": [
      "Content aur page regions se start karo, CSS classes se nahi.",
      "Har section ko ek matlabdar heading aur har interactive control ko sahi native element do.",
      "Page ko chalao, inspect karo, links test karo, form test karo aur document ko browser DevTools se check karo."
    ],
    "mistake": "Visual divs aur class names se start karna, phir design complete hone ke baad semantic structure fit karne ki koshish karna.",
    "practice": "Profile scratch se banao. Mukammal example copy mat karo. Checklist use karke elements ka faisla karo aur apna khud ka content likho.",
    "check": [
      "Styling se pehle kya plan karna chahiye?",
      "Primary content konsa section rakhta hai?",
      "Har important form control ke paas kya hona chahiye?"
    ],
    "answer": "content aur semantic structure; main; ek associated label"
  },
  {
    "title": "Project review & next steps",
    "outcomes": [
      "HTML structure, semantics, links, media, forms aur metadata ka audit karo.",
      "DOM inspect karne ke liye browser DevTools use karo.",
      "Aam markup ghaltiyan dhoondo aur theek karo.",
      "CSS me jane se pehle batao ke HTML kis cheez ka zimmedar hai."
    ],
    "concept": "HTML complete karne ka matlab hai page ko document ki tarah parhna, na ke sirf tags pehchanna. Tumhe bata sakna chahiye ke har bara element kyun hai, use browser me test karna, aur structural ya accessibility issues fix karna.",
    "why": "Ek mazboot review gaps ko CSS aur JavaScript me sath jane se rokta hai. Agli layer ek sound HTML foundation ko enhance kare, na ke structural problems ko chhupaye.",
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
      "DOM tree inspect karo ke tumhari nesting tumhari intention se milti hai ya nahi.",
      "Links aur forms ko test karo — sirf dekhne se assume mat karo ke kaam karte hain.",
      "Structural issues dhoondne ke liye browser validation aur developer tools use karo.",
      "Phir CSS ki taraf jao: presentation ko meaning par build karna chahiye, use replace nahi karna."
    ],
    "mistake": "HTML ko is liye complete kehna ke page theek lag raha hai. Sirf visual correctness semantic ya accessible correctness ka saboot nahi hai.",
    "practice": "Apne profile page ka 10-point checklist se audit karo: document structure, headings, links, images, lists, tables/forms jahan relevant hon, labels, keyboard use, metadata, aur saaf nesting.",
    "check": [
      "CSS ko kya change karna chahiye?",
      "HTML ki zimmedari kya rehni chahiye?",
      "Aage barhne se pehle final test kya hai?"
    ],
    "answer": "presentation/layout; content structure aur meaning; HTML ko inspect, test aur fix karo"
  }
];
