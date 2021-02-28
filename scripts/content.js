// var trendingSelector = '[aria-label="Timeline: Trending now"]';
// var whoToFollowSelector = '[aria-label="Who to follow"]'; //.parent;
// var exploreBtnSelector = 'a[href="/explore"]';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.msg === 'refresh') {
    chrome.storage.sync.get(
      ['hideTrending', 'hideExplore', 'hideWhoToFollow'],
      ({ hideTrending, hideExplore, hideWhoToFollow }) => {
        console.log({ hideTrending, hideExplore, hideWhoToFollow });
        hideElement(document.querySelector('[aria-label="Timeline: Trending now"]'), hideTrending);
        hideElement(document.querySelector('[aria-label="Who to follow"]').parentElement, hideWhoToFollow);
        hideElement(document.querySelector('a[href="/explore"]'), hideExplore);
      },
    );
  }
});

chrome.storage.sync.get(
  ['hideTrending', 'hideExplore', 'hideWhoToFollow'],
  ({ hideTrending, hideExplore, hideWhoToFollow }) => {
    console.log({ hideTrending, hideExplore, hideWhoToFollow });

    hideElement(document.querySelector('[aria-label="Timeline: Trending now"]'), hideTrending);
    hideElement(document.querySelector('[aria-label="Who to follow"]').parentElement, hideWhoToFollow);
    hideElement(document.querySelector('a[href="/explore"]'), hideExplore);
  },
);

function hideElement(el, hide) {
  el.style.display = hide ? 'none' : '';
}

console.log('Ran Content Script');
