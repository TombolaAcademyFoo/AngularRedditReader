AngularRedditReader
=============

This app demonstrates many of ther features in Angular. The UI is very basic and is not intended to be an example of a good design!
The following features are important:
  1. The use of NPM and Bower
  2. The Grunt setup and Tasks
  3. The usuage of a Linter (JSHint)
  3. Less
  4. Global Abatement in the JS
  5. The break-down of the JS into Anuglar modules
  6. Some degree of logical structure in the JS file organisation following the angualr module structure
  7. The use of built in providers:
      1. $scope
      2. $http
      3. $q
      4. $document - Audio
      4. $interval - Audio
      5. TODO:  $timeout - Automatic updater
  8. The use of custom providers:
    1. services
    2. factories
    3. constants
  9. The use of built in and custom filters
  10. The use of a directive
  11. TODO: Express server & Watch
  12. Unit Testing
    2. Roles and responsibilities of Gulp, Karma, Mocha, Chai and Sinon
    3. What consitiutes a good unit test
    3. Examples
        1. Simple example - Constants
        2. TODO: Other Provider with injected dependency / sinon mock
        3. TODO: $HTTPbackend for the API PRoxy
        4. TODO: Contoller
        5. TODO: Directive
        6. TODO: Filter
        7. TODO: Audio
  13. TODO: E2E Testsing

Setting Up the Project
----------------------
1. Install node according to the instructions given on the wiki page, don't forget:
    1. npm install -g bower
    2. npm install -g grunt
2. Clone or download the source
3. From a terminal/console, cd into the directory the project is in
4. Execute the following, to install the dependencies:
    1. npm install
    2. bower install
5. Execute "grunt" from the command line to run.