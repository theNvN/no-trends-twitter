// Initial values
var hideTrending = true;
var hideExplore = false;
var hideWhoToFollow = false;

// Save initial values
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ hideTrending, hideExplore, hideWhoToFollow });
  console.log('Set default state.');
});
