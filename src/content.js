// content.js
var $logoLinks = $('a._19eb');
var storySelector = '[data-testid="fbfeed_story"]';
var gifSelector = 'a[aria-label="Post a GIF"]';
var emojiSelector = 'a[aria-label="Insert an emoji"]';
var likeButtonSelector = 'a[data-testid="fb-ufi-likelink"]';
var unlikeButtonSelector = 'a[data-testid="fb-ufi-unlikelink"]';
var delay = 8000;

function getRandomStory() {
    var $allStories = $(storySelector);
    var randomStoryIndex = Math.floor(Math.random() * $allStories.length);
    return $allStories.eq(randomStoryIndex);
}

function getRandomLink($story) {
    var $storyLinks = $story.find("a");
    var randomLinkIndex = Math.floor(Math.random() * $storyLinks.length);
    return $storyLinks.eq(randomLinkIndex);
}

function performRandomAction($story) {
    var probability = Math.random();

    if (probability < 0.9) { // click the like/unlike button
        var likeButtonEl = $story.find(likeButtonSelector)[0];
        var unlikeButtonEl = $story.find(likeButtonSelector)[0];
        if (!!likeButtonEl) {
            console.log("Clicking the like button");
            console.log(likeButtonEl);
            likeButtonEl.click();
        } else if (!!unlikeButtonEl) {
            console.log("Clicking the unlike button");
            console.log(unlikeButtonEl);
            unlikeButtonEl.click();
        }
    } else {
        console.log("Doing something else");
        // var $randomLink = getRandomLink($story);
        // $randomLink[0].click();
    }

}

function scrollRandomly() {
    if ($('body').hasClass('composerExpanded')) {
        var $randomStory = getRandomStory();
        $('html, body').animate({ scrollTop: $randomStory.offset().top }, 2000, function () {
            performRandomAction($randomStory);
        });
    } else {
        $logoLinks[0].click();
    }
}

var interval = setInterval(scrollRandomly, delay);