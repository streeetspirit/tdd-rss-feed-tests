/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('each has non-empty URL', function() {
           for (const feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url).not.toBe('');
           }
         });


        /* test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('each has non-empty name', function() {
           for (const feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBe('');
           }
         });
    });


    /* test suite for the menu */
    describe('The menu', function() {
        let body = $('body');

        /* test that the menu element is hidden by default. */
         it('is hidden by default', function() {
            expect(body.attr('class')).toEqual('menu-hidden');
         });

         /* test ensures the menu changes
          * visibility when the menu icon is clicked
          */
          it('appears and hides when the menu is clicked', function() {
            let menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
          });
    });

    /* test suite "Initial Entries" */
    describe('Initial Entries', function() {
        /* test ensures when the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         * Here we use the first rss feed (element 0) to test things
         * loadFeed() is asynchronous so this test uses beforeEach and asynchronous done() function.
         */
         beforeEach (function (done) {
             loadFeed (0, done);
         });

         it('have at least one element after loading', function() {
            expect($('.entry').length>0).toBe(true);
         });
    });

    /*test suite "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         *
         * By default feed #0 is loaded, feedContents0 keeps html generated for it
         * after that - load different feed and save its html as well
         * compare html contents
        */
        let feedContents0,
            feedContents1;
            let feed = $('.feed');

         beforeEach (function (done) {
            feedContents0 = feed.html();

            loadFeed (1, function () {
              feedContents1 = feed.html();
              done();
            });
         });

         it('is different from previously loaded feed', function() {
            expect(feedContents0).not.toBe(feedContents1);
         });
    });
}());
