var hideTrendingInp = document.getElementById('hide-trending');
var hideExploreInp = document.getElementById('hide-explore');
var hideWhoToFollowInp = document.getElementById('hide-who-to-follow');

// Set saved values
chrome.storage.sync.get(
  ['hideTrending', 'hideExplore', 'hideWhoToFollow'],
  ({ hideTrending, hideExplore, hideWhoToFollow }) => {
    hideTrendingInp.checked = hideTrending;
    hideExploreInp.checked = hideExplore;
    hideWhoToFollowInp.checked = hideWhoToFollow;
  },
);

hideTrendingInp.addEventListener('click', () => {
  var hideTrending = hideTrendingInp.checked;
  changeOptions({ hideTrending });
});

hideExploreInp.addEventListener('click', () => {
  var hideExplore = hideExploreInp.checked;
  changeOptions({ hideExplore });
});

hideWhoToFollowInp.addEventListener('click', () => {
  var hideWhoToFollow = hideWhoToFollowInp.checked;
  changeOptions({ hideWhoToFollow });
});

function changeOptions(options) {
  chrome.storage.sync.set(options);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { msg: 'refresh' });
  });
}

// async function executeHideScript(f, args = []) {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: f,
//   });
// }

console.log('Ran Popup.js');
// executeHideScript(() => {
//   chrome.storage.sync.get('hideTrending', ({ hideTrending }) => {
//     console.log('Hide Trends', hideTrending);
//     setHideTrending(hideTrending);
//   });
// });
