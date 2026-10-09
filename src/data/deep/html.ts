export const htmlDeepLessons:Record<number,any>=[
  {
    "title": "How the web is structured",
    "outcomes": [
      "Explain what HTML does in the browser.",
      "Recognize the document skeleton: doctype, html, head and body.",
      "Build a correct first page and understand where visible content goes."
    ],
    "concept": "HTML is the structure and meaning layer of a web page. The browser reads HTML markup, builds a document tree, and uses this structure to decide what each part of the content represents. CSS will later handle the presentation, and JavaScript will add behavior.",
    "why": "If the structure is wrong, styling and interaction become hard to understand. Good HTML gives every later layer a clean foundation.",
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
      "The doctype tells the browser to use modern HTML rules.",
      "The html element is the root of the document; lang=\"en\" says which language the document is in.",
      "The head holds metadata — like the title and character encoding.",
      "The body holds the content the user actually sees on the page."
    ],
    "mistake": "Do not put visible page content inside the head, and do not treat HTML as a styling language.",
    "practice": "Create an HTML file with a title, one main heading and two paragraphs. Open it directly in the browser and identify which lines belong to the head and which to the body.",
    "check": [
      "Where does visible page content normally live?",
      "What is the purpose of <!doctype html>?",
      "What is the root element of an HTML document?"
    ],
    "answer": "body; it triggers modern HTML parsing; html"
  },
  {
    "title": "Elements & attributes",
    "outcomes": [
      "Tell the difference between a tag, an element and an attribute.",
      "Use opening/closing tags and void elements correctly.",
      "Add meaningful attributes — like id, class, href, src and alt.",
      "Nest elements in the correct parent-child order."
    ],
    "concept": "An HTML element represents a part of the content and its meaning. Many elements have an opening tag, content and a closing tag. Attributes give the element extra information and are written inside the opening tag.",
    "why": "Attributes give HTML elements their destination, identity, alternative, relationships and other behavior. Correct nesting builds the document tree that CSS and screen readers use.",
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
      "Many elements can share a class; an id should identify only one element in a document.",
      "href tells an anchor where to go; src points to a resource like an image.",
      "alt gives a text alternative for a meaningful image.",
      "Some elements, like img, are void elements — they have no closing tag."
    ],
    "mistake": "Using attributes only for decoration without understanding their meaning, or nesting elements in the wrong order.",
    "practice": "Create a heading with a class, a link with an href, and an image with a src and helpful alt text. Change each attribute and see what changes.",
    "check": [
      "Which attribute gives an anchor its destination?",
      "Which attribute gives alternative text for an image?",
      "Can the img element have a closing </img> tag?"
    ],
    "answer": "href; alt; no, img is a void element"
  },
  {
    "title": "Links, images & media",
    "outcomes": [
      "Create absolute and relative links.",
      "Write meaningful link text and understand fragment links.",
      "Add images with src, alt, width and height.",
      "Use figure/figcaption and the basic audio/video elements correctly."
    ],
    "concept": "Links connect the web together. Images and media add information or experience to a document, but they still need to be meaningful, usable for every user, and correctly sized.",
    "why": "A page is more useful when users can move around it, understand its images, and use media without depending only on seeing it.",
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
      "Absolute URLs point to a full external address; relative URLs point inside your own site.",
      "A fragment link targets the element whose id matches the fragment.",
      "Meaningful images need helpful alt text. For purely decorative images you can use alt=\"\".",
      "width and height help reserve space; CSS can later make media responsive."
    ],
    "mistake": "Writing 'click here' for every link, leaving meaningful images without alt text, or using very large media files without thinking about performance.",
    "practice": "Build a small About Me section with one internal link, one external link, one captioned image, and one media element.",
    "check": [
      "Which attribute stores a link's destination?",
      "What does alt describe?",
      "What does href=\"#practice\" target?"
    ],
    "answer": "href; the image's text alternative; the element whose id=\"practice\" is"
  },
  {
    "title": "Lists, tables & forms",
    "outcomes": [
      "Choose unordered, ordered and description lists correctly.",
      "Build a table with headings and grouped sections.",
      "Know when to use a table and when not to.",
      "Understand a form as a structured way to take input from the user."
    ],
    "concept": "Lists group related items, tables show two-dimensional data, and forms take input from the user. The real skill is choosing structure for its meaning — not just because it looks convenient.",
    "why": "Semantic structure makes content easy to scan, style and understand. Tables should be for data — never as a page layout trick.",
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
      "Use ul when the order does not matter, ol when the sequence matters, and description lists for term/description pairs.",
      "A table needs rows and cells; th identifies headings and caption gives the table a helpful title.",
      "A form groups controls that collect or send information; detailed form controls come in the next lesson."
    ],
    "mistake": "Using tables to position page sections, or choosing a list only because it is easy to style with CSS.",
    "practice": "Build a course list, a two-column progress table, and a small email form. Add a caption and column headings to the table.",
    "check": [
      "Which list is better for step-by-step instructions?",
      "What is a table for?",
      "Which element starts a form?"
    ],
    "answer": "ol; tabular data; form"
  },
  {
    "title": "Semantic page layout",
    "outcomes": [
      "Use header, nav, main, section, article, aside and footer correctly.",
      "Outline a page before styling it.",
      "Understand why semantic structure helps accessibility and maintainability.",
      "Know when a generic div is actually the right choice."
    ],
    "concept": "Semantic HTML gives content a meaningful role. A header is not just a top box; nav is for navigation, main is the page's main content, article is a self-contained composition, and footer holds the closing information.",
    "why": "Meaningful structure helps browsers, assistive technology, search engines and other developers understand the page — without depending on visual styling.",
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
      "main should hold the primary content of the page, and there should normally not be more than one main landmark.",
      "A section should normally have a meaningful heading; article is useful for self-contained content that can stand alone.",
      "div is still right when you need generic grouping and no semantic element fits."
    ],
    "mistake": "Replacing every div with a semantic element without thinking about meaning, or using header/nav/footer just because they look professional.",
    "practice": "Take a simple page and first write its outline in text. Then replace generic containers with the semantic elements that truly describe each part.",
    "check": [
      "Which element holds the primary page content?",
      "Which element is for navigation links?",
      "When is a div the right choice?"
    ],
    "answer": "main; nav; when no more meaningful semantic element fits"
  },
  {
    "title": "Forms & validation",
    "outcomes": [
      "Build a complete form with form, label, input and button.",
      "Choose helpful input types — like email, password, number, date and tel.",
      "Connect labels with for/id and understand the name attribute.",
      "Use required, min, max, minlength, maxlength and pattern for basic browser validation.",
      "Understand action/method and why server-side validation is still needed."
    ],
    "concept": "Forms are the web's main way to take input from the user. A helpful form has clear structure: a form container, labelled controls, correct input types, and a submit action. Browser validation can catch small mistakes before data is sent.",
    "why": "Forms appear in login, signup, checkout, search, feedback and admin workflows. A form that looks good but has missing labels, wrong types or no validation is still a bad form.",
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
      "form groups controls and can define submission behavior with action/method.",
      "label connects the visible instructions to the control. for must match the input's id.",
      "name is the key used when the form data is submitted; id is mainly for document association and targeting.",
      "required and type=email give browser-side checks; min/max and length attributes add more constraints.",
      "Client-side validation improves feedback, but real applications must still validate again on the server."
    ],
    "mistake": "Using only placeholder text as a label, forgetting name, using type=\"text\" for every field, or treating browser validation as security.",
    "practice": "Build a registration form — with name, email, password, age, a course select, contact radio buttons, an agreement checkbox and a submit button. Required fields must validate in the browser.",
    "check": [
      "Why should label for match the input id?",
      "Why is name important when form data is submitted?",
      "Can client-side validation replace server-side validation?"
    ],
    "answer": "It connects the label to the control; it gives the submitted field its name; no"
  },
  {
    "title": "Accessibility foundations",
    "outcomes": [
      "Use semantic elements before reaching for ARIA.",
      "Make forms understandable with labels and grouping.",
      "Give meaningful image alternatives and logical headings.",
      "Keep interactive controls reachable and understandable for keyboard users.",
      "Recognize common accessibility mistakes in HTML."
    ],
    "concept": "Accessible HTML really means using the correct native element and giving content meaningful text. A real button already knows how to take focus and be activated; a div pretending to be a button creates extra work and often misses keyboard behavior.",
    "why": "Accessibility is part of correct HTML, not visual polish added at the end. Semantic elements expose helpful information to browsers and assistive technologies.",
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
      "Use a button for actions and an anchor for navigation.",
      "Headings should form a sensible outline; do not choose heading levels just because the size looks good.",
      "Alt text should describe the purpose of a meaningful image. Decorative images can have empty alt.",
      "Use fieldset and legend when many controls form one logical group."
    ],
    "mistake": "Click handlers on divs, missing labels, vague alt text, skipped heading levels for visual size, and unnecessary ARIA instead of native semantics.",
    "practice": "Audit your profile project using only the keyboard. Move through controls with Tab, check focus visibility, look at labels, and decide which images need alt text.",
    "check": [
      "Which element should trigger an action?",
      "What should the alt text of a meaningful image describe?",
      "What should you prefer before ARIA?"
    ],
    "answer": "button; its purpose/information; native semantic HTML"
  },
  {
    "title": "Metadata & SEO",
    "outcomes": [
      "Understand what goes inside the head.",
      "Write helpful title and meta description content.",
      "Use viewport and language metadata correctly.",
      "Understand how semantic structure helps discoverability.",
      "Understand SEO as helpful content and structure, not keyword stuffing."
    ],
    "concept": "The head holds information about the document, not the page's actual visible content. Title, description, character encoding and viewport settings help browsers, search engines and sharing systems understand and present the page.",
    "why": "Production pages need more than visible markup. A helpful title improves browser tabs and search presentation; a clear description says what the page is about.",
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
      "charset says how text is encoded; UTF-8 covers the characters of modern web pages.",
      "viewport helps responsive pages render correctly on mobile devices.",
      "The title should be specific and readable for the page; it is not a hidden keyword list.",
      "The description should summarize helpful page content, not repeat a pile of keywords."
    ],
    "mistake": "Giving every page the same title, writing spammy descriptions, or putting visible page content inside the head.",
    "practice": "Add a unique title and description to your profile project. Make sure the title describes the actual page and the description sounds natural.",
    "check": [
      "Where does title belong?",
      "What does viewport metadata help with?",
      "What is the goal of a meta description?"
    ],
    "answer": "head; responsive/mobile rendering; a clear summary of the page"
  },
  {
    "title": "Project: profile page",
    "outcomes": [
      "Plan the page before writing markup.",
      "Combine headings, links, images, lists and forms semantically.",
      "Apply accessibility and metadata practices together.",
      "Build a complete HTML-only profile ready for CSS styling."
    ],
    "concept": "This project joins the previous lessons into one realistic page. The goal is not to make it beautiful yet. The goal is clean, meaningful HTML that CSS can later style without fixing the structure.",
    "why": "Projects turn separate syntax into one workflow. You learn to decide what content means, which element represents it, and how the different parts join together.",
    "syntax": "head metadata → header/nav → main → profile/article → skills/projects → contact form → footer",
    "examples": [
      [
        "Complete profile structure",
        "<!doctype html>\\n<html lang=\"en\">\\n<head>\\n  <meta charset=\"UTF-8\">\\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n  <title>Alex | Frontend Developer</title>\\n  <meta name=\"description\" content=\"Alex's frontend developer profile and selected projects.\">\\n</head>\\n<body>\\n  <header><h1>Alex — Frontend Developer</h1></header>\\n  <nav><a href=\"#projects\">Projects</a> · <a href=\"#contact\">Contact</a></nav>\\n  <main>\\n    <section><h2>About me</h2><p>I build accessible web interfaces.</p></section>\\n    <section><h2>Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></section>\\n    <section id=\"projects\"><h2>Projects</h2><article><h3>Dashboard</h3><p>Responsive admin interface.</p></article></section>\\n    <section id=\"contact\"><h2>Contact</h2><form>\\n      <label for=\"email\">Email</label><input id=\"email\" name=\"email\" type=\"email\" required>\\n      <button type=\"submit\">Send</button>\\n    </form></section>\\n  </main>\\n  <footer><p>© 2026 Alex</p></footer>\\n</body>\\n</html>"
      ]
    ],
    "explain": [
      "Start with content and page regions, not CSS classes.",
      "Give every section a meaningful heading and every interactive control the correct native element.",
      "Run the page, inspect it, test the links, test the form, and check the document with browser DevTools."
    ],
    "mistake": "Starting with visual divs and class names, then trying to fit semantic structure in after the design is complete.",
    "practice": "Build the profile from scratch. Do not copy the complete example. Use the checklist to decide on elements and write your own content.",
    "check": [
      "What should you plan before styling?",
      "Which section holds the primary content?",
      "What should every important form control have?"
    ],
    "answer": "content and semantic structure; main; an associated label"
  },
  {
    "title": "Project review & next steps",
    "outcomes": [
      "Audit HTML structure, semantics, links, media, forms and metadata.",
      "Use browser DevTools to inspect the DOM.",
      "Find and fix common markup mistakes.",
      "Say what HTML is responsible for before moving to CSS."
    ],
    "concept": "Completing HTML means reading a page like a document, not just recognizing tags. You should be able to say why each major element exists, test it in the browser, and fix structural or accessibility issues.",
    "why": "A strong review stops gaps from travelling with you into CSS and JavaScript. The next layer should enhance a sound HTML foundation, not hide structural problems.",
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
      "Inspect the DOM tree to check that your nesting matches your intention.",
      "Test links and forms — do not assume they work just from looking.",
      "Use browser validation and developer tools to find structural issues.",
      "Then move to CSS: presentation should be built on meaning, not replace it."
    ],
    "mistake": "Calling HTML complete because the page looks fine. Visual correctness alone is not proof of semantic or accessible correctness.",
    "practice": "Audit your profile page with a 10-point checklist: document structure, headings, links, images, lists, tables/forms where relevant, labels, keyboard use, metadata, and clean nesting.",
    "check": [
      "What should CSS change?",
      "What should HTML stay responsible for?",
      "What is the final test before moving on?"
    ],
    "answer": "presentation/layout; content structure and meaning; inspect, test and fix the HTML"
  },
  {
    "title": "HTML Editors",
    "outcomes": [
      "Open a simple text editor like Notepad or VS Code.",
      "Save a file with the .html extension.",
      "Open your HTML file in a browser to see the result."
    ],
    "concept": "An HTML editor is a program where you write HTML code. You can use a simple editor like Notepad (Windows) or TextEdit (Mac), or a code editor like VS Code. VS Code is a good free choice because it highlights your code and helps you find mistakes.",
    "why": "Every HTML file starts as plain text in an editor. A good editor makes writing and fixing code much easier.",
    "syntax": "Write code → save as .html → open in browser",
    "examples": [
      [
        "Your first HTML file",
        "<!DOCTYPE html>\n<html>\n<body>\n<h1>My First Page</h1>\n<p>Hello world!</p>\n</body>\n</html>"
      ],
      [
        "Save it with the right name",
        "<!-- In your editor, choose File > Save As -->\n<!-- Type a name that ends with .html: -->\n<!-- mypage.html -->"
      ]
    ],
    "explain": [
      "Notepad, TextEdit and VS Code are all HTML editors.",
      "Save your file with the .html ending, for example mypage.html.",
      "Double-click the file to open it in your browser.",
      "Edit the file, save it, and refresh the browser to see your changes."
    ],
    "mistake": "Saving the file as .txt instead of .html. The browser will then show plain text instead of a web page.",
    "practice": "Create a new file, write one heading and one paragraph, save it as mypage.html, and open it in your browser.",
    "check": [
      "What file ending must an HTML file have?",
      "Name one simple editor and one code editor.",
      "What do you do after editing the file to see the change?"
    ],
    "answer": ".html; Notepad and VS Code; save the file and refresh the browser"
  },
  {
    "title": "HTML Basic Structure",
    "outcomes": [
      "Write the basic HTML document template from memory.",
      "Explain what the html, head and body tags do.",
      "Know the difference between visible and hidden content."
    ],
    "concept": "Every HTML page follows the same basic structure. It starts with <!DOCTYPE html>, then the <html> tag. Inside <html> there are two parts: <head> for information about the page, and <body> for the content the visitor sees.",
    "why": "Browsers expect this structure. A page with the correct structure renders properly and is easier to work with later.",
    "syntax": "<!DOCTYPE html> → <html> → <head> + <body>",
    "examples": [
      [
        "The basic document template",
        "<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n</body>\n</html>"
      ],
      [
        "Head is hidden, body is visible",
        "<head>\n<title>This text is not shown on the page</title>\n</head>\n<body>\n<p>This text is visible on the page.</p>\n</body>"
      ]
    ],
    "explain": [
      "<!DOCTYPE html> tells the browser this is an HTML5 document.",
      "The <html> tag is the root of the page. Everything goes inside it.",
      "The <head> tag holds page information, like the title.",
      "The <body> tag holds everything the visitor can see."
    ],
    "mistake": "Putting visible content like headings inside <head>. Visible content belongs in <body>.",
    "practice": "Write the basic HTML template by hand, without copying. Add a title, a heading and a paragraph, then open it in a browser.",
    "check": [
      "What is the first line of an HTML5 document?",
      "Where does visible page content go?",
      "What is the root element of the page?"
    ],
    "answer": "<!DOCTYPE html>; in the body tag; the html tag"
  },
  {
    "title": "HTML Headings",
    "outcomes": [
      "Create headings with the h1 to h6 tags.",
      "Choose the correct heading level for each section.",
      "Use only one h1 per page."
    ],
    "concept": "HTML headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading. <h6> defines the least important heading.",
    "why": "Headings describe the structure of your page. Search engines and screen readers use headings to understand your content.",
    "syntax": "<h1>Main heading</h1> ... <h6>Smallest heading</h6>",
    "examples": [
      [
        "All six heading levels",
        "<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>"
      ],
      [
        "Headings in a real page",
        "<h1>Chocolate Cake Recipe</h1>\n<h2>Ingredients</h2>\n<h2>Instructions</h2>\n<h3>Step 1</h3>"
      ]
    ],
    "explain": [
      "h1 is the biggest and most important heading.",
      "Use h2 for main sections and h3 for sub-sections.",
      "Do not skip levels. Go from h1 to h2 to h3 in order.",
      "Headings are for structure, not just for making text big."
    ],
    "mistake": "Using many h1 tags on one page, or using headings only to make text look big.",
    "practice": "Make a page about your favorite food with one h1, two h2 sections, and one h3 under each section.",
    "check": [
      "Which heading tag is the most important?",
      "How many h1 tags should a page have?",
      "What should you use before h3?"
    ],
    "answer": "h1; one; h1 and h2 first, in order"
  },
  {
    "title": "HTML Paragraphs",
    "outcomes": [
      "Write paragraphs with the p tag.",
      "Understand that browsers ignore extra spaces and line breaks.",
      "Use the br tag for a line break inside a paragraph."
    ],
    "concept": "The HTML <p> element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some space before and after it.",
    "why": "Paragraphs split text into readable blocks. Without them, all your text runs together.",
    "syntax": "<p>This is a paragraph.</p>",
    "examples": [
      [
        "Two paragraphs",
        "<p>This is the first paragraph.</p>\n<p>This is the second paragraph.</p>"
      ],
      [
        "A line break inside a paragraph",
        "<p>This is a line.<br>This is a new line.</p>"
      ]
    ],
    "explain": [
      "The <p> tag creates a block of text.",
      "Browsers add space above and below each paragraph.",
      "Extra spaces and line breaks in your code are ignored.",
      "Use <br> when you need a line break without starting a new paragraph."
    ],
    "mistake": "Using many <br> tags to create space between paragraphs. Use separate <p> tags instead.",
    "practice": "Write three paragraphs about your day. Add one line break inside the middle paragraph.",
    "check": [
      "Which tag defines a paragraph?",
      "Do browsers show extra spaces from your code?",
      "Which tag creates a line break?"
    ],
    "answer": "p; no, they are ignored; br"
  },
  {
    "title": "HTML Styles",
    "outcomes": [
      "Add inline styles with the style attribute.",
      "Change text color and background color.",
      "Set font size and text alignment."
    ],
    "concept": "The HTML style attribute is used to add styles to an element, like color, font and size. The style attribute has this syntax: <tagname style=\"property:value;\">",
    "why": "Styles make your page readable and attractive. The style attribute is the fastest way to style a single element.",
    "syntax": "<tagname style=\"property:value;\">",
    "examples": [
      [
        "Text color and size",
        "<p style=\"color:red;\">I am red.</p>\n<p style=\"font-size:20px;\">I am big.</p>"
      ],
      [
        "Background color and alignment",
        "<h1 style=\"background-color:yellow;\">Yellow background</h1>\n<p style=\"text-align:center;\">Centered text.</p>"
      ]
    ],
    "explain": [
      "The style attribute goes inside the opening tag.",
      "Use color for text color and background-color for the background.",
      "font-size changes the text size.",
      "text-align can be left, center, right or justify."
    ],
    "mistake": "Writing the property without a value or forgetting the colon, like style=\"color red\".",
    "practice": "Style one heading with a background color, and one paragraph with a different text color and a larger font.",
    "check": [
      "What is the syntax of the style attribute?",
      "Which property changes the text color?",
      "Which value centers text?"
    ],
    "answer": "style=\"property:value;\"; color; center"
  },
  {
    "title": "HTML Formatting",
    "outcomes": [
      "Make text bold with b and strong.",
      "Make text italic with i and em.",
      "Use mark, small, del, ins, sub and sup."
    ],
    "concept": "HTML has several elements for defining text with a special meaning. Formatting elements display text in a special style, like bold or italic.",
    "why": "Formatting helps readers find the important parts of your text. Some tags add meaning, not just looks.",
    "syntax": "<b>bold</b> <strong>important</strong> <i>italic</i> <em>emphasized</em>",
    "examples": [
      [
        "Bold and italic",
        "<p><b>Bold text</b> and <i>italic text</i>.</p>\n<p><strong>Important!</strong> Please <em>read this</em>.</p>"
      ],
      [
        "More formatting tags",
        "<p>This is <mark>highlighted</mark> text.</p>\n<p>Water is H<sub>2</sub>O and 2<sup>2</sup> = 4.</p>\n<p><del>Old price</del> <ins>New price</ins>.</p>"
      ]
    ],
    "explain": [
      "<b> makes text bold. <strong> makes it bold and important.",
      "<i> makes text italic. <em> adds spoken emphasis.",
      "<mark> highlights text. <small> makes text smaller.",
      "<del> shows deleted text, <ins> shows new text. <sub> and <sup> make sub and superscript."
    ],
    "mistake": "Using <b> for everything important. Use <strong> when the text is actually important.",
    "practice": "Write a short product description. Use strong for the key benefit, em for a warning, and del and ins for a price change.",
    "check": [
      "What is the difference between b and strong?",
      "Which tag highlights text?",
      "Which tag makes superscript?"
    ],
    "answer": "strong adds importance, b is only visual; mark; sup"
  },
  {
    "title": "HTML Quotations",
    "outcomes": [
      "Add short quotes with the q tag.",
      "Add long quotes with blockquote.",
      "Use abbr, address, cite and bdo."
    ],
    "concept": "HTML has special tags for quotations. The <q> tag is for short quotes, and the <blockquote> tag is for quotes from another source.",
    "why": "Quotation tags give your quotes meaning. Browsers and search engines can tell quoted text apart from your own words.",
    "syntax": "<q>short quote</q> · <blockquote>long quote</blockquote>",
    "examples": [
      [
        "A short quote",
        "<p>He said, <q>Practice makes perfect.</q></p>"
      ],
      [
        "Blockquote and cite",
        "<blockquote>\nGood code is its own best documentation.\n</blockquote>\n<p><cite>Steve McConnell</cite></p>"
      ],
      [
        "Abbreviation and address",
        "<p>The <abbr title=\"World Health Organization\">WHO</abbr> was founded in 1948.</p>\n<address>Written by John.<br>Visit example.com</address>"
      ]
    ],
    "explain": [
      "<q> adds quotation marks around a short quote automatically.",
      "<blockquote> indents a longer quote from another source.",
      "<abbr> shows the full form when you hover over an abbreviation.",
      "<address> holds contact information. <cite> marks a work title."
    ],
    "mistake": "Using <blockquote> only to indent text. It means a quote from another source.",
    "practice": "Add your favorite quote with blockquote, a short quote with q, and one abbreviation with its full title.",
    "check": [
      "Which tag is for short quotes?",
      "What does the abbr title attribute show?",
      "Which tag holds contact information?"
    ],
    "answer": "q; the full form on hover; address"
  },
  {
    "title": "HTML Comments",
    "outcomes": [
      "Write HTML comments with the correct syntax.",
      "Hide code temporarily with comments.",
      "Use comments to explain tricky parts of your code."
    ],
    "concept": "HTML comments are not displayed in the browser, but they can help document your HTML source code. You can add comments with this syntax: <!-- Write your comments here -->",
    "why": "Comments remind you and other developers why code exists. They also let you hide code while testing.",
    "syntax": "<!-- comment text -->",
    "examples": [
      [
        "A simple comment",
        "<!-- This is a comment -->\n<p>This paragraph is visible.</p>"
      ],
      [
        "Hiding code while testing",
        "<p>This shows.</p>\n<!-- <p>This is hidden for now.</p> -->"
      ]
    ],
    "explain": [
      "Comments start with <!-- and end with -->.",
      "The browser hides everything inside a comment.",
      "Use comments to explain why you wrote something.",
      "You can comment out code instead of deleting it while testing."
    ],
    "mistake": "Nesting comments inside comments. The first --> ends the comment and breaks your code.",
    "practice": "Add a comment at the top of your page with your name and the date. Comment out one paragraph and check that it disappears.",
    "check": [
      "What is the comment syntax?",
      "Does the browser show comments?",
      "Can you nest comments inside comments?"
    ],
    "answer": "<!-- -->; no; no"
  },
  {
    "title": "HTML Colors",
    "outcomes": [
      "Set colors with names, RGB, HEX and HSL.",
      "Color text, backgrounds and borders.",
      "Pick colors with a color picker."
    ],
    "concept": "HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA or HSLA values. In HTML, a color can be specified by using a color name.",
    "why": "Colors guide the reader's eye and set the mood of your page. Every brand uses consistent colors.",
    "syntax": "style=\"color:Tomato;\" · style=\"color:#ff0000;\" · style=\"color:rgb(255,0,0);\"",
    "examples": [
      [
        "Color names",
        "<h1 style=\"color:Tomato;\">Tomato</h1>\n<p style=\"color:DodgerBlue;\">DodgerBlue text</p>"
      ],
      [
        "HEX and RGB values",
        "<p style=\"color:#ff0000;\">Red in HEX</p>\n<p style=\"background-color:rgb(0,0,255);color:white;\">Blue background in RGB</p>"
      ],
      [
        "Border color",
        "<h1 style=\"border:2px solid Tomato;\">Tomato border</h1>"
      ]
    ],
    "explain": [
      "There are 140 standard color names, like Tomato and DodgerBlue.",
      "HEX uses #rrggbb. For example, #ff0000 is red.",
      "RGB uses rgb(red, green, blue) with values from 0 to 255.",
      "You can color text, backgrounds and borders with the same values."
    ],
    "mistake": "Using too many bright colors on one page. It hurts readability.",
    "practice": "Create a page with a colored heading, a paragraph with a background color, and a bordered box.",
    "check": [
      "Name three ways to specify a color.",
      "What color does #0000ff represent?",
      "Which property colors the text?"
    ],
    "answer": "names, HEX and RGB (also HSL); blue; color"
  },
  {
    "title": "HTML CSS Linking",
    "outcomes": [
      "Style elements inline with the style attribute.",
      "Write internal CSS in a style tag.",
      "Link an external CSS file with the link tag."
    ],
    "concept": "CSS can be added to HTML documents in 3 ways: Inline, with the style attribute inside HTML elements. Internal, with a <style> element in the <head> section. External, with a <link> element to an external CSS file.",
    "why": "An external style sheet lets one file style many pages. Change one file, and your whole site updates.",
    "syntax": "<link rel=\"stylesheet\" href=\"styles.css\">",
    "examples": [
      [
        "Inline CSS",
        "<h1 style=\"color:blue;\">A Blue Heading</h1>"
      ],
      [
        "Internal CSS",
        "<head>\n<style>\nbody { background-color: powderblue; }\nh1 { color: blue; }\n</style>\n</head>"
      ],
      [
        "External CSS",
        "<head>\n<link rel=\"stylesheet\" href=\"styles.css\">\n</head>"
      ]
    ],
    "explain": [
      "Inline CSS styles one single element.",
      "Internal CSS styles one whole page from the <head>.",
      "External CSS styles many pages from one .css file.",
      "External is best for large sites. Inline is best for quick tests."
    ],
    "mistake": "Using inline styles for everything on a big site. It becomes impossible to maintain.",
    "practice": "Create styles.css with a rule for h1. Link it to two different HTML pages and watch both pages change.",
    "check": [
      "Name the three ways to add CSS.",
      "Which method styles many pages at once?",
      "Where does the style tag go?"
    ],
    "answer": "inline, internal and external; external; in the head"
  },
  {
    "title": "HTML Links",
    "outcomes": [
      "Create links with the a tag and href attribute.",
      "Open links in a new tab with target=\"_blank\".",
      "Link to a section on the same page."
    ],
    "concept": "HTML links are hyperlinks. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow turns into a little hand.",
    "why": "Links connect pages together. They are the reason the web is called a web.",
    "syntax": "<a href=\"url\">link text</a>",
    "examples": [
      [
        "A basic link",
        "<a href=\"https://www.w3schools.com\">Visit W3Schools</a>"
      ],
      [
        "Open in a new tab",
        "<a href=\"https://example.com\" target=\"_blank\">Open Example</a>"
      ],
      [
        "Link to a section on the same page",
        "<a href=\"#contact\">Jump to contact</a>\n<h2 id=\"contact\">Contact</h2>"
      ]
    ],
    "explain": [
      "The <a> tag defines a link. href holds the destination.",
      "Use a full URL for other websites and a relative path for your own pages.",
      "target=\"_blank\" opens the link in a new tab.",
      "A link starting with # jumps to the element with that id."
    ],
    "mistake": "Writing \"click here\" as link text. Link text should describe the destination.",
    "practice": "Add three links to your page: one to another website, one to another page of yours, and one that jumps to a section.",
    "check": [
      "Which attribute holds the link destination?",
      "How do you open a link in a new tab?",
      "What does href=\"#contact\" do?"
    ],
    "answer": "href; target=\"_blank\"; jumps to the element with id contact"
  },
  {
    "title": "HTML Images",
    "outcomes": [
      "Add images with the img tag and src attribute.",
      "Write helpful alt text for every image.",
      "Control image size with width and height."
    ],
    "concept": "The HTML <img> tag is used to embed an image in a web page. Images are not technically inserted into a web page. Images are linked to web pages.",
    "why": "Images make pages interesting and explain ideas faster than words. Alt text keeps images useful for everyone.",
    "syntax": "<img src=\"url\" alt=\"description\">",
    "examples": [
      [
        "A basic image",
        "<img src=\"cat.jpg\" alt=\"A cat sitting in the sun\">"
      ],
      [
        "An image with size",
        "<img src=\"cat.jpg\" alt=\"A cat\" width=\"300\" height=\"200\">"
      ],
      [
        "An image as a link",
        "<a href=\"https://example.com\">\n<img src=\"logo.png\" alt=\"Company logo\">\n</a>"
      ]
    ],
    "explain": [
      "src holds the image file path. alt describes the image.",
      "Always include alt text. It shows if the image fails to load.",
      "width and height reserve space so the page does not jump while loading.",
      "The <img> tag is empty. It has no closing tag."
    ],
    "mistake": "Skipping the alt attribute, or copying the file name into alt, like alt=\"cat.jpg\".",
    "practice": "Add an image to your page with good alt text and a fixed width and height. Break the src on purpose to see the alt text appear.",
    "check": [
      "Which attribute holds the image file?",
      "What is alt text for?",
      "Does the img tag need a closing tag?"
    ],
    "answer": "src; describes the image when it cannot be seen; no"
  },
  {
    "title": "HTML Favicon",
    "outcomes": [
      "Add a favicon with the link tag.",
      "Choose a small, simple icon image.",
      "Check the favicon in the browser tab."
    ],
    "concept": "A favicon is a small image displayed next to the page title in the browser tab. You can use any image you like as your favicon.",
    "why": "A favicon makes your site look professional. It helps users find your tab among many open tabs.",
    "syntax": "<link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">",
    "examples": [
      [
        "Adding a favicon",
        "<head>\n<title>My Page</title>\n<link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n</head>"
      ],
      [
        "A PNG favicon",
        "<link rel=\"icon\" type=\"image/png\" href=\"icon.png\">"
      ]
    ],
    "explain": [
      "The favicon link goes inside the <head> element.",
      "rel=\"icon\" tells the browser this image is the favicon.",
      "The classic format is favicon.ico, but PNG works too.",
      "Keep the icon simple. It shows very small."
    ],
    "mistake": "Using a large, detailed photo. It becomes an unreadable blur at tab size.",
    "practice": "Create or download a simple icon, link it as your favicon, and look at your browser tab.",
    "check": [
      "Where does the favicon link go?",
      "What does rel=\"icon\" mean?",
      "What is the classic favicon file name?"
    ],
    "answer": "in the head; this image is the page icon; favicon.ico"
  },
  {
    "title": "HTML Page Title",
    "outcomes": [
      "Set the page title with the title tag.",
      "Write titles that describe the page.",
      "Understand where the title appears."
    ],
    "concept": "The <title> element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.",
    "why": "The title is the first thing users see in search results and in tabs. A good title brings more visitors.",
    "syntax": "<title>Page Title</title>",
    "examples": [
      [
        "Setting the title",
        "<head>\n<title>Chocolate Cake Recipe</title>\n</head>"
      ],
      [
        "Title with the site name",
        "<title>Contact Us - Coding Vibes</title>"
      ]
    ],
    "explain": [
      "The <title> tag goes inside <head>.",
      "The title shows in the browser tab, not on the page itself.",
      "Search engines show your title in the results.",
      "Keep titles short, clear and unique for each page."
    ],
    "mistake": "Leaving the default title like \"Untitled Document\" on every page.",
    "practice": "Give every page of your site a unique, descriptive title and check each browser tab.",
    "check": [
      "Where does the title tag go?",
      "Where is the title displayed?",
      "Should two pages share the same title?"
    ],
    "answer": "in the head; in the browser tab and in search results; no, each page needs a unique title"
  },
  {
    "title": "HTML Tables",
    "outcomes": [
      "Build a table with table, tr, th and td.",
      "Add a caption and span cells with colspan and rowspan.",
      "Know that tables are for data, not for layout."
    ],
    "concept": "HTML tables allow web developers to arrange data into rows and columns. A table in HTML consists of table cells inside rows and columns.",
    "why": "Tables are the right tool for prices, schedules and statistics. Structured data is easy to scan and compare.",
    "syntax": "<table><tr><th>Head</th></tr><tr><td>Data</td></tr></table>",
    "examples": [
      [
        "A simple table",
        "<table>\n<tr><th>Name</th><th>Age</th></tr>\n<tr><td>Ana</td><td>21</td></tr>\n<tr><td>Ali</td><td>25</td></tr>\n</table>"
      ],
      [
        "Caption and a spanned cell",
        "<table>\n<caption>Monthly Sales</caption>\n<tr><th colspan=\"2\">Q1</th></tr>\n<tr><td>Jan</td><td>Feb</td></tr>\n</table>"
      ]
    ],
    "explain": [
      "<table> starts the table. <tr> is one row.",
      "<th> is a header cell. It is bold and centered by default.",
      "<td> is a normal data cell.",
      "colspan merges columns. rowspan merges rows."
    ],
    "mistake": "Using tables to lay out the page design. Use CSS layout instead.",
    "practice": "Build a table of your weekly class schedule with a caption and a header row.",
    "check": [
      "Which tag defines a table row?",
      "What is the difference between th and td?",
      "What does colspan=\"2\" do?"
    ],
    "answer": "tr; th is a header cell, td is a data cell; merges two columns into one cell"
  },
  {
    "title": "HTML Lists",
    "outcomes": [
      "Make bullet lists with ul and numbered lists with ol.",
      "Make description lists with dl, dt and dd.",
      "Nest lists inside each other."
    ],
    "concept": "HTML lists allow web developers to group a set of related items in lists. An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.",
    "why": "Lists turn messy text into scannable points. Menus, steps and glossaries are all lists.",
    "syntax": "<ul><li>item</li></ul> · <ol><li>item</li></ol>",
    "examples": [
      [
        "Unordered and ordered lists",
        "<ul>\n<li>Coffee</li>\n<li>Tea</li>\n</ul>\n<ol>\n<li>Boil water</li>\n<li>Add tea</li>\n</ol>"
      ],
      [
        "A description list",
        "<dl>\n<dt>Coffee</dt>\n<dd>A hot drink made from beans.</dd>\n<dt>Tea</dt>\n<dd>A hot drink made from leaves.</dd>\n</dl>"
      ]
    ],
    "explain": [
      "<ul> is for items where the order does not matter.",
      "<ol> numbers the items when the order matters.",
      "<dl> pairs terms (<dt>) with descriptions (<dd>).",
      "You can put a list inside an <li> to nest lists."
    ],
    "mistake": "Using <br> tags to fake a list instead of real list tags.",
    "practice": "Make a shopping list with ul, recipe steps with ol, and a glossary of three terms with dl.",
    "check": [
      "When do you use ol instead of ul?",
      "Which tags make a description list?",
      "Can you nest a list inside a list item?"
    ],
    "answer": "when the order matters; dl, dt and dd; yes"
  },
  {
    "title": "HTML Block and Inline Elements",
    "outcomes": [
      "Tell block and inline elements apart.",
      "Know that block elements start on a new line.",
      "Know that inline elements stay in the text flow."
    ],
    "concept": "Every HTML element has a default display value: block or inline. A block-level element always starts on a new line and takes up the full width. An inline element does not start on a new line and takes only as much width as necessary.",
    "why": "This difference explains why some elements stack and others sit side by side. It is the base of all page layout.",
    "syntax": "Block: <div> <p> <h1> · Inline: <span> <a> <img>",
    "examples": [
      [
        "Block elements",
        "<p>This paragraph</p>\n<p>starts on a new line.</p>\n<div>A div is also a block.</div>"
      ],
      [
        "Inline elements",
        "<p>This <span>span</span> stays <a href=\"#\">in the line</a>.</p>"
      ]
    ],
    "explain": [
      "Block elements always start on a new line.",
      "Block elements take the full available width.",
      "Inline elements do not start on a new line.",
      "Inline elements take only the width they need."
    ],
    "mistake": "Putting a block element like <div> inside an inline element like <span>. It breaks the layout.",
    "practice": "Make a page with two paragraphs and a div. Then add a span and a link inside a sentence and watch how they flow.",
    "check": [
      "Does a block element start on a new line?",
      "Name two block and two inline elements.",
      "Can a div sit inside a span?"
    ],
    "answer": "yes; block: div and p, inline: span and a; no"
  },
  {
    "title": "HTML div Element",
    "outcomes": [
      "Group content with the div element.",
      "Understand that div has no meaning of its own.",
      "Style a div with class and CSS."
    ],
    "concept": "The <div> element is often used as a container for other HTML elements. The <div> element has no required attributes, but style, class and id are common.",
    "why": "Divs let you group parts of a page so you can style or move them together.",
    "syntax": "<div>content goes here</div>",
    "examples": [
      [
        "Grouping content",
        "<div>\n<h2>London</h2>\n<p>London is the capital of England.</p>\n</div>"
      ],
      [
        "A styled div",
        "<div style=\"background-color:black;color:white;padding:20px;\">\n<h2>Dark box</h2>\n<p>White text on black.</p>\n</div>"
      ]
    ],
    "explain": [
      "A <div> is a block-level container.",
      "It has no visual effect until you style it.",
      "Use it to group elements that belong together.",
      "Give it a class or id so CSS can target it."
    ],
    "mistake": "Wrapping every single element in its own div. Group related things instead.",
    "practice": "Group a heading and two paragraphs in a div, then give the div a background color.",
    "check": [
      "Is div a block or inline element?",
      "Does a plain div change how the page looks?",
      "Why do you add a class to a div?"
    ],
    "answer": "block; no; so CSS can target and style it"
  },
  {
    "title": "HTML Classes",
    "outcomes": [
      "Add a class to any element.",
      "Style all elements of a class with one CSS rule.",
      "Use multiple classes on one element."
    ],
    "concept": "The HTML class attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class.",
    "why": "Classes let you style many elements with one rule. Change the rule once, and every element with that class updates.",
    "syntax": "<div class=\"city\">...</div> · .city { ... }",
    "examples": [
      [
        "One class, many elements",
        "<style>.city { color: blue; }</style>\n<h2 class=\"city\">London</h2>\n<h2 class=\"city\">Paris</h2>"
      ],
      [
        "Multiple classes on one element",
        "<p class=\"note important\">Read this first.</p>"
      ]
    ],
    "explain": [
      "The class attribute names the element's group.",
      "In CSS, a class selector starts with a dot: .city.",
      "Many elements can share the same class.",
      "One element can have several classes, separated by spaces."
    ],
    "mistake": "Using spaces inside a single class name. That creates two separate classes.",
    "practice": "Give three paragraphs the class \"highlight\" and style them all with one CSS rule.",
    "check": [
      "How does a CSS class selector start?",
      "Can two elements share one class?",
      "How do you add two classes to one element?"
    ],
    "answer": "with a dot, like .city; yes; class=\"note important\""
  },
  {
    "title": "HTML id Attribute",
    "outcomes": [
      "Give an element a unique id.",
      "Target one element with CSS using #.",
      "Jump to an element with a link."
    ],
    "concept": "The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.",
    "why": "An id pinpoints one exact element. It is used for styling, for links, and for JavaScript.",
    "syntax": "<h1 id=\"main-title\">...</h1> · #main-title { ... }",
    "examples": [
      [
        "A unique id",
        "<h1 id=\"main-title\">Welcome</h1>"
      ],
      [
        "Styling with an id selector",
        "<style>#main-title { color: red; }</style>\n<h1 id=\"main-title\">Welcome</h1>"
      ],
      [
        "Linking to an id",
        "<a href=\"#contact\">Go to contact</a>\n<h2 id=\"contact\">Contact</h2>"
      ]
    ],
    "explain": [
      "An id must be unique. Only one element per page can have it.",
      "In CSS, an id selector starts with #: #main-title.",
      "Ids are stronger than classes in CSS.",
      "JavaScript uses getElementById to find one exact element."
    ],
    "mistake": "Giving the same id to two elements. Only the first one will work correctly.",
    "practice": "Give your main heading an id, style it with an id selector, and add a link that jumps to it.",
    "check": [
      "How many elements can share one id?",
      "How does a CSS id selector start?",
      "Which JavaScript method finds an element by id?"
    ],
    "answer": "one; with #, like #main-title; getElementById"
  },
  {
    "title": "HTML Iframes",
    "outcomes": [
      "Embed another page with the iframe tag.",
      "Set the iframe size with width and height.",
      "Remove the border with CSS."
    ],
    "concept": "An HTML iframe is used to display a web page within a web page. The <iframe> tag specifies an inline frame.",
    "why": "Iframes let you show videos, maps and other pages inside your own page.",
    "syntax": "<iframe src=\"url\" title=\"description\"></iframe>",
    "examples": [
      [
        "A basic iframe",
        "<iframe src=\"https://example.com\" title=\"Example site\"></iframe>"
      ],
      [
        "A sized iframe",
        "<iframe src=\"demo.html\" width=\"600\" height=\"400\" title=\"Demo page\"></iframe>"
      ],
      [
        "An iframe without a border",
        "<iframe src=\"demo.html\" style=\"border:none;\" title=\"Demo\"></iframe>"
      ]
    ],
    "explain": [
      "src holds the page to embed. title describes it.",
      "Use width and height to size the frame.",
      "Iframes have a border by default. Remove it with CSS.",
      "Always add a title for screen readers."
    ],
    "mistake": "Embedding a page without a title. Screen reader users get no clue what the frame is.",
    "practice": "Embed one of your own pages in an iframe, set its size, and remove its border.",
    "check": [
      "What does the iframe tag do?",
      "Which attribute holds the embedded page?",
      "How do you remove the iframe border?"
    ],
    "answer": "displays a web page inside a web page; src; style=\"border:none;\""
  },
  {
    "title": "HTML JavaScript",
    "outcomes": [
      "Add JavaScript with the script tag.",
      "Write your first line of JavaScript.",
      "Know where the script tag goes."
    ],
    "concept": "The HTML <script> tag is used to define a client-side script (JavaScript). The <script> element either contains scripting statements, or it points to an external script file.",
    "why": "JavaScript makes pages interactive. Buttons respond, forms check input, and content updates without reloading.",
    "syntax": "<script>...javascript code...</script>",
    "examples": [
      [
        "Your first script",
        "<p id=\"demo\"></p>\n<button onclick=\"document.getElementById('demo').innerHTML='Hello!';\">Click me</button>"
      ],
      [
        "A script in the head",
        "<head>\n<script>\nfunction greet() { alert('Hello!'); }\n</script>\n</head>"
      ],
      [
        "An external script file",
        "<script src=\"app.js\"></script>"
      ]
    ],
    "explain": [
      "The <script> tag holds JavaScript code.",
      "It can go in the <head> or in the <body>.",
      "Use src to load JavaScript from a separate file.",
      "JavaScript can change HTML content after the page loads."
    ],
    "mistake": "Forgetting that JavaScript runs in the browser. It cannot reach your server's files directly.",
    "practice": "Add a button that changes a paragraph's text when clicked, using a small inline script.",
    "check": [
      "Which tag adds JavaScript to a page?",
      "Where can the script tag go?",
      "How do you load an external script file?"
    ],
    "answer": "script; in head or body; with the src attribute"
  },
  {
    "title": "HTML File Paths",
    "outcomes": [
      "Tell absolute and relative paths apart.",
      "Link files in the same folder and in other folders.",
      "Use ../ to go up one folder."
    ],
    "concept": "A file path describes the location of a file in a web site's folder structure. File paths are used when linking to external files, like web pages, images and style sheets.",
    "why": "Wrong paths are the most common reason images and styles do not load. Correct paths keep your site working when you move it.",
    "syntax": "<img src=\"picture.jpg\"> · <img src=\"images/picture.jpg\"> · <img src=\"/images/picture.jpg\">",
    "examples": [
      [
        "File in the same folder",
        "<img src=\"picture.jpg\" alt=\"Picture\">"
      ],
      [
        "File in a subfolder",
        "<img src=\"images/picture.jpg\" alt=\"Picture\">"
      ],
      [
        "File one folder up",
        "<img src=\"../picture.jpg\" alt=\"Picture\">"
      ]
    ],
    "explain": [
      "A path with no slash starts from the current folder.",
      "images/picture.jpg looks inside the images subfolder.",
      "../ moves up one folder level.",
      "A path starting with / starts from the website root."
    ],
    "mistake": "Using a path from your own computer, like C:\\images\\pic.jpg. It breaks on the web.",
    "practice": "Put an image in a subfolder and link it with a relative path. Then move the page and fix the path with ../.",
    "check": [
      "What does ../ mean in a path?",
      "What does a path starting with / mean?",
      "Why should you avoid full computer paths?"
    ],
    "answer": "go up one folder; start from the website root; they only work on your own computer"
  },
  {
    "title": "HTML Head Element",
    "outcomes": [
      "List what belongs inside the head element.",
      "Add meta tags for charset and description.",
      "Set the page's base URL."
    ],
    "concept": "The HTML <head> element is a container for metadata. HTML metadata is data about the HTML document. Metadata is not displayed.",
    "why": "The head controls how browsers and search engines treat your page: its encoding, title, styles and scripts.",
    "syntax": "<head><title>..</title><meta ..><link ..><style>..</style><script>..</script></head>",
    "examples": [
      [
        "A typical head",
        "<head>\n<title>My Page</title>\n<meta charset=\"UTF-8\">\n<meta name=\"description\" content=\"Learn HTML easily.\">\n<link rel=\"stylesheet\" href=\"styles.css\">\n</head>"
      ],
      [
        "Setting a base URL",
        "<head>\n<base href=\"https://example.com/images/\" target=\"_blank\">\n</head>"
      ]
    ],
    "explain": [
      "<title> sets the browser tab title.",
      "<meta> gives data like the charset and the page description.",
      "<link> connects stylesheets and favicons.",
      "<base> sets a default URL for all relative links."
    ],
    "mistake": "Putting visible content like headings inside <head>. Nothing in head is displayed.",
    "practice": "Build a complete head with a title, a charset, a description meta tag and a stylesheet link.",
    "check": [
      "Is the head content visible on the page?",
      "Which tag sets the character encoding?",
      "What does the base tag do?"
    ],
    "answer": "no; meta charset; sets the default URL for relative links"
  },
  {
    "title": "HTML Layout",
    "outcomes": [
      "Name the common ways to build a page layout.",
      "Build a simple layout with semantic elements.",
      "Understand CSS float, flexbox and grid at a high level."
    ],
    "concept": "Websites often display content in multiple columns, like a magazine. HTML has several semantic elements that define the different parts of a web page.",
    "why": "A clear layout helps visitors find content fast. Semantic layout elements also help search engines.",
    "syntax": "<header> <nav> <section> <article> <aside> <footer>",
    "examples": [
      [
        "A layout skeleton",
        "<header><h1>City Gallery</h1></header>\n<nav>Home | News | Contact</nav>\n<section>\n<article><h2>London</h2><p>...</p></article>\n</section>\n<aside>Related links</aside>\n<footer>Copyright 2026</footer>"
      ],
      [
        "A simple two-column style",
        "<style>\nnav { float: left; width: 30%; }\narticle { float: left; width: 70%; }\n</style>"
      ]
    ],
    "explain": [
      "<header> holds the top banner. <nav> holds navigation links.",
      "<section> groups related content. <article> holds independent content.",
      "<aside> holds side content. <footer> holds the bottom of the page.",
      "CSS techniques for columns include float, flexbox and grid."
    ],
    "mistake": "Building the whole layout with tables. Tables are for data, not for page structure.",
    "practice": "Build a page with a header, a nav, one section with an article, an aside and a footer.",
    "check": [
      "Which element holds navigation links?",
      "What is the difference between section and article?",
      "Name two CSS layout techniques."
    ],
    "answer": "nav; article is independent content, section groups related content; flexbox and grid"
  },
  {
    "title": "HTML Responsive",
    "outcomes": [
      "Add the viewport meta tag.",
      "Make images scale with the screen.",
      "Use basic media queries."
    ],
    "concept": "Responsive web design is about creating web pages that look good on all devices. A responsive web design automatically adjusts for different screen sizes and viewports.",
    "why": "Most visitors use phones. A page that only works on desktop loses most of its audience.",
    "syntax": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
    "examples": [
      [
        "The viewport tag",
        "<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>"
      ],
      [
        "A responsive image",
        "<img src=\"photo.jpg\" alt=\"Photo\" style=\"max-width:100%;height:auto;\">"
      ],
      [
        "A simple media query",
        "<style>\n@media (max-width: 600px) {\nbody { background-color: lightblue; }\n}\n</style>"
      ]
    ],
    "explain": [
      "The viewport tag tells mobile browsers how to scale the page.",
      "max-width:100% stops images from overflowing small screens.",
      "Media queries apply CSS only at certain screen sizes.",
      "Test your page by resizing the browser window."
    ],
    "mistake": "Forgetting the viewport tag. The page then looks tiny on phones.",
    "practice": "Add the viewport tag to your page, make your images responsive, and test the page at phone width.",
    "check": [
      "What does the viewport meta tag do?",
      "Which CSS keeps images inside small screens?",
      "What is a media query?"
    ],
    "answer": "controls page scaling on mobile; max-width:100%; CSS that applies only at certain screen sizes"
  },
  {
    "title": "HTML Computercode",
    "outcomes": [
      "Show code with the code tag.",
      "Keep formatting with the pre tag.",
      "Mark keyboard input with kbd and program output with samp."
    ],
    "concept": "HTML contains several elements for defining user input and computer code. The <code> element defines a piece of computer code. The text inside is displayed in the browser's default monospace font.",
    "why": "Code looks different from normal text. These tags keep code readable and meaningful.",
    "syntax": "<code>x = 5;</code> · <pre>...</pre> · <kbd>Ctrl+S</kbd> · <samp>output</samp>",
    "examples": [
      [
        "Inline code",
        "<p>The <code>print()</code> function shows text.</p>"
      ],
      [
        "A code block",
        "<pre><code>\nfor i in range(3):\n    print(i)\n</code></pre>"
      ],
      [
        "Keyboard input and program output",
        "<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>\n<p><samp>File saved.</samp></p>"
      ]
    ],
    "explain": [
      "<code> marks a piece of code, usually in a monospace font.",
      "<pre> keeps spaces and line breaks exactly as typed.",
      "<kbd> marks keyboard input.",
      "<samp> marks sample output from a program."
    ],
    "mistake": "Writing multi-line code in a plain <p>. The line breaks disappear. Use <pre>.",
    "practice": "Show a three-line code snippet with pre and code, plus one keyboard shortcut with kbd.",
    "check": [
      "Which tag keeps line breaks and spaces?",
      "What does the kbd tag mark?",
      "What does the samp tag mark?"
    ],
    "answer": "pre; keyboard input; sample program output"
  },
  {
    "title": "HTML Semantics",
    "outcomes": [
      "Name the main semantic elements.",
      "Choose semantic tags instead of divs.",
      "Explain why semantics matter."
    ],
    "concept": "A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: <div> and <span>. They tell nothing about their content.",
    "why": "Semantic code is easier to read, better for search engines, and works better with screen readers.",
    "syntax": "<article> <aside> <details> <figure> <footer> <header> <main> <nav> <section>",
    "examples": [
      [
        "A semantic article",
        "<article>\n<h2>News headline</h2>\n<p>Story text...</p>\n</article>"
      ],
      [
        "A figure with a caption",
        "<figure>\n<img src=\"pic.jpg\" alt=\"A mountain\">\n<figcaption>A mountain at sunset.</figcaption>\n</figure>"
      ],
      [
        "A details dropdown",
        "<details>\n<summary>Read more</summary>\n<p>Hidden extra text.</p>\n</details>"
      ]
    ],
    "explain": [
      "Semantic tags describe their content's role.",
      "<figure> groups an image with its <figcaption>.",
      "<details> creates a native show and hide block.",
      "Use a semantic tag whenever one fits. Use <div> only when none fits."
    ],
    "mistake": "Using divs for everything when a semantic tag would describe the content better.",
    "practice": "Rewrite a div-heavy page using article, section, figure and details where they fit.",
    "check": [
      "Name three semantic elements.",
      "What does the details tag do?",
      "When is it okay to use a div?"
    ],
    "answer": "article, section and nav; creates a show and hide block; when no semantic element fits"
  },
  {
    "title": "HTML Style Guide",
    "outcomes": [
      "Write clean, consistent HTML.",
      "Use lowercase tags and quoted attributes.",
      "Indent nested elements."
    ],
    "concept": "A consistent, clean and tidy HTML code makes it easier for others to read and understand your code. Always use lowercase element names and attribute names.",
    "why": "Clean code is easier to debug and easier for teams to work with. Future you will thank present you.",
    "syntax": "lowercase tags · quoted attributes · indented nesting",
    "examples": [
      [
        "Good style",
        "<body>\n<h1>Fruits</h1>\n<ul>\n<li>Apple</li>\n<li>Mango</li>\n</ul>\n</body>"
      ],
      [
        "Quoted attributes",
        "<img src=\"apple.jpg\" alt=\"An apple\">\n<a href=\"https://example.com\" title=\"Example\">Link</a>"
      ]
    ],
    "explain": [
      "Always use lowercase for tags and attribute names.",
      "Always quote attribute values.",
      "Indent nested elements to show the structure.",
      "Close all elements and add alt text to images."
    ],
    "mistake": "Mixing uppercase and lowercase tags, or leaving attribute values unquoted.",
    "practice": "Take a messy HTML file and rewrite it following these style rules.",
    "check": [
      "Should tags be uppercase or lowercase?",
      "Should attribute values be quoted?",
      "Why do we indent nested elements?"
    ],
    "answer": "lowercase; yes, always; to show the structure clearly"
  },
  {
    "title": "HTML Entities",
    "outcomes": [
      "Display reserved characters with entities.",
      "Use &lt;, &gt;, &amp; and &nbsp;.",
      "Know when entities are needed."
    ],
    "concept": "Reserved characters in HTML must be replaced with character entities. Characters that are not present on your keyboard can also be replaced by entities.",
    "why": "The browser reads < and > as code. Entities let you show these characters as text.",
    "syntax": "&lt; &gt; &amp; &nbsp; &quot;",
    "examples": [
      [
        "Showing tags as text",
        "<p>Use the &lt;p&gt; tag for paragraphs.</p>"
      ],
      [
        "Ampersand and extra space",
        "<p>Fish &amp; chips</p>\n<p>Tom&nbsp;&nbsp;Jones</p>"
      ]
    ],
    "explain": [
      "&lt; shows < and &gt; shows >.",
      "&amp; shows &. Write it as &amp;amp;.",
      "&nbsp; is a non-breaking space.",
      "Entities start with & and end with ;."
    ],
    "mistake": "Writing a raw & in text or in a URL. Always write &amp;.",
    "practice": "Write a paragraph that shows the <div> tag as text, and use &amp; in a sentence.",
    "check": [
      "How do you show a < sign as text?",
      "How do you write an ampersand?",
      "What does &nbsp; do?"
    ],
    "answer": "&lt;; &amp;; inserts a space that does not break"
  },
  {
    "title": "HTML Symbols",
    "outcomes": [
      "Add symbols like ©, ® and € with entities.",
      "Find symbol codes in a reference table.",
      "Use the numeric form when no name exists."
    ],
    "concept": "Many mathematical, technical and currency symbols are not present on a normal keyboard. To add such symbols to an HTML page, you can use the entity name or the entity number.",
    "why": "Symbols like © and € make content look correct and professional, without needing images.",
    "syntax": "&copy; &#169; · &reg; &#174; · &euro; &#8364;",
    "examples": [
      [
        "Common symbols",
        "<p>&copy; 2026 Coding Vibes</p>\n<p>&reg; Trademark &trade;</p>"
      ],
      [
        "Currency and fractions",
        "<p>Price: &euro;50 or &pound;45</p>\n<p>&frac12; + &frac14; = &frac34;</p>"
      ]
    ],
    "explain": [
      "&copy; makes © and &reg; makes ®.",
      "&euro; makes € and &pound; makes £.",
      "Every symbol also has a number form, like &#169;.",
      "If a browser does not know a name, the number form still works."
    ],
    "mistake": "Typing (c) instead of ©. Use the real symbol.",
    "practice": "Add a footer with ©, your name and the year, plus one currency symbol.",
    "check": [
      "What does &copy; display?",
      "What is the number form of ©?",
      "Which entity makes the euro sign?"
    ],
    "answer": "©; &#169;; &euro;"
  },
  {
    "title": "HTML Emojis",
    "outcomes": [
      "Add emojis to your page with UTF-8.",
      "Understand that emojis are characters, not images.",
      "Know that emojis look different on each device."
    ],
    "concept": "Emojis are characters from the UTF-8 character set. Emojis look like images, but they are not. They are letters (characters) from the UTF-8 alphabet.",
    "why": "Emojis add feeling to headings and buttons, and they work without loading any image files.",
    "syntax": "<meta charset=\"UTF-8\"> then paste the emoji",
    "examples": [
      [
        "Emojis in text",
        "<p>I &#128512; HTML!</p>\n<p>I love HTML!</p>"
      ],
      [
        "An emoji in a heading",
        "<h1>&#127881; Welcome! &#127881;</h1>"
      ]
    ],
    "explain": [
      "Emojis need <meta charset=\"UTF-8\"> in the head.",
      "You can paste an emoji directly or use its number, like &#128512;.",
      "Emojis are text. You can change their size with CSS.",
      "The same emoji can look different on phones and computers."
    ],
    "mistake": "Forgetting the UTF-8 meta tag. Emojis then show as broken boxes.",
    "practice": "Add three emojis to your page: one pasted directly and two with number codes.",
    "check": [
      "Are emojis images or characters?",
      "What meta tag do emojis need?",
      "How do you add an emoji with a code?"
    ],
    "answer": "characters; <meta charset=\"UTF-8\">; with its number, like &#128512;"
  },
  {
    "title": "HTML Charsets",
    "outcomes": [
      "Set the character encoding with meta charset.",
      "Understand what UTF-8 is.",
      "Fix broken characters on a page."
    ],
    "concept": "To display an HTML page correctly, a web browser must know which character set to use. This is specified in the <meta> tag: <meta charset=\"UTF-8\">",
    "why": "The wrong encoding turns text into strange symbols. UTF-8 handles almost every language in the world.",
    "syntax": "<meta charset=\"UTF-8\">",
    "examples": [
      [
        "Setting UTF-8",
        "<head>\n<meta charset=\"UTF-8\">\n<title>My Page</title>\n</head>"
      ],
      [
        "Text that needs UTF-8",
        "<p>Café, naïve, résumé</p>\n<p>اردو and 中文 work too.</p>"
      ]
    ],
    "explain": [
      "The charset meta tag goes first inside <head>.",
      "UTF-8 covers English, Urdu, Arabic, Chinese and more.",
      "Older sets like ISO-8859-1 only cover Western languages.",
      "Always use UTF-8 for new pages."
    ],
    "mistake": "Skipping the charset tag. Special characters then break on some browsers.",
    "practice": "Add <meta charset=\"UTF-8\"> to your page and write one line with special characters like café.",
    "check": [
      "Which tag sets the character encoding?",
      "What does UTF-8 cover?",
      "Where does the charset tag go?"
    ],
    "answer": "meta charset; almost every language in the world; first inside head"
  },
  {
    "title": "HTML URL Encoding",
    "outcomes": [
      "Understand why URLs cannot contain spaces.",
      "Read encoded characters like %20.",
      "Know when the browser encodes for you."
    ],
    "concept": "URLs can only be sent over the Internet using the ASCII character set. Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format. This is called URL encoding.",
    "why": "Spaces and special characters break links. Encoding keeps links working everywhere.",
    "syntax": "space → %20 · ! → %21 · # → %23",
    "examples": [
      [
        "A space in a file name",
        "<!-- my page.html becomes: -->\n<a href=\"my%20page.html\">My Page</a>"
      ],
      [
        "Common encoded characters",
        "<!-- %20 is space, %26 is &, %3F is ? -->\n<a href=\"search?q=fish%20%26%20chips\">Search</a>"
      ]
    ],
    "explain": [
      "URL encoding replaces unsafe characters with % and two digits.",
      "A space becomes %20.",
      "Browsers encode form input automatically.",
      "Avoid spaces in file names to avoid encoding problems."
    ],
    "mistake": "Naming files with spaces and special characters. Use dashes instead, like my-page.html.",
    "practice": "Rename a file with a space to use a dash, and write a link to a URL that contains %20.",
    "check": [
      "What does %20 mean in a URL?",
      "Which characters must be encoded?",
      "How do you avoid encoding problems in file names?"
    ],
    "answer": "a space; spaces and special characters outside ASCII; use dashes instead of spaces"
  },
  {
    "title": "HTML Forms",
    "outcomes": [
      "Build a form with the form tag.",
      "Set where data goes with action and method.",
      "Connect labels to inputs."
    ],
    "concept": "The HTML <form> element is used to create an HTML form for user input. The <form> element is a container for different types of input elements, like text fields, checkboxes and buttons.",
    "why": "Forms collect information: logins, sign-ups, orders and searches. Every interactive site needs them.",
    "syntax": "<form action=\"/submit\" method=\"post\">...</form>",
    "examples": [
      [
        "A simple form",
        "<form action=\"/signup\">\n<label for=\"name\">Name:</label>\n<input type=\"text\" id=\"name\" name=\"name\">\n<input type=\"submit\" value=\"Send\">\n</form>"
      ],
      [
        "GET vs POST",
        "<form action=\"/search\" method=\"get\">\n<input type=\"text\" name=\"q\">\n<input type=\"submit\" value=\"Search\">\n</form>"
      ]
    ],
    "explain": [
      "action tells the form where to send the data.",
      "method=\"get\" puts the data in the URL. method=\"post\" hides it.",
      "Every input needs a name so the server can read it.",
      "Use <label> so users know what each field is for."
    ],
    "mistake": "Forgetting the name attribute. The server then receives nothing from that field.",
    "practice": "Build a sign-up form with name and email fields, labels, and a submit button.",
    "check": [
      "What does the action attribute do?",
      "What is the difference between GET and POST?",
      "Why does each input need a name?"
    ],
    "answer": "sets where the form data is sent; GET shows data in the URL, POST hides it; so the server can identify the data"
  },
  {
    "title": "HTML Form Elements",
    "outcomes": [
      "Use input, select, textarea and button.",
      "Group options with optgroup.",
      "Group fields with fieldset and legend."
    ],
    "concept": "The HTML <form> element can contain several form elements: <input>, <label>, <select>, <textarea>, <button>, <fieldset>, <legend>, <datalist>, <option> and <optgroup>.",
    "why": "Each element fits a different kind of input: short text, long text, a choice from a list, or a button.",
    "syntax": "<select><option> · <textarea> · <button> · <fieldset><legend>",
    "examples": [
      [
        "A dropdown list",
        "<label for=\"car\">Choose a car:</label>\n<select id=\"car\" name=\"car\">\n<option value=\"honda\">Honda</option>\n<option value=\"toyota\">Toyota</option>\n</select>"
      ],
      [
        "A text area inside a fieldset",
        "<fieldset>\n<legend>Message</legend>\n<textarea name=\"msg\" rows=\"4\" cols=\"30\"></textarea>\n</fieldset>"
      ],
      [
        "Autocomplete with datalist",
        "<input list=\"browsers\" name=\"browser\">\n<datalist id=\"browsers\">\n<option value=\"Chrome\">\n<option value=\"Firefox\">\n</datalist>"
      ]
    ],
    "explain": [
      "<select> makes a dropdown. <option> is one choice.",
      "<textarea> is for multi-line text.",
      "<fieldset> groups fields. <legend> names the group.",
      "<datalist> gives autocomplete suggestions for an input."
    ],
    "mistake": "Using a text input for long messages. Use <textarea> instead.",
    "practice": "Build a feedback form with a dropdown, a textarea, and a fieldset with a legend.",
    "check": [
      "Which element makes a dropdown?",
      "What is textarea for?",
      "What does the legend tag do?"
    ],
    "answer": "select; multi-line text input; names a fieldset group"
  },
  {
    "title": "HTML Input Types",
    "outcomes": [
      "Use text, password, email and number inputs.",
      "Use radio buttons and checkboxes.",
      "Use date, color, range and file inputs."
    ],
    "concept": "The <input> element can be displayed in several ways, depending on the type attribute. Common input types are text, password, submit, radio, checkbox, button, color, date, email, file and number.",
    "why": "The right input type gives users the right keyboard and free built-in checks. Email checks for @, and number shows arrows.",
    "syntax": "<input type=\"text\"> <input type=\"password\"> <input type=\"email\">",
    "examples": [
      [
        "Text-based inputs",
        "<label>Name: <input type=\"text\" name=\"name\"></label>\n<label>Password: <input type=\"password\" name=\"pw\"></label>\n<label>Email: <input type=\"email\" name=\"email\"></label>"
      ],
      [
        "Radio buttons and checkboxes",
        "<input type=\"radio\" id=\"m\" name=\"gender\" value=\"m\">\n<label for=\"m\">Male</label>\n<input type=\"checkbox\" id=\"news\" name=\"news\">\n<label for=\"news\">Newsletter</label>"
      ],
      [
        "Special input types",
        "<input type=\"date\" name=\"birthday\">\n<input type=\"color\" name=\"fav\">\n<input type=\"number\" name=\"age\" min=\"1\" max=\"120\">"
      ]
    ],
    "explain": [
      "type=\"text\" is for short text. type=\"password\" hides what you type.",
      "Radio buttons with the same name allow only one choice.",
      "Checkboxes allow many choices.",
      "Special types like date, email and number add built-in checks."
    ],
    "mistake": "Using type=\"text\" for everything. You lose free validation and the right mobile keyboards.",
    "practice": "Build a registration form using text, password, email, date, one radio group and one checkbox.",
    "check": [
      "Which input type hides the text?",
      "How do radio buttons allow only one choice?",
      "Name two special input types."
    ],
    "answer": "password; give them the same name; date and email"
  }
];
