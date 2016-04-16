angular.module("flashCards").service("flashCardService", function() {




var flashCards = {
          GIT:[
            {
              question: "What is git?",
              answer: "Git is a Version Control System (VCS)"
            },
            {
              question: "How does git work?",
              answer: "Git thinks of its data more like a set of snapshots of a miniature filesystem. Every time you commit, or save the state of your project in Git, it basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot."
            },
            {
              question: "What is the difference between git and github?",
              answer: "GitHub is a website where you can upload a copy of your Git repository. It is a Git repository hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features."
            }
          ],
        HTML:[
            {
              question: "What is HTML?",
              answer: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages."
            }
          ],
          CSS:[
            {
              question: "What is css?",
              answer: "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media"
            },
            {
              question: "Why use CSS?",
              answer: "CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes."
            },
            {
              question: "What big problem did CSS solve?",
              answer: "HTML was NEVER intended to contain tags for formatting a web page! HTML was created to describe the content of a web page. When tags like <font>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process."
            }
          ],
        };


this.getFlashCards = function(topic) {
  return flashCards[topic];
}

this.addNewCard = function(obj) {
  flashCards[obj.topic].push(obj);
  alert('Card Added to the ' + obj.topic + ' topic!');
}

});
