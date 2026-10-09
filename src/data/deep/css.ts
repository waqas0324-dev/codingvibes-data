export const cssDeepLessons: Record<number, any> = [
  {
    "title": "CSS syntax & selectors",
    "outcomes": [
      "Understand the structure of a CSS rule: selector, property, and value.",
      "Target elements with tag, class (.), and id (#) selectors.",
      "Apply your first style to an HTML page and see the result."
    ],
    "concept": "Think of HTML as the frame of a house — walls and doors. CSS is the paint. Every CSS rule has three parts: the selector says WHICH thing to style, the property says WHAT to change (like color), and the value says HOW to change it (like blue).",
    "why": "Without CSS, every website would look like a plain black-and-white book. CSS is what makes a page colorful, beautiful, and professional.",
    "syntax": "selector { property: value; }",
    "examples": [
      [
        "Color all paragraphs with a tag selector",
        `<style>
p {
  color: blue;
}
</style>
<p>Ye line neeli nazar aayegi.</p>
<p>Ye wali bhi neeli hogi.</p>`
      ],
      [
        "Class selector — one special group only",
        `<style>
.red {
  color: red;
}
</style>
<p class="red">Ye line laal hogi.</p>
<p>Ye wali kaali hi rahegi.</p>`
      ],
      [
        "ID selector — one special element only",
        `<style>
#top-heading {
  color: green;
}
</style>
<h1 id="top-heading">Ye hari heading hai.</h1>`
      ]
    ],
    "language": "CSS",
    "mistake": "Forgetting the dot (.) before a class name — `red { color: red; }` will do nothing; the correct way is `.red`. And do not forget the semicolon (;) at the end of every line.",
    "practice": "Make a page with 3 paragraphs. Give two paragraphs class=\"friend\" and color them purple — leave the third paragraph black.",
    "check": [
      {
        "question": "What does the selector do in a CSS rule?",
        "options": [
          "It says which element gets the style",
          "It says what the page title is",
          "It says where the file is saved",
          "It says which browser is being used"
        ]
      },
      {
        "question": "How do you write a class selector?",
        "options": [
          ".name",
          "#name",
          "*name",
          "@name"
        ]
      },
      {
        "question": "What must you put at the end of every CSS declaration?",
        "options": [
          "semicolon (;)",
          "comma (,)",
          "full stop (.)",
          "colon (:)"
        ]
      }
    ]
  },
  {
    "title": "Colors, units & typography",
    "outcomes": [
      "Set colors in three ways: name, hex code, and rgb.",
      "Use the px unit correctly for font sizes.",
      "Give text a beautiful font, size, and alignment."
    ],
    "concept": "There are three easy ways to tell the computer a color: by name (red), by hex code (#ff0000), or by rgb (rgb(255,0,0)) — all three mean red. For sizes, px is used (the tiny dots on the screen), and typography means setting the style and size of your text.",
    "why": "Color and text are the identity of a page. Without the right colors and clean fonts, a user will not stay on the page for even 5 seconds.",
    "syntax": "color: red | #ff0000 | rgb(255,0,0); · font-size: 20px;",
    "examples": [
      [
        "Three ways to set a color",
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
        "Font size and family",
        `<style>
h1 {
  font-size: 32px;
  font-family: Arial, sans-serif;
}
</style>
<h1>Bari aur saaf heading</h1>`
      ],
      [
        "Bold and centered text",
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
    "mistake": "Writing only the number and forgetting the unit — `font-size: 20;` will not work. Always add a unit: `font-size: 20px;`. You must write px, %, or em.",
    "practice": "Write a quote you like: give it a color with a hex code, set font-size to 24px, and center the text.",
    "check": [
      {
        "question": "What does a hex color code start with?",
        "options": [
          "# (hash)",
          "$ (dollar)",
          "@ (at sign)",
          "& (ampersand)"
        ]
      },
      {
        "question": "What does rgb(255, 0, 0) mean?",
        "options": [
          "full red, zero green, zero blue",
          "full blue color",
          "black color",
          "white color"
        ]
      },
      {
        "question": "Why does font-size: 20; not work?",
        "options": [
          "because the unit (px) is missing",
          "because 20 is too big a number",
          "because font-size is the wrong property",
          "because the browser is broken"
        ]
      }
    ]
  },
  {
    "title": "The box model",
    "outcomes": [
      "Understand the 4 layers of the box model: content, padding, border, margin.",
      "Add space inside with padding and outside with margin.",
      "Control the total size of a box with box-sizing."
    ],
    "concept": "Every HTML element is like a box. Inside is the item (content), then soft padding, then the box wall (border), and outside is the air gap (margin). These 4 layers together are called the box model.",
    "why": "When two things stick together or a box looks bigger than you thought, 90% of the time the problem is the box model. Understand this and half of your layout problems will solve themselves.",
    "syntax": "margin → border → padding → content (bahar se andar)",
    "examples": [
      [
        "The 4 layers of the box model",
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
        "Exact size with box-sizing",
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
    "mistake": "The box grows when you add padding — `width: 200px` + `padding: 20px` makes a 240px box. If you want an exact size, use `box-sizing: border-box;`, then the padding adjusts inside.",
    "practice": "Make a box: width 300px, padding 20px, a 2px blue border, and 40px margin. Then add `box-sizing: border-box` and see the difference yourself.",
    "check": [
      {
        "question": "Which is the innermost layer of the box model?",
        "options": [
          "content",
          "margin",
          "border",
          "padding"
        ]
      },
      {
        "question": "What does margin do?",
        "options": [
          "keeps space between the box and other elements",
          "gives space to text inside the box",
          "makes the box wall",
          "changes the box color"
        ]
      },
      {
        "question": "What does box-sizing: border-box do?",
        "options": [
          "counts padding and border inside the width",
          "makes the box disappear",
          "sets margin to zero",
          "makes text bigger"
        ]
      }
    ]
  },
  {
    "title": "Display & positioning",
    "outcomes": [
      "Understand the difference between block and inline display.",
      "Put elements in one line with display.",
      "Stick an element anywhere on the screen with position."
    ],
    "concept": "display says whether an element sits in a line or takes the whole line — like one person on a chair (inline) versus a full sofa (block). position says whether an element stays in its place or can be stuck anywhere on the screen.",
    "why": "Putting a menu in one line or sticking a Help button in the corner of the screen — both are impossible without display and position.",
    "syntax": "display: block | inline | inline-block · position: static | relative | absolute | fixed",
    "examples": [
      [
        "Menu links in one line",
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
        "Fixed button in the screen corner",
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
    "mistake": "You set absolute position but forgot to give the parent `position: relative` — so the element jumps to the corner of the whole screen instead of its parent. For an absolute child, the parent must be relative.",
    "practice": "Make a menu with 4 links in one line (with display: inline). Then fix a button in the bottom-right corner of the screen.",
    "check": [
      {
        "question": "What does display: inline do?",
        "options": [
          "the element takes only its content's space, the next item sits beside it",
          "the element takes the full line",
          "the element disappears",
          "the element goes to the screen corner"
        ]
      },
      {
        "question": "What does position: fixed do?",
        "options": [
          "the element stays stuck on the screen even when you scroll",
          "it makes the element relative",
          "it centers the element",
          "it changes the element's color"
        ]
      },
      {
        "question": "What should the parent of an absolutely positioned child be?",
        "options": [
          "position: relative",
          "display: none",
          "color: red",
          "nothing special"
        ]
      }
    ]
  },
  {
    "title": "Flexbox layouts",
    "outcomes": [
      "Arrange items in one line with display: flex.",
      "Align left-right with justify-content and up-down with align-items.",
      "Build a simple navbar or a centered layout."
    ],
    "concept": "Flexbox is a magic box: the things inside it arrange themselves in one line — with equal spacing, in the center, or at the edges. Like books arranging themselves neatly on a shelf. You only have to tell the parent `display: flex`.",
    "why": "Navbar, a row of buttons, a line of cards — every modern website's layout stands on flexbox. Without it, lining things up straight was very hard work.",
    "syntax": "display: flex; · justify-content (left-right) · align-items (up-down)",
    "examples": [
      [
        "Three boxes in one line",
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
        "A box exactly in the center",
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
    "mistake": "Writing only `justify-content: center` and forgetting `display: flex` — flexbox properties only work when the parent has `display: flex`. Turn flex on first, then align.",
    "practice": "Make a navbar: logo on the left and 3 links on the right — with flexbox (hint: use justify-content: space-between).",
    "check": [
      {
        "question": "What must you set on the parent to start flexbox?",
        "options": [
          "display: flex",
          "display: block",
          "position: flex",
          "flex: on"
        ]
      },
      {
        "question": "What does justify-content: center do?",
        "options": [
          "centers items left-to-right",
          "centers items top-to-bottom",
          "changes the items' color",
          "makes the items smaller"
        ]
      },
      {
        "question": "What does the gap property do?",
        "options": [
          "keeps equal space between flex items",
          "sets the box color",
          "changes text size",
          "sets border thickness"
        ]
      }
    ]
  },
  {
    "title": "CSS Grid",
    "outcomes": [
      "Build a rows-and-columns layout with display: grid.",
      "Set column sizes with grid-template-columns.",
      "Use the fr unit and gap correctly."
    ],
    "concept": "Grid is a net — it divides the page into straight boxes of rows and columns, like the grid page of a notebook. Flexbox handles one line, while grid builds a full 2D layout like a table.",
    "why": "A photo gallery, a dashboard, or a 3-column page — grid builds these layouts in just 3-4 lines, which used to be very hard.",
    "syntax": "display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;",
    "examples": [
      [
        "3-column grid",
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
        "One big column, one small column",
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
    "mistake": "Putting grid properties (like grid-template-columns) on the items — they always go on the PARENT (container). Putting them on items does nothing.",
    "practice": "Make a gallery of 4 photos: 2 columns with a 10px gap between them.",
    "check": [
      {
        "question": "What does grid-template-columns: 1fr 1fr mean?",
        "options": [
          "two equal columns",
          "only one column",
          "two rows",
          "no columns"
        ]
      },
      {
        "question": "Where do grid properties go?",
        "options": [
          "on the parent container",
          "on each item separately",
          "always on the body",
          "outside the style tag"
        ]
      },
      {
        "question": "What does the fr unit mean?",
        "options": [
          "a share of the available space",
          "a fixed pixel size",
          "the font size",
          "a color code"
        ]
      }
    ]
  },
  {
    "title": "Responsive design",
    "outcomes": [
      "Change styles based on screen size with a media query.",
      "Use flexible sizes instead of fixed px.",
      "Stop your site from breaking on mobile."
    ],
    "concept": "Responsive design means: the website looks good on every screen — a big computer or a small mobile. The trick is to use flexible sizes instead of fixed pixels, and use a media query to say: ‘if the screen is small, change the layout’.",
    "why": "Today most people open websites on mobile. If a site looks broken on mobile, the user never comes back.",
    "syntax": "@media (max-width: 600px) { ... }",
    "examples": [
      [
        "Change color and padding on mobile",
        `<style>
.box { background: lightblue; padding: 30px; }
@media (max-width: 600px) {
  .box { background: lightgreen; padding: 15px; }
}
</style>
<div class="box">Screen chhoti karo, rang badlega!</div>`
      ],
      [
        "Keep images inside the screen",
        `<style>
img { max-width: 100%; }
</style>
<img src="photo.jpg" alt="Meri photo">`
      ]
    ],
    "language": "CSS",
    "mistake": "Giving everything a fixed px width, like `width: 1200px` — on a mobile (380px) the page will get cut off from the side. Give widths in % or use max-width so nothing goes outside the screen.",
    "practice": "Make a heading that is 40px on desktop but becomes 24px on mobile (screens under 600px) — with a media query.",
    "check": [
      {
        "question": "What does @media (max-width: 600px) mean?",
        "options": [
          "these styles apply only on screens 600px or smaller",
          "these styles apply only on big screens",
          "set the screen width to 600px",
          "load 600 images"
        ]
      },
      {
        "question": "What will stop an image from getting cut on mobile?",
        "options": [
          "max-width: 100%",
          "width: 2000px",
          "display: none",
          "position: fixed"
        ]
      },
      {
        "question": "Why is responsive design important?",
        "options": [
          "so the site looks right on both mobile and desktop",
          "so the site changes colors fast",
          "so more ads can be placed",
          "no special reason"
        ]
      }
    ]
  },
  {
    "title": "Transitions & transforms",
    "outcomes": [
      "Add a smooth change with transition.",
      "Rotate, grow-shrink, and move elements with transform.",
      "Build premium-feeling hover effects."
    ],
    "concept": "Transition means a smooth change — when you move the mouse over a button, the color changes slowly instead of all at once. Transform means moving things: rotating (rotate), making bigger or smaller (scale), or sliding left and right (translate).",
    "why": "Smooth movements make a website feel alive and premium. A change that happens all at once looks cheap and stiff.",
    "syntax": "transition: property time; · transform: scale(1.2) | rotate(10deg)",
    "examples": [
      [
        "Smooth color on hover",
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
        "Bigger button on hover",
        `<style>
.zoom { transition: transform 0.3s; }
.zoom:hover { transform: scale(1.2); }
</style>
<button class="zoom">Bara ho jaunga!</button>`
      ]
    ],
    "language": "CSS",
    "mistake": "Writing transition only in the `:hover` state — transition belongs on the NORMAL state (like `.btn`), so the smoothness works both ways. If you put it on hover, you will get a jerk when the mouse leaves.",
    "practice": "Make a card that lifts up a little on hover (translateY(-10px)) and its shadow (box-shadow) appears smoothly.",
    "check": [
      {
        "question": "What does transition: background 0.3s mean?",
        "options": [
          "the background color changes smoothly in 0.3 seconds",
          "the page closes after 0.3 seconds",
          "the background disappears forever",
          "the color changes in 3 seconds"
        ]
      },
      {
        "question": "What does transform: scale(1.2) do?",
        "options": [
          "makes the element 20% bigger",
          "rotates the element",
          "changes the element's color",
          "makes the element disappear"
        ]
      },
      {
        "question": "Where should you put transition?",
        "options": [
          "on the normal state, not on hover",
          "only on the hover state",
          "on the body",
          "anywhere, it makes no difference"
        ]
      }
    ]
  },
  {
    "title": "Animations",
    "outcomes": [
      "Write animation scenes with @keyframes.",
      "Run it on an element with the animation property.",
      "Build infinite-loop movements."
    ],
    "concept": "Animation means movement that plays by itself — without the mouse. In @keyframes you write the scenes of a film (what happens at the start, in the middle, at the end), and then say ‘play this film on this element’.",
    "why": "A loading spinner, a sliding banner, a beating heart — these are all animations. Without them, modern websites feel incomplete.",
    "syntax": "@keyframes naam { from {...} to {...} } · animation: naam time infinite;",
    "examples": [
      [
        "Beating heart",
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
        "Sliding box",
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
    "mistake": "You made @keyframes but forgot to put the `animation` property on the element — the film is made but never played. You need both: keyframes AND the animation property on the element.",
    "practice": "Make a circle that keeps rotating 360 degrees (use rotate, 2s time, infinite loop).",
    "check": [
      {
        "question": "What does @keyframes do?",
        "options": [
          "defines animation scenes (start, middle, end)",
          "chooses a color",
          "selects a font",
          "writes the page title"
        ]
      },
      {
        "question": "In ‘animation: beat 1s infinite’, what does ‘infinite’ mean?",
        "options": [
          "the animation keeps repeating",
          "the animation ends in 1 second",
          "the animation never starts",
          "the animation plays only once"
        ]
      },
      {
        "question": "What is needed to run an animation?",
        "options": [
          "@keyframes AND the animation property on the element",
          "only @keyframes is enough",
          "only transition is enough",
          "nothing, it plays by itself"
        ]
      }
    ]
  },
  {
    "title": "Forms & UI states",
    "outcomes": [
      "Make inputs and buttons beautiful with padding, border, and radius.",
      "Give forms a responsive feel with :hover and :focus states.",
      "Understand the basic rules of a user-friendly form."
    ],
    "concept": "A form is where the user talks to you — types a name, presses a button. UI states tell you what condition an element is in: the mouse is on it (:hover), someone is typing in it (:focus), or it is turned off (:disabled).",
    "why": "A form that looks clean and responds to touch (highlight on focus, button shines on hover) makes the user trust it with their data. A user runs away from a bad form.",
    "syntax": "input:focus { ... } · button:hover { ... } · button:disabled { ... }",
    "examples": [
      [
        "Beautiful input",
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
        "Button with hover",
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
    "mistake": "Leaving the input with no padding and border — you get a squeezed, ugly box. Always add padding, round the corners with border-radius, and never remove the focus outline (keyboard users need it).",
    "practice": "Make a small login form: email input + password input + button. Border turns blue on focus, button gets darker on hover.",
    "check": [
      {
        "question": "What does :focus mean?",
        "options": [
          "the user clicked the element and is typing in it",
          "the page is loading",
          "the mouse is away from the element",
          "the form is submitted"
        ]
      },
      {
        "question": "Why do we put cursor: pointer on a button?",
        "options": [
          "so the mouse becomes a hand and shows it can be clicked",
          "to make the button faster",
          "to change the button color",
          "it has no benefit"
        ]
      },
      {
        "question": "What should you give an input first to make it look good?",
        "options": [
          "padding and a clean border",
          "a very big font size",
          "a black background",
          "nothing"
        ]
      }
    ]
  },
  {
    "title": "Component styling",
    "outcomes": [
      "Build a reusable component class (like a card).",
      "Save time by using one class in many places.",
      "Style parts inside the component with small classes."
    ],
    "concept": "A component is a ready-made, reusable piece — design one card, then put the same class in 10 places and get 10 cards. Write the style once, use it everywhere. This is the professional way.",
    "why": "If you style every card separately, 50 cards means 50 designs, and one small change means visiting 50 places. In a component, change one place and it changes everywhere.",
    "syntax": ".card { ... } · .card-title { ... } · .card-btn { ... }",
    "examples": [
      [
        "A reusable card",
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
        "Button inside the card",
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
    "mistake": "Making a new class for every card (card1, card2, card3) — this is the biggest mistake. Make one `.card` class and use it everywhere; if you need differences inside, use small classes (like .card-title).",
    "practice": "Make a product card component (name, price, button). Then make cards for 3 different products with the same class — do not write the style again.",
    "check": [
      {
        "question": "What is the biggest benefit of component styling?",
        "options": [
          "write once, use everywhere — changes happen in one place",
          "you have to write more code",
          "the page becomes slow",
          "no benefit"
        ]
      },
      {
        "question": "What is the right way for three cards?",
        "options": [
          "put one .card class on all three",
          "make separate classes card1, card2, card3",
          "write inline style on each card",
          "give no style at all"
        ]
      },
      {
        "question": "How do you style the button inside the card differently?",
        "options": [
          "make a small class like .card-btn",
          "write the whole .card class again",
          "change the button tag name",
          "remove the style tag"
        ]
      }
    ]
  },
  {
    "title": "CSS project",
    "outcomes": [
      "Plan the project on paper before writing code.",
      "Combine selectors, box model, flexbox, and colors in one page.",
      "Test your work on a mobile screen to finish."
    ],
    "concept": "Now it is time to join everything — combine selectors, colors, box model, flexbox, and a little animation into one full mini page. A project is the real place to learn: here you make decisions, make mistakes, and fix them yourself.",
    "why": "Separate lessons are remembered, but until you join them in one project, no skill is built. This project can also become your first portfolio piece.",
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
    "mistake": "Starting to write code with no plan — then getting stuck in the middle. First sketch on paper where everything will go, then write the HTML, then add the CSS piece by piece.",
    "practice": "Make a personal profile card page: name, one line of intro, and 3 skill badges. Center it on the page with flexbox and test it on mobile.",
    "check": [
      {
        "question": "What should you do first before starting a project?",
        "options": [
          "sketch the layout and plan on paper",
          "write animation directly",
          "only choose colors",
          "nothing, start writing code"
        ]
      },
      {
        "question": "What does box-shadow: 0 4px 10px gray mean?",
        "options": [
          "a light shadow under the card",
          "make the card gray",
          "the card will move 4px",
          "the text color will be gray"
        ]
      },
      {
        "question": "After the project is done, what must you check?",
        "options": [
          "how it looks on a mobile screen",
          "look only on desktop",
          "how long the code is",
          "no need to check anything"
        ]
      }
    ]
  },
  {
    "title": "How to add CSS",
    "outcomes": [
      "Add CSS in three ways: inline, internal, and external.",
      "Link an external stylesheet with the <link> tag.",
      "Choose the right method for a small test or a big project."
    ],
    "concept": "CSS can live in three places. Inline CSS goes inside a single tag with the style attribute. Internal CSS goes in a <style> block inside the <head>. External CSS lives in a separate .css file and is linked to the page. If two rules fight, inline wins first, then internal, then external.",
    "why": "Knowing all three methods lets you test a style in seconds and also build big projects the clean way. Every professional project uses an external stylesheet.",
    "syntax": "<p style=\"color:red;\"> ... <style> ... </style> ... <link rel=\"stylesheet\" href=\"style.css\">",
    "examples": [
      [
        "Inline CSS - style one tag only",
        `<p style="color: red;">Only this line is red.</p>
<p>This line is not red.</p>`
      ],
      [
        "Internal CSS - style the whole page",
        `<style>
h1 { color: blue; }
p { font-size: 18px; }
</style>
<h1>Blue heading</h1>
<p>Bigger text on the whole page.</p>`
      ],
      [
        "External CSS - linked file",
        `<style>
/* In the HTML head: <link rel="stylesheet" href="style.css"> */
/* In style.css: */
body { background: lightyellow; }
h1 { color: green; }
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Using inline styles everywhere. It works, but when your site grows you will repeat the same style 100 times. Use an external file for real projects.",
    "practice": "Make a file called style.css, set all h1 headings to green in it, then link it to a test page with the <link> tag.",
    "check": [
      {
        "question": "Which tag links an external stylesheet to a page?",
        "options": ["<link>", "<style>", "<css>", "<script>"]
      },
      {
        "question": "Where does internal CSS go?",
        "options": [
          "in a <style> block inside the <head>",
          "inside the <body> only",
          "in a separate .js file",
          "nowhere, it does not exist"
        ]
      },
      {
        "question": "Which CSS method wins if all three target the same element?",
        "options": ["inline style", "external file", "internal style", "none of them"]
      }
    ]
  },
  {
    "title": "Comments",
    "outcomes": [
      "Write single-line and multi-line CSS comments.",
      "Use comments to label sections of a stylesheet.",
      "Temporarily disable a rule while testing."
    ],
    "concept": "A comment is a note you leave for yourself inside the code. The browser ignores it completely. In CSS a comment starts with /* and ends with */. Use comments to mark sections like header styles or footer styles, so you can find them later.",
    "why": "Real stylesheets are hundreds of lines long. Comments are the signposts that stop you getting lost in your own code.",
    "syntax": "/* this is a comment */",
    "examples": [
      [
        "Single-line comment",
        `<style>
/* Main heading color */
h1 {
  color: blue;
}
</style>`
      ],
      [
        "Multi-line comment",
        `<style>
/*
  Section: navigation bar
  Used on every page
*/
.nav {
  background: black;
}
</style>`
      ],
      [
        "Disable a rule while testing",
        `<style>
p {
  color: black;
  /* font-size: 30px; */
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Trying to nest comments like /* outer /* inner */ */. CSS does not allow this. The first */ ends the comment, and everything after it breaks.",
    "practice": "Open any stylesheet you made before and add section comments above the heading styles, paragraph styles, and button styles.",
    "check": [
      {
        "question": "How does a CSS comment start and end?",
        "options": ["/* and */", "// and //", "<!-- and -->", "# and #"]
      },
      {
        "question": "What does the browser do with a comment?",
        "options": [
          "it ignores it completely",
          "it shows it on the page",
          "it runs it as code",
          "it deletes it from the file"
        ]
      },
      {
        "question": "Can you nest comments inside comments?",
        "options": [
          "no, the first */ ends the comment",
          "yes, as many as you like",
          "only two levels deep",
          "only in external files"
        ]
      }
    ]
  },
  {
    "title": "Backgrounds",
    "outcomes": [
      "Set a background color for any element.",
      "Add a background image and control its repeat and position.",
      "Use the background shorthand property."
    ],
    "concept": "Every element can have a background. The simplest background is a color. You can also put an image behind the content, then decide if it repeats like tiles, and where it sits. The background shorthand lets you write all of this in one line.",
    "why": "Backgrounds give a page its mood. A hero section with a photo background looks ten times more professional than plain white.",
    "syntax": "background: color image repeat position;",
    "examples": [
      [
        "Background color",
        `<style>
body {
  background-color: lightblue;
}
.box {
  background-color: yellow;
}
</style>`
      ],
      [
        "Background image, no repeat",
        `<style>
.hero {
  background-image: url("photo.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
</style>`
      ],
      [
        "Background shorthand",
        `<style>
.card {
  background: lightgreen url("pattern.png") no-repeat center;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Setting a background image with light text on top of it. Always check that the text is still readable over the image.",
    "practice": "Make a hero box 300px tall with a background image that does not repeat and sits in the center. Put a heading on top of it.",
    "check": [
      {
        "question": "Which value stops a background image from repeating?",
        "options": ["no-repeat", "repeat-x", "repeat", "fixed"]
      },
      {
        "question": "How do you set a background image?",
        "options": [
          "background-image: url(\"photo.jpg\");",
          "image: photo.jpg;",
          "background: photo.jpg;",
          "src: photo.jpg;"
        ]
      },
      {
        "question": "What does background-position: center do?",
        "options": [
          "places the image in the middle of the element",
          "centers the text",
          "makes the image bigger",
          "removes the image"
        ]
      }
    ]
  },
  {
    "title": "Borders",
    "outcomes": [
      "Add borders with style, width, and color.",
      "Style each side of a box separately.",
      "Make rounded corners with border-radius."
    ],
    "concept": "A border is the frame around an element. You control three things: the style (solid, dashed, dotted, double), the width, and the color. The border shorthand sets all three at once. With border-radius you can round the corners, even into a full circle.",
    "why": "Borders turn plain boxes into cards, buttons, and frames. Almost every UI component you see uses a border or rounded corners.",
    "syntax": "border: 2px solid black; · border-radius: 10px;",
    "examples": [
      [
        "Border styles",
        `<style>
.solid { border: 3px solid black; }
.dashed { border: 3px dashed red; }
.dotted { border: 3px dotted blue; }
</style>`
      ],
      [
        "One side only",
        `<style>
.note {
  border-left: 5px solid orange;
  padding-left: 10px;
}
</style>
<p class="note">Important note.</p>`
      ],
      [
        "Rounded corners and circle",
        `<style>
.card { border: 2px solid gray; border-radius: 12px; }
.dot { width: 60px; height: 60px; background: red; border-radius: 50%; }
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Setting only border-width and border-color but no style. The default border-style is none, so nothing shows. Always include a style like solid.",
    "practice": "Make three boxes: one with a solid black border, one with a dashed red border, and one turned into a circle with border-radius: 50%.",
    "check": [
      {
        "question": "Why does border: 3px red; show nothing?",
        "options": [
          "because border-style is missing (default is none)",
          "because 3px is too small",
          "because red is not a valid color",
          "because borders need a class"
        ]
      },
      {
        "question": "How do you make a perfect circle from a square box?",
        "options": ["border-radius: 50%;", "border: circle;", "round: true;", "radius: 100;"]
      },
      {
        "question": "Which property makes only the left border thick and orange?",
        "options": [
          "border-left: 5px solid orange;",
          "border: left 5px orange;",
          "left-border: orange 5px;",
          "border-side: left;"
        ]
      }
    ]
  },
  {
    "title": "Margins",
    "outcomes": [
      "Add space outside an element with margin.",
      "Set each side separately or with shorthand.",
      "Center a block with margin: 0 auto."
    ],
    "concept": "Margin is the empty space outside an element's border. It pushes other elements away. You can set all four sides at once, or top, right, bottom, left one by one. A famous trick: margin: 0 auto centers a block element left and right, but only if it has a width.",
    "why": "Margins create breathing room. Without them, headings crash into paragraphs and cards stick together.",
    "syntax": "margin: 10px; · margin: 10px 20px; · margin: 0 auto;",
    "examples": [
      [
        "Margin on all sides",
        `<style>
.box {
  background: lightblue;
  margin: 30px;
}
</style>`
      ],
      [
        "Each side separately",
        `<style>
.card {
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 10px;
}
</style>`
      ],
      [
        "Center a box",
        `<style>
.center {
  width: 300px;
  margin: 0 auto;
  background: lightgreen;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Two vertical margins touching each other collapse into one. If one box has margin-bottom: 30px and the next has margin-top: 30px, the gap is 30px, not 60px. This is called margin collapse.",
    "practice": "Make a 300px wide box and center it on the page with margin: 0 auto. Then give it 50px of space above with margin-top.",
    "check": [
      {
        "question": "What is margin?",
        "options": [
          "space outside the element's border",
          "space inside the element's border",
          "the thickness of the border",
          "the color of the element"
        ]
      },
      {
        "question": "How do you center a block element horizontally?",
        "options": [
          "set a width and use margin: 0 auto;",
          "use margin: 0;",
          "use text-align: center on it",
          "use float: center;"
        ]
      },
      {
        "question": "What is margin collapse?",
        "options": [
          "two touching vertical margins merge into the larger one",
          "margins disappear on mobile",
          "margins become padding",
          "negative margins are removed"
        ]
      }
    ]
  },
  {
    "title": "Padding",
    "outcomes": [
      "Add space inside an element with padding.",
      "Set each side separately or with shorthand.",
      "Tell padding and margin apart with confidence."
    ],
    "concept": "Padding is the space between the content and the border — inside the box. Margin pushes things away from the outside, padding gives the content room on the inside. Think of a framed photo: padding is the mat board between the photo and the frame.",
    "why": "Text touching the edge of a box looks broken. Padding is what makes buttons and cards feel comfortable to read.",
    "syntax": "padding: 20px; · padding: 10px 20px 10px 20px;",
    "examples": [
      [
        "Padding inside a box",
        `<style>
.box {
  border: 2px solid black;
  padding: 25px;
}
</style>`
      ],
      [
        "Each side separately",
        `<style>
.alert {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
</style>`
      ],
      [
        "Padding makes buttons",
        `<style>
.btn {
  background: blue;
  color: white;
  padding: 12px 24px;
  border: none;
}
</style>
<button class="btn">Click me</button>`
      ]
    ],
    "language": "CSS",
    "mistake": "Mixing up padding and margin. Remember: padding is inside the border (background color covers it), margin is outside the border (background color does not cover it).",
    "practice": "Make a button with a blue background, white text, and padding of 12px top-bottom and 24px left-right.",
    "check": [
      {
        "question": "What is padding?",
        "options": [
          "space between the content and the border, inside the box",
          "space outside the border",
          "the border thickness",
          "the gap between two boxes"
        ]
      },
      {
        "question": "Does the background color cover the padding area?",
        "options": ["yes", "no", "only on the left side", "only with a border"]
      },
      {
        "question": "What does padding: 12px 24px mean?",
        "options": [
          "12px top and bottom, 24px left and right",
          "12px on all sides, 24px extra",
          "24px top and bottom, 12px left and right",
          "12px left, 24px right only"
        ]
      }
    ]
  },
  {
    "title": "Height and width",
    "outcomes": [
      "Set exact height and width with px.",
      "Use max-width for layouts that shrink on small screens.",
      "Set height and width in percent of the parent."
    ],
    "concept": "The height and width properties set the size of the content area. You can use pixels for exact sizes or percent for sizes relative to the parent. max-width is a safety limit: the element can shrink on small screens but never grow past the limit.",
    "why": "Fixed pixel widths break on mobile phones. max-width is the trick that keeps desktop layouts from overflowing on small screens.",
    "syntax": "width: 300px; · max-width: 600px; · height: 50%;",
    "examples": [
      [
        "Fixed size box",
        `<style>
.box {
  width: 200px;
  height: 100px;
  background: coral;
}
</style>`
      ],
      [
        "max-width for small screens",
        `<style>
.page {
  max-width: 800px;
  margin: 0 auto;
}
</style>`
      ],
      [
        "Percent of the parent",
        `<style>
.half {
  width: 50%;
  background: lightblue;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Using width: 600px for the main layout. On a 400px phone screen it overflows. Use max-width: 600px instead so it shrinks safely.",
    "practice": "Make a page wrapper with max-width: 800px centered with margin: 0 auto. Open it on a narrow window and watch it shrink.",
    "check": [
      {
        "question": "Why is max-width better than width for page layouts?",
        "options": [
          "it shrinks on small screens instead of overflowing",
          "it makes the page load faster",
          "it changes the colors",
          "it is required by HTML"
        ]
      },
      {
        "question": "What does width: 50% mean?",
        "options": [
          "half the width of the parent element",
          "50 pixels wide",
          "half the screen always",
          "50 percent of the text size"
        ]
      },
      {
        "question": "Which properties set the size of the content area?",
        "options": ["height and width", "margin and padding", "top and left", "border and outline"]
      }
    ]
  },
  {
    "title": "Outline",
    "outcomes": [
      "Draw an outline around an element.",
      "Set outline style, width, color, and offset.",
      "Know the difference between outline and border."
    ],
    "concept": "An outline is a line drawn just outside the border. It looks like a border, but it takes up no space — it never pushes other elements away and never changes the size of the box. The outline-offset property adds a gap between the border and the outline.",
    "why": "Outlines are perfect for focus rings on buttons and inputs. They highlight an element without moving anything on the page.",
    "syntax": "outline: 2px solid red; · outline-offset: 4px;",
    "examples": [
      [
        "Basic outline",
        `<style>
.box {
  border: 1px solid black;
  outline: 3px solid red;
  margin: 20px;
}
</style>`
      ],
      [
        "Outline with a gap",
        `<style>
.card {
  border: 2px solid gray;
  outline: 2px dashed blue;
  outline-offset: 6px;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Forgetting that outline needs a style. Like borders, the default outline-style is none, so outline: 3px red without a style shows nothing.",
    "practice": "Give a button a 2px solid blue outline with an 4px offset so the ring floats away from the button edge.",
    "check": [
      {
        "question": "Where is an outline drawn?",
        "options": [
          "just outside the border",
          "inside the padding",
          "instead of the content",
          "behind the background"
        ]
      },
      {
        "question": "How is an outline different from a border?",
        "options": [
          "it takes up no space and never moves other elements",
          "it is always red",
          "it only works on images",
          "it cannot have a color"
        ]
      },
      {
        "question": "What does outline-offset do?",
        "options": [
          "adds a gap between the border and the outline",
          "moves the element to the right",
          "makes the outline thicker",
          "removes the outline"
        ]
      }
    ]
  },
  {
    "title": "Text",
    "outcomes": [
      "Align text left, right, center, or justified.",
      "Decorate text with underline, overline, or line-through.",
      "Control spacing between letters, words, and lines."
    ],
    "concept": "The text properties control how writing looks: its color, alignment, and decoration. text-align moves whole lines left, right, or center. text-decoration adds lines under or through the text. Spacing properties like letter-spacing and line-height make text easier to read.",
    "why": "Readable text is the whole point of most pages. Good alignment and line spacing is the difference between a page people read and a page people leave.",
    "syntax": "text-align: center; · text-decoration: underline; · line-height: 1.6;",
    "examples": [
      [
        "Align and decorate",
        `<style>
h1 { text-align: center; }
a { text-decoration: none; }
.old { text-decoration: line-through; }
</style>`
      ],
      [
        "Uppercase and spacing",
        `<style>
.title {
  text-transform: uppercase;
  letter-spacing: 3px;
}
p {
  line-height: 1.8;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Putting text-align: center on the text element itself and expecting the box to center. text-align centers the text inside its parent. To center the box, use margin: 0 auto on the box.",
    "practice": "Style a heading: center it, make it uppercase, and add 2px letter spacing. Then give paragraphs a line-height of 1.8.",
    "check": [
      {
        "question": "Which property removes the underline from links?",
        "options": ["text-decoration: none;", "text-align: none;", "underline: off;", "text-style: plain;"]
      },
      {
        "question": "What does text-transform: uppercase do?",
        "options": [
          "shows all letters as capitals",
          "makes the text bigger",
          "moves text to the top",
          "bolds the text"
        ]
      },
      {
        "question": "Which property adds space between lines of text?",
        "options": ["line-height", "letter-spacing", "word-gap", "text-indent"]
      }
    ]
  },
  {
    "title": "Fonts",
    "outcomes": [
      "Pick font families with fallback stacks.",
      "Make text italic or bold with font-style and font-weight.",
      "Use the font shorthand property."
    ],
    "concept": "font-family chooses the typeface, like Arial or Georgia. You list several fonts as fallbacks: if the first is missing on the visitor's computer, the browser tries the next one. Names with spaces need quotes, like \"Times New Roman\". font-style makes italic, font-weight makes bold.",
    "why": "The font decides the personality of your page. A clean font stack keeps your design looking right on every device.",
    "syntax": "font-family: Arial, sans-serif; · font-weight: bold;",
    "examples": [
      [
        "Font stack with fallbacks",
        `<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.quote {
  font-family: Georgia, "Times New Roman", serif;
}
</style>`
      ],
      [
        "Style and weight",
        `<style>
em { font-style: italic; }
strong { font-weight: bold; }
.light { font-weight: 300; }
</style>`
      ],
      [
        "Font shorthand",
        `<style>
h1 {
  font: italic bold 28px Georgia, serif;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Writing font-family: Times New Roman, serif; without quotes. Multi-word font names must be quoted: \"Times New Roman\". Without quotes the browser reads it as three separate broken names.",
    "practice": "Set your page body to a sans-serif stack and all headings to a serif stack with Georgia first.",
    "check": [
      {
        "question": "Why list several fonts in font-family?",
        "options": [
          "as fallbacks if the first font is missing",
          "to make the text rainbow colored",
          "to make the page load faster",
          "because one font is not allowed"
        ]
      },
      {
        "question": "How do you write a multi-word font name?",
        "options": [
          "in quotes: \"Times New Roman\"",
          "with dashes: Times-New-Roman",
          "with underscores: Times_New_Roman",
          "without spaces: TimesNewRoman"
        ]
      },
      {
        "question": "Which property makes text bold?",
        "options": ["font-weight", "font-style", "font-family", "text-bold"]
      }
    ]
  },
  {
    "title": "Links",
    "outcomes": [
      "Style links in all four states: link, visited, hover, active.",
      "Write the link states in the correct LVHA order.",
      "Turn a link into a button with padding and background."
    ],
    "concept": "A link has four states: normal (a:link), visited (a:visited), hovered (a:hover), and being clicked (a:active). They must be written in that order — LVHA — or the later rules will not work. With a background, padding, and no underline, a plain link becomes a button.",
    "why": "Links are the doors of the web. Clear hover effects tell users what is clickable, which is basic good manners in design.",
    "syntax": "a:link → a:visited → a:hover → a:active",
    "examples": [
      [
        "Four link states",
        `<style>
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: orange; }
</style>`
      ],
      [
        "Link as a button",
        `<style>
.btn:link {
  background: green;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
.btn:hover { background: darkgreen; }
</style>
<a class="btn" href="#">Click me</a>`
      ]
    ],
    "language": "CSS",
    "mistake": "Writing a:hover before a:link and a:visited. The order must be LVHA (link, visited, hover, active). Wrong order breaks the hover effect.",
    "practice": "Style all links on a page: blue normally, red on hover, no underline. Then turn one link into a green button.",
    "check": [
      {
        "question": "What is the correct order for link states?",
        "options": [
          "link, visited, hover, active (LVHA)",
          "hover, link, active, visited",
          "active, hover, link, visited",
          "any order works the same"
        ]
      },
      {
        "question": "Which selector styles a link while the mouse is over it?",
        "options": ["a:hover", "a:visited", "a:link", "a:mouse"]
      },
      {
        "question": "What does a:active style?",
        "options": [
          "the link at the moment it is clicked",
          "an active internet connection",
          "a link that is turned on",
          "the first link on the page"
        ]
      }
    ]
  },
  {
    "title": "Lists",
    "outcomes": [
      "Change bullet styles with list-style-type.",
      "Use an image as a custom bullet.",
      "Remove bullets to build clean navigation menus."
    ],
    "concept": "Lists come with default bullets or numbers. list-style-type changes the marker: disc, circle, square, or numbers like upper-roman. list-style-image replaces the bullet with your own picture. For menus, you remove the markers completely with list-style-type: none.",
    "why": "Every navigation menu on the web is a list with its bullets removed. This lesson is the first step to building real menus.",
    "syntax": "list-style-type: square; · list-style: none;",
    "examples": [
      [
        "Different markers",
        `<style>
.a { list-style-type: square; }
.b { list-style-type: upper-roman; }
.c { list-style-type: circle; }
</style>`
      ],
      [
        "Remove bullets for a menu",
        `<style>
.menu {
  list-style-type: none;
  padding: 0;
}
.menu li {
  display: inline;
  margin-right: 15px;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Setting list-style-type: none but forgetting padding: 0. Browsers add default left padding to lists, so the menu items still sit indented. Remove both.",
    "practice": "Build a horizontal menu: remove the bullets and padding from a ul, then put the li items in one line with display: inline.",
    "check": [
      {
        "question": "How do you remove list bullets?",
        "options": ["list-style-type: none;", "bullet: none;", "list: off;", "marker: hidden;"]
      },
      {
        "question": "When you remove bullets for a menu, what else must you remove?",
        "options": [
          "the default left padding",
          "the text color",
          "the font size",
          "the list tags"
        ]
      },
      {
        "question": "Which value makes roman numeral markers?",
        "options": ["upper-roman", "roman-numbers", "number-roman", "latin"]
      }
    ]
  },
  {
    "title": "Tables",
    "outcomes": [
      "Add borders to tables, headings, and cells.",
      "Merge double borders with border-collapse.",
      "Make zebra-striped rows with :nth-child."
    ],
    "concept": "Table borders need two steps: put a border on the table, th, and td, then add border-collapse: collapse so the double lines merge into single clean lines. Padding gives cells breathing room, and tr:nth-child(even) colors every second row for easy reading.",
    "why": "Zebra-striped tables with clean single borders are the standard for prices, schedules, and data. This is exactly how W3Schools styles its own tables.",
    "syntax": "table, th, td { border: 1px solid black; } · border-collapse: collapse;",
    "examples": [
      [
        "Clean table borders",
        `<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td { padding: 10px; }
</style>`
      ],
      [
        "Zebra stripes and hover",
        `<style>
tr:nth-child(even) { background: #f2f2f2; }
tr:hover { background: #ddd; }
th { background: green; color: white; }
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Forgetting border-collapse: collapse. Without it every cell gets its own border and you see ugly double lines between cells.",
    "practice": "Make a 3-column table with collapsed borders, 10px cell padding, and zebra-striped rows.",
    "check": [
      {
        "question": "What does border-collapse: collapse do?",
        "options": [
          "merges double cell borders into single lines",
          "hides the whole table",
          "makes the table smaller",
          "removes all padding"
        ]
      },
      {
        "question": "How do you color every second table row?",
        "options": ["tr:nth-child(even)", "tr:second", "table:striped", "td:even"]
      },
      {
        "question": "Where must the border be set for a full table grid?",
        "options": [
          "on table, th, and td together",
          "only on the table tag",
          "only on th",
          "borders are automatic"
        ]
      }
    ]
  },
  {
    "title": "Z-index",
    "outcomes": [
      "Control which element sits on top with z-index.",
      "Know that z-index only works on positioned elements.",
      "Use negative z-index to push things behind."
    ],
    "concept": "When elements overlap, z-index decides the stacking order — like layers of paper on a desk. A bigger number means closer to you, on top. But z-index only works on elements that have a position other than static, like relative or absolute.",
    "why": "Dropdown menus, popups, and sticky headers all need to sit on top of the page. z-index is the tool that puts them there.",
    "syntax": "position: absolute; z-index: 10;",
    "examples": [
      [
        "Box on top of another box",
        `<style>
.back {
  position: absolute;
  z-index: 1;
  background: lightblue;
}
.front {
  position: absolute;
  z-index: 2;
  background: coral;
}
</style>`
      ],
      [
        "Popup above the page",
        `<style>
.popup {
  position: fixed;
  z-index: 100;
  background: white;
  border: 2px solid black;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Setting z-index on an element with position: static (the default). It does nothing. Give the element position: relative or absolute first.",
    "practice": "Stack two boxes on top of each other with absolute position, then use z-index to swap which one is on top.",
    "check": [
      {
        "question": "Which element appears on top?",
        "options": [
          "the one with the higher z-index",
          "the one with the lower z-index",
          "always the first in the HTML",
          "z-index does not affect stacking"
        ]
      },
      {
        "question": "Why might z-index have no effect?",
        "options": [
          "the element has position: static",
          "the z-index number is too big",
          "the element has a color",
          "the browser is old"
        ]
      },
      {
        "question": "What does a negative z-index do?",
        "options": [
          "pushes the element behind others",
          "hides the element forever",
          "makes the element transparent",
          "nothing, it is invalid"
        ]
      }
    ]
  },
  {
    "title": "Overflow",
    "outcomes": [
      "Control what happens when content is too big for its box.",
      "Use overflow: auto for scrollbars only when needed.",
      "Control horizontal and vertical overflow separately."
    ],
    "concept": "Overflow decides what happens when content does not fit inside its box. visible lets it spill out. hidden cuts it off. scroll always shows scrollbars. auto is the smart one: it shows scrollbars only when the content actually overflows.",
    "why": "Long text in a small chat box or a fixed-size card needs scrollbars. Overflow keeps big content neatly inside small boxes.",
    "syntax": "overflow: visible | hidden | scroll | auto;",
    "examples": [
      [
        "Hide the extra content",
        `<style>
.box {
  width: 200px;
  height: 80px;
  overflow: hidden;
  border: 1px solid black;
}
</style>`
      ],
      [
        "Scrollbars only when needed",
        `<style>
.chat {
  width: 250px;
  height: 150px;
  overflow: auto;
  border: 1px solid gray;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Using overflow: scroll everywhere. It always shows scrollbars, even when there is nothing to scroll. Use overflow: auto so scrollbars appear only when needed.",
    "practice": "Make a 250x150 box, fill it with lots of text, and try overflow: hidden, then overflow: auto. Watch the difference.",
    "check": [
      {
        "question": "Which overflow value shows scrollbars only when needed?",
        "options": ["auto", "scroll", "visible", "hidden"]
      },
      {
        "question": "What does overflow: hidden do?",
        "options": [
          "cuts off content that does not fit",
          "hides the whole box",
          "makes content invisible on hover",
          "deletes the extra text"
        ]
      },
      {
        "question": "How do you control only horizontal overflow?",
        "options": ["overflow-x", "overflow-left", "overflow-h", "x-overflow"]
      }
    ]
  },
  {
    "title": "Float",
    "outcomes": [
      "Float an image left or right so text wraps around it.",
      "Stop wrapping with the clear property.",
      "Fix a collapsed parent with the clearfix trick."
    ],
    "concept": "Float was the old way to build layouts: float: left pushes an element to the left and lets text flow around it, like a photo in a newspaper article. clear: both stops the wrapping. A famous bug: a parent holding only floated children collapses to zero height, fixed with the clearfix trick.",
    "why": "Float is old, but you will meet it in every old codebase and tutorial. You must understand it to read other people's code, even though flexbox is better for new layouts.",
    "syntax": "float: left | right; · clear: both;",
    "examples": [
      [
        "Image with wrapped text",
        `<style>
img {
  float: left;
  margin-right: 15px;
}
</style>`
      ],
      [
        "Clear the float",
        `<style>
.footer {
  clear: both;
  background: lightgray;
}
</style>`
      ],
      [
        "Clearfix for collapsed parent",
        `<style>
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Forgetting to clear floats. The next section slides up beside the floated element and the layout breaks. Always clear after a floated area, or use clearfix on the parent.",
    "practice": "Float an image left inside a paragraph and watch the text wrap. Then add a footer with clear: both below it.",
    "check": [
      {
        "question": "What does float: left do to an image in a paragraph?",
        "options": [
          "pushes it left and lets text wrap around it",
          "moves it to a new page",
          "makes it invisible",
          "centers it"
        ]
      },
      {
        "question": "What is the clearfix trick for?",
        "options": [
          "fixing a parent that collapsed around floated children",
          "cleaning the browser cache",
          "removing all floats from the page",
          "making text clearer"
        ]
      },
      {
        "question": "Which property stops text from wrapping around a float?",
        "options": ["clear", "stop", "wrap", "float-end"]
      }
    ]
  },
  {
    "title": "Align",
    "outcomes": [
      "Center a block element with margin: auto.",
      "Center text and inline elements with text-align.",
      "Center anything perfectly with flexbox."
    ],
    "concept": "Centering is the most searched CSS question of all time. For a block like a div: give it a width, then margin: 0 auto. For text and images: text-align: center on the parent. For perfect centering both ways: flexbox with justify-content: center and align-items: center.",
    "why": "Centered layouts are everywhere — login forms, hero sections, cards. These three tricks solve nearly every centering problem you will ever face.",
    "syntax": "margin: 0 auto; · text-align: center; · display: flex + justify-content/align-items: center;",
    "examples": [
      [
        "Center a block",
        `<style>
.box {
  width: 300px;
  margin: 0 auto;
  background: lightblue;
}
</style>`
      ],
      [
        "Center text and image",
        `<style>
.hero {
  text-align: center;
}
</style>`
      ],
      [
        "Perfect center with flexbox",
        `<style>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Using margin: 0 auto on a block with no width. A full-width block has no free space on the sides, so auto margins do nothing. Set a width first.",
    "practice": "Center a 300px card on the page with margin: 0 auto, then center the text inside it with text-align: center.",
    "check": [
      {
        "question": "What two things center a block element horizontally?",
        "options": [
          "a set width plus margin: 0 auto;",
          "text-align: center on the block itself",
          "float: center;",
          "padding: auto;"
        ]
      },
      {
        "question": "How do you center text inside a div?",
        "options": [
          "text-align: center on the parent div",
          "margin: auto on the text",
          "float: center on the text",
          "align: middle;"
        ]
      },
      {
        "question": "Which flexbox pair centers both horizontally and vertically?",
        "options": [
          "justify-content: center and align-items: center",
          "float: center and clear: both",
          "margin: auto and padding: auto",
          "text-align: center and vertical-align: center"
        ]
      }
    ]
  },
  {
    "title": "Pseudo-classes",
    "outcomes": [
      "Style elements in special states like :hover and :first-child.",
      "Pick items by position with :nth-child.",
      "Exclude elements with :not."
    ],
    "concept": "A pseudo-class is a keyword added to a selector that styles an element in a special state or position. :hover styles a link under the mouse. :first-child picks the first item in a group. :nth-child(2) picks the second. :not(.x) picks everything except .x. Pseudo-classes use one colon.",
    "why": "Pseudo-classes let you style things without adding extra classes to your HTML. Zebra tables, styled first paragraphs, and hover effects all come from here.",
    "syntax": "selector:pseudo-class { ... }",
    "examples": [
      [
        "Hover and first child",
        `<style>
a:hover { color: red; }
li:first-child { font-weight: bold; }
</style>`
      ],
      [
        "Every second item",
        `<style>
li:nth-child(even) {
  background: #f2f2f2;
}
</style>`
      ],
      [
        "Everything except",
        `<style>
p:not(.intro) {
  color: gray;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Writing :nth-child(0). Counting starts at 1, not 0. :nth-child(1) is the first child; :nth-child(0) matches nothing.",
    "practice": "Make a list where the first item is bold, every even item has a gray background, and links turn red on hover.",
    "check": [
      {
        "question": "How many colons does a pseudo-class use?",
        "options": ["one (:)", "two (::)", "three (:::) ", "none"]
      },
      {
        "question": "What does li:nth-child(2) select?",
        "options": [
          "the second li in its parent",
          "every li except the second",
          "the li with class 2",
          "two li elements at random"
        ]
      },
      {
        "question": "What does p:not(.intro) select?",
        "options": [
          "every p except the ones with class intro",
          "only p elements with class intro",
          "no p elements at all",
          "the first p only"
        ]
      }
    ]
  },
  {
    "title": "Pseudo-elements",
    "outcomes": [
      "Add content before and after elements with ::before and ::after.",
      "Style the first letter or first line of a paragraph.",
      "Style selected text with ::selection."
    ],
    "concept": "A pseudo-element styles a part of an element, or inserts virtual content that is not in your HTML. ::before and ::after add content at the start or end — but they only appear if you set the content property, even if it is empty. ::first-letter makes drop caps. Pseudo-elements use two colons.",
    "why": "Decorative quotes, icons before links, and drop caps — all done without touching the HTML. That keeps your markup clean.",
    "syntax": "selector::pseudo-element { content: \"...\"; }",
    "examples": [
      [
        "Add a star before headings",
        `<style>
h2::before {
  content: "★ ";
  color: gold;
}
</style>`
      ],
      [
        "Drop cap first letter",
        `<style>
p::first-letter {
  font-size: 40px;
  color: red;
}
</style>`
      ],
      [
        "Style selected text",
        `<style>
::selection {
  background: yellow;
  color: black;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Writing ::before without the content property. Without content, the pseudo-element never appears — not even with a background or color. Always include content, even content: \"\".",
    "practice": "Add ::before with a star to all h2 headings, and make the first letter of a paragraph big and red.",
    "check": [
      {
        "question": "How many colons does a pseudo-element use?",
        "options": ["two (::)", "one (:)", "three (:::) ", "none"]
      },
      {
        "question": "Why is ::before not showing?",
        "options": [
          "the content property is missing",
          "the color is wrong",
          "the HTML is broken",
          "before does not exist"
        ]
      },
      {
        "question": "Which pseudo-element styles highlighted text?",
        "options": ["::selection", "::highlight", "::selected", "::mark"]
      }
    ]
  },
  {
    "title": "Opacity",
    "outcomes": [
      "Make elements transparent with the opacity property.",
      "Know that opacity affects the element and all its children.",
      "Use rgba colors when only the background should be transparent."
    ],
    "concept": "Opacity sets how see-through an element is, from 0 (invisible) to 1 (fully solid). 0.5 means half transparent. Important: opacity affects the whole element including its text and children. If you only want a see-through background, use an rgba color instead.",
    "why": "Faded images, watermark effects, and smooth fade animations all use opacity. It is also the key to show and hide things gracefully.",
    "syntax": "opacity: 0.5; · background: rgba(0,0,0,0.5);",
    "examples": [
      [
        "Half transparent image",
        `<style>
img {
  opacity: 0.5;
}
img:hover {
  opacity: 1;
}
</style>`
      ],
      [
        "See-through background only",
        `<style>
.overlay {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Using opacity: 0.5 on a box and wondering why the text inside also faded. Opacity always affects children. For a faded background with solid text, use background: rgba(...) instead.",
    "practice": "Make an image half transparent, fully solid on hover. Then make a dark overlay box with rgba so its text stays bright.",
    "check": [
      {
        "question": "What does opacity: 0 do?",
        "options": [
          "makes the element fully invisible",
          "deletes the element",
          "makes the element half visible",
          "nothing, 0 is invalid"
        ]
      },
      {
        "question": "You set opacity: 0.5 on a div. What happens to its text?",
        "options": [
          "the text becomes half transparent too",
          "the text stays fully solid",
          "the text disappears completely",
          "the text turns gray"
        ]
      },
      {
        "question": "How do you make only the background see-through, not the text?",
        "options": [
          "use an rgba background color",
          "use opacity: 0.5 on the text",
          "use a lighter font",
          "it is not possible"
        ]
      }
    ]
  },
  {
    "title": "CSS units",
    "outcomes": [
      "Use px for exact fixed sizes.",
      "Use % for sizes relative to the parent.",
      "Use em, rem, and vw/vh for flexible responsive sizes."
    ],
    "concept": "CSS has many ways to measure size. px is exact pixels — fixed and simple. % is relative to the parent element. em is relative to the parent's font size, rem is relative to the root font size. vw and vh are percent of the viewport: 100vw is the full screen width.",
    "why": "Fixed pixels break on different screens. Relative units let your design stretch and shrink gracefully from phones to desktops.",
    "syntax": "width: 200px; · width: 50%; · font-size: 1.2rem; · height: 100vh;",
    "examples": [
      [
        "px vs percent",
        `<style>
.fixed { width: 200px; }
.half { width: 50%; }
</style>`
      ],
      [
        "rem and viewport units",
        `<style>
h1 { font-size: 2rem; }
.hero { height: 100vh; }
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Nesting em sizes. 1.2em inside 1.2em becomes 1.44em, and it compounds deeper. For font sizes, prefer rem so every element measures from the root, not its parent.",
    "practice": "Set the root font size, then size three headings with rem. Make a hero section exactly 100vh tall.",
    "check": [
      {
        "question": "What is rem relative to?",
        "options": [
          "the root (html) font size",
          "the parent font size",
          "the screen width",
          "a fixed 16 pixels always"
        ]
      },
      {
        "question": "What does 100vh mean?",
        "options": [
          "100 percent of the viewport height",
          "100 pixels high",
          "100 percent of the parent",
          "100 vertical lines"
        ]
      },
      {
        "question": "Why can em be tricky when nested?",
        "options": [
          "it compounds, multiplying at each level",
          "it stops working below 3 levels",
          "it only works on headings",
          "it resets to zero"
        ]
      }
    ]
  },
  {
    "title": "Specificity",
    "outcomes": [
      "Predict which CSS rule wins when rules conflict.",
      "Rank selectors: inline beats id beats class beats tag.",
      "Use !important only as a last resort."
    ],
    "concept": "When two rules target the same element, the more specific rule wins. Think of it as points: inline styles beat everything, then ids (#), then classes (.), then plain tags. !important is a trump card that beats all of them — but it makes your code hard to fix later, so avoid it.",
    "why": "The number one beginner frustration is 'why is my style not working?' Nine times out of ten, a more specific rule is winning. Specificity is the answer.",
    "syntax": "inline > #id > .class > tag · color: red !important;",
    "examples": [
      [
        "Class beats tag",
        `<style>
p { color: blue; }
.text { color: red; }
</style>
<p class="text">This is red.</p>`
      ],
      [
        "ID beats class",
        `<style>
.text { color: red; }
#main { color: green; }
</style>
<p id="main" class="text">This is green.</p>`
      ]
    ],
    "language": "CSS",
    "mistake": "Sprinkling !important everywhere to force styles. It works today, but tomorrow no rule can override it and debugging becomes a nightmare. Fix the selector specificity instead.",
    "practice": "Style a paragraph blue with a tag selector, red with a class, and green with an id. Predict the winner, then check in the browser.",
    "check": [
      {
        "question": "Which selector wins: .text or #main?",
        "options": [
          "#main, because ids beat classes",
          ".text, because it comes first",
          "neither, they cancel out",
          "the tag selector always wins"
        ]
      },
      {
        "question": "What beats an inline style?",
        "options": [
          "only !important",
          "an id selector",
          "a class selector",
          "nothing can beat it"
        ]
      },
      {
        "question": "Why avoid !important?",
        "options": [
          "it makes future overrides very hard to debug",
          "it slows down the page",
          "it is not valid CSS",
          "it only works once"
        ]
      }
    ]
  },
  {
    "title": "CSS variables",
    "outcomes": [
      "Store colors and sizes in custom properties.",
      "Reuse values across a stylesheet with var().",
      "Change a whole theme by editing one place."
    ],
    "concept": "CSS variables let you store a value once and reuse it everywhere. You define them with two dashes, like --main-color: blue, usually on :root so every element can see them. Then you use them with var(--main-color). Change the variable once, and every place using it updates.",
    "why": "Real sites reuse the same brand colors in fifty places. Variables mean you change the color in one spot instead of hunting through the whole file.",
    "syntax": ":root { --main: blue; } · color: var(--main);",
    "examples": [
      [
        "Define and reuse",
        `<style>
:root {
  --main-color: blue;
  --gap: 20px;
}
h1 { color: var(--main-color); }
.box { padding: var(--gap); }
</style>`
      ],
      [
        "Fallback value",
        `<style>
.btn {
  color: var(--btn-color, white);
}
</style>`
      ]
    ],
    "language": "CSS",
    "mistake": "Writing color: --main-color; without var(). The variable only works inside the var() function: color: var(--main-color).",
    "practice": "Define --brand: purple and --space: 16px on :root, then use them for headings, buttons, and card padding.",
    "check": [
      {
        "question": "How do you define a CSS variable?",
        "options": [
          "with two dashes: --main-color: blue;",
          "with one dash: -main-color: blue;",
          "with a dollar sign: $main-color: blue;",
          "with var: var main-color = blue;"
        ]
      },
      {
        "question": "How do you use a CSS variable?",
        "options": ["var(--main-color)", "--main-color", "use(--main-color)", "$main-color"]
      },
      {
        "question": "What does var(--x, red) do if --x is not defined?",
        "options": [
          "it uses red as the fallback",
          "it shows nothing",
          "it throws an error",
          "it uses black"
        ]
      }
    ]
  },
];
