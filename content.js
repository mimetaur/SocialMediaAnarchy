// content.js
alert("Hello from Art! Be free of the burden of choice.");

var clickedIn = false;
var $logoLinks = $('a._19eb');

function scrollRandomly() {
    var $allStories = $('[data-testid="fbfeed_story"]');
    var randomStoryIndex = Math.floor(Math.random() * $allStories.length);
    var $randomStory = $allStories.eq(randomStoryIndex);
    $('html, body').animate({ scrollTop: $randomStory.offset().top}, 2000, function() {
        if (clickedIn) {
            $logoLinks[0].click();
        } else {
            var $storyLinks = $randomStory.find("a");
            var randomLinkIndex = Math.floor(Math.random() * $storyLinks.length);
            var $randomLink = $storyLinks.eq(randomLinkIndex);
            $randomLink.css("background-color", "#dddddd");
            clickedIn = true;
            $randomLink[0].click();
        }
    });
}

setInterval(scrollRandomly, 5000);