export const jsDeepLessons:Record<number,any>=[
  {
    "title": "JavaScript fundamentals",
    "outcomes": [
      "Explain in your own words what JavaScript is and what it does in a website.",
      "Add a <script> tag to an HTML file and run JavaScript code.",
      "Write a message with console.log() and see it in the browser console."
    ],
    "concept": "Think of a website as a toy house. HTML is the walls and doors, CSS is the paint and decoration, and JavaScript is the electricity. Without electricity, the fan will not spin and the light will not turn on. In the same way, JavaScript makes a website alive: click a button and something happens, a picture changes, a message appears. JavaScript is a programming language that runs inside the browser.",
    "why": "Without JavaScript, a website is like a picture — you can look at it, but you cannot touch it. JavaScript lets a website talk to the user, and that is what turns a simple page into a real web app.",
    "syntax": "<script> console.log(\"Hello!\"); </script>",
    "examples": [
      [
        "First JavaScript program",
        "<script>\n  console.log(\"Hello, Coding Vibes!\");\n</script>"
      ],
      [
        "Message on button click",
        "<button onclick=\"alert('You clicked the button!')\">Click Me</button>"
      ],
      [
        "Two lines of code, two messages",
        "<script>\n  console.log(\"First line\");\n  console.log(\"Second line\");\n</script>"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "JavaScript code is written inside the <script> tag, and this tag lives in the HTML file.",
      "console.log() means: write this message to the console. The console is a hidden notebook in the browser — press F12 to open it.",
      "alert() opens a small popup that shows a message to the user right away.",
      "Code runs from top to bottom, one line at a time — the first line runs first, the second line runs after it."
    ],
    "mistake": "Writing JavaScript without the script tag — the browser will treat it as normal text and nothing will run. Always write your code inside <script> ... </script>.",
    "practice": "Make an HTML file, add a <script> tag, and write your name with console.log(). Then open the file in the browser, press F12, and see your name in the console.",
    "check": [
      "What makes a website 'alive' (interactive)? (a) HTML (b) CSS (c) JavaScript",
      "Inside which tag is JavaScript code written? (a) <js> (b) <script> (c) <code>",
      "What will console.log('Hello') do? (a) write a big heading on the page (b) write 'Hello' in the console (c) do nothing"
    ],
    "answer": "c; b; b"
  },
  {
    "title": "Variables & data types",
    "outcomes": [
      "Create variables with let and const and understand the difference between them.",
      "Recognize the three basic data types: text (string), number, and yes/no (boolean).",
      "Store a value in a variable, change it, and see it in the console."
    ],
    "concept": "A variable is a box with a name on it. Put something inside the box — a name, an age, a price — and when you need it, say the name of the box and you get the thing back. A let box can be opened later and the thing inside can be changed; a const box, once closed, keeps the same thing forever. Data types mean the kind of thing: words, counting numbers, or yes/no.",
    "why": "Every program needs to remember information — the user's name, their age, the number of books. Without variables, a program cannot remember anything; it would forget everything.",
    "syntax": "let name = \"Ali\"; const age = 12; let student = true;",
    "examples": [
      [
        "First variables",
        "let name = \"Ali\";\nlet age = 12;\nconsole.log(name);\nconsole.log(age);"
      ],
      [
        "let can change, const cannot",
        "let city = \"Lahore\";\ncity = \"Karachi\";\nconsole.log(city);\nconst country = \"Pakistan\";\nconsole.log(country);"
      ],
      [
        "See the data types",
        "console.log(typeof \"Ali\");\nconsole.log(typeof 12);\nconsole.log(typeof true);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Words are always written in quotes — 'Ali' or \"Ali\". This kind is called a string.",
      "A number is written without quotes — 12, 3.5. Add quotes and it becomes text.",
      "true/false is called a boolean — it is the answer to a yes-or-no question.",
      "typeof tells you what kind of thing is inside the box."
    ],
    "mistake": "Giving a new value to a const variable — like const age = 12; then age = 13; — this gives an error. Use let for anything that will change.",
    "practice": "Make three variables about yourself: your name (string), your age (number), and whether you are a student (boolean). Show all three with console.log.",
    "check": [
      "Which variable can be changed later? (a) const (b) let (c) neither",
      "What does typeof \"5\" give? (a) number (b) string (c) boolean",
      "In let age = 12; what is the data type of 12? (a) string (b) number (c) boolean"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "Operators & conditionals",
    "outcomes": [
      "Do calculations with math operators (+, -, *, /, %).",
      "Compare two things with comparison operators (>, <, ===).",
      "Make the program decide with if/else: if this, then that, otherwise something else."
    ],
    "concept": "Operators are small signs used for math — like a shopkeeper uses + and - for bills. A conditional means a decision: if it is raining, take an umbrella, otherwise take sunglasses. In a program, if means 'if' — if the condition is true, do the first job, otherwise (else) do the second job.",
    "why": "A program makes decisions all the time — if the password is correct, let the user in; if the money is less, write 'add money'. Without decisions, a program would walk one straight line and never listen to the user.",
    "syntax": "if (age >= 18) { console.log(\"Come in\"); } else { console.log(\"Stay out\"); }",
    "examples": [
      [
        "Small calculator",
        "let a = 10;\nlet b = 3;\nconsole.log(a + b);\nconsole.log(a * b);\nconsole.log(a % b);"
      ],
      [
        "Check even or odd",
        "let n = 7;\nif (n % 2 === 0) {\n  console.log(\"Even\");\n} else {\n  console.log(\"Odd\");\n}"
      ],
      [
        "Grade decision",
        "let marks = 85;\nif (marks >= 90) {\n  console.log(\"A+ Grade\");\n} else if (marks >= 60) {\n  console.log(\"Pass!\");\n} else {\n  console.log(\"Fail\");\n}"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "% means the leftover after division — 7 % 2 is 1, so 7 is odd.",
      "=== means 'exactly equal' — it also checks the type, so always use ===.",
      "else if means: if the first condition failed, check the second one.",
      "The code inside the condition runs only when the condition is true."
    ],
    "mistake": "Using = inside if when you meant ===. if (x = 5) means 'give x the value 5', not 'is x equal to 5' — and it is always true. For checking equality, always write ===.",
    "practice": "Put your age in a variable. Use if/else to check: if the age is 18 or more, write 'You are an adult', otherwise write 'You are young'.",
    "check": [
      "What is 7 % 3? (a) 2 (b) 1 (c) 0",
      "Which sign correctly checks equality? (a) = (b) == (c) ===",
      "If (marks > 50) is false, what runs? (a) the if code (b) the else code (c) both"
    ],
    "answer": "b; c; b"
  },
  {
    "title": "Loops & iteration",
    "outcomes": [
      "Repeat a job a fixed number of times with a for loop.",
      "Repeat until a condition is met with a while loop.",
      "Understand when a loop stops and how to avoid an infinite loop."
    ],
    "concept": "A loop is a machine that does the same job again and again. Imagine writing numbers from 1 to 100 by hand — it would take all day. But tell a loop 'start at 1, go up to 100, add one each time, write it every time' and the job is done in 3 lines. Use a for loop when you already know how many times to repeat; use a while loop when you only know the stopping condition.",
    "why": "Real programs have thousands of things — a thousand students, a thousand pictures. Without loops, you would need a separate line for each one. A loop runs one small piece of code a thousand times.",
    "syntax": "for (let i = 1; i <= 5; i++) { console.log(i); }",
    "examples": [
      [
        "Count 1 to 5",
        "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}"
      ],
      [
        "Table of 5",
        "for (let i = 1; i <= 10; i++) {\n  console.log(\"5 x \" + i + \" = \" + (5 * i));\n}"
      ],
      [
        "while loop",
        "let count = 3;\nwhile (count > 0) {\n  console.log(count);\n  count = count - 1;\n}\nconsole.log(\"Done!\");"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "A for loop has three parts: where to start (let i = 1), when to stop (i <= 5), and what changes each time (i++ means add 1).",
      "i++ means add 1 to the value of i.",
      "A while loop checks the condition first — if it is true, the inside code runs, then the condition is checked again.",
      "In a while loop you must decrease the counter yourself, otherwise the loop will never stop."
    ],
    "mistake": "An infinite loop — a loop that never stops, like while(true) or a for loop where you forgot i++. The browser freezes. Always check that the stopping condition will become true at some point.",
    "practice": "Use a for loop to write only the even numbers from 1 to 20 (2, 4, 6...) in the console. Hint: remember the % operator.",
    "check": [
      "How many times will for (let i = 1; i <= 3; i++) run? (a) 2 (b) 3 (c) 4",
      "What does i++ mean? (a) add 1 to i (b) multiply i by 2 (c) delete i",
      "When does a while loop stop? (a) after 10 times (b) when the condition becomes false (c) it never stops"
    ],
    "answer": "b; a; b"
  },
  {
    "title": "Functions",
    "outcomes": [
      "Make your own function: give it a name and write code inside it.",
      "Give information to a function from outside using parameters.",
      "Get an answer back from a function with return."
    ],
    "concept": "A function is like a recipe. A recipe has a name — 'make tea' — and when you want tea, you say the name and the tea is made, without writing the full method again. A function also has a name with the work written inside, and you call it by name when you need it. Parameters are the things you give to the recipe — like in 'make two cups of tea', 'two' is a parameter. return means finish the work and give the answer back.",
    "why": "The same job is needed in many places in a program — add in two places, greet in three places. Write a function once, call it wherever you want. The code stays short, clean, and free of mistakes.",
    "syntax": "function add(a, b) { return a + b; }",
    "examples": [
      [
        "Greeting function",
        "function greet(name) {\n  console.log(\"Hello, \" + name + \"!\");\n}\ngreet(\"Ali\");\ngreet(\"Sara\");"
      ],
      [
        "Function that returns an answer",
        "function double(n) {\n  return n * 2;\n}\nlet answer = double(7);\nconsole.log(answer);"
      ],
      [
        "Arrow function (short way)",
        "const add = (a, b) => {\n  return a + b;\n};\nconsole.log(add(4, 5));"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "After the word function comes the name, then parameters in brackets — these are the things the function will receive.",
      "A function does not run just by writing it — you must call it by name, like greet(\"Ali\").",
      "Whatever is written after return becomes the function's answer; lines after return do not run.",
      "An arrow function (=>) is a short way to write a function — it does exactly the same job."
    ],
    "mistake": "Making a function but forgetting to call it — then wondering why the code did not run. Remember: defining and calling are two separate jobs, and both are needed.",
    "practice": "Make a function 'multiply' that takes two numbers and returns their product. Then give it 6 and 7 and show the answer in the console.",
    "check": [
      "What is needed to run a function? (a) only making it (b) calling it by name (c) nothing",
      "What is the job of return? (a) to stop the function (b) to give the answer back (c) to show an error",
      "In greet(\"Ali\"), what is \"Ali\"? (a) the function name (b) the parameter value (c) the return value"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "Arrays & objects",
    "outcomes": [
      "Make an array: keep many things in one list and take them out by index.",
      "Make an object: keep the full information of one thing in one place.",
      "Add a thing to an array (push) and read a value from an object."
    ],
    "concept": "An array is a row of boxes — first box, second box, third box. Every box has a number that starts from 0. Like a basket of fruit: basket[0] has a mango, basket[1] has a banana. An object is the full file of one thing — one student's file has their name, their age, and their city. Open the file by calling the name: student.name.",
    "why": "Real-world data looks like this — a list of friends, the full details of one friend. Arrays are for lists, objects are for the complete information of one thing. Without both, handling big data is impossible.",
    "syntax": "let fruits = [\"mango\", \"banana\", \"grapes\"]; · let student = { name: \"Ali\", age: 12 };",
    "examples": [
      [
        "Take things out of an array",
        "let friends = [\"Ali\", \"Sara\", \"Usman\"];\nconsole.log(friends[0]);\nconsole.log(friends[2]);\nconsole.log(friends.length);"
      ],
      [
        "Add a thing to an array",
        "let fruits = [\"mango\", \"banana\"];\nfruits.push(\"grapes\");\nconsole.log(fruits);\nconsole.log(fruits.length);"
      ],
      [
        "Read object information",
        "let student = {\n  name: \"Ali\",\n  age: 12,\n  city: \"Lahore\"\n};\nconsole.log(student.name);\nconsole.log(student.age);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Array counting starts at 0 — the first thing is [0], the second is [1]. This is called the index.",
      ".length tells how many things are in the array.",
      ".push() adds a new thing at the end of the array.",
      "In an object, every thing has a name (key) — student.name means take 'name' out of the student's file."
    ],
    "mistake": "Thinking the first index of an array is 1. friends[1] is the second friend, not the first! The first is always [0]. This is the most common beginner mistake.",
    "practice": "Make an array of 3 of your friends' names and show the third friend's name in the console. Then make an object about yourself: name, age, city — and show your city in the console.",
    "check": [
      "In let x = [\"a\", \"b\", \"c\"]; what is x[1]? (a) a (b) b (c) c",
      "To add a thing at the end of an array? (a) push() (b) pop() (c) add()",
      "In student.name, what is 'name'? (a) an array index (b) an object key (c) a function"
    ],
    "answer": "b; a; b"
  },
  {
    "title": "DOM selection",
    "outcomes": [
      "Understand what the DOM is: the tree the browser makes from HTML.",
      "Grab page elements with getElementById and querySelector.",
      "Change the text of a grabbed element with JavaScript."
    ],
    "concept": "When the browser reads HTML, it builds a tree from it — this tree is called the DOM. Every tag is a leaf of the tree. JavaScript can grab the leaves of this tree and change them — like grabbing a branch and changing its color. To grab an element, you tell its id or class name, and JavaScript finds it.",
    "why": "What is written on a page is fixed in the HTML at first. To change it — like changing a heading's text when a button is clicked — you must first grab that element. DOM selection is the first step of every interactive website.",
    "syntax": "document.getElementById(\"myId\") · document.querySelector(\".myClass\")",
    "examples": [
      [
        "Change heading text",
        "// HTML: <h1 id=\"myHeading\">Old Text</h1>\nlet h = document.getElementById(\"myHeading\");\nh.textContent = \"New Text!\";"
      ],
      [
        "Grab with querySelector",
        "// HTML: <p class=\"message\">Hello</p>\nlet p = document.querySelector(\".message\");\np.textContent = \"Goodbye\";"
      ],
      [
        "Change style",
        "// HTML: <h1 id=\"color\">Look</h1>\nlet h2 = document.getElementById(\"color\");\nh2.style.color = \"green\";"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "document means the whole page — 'search in the page'.",
      "getElementById searches by id; querySelector can search by class (.) or id (#).",
      "With .textContent, the text inside an element can be read or changed.",
      "With .style.color, the color of an element can be changed."
    ],
    "mistake": "Running the script before the element exists — if the <script> is above the heading, the heading is not built yet and the search returns null. Always put the script at the end of the body, so all elements are built first.",
    "practice": "Make an HTML page with an h1 that has the id 'greet'. Grab it in a script and change its text to your name. Open the page and see.",
    "check": [
      "What is the DOM? (a) a new browser (b) the tree of HTML that the browser builds (c) a CSS file",
      "To grab the element with id='box'? (a) getElementById(\"box\") (b) getElementById(\"#box\") (c) getElement(\"box\")",
      "To change an element's text? (a) .text (b) .textContent (c) .inner"
    ],
    "answer": "b; a; b"
  },
  {
    "title": "Events & interactions",
    "outcomes": [
      "Understand what an event is: something that happens on the page (click, type).",
      "Put a guard on a button with addEventListener to watch for clicks.",
      "Make the page respond to clicks and typing."
    ],
    "concept": "An event means something that happened — the user pressed a button, that is an event; the user typed something, that is also an event. addEventListener is a guard standing at the door who says: 'when the click event happens, do this job.' You give the guard the event name (\"click\") and the job (function), and that is it — after that, whenever the user presses, the job happens by itself.",
    "why": "If nothing happens when a button is pressed, the website feels dead. Events are the wires that connect the user's hand to the page — every like button, every menu, every game runs on them.",
    "syntax": "button.addEventListener(\"click\", function() { ... });",
    "examples": [
      [
        "Change text on click",
        "// HTML: <button id=\"btn\">Click</button><p id=\"msg\"></p>\nlet btn = document.getElementById(\"btn\");\nbtn.addEventListener(\"click\", function() {\n  document.getElementById(\"msg\").textContent = \"You clicked!\";\n});"
      ],
      [
        "Change color on click",
        "// HTML: <button id=\"colorBtn\">Change Color</button>\nlet cb = document.getElementById(\"colorBtn\");\ncb.addEventListener(\"click\", function() {\n  document.body.style.backgroundColor = \"lightblue\";\n});"
      ],
      [
        "Show as you type",
        "// HTML: <input id=\"typeBox\" placeholder=\"Type something\"><p id=\"show\"></p>\nlet box = document.getElementById(\"typeBox\");\nbox.addEventListener(\"input\", function() {\n  document.getElementById(\"show\").textContent = box.value;\n});"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "addEventListener has two parts: the event name (\"click\") and the function that runs when the event happens.",
      "The \"input\" event runs on every typed letter — this is how live preview is built.",
      "input.value means take what is written inside the input box.",
      "Many guards (listeners) can be placed on the same button."
    ],
    "mistake": "Putting () after the function name in the listener — addEventListener(\"click\", myJob()) is wrong. The brackets run the function right away instead of waiting for the click. Write only the name: myJob.",
    "practice": "Make a button that changes the page background color when clicked. Hint: use document.body.style.backgroundColor.",
    "check": [
      "What does event mean? (a) a function name (b) something that happens on the page (c) an error",
      "What is wrong in addEventListener(\"click\", myJob())? (a) nothing (b) the () runs the function right away (c) the spelling of click",
      "Which event runs on every typed letter? (a) click (b) input (c) change-page"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "Forms & validation",
    "outcomes": [
      "Take the user's typed value from a form input.",
      "Check that the input is not empty (validation).",
      "Show the user a friendly error message for wrong input."
    ],
    "concept": "A form is a slip that takes information from the user — write your name, write your email, then submit. Validation means checking the slip before submitting: is any box empty, does the email have an @? Like a teacher checks a copy to see if all questions are answered. This check happens in the browser itself, so a wrong slip never goes forward.",
    "why": "If an empty or wrong form is sent forward, either an error will come or wrong data will be saved. Checking first tells the user right away what to fix — that is the mark of a good website.",
    "syntax": "let v = input.value; if (v === \"\") { /* show error */ }",
    "examples": [
      [
        "Greet by name",
        "// HTML: <input id=\"nameInput\" placeholder=\"Your name\"><button id=\"okBtn\">OK</button><p id=\"result\"></p>\nlet okBtn = document.getElementById(\"okBtn\");\nokBtn.addEventListener(\"click\", function() {\n  let n = document.getElementById(\"nameInput\").value;\n  document.getElementById(\"result\").textContent = \"Hello, \" + n + \"!\";\n});"
      ],
      [
        "Catch empty input",
        "okBtn.addEventListener(\"click\", function() {\n  let name2 = document.getElementById(\"nameInput\").value;\n  if (name2 === \"\") {\n    document.getElementById(\"result\").textContent = \"Please write your name first!\";\n  } else {\n    document.getElementById(\"result\").textContent = \"Hello, \" + name2 + \"!\";\n  }\n});"
      ],
      [
        "Check @ in email",
        "// HTML: <input id=\"emailInput\" placeholder=\"Email\">\nlet email = document.getElementById(\"emailInput\").value;\nif (email.includes(\"@\")) {\n  console.log(\"Email looks fine\");\n} else {\n  console.log(\"Email has no @!\");\n}"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      ".value gives the thing written inside the input — always as text (string).",
      "An empty input means value === \"\" — nothing is written.",
      ".includes(\"@\") checks if @ is present in the text.",
      "An error message tells the user what to fix — a helping one, not an angry one."
    ],
    "mistake": "Pressing the form's button reloads the page and everything disappears — that is the old way of forms. To stop it, use preventDefault() on the event, otherwise all your JavaScript work is wasted.",
    "practice": "Make a small form: one input (for the name) and one button. When the button is pressed, if the input is empty show 'Writing your name is required!', otherwise show 'Thank you, [name]!'.",
    "check": [
      "How do you get the typed value of an input? (a) input.text (b) input.value (c) input.data",
      "The correct way to check an empty input? (a) value === \"\" (b) value === empty (c) value == 0",
      "Why is validation important? (a) the website looks pretty (b) wrong data never goes forward (c) the code becomes short"
    ],
    "answer": "b; a; b"
  },
  {
    "title": "Fetch & APIs",
    "outcomes": [
      "Understand what an API is: a door for taking data from another website.",
      "Ask for data from the internet with fetch().",
      "Understand JSON data and take the useful thing out of it."
    ],
    "concept": "An API is a window through which one website gives data to another website — like a weather website gives you weather data. fetch() is a servant you tell: 'go, bring data from that window.' It goes and brings the data — but it takes a little time, so you say 'when you bring it, then (.then) do this.' The data comes in an envelope called JSON — inside are name-and-value pairs, just like an object.",
    "why": "No website lives alone — weather, news, pictures, videos all come from APIs. Once you learn fetch, you can bring data from any window on the internet.",
    "syntax": "fetch(\"https://...\").then(res => res.json()).then(data => { ... });",
    "examples": [
      [
        "First fetch",
        "fetch(\"https://jsonplaceholder.typicode.com/users/1\")\n  .then(function(res) {\n    return res.json();\n  })\n  .then(function(data) {\n    console.log(data.name);\n  });"
      ],
      [
        "Get the full list",
        "fetch(\"https://jsonplaceholder.typicode.com/users\")\n  .then(function(res) {\n    return res.json();\n  })\n  .then(function(users) {\n    console.log(\"How many users: \" + users.length);\n    console.log(users[0].name);\n  });"
      ],
      [
        "Build a list on the page",
        "// HTML: <ul id=\"list\"></ul>\nfetch(\"https://jsonplaceholder.typicode.com/users\")\n  .then(function(r) { return r.json(); })\n  .then(function(users) {\n    let ul = document.getElementById(\"list\");\n    users.forEach(function(u) {\n      ul.innerHTML += \"<li>\" + u.name + \"</li>\";\n    });\n  });"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Give fetch() a URL — it goes to that address and asks for data.",
      "The first .then opens the envelope of the answer (res.json()), the second .then gives the data inside.",
      "JSON looks just like a JavaScript object — data.name gives the name.",
      "forEach does a job on every person of the array, one by one."
    ],
    "mistake": "Thinking that fetch gives data right away. No! Data takes time to come. Write the work that needs the data INSIDE .then — if you write it outside, the data has not arrived yet.",
    "practice": "Bring data from jsonplaceholder.typicode.com/users/1 and show that person's name and email in the console.",
    "check": [
      "What is an API? (a) a new browser (b) a window for giving/taking data (c) a virus",
      "When does fetch() give data? (a) right away (b) after some time, in .then (c) never",
      "What does JSON look like? (a) just like an object (b) like a picture (c) like a sound"
    ],
    "answer": "b; b; a"
  },
  {
    "title": "Async JavaScript",
    "outcomes": [
      "Understand what async work is: work that takes time but does not stop the page.",
      "Understand a promise: a promise that 'I will tell you when the work is done.'",
      "Write fetch code clean and straight with async/await."
    ],
    "concept": "Imagine you put tea on to boil and stand there until it is made — that is foolish. The smart way is to put the tea on and do other work meanwhile; when the tea is ready, you hear a sound. JavaScript is the same: a job like fetch takes time, but the page does not stop — the rest of the work keeps going, and when the data comes you get the news. This news is called a promise. async/await is the clean way to read this promise: await means 'wait here until the data comes', but let the page keep moving.",
    "why": "Data from the internet can take seconds to come. If the page stops, the user will think the website is broken. With async, the page stays alive and the data appears on the screen as soon as it arrives.",
    "syntax": "async function getData() { let res = await fetch(url); let data = await res.json(); }",
    "examples": [
      [
        "fetch with async/await",
        "async function firstUser() {\n  let res = await fetch(\"https://jsonplaceholder.typicode.com/users/1\");\n  let data = await res.json();\n  console.log(data.name);\n}\nfirstUser();"
      ],
      [
        "Clean code, clear meaning",
        "async function greetUser() {\n  let res = await fetch(\"https://jsonplaceholder.typicode.com/users/2\");\n  let user = await res.json();\n  console.log(\"Hello, \" + user.name);\n}\ngreetUser();"
      ],
      [
        "Promise in plain words",
        "let promise = new Promise(function(resolve) {\n  setTimeout(function() {\n    resolve(\"Job done!\");\n  }, 1000);\n});\npromise.then(function(msg) {\n  console.log(msg);\n});"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Inside an async function you can write await — await means 'wait on this line until the answer comes'.",
      "The waiting is only for that function — the rest of the page and code keeps running.",
      "A promise has three states: waiting, success, or failure.",
      "The old .then way and the new async/await way do the same job — async/await is just cleaner."
    ],
    "mistake": "Writing await in a normal function — await only works inside an async function. If you write it outside, you get an error. Do not forget to put async before the function.",
    "practice": "Do the fetch practice again, but this time use async/await instead of .then: show the name of users/1 in the console.",
    "check": [
      "What does async work mean? (a) very fast work (b) work that takes time but does not stop the page (c) wrong work",
      "Where can you write await? (a) anywhere (b) only inside an async function (c) only in HTML",
      "What is a promise? (a) a promise that the result will come later (b) an error (c) a loop"
    ],
    "answer": "b; b; a"
  },
  {
    "title": "Modules",
    "outcomes": [
      "Understand what a module is: a separate box of code.",
      "Give one file's function to another file with export.",
      "Take another file's function with import and run it."
    ],
    "concept": "Imagine all your toys stuffed in one big box — cars, balls, colors. Finding anything is hard! Better to have separate boxes: a box for cars, a box for balls. The same happens in code: a big program stuffed in one file looks messy. A module means separate boxes (files) of code — math functions in one file, name functions in another. export means 'give this thing out of the box', import means 'bring that thing in'.",
    "why": "A small program is fine in one file, but a big project cannot be handled in one file. With modules, every file has one job, the code stays clean, and one function can be reused in many files.",
    "syntax": "export function add(a, b) { return a + b; } · import { add } from \"./math.js\";",
    "examples": [
      [
        "File 1: give (export)",
        "// file: math.js\nexport function add(a, b) {\n  return a + b;\n}\nexport function multiply(a, b) {\n  return a * b;\n}"
      ],
      [
        "File 2: take (import)",
        "// file: app.js\nimport { add, multiply } from \"./math.js\";\nconsole.log(add(2, 3));\nconsole.log(multiply(4, 5));"
      ],
      [
        "Module in HTML",
        "<!-- the script tag needs type=\"module\" -->\n<script type=\"module\" src=\"app.js\"></script>"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "export means: this function can be used outside this file.",
      "In the import brackets, write the names you need, then the file address in from.",
      "The .js with the file name is required — \"./math.js\".",
      "In HTML, put type=\"module\" on the script tag, otherwise import will not work."
    ],
    "mistake": "Forgetting to put type=\"module\" — then the browser does not understand import at all and gives an error. And remember: modules usually do not run on file:// — you need a small server (like VS Code's Live Server) to run them.",
    "practice": "Make two files: in 'greet.js' export a function that takes a name and returns 'Hello, [name]!'. In 'app.js' import it and run it in the console. Do not forget the type=\"module\" script in HTML.",
    "check": [
      "What is a module? (a) a separate box (file) of code (b) an error (c) a browser",
      "To take another file's function? (a) export (b) import (c) copy",
      "What is needed in the script tag for a module in HTML? (a) type=\"module\" (b) type=\"text\" (c) nothing"
    ],
    "answer": "a; b; a"
  },
  {
    "title": "Error handling",
    "outcomes": [
      "Understand why a program stops when an error comes.",
      "Catch an error with try/catch and keep the program alive.",
      "Show the user a friendly message instead of technical nonsense."
    ],
    "concept": "While a program runs, sometimes things go wrong — wrong data comes in, or something is not found. Normally, the program falls down the moment an error comes. try/catch is a net: try means 'try it', catch means 'if you fall, I will catch you'. If something goes wrong in the try, the program goes to catch instead of falling — there you can show a friendly message and the program keeps going.",
    "why": "Users do not understand nonsense like 'undefined is not a function' — they get scared. Catching the error and showing a friendly message makes the website look professional, and the program does not stop halfway.",
    "syntax": "try { /* try */ } catch (err) { /* handle it */ }",
    "examples": [
      [
        "First try/catch",
        "try {\n  console.log(\"Trying...\");\n  let x = wrongName;\n} catch (err) {\n  console.log(\"No problem, caught the error!\");\n}\nconsole.log(\"Program keeps running\");"
      ],
      [
        "Catch bad JSON",
        "try {\n  let data = JSON.parse(\"this is not json\");\n} catch (err) {\n  console.log(\"The data came broken!\");\n}"
      ],
      [
        "Throw your own error",
        "function checkAge(age) {\n  if (age < 0) throw \"Age cannot be negative!\";\n  return age;\n}\ntry {\n  checkAge(-5);\n} catch (err) {\n  console.log(err);\n}"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "In try, write the code where something can go wrong.",
      "If something goes wrong, you go straight to catch — the remaining lines of try do not run.",
      "In the catch brackets you get the detail of the error (err.message).",
      "With throw, you can also create an error yourself when something is wrong."
    ],
    "mistake": "Writing nothing inside catch (leaving it empty). You caught the error but hid it — now neither you nor the user will know what happened. Always write something in catch: write in the console or show a message to the user.",
    "practice": "Make a function that tries to read a text with JSON.parse. Give it a wrong text, and in catch show the message 'Could not understand the data!'.",
    "check": [
      "What is the benefit of try/catch? (a) hiding errors (b) catching the error and keeping the program running (c) making errors",
      "If an error comes in try, what happens? (a) the program falls (b) the catch code runs (c) nothing happens",
      "What does throw mean? (a) throwing code away (b) creating an error yourself (c) deleting a file"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript project",
    "outcomes": [
      "Join everything you learned and make one full mini project.",
      "Break the project into small pieces and build it one by one.",
      "Open your work in the browser and test it yourself."
    ],
    "concept": "Until now you learned separate tools — variables, functions, DOM, events. A project means making one full thing from all these tools, like a mason builds a house from bricks. We will make a 'Task List' (To-Do List): the user writes a task, presses a button, the task goes into the list; clicking a task crosses it out (done!); and a delete button removes it. It looks small, but your whole JavaScript goes into it.",
    "why": "Watching a tutorial and making it yourself are two different worlds. When you make it yourself, you learn what you understood and what you did not — and a finished project is your proof that you know JavaScript.",
    "syntax": "input.value + document.createElement(\"li\") + addEventListener — all together",
    "examples": [
      [
        "Project skeleton (HTML)",
        "<!-- index.html -->\n<input id=\"taskInput\" placeholder=\"Write a new task\">\n<button id=\"addBtn\">Add to List</button>\n<ul id=\"list\"></ul>\n<script src=\"app.js\"></script>"
      ],
      [
        "Add task to list",
        "// app.js\nlet addBtn = document.getElementById(\"addBtn\");\naddBtn.addEventListener(\"click\", function() {\n  let text = document.getElementById(\"taskInput\").value;\n  if (text === \"\") return;\n  let li = document.createElement(\"li\");\n  li.textContent = text;\n  document.getElementById(\"list\").appendChild(li);\n  document.getElementById(\"taskInput\").value = \"\";\n});"
      ],
      [
        "Cross out on click (done)",
        "document.getElementById(\"list\").addEventListener(\"click\", function(e) {\n  if (e.target.tagName === \"LI\") {\n    e.target.style.textDecoration = \"line-through\";\n  }\n});"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "document.createElement(\"li\") makes a new list item — right now it is in the air, not on the page.",
      "appendChild puts it inside the list (ul) — now it appears on the page.",
      "if (text === \"\") return; means: if the task is empty, do not go forward at all.",
      "After adding the task, the input is emptied so a new task can be written."
    ],
    "mistake": "Trying to write the whole project in one go, then getting scared seeing 20 errors. Always build a project in pieces: first run only the add-task part, test it, then add the cross-out feature, then delete. One feature at a time.",
    "practice": "Add a 'Clear All' button to your to-do list yourself — pressing it empties the whole list. Hint: ul.innerHTML = \"\" will work.",
    "check": [
      "To make a new element? (a) createElement() (b) makeElement() (c) newElement()",
      "To put an element on the page? (a) appendChild() (b) addChild() (c) putIn()",
      "The best habit while making a project? (a) write everything in one go (b) build in pieces and test (c) add the next feature without testing"
    ],
    "answer": "a; a; b"
  },
  {
    "title": "Where to put JavaScript",
    "outcomes": [
      "Place JavaScript in the head, in the body, or in a separate file.",
      "Link an external JavaScript file with the src attribute.",
      "Explain why scripts are usually placed at the end of the body."
    ],
    "concept": "JavaScript can live in three places: in the head of the page, at the end of the body, or in a separate file. The most common place is the end of the body, because then the whole page is built before the code runs. A separate file is the cleanest way — one file for HTML, one file for JavaScript.",
    "why": "If the code runs before the page is built, it cannot find the elements it needs. Putting scripts in the right place saves you from strange errors.",
    "syntax": "<script src=\"app.js\"></script>",
    "examples": [
      [
        "Script in the body",
        "<body>\n  <h1>My Page</h1>\n  <script>\n    console.log(\"Page is ready\");\n  </script>\n</body>"
      ],
      [
        "External file",
        "<!-- index.html -->\n<script src=\"app.js\"></script>\n\n// app.js\nconsole.log(\"Hello from app.js\");"
      ],
      [
        "Script in the head",
        "<head>\n  <script>\n    function greet() {\n      alert(\"Hello!\");\n    }\n  </script>\n</head>"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Code at the end of the body runs after all the HTML is built.",
      "An external file is linked with src=\"app.js\" — the script tag stays empty.",
      "One external file can be used by many HTML pages.",
      "Code in the head runs before the page is built, so it cannot touch page elements yet."
    ],
    "mistake": "Putting code that touches the page in the head — the elements do not exist yet, so you get null errors. Put such code at the end of the body or in a file loaded at the end.",
    "practice": "Make app.js with one console.log line, link it at the end of your HTML body with src, and see the message in the console.",
    "check": [
      "Where do scripts usually go? (a) start of head (b) end of body (c) inside CSS",
      "How do you link an external file? (a) <script src=\"app.js\"> (b) <js file=\"app.js\"> (c) <link js=\"app.js\">",
      "Why not put page-touching code in the head? (a) it runs too fast (b) the elements are not built yet (c) the browser blocks it"
    ],
    "answer": "b; a; b"
  },
  {
    "title": "JavaScript output",
    "outcomes": [
      "Show output in the console with console.log().",
      "Write into the page with innerHTML and document.write().",
      "Show a popup message with alert()."
    ],
    "concept": "JavaScript can show results in four ways. console.log() writes in the hidden console — best for testing. innerHTML writes inside a page element — best for showing things to the user. alert() opens a popup box. document.write() writes directly on the page, but only while the page is loading.",
    "why": "Every program needs to show results. Picking the right output way — console for you, page for the user — is a basic skill.",
    "syntax": "console.log(\"Hello\"); · document.getElementById(\"demo\").innerHTML = \"Hello\";",
    "examples": [
      [
        "console.log",
        "console.log(\"Hello, console!\");\nconsole.log(5 + 3);"
      ],
      [
        "innerHTML",
        "// HTML: <p id=\"demo\"></p>\ndocument.getElementById(\"demo\").innerHTML = \"Hello, page!\";"
      ],
      [
        "alert and document.write",
        "alert(\"Hello, popup!\");\ndocument.write(\"Hello, page!\");"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "console.log() is for developers — the user never sees the console.",
      "innerHTML puts text inside an element the user can see.",
      "alert() stops everything until the user closes the popup — use it rarely.",
      "document.write() after the page loads will erase the whole page — avoid it."
    ],
    "mistake": "Using document.write() after the page has loaded — it deletes everything on the page. For showing things on the page, use innerHTML instead.",
    "practice": "Make a paragraph with id 'out'. Use innerHTML to write your name in it, and console.log to write your age in the console.",
    "check": [
      "Which output is only for the developer? (a) console.log() (b) innerHTML (c) alert()",
      "To write inside a page element, use? (a) innerHTML (b) console.log (c) document.pop",
      "What does document.write() do after page load? (a) adds text nicely (b) erases the whole page (c) nothing"
    ],
    "answer": "a; a; b"
  },
  {
    "title": "JavaScript statements",
    "outcomes": [
      "Recognize a JavaScript statement.",
      "Write many statements, one per line.",
      "Use semicolons to end statements."
    ],
    "concept": "A statement is one instruction for the computer — like one order: 'write this', 'add these'. A program is just a list of statements. Each statement usually sits on its own line and ends with a semicolon (;).",
    "why": "Programs are built from statements. Knowing where one instruction ends and the next begins keeps your code readable and error-free.",
    "syntax": "let x = 5;\nlet y = 6;\nlet z = x + y;",
    "examples": [
      [
        "Three statements",
        "let x = 5;\nlet y = 6;\nlet z = x + y;\nconsole.log(z);"
      ],
      [
        "Statements run in order",
        "console.log(\"First\");\nconsole.log(\"Second\");\nconsole.log(\"Third\");"
      ],
      [
        "One line, many statements",
        "let a = 1; let b = 2; console.log(a + b);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "A statement tells the computer to do one thing.",
      "Statements run from top to bottom, in order.",
      "A semicolon (;) marks the end of a statement.",
      "Many statements can sit on one line, but one per line is easier to read."
    ],
    "mistake": "Forgetting that order matters — if you use a variable before the statement that creates it, you get an error. Write statements in the order they are needed.",
    "practice": "Write four statements: create two numbers, add them in a third, and print the answer in the fourth.",
    "check": [
      "What is a statement? (a) one instruction for the computer (b) a question (c) an error",
      "In what order do statements run? (a) bottom to top (b) top to bottom (c) random",
      "What ends a statement? (a) a comma (b) a semicolon (c) a full stop"
    ],
    "answer": "a; b; b"
  },
  {
    "title": "JavaScript syntax",
    "outcomes": [
      "Read basic JavaScript syntax: values, variables, and operators.",
      "Tell fixed values (literals) apart from variables.",
      "Write correct syntax without spelling mistakes."
    ],
    "concept": "Syntax means the grammar rules of a language. In JavaScript, there are values (like 5 or \"Ali\"), variables (names that hold values, like x), and operators (like + and =). A correct line follows the grammar: variable, then =, then value.",
    "why": "One wrong letter or a missing quote breaks the whole line. Learning the grammar first saves hours of hunting small mistakes later.",
    "syntax": "let x = 5; // variable x gets the value 5",
    "examples": [
      [
        "Values and variables",
        "let name = \"Ali\";\nlet age = 12;\nconsole.log(name);\nconsole.log(age);"
      ],
      [
        "Literals",
        "console.log(100);\nconsole.log(\"Hello\");\nconsole.log(true);"
      ],
      [
        "Operators in syntax",
        "let total = 10 + 5;\nconsole.log(total);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Fixed values like 100 or \"Ali\" are called literals.",
      "A variable name holds a value that can change.",
      "= gives a value to a variable; + joins values together.",
      "JavaScript ignores extra spaces — let x=5 and let x = 5 are the same."
    ],
    "mistake": "Mixing up = and ==: = gives a value, == compares. Writing let x == 5 is wrong syntax — use one = when giving a value.",
    "practice": "Write three lines: a variable with your city (text), a variable with your age (number), and a console.log that prints both.",
    "check": [
      "What is syntax? (a) the grammar rules of the language (b) a type of error (c) a browser tool",
      "In let x = 5, what is 5? (a) a variable (b) a literal value (c) an operator",
      "What does = do? (a) compares two things (b) gives a value to a variable (c) adds numbers"
    ],
    "answer": "a; b; b"
  },
  {
    "title": "JavaScript comments",
    "outcomes": [
      "Write a single-line comment with //.",
      "Write a multi-line comment with /* */.",
      "Use comments to explain tricky code."
    ],
    "concept": "A comment is a note you write for humans — the computer completely ignores it. Single-line comments start with //. Multi-line comments sit between /* and */. Comments explain why the code does something, so future-you (or a teammate) can understand it.",
    "why": "Code is read more than it is written. A short comment can save the next person (often you, next month) from guessing what a clever line does.",
    "syntax": "// this is a comment\n/* this is\na longer comment */",
    "examples": [
      [
        "Single-line comment",
        "// Show a greeting\nconsole.log(\"Hello!\");\nlet age = 12; // my age"
      ],
      [
        "Multi-line comment",
        "/*\n  This program adds two numbers\n  and prints the answer.\n*/\nconsole.log(2 + 3);"
      ],
      [
        "Commenting out code",
        "// console.log(\"Old line\");\nconsole.log(\"New line\");"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "// makes the rest of the line a comment.",
      "/* */ can cover many lines at once.",
      "The computer skips comments — they never run.",
      "You can 'turn off' a line by making it a comment."
    ],
    "mistake": "Writing comments that say what the code already says, like // add 1 on the line x = x + 1. Write why, not what — the code already shows what.",
    "practice": "Take any old program you wrote and add three helpful comments explaining the tricky parts.",
    "check": [
      "How do you start a single-line comment? (a) // (b) ## (c) --",
      "What does the computer do with comments? (a) runs them (b) ignores them (c) deletes them",
      "How do you write a multi-line comment? (a) // // (b) /* */ (c) << >>"
    ],
    "answer": "a; b; b"
  },
  {
    "title": "JavaScript arithmetic",
    "outcomes": [
      "Use all arithmetic operators: + - * / % **.",
      "Follow the correct order of math operations.",
      "Use ++, -- and shortcut operators like +=."
    ],
    "concept": "Arithmetic operators do math: + adds, - subtracts, * multiplies, / divides, % gives the remainder, and ** gives the power. Math has an order: first **, then * / %, then + -. Brackets () always win. Shortcuts like x += 5 mean 'add 5 to x'.",
    "why": "Every app does math — prices, scores, ages, distances. Knowing the operators and their order keeps your calculations correct.",
    "syntax": "let z = (10 + 2) * 3; // 36",
    "examples": [
      [
        "All operators",
        "console.log(10 + 4);\nconsole.log(10 - 4);\nconsole.log(10 * 4);\nconsole.log(10 / 4);\nconsole.log(10 % 4);\nconsole.log(10 ** 2);"
      ],
      [
        "Order matters",
        "console.log(2 + 3 * 4);\nconsole.log((2 + 3) * 4);"
      ],
      [
        "Shortcuts",
        "let x = 10;\nx += 5;\nconsole.log(x);\nx++;\nconsole.log(x);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "% gives the remainder: 10 % 4 is 2.",
      "** is the power: 10 ** 2 means 10 squared.",
      "* and / run before + and -.",
      "x++ adds 1 to x; x += 5 adds 5 to x."
    ],
    "mistake": "Forgetting the order: 2 + 3 * 4 is 14, not 20. When in doubt, use brackets to make your meaning clear.",
    "practice": "Calculate the price of 3 shirts at 500 each with a 10% discount, using operators and brackets. Print the final price.",
    "check": [
      "What is 10 % 3? (a) 3 (b) 1 (c) 0",
      "What is 2 + 3 * 4? (a) 20 (b) 14 (c) 24",
      "What does x += 5 do? (a) sets x to 5 (b) adds 5 to x (c) multiplies x by 5"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript data types",
    "outcomes": [
      "Name the main data types: string, number, boolean, undefined, null.",
      "Explain that a variable can change its type.",
      "Check a value's type with typeof."
    ],
    "concept": "JavaScript has a few kinds of values. String is text (\"Ali\"), number is any number (12 or 3.5), boolean is true or false, undefined means 'no value yet', and null means 'empty on purpose'. A variable is not locked to one type — it can hold a number now and text later.",
    "why": "Bugs often come from mixing types — adding a number to text by mistake. Knowing the types helps you spot these bugs fast.",
    "syntax": "let x; // undefined\nlet y = null; // empty on purpose",
    "examples": [
      [
        "All basic types",
        "let name = \"Ali\";\nlet age = 12;\nlet ok = true;\nlet x;\nlet y = null;\nconsole.log(typeof name);\nconsole.log(typeof x);"
      ],
      [
        "Type can change",
        "let data = 100;\nconsole.log(typeof data);\ndata = \"now I am text\";\nconsole.log(typeof data);"
      ],
      [
        "Big numbers",
        "let big = 123456789012345678901234567890n;\nconsole.log(typeof big);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "undefined means a variable was created but given no value.",
      "null means 'I meant it to be empty'.",
      "A variable can hold a number first and text later — JavaScript allows it.",
      "BigInt (ending with n) holds numbers too big for normal numbers."
    ],
    "mistake": "Thinking undefined and null are the same. undefined means 'not set yet' (often a mistake); null means 'set to empty on purpose'. They are different ideas.",
    "practice": "Create five variables, one of each type: string, number, boolean, undefined, null. Print each one's type with typeof.",
    "check": [
      "What does undefined mean? (a) empty on purpose (b) no value given yet (c) zero",
      "Can a variable change its type? (a) yes (b) no (c) only once",
      "What is typeof null? (a) null (b) object (c) undefined"
    ],
    "answer": "b; a; b"
  },
  {
    "title": "JavaScript objects",
    "outcomes": [
      "Make an object with properties and read them with dot notation.",
      "Add methods (functions) inside an object and use 'this'.",
      "Add, change, and delete properties."
    ],
    "concept": "An object holds the full information of one thing. Each piece has a name (called a key) and a value: { name: \"Ali\", age: 12 }. A function inside an object is called a method, and inside a method, 'this' means 'this object'. Objects can also hold other objects inside them.",
    "why": "Real data comes in bundles — a user has a name, age, and city together. Objects keep each bundle in one tidy place.",
    "syntax": "let car = { brand: \"Honda\", start: function() { return this.brand + \" started\"; } };",
    "examples": [
      [
        "Object with a method",
        "let student = {\n  name: \"Ali\",\n  age: 12,\n  greet: function() {\n    return \"Hello, I am \" + this.name;\n  }\n};\nconsole.log(student.greet());"
      ],
      [
        "Add and delete",
        "let car = { brand: \"Honda\" };\ncar.color = \"red\";\nconsole.log(car.color);\ndelete car.color;\nconsole.log(car.color);"
      ],
      [
        "Nested object",
        "let user = {\n  name: \"Sara\",\n  address: { city: \"Lahore\", zip: \"54000\" }\n};\nconsole.log(user.address.city);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Keys are the names inside an object; values are what they hold.",
      "A method is a function stored in an object.",
      "Inside a method, this means the object itself.",
      "Use dot notation (obj.key) or brackets (obj[\"key\"]) to reach a value."
    ],
    "mistake": "Forgetting 'this' inside a method and using the key name alone — name alone looks for a variable, this.name looks inside the object. They are not the same.",
    "practice": "Make a 'book' object with title, author, and pages, plus a method 'info' that returns one sentence about the book using this.",
    "check": [
      "What is a method? (a) a function inside an object (b) a type of loop (c) an error",
      "What does 'this' mean inside a method? (a) the browser (b) the object itself (c) nothing",
      "How do you delete a property? (a) remove(obj.key) (b) delete obj.key (c) obj.key = 0"
    ],
    "answer": "a; b; b"
  },
  {
    "title": "JavaScript strings",
    "outcomes": [
      "Make strings with single, double, or backtick quotes.",
      "Join strings with + and find a string's length.",
      "Read single characters with bracket notation."
    ],
    "concept": "A string is text inside quotes: 'Ali', \"Ali\", or `Ali` — all three work. Join strings with +: \"Hello, \" + \"Ali\". Every string knows its length: \"Ali\".length is 3. Each character has a position starting at 0, so \"Ali\"[0] is \"A\".",
    "why": "Programs handle text everywhere — names, messages, addresses. Strings are how text is stored and shaped.",
    "syntax": "let text = \"Hello\"; // or 'Hello' or `Hello`",
    "examples": [
      [
        "Three quote styles",
        "let a = \"double\";\nlet b = 'single';\nlet c = `backtick`;\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);"
      ],
      [
        "Join and length",
        "let first = \"Coding\";\nlet second = \"Vibes\";\nlet full = first + \" \" + second;\nconsole.log(full);\nconsole.log(full.length);"
      ],
      [
        "Characters",
        "let word = \"Hello\";\nconsole.log(word[0]);\nconsole.log(word[4]);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Single, double, and backtick quotes all make strings.",
      "+ joins two strings into one.",
      ".length counts the characters, including spaces.",
      "Positions start at 0: the first character is [0]."
    ],
    "mistake": "Using the same quote inside the string: \"He said \"hi\"\" breaks. Mix quotes — 'He said \"hi\"' — or use backticks.",
    "practice": "Make two variables, your first name and last name. Join them with a space, print the full name and its length.",
    "check": [
      "Which of these is NOT a string? (a) \"Ali\" (b) 'Ali' (c) Ali",
      "What is \"Hello\".length? (a) 4 (b) 5 (c) 6",
      "What is \"Hello\"[1]? (a) H (b) e (c) l"
    ],
    "answer": "c; b; b"
  },
  {
    "title": "JavaScript string methods",
    "outcomes": [
      "Change case with toUpperCase() and toLowerCase().",
      "Cut and find parts with slice(), indexOf(), and includes().",
      "Clean and split text with trim() and split()."
    ],
    "concept": "String methods are ready-made tools for text. toUpperCase() makes text BIG, slice(0, 3) cuts out a piece, indexOf(\"a\") finds where a letter sits, includes(\"hi\") asks 'is it inside?', trim() removes extra spaces, and split(\" \") breaks text into an array of words.",
    "why": "Raw text is rarely perfect — users type extra spaces or mixed case. These methods clean and shape text before you use it.",
    "syntax": "\"hello\".toUpperCase(); // \"HELLO\"",
    "examples": [
      [
        "Case and trim",
        "let msg = \"  Hello World  \";\nconsole.log(msg.trim());\nconsole.log(msg.trim().toUpperCase());\nconsole.log(msg.trim().toLowerCase());"
      ],
      [
        "Find and cut",
        "let text = \"Coding Vibes\";\nconsole.log(text.indexOf(\"Vibes\"));\nconsole.log(text.includes(\"Cod\"));\nconsole.log(text.slice(0, 6));"
      ],
      [
        "Split into words",
        "let line = \"learn code build\";\nlet words = line.split(\" \");\nconsole.log(words);\nconsole.log(words.length);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Methods do not change the original string — they return a new one.",
      "indexOf() gives the position, or -1 if not found.",
      "slice(start, end) cuts from start up to (not including) end.",
      "split() turns a string into an array."
    ],
    "mistake": "Thinking a method changes the original: text.toUpperCase() alone does nothing to text. Save the result: text = text.toUpperCase().",
    "practice": "Take the string \"  learn JAVASCRIPT  \". Trim it, make it lowercase, then split it into words and print the word count.",
    "check": [
      "What does \"abc\".toUpperCase() return? (a) abc (b) ABC (c) Abc",
      "What does \"hello\".indexOf(\"z\") return? (a) 0 (b) -1 (c) error",
      "What does \"a,b,c\".split(\",\") give? (a) a string (b) an array of 3 (c) a number"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript template literals",
    "outcomes": [
      "Build strings with backticks and ${} placeholders.",
      "Write multi-line strings easily.",
      "Replace messy + joining with clean templates."
    ],
    "concept": "Template literals use backticks (`) instead of quotes. Inside them, ${} drops any value straight into the text: `Hello, ${name}!` — no plus signs needed. They also keep line breaks, so multi-line text is easy. It is the modern, clean way to build strings.",
    "why": "Joining five pieces with + is messy and error-prone. Templates read like the final sentence, with the values slotted in.",
    "syntax": "let msg = `Hello, ${name}! You are ${age} years old.`;",
    "examples": [
      [
        "Basic template",
        "let name = \"Ali\";\nlet age = 12;\nlet msg = `Hello, ${name}!`;\nconsole.log(msg);\nconsole.log(`Next year you will be ${age + 1}.`);"
      ],
      [
        "Vs plus joining",
        "let item = \"book\";\nlet price = 500;\nconsole.log(\"The \" + item + \" costs Rs \" + price + \".\");\nconsole.log(`The ${item} costs Rs ${price}.`);"
      ],
      [
        "Multi-line",
        "let poem = `Roses are red,\nViolets are blue,\nJavaScript is fun!`;\nconsole.log(poem);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Backticks (not quotes) start a template literal.",
      "${} can hold any expression: variables, math, function calls.",
      "Line breaks inside backticks are kept as-is.",
      "Templates make long joined strings easy to read."
    ],
    "mistake": "Using ${} inside normal quotes — \"Hello ${name}\" prints literally, no replacement. Placeholders only work inside backticks.",
    "practice": "Make variables for your name, city, and age. Print one sentence about yourself using a single template literal.",
    "check": [
      "Which quotes make a template literal? (a) \" \" (b) ' ' (c) ` `",
      "What does ${} do? (a) nothing (b) puts a value into the text (c) makes a comment",
      "Do line breaks survive in templates? (a) yes (b) no (c) only with \\n"
    ],
    "answer": "c; b; a"
  },
  {
    "title": "JavaScript numbers",
    "outcomes": [
      "Work with whole numbers and decimals.",
      "Handle special values: Infinity and NaN.",
      "Do safe math with very big or very small numbers."
    ],
    "concept": "In JavaScript, all numbers are one type — 12 and 3.14 are both 'number'. Dividing by zero gives Infinity. Bad math (like \"abc\" - 5) gives NaN, which means 'Not a Number'. Numbers are stored with limited precision, so 0.1 + 0.2 is not exactly 0.3.",
    "why": "Money, scores, and measurements are all numbers. Knowing the traps — NaN, Infinity, precision — keeps your math honest.",
    "syntax": "let x = 3.14; let y = 10 / 0; // Infinity",
    "examples": [
      [
        "Decimals and precision",
        "console.log(0.1 + 0.2);\nconsole.log((0.1 + 0.2).toFixed(1));\nconsole.log(100 + 50);"
      ],
      [
        "Infinity and NaN",
        "console.log(10 / 0);\nconsole.log(-10 / 0);\nconsole.log(\"abc\" - 5);\nconsole.log(isNaN(\"abc\" - 5));"
      ],
      [
        "Big and small",
        "console.log(Number.MAX_SAFE_INTEGER);\nconsole.log(1e6);\nconsole.log(1e-3);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Whole numbers and decimals are the same type.",
      "Infinity comes from dividing by zero.",
      "NaN means a math operation failed — check it with isNaN().",
      "1e6 is a short way to write 1000000."
    ],
    "mistake": "Checking NaN with === : NaN === NaN is false! Always use isNaN(value) to test for NaN.",
    "practice": "Divide 10 by 3, print the answer, then print it rounded to 2 decimals with toFixed(2). Also print what \"hello\" * 2 gives and check it with isNaN.",
    "check": [
      "What is 10 / 0? (a) 0 (b) Infinity (c) error",
      "What does NaN stand for? (a) New and Nice (b) Not a Number (c) No answer Needed",
      "How do you test for NaN? (a) x === NaN (b) isNaN(x) (c) x == \"NaN\""
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript number methods",
    "outcomes": [
      "Round numbers with toFixed(), Math.round(), and parseInt().",
      "Turn text into numbers with Number() and parseFloat().",
      "Format numbers for display."
    ],
    "concept": "Number methods shape numbers for display and convert text to numbers. toFixed(2) keeps 2 decimals: (3.14159).toFixed(2) is \"3.14\". Number(\"42\") turns text into a real number. parseInt(\"42px\") reads the number from the start of text. Math.round() rounds to the nearest whole number.",
    "why": "User input always arrives as text. Turning \"42\" into 42 — and rounding prices nicely — is daily work in real apps.",
    "syntax": "Number(\"42\"); // 42\n(3.14159).toFixed(2); // \"3.14\"",
    "examples": [
      [
        "Text to number",
        "console.log(Number(\"42\"));\nconsole.log(parseInt(\"42px\"));\nconsole.log(parseFloat(\"3.14abc\"));\nconsole.log(Number(\"abc\"));"
      ],
      [
        "Rounding",
        "console.log(Math.round(4.6));\nconsole.log(Math.round(4.4));\nconsole.log((3.14159).toFixed(2));"
      ],
      [
        "Adding input values",
        "let a = \"10\";\nlet b = \"5\";\nconsole.log(a + b);\nconsole.log(Number(a) + Number(b));"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Number() converts the whole text — anything extra gives NaN.",
      "parseInt() reads whole numbers from the start of text and stops at the first non-digit.",
      "toFixed(n) returns a string with n decimals.",
      "\"10\" + \"5\" joins text (\"105\"); Number() first turns them into real numbers (15)."
    ],
    "mistake": "Adding input values without converting: \"10\" + \"5\" gives \"105\", not 15. Convert with Number() before doing math.",
    "practice": "Make two variables with text numbers \"20\" and \"7\". Convert both with Number(), add them, and print the sum. Then print 10 / 3 with exactly 3 decimals.",
    "check": [
      "What is Number(\"42\")? (a) \"42\" (b) 42 (c) NaN",
      "What is parseInt(\"42px\")? (a) NaN (b) 42 (c) \"42px\"",
      "What is \"10\" + \"5\"? (a) 15 (b) \"105\" (c) error"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript arrays deep dive",
    "outcomes": [
      "Create arrays in different ways and read them safely.",
      "Loop over every item of an array.",
      "Check if something is an array with Array.isArray()."
    ],
    "concept": "An array is an ordered list: let colors = [\"red\", \"green\", \"blue\"]. Positions start at 0. The length property tells how many items there are. The safest way to visit every item is a loop — for or for...of. Arrays can hold anything: numbers, strings, even other arrays.",
    "why": "Lists are everywhere — products, users, messages. Arrays are the main tool for handling lists.",
    "syntax": "let colors = [\"red\", \"green\", \"blue\"]; // colors[0] is \"red\"",
    "examples": [
      [
        "Loop an array",
        "let fruits = [\"mango\", \"banana\", \"grapes\"];\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}"
      ],
      [
        "for...of loop",
        "let nums = [10, 20, 30];\nfor (let n of nums) {\n  console.log(n * 2);\n}"
      ],
      [
        "Mixed array and check",
        "let mixed = [\"Ali\", 12, true];\nconsole.log(mixed.length);\nconsole.log(Array.isArray(mixed));\nconsole.log(Array.isArray(\"hello\"));"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Use array.length in loops so the loop fits any size.",
      "for...of gives each value directly — no index needed.",
      "An array can mix types, but keeping one type is cleaner.",
      "typeof an array says \"object\" — use Array.isArray() for the real check."
    ],
    "mistake": "Reading past the end: arr[10] on a 3-item array gives undefined, not an error. Always stay below array.length.",
    "practice": "Make an array of 5 cities. Loop over it with for...of and print 'I love CITY' for each one.",
    "check": [
      "What is the index of the first item? (a) 1 (b) 0 (c) -1",
      "What does for...of give you? (a) the index (b) each value (c) the length",
      "How do you check something is an array? (a) typeof x (b) Array.isArray(x) (c) x.isArray()"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript array methods",
    "outcomes": [
      "Add and remove items with push(), pop(), shift(), unshift().",
      "Transform arrays with map() and filter().",
      "Join arrays and turn them into strings."
    ],
    "concept": "Array methods are power tools for lists. push() adds at the end, pop() removes from the end, shift() removes from the start, unshift() adds at the start. map() builds a new array by changing each item. filter() keeps only the items that pass a test. join() glues items into one string.",
    "why": "Real apps constantly reshape lists — show only cheap products, double all scores, join names with commas. These methods do it in one line.",
    "syntax": "let doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]",
    "examples": [
      [
        "Add and remove",
        "let list = [\"a\", \"b\"];\nlist.push(\"c\");\nconsole.log(list);\nlist.pop();\nconsole.log(list);\nlist.unshift(\"z\");\nconsole.log(list);"
      ],
      [
        "map and filter",
        "let nums = [1, 2, 3, 4, 5];\nlet doubled = nums.map(function(n) { return n * 2; });\nlet evens = nums.filter(function(n) { return n % 2 === 0; });\nconsole.log(doubled);\nconsole.log(evens);"
      ],
      [
        "join and concat",
        "let a = [\"Coding\", \"Vibes\"];\nconsole.log(a.join(\" \"));\nlet b = [1, 2].concat([3, 4]);\nconsole.log(b);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "push/pop work at the end; unshift/shift work at the start.",
      "map() returns a new array — the original stays unchanged.",
      "filter() keeps items where the test returns true.",
      "join() makes one string; concat() joins two arrays."
    ],
    "mistake": "Forgetting that map() and filter() return new arrays. Writing nums.map(...) alone changes nothing — save it: let x = nums.map(...).",
    "practice": "Make an array of prices [100, 250, 400, 150]. Use filter to keep prices under 200, then map to add 10% tax to each, and print the result.",
    "check": [
      "Which adds to the end? (a) push() (b) pop() (c) shift()",
      "What does map() return? (a) nothing (b) a new array (c) the same array changed",
      "What does [\"a\",\"b\"].join(\"-\") give? (a) \"a-b\" (b) [\"a-b\"] (c) \"ab\""
    ],
    "answer": "a; b; a"
  },
  {
    "title": "JavaScript dates",
    "outcomes": [
      "Make a Date object for now or for a specific date.",
      "Read parts of a date: year, month, day, hours.",
      "Show dates in a readable format."
    ],
    "concept": "The Date object handles time. new Date() means 'right now'. new Date(2026, 9, 9) means 9 October 2026 — careful, months start at 0, so 9 means October! getFullYear(), getMonth(), getDate(), getHours() read the parts. toDateString() gives a nice readable date.",
    "why": "Apps show dates everywhere — posts, bookings, birthdays. The Date object is how you work with time.",
    "syntax": "let now = new Date(); // right now",
    "examples": [
      [
        "Now and parts",
        "let now = new Date();\nconsole.log(now.getFullYear());\nconsole.log(now.getMonth());\nconsole.log(now.getDate());\nconsole.log(now.getHours());"
      ],
      [
        "A specific date",
        "let birthday = new Date(2010, 4, 15);\nconsole.log(birthday.toDateString());"
      ],
      [
        "Day of week",
        "let d = new Date();\nlet days = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\nconsole.log(days[d.getDay()]);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "new Date() with no input means this exact moment.",
      "Months are 0-based: 0 is January, 11 is December.",
      "getDate() is the day of the month; getDay() is the day of the week (0 = Sunday).",
      "Dates can be compared with > and < like numbers."
    ],
    "mistake": "Forgetting months start at 0: new Date(2026, 9, 9) is October, not September. This surprises every beginner once.",
    "practice": "Make a Date for your birthday, print it with toDateString(), and print how many years old you are by subtracting the year from the current year.",
    "check": [
      "What does new Date() give? (a) tomorrow (b) right now (c) yesterday",
      "In new Date(2026, 0, 1), what month is 0? (a) December (b) January (c) error",
      "Which gives the day of the month? (a) getDay() (b) getDate() (c) getMonth()"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript Math",
    "outcomes": [
      "Round numbers with Math.round(), Math.floor(), Math.ceil().",
      "Find min, max, and powers with Math.min(), Math.max(), Math.pow().",
      "Make random numbers with Math.random()."
    ],
    "concept": "Math is a built-in toolbox for numbers. Math.round(4.6) is 5, Math.floor(4.9) is 4 (always down), Math.ceil(4.1) is 5 (always up). Math.max(3, 9, 5) picks 9. Math.random() gives a decimal from 0 up to (but not including) 1 — perfect for games and luck.",
    "why": "Games need random numbers, shops need rounding, charts need min and max. Math does all of it.",
    "syntax": "Math.floor(Math.random() * 10) + 1; // 1 to 10",
    "examples": [
      [
        "Rounding trio",
        "console.log(Math.round(4.6));\nconsole.log(Math.floor(4.9));\nconsole.log(Math.ceil(4.1));"
      ],
      [
        "Min, max, power",
        "console.log(Math.max(3, 9, 5));\nconsole.log(Math.min(3, 9, 5));\nconsole.log(Math.pow(2, 3));\nconsole.log(Math.sqrt(16));"
      ],
      [
        "Random number 1-6",
        "let dice = Math.floor(Math.random() * 6) + 1;\nconsole.log(dice);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Math.random() never reaches 1 — it gives 0 to 0.999...",
      "Multiply by N and floor it to get 0 to N-1.",
      "Add 1 at the end to shift the range to 1 to N.",
      "Math is not a function — you never write Math()."
    ],
    "mistake": "Using Math.round() on random numbers for a range — the ends get half the chance. Use Math.floor(Math.random() * n) for fair ranges.",
    "practice": "Simulate a dice roll (1-6) three times and print each result. Then print the biggest of 12, 45, 23 with Math.max.",
    "check": [
      "What is Math.floor(4.9)? (a) 5 (b) 4 (c) 4.9",
      "What range does Math.random() give? (a) 0 to 1 including 1 (b) 0 up to but not including 1 (c) 1 to 10",
      "How do you get 1-10 randomly? (a) Math.random() * 10 (b) Math.floor(Math.random() * 10) + 1 (c) Math.round(Math.random())"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript booleans",
    "outcomes": [
      "Use true and false to store yes/no answers.",
      "Know which values count as falsy.",
      "Use booleans to control if statements."
    ],
    "concept": "A boolean is the simplest type: true or false — yes or no. Comparisons make booleans: 5 > 3 is true. Some values act as false in an if: 0, \"\" (empty text), null, undefined, and NaN are called falsy. Everything else is truthy.",
    "why": "Every decision in a program is a yes/no question. Booleans are the answers that drive if statements.",
    "syntax": "let isRaining = true; if (isRaining) { /* take umbrella */ }",
    "examples": [
      [
        "Boolean variables",
        "let isStudent = true;\nlet hasCar = false;\nconsole.log(isStudent);\nif (hasCar) {\n  console.log(\"Drive!\");\n} else {\n  console.log(\"Walk!\");\n}"
      ],
      [
        "Comparisons make booleans",
        "console.log(5 > 3);\nconsole.log(5 < 3);\nconsole.log(10 === 10);"
      ],
      [
        "Falsy values",
        "console.log(Boolean(0));\nconsole.log(Boolean(\"\"));\nconsole.log(Boolean(\"hello\"));\nconsole.log(Boolean(100));"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "true and false are written without quotes.",
      "Every comparison gives back a boolean.",
      "0, \"\", null, undefined, NaN are falsy — they act as false.",
      "Boolean(x) shows the true/false value of anything."
    ],
    "mistake": "Writing \"true\" with quotes — that is text, not a boolean! if (\"false\") is actually truthy because it is non-empty text. Never quote true/false.",
    "practice": "Make a boolean isWeekend. If true, print 'Relax day!', else print 'Work day!'. Then print Boolean(\"\") and Boolean(\"hi\").",
    "check": [
      "What values can a boolean hold? (a) yes/no text (b) true or false (c) 1 or 2",
      "Which is falsy? (a) 100 (b) \"hello\" (c) 0",
      "What is Boolean(\"false\")? (a) false (b) true (c) error"
    ],
    "answer": "b; c; b"
  },
  {
    "title": "JavaScript comparisons",
    "outcomes": [
      "Compare with ==, ===, !=, !==, >, <, >=, <=.",
      "Explain why === is safer than ==.",
      "Combine checks with &&, ||, and !."
    ],
    "concept": "Comparisons ask questions and answer true or false. === checks value AND type (5 === \"5\" is false), while == only checks value (5 == \"5\" is true) — which causes surprises, so always use ===. Logical operators join questions: && means 'both must be true', || means 'at least one', ! means 'not'.",
    "why": "Programs constantly ask: is the user old enough AND logged in? Is the password wrong OR empty? Comparisons plus logic answer these.",
    "syntax": "if (age >= 18 && hasTicket) { /* enter */ }",
    "examples": [
      [
        "=== vs ==",
        "console.log(5 === 5);\nconsole.log(5 === \"5\");\nconsole.log(5 == \"5\");\nconsole.log(5 !== \"5\");"
      ],
      [
        "All comparison signs",
        "console.log(10 > 5);\nconsole.log(10 < 5);\nconsole.log(10 >= 10);\nconsole.log(10 <= 9);"
      ],
      [
        "Logic operators",
        "let age = 20;\nlet hasTicket = true;\nconsole.log(age >= 18 && hasTicket);\nconsole.log(age < 18 || !hasTicket);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "=== is strict: type must match too.",
      "== converts types first — 5 == \"5\" is true, which surprises beginners.",
      "&& needs both sides true; || needs just one.",
      "! flips true to false and false to true."
    ],
    "mistake": "Using == instead of ===. 0 == \"\" is true, which is almost never what you want. Make === your habit.",
    "practice": "Make age = 16 and hasLicense = false. Print whether the person can drive (age >= 18 AND hasLicense). Then print whether they cannot drive using ! or ||.",
    "check": [
      "What is 5 === \"5\"? (a) true (b) false (c) error",
      "What does && need? (a) one side true (b) both sides true (c) both sides false",
      "What does !true give? (a) true (b) false (c) 0"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript switch",
    "outcomes": [
      "Replace a long if/else chain with switch.",
      "Use case, break, and default correctly.",
      "Know when switch is cleaner than if/else."
    ],
    "concept": "switch is a clean way to check one value against many options. You give the value once, then list cases: case 1 does this, case 2 does that. break stops after a match — without it, the code falls into the next case! default runs when nothing matches, like the else at the end.",
    "why": "Five else-ifs on the same variable are hard to read. switch shows the options in a neat list.",
    "syntax": "switch (day) { case 1: /* ... */ break; default: /* ... */ }",
    "examples": [
      [
        "Day name",
        "let day = 3;\nswitch (day) {\n  case 1:\n    console.log(\"Monday\");\n    break;\n  case 3:\n    console.log(\"Wednesday\");\n    break;\n  default:\n    console.log(\"Another day\");\n}"
      ],
      [
        "Grade message",
        "let grade = \"B\";\nswitch (grade) {\n  case \"A\":\n    console.log(\"Excellent!\");\n    break;\n  case \"B\":\n    console.log(\"Good!\");\n    break;\n  default:\n    console.log(\"Keep trying!\");\n}"
      ],
      [
        "Without break (fall-through)",
        "let x = 1;\nswitch (x) {\n  case 1:\n    console.log(\"one\");\n  case 2:\n    console.log(\"two\");\n}"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "switch checks one value against many cases.",
      "break stops the switch after a match.",
      "Without break, execution falls through to the next case.",
      "default is the backup plan when no case matches."
    ],
    "mistake": "Forgetting break — then two cases run instead of one. This is the classic switch bug. Add break to every case.",
    "practice": "Make a variable fruit = \"mango\". Use switch to print its color: mango → yellow, apple → red, grapes → green, anything else → unknown.",
    "check": [
      "What does break do in a switch? (a) stops the whole program (b) stops after the matched case (c) skips to default",
      "When does default run? (a) always (b) when no case matches (c) never",
      "What happens without break? (a) error (b) falls into the next case (c) nothing"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript break and continue",
    "outcomes": [
      "Stop a loop early with break.",
      "Skip one round with continue.",
      "Know which loop break exits in nested loops."
    ],
    "concept": "break is the emergency exit of a loop — it stops the loop right away. continue is the skip button — it jumps to the next round without finishing this one. Use break when you found what you were looking for; use continue when this item is not interesting.",
    "why": "Why check 1000 items when you found yours at number 7? break saves time. continue lets you skip bad items cleanly.",
    "syntax": "for (...) { if (found) break; } // stop\nfor (...) { if (skip) continue; } // skip",
    "examples": [
      [
        "break: stop when found",
        "let nums = [3, 7, 12, 9];\nfor (let n of nums) {\n  console.log(n);\n  if (n === 12) {\n    console.log(\"Found it!\");\n    break;\n  }\n}"
      ],
      [
        "continue: skip odds",
        "for (let i = 1; i <= 5; i++) {\n  if (i % 2 !== 0) {\n    continue;\n  }\n  console.log(i);\n}"
      ],
      [
        "break in while",
        "let i = 1;\nwhile (true) {\n  console.log(i);\n  if (i === 3) break;\n  i++;\n}"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "break exits the loop completely.",
      "continue jumps straight to the next round.",
      "Code after continue in the same round is skipped.",
      "break only exits the innermost loop it sits in."
    ],
    "mistake": "Using break when you meant continue — break kills the whole loop, continue only skips one round. Pick the right one.",
    "practice": "Loop from 1 to 10. Skip number 5 with continue, and stop the whole loop at 8 with break. Print what runs.",
    "check": [
      "What does break do in a loop? (a) skips one round (b) stops the loop fully (c) restarts the loop",
      "What does continue do? (a) stops the loop (b) jumps to the next round (c) pauses the loop",
      "In a nested loop, break exits? (a) all loops (b) only the innermost loop (c) the outer loop"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript typeof",
    "outcomes": [
      "Check any value's type with typeof.",
      "Know typeof's tricky answers: null, arrays, NaN.",
      "Use typeof to guard against wrong types."
    ],
    "concept": "typeof tells you the type of a value: typeof \"Ali\" is \"string\", typeof 12 is \"number\". But it has quirks: typeof null is \"object\" (a famous old bug), typeof [] is also \"object\", and typeof NaN is \"number\". For arrays, use Array.isArray() instead.",
    "why": "When data comes from users or the internet, its type is a surprise. typeof lets you check before you trust.",
    "syntax": "typeof 42; // \"number\"",
    "examples": [
      [
        "Basic checks",
        "console.log(typeof \"Ali\");\nconsole.log(typeof 12);\nconsole.log(typeof true);\nconsole.log(typeof undefined);"
      ],
      [
        "Tricky answers",
        "console.log(typeof null);\nconsole.log(typeof [1, 2]);\nconsole.log(typeof NaN);\nconsole.log(typeof function(){});"
      ],
      [
        "Guard example",
        "function double(x) {\n  if (typeof x !== \"number\") {\n    return \"Give me a number!\";\n  }\n  return x * 2;\n}\nconsole.log(double(5));\nconsole.log(double(\"hi\"));"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "typeof always returns a string like \"number\" or \"string\".",
      "typeof null is \"object\" — a well-known JavaScript quirk.",
      "Arrays are \"object\" too — use Array.isArray() for them.",
      "Use typeof in an if to protect functions from wrong input."
    ],
    "mistake": "Trusting typeof null — it says \"object\", not \"null\". If null matters to you, check x === null directly.",
    "practice": "Write a function that takes one value. If typeof says it is a string, print its length; otherwise print 'Not text!'.",
    "check": [
      "What is typeof \"hello\"? (a) text (b) \"string\" (c) string without quotes",
      "What is typeof null? (a) \"null\" (b) \"object\" (c) \"undefined\"",
      "How do you check for an array? (a) typeof x === \"array\" (b) Array.isArray(x) (c) typeof x === \"object\""
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript type conversion",
    "outcomes": [
      "Convert between strings, numbers, and booleans on purpose.",
      "Know when JavaScript converts types by itself.",
      "Avoid surprise results from automatic conversion."
    ],
    "concept": "Type conversion means changing a value's type. You can do it yourself: Number(\"42\") is 42, String(42) is \"42\", Boolean(1) is true. But JavaScript also converts automatically: \"5\" + 2 joins text (\"52\"), while \"5\" - 2 does math (3). The + sign is the troublemaker — with text around, it joins instead of adding.",
    "why": "Form input is always text. Math needs numbers. Conversion is the bridge between what the user types and what the program calculates.",
    "syntax": "Number(\"42\"); // 42\nString(42); // \"42\"\nBoolean(0); // false",
    "examples": [
      [
        "Manual conversion",
        "console.log(Number(\"42\"));\nconsole.log(String(42));\nconsole.log(Boolean(1));\nconsole.log(Boolean(0));"
      ],
      [
        "Automatic conversion",
        "console.log(\"5\" + 2);\nconsole.log(\"5\" - 2);\nconsole.log(\"5\" * \"2\");\nconsole.log(true + 1);"
      ],
      [
        "Safe adding",
        "let a = \"10\";\nlet b = \"20\";\nconsole.log(a + b);\nconsole.log(Number(a) + Number(b));"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Number(), String(), Boolean() convert on purpose.",
      "+ with text joins; -, *, / with text do math.",
      "true becomes 1 and false becomes 0 in math.",
      "Empty text \"\" becomes 0 with Number(), and false with Boolean()."
    ],
    "mistake": "Letting + surprise you: \"5\" + 2 is \"52\", not 7. When adding user input, convert to Number first.",
    "practice": "Make price = \"250\" and qty = \"4\" (both text). Convert both and print the total bill. Then print what price + qty gives without converting.",
    "check": [
      "What is Number(\"42\")? (a) \"42\" (b) 42 (c) NaN",
      "What is \"5\" + 2? (a) 7 (b) \"52\" (c) error",
      "What is \"5\" - 2? (a) 3 (b) \"52\" (c) \"3\""
    ],
    "answer": "b; b; a"
  },
  {
    "title": "JavaScript scope",
    "outcomes": [
      "Explain global vs local (function) scope.",
      "Use block scope with let and const.",
      "Avoid accidentally making global variables."
    ],
    "concept": "Scope means 'where can this variable be seen?' A variable made outside all functions is global — everyone can see it. A variable made inside a function is local — only that function can see it. With let and const, a variable made inside { } blocks (like an if) is locked inside that block too.",
    "why": "Two parts of a program using the same variable name causes chaos. Scope keeps each part's variables private and safe.",
    "syntax": "let globalVar = \"everyone sees me\";\nfunction test() { let local = \"only I see me\"; }",
    "examples": [
      [
        "Global vs local",
        "let city = \"Lahore\";\nfunction show() {\n  let street = \"Main Road\";\n  console.log(city);\n  console.log(street);\n}\nshow();\nconsole.log(city);\n// console.log(street); // error!"
      ],
      [
        "Block scope",
        "if (true) {\n  let x = 10;\n  const y = 20;\n  console.log(x + y);\n}\n// console.log(x); // error!"
      ],
      [
        "var has no block scope",
        "if (true) {\n  var old = \"I escape!\";\n}\nconsole.log(old);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Global variables are visible everywhere.",
      "Function variables die when the function ends.",
      "let and const are block-scoped: { } keeps them inside.",
      "var ignores blocks — that is why modern code uses let/const."
    ],
    "mistake": "Forgetting let/const: x = 5 without any keyword makes a global variable by accident. Always declare with let or const.",
    "practice": "Make a global variable 'game'. Inside a function, make a local variable 'level' and print both. Then try printing 'level' outside — see the error and understand why.",
    "check": [
      "Where is a global variable visible? (a) only in one function (b) everywhere (c) nowhere",
      "What happens to a function variable after the function ends? (a) it stays (b) it is gone (c) it becomes global",
      "Which keyword is block-scoped? (a) var (b) let (c) none"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript arrow functions",
    "outcomes": [
      "Write functions with the => syntax.",
      "Use the short forms: no brackets, no return.",
      "Know when arrow functions are handy (callbacks)."
    ],
    "concept": "Arrow functions are a short way to write functions: (a, b) => a + b does the same as a full function with return. With one parameter, you can drop the brackets: x => x * 2. With one line, you can drop { } and return — the result is returned automatically. They shine as short callbacks inside map(), filter(), and event listeners.",
    "why": "Modern JavaScript is full of short callbacks. Arrows make them one-liners instead of five-liners.",
    "syntax": "const add = (a, b) => a + b;",
    "examples": [
      [
        "Basic arrow",
        "const add = (a, b) => {\n  return a + b;\n};\nconsole.log(add(3, 4));"
      ],
      [
        "Short forms",
        "const double = x => x * 2;\nconst greet = () => \"Hello!\";\nconsole.log(double(6));\nconsole.log(greet());"
      ],
      [
        "Arrows as callbacks",
        "let nums = [1, 2, 3, 4];\nlet evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "=> replaces the word function.",
      "One parameter needs no brackets; zero or many need ().",
      "One-line bodies return automatically — no return needed.",
      "Arrows are perfect for short callbacks in map/filter/forEach."
    ],
    "mistake": "Using arrows for object methods that need 'this' — arrows do not get their own 'this'. For methods, use the normal function style.",
    "practice": "Rewrite these as arrows: a function that triples a number, and a filter that keeps numbers bigger than 10 from [5, 15, 8, 20].",
    "check": [
      "What does x => x * 2 do? (a) nothing (b) returns double of x (c) causes an error",
      "When can you drop the return? (a) never (b) with a one-line body (c) always",
      "Where are arrows most handy? (a) long programs (b) short callbacks (c) HTML files"
    ],
    "answer": "b; b; b"
  },
  {
    "title": "JavaScript classes",
    "outcomes": [
      "Make a class with a constructor.",
      "Create objects from a class with new.",
      "Add methods to a class."
    ],
    "concept": "A class is a blueprint for making many similar objects. class Car { constructor(brand) { this.brand = brand; } } is the blueprint; let c = new Car(\"Honda\") builds one real car from it. Methods written in the class work on every object made from it. Classes keep the blueprint in one place instead of copying object code again and again.",
    "why": "Games have many enemies, shops have many products — all similar but slightly different. Classes build them from one blueprint.",
    "syntax": "class Car { constructor(brand) { this.brand = brand; } }",
    "examples": [
      [
        "First class",
        "class Student {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\nlet s1 = new Student(\"Ali\", 12);\nconsole.log(s1.name);\nconsole.log(s1.age);"
      ],
      [
        "Class with method",
        "class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n  bark() {\n    return this.name + \" says woof!\";\n  }\n}\nlet d = new Dog(\"Tommy\");\nconsole.log(d.bark());"
      ],
      [
        "Many objects, one blueprint",
        "class Book {\n  constructor(title) {\n    this.title = title;\n  }\n}\nlet b1 = new Book(\"Harry Potter\");\nlet b2 = new Book(\"Atomic Habits\");\nconsole.log(b1.title);\nconsole.log(b2.title);"
      ]
    ],
    "language": "JavaScript",
    "explain": [
      "Class names start with a capital letter by convention.",
      "constructor() runs automatically when you write new.",
      "this inside the class means the object being built.",
      "Every new object gets its own copy of the values."
    ],
    "mistake": "Forgetting new: Student(\"Ali\", 12) without new gives an error. new is what actually builds the object.",
    "practice": "Make a 'Phone' class with brand and price, plus a method 'info' that returns 'Brand costs Rs Price'. Make two phones and print their info.",
    "check": [
      "What is a class? (a) a blueprint for objects (b) a type of loop (c) a CSS style",
      "What runs when you write new? (a) nothing (b) the constructor (c) the method",
      "What does 'this' mean in a class? (a) the class itself (b) the object being built (c) the browser"
    ],
    "answer": "a; b; b"
  }
];
