// content.js
var $logoLinks = $('a._19eb');
var storySelector = '[data-testid="fbfeed_story"]';
var gifSelector = 'a[aria-label="Post a GIF"]';
var emojiSelector = 'a[aria-label="Insert an emoji"]';
var likeButtonSelector = 'a[data-testid="fb-ufi-likelink"]';
var unlikeButtonSelector = 'a[data-testid="fb-ufi-unlikelink"]';
var postTextareaSelector = 'textarea[name="xhpc_message"]';
var postFormSelector = '#pagelet_composer form';
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

function clickLikeOrUnlike($story) {
    var likeButtonEl = $story.find(likeButtonSelector)[0];
    var unlikeButtonEl = $story.find(unlikeButtonSelector)[0];
    if (!!likeButtonEl) {
        console.log("Clicking the like button");
        console.log(likeButtonEl);
        likeButtonEl.click();
    } else if (!!unlikeButtonEl) {
        console.log("Clicking the unlike button");
        // console.log(unlikeButtonEl);
        // unlikeButtonEl.click();
    }
}

function clickRandomLink($story) {
    var $randomLink = getRandomLink($story);
    $randomLink[0].click();
}

function scrollThenPerform($story, functionName) {
    $('html, body').animate({ scrollTop: $story.offset().top }, 2000, function () {
        window[functionName]($story);
    });
}

function performRandomAction() {
    var $story = getRandomStory();

    var probability = Math.random();

    if (probability < 0.5) {
        console.log("Like Button");
        scrollThenPerform($story, "clickLikeOrUnlike");
    } else {
        console.log("Clicking a random link within the story");
        scrollThenPerform($story, "clickRandomLink");
    }
}

function scrollRandomly() {
    if ($('body').hasClass('composerExpanded')) {
        performRandomAction();
    } else {
        $logoLinks[0].click();
    }
}

var interval = setInterval(scrollRandomly, delay);