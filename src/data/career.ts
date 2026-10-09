// Auto-split from main.tsx (refactor commit) — no logic changes.
export const interviewBank:Record<string,{q:string;a:string}[]>={
 html:[
  {q:'What is HTML and what does it do?',a:'HTML (HyperText Markup Language) builds the structure of web pages. It gives meaning to content — headings, paragraphs, links, images, forms. Styling is CSS\'s job, interactivity is JavaScript\'s job.'},
  {q:'What is semantic HTML? Give an example.',a:'Semantic tags describe their meaning — like header, nav, main, article, footer. They help screen readers and search engines understand the page better. A div is generic, not semantic.'},
  {q:'Why do we write <!DOCTYPE html>?',a:'It tells the browser that the document is modern HTML5, so the browser renders the page in standards mode instead of the old quirks mode.'},
  {q:'What is the difference between block and inline elements?',a:'Block elements (div, p, h1) take the full line and start on a new line. Inline elements (span, a, strong) take only as much space as they need.'},
  {q:'What options does HTML offer for form validation?',a:'The required attribute, type="email"/"number", minlength/maxlength, min/max, and pattern (regex). This is browser-level validation — you must still re-check on the server.'},
  {q:'Why is the alt attribute important?',a:'Alt is the text alternative for an image — screen readers read it aloud, and it shows if the image fails to load. It also helps with SEO.'},
  {q:'What goes inside the <head>?',a:'Metadata — the title, meta tags (description, viewport, charset), and links to CSS/JS. This content is not visible on the page.'},
  {q:'Absolute vs relative URL?',a:'An absolute URL is the full address (https://...), a relative URL is relative to the current page (/about). Relative is better for internal links.'},
  {q:'Name 3 essential things for accessibility.',a:'1) A label with every input, 2) meaningful alt text on images, 3) logical heading order (h1 then h2). Everything should be reachable by keyboard.'},
  {q:'What is the most common mistake in HTML?',a:'Not closing tags, using div everywhere (div-soup), forgetting alt text, and misusing tables or br for presentation.'}
 ],
 css:[
  {q:'What is CSS specificity?',a:'When two rules clash, the browser decides by specificity: inline style > id > class > element. !important beats them all — avoid it.'},
  {q:'Explain the box model.',a:'Every element is a box: content → padding → border → margin. By default, width/height covers only the content; box-sizing: border-box includes padding and border.'},
  {q:'Flexbox vs Grid?',a:'Flexbox lays out in one direction (row or column); Grid works in two dimensions (rows + columns). Navs and flexible rows → Flexbox; page layouts → Grid.'},
  {q:'How does position: absolute relate to relative?',a:'An absolute element positions itself relative to its nearest positioned ancestor (relative/absolute/fixed). With no positioned parent, it positions against the document.'},
  {q:'How do you make a design responsive?',a:'Fluid units (%, rem), Flexbox/Grid, media queries (@media max-width), responsive images (max-width:100%), and a mobile-first approach.'},
  {q:'Why use CSS variables?',a:'With variables like --main-color, you control the whole site theme from one place. Dark mode and re-theming become easy.'},
  {q:'When does z-index work?',a:'Only on positioned elements (relative/absolute/fixed/sticky). A bigger z-index renders on top — watch out for stacking contexts.'},
  {q:'What are pseudo-classes? Give an example.',a:'Selectors like :hover, :focus, :nth-child() that style an element based on its state — without adding extra classes.'},
  {q:'How do you keep CSS performance in mind?',a:'Animate transform/opacity in animations (GPU), avoid @import, remove unused CSS, and avoid animating width/height.'},
  {q:'em vs rem?',a:'em is relative to the parent font-size, rem is relative to the root (html). rem is predictable — that is why modern CSS uses it more.'}
 ],
 javascript:[
  {q:'What is the difference between var, let, and const?',a:'var is function-scoped and hoisted (the old way). let is block-scoped and can be reassigned. const is block-scoped and cannot be reassigned. Use let/const today.'},
  {q:'What is a closure?',a:'When a function remembers variables from its outer scope — even after the outer function has finished. Used for counters and private data.'},
  {q:'== vs ===?',a:'== converts types before comparing ("5" == 5 is true); === also checks the type ("5" === 5 is false). Always use ===.'},
  {q:'What is event delegation?',a:'Putting one listener on a parent to handle events from its children (via bubbling). Great for dynamic lists — no separate listener per item.'},
  {q:'Promises and async/await?',a:'A promise is a pledge of a future value (pending → fulfilled/rejected). async/await makes it read like synchronous code. Handle errors with try/catch.'},
  {q:'What is hoisting?',a:'Declarations (var, functions) are lifted to the top of their scope — that is why you can use var before it appears. let/const live in the temporal dead zone.'},
  {q:'What is the "this" keyword?',a:'this refers to the object in whose context the function is running. In arrow functions, this comes from the outer scope.'},
  {q:'map vs forEach?',a:'forEach only iterates (returns nothing); map returns a new transformed array. Use map to transform data.'},
  {q:'What is debounce?',a:'Controlling rapidly repeating events (typing, resize) — run the function only after the event stops (e.g. 300ms). Essential for search inputs.'},
  {q:'What are the "falsy" values in JavaScript?',a:'false, 0, "", null, undefined, NaN. In if(value), all of these are false.'}
 ],
 react:[
  {q:'What is React and why is it used?',a:'A JavaScript library for building UIs — component-based. On state change, only the needed part re-renders (virtual DOM diffing), so it is fast and maintainable.'},
  {q:'State vs props?',a:'Props are read-only inputs passed from the parent. State is the component\'s own changeable data — update it with the setter and the component re-renders.'},
  {q:'When does useEffect run?',a:'After render — for side effects (API calls, subscriptions, timers). Control it with the dependency array: [] runs only on mount, [x] runs when x changes.'},
  {q:'Why is the key prop important?',a:'In lists, React uses key to track items — without it, re-ordering or adding items causes wrong updates or performance issues.'},
  {q:'Controlled vs uncontrolled components?',a:'In a controlled input, the value lives in React state (value + onChange). In an uncontrolled input, the DOM handles it (read via ref). Controlled is better for forms.'},
  {q:'What is lifting state up?',a:'When two child components need shared data, keep the state in their common parent and pass it down via props.'},
  {q:'useMemo and useCallback?',a:'useMemo caches the result of an expensive calculation, useCallback caches a function reference. Both stop unnecessary re-renders.'},
  {q:'How do you do conditional rendering?',a:'{condition && <Comp/>}, a ternary {x ? <A/> : <B/>}, or an early return. You cannot write an if statement directly in JSX.'},
  {q:'What is the best way to handle forms in React?',a:'Controlled inputs + one state object + validation on submit. For big forms, use the React Hook Form library.'},
  {q:'What are custom hooks?',a:'Functions starting with use- that use hooks — for sharing reusable logic (like useFetch) across components.'}
 ],
 node:[
  {q:'What is Node.js?',a:'A runtime built on Chrome\'s V8 engine that runs JavaScript outside the browser (on the server). Event-driven, non-blocking I/O — fast for APIs.'},
  {q:'What is Express?',a:'A minimalist framework for Node — it makes routing (app.get/post), middleware, and request/response handling easy. The standard for REST APIs.'},
  {q:'What is middleware? Give an example.',a:'Functions that run between the request and the response. Examples: auth check, logging, JSON parsing (express.json()). Call next() to move to the next handler.'},
  {q:'What are the principles of a REST API?',a:'Resources live at URLs (GET /users), use the right HTTP methods (GET to read, POST to create, PUT/PATCH to update, DELETE to remove), stateless requests, JSON responses, correct status codes.'},
  {q:'What do status codes 200, 201, 400, 404, 500 mean?',a:'200 OK, 201 Created (something new was made), 400 Bad Request (client\'s mistake), 404 Not Found, 500 Server Error.'},
  {q:'Why use environment variables?',a:'You never hardcode secrets (API keys, DB passwords) — keep them in a .env file so they do not leak onto GitHub.'},
  {q:'npm vs npx?',a:'npm installs packages; npx runs a package without installing it (like npx create-react-app).'},
  {q:'Blocking vs non-blocking?',a:'Node is single-threaded — blocking code stops everything. With non-blocking code (async/promises), Node moves on to the next task instead of waiting.'},
  {q:'What is CORS?',a:'A browser security rule that stops a site on one domain from hitting an API on another domain. The server allows it with CORS headers/middleware.'},
  {q:'Why is validation important in an API?',a:'Never trust data coming from the client — bad data can corrupt the database or enable a hack. Validation is mandatory.'}
 ],
 fullstack:[
  {q:'Explain the architecture of a full stack project.',a:'Frontend (React) → HTTP/API → Backend (Node/Express) → Database. The frontend shows the UI; the backend handles logic and data.'},
  {q:'How does JWT authentication work?',a:'On login, the server gives a signed token. The client sends the token with every request (Authorization header). The server verifies it and grants access.'},
  {q:'SQL vs NoSQL?',a:'SQL (PostgreSQL/MySQL): structured tables, relations, complex queries. NoSQL (MongoDB): flexible documents, fast iteration. Decide based on your data\'s shape.'},
  {q:'What is the deployment process?',a:'Code → GitHub → hosting (Vercel/Render) → set env variables → connect database → attach domain. CI/CD auto-deploys on every push.'},
  {q:'Why deploy frontend and backend separately?',a:'Each scales and updates independently — frontend on Vercel, backend on Render/Railway. The API URL goes in an env variable.'},
  {q:'Why paginate in an API?',a:'Sending thousands of records at once is slow — send data in small pages with page/limit. Better performance and better UX.'},
  {q:'What is caching?',a:'Temporarily storing frequently needed data (in memory/Redis) so the database is not hit every time — responses get fast.'},
  {q:'WebSockets vs HTTP?',a:'HTTP is request-response (one question, one answer). WebSocket is a persistent connection — for real-time needs (chat, live updates).'},
  {q:'Monolith vs microservices?',a:'A monolith is one single app (best to start with). Microservices are small independent services (for scale). Beginners should start with a monolith.'},
  {q:'What are the most common mistakes in production?',a:'Hardcoding secrets in code, skipping validation, no proper logging, and deploying without testing.'}
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
   {label:'Spacing',code:'.box {\n  margin: 16px;   /* outside */\n  padding: 12px;  /* inside */\n  border: 1px solid #ccc;\n}'},
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
   {label:'useEffect',code:'useEffect(() => {\n  // runs on mount\n  return () => { /* cleanup */ };\n}, []);'}
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
