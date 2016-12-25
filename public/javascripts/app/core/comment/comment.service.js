'use strict';

angular.
  module('core.comment').
  factory('Comment', ['$resource',
    function($resource){
      // The second argument is for paramDefaults
      // return $resource('api2/people/:id/comments', {}, {
      return $resource('api2/people/:personId/reviews/:reviewId/comments/:id', {}, {
        // query: {
        //   method: 'GET',
        //   isArray: true,
        // }
        count: {
          method: 'GET',
          params: { id: 'count' },
        },
      });
    }
  ]).
  factory('Review', ['$resource',
    function($resource) {
      return $resource('api2/people/:personId/reviews/:id', {}, {
        // query: {
        //   method: 'GET',
        //   isArray: true,
        // },
        count: {
          method: 'GET',
          params: { id: 'count' },
        },
      })
  }]);