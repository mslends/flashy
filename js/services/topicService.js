angular.module("flashCards").service("topicService", function() {

  var topics = [{
      name: 'GIT',
      state: 'git'
    },
    {
      name: 'HTML',
      state: 'html'
    },
    {
      name: 'CSS',
      state: 'css'
    },
    {
      name: 'POSITIONING',
      state: 'cssPositioning'
    },
    {
      name: 'FUNCTIONS',
      state: 'jsFundamentals'
    },
    {
      name: 'OBJECTS',
      state: 'jsObj'
    },
    {
      name: 'THIS',
      state: 'this'
    },
    {
      name: 'CALLBACKS',
      state: 'callbacks'
    },
    {
      name: 'PROTOTYPES',
      state: 'prototypes'
    },
    {
      name: 'JQUERY',
      state: 'jquery'
    },
    {
      name: 'ANGULAR',
      state: 'angular'
    },
    {
      name: 'SERVICES',
      state: 'angularServices'
    },
    {
      name: '$HTTP',
      state: 'angular$http'
    },
    {
      name: '$Q',
      state: 'angular$q'
    },
    {
      name: 'JSONP',
      state: 'jsonp'
    },
    {
      name: 'UIROUTER',
      state: 'angularRouter'
    },
    {
      name: 'DIRECTIVES',
      state: 'angularDirectives'
    },
    {
      name: 'FIREBASE',
      state: 'firebase'
    },
    {
      name: 'NODE',
      state: 'node'
    },
    {
      name: 'EXPRESS',
      state: 'express'
    },
    {
      name: 'MONGODB',
      state: 'mongodb'
    },
    {
      name: 'MONGOOSE',
      state: 'mongoose'
    },
    {
      name: 'PASSPORT',
      state: 'passport'
    }
];

this.getTopics = function() {
  return topics;
}

});
