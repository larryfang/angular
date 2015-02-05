# ANZ Code Challenge

> ## The purpose of creating this project is to help developers to learn AngularJS but please don't copy paste my code to pass any code challenge. 


### Angular.JS

My solution is based onAngular.js mobile/web app to graphically display recent earthquake occurrences
and information on a map using data provided by [Seismi's REST API](http://www.seismi.org/api/).

> In addition, through this example you can learn how to use Grunt build script to build the entire app as well as how Jasmine, Karma and Protractor cover unit and end2end test.


### Design

I love Angular.JS so it's being chosen for its simplicity and power to solve this problem.

The design pattern I'm using is mostly based on the general principle of Angular and Javascript community which has a main controller and service. The service will invoke the public API and the results will be rendered via html page.


### Set up guide

Assuming you have Node running locally on your machine and have general knowledge of node and npm:

```
$ from command line: cd into project home directory which will be 'anz' in your case
$ bower install (if you are promoted to provide further choice please choose option 1)
$ sudo npm install
$ sudo npm install -g grunt-cli ( grunt is the build tool for this application)
$ npm install -g protractor ( you need protractor to be installed to run end2end test)
$ node_modules/selenium-standalone/bin/selenium-standalone install (this will install selenium and chrome driver to run protractor end 2 end test)
$ grunt server (This will start the API at port 5000)
$ grunt dev (This will start the application locally at port 4000)
$ open localhost:4000 on your browser
$ to run both unit and end2end test simply run "grunt test" but please make sure your local server is still up running.

```

If you want to build the solution locally, you'll have to have npm and bower installed and have some general knowledge of both. 

If you have any trouble running my app please contact me asap.


**NOTE:** I've developed locally on Mac OX X, so although there's no reason why the app
shouldn't also work on Windows it hasn't been tested there yet. Node is fully cross-platform
compatible, but not all npm packages are developed with that compatibility in mind. If you run
into issues installing there, please reach out to me directly and I'll take a look and provide
assistance.



### Frameworks and 3<sup>rd</sup>-party libraries used

- [Node](http://nodejs.org/) or [IO](https://iojs.org/) JavaScript on the server
- [AngularJS](https://angularjs.org/) Superheroic JavaScript Framework
- [ngMap](https://travis-ci.org/allenhwkim/angularjs-google-maps.png?branch=master) Fantastic Angular directive provided for integration with google map api
- [google map api](https://maps.googleapis.com/maps/api/js) Popular map api to display the earthquake events on google map


  **NB** cors-anywhere is my quick-and-dirty solution to one of the most common (and frustrating)
  problems encountered front-end JavaScript development - the Browsers' in-built security model.
  Designed - justifiably - to prevent [XSS injection attacks](https://www.owasp.org/index.php/Cross-site_Scripting_%28XSS%29),
  browsers inherently prevent execution of code which doesn't adhere to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

  However, in circumstances where the execution of remote code across origins is considered both safe and
  desirable, [JSONP](http://json-p.org/) and more recently [CORS](http://www.w3.org/TR/cors/)
  are most commonly used. Sadly, the Seismi API doesn't support either of these alternatives.
  :disappointed: Failing either of those alternative, I needed to set up a local server to
  deliver responses from the same-origin (eg. run an Express server or similar), or alternatively
  simulate CORS support. 
  
  That's why you have to run "grunt server" to kick off a local proxy api server first which is really a shame until Seismi supports JSONP one day.


### Feature highlight

- Customisable markers for earthquake on google map
- Click marker to display details of each occurence
- Full test coverage including unit and end2end test
- App is built by Grunt


