# RSS feed testing Project4 Udacity FEND
Assignment #4 from Udacity Front-End Web Development Nanodegree.

The purpose of this project is get to know how Jasmine library works, how to write different tests for a web application.

## Here is a description of all the tests implemented and where to find them:

* The application files are: HTML (./index.html), CSS (./css/style.css) and JavaScript (./js/app.js) if you want to understand of how it works.
* Jasmine spec file is in ./jasmine/spec/feedreader.js  - that's where all the test are.
### Tests

* A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* A test that ensures the menu element is hidden by default.
* A test that ensures the menu changes visibility when the menu icon is clicked.
* A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
* A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

-----
For this project the application that grabs feeds and displays them for several feeds was developed by Udacity and ready to use.
Jasmine was included (I'd use fresher version but I guess that was more convenient to have everything prepackaged already)
---

## Running RSS feed tester on your computer
1. Clone the repo
2. open index.html file
3. Watch at the bottom testing results from Jasmine
