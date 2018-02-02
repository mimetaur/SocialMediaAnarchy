// content.js
var $logoLinks = $('a._19eb');
var delay = 5000;
var interval;

function getRandomStory() {
    var $allStories = $('[data-testid="fbfeed_story"]');
    var randomStoryIndex = Math.floor(Math.random() * $allStories.length);
    return $allStories.eq(randomStoryIndex);
}

function getRandomLink($randomStory) {
    var $storyLinks = $randomStory.find("a");
    var randomLinkIndex = Math.floor(Math.random() * $storyLinks.length);
    return $storyLinks.eq(randomLinkIndex);
}

function scrollRandomly() {
    clearInterval(interval);
    if (delay > 500) {
        delay = delay - 100;
    }
    interval = setInterval(scrollRandomly, delay);
    var $randomStory = getRandomStory();

    if ($('body').hasClass('composerExpanded')) {
        $('html, body').animate({ scrollTop: $randomStory.offset().top}, 2000, function() {
            var $randomLink = getRandomLink($randomStory);
            $randomLink.css("background-color", "#dddddd");
            $randomLink[0].click();
        });
    } else {
        $logoLinks[0].click();
    }
}

interval = setInterval(scrollRandomly, delay);