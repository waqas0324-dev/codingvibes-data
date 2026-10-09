// Auto-split from main.tsx (refactor commit) — no logic changes.
export const quizBank:Record<string,{q:string;options:string[];correct:number;why:string}[]>={
 html:[
  {q:'What is the main job of HTML?',options:['Creating page structure and meaning','Running a database','Hosting a server','Compressing images'],correct:0,why:'HTML is the structure layer of the web — it gives meaning to content. Design is CSS\'s job.'},
  {q:'Which tag creates a link?',options:['<link>','<a>','<href>','<url>'],correct:1,why:'The <a> (anchor) tag creates a link, and the href attribute holds the destination.'},
  {q:'Why is the alt attribute important for images?',options:['To change image color','To give a text alternative for screen readers','To make images bigger','To make pages faster'],correct:1,why:'Alt text is for users who cannot see the image — it is required for accessibility.'},
  {q:'Which input type is best for collecting an email?',options:['type="text"','type="email"','type="password"','type="number"'],correct:1,why:'type="email" gives free browser validation — it blocks invalid emails automatically.'},
  {q:'Which tag should hold the main content of a page?',options:['<div>','<head>','<main>','<span>'],correct:2,why:'<main> is for the primary content of a page — there should be only one per page.'},
  {q:'Why should you always close your tags?',options:['The browser will crash','The structure can break and the layout can look wrong','It makes no difference','It is only for style'],correct:1,why:'Without closing tags the browser has to guess — the layout often breaks.'}
 ],
 css:[
  {q:'What does "color: red;" do in CSS?',options:['Makes the background red','Makes the text color red','Hides the element','Makes the element bigger'],correct:1,why:'The color property sets text color — background-color is for backgrounds.'},
  {q:'How do you write a class selector?',options:['#card','.card','*card','@card'],correct:1,why:'A dot (.) selects a class, a hash (#) selects an id.'},
  {q:'In Flexbox, what centers items horizontally?',options:['display: block','justify-content: center','float: center','text-align: justify'],correct:1,why:'justify-content aligns items on the main axis — center puts them in the middle.'},
  {q:'What is the difference between padding and margin?',options:['No difference','Padding is inside space, margin is outside space','Margin is inside, padding is outside','Both are only for text'],correct:1,why:'Padding adds space inside the element, margin adds space outside it.'},
  {q:'What is used to make a design responsive?',options:['Media queries','Only fixed pixels','Table layout','Flash'],correct:0,why:'Media queries apply different styles based on screen size — the base of responsive design.'},
  {q:'What does this rule do: h1 { font-size: 32px; }?',options:['Makes all paragraphs 32px','Makes all h1 headings 32px','Makes only the first h1 32px','Does nothing'],correct:1,why:'The h1 selector targets every h1 element on the page.'}
 ],
 javascript:[
  {q:'What is the difference between const and let?',options:['No difference','const cannot be reassigned, let can','let is faster','const is only for numbers'],correct:1,why:'A const value stays fixed — this prevents bugs. Use let for values that change.'},
  {q:'What runs code when a button is clicked?',options:['addEventListener','click()','onpress','listen()'],correct:0,why:"addEventListener('click', ...) listens for clicks on the button and runs a function."},
  {q:'What does document.querySelector("button") do?',options:['Creates a new button','Finds the first button element','Deletes the button','Reloads the page'],correct:1,why:'querySelector returns the first element matching a CSS selector.'},
  {q:'When does a function run?',options:['As soon as you write it','When you call it','Always on page load','Never'],correct:1,why:'Defining a function only prepares it — it runs when called.'},
  {q:'What is console.log() for?',options:['Showing messages to users','Printing debug messages in the developer console','Setting the page title','Saving to a database'],correct:1,why:'console.log is for debugging — the easiest way to check values.'},
  {q:'In arr = [10,20,30], how do you access the third item?',options:['arr[3]','arr[2]','arr(3)','arr.third'],correct:1,why:'Indexing starts at 0 — the third item is at index 2.'}
 ],
 react:[
  {q:'What is a component in React?',options:['A CSS file','A reusable piece of UI (a function)','A database','A server'],correct:1,why:'A component is a reusable part of the UI — a function that returns JSX.'},
  {q:'What are props?',options:['Inputs given to a component','A styling library','A hook','An error'],correct:0,why:'Props are how a parent passes data to a child component.'},
  {q:'How do you update state?',options:['Assign the variable directly','With the useState setter function','By changing props','With CSS'],correct:1,why:'Always update state with the setter (like setCount) — so React re-renders.'},
  {q:'How do you write JavaScript inside JSX?',options:['{{ }}','{ }','[ ]','< >'],correct:1,why:'JavaScript expressions go inside curly braces { }.'},
  {q:'What is useEffect for?',options:['Styling','Side effects like data fetching','Routing','Testing'],correct:1,why:'useEffect is for work after rendering — API calls, timers, subscriptions.'},
  {q:'Why is the key prop important when rendering lists?',options:['For styling','It helps React identify items','It is not needed, just convention','For speed'],correct:1,why:'Keys tell React which item changed — without them, list updates can have bugs.'}
 ],
 node:[
  {q:'What is Node.js?',options:['A browser','A runtime that runs JavaScript outside the browser','A CSS framework','A database'],correct:1,why:'Node.js runs JavaScript on the server — this is how backends are built.'},
  {q:'What is Express used for?',options:['Mobile apps','Making routing and APIs easier in Node','Game development','Video editing'],correct:1,why:'Express is a Node framework — it makes routes, middleware and APIs easy to write.'},
  {q:'What does API mean?',options:['A design tool','A way for two programs to talk to each other','A file type','An error'],correct:1,why:'An API is a contract — the frontend uses it to request and send data.'},
  {q:'What is the difference between GET and POST?',options:['No difference','GET asks for data, POST sends data','POST is faster','GET is more secure'],correct:1,why:'GET is for reading, POST is for creating/sending — a basic REST rule.'},
  {q:'What is middleware?',options:['A database','A function that runs between request and response','A UI component','A test'],correct:1,why:'Middleware processes the request (auth check, logging) then passes it on.'},
  {q:'What is npm for?',options:['A code editor','Installing and managing JavaScript packages','A hosting service','A language'],correct:1,why:'npm installs libraries (like express) — the package manager of the Node ecosystem.'}
 ],
 fullstack:[
  {q:'Who is a full stack developer?',options:['Someone who only designs','Someone who builds both frontend and backend','Someone who only works with databases','Only a tester'],correct:1,why:'A full stack developer builds the whole system — from UI to server to database.'},
  {q:'What is the data journey from browser to database?',options:['Browser → CSS → HTML','Browser → API → Server → Database','Database → Browser directly','Server → Browser → API'],correct:1,why:'The user acts in the UI → frontend calls the API → server reads/writes the database.'},
  {q:'What connects frontend and backend?',options:['CSS','API','HTML tags','Fonts'],correct:1,why:'The API is the bridge — data travels as JSON.'},
  {q:'What does deployment mean?',options:['Writing code','Making a website live on the internet','Fixing bugs','Making a design'],correct:1,why:'To deploy means putting your site or app live on a server (like Vercel).'},
  {q:'How is data stored in a database?',options:['Only as text files','As organized records in tables or collections','In the browser','In emails'],correct:1,why:'Databases keep data as records in tables (SQL) or collections (MongoDB).'},
  {q:'Why is authentication important?',options:['To make the site faster','To give access only to the right users','For SEO','For design'],correct:1,why:'Auth (login/signup) makes sure sensitive data is only seen by authorized users.'}
 ]
};
