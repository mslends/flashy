angular.module("flashCards").service("flashCardService", function($firebaseObject) {


// flashCards = myFirebaseRef.child('')
// var flashCards = {
//           GIT:[
//             {
//               question: "What is git?",
//               answer: "Git is a Version Control System (VCS)"
//             },
//             {
//               question: "How does git work?",
//               answer: "Git thinks of its data more like a set of snapshots of a miniature filesystem. Every time you commit, or save the state of your project in Git, it basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot."
//             },
//             {
//               question: "What is the difference between git and github?",
//               answer: "GitHub is a website where you can upload a copy of your Git repository. It is a Git repository hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features."
//             }
//           ],
//         HTML:[
//             {
//               question: "What is HTML?",
//               answer: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages."
//             }
//           ],
//           CSS:[
//             {
//               question: "What is css?",
//               answer: "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media"
//             },
//             {
//               question: "Why use CSS?",
//               answer: "CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes."
//             },
//             {
//               question: "What big problem did CSS solve?",
//               answer: "HTML was NEVER intended to contain tags for formatting a web page! HTML was created to describe the content of a web page. When tags like <font>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process."
//             }
//           ],
//           POSITIONING:[
//             {
//               question: "What is the css position property?",
//               answer: "The position property specifies the type of positioning method used for an element (static, relative, fixed or absolute)."
//             },
//             {
//               question: "How many positon values are there?",
//               answer: "There are four different position values. Static, fixed, relative, and absolute."
//             },
//             {
//               question: "How are HTML elements positioned by default?",
//               answer: "HTML elements are positioned static by default."
//             }
//           ],
//           CSS:[
//             {
//               question: "What is css?",
//               answer: "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media"
//             },
//             {
//               question: "Why use CSS?",
//               answer: "CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes."
//             },
//             {
//               question: "What big problem did CSS solve?",
//               answer: "HTML was NEVER intended to contain tags for formatting a web page! HTML was created to describe the content of a web page. When tags like <font>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process."
//             }
//           ],
//           FUNCTIONS:[
//             {
//               question: "What is function",
//               answer: "A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when something invokes it calls it."
//             },
//             {
//               question: "How do you name a function?",
//               answer: "A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ()."
//             },
//             {
//               question: "What are the rules of naming a function?",
//               answer: "Function names can contain letters, digits, underscores, and dollar signs (same rules as variables)"
//             }
//           ],
//           OBJECTS:[
//             {
//               question: "What is a javascript object?",
//               answer: "Objects are variables too. But objects can contain many values."
//             },
//             {
//               question: "How do you write the values in an object?",
//               answer: "The values are written as name:value pairs (name and value separated by a colon)."
//             },
//             {
//               question: "Name-value pairs in Javascript objects are called what?",
//               answer: "The name:values pairs (in JavaScript objects) are called properties."
//             }
//           ],
//           THIS:[
//             {
//               question: "What is the “this” keyword in javascript?",
//               answer: "In JavaScript this always refers to the “owner” of the function we're executing, or rather, to the object that a function is a method of. When we define our faithful function doSomething() in a page, its owner is the page, or rather, the window object (or global object) of JavaScript. An onclick property, though, is owned by the HTML element it belongs to."
//             },
//             {
//               question: "How is the “this” keyword used in Javascript?",
//               answer: "In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. "
//             },
//             {
//               question: "What is The Biggest Gotcha with JavaScript “this” keyword?",
//               answer: "If you understand this one principle of JavaScript’s this, you will understand the “this” keyword with clarity: this is not assigned a value until an object invokes the function where this is defined. Let’s call the function where this is defined the “this Function. Even though it appears this refers to the object where it is defined, it is not until an object invokes the this Function that this is actually assigned a value. And the value it is assigned is based exclusively on the object that invokes the this Function. this has the value of the invoking object in most circumstances. However, there are a few scenarios where this does not have the value of the invoking object."
//             }
//           ],
//           CALLBACKS:[
//             {
//               question: "What is a callback?",
//               answer: "A function that takes other functions as arguments or returns functions as its result is called a higher-order function, and the function that is passed as an argument is called a callback function. It's named “callback” because at some point in time it is “called back” by the higher-order function."
//             },
//             {
//               question: "How do callback functions work?",
//               answer: "When we pass a callback function as an argument to another function, we are only passing the function definition. We are not executing the function in the parameter. In other words, we aren’t passing the function with the trailing pair of executing parenthesis () like we do when we are executing a function. Note that the callback function is not executed immediately. It is “called back” (hence the name) at some specified point inside the containing function’s body."
//             },
//             {
//               question: "How many callback functions can you pass in as parameters?",
//               answer: "We can pass more than one callback function into the parameter of a function, just like we can pass more than one variable."
//             }
//           ],
//           PROTOTYPES:[
//             {
//               question: "What is a prototype?",
//               answer: "Every JavaScript object has a prototype. The prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype."
//             },
//             {
//               question: "Can you add a property to a prototype?",
//               answer: "You cannot add a new property to a prototype the same way as you add a new property to an existing object, because the prototype is not an existing object."
//             },
//             {
//               question: "Which properties do prototypes have?",
//               answer: "All objects in JavaScript inherit properties and methods from Object.prototype. These inherited properties and methods are constructor, hasOwnProperty (), isPrototypeOf (), propertyIsEnumerable (), toLocaleString (), toString (), and valueOf (). ECMAScript 5 also adds 4 accessor methods to Object.prototype."
//             }
//           ],
//           JQUERY:[
//             {
//               question: "What is jQuery?",
//               answer: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers."
//             },
//             {
//               question: "How do we call jQuery library functions?",
//               answer: "As almost everything we do when using jQuery reads or manipulates the document object model (DOM), we need to make sure that we start adding events etc. as soon as the DOM is ready. If you want an event to work on your page, you should call it inside the $(document).ready() function. Everything inside it will load as soon as the DOM is loaded and before the page contents are loaded."
//             },
//             {
//               question: "What big problem did CSS solve?",
//               answer: "Encourages separation of JavaScript and HTML: The jQuery library provides simple syntax for adding event handlers to the DOM using JavaScript, rather than adding HTML event attributes to call JavaScript functions. Thus, it encourages developers to completely separate JavaScript code from HTML markup. Brevity and clarity: jQuery promotes brevity and clarity with features like chainable functions and shorthand function names.Eliminates cross-browser incompatibilities: The JavaScript engines of different browsers differ slightly so JavaScript code that works for one browser may not work for another. Like other JavaScript toolkits, jQuery handles all these cross-browser inconsistencies and provides a consistent interface that works across different browsers.Extensible: New events, elements, and methods can be easily added and then reused as a plugin."
//             }
//           ],
//           ANGULAR:[
//             {
//               question: "What is Angular?",
//               answer: "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write."
//             },
//             {
//               question: "Why is using Angular important?",
//               answer: "Angular is what HTML would have been, had it been designed for applications."
//             }
//           ],
//           SERVICES:[
//             {
//               question: "What is an Angular Service?",
//               answer: "Services are the “heavy lifters” in Angular. They are the equivalant of workers on a construction site. Angular services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app."
//             },
//             {
//               question: "How do you use an Angular Service?",
//               answer: "To use an Angular service, you add it as a dependency for the component (controller, service, filter or directive) that depends on the service. Angular's dependency injection subsystem takes care of the rest."
//             },
//             {
//               question: "How do you set up an Angular Service?",
//               answer: "angular.module('myApp').service('mainService', function() {})"
//             }
//           ],
//           HTTP:[
//             {
//               question: "What is $HTTP?",
//               answer: "The $http service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP."
//             },
//             {
//               question: "What is the general usage for $HTTP?",
//               answer: "The $http service is a function which takes a single argument — a configuration object — that is used to generate an HTTP request and returns a promise."
//             }
//           ],
//           Q:[
//             {
//               question: "What is $q?",
//               answer: "A service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done processing."
//             }
//           ],
//           JSONP:[
//             {
//               question: "What is JSONP?",
//               answer: "JSONP, which stands for “JSON with Padding” (and JSON stands for JavaScript Object Notation), is a way to get data from another domain that bypasses CORS (Cross Origin Resource Sharing) rules. CORS is a set of “rules,” about transferring data between sites that have a different domain name from the client"
//             }
//           ],
//           UIROUTER:[
//             {
//               question: "What is ui-router?",
//               answer: "AngularUI Router is a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine."
//             }
//           ],
//           DIRECTIVES:[
//             {
//               question: "What are Angular Directives?",
//               answer: "Put simply, Directives are reusable pieces of code. At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children."
//             }
//           ],
//           FIREBASE:[
//             {
//               question: "What is Firebase?",
//               answer: "Data in your Firebase database is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Android, iOS, and JavaScript SDKs, all of your clients share one Firebase database and automatically receive updates with the newest data."
//             }
//           ],
//           NODE:[
//             {
//               question: "What is node.js?",
//               answer: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient."
//             }
//           ],
//           EXPRESS:[
//             {
//               question: "What is Express.js?",
//               answer: "Express.js is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications.[1] It is the de facto standard server framework for node.js.[2] The original author, TJ Holowaychuk, described it as a Sinatra-inspired server,[3] meaning that it is relatively minimal with many features available as plugins. Express is the backend part of the MEAN stack, together with MongoDB database and AngularJS frontend framework."
//             }
//           ],
//           MONGODB:[
//             {
//               question: "What is MongoDB?",
//               answer: "MongoDB is an open source, document-oriented database designed with both scalability and developer agility in mind. Instead of storing your data in tables and rows as you would with a relational database, in MongoDB you store JSON-like documents with dynamic schemas."
//             }
//           ],
//           MONGOOSE:[
//             {
//               question: "What is Mongoose?",
//               answer: "Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."
//             }
//           ],
//           PASSPORT:[
//             {
//               question: "What is Passport?",
//               answer: "Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests."
//             }
//           ]
//         };


        // Firebase
var mypostFirebaseRef = new Firebase("https://flashington.firebaseio.com/-KFfkkrNdwYPjejVmzWc/");



this.addNewCard = function(obj) {
  alert('Card Added to the ' + obj.topic + ' topic!');
  mypostFirebaseRef.child(obj.topic).push(obj);
  // mypostFirebaseRef.push(flashCards);
  // flashCards[obj.topic].push(obj);
}

});
