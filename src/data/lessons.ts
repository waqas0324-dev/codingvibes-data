// Auto-split from main.tsx (refactor commit) — no logic changes.
export const lessonContent:Record<string,{objective:string;explanation:string;example:string;language:string;task:string;question:string;answers:string[];correct:number}> = {
 'html-1':{objective:'Understand how a browser turns an HTML document into a page.',explanation:'HTML is the structure layer of the web. A document is made from elements such as html, head, body, headings, paragraphs, links and sections. The browser reads this structure and builds the page you see. Start with meaningful structure before styling.',example:'<main>\n  <h1>My first page</h1>\n  <p>Welcome to Coding Vibes.</p>\n</main>',language:'HTML',task:'Create a page with one h1 and one paragraph. Change the text and run it.',question:'What is HTML mainly responsible for?',answers:['Page structure and meaning','Database storage','Server hosting','Image compression'],correct:0},
 'html-2':{objective:'Use elements and attributes correctly.',explanation:'An element describes a piece of content. Attributes add information to an element, such as href on a link, src on an image or class for styling hooks. Keep attributes meaningful and use quotes around their values.',example:'<a href="/about" title="About Coding Vibes">About</a>',language:'HTML',task:'Create a link with an href and a useful title attribute.',question:'Which attribute tells an anchor where to navigate?',answers:['src','href','alt','class'],correct:1},
 'html-3':{objective:'Add links and images with accessible alternatives.',explanation:'Links connect documents and sections. Images use src for the resource and alt for a text alternative. Good alt text describes the purpose of an image when it conveys information; decorative images can use an empty alt value.',example:'<a href="https://example.com">Visit the site</a>\n<img src="photo.jpg" alt="Student coding at a desk">',language:'HTML',task:'Add a link and an image with useful alt text.',question:'Why is alt text important?',answers:['It provides an accessible text alternative','It changes image colors','It loads JavaScript','It creates a database'],correct:0},
 'html-4':{objective:'Present repeated information and collect input.',explanation:'Lists represent groups of related items, tables represent tabular data, and forms collect user input. Choose the semantic structure that matches the meaning of the content rather than using elements only for visual appearance.',example:'<form>\n  <label for="email">Email</label>\n  <input id="email" type="email" required>\n  <button>Join</button>\n</form>',language:'HTML',task:'Build a small form with a labelled email field and submit button.',question:'Which element groups user input controls into a form?',answers:['form','table','img','footer'],correct:0},
 'html-5':{objective:'Create a semantic page layout.',explanation:'Semantic elements communicate the role of content. Header, nav, main, section, article, aside and footer help users, browsers and assistive technology understand your page. Use div when no more meaningful element fits.',example:'<header>Site header</header>\n<nav>Navigation</nav>\n<main>\n  <section><h2>Courses</h2></section>\n</main>\n<footer>Copyright</footer>',language:'HTML',task:'Create a page with header, nav, main and footer.',question:'Which element should contain the page main content?',answers:['main','head','meta','script'],correct:0},
 'html-6':{objective:'Build forms with useful browser validation.',explanation:'HTML can validate common input types before JavaScript is needed. Required fields, email, min, max, minlength and pattern can communicate basic rules directly to the browser. Validation messages should still be backed by server-side validation in real applications.',example:'<label for="age">Age</label>\n<input id="age" type="number" min="13" max="120" required>',language:'HTML',task:'Make a required email input and a number input limited from 13 to 120.',question:'Which attribute makes a control mandatory?',answers:['required','checked','selected','target'],correct:0},
 'html-7':{objective:'Build accessible structure from the start.',explanation:'Accessibility is not a final decoration. Use real buttons for actions, links for navigation, labels for inputs, headings in a logical order and alt text for meaningful images. Keyboard users should be able to reach and understand interactive controls.',example:'<button type="button" aria-label="Open menu">Menu</button>\n<label for="name">Name</label>\n<input id="name">',language:'HTML',task:'Replace a clickable div with a real button and label an input.',question:'Which is the correct element for an action?',answers:['button','span','div','p'],correct:0},
 'html-8':{objective:'Add useful metadata and search-friendly structure.',explanation:'The head contains metadata that helps browsers, search engines and social platforms understand a document. A meaningful title, description, viewport setting and semantic headings are basic foundations. SEO is about making useful content understandable, not stuffing keywords.',example:'<head>\n  <meta name="description" content="Learn HTML with Coding Vibes">\n  <title>HTML Course | Coding Vibes</title>\n</head>',language:'HTML',task:'Add a descriptive title and meta description to a page.',question:'Where does the document title belong?',answers:['title inside head','h1 inside footer','p inside body only','style inside main'],correct:0},
 'html-9':{objective:'Combine HTML foundations into a small profile project.',explanation:'A project is where isolated concepts become a useful structure. Plan the content first: header, navigation, profile section, skills list, projects and contact form. Use semantic elements and labels rather than styling your way out of structural problems.',example:'<main>\n  <article>\n    <h1>Alex — Frontend Developer</h1>\n    <p>I build accessible interfaces.</p>\n  </article>\n</main>',language:'HTML',task:'Build a one-page profile with a heading, bio, skills and contact form.',question:'What should you do before adding lots of CSS?',answers:['Build meaningful structure','Remove headings','Use div for everything','Skip accessibility'],correct:0},
 'html-10':{objective:'Review the HTML foundation and prepare for CSS.',explanation:'You now have the core HTML workflow: structure content, choose semantic elements, add accessible attributes, validate forms and provide useful metadata. CSS will add presentation while HTML remains responsible for meaning and structure.',example:'<main class="course-summary">\n  <h1>HTML complete</h1>\n  <p>Next: make it beautiful with CSS.</p>\n</main>',language:'HTML',task:'Review your profile project and improve its semantic structure before starting CSS.',question:'What is the next layer after HTML in our learning journey?',answers:['CSS','Database','Deployment','Authentication'],correct:0}
};
export const curriculum:Record<string,string[]> = {
 html:['How the web is structured','Elements & attributes','Links, images & media','Lists, tables & forms','Semantic page layout','Forms & validation','Accessibility foundations','Metadata & SEO','Project: profile page','Project review & next steps'],
 css:['CSS syntax & selectors','Colors, units & typography','The box model','Display & positioning','Flexbox layouts','CSS Grid','Responsive design','Transitions & transforms','Animations','Forms & UI states','Component styling','CSS project'],
 javascript:['JavaScript fundamentals','Variables & data types','Operators & conditionals','Loops & iteration','Functions','Arrays & objects','DOM selection','Events & interactions','Forms & validation','Fetch & APIs','Async JavaScript','Modules','Error handling','JavaScript project'],
 react:['React mental model','Vite project setup','Components & JSX','Props','State','Events','Conditional rendering','Lists & keys','Forms','Effects','Fetching APIs','Custom hooks','Routing','Reusable UI','Performance basics','React project'],
 node:['Node.js fundamentals','npm & packages','Modules','HTTP server','Express setup','Routes','Middleware','REST APIs','Validation','Environment variables','Error handling','Authentication basics','Database connection','Testing APIs','Node project'],
 fullstack:['Computer & web basics','HTML foundations','CSS foundations','JavaScript foundations','Git & GitHub','React','Component architecture','Node.js','Express APIs','Database design','SQL & queries','Authentication','Authorization','API integration','Forms & validation','Security basics','Testing','Deployment','Environment configuration','Performance','Accessibility','SEO','Project architecture','Portfolio project','Capstone planning','Capstone build','Capstone deployment','Final review']
};
export function generatedLessonData(pathId:string,title:string,idx:number){
 const html:any={
  3:{objective:'Learn how links connect pages and how images and media become part of a meaningful document.',explanation:'Links use the anchor element to connect users to another page or section. Images use src for the resource and alt for an accessible text alternative. Media should be placed where it supports the meaning of the page.',example:'<a href="/about">About Coding Vibes</a>\\n<img src="student.jpg" alt="Student coding at a desk">',language:'HTML',task:'Create one link and one image. Change the href and write meaningful alt text.',question:'Which attribute tells a link where to go?',answers:['href','src','alt','class'],correct:0},
  4:{objective:'Use lists, tables and forms for the right kind of information.',explanation:'Unordered and ordered lists group related items. Tables represent rows and columns of data. Forms collect information from users. Choose the element that matches the meaning instead of using a table or div only for layout.',example:'<ul>\\n  <li>HTML</li>\\n  <li>CSS</li>\\n</ul>\\n<table><tr><th>Course</th></tr><tr><td>HTML</td></tr></table>',language:'HTML',task:'Make a three-item list and a small two-column table. Then add a labelled email input.',question:'Which element is designed for tabular data?',answers:['table','form','ul','img'],correct:0},
  5:{objective:'Build a page with semantic sections that communicate meaning.',explanation:'Semantic HTML makes the role of content clear to browsers, assistive technology and other developers. Use header, nav, main, section, article, aside and footer where they describe the content accurately.',example:'<header>Site header</header>\\n<nav>Navigation</nav>\\n<main><section><h2>Courses</h2></section></main>\\n<footer>Copyright</footer>',language:'HTML',task:'Replace generic div containers with meaningful semantic elements.',question:'Which element should contain the primary content of the page?',answers:['main','head','meta','script'],correct:0},
  6:{objective:'Create forms that give users clear input fields and useful browser validation.',explanation:'Labels explain controls and connect them to inputs. Input types such as email and number provide built-in browser behavior, while required, min, max and minlength express simple validation rules.',example:'<form>\\n  <label for="email">Email</label>\\n  <input id="email" type="email" required>\\n  <button type="submit">Join</button>\\n</form>',language:'HTML',task:'Build a required email field with a visible label and submit button.',question:'Which attribute makes an input mandatory?',answers:['required','target','class','alt'],correct:0},
  7:{objective:'Make HTML usable with keyboards, screen readers and assistive technology.',explanation:'Accessibility starts with correct HTML. Use buttons for actions, links for navigation, labels for controls, logical headings and useful alt text. Do not make a div behave like a button when a real button already exists.',example:'<button type="button">Open menu</button>\\n<label for="name">Name</label>\\n<input id="name">',language:'HTML',task:'Replace a clickable div with a real button and connect a label to an input.',question:'Which element is correct for an action such as opening a menu?',answers:['button','div','span','p'],correct:0},
  8:{objective:'Give browsers and search engines useful document metadata.',explanation:'The head contains metadata such as the title, description and viewport settings. Semantic headings and meaningful content also help search engines understand the page. Good SEO starts with useful, well-structured content.',example:'<head>\\n  <meta name="description" content="Learn HTML with Coding Vibes">\\n  <title>HTML Course | Coding Vibes</title>\\n</head>',language:'HTML',task:'Add a useful title and meta description to your page.',question:'Where should the document title be placed?',answers:['Inside head','Inside footer','Inside a table','Inside a button'],correct:0},
  9:{objective:'Combine HTML foundations into a complete profile page.',explanation:'A project turns individual elements into a useful document. Plan the structure first, then add headings, profile information, a skills list, project links and a contact form using semantic HTML.',example:'<main>\\n  <article>\\n    <h1>Alex — Frontend Developer</h1>\\n    <p>I build accessible interfaces.</p>\\n    <ul><li>HTML</li><li>CSS</li></ul>\\n  </article>\\n</main>',language:'HTML',task:'Build a one-page profile with a heading, bio, skills and contact section.',question:'What should you build before spending time on visual styling?',answers:['Meaningful HTML structure','Only animations','A database','A deployment pipeline'],correct:0},
  10:{objective:'Review HTML structure, semantics, accessibility and forms before moving to CSS.',explanation:'HTML is the meaning and structure layer. Before moving on, check that your headings are logical, links work, images have appropriate alt text, forms have labels and semantic elements describe the page correctly.',example:'<main>\\n  <h1>HTML Complete</h1>\\n  <p>Next: style this structure with CSS.</p>\\n</main>',language:'HTML',task:'Review your profile project and fix one structural or accessibility issue.',question:'Which technology is the next learning layer after HTML?',answers:['CSS','Database','Deployment','Authentication'],correct:0}
 };
 const map:any={
  css:{example:'<style>\\n  .card {\\n    display: grid;\\n    gap: 1rem;\\n    padding: 1.5rem;\\n  }\\n</style>',language:'CSS',task:'Create a responsive card and change its spacing, color and layout.',explanation:'CSS controls presentation. Select an element, choose a property and give it a value. Start with readable structure, then use Flexbox, Grid and responsive rules to create polished interfaces.'},
  javascript:{example:'const button = document.querySelector("button");\\nbutton?.addEventListener("click", () => {\\n  console.log("Hello Coding Vibes");\\n});',language:'JavaScript',task:'Select a button and add a click handler that changes visible text.',explanation:'JavaScript adds behavior to web pages. Learn fundamentals first, then connect code to the DOM through selection and events. Test small changes and handle errors clearly.'},
  react:{example:'function Welcome({ name }: { name: string }) {\\n  return <h2>Hello, {name}</h2>;\\n}',language:'React',task:'Create a reusable component that accepts one prop and renders it.',explanation:'React helps you compose interfaces from reusable components. Start with JSX and props, then learn state, events, effects, data fetching and routing.'},
  node:{example:'import http from "node:http";\\n\\nconst server = http.createServer((req, res) => {\\n  res.end("Coding Vibes API");\\n});',language:'Node.js',task:'Create a small server response and identify the request and response objects.',explanation:'Node.js runs JavaScript outside the browser. Backend applications receive requests, validate input, perform work and return responses. Express adds routing and middleware, while databases persist application data.'},
  fullstack:{example:'// Browser → React → API → Node/Express → Database\\nconst request = { method: "GET", path: "/api/projects" };',language:'Full Stack',task:'Describe the data flow from a browser action to an API and back to the UI.',explanation:'Full-stack development connects frontend, backend and data layers. A user interacts with the UI, the frontend calls an API, the backend validates and processes the request, and the response returns to the interface.'}
 };
 const base=pathId==='html'?(html[idx]||{example:'<main><h1>HTML practice</h1></main>',language:'HTML',task:'Build a small semantic HTML example.',explanation:'Practice semantic HTML by creating a small page and testing it in the browser.',question:'What is HTML mainly responsible for?',answers:['Page structure and meaning','Database storage','Server hosting','Image compression'],correct:0}):(map[pathId]||{example:'// Practice today\\nconsole.log("Build something small and test it");',language:title,task:'Apply the concept in a small example and test your result.',explanation:'Learn the idea, inspect the example, change one thing, run it and explain why the result changed.',question:'What is the most useful next step after learning this concept?',answers:['Apply it in a small practice task','Skip the example','Only memorise the heading','Move on without testing'],correct:0});
 return {objective:base.objective||title+' — understand the concept and apply it in a small project.',explanation:base.explanation,example:base.example,language:base.language,task:base.task,question:base.question||'What is the most useful next step after learning this concept?',answers:base.answers||['Apply it in a small practice task','Skip the example','Only memorise the heading','Move on without testing'],correct:base.correct??0};
}
export function lessonLineNote(language:string,line:string,index:number){
 const t=line.trim();
 if(!t)return 'Blank spacing keeps the code readable.';
 if(language==='HTML'){
   if(/^<!doctype/i.test(t))return 'Declares the document as modern HTML so the browser uses the current parsing rules.';
   if(/^<html/i.test(t))return 'Opens the root HTML element. Attributes such as lang describe the document.';
   if(/^<head/i.test(t))return 'Opens the metadata area. Information here supports the document rather than appearing as page content.';
   if(/^<title/i.test(t))return 'Sets the text shown in the browser tab and used as the document title.';
   if(/^<body/i.test(t))return 'Opens the visible document area where page content is rendered.';
   if(/^<h1/i.test(t))return 'Creates the main heading. h1 communicates the primary topic of this page.';
   if(/^<p/i.test(t))return 'Creates a paragraph. The browser renders the text as normal flowing content.';
   if(/^<a\b/i.test(t))return 'Creates a link. The href attribute stores the destination the browser should navigate to.';
   if(/^<img\b/i.test(t))return 'Embeds an image. src points to the resource and alt provides an accessible text alternative.';
   if(/^<\/body/i.test(t))return 'Closes the visible document area.';
   if(/^<\/html/i.test(t))return 'Closes the root HTML element and completes the document structure.';
 }
 if(language==='CSS'){
   if(t.includes('{'))return 'Opens a CSS rule. The selector before the brace chooses which elements receive the declarations.';
   if(t.includes(':'))return 'This declaration sets one visual property. Change the value and run the example to see its effect.';
   if(t==='}')return 'Closes the rule so the next selector starts a separate style block.';
 }
 if(language==='JavaScript'){
   if(/^(const|let|var)\b/.test(t))return 'Creates a variable and stores a value that later code can read or update.';
   if(/function|=>/.test(t))return 'Defines behavior that can run when the function is called or the event occurs.';
   if(/querySelector|addEventListener/.test(t))return 'Connects JavaScript to the browser document so code can find an element or respond to an event.';
   if(/fetch\(/.test(t))return 'Starts an HTTP request. Real applications should handle loading, success and failure states.';
   if(/return\b/.test(t))return 'Sends a value back to the code that called this function.';
 }
 if(language==='React'){
   if(/function\s+\w+/.test(t))return 'Defines a reusable React component. Its returned JSX describes the UI for the current props and state.';
   if(/useState/.test(t))return 'Creates state and its setter. Calling the setter schedules a new render with the updated value.';
   if(/useEffect/.test(t))return 'Starts an effect used to synchronize the component with something outside normal rendering.';
   if(/return/.test(t))return 'Returns the JSX tree React should render for this component.';
 }
 if(language==='Node.js'||language==='Full Stack'){
   if(/express\(/.test(t))return 'Creates the server application that will receive HTTP requests.';
   if(/app\.(get|post|patch|delete)/.test(t))return 'Registers an API route for a specific HTTP method and URL path.';
   if(/res\.(json|send|end)/.test(t))return 'Builds the HTTP response sent back to the client.';
   if(/fetch\(/.test(t))return 'Connects one application layer to another through an HTTP request.';
 }
 return index===0?'Start by identifying what this line creates or controls.':'Connect this line to the previous one and check what changes in the final output.';
}

export function lessonTeachingMeta(pathId:string,title:string){
 const t=title.toLowerCase();
 const meta={outcomes:['Explain what the topic is and the problem it solves.','Read a small working example and identify the important parts.','Change one meaningful value, run it, and explain the result.'],syntax:'Start with the smallest valid pattern, then add only the pieces required by the current task.',commonMistake:'Copying the example without changing or testing it.',use:'Real websites, interfaces and projects use this concept as part of a larger feature.',takeaway:'If you can explain the purpose, read the example, change it, and verify the output, you understand the core idea.'};
 if(pathId==='html'){
   if(t.includes('link'))return {...meta,outcomes:['Create links with the correct destination and meaningful link text.','Use image and media elements with appropriate attributes when the topic requires them.','Test navigation and accessibility instead of judging the result only by appearance.'],syntax:'<a href="destination">Link text</a>  ·  <img src="image.jpg" alt="Description">',commonMistake:'Using a non-semantic element for navigation or leaving meaningful images without useful alt text.',use:'Navigation menus, article links, portfolios, documentation and media-rich pages.'};
   if(t.includes('list')||t.includes('table')||t.includes('form'))return {...meta,outcomes:['Choose lists for grouped items and tables for tabular data.','Build form controls with labels and meaningful input types.','Check the structure before adding visual styling.'],syntax:'Choose the element that matches the meaning: <ul>/<ol>, <table>, or <form> with labelled controls.',commonMistake:'Using tables for page layout or inputs without associated labels.',use:'Menus, product data, comparison tables, contact forms, signup and checkout flows.'};
   if(t.includes('semantic'))return {...meta,outcomes:['Recognize common semantic landmarks.','Choose elements based on meaning rather than visual appearance.','Improve structure for users, browsers and assistive technology.'],syntax:'<header> <nav> <main> <section> <article> <aside> <footer>',commonMistake:'Using <div> for everything when a meaningful semantic element exists.',use:'Accessible page layouts, blogs, dashboards, landing pages and documentation.'};
   if(t.includes('validation'))return {...meta,outcomes:['Connect labels to controls.','Use built-in input types and validation attributes.','Know when server-side validation is still required.'],syntax:'<input type="email" required> · <input type="number" min="13" max="120">',commonMistake:'Treating browser validation as a replacement for server-side validation.',use:'Signup, login, contact, checkout and data-entry forms.'};
   if(t.includes('access'))return {...meta,outcomes:['Use native controls for keyboard interaction.','Provide labels, headings and alternative text.','Check the page without relying only on a mouse.'],syntax:'Use real <button>, <a>, <label>, headings and meaningful alt text before adding ARIA.',commonMistake:'Making a <div> behave like a button instead of using a real button.',use:'Every public website and application that should be usable by more people.'};
   if(t.includes('metadata')||t.includes('seo'))return {...meta,outcomes:['Set a useful document title and description.','Understand what belongs in <head>.','Connect semantic structure with search-friendly content.'],syntax:'<head> → <meta charset> → <meta name="description"> → <title>…</title>',commonMistake:'Stuffing keywords while ignoring useful content and document structure.',use:'Search results, browser tabs, sharing previews and production websites.'};
 }
 if(pathId==='css'){
   if(t.includes('selector'))return {...meta,outcomes:['Target the intended elements with selectors.','Understand specificity at a practical level.','Keep selectors readable and maintainable.'],syntax:'selector { property: value; }',commonMistake:'Writing overly specific selectors that become difficult to override.',use:'Every styled web interface, from buttons to complete design systems.'};
   if(t.includes('flex'))return {...meta,outcomes:['Create a flex container.','Control main-axis and cross-axis alignment.','Build common one-dimensional layouts without hacks.'],syntax:'display:flex; · justify-content:… · align-items:… · gap:…',commonMistake:'Confusing the main axis with the cross axis.',use:'Navigation bars, cards, toolbars, form rows and responsive components.'};
   if(t.includes('grid'))return {...meta,outcomes:['Create rows and columns with Grid.','Control gaps and track sizes.','Use Grid for two-dimensional layouts.'],syntax:'display:grid; · grid-template-columns:… · gap:…',commonMistake:'Using Grid when a simple Flexbox row or column would be clearer.',use:'Dashboards, galleries, card layouts and page-level sections.'};
   if(t.includes('responsive'))return {...meta,outcomes:['Think mobile-first.','Use flexible sizes and media queries where needed.','Test layouts at more than one viewport width.'],syntax:'@media (min-width: …) { … } plus fluid widths, flex and grid.',commonMistake:'Designing only for one screen width.',use:'Phones, tablets, laptops and large displays.'};
 }
 if(pathId==='javascript'){
   if(t.includes('variable')||t.includes('data type'))return {...meta,outcomes:['Store values with let and const appropriately.','Recognize common JavaScript data types.','Predict the result of simple expressions.'],syntax:'const name = "Coding Vibes"; · let count = 0;',commonMistake:'Using const/let without understanding whether the binding needs reassignment.',use:'State, configuration, calculations and application data.'};
   if(t.includes('loop'))return {...meta,outcomes:['Choose a loop that matches the task.','Track the current value or item safely.','Avoid accidental infinite loops.'],syntax:'for (const item of items) { … }',commonMistake:'Changing the loop condition incorrectly and creating an infinite loop.',use:'Rendering lists, processing data and repeating a task.'};
   if(t.includes('function'))return {...meta,outcomes:['Define reusable behavior.','Pass values through parameters and return results.','Keep functions focused on one job.'],syntax:'function add(a, b) { return a + b; }',commonMistake:'Writing one giant function that mixes unrelated responsibilities.',use:'Event handlers, data transformations, validation and reusable logic.'};
   if(t.includes('dom')||t.includes('event'))return {...meta,outcomes:['Find elements in the document.','Respond to user events.','Update the interface from JavaScript.'],syntax:'document.querySelector("button")?.addEventListener("click", handler)',commonMistake:'Trying to manipulate an element before it exists or selecting the wrong element.',use:'Menus, forms, buttons, modals, tabs and interactive UI.'};
   if(t.includes('fetch')||t.includes('api'))return {...meta,outcomes:['Send an HTTP request with fetch.','Handle asynchronous results and errors.','Use returned data to update the UI.'],syntax:'const response = await fetch(url); const data = await response.json();',commonMistake:'Ignoring loading and error states or assuming every response is successful.',use:'Weather apps, dashboards, search, payments and data-driven interfaces.'};
 }
 if(pathId==='react'){
   if(t.includes('component')||t.includes('jsx'))return {...meta,outcomes:['Create a reusable component.','Return readable JSX.','Split UI into sensible pieces instead of one giant component.'],syntax:'function Card(){ return <article>…</article>; }',commonMistake:'Putting unrelated UI and state into one oversized component.',use:'Dashboards, product interfaces and reusable component systems.'};
   if(t.includes('prop'))return {...meta,outcomes:['Pass data from parent to child.','Destructure props clearly.','Keep component APIs small and predictable.'],syntax:'function Card({title}:{title:string}) { return <h2>{title}</h2>; }',commonMistake:'Mutating props instead of treating them as input.',use:'Reusable cards, lists, layouts and configurable UI components.'};
   if(t.includes('state'))return {...meta,outcomes:['Store changing UI data with state.','Update state through its setter.','Understand that state changes trigger a render.'],syntax:'const [count,setCount] = useState(0);',commonMistake:'Mutating state directly instead of using the state setter.',use:'Forms, counters, filters, toggles and interactive application state.'};
   if(t.includes('effect')||t.includes('fetch'))return {...meta,outcomes:['Identify when an effect is needed.','Keep dependencies accurate.','Clean up subscriptions or requests when appropriate.'],syntax:'useEffect(() => { /* synchronize with an external system */ }, [dependency]);',commonMistake:'Using effects for ordinary calculations that can happen during render.',use:'Subscriptions, browser APIs, data fetching and external synchronization.'};
 }
 if(pathId==='node'){
   if(t.includes('route')||t.includes('rest')||t.includes('api'))return {...meta,outcomes:['Define an HTTP endpoint.','Read request data and return a predictable response.','Use the correct HTTP method for the action.'],syntax:'app.get("/api/items", (req,res) => res.json(items));',commonMistake:'Returning inconsistent status codes or accepting invalid input.',use:'Web APIs, mobile backends, dashboards and full-stack applications.'};
   if(t.includes('middleware'))return {...meta,outcomes:['Understand middleware order.','Read or modify request/response data safely.','Pass control with next() when appropriate.'],syntax:'app.use((req,res,next) => { …; next(); });',commonMistake:'Forgetting next() in middleware that should continue the request.',use:'Logging, authentication, validation, CORS and request processing.'};
   if(t.includes('auth'))return {...meta,outcomes:['Understand authentication versus authorization.','Protect sensitive routes.','Avoid storing secrets directly in source code.'],syntax:'Authorization: Bearer <token> → verify → attach user → authorize',commonMistake:'Trusting client-provided identity or hard-coding production secrets.',use:'Accounts, dashboards, admin panels and protected APIs.'};
 }
 if(pathId==='fullstack'){
   if(t.includes('database')||t.includes('sql'))return {...meta,outcomes:['Model the data your feature actually needs.','Read and write data through a controlled server layer.','Validate input before persistence.'],syntax:'UI → API → server validation → database query → response → UI',commonMistake:'Letting the browser connect directly to a production database.',use:'Accounts, products, orders, dashboards and persistent application data.'};
   if(t.includes('deploy'))return {...meta,outcomes:['Prepare a production build.','Configure environment variables safely.','Verify the live application after deployment.'],syntax:'git push → CI/build → deploy → production URL → verify',commonMistake:'Deploying without checking build output, environment variables and routes.',use:'Publishing real websites and applications for users.'};
 }
 return meta;
}

export const htmlDeepLessons:Record<number,any>=[
  {
    "title": "How the web is structured",
    "outcomes": [
      "Explain HTML's job in the browser.",
      "Recognize the document skeleton: doctype, html, head and body.",
      "Build a valid first page and understand where visible content belongs."
    ],
    "concept": "HTML is the structure and meaning layer of a web page. The browser reads HTML markup, builds a document tree, and uses that structure to decide what each piece of content represents. CSS will later control presentation, while JavaScript can add behavior.",
    "why": "If the structure is wrong, styling and interaction become harder to reason about. Good HTML gives every later layer a clear foundation.",
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
      "The doctype tells the browser to use modern HTML parsing rules.",
      "The html element is the root of the document; lang=\"en\" describes the document language.",
      "The head contains metadata such as the title and character encoding.",
      "The body contains the content users actually see on the page."
    ],
    "mistake": "Putting visible page content inside head, or treating HTML as a styling language.",
    "practice": "Create an HTML file with a title, one main heading and two paragraphs. Open it directly in your browser and identify which lines belong to head and which belong to body.",
    "check": [
      "Where does visible page content normally live?",
      "What is the purpose of <!doctype html>?",
      "Which element is the root of an HTML document?"
    ],
    "answer": "body; it triggers modern HTML parsing; html"
  },
  {
    "title": "Elements & attributes",
    "outcomes": [
      "Distinguish a tag, element and attribute.",
      "Use opening/closing tags and void elements correctly.",
      "Add meaningful attributes such as id, class, href, src and alt.",
      "Nest elements in a valid parent-child structure."
    ],
    "concept": "An HTML element represents a piece of content and its meaning. Many elements have an opening tag, content, and a closing tag. Attributes add extra information to an element and appear in the opening tag.",
    "why": "Attributes are how HTML elements receive destinations, identifiers, alternatives, relationships and other behavior. Correct nesting also creates the document tree that CSS and assistive technology depend on.",
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
      "class can be shared by many elements; id should identify one unique element in a document.",
      "href tells an anchor where to navigate; src points to a resource such as an image.",
      "alt supplies a text alternative for a meaningful image.",
      "Some elements, such as img, are void elements and do not use a closing tag."
    ],
    "mistake": "Using attributes as decoration without understanding their meaning, or incorrectly nesting elements.",
    "practice": "Create a heading with a class, a link with href, and an image with src and useful alt text. Change each attribute and observe what changes.",
    "check": [
      "Which attribute gives an anchor its destination?",
      "Which attribute provides alternative text for an image?",
      "Can an img element have a closing </img> tag?"
    ],
    "answer": "href; alt; no, img is a void element"
  },
  {
    "title": "Links, images & media",
    "outcomes": [
      "Create absolute and relative links.",
      "Write meaningful link text and understand fragment links.",
      "Embed images with src, alt, width and height considerations.",
      "Use figure/figcaption and basic audio/video elements appropriately."
    ],
    "concept": "Links connect the web together. Images and media add information or experience to a document, but they should still be meaningful, accessible and appropriately sized.",
    "why": "A page is more useful when users can navigate it, understand its images, and access media without depending on visual context alone.",
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
      "Absolute URLs point to a complete external address; relative URLs point within your own site.",
      "A fragment link targets an element whose id matches the fragment.",
      "Meaningful images need useful alt text. Decorative images can use alt=\"\".",
      "width and height help reserve space; CSS can later make media responsive."
    ],
    "mistake": "Writing 'click here' for every link, leaving informative images without alt text, or using huge media files without considering performance.",
    "practice": "Build a small About Me section with an internal link, external link, image with caption, and one media element.",
    "check": [
      "What attribute stores a link destination?",
      "What does alt describe?",
      "What does href=\"#practice\" target?"
    ],
    "answer": "href; the image's text alternative; the element with id=\"practice\""
  },
  {
    "title": "Lists, tables & forms",
    "outcomes": [
      "Choose unordered, ordered and description lists correctly.",
      "Build a table with headings and grouped sections.",
      "Know when a table is appropriate and when it is not.",
      "Recognize a form as a structured way to collect user input."
    ],
    "concept": "Lists group related items, tables represent two-dimensional data, and forms collect user input. The important skill is choosing the structure because of meaning, not because it happens to look convenient.",
    "why": "Semantic structure makes content easier to scan, style and understand. Tables should represent data, never be used as a page-layout hack.",
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
      "Use ul when order does not matter, ol when sequence matters, and description lists for term/description pairs.",
      "A table needs rows and cells; th identifies headers and caption gives the table a useful title.",
      "A form groups controls that collect or submit information; detailed form controls come in the next lesson."
    ],
    "mistake": "Using tables to position page sections, or choosing a list only because CSS makes it easy to style.",
    "practice": "Create a course list, a two-column progress table, and a small email form. Add a caption and column headings to the table.",
    "check": [
      "Which list is best for step-by-step instructions?",
      "What is a table for?",
      "Which element starts a form?"
    ],
    "answer": "ol; tabular data; form"
  },
  {
    "title": "Semantic page layout",
    "outcomes": [
      "Use header, nav, main, section, article, aside and footer appropriately.",
      "Build a page outline before styling it.",
      "Understand why semantic structure helps accessibility and maintainability.",
      "Know when a generic div is actually appropriate."
    ],
    "concept": "Semantic HTML gives content a meaningful role. A header is not simply a box at the top; nav is for navigation, main is the page's primary content, article represents a self-contained composition, and footer contains closing information.",
    "why": "Meaningful structure helps browsers, assistive technology, search engines and other developers understand the page without relying on visual styling.",
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
      "main should represent the primary content of the page and normally should not be repeated as multiple main landmarks.",
      "section should usually have a meaningful heading; article is useful for self-contained content that could stand alone.",
      "div is still valid when you need a generic grouping with no more appropriate semantic meaning."
    ],
    "mistake": "Replacing every div with a semantic element without considering meaning, or using header/nav/footer purely because they sound professional.",
    "practice": "Take a simple page and write its outline as text first. Then replace generic containers with the semantic elements that actually describe each region.",
    "check": [
      "Which element contains primary page content?",
      "Which element is intended for navigation links?",
      "When is div appropriate?"
    ],
    "answer": "main; nav; when no more meaningful semantic element fits"
  },
  {
    "title": "Forms & validation",
    "outcomes": [
      "Build a complete form with form, label, input and button.",
      "Choose useful input types such as email, password, number, date and tel.",
      "Connect labels using for/id and understand the name attribute.",
      "Use required, min, max, minlength, maxlength and pattern for basic browser validation.",
      "Understand action/method and why server-side validation is still required."
    ],
    "concept": "Forms are the web's main mechanism for collecting user input. A useful form has a clear structure: the form container, labelled controls, appropriate input types, and a submit action. Browser validation can catch simple mistakes before data is sent.",
    "why": "Forms appear in login, signup, checkout, search, feedback and admin workflows. A form that looks good but has missing labels, wrong types or no validation is still a poor form.",
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
      "form groups the controls and can use action/method to define submission behavior.",
      "label connects visible instructions to a control. for must match the input id.",
      "name is the key used when form data is submitted; id is primarily for document association and targeting.",
      "required and type=email provide browser-side checks; min/max and length attributes add more constraints.",
      "Client-side validation improves feedback, but real applications must validate again on the server."
    ],
    "mistake": "Using placeholder text as the only label, forgetting name, using type=\"text\" for every field, or trusting browser validation as security.",
    "practice": "Build a registration form with name, email, password, age, course select, contact radio buttons, agreement checkbox and submit button. Make required fields validate in the browser.",
    "check": [
      "Why should label for match input id?",
      "Why is name important when submitting form data?",
      "Does client-side validation replace server-side validation?"
    ],
    "answer": "It associates the label with the control; it supplies the submitted field name; no"
  },
  {
    "title": "Accessibility foundations",
    "outcomes": [
      "Use semantic elements before reaching for ARIA.",
      "Make forms understandable with labels and grouping.",
      "Provide meaningful image alternatives and logical headings.",
      "Keep keyboard users able to reach and understand interactive controls.",
      "Recognize common accessibility mistakes in HTML."
    ],
    "concept": "Accessible HTML is mostly about using the correct native element and giving content meaningful text. A real button already knows how to receive focus and activate; a div pretending to be a button creates extra work and often misses keyboard behavior.",
    "why": "Accessibility is part of correct HTML, not a final visual polish. Semantic elements expose useful information to browsers and assistive technologies.",
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
      "Use button for an action and anchor for navigation.",
      "Headings should form a sensible outline; do not choose heading levels only because a size looks good.",
      "Alt text should communicate the purpose of a meaningful image. Decorative images can have an empty alt value.",
      "Use fieldset and legend when several controls form one logical group."
    ],
    "mistake": "Click handlers on divs, missing labels, vague alt text, skipped heading levels for visual size, and unnecessary ARIA replacing native semantics.",
    "practice": "Audit your profile project with the keyboard only. Tab through controls, check focus visibility, inspect labels and decide which images need alt text.",
    "check": [
      "Which element should trigger an action?",
      "What should a meaningful image's alt text communicate?",
      "What should you prefer before ARIA?"
    ],
    "answer": "button; its purpose/information; native semantic HTML"
  },
  {
    "title": "Metadata & SEO",
    "outcomes": [
      "Understand what belongs inside head.",
      "Write useful title and meta description content.",
      "Use viewport and language metadata appropriately.",
      "Understand how semantic structure contributes to discoverability.",
      "Recognize SEO as useful content and structure, not keyword stuffing."
    ],
    "concept": "The head contains information about the document rather than the page's main visible content. Title, description, character encoding and viewport settings help browsers, search engines and sharing systems understand and present the page.",
    "why": "Production pages need more than visible markup. A useful title improves browser tabs and search presentation; a clear description helps communicate what the page is about.",
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
      "charset declares how text is encoded; UTF-8 covers the characters used by modern web pages.",
      "viewport helps responsive pages render correctly on mobile devices.",
      "title should be specific to the page and readable; it is not a hidden keyword list.",
      "A description should summarize useful page content rather than repeat a pile of keywords."
    ],
    "mistake": "Leaving every page with the same title, writing spammy descriptions, or putting visible page content inside head.",
    "practice": "Add a unique title and description to your profile project. Make sure the title describes the actual page and the description reads naturally.",
    "check": [
      "Where does title belong?",
      "What does viewport metadata help with?",
      "What is the goal of a meta description?"
    ],
    "answer": "head; responsive/mobile rendering; clearly summarize the page"
  },
  {
    "title": "Project: profile page",
    "outcomes": [
      "Plan a page before writing markup.",
      "Combine headings, links, images, lists and forms semantically.",
      "Use accessibility and metadata practices together.",
      "Produce a complete HTML-only profile ready for CSS styling."
    ],
    "concept": "This project combines the previous lessons into one realistic page. The goal is not to make it beautiful yet. The goal is to produce clean, meaningful HTML that CSS can style later without fixing structural problems.",
    "why": "Projects turn isolated syntax into a workflow. You learn to decide what the content means, which element represents it, and how different parts connect.",
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
      "Run the page, inspect it, test links, test the form and check the document with browser DevTools."
    ],
    "mistake": "Starting with visual divs and class names, then trying to retrofit semantic structure after the design is finished.",
    "practice": "Build the profile from scratch. Do not copy the complete example. Use the checklist to decide the elements and write your own content.",
    "check": [
      "What should you plan before styling?",
      "Which section contains primary content?",
      "What must every important form control have?"
    ],
    "answer": "content and semantic structure; main; an associated label"
  },
  {
    "title": "Project review & next steps",
    "outcomes": [
      "Audit HTML structure, semantics, links, media, forms and metadata.",
      "Use browser DevTools to inspect the DOM.",
      "Find and correct common markup mistakes.",
      "Explain what HTML is responsible for before moving into CSS."
    ],
    "concept": "Finishing HTML means being able to read a page as a document, not just recognizing tags. You should be able to explain why each major element exists, test it in the browser, and fix structural or accessibility issues.",
    "why": "A strong review prevents gaps from following you into CSS and JavaScript. The next layer should enhance a sound HTML foundation rather than hide structural problems.",
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
      "Inspect the DOM tree to see whether your nesting matches your intention.",
      "Test links and forms rather than assuming they work from appearance.",
      "Use browser validation and developer tools to find structural issues.",
      "Then move to CSS: presentation should build on meaning, not replace it."
    ],
    "mistake": "Calling HTML complete because the page looks okay. Visual correctness alone does not prove semantic or accessible correctness.",
    "practice": "Audit your profile page against a 10-point checklist: document structure, headings, links, images, lists, tables/forms where relevant, labels, keyboard use, metadata, and clean nesting.",
    "check": [
      "What should CSS change?",
      "What should remain HTML's responsibility?",
      "What is the final test before moving on?"
    ],
    "answer": "presentation/layout; content structure and meaning; inspect, test and fix the HTML"
  }
];
export function buildPreviewDoc(language:string,code:string){
 const lang=(language||'').toLowerCase();
 if(lang.includes('html')){const safe=code.replace(/<script[\s\S]*?<\/script>/gi,'');return safe}
 if(lang.includes('css')){return '<style>'+code.replace(/<style>|<\/style>/gi,'')+'</style><main style="font-family:system-ui;padding:32px"><h1>CSS Playground</h1><p>CSS edit karo aur Run dabao — result foran dekho.</p></main>'}
 if(lang.includes('javascript')||lang==='js'){return '<main style="font-family:system-ui;padding:32px"><h1 id="title">JavaScript Playground</h1><button id="btn">Run interaction</button><pre id="log"></pre></main><script>'+code.replace(/<script>|<\/script>/gi,'')+'<\/script>'}
 return '<main style="font-family:system-ui;padding:32px"><h2>Practice preview</h2><p>Ye playground '+language+' examples ke liye tayyar hai.</p></main>';
}
export function normalizeLessonData(raw:any,p:any,idx:number,lesson:any){
 const d=raw||{};
 const ex=d.example||'<main>\n  <h1>Practice</h1>\n  <p>Apna example yahan likho.</p>\n</main>';
 const lang=d.language||p.title;
 return {...d,
  title:d.title||lesson[1],
  outcomes:d.outcomes||[d.objective||'Concept ko samjho','Example ko parho aur chalao','Khud practice karke explain karo'],
  concept:d.concept||d.explanation||'',
  why:d.why||'Ye concept har real project me kaam aayega — is liye isay achhi tarah samjho.',
  syntax:d.syntax||'',
  explain:d.explain||(d.explanation?[d.explanation]:[]),
  examples:d.examples||[['Worked example',ex]],
  language:lang,
  mistake:d.mistake||'Example ko bina samjhe copy-paste mat karo — pehle har line samjho, phir khud likho.',
  practice:d.practice||d.task||'',
  check:d.check||(d.question?[d.question]:[])};
}

export function lessonLineNoteUrdu(language:string,line:string,index:number){
 const t=line.trim();
 if(!t)return 'Khali line — code ko parhne me aasani ke liye istemal hoti hai.';
 const lang=(language||'').toLowerCase();
 if(lang.includes('html')){
  if(/^<!doctype/i.test(t))return 'Ye line browser ko batati hai ke ye modern HTML document hai, taake browser latest rules se page parhe.';
  if(/^<html/i.test(t))return 'Poori document ka root element — lang attribute batata hai page kis zuban me hai.';
  if(/^<head/i.test(t))return 'Metadata wala hissa — ye page par nazar nahi aata, lekin browser aur search engine ke liye zaroori hai.';
  if(/^<title/i.test(t))return 'Browser tab me nazar aane wala naam — yehi document ka title hota hai.';
  if(/^<body/i.test(t))return 'Wo hissa jo page par nazar aata hai — sara visible content yahin likha jata hai.';
  if(/^<h[1-6]/i.test(t))return 'Heading tag — content ko headings me organize karta hai. H1 sab se bara hota hai.';
  if(/^<p[\s>]/i.test(t))return 'Paragraph — normal text isi tag me likha jata hai.';
  if(/^<a[\s>]/i.test(t))return 'Link banata hai — href me wo address hota hai jahan click karne par jana hai.';
  if(/^<img/i.test(t))return 'Image lagata hai — src me image ka path aur alt me image ki description hoti hai.';
  if(/^<ul/i.test(t))return 'Unordered list — bullets (•) wali list banata hai.';
  if(/^<ol/i.test(t))return 'Ordered list — numbering (1, 2, 3) wali list banata hai.';
  if(/^<li/i.test(t))return 'List ka ek item — har item li tag me likha jata hai.';
  if(/^<table/i.test(t))return 'Table — rows aur columns me data dikhane ke liye.';
  if(/^<tr/i.test(t))return 'Table ki ek row.';
  if(/^<t[hd]/i.test(t))return 'Table ka ek cell — th heading cell, td normal data cell hota hai.';
  if(/^<form/i.test(t))return 'Form — user se input (naam, email waghera) lene ke liye.';
  if(/^<label/i.test(t))return 'Input ki pehchan — batata hai is field me kya likhna hai.';
  if(/^<input/i.test(t))return 'User se data lene wala field — type se pata chalta hai ye text, email ya password field hai.';
  if(/^<button/i.test(t))return 'Clickable button — form submit karne ya koi action karne ke liye.';
  if(/^<div/i.test(t))return 'Generic container — content ko group karne ke liye istemal hota hai.';
  if(/^<span/i.test(t))return 'Inline container — text ke chhote hisse ko alag style dene ke liye.';
  if(/^<header/i.test(t))return 'Page ya section ka oopar wala hissa.';
  if(/^<nav/i.test(t))return 'Navigation links ka section.';
  if(/^<main/i.test(t))return 'Page ka asal content — har page me sirf ek main hota hai.';
  if(/^<section/i.test(t))return 'Content ka ek logical hissa ya block.';
  if(/^<article/i.test(t))return 'Independent content — jo akela parhne par bhi poora samajh aaye.';
  if(/^<footer/i.test(t))return 'Page ya section ka neeche wala hissa.';
  if(/^<meta/i.test(t))return 'Metadata — page ke baare me info jo nazar nahi aati.';
  if(/^<\//.test(t))return 'Ye tag band ho raha hai — har khula tag band karna zaroori hai.';
  if(/^</.test(t))return 'HTML tag — ye page par ek element banata hai.';
 }
 if(lang.includes('css')){
  if(t.includes('{'))return 'CSS rule shuru — brace se pehle wala selector batata hai ye style kin elements par lagegi.';
  if(t==='}')return 'Rule khatam — is ke baad wala selector nayi style shuru karega.';
  if(t.includes(':'))return 'Ye declaration ek visual property set kar rahi hai — value badlo aur Run dabao, farq khud dekho.';
 }
 if(lang.includes('javascript')||lang==='js'){
  if(/^(const|let|var)\b/.test(t))return 'Variable banaya gaya — is me value store hogi jo baad me parhi ya update ki ja sakti hai.';
  if(/function|=>/.test(t))return 'Function define hui — ye code tab chalega jab is function ko call kiya jayega.';
  if(/querySelector|getElementById/.test(t))return 'HTML document se element dhoonda gaya — taake JavaScript usay parh ya badal sake.';
  if(/addEventListener/.test(t))return 'Event listener lagaya — user ke action (jaise click) par ye code chalega.';
  if(/console\.log/.test(t))return 'Console me message print — code ko debug karne ke liye istemal hota hai.';
  if(/^(if|else)/.test(t))return 'Condition check — agar shart true hui to ye block chalega, warna else wala.';
  if(/^(for|while)/.test(t))return 'Loop — ye code ek se zyada baar chalega.';
  if(/^return\b/.test(t))return 'Function se value wapas bhej raha hai.';
  if(/fetch\(/.test(t))return 'Server se data mangwaya ja raha hai (HTTP request).';
 }
 return 'Is line ko ghor se parho — ye example ka ek zaroori hissa hai. Isay badal kar Run dabao aur result dekho.';
}
