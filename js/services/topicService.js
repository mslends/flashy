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
      name: 'CSS POSITIONING',
      state: 'cssPositioning'
    },
    {
      name: 'ADVANCED HTML',
      state: 'advHtml'
    },
    {
      name: 'ADVANCED CSS',
      state: 'advCss'
    },
    {
      name: 'JS FUNDAMENTALS (FUNCTIONS)',
      state: 'jsFundamentals'
    },
    {
      name: 'JS OBJECTS',
      state: 'jsObj'
    },
    {
      name: '".THIS',
      state: 'this'
    },
    {
      name: 'JS CALLBACKS',
      state: 'callbacks'
    },
    {
      name: 'JS PROTOTYPES',
      state: 'prototypes'
    },
    {
      name: 'JQUERY',
      state: 'jquery'
    },
    {
      name: 'JQUERY 2',
      state: 'jquery2'
    },
    {
      name: 'ANGULAR',
      state: 'angular'
    },
    {
      name: 'ANGULAR SERVICES',
      state: 'angularServices'
    },
    {
      name: '$HTTP',
      state: 'angular$http'
    },
    {
      name: '$Q.DEFER',
      state: 'angular$q'
    },
    {
      name: 'JSONP',
      state: 'jsonp'
    },
    {
      name: 'UI-ROUTER',
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
