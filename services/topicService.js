angular.module("flashCards").service("topicService", function() {


// topics array below holds the information for every topic in my menu. (Double click on the line below to expand and show data)
//   var topics = [{
//       name: 'git',
//       state: 'git'
//     },
//     {
//       name: 'html',
//       state: 'html'
//     },
//     {
//       name: 'css',
//       state: 'css'
//     },
//     {
//       name: 'css positioning',
//       state: 'cssPositioning'
//     },
//     {
//       name: 'advanced html',
//       state: 'advHtml'
//     },
//     {
//       name: 'advanced css',
//       state: 'advCss'
//     },
//     {
//       name: 'js fundamentals (functions)',
//       state: 'jsFundamentals'
//     },
//     {
//       name: 'js objects',
//       state: 'jsObj'
//     },
//     {
//       name: '"this" keyword',
//       state: 'this'
//     },
//     {
//       name: 'js callbacks',
//       state: 'callbacks'
//     },
//     {
//       name: 'js prototypes',
//       state: 'prototypes'
//     },
//     {
//       name: 'jquery',
//       state: 'jquery'
//     },
//     {
//       name: 'jquery 2',
//       state: 'jquery2'
//     },
//     {
//       name: 'angular',
//       state: 'angular'
//     },
//     {
//       name: 'angular services',
//       state: 'angularServices'
//     },
//     {
//       name: 'angular $http',
//       state: 'angular$http'
//     },
//     {
//       name: 'angular $q',
//       state: 'angular$q'
//     },
//     {
//       name: 'json p',
//       state: 'jsonp'
//     },
//     {
//       name: 'Angular UI-Router',
//       state: 'angularRouter'
//     },
//     {
//       name: 'Angular Directives',
//       state: 'angularDirectives'
//     },
//     {
//       name: 'firebase',
//       state: 'firebase'
//     },
//     {
//       name: 'Node.js',
//       state: 'node'
//     },
//     {
//       name: 'express.js',
//       state: 'express'
//     },
//     {
//       name: 'MongoDB',
//       state: 'mongodb'
//     },
//     {
//       name: 'Mongoose',
//       state: 'mongoose'
//     },
//     {
//       name: 'Passport.js (OAuth)',
//       state: 'passport'
//     }
// ];

// Function below gets the topics from the topics Array(above) returns the name of each topic.
this.getTopics = function() {
  return topics;
};

this.addTopics = function(topic) {
  topics.push(topic);
  return topics
};

});
