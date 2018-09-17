'use strict';

var app = angular.module('wootricIonic', ['ionic'])

app.factory('wootricFactory', function() {
  window.wootricSettings = {
    // email: 'customer@example.com', // TODO: Required to uniquely identify a user. Email is recommended but this can be any unique identifier. OPTIONAL
    // created_at: 1234567890, //TODO: replace it with date when your customer signed up. OPTIONAL
    account_token: 'NPS-XXXXXXXX' // This is your unique account token.
  };

  return {
    run: function() {
      window.wootric_survey_immediately = true; // Shows survey immediately for testing purposes.  TODO: Comment out for production.
      window.wootric_no_surveyed_cookie = true; // Bypass cookie based throttle for testing purposes.  TODO: Comment out for production.
      window.wootric('run');
    }
  }
})

app.controller('wootricIonicController', [
  'wootricFactory', function(wootricFactory) {
    wootricFactory.run();
  }
]);