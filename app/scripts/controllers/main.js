'use strict';

angular.module('abateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });


   function CarouselDemoCtrl($scope) {
       $scope.myInterval = 5000;
       var slides = $scope.slides = [];
       $scope.addSlide = function() {
       var newWidth = 960 + slides.length;
       slides.push({
	     image: 'http://lorempixel.com/'+ newWidth +'/480/nightlife/',
	     text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
           ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
      };
      for (var i=0; i<4; i++) {
	    $scope.addSlide();
      }
	}
