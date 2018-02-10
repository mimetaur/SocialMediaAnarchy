// content.js
var $logoLinks = $('a._19eb');
var storySelector = '[data-testid="fbfeed_story"]';
var gifSelector = 'a[aria-label="Post a GIF"]';
var emojiSelector = 'a[aria-label="Insert an emoji"]';
var likeButtonSelector = 'a[data-testid="fb-ufi-likelink"]';
var unlikeButtonSelector = 'a[data-testid="fb-ufi-unlikelink"]';

var $composer = $("#pagelet_composer");
var postTextareaSelector = 'textarea[name="xhpc_message"]';
var postFormSelector = 'form';
var postSubmitterSelector = 'button[data-testid="react-composer-post-button]';
var delay = 8000;
var punctuation = [".", "!", "?"];

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
    if (!!unlikeButtonEl) {
        // console.log("Clicking the unlike button");
        // console.log(unlikeButtonEl);
        // unlikeButtonEl.click();
    } else if (!!likeButtonEl) {
        console.log("Clicking the like button");
        console.log(likeButtonEl);
        likeButtonEl.click();
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

function makeARandomPost() {
    var numWords = Math.floor(Math.random() * 8) + 2;
    var myWords = words(numWords).join(" ");
    var punc = punctuation[Math.floor(Math.random() * punctuation.length)];

    $composer.find(postTextareaSelector)[0].value = myWords + punc;
    $composer.find(postFormSelector).submit();


    // TODO try and get this dialog opening code to work

    // $(postTextareaSelector)[0].click();
    // setTimeout(function () {
    //     console.log($(postSubmitterSelector));
    // }, 2000);


    // $(postSubmitterSelector)[0].click();

    // var e = jQuery.Event('keypress');
    // e.which = 13; // #13 = Enter key
    // $(postTextareaSelector).focus();
    // $(postTextareaSelector).trigger(e);
}

function performRandomAction() {
    var $story = getRandomStory();

    var probability = Math.random();
    if (probability < 0.5) {
        console.log("Like Button");
        scrollThenPerform($story, "clickLikeOrUnlike");
    } else if (probability < 0.75) {
        console.log("Clicking a random link within the story");
        scrollThenPerform($story, "clickRandomLink");
    } else {
        makeARandomPost();
    }
}

function scrollRandomly() {
    if ($('body').hasClass('composerExpanded')) {
        performRandomAction();
    } else {
        $logoLinks[0].click();
    }
}

function begin() {
    var interval = setInterval(scrollRandomly, delay);
}

begin();