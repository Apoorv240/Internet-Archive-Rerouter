chrome.action.onClicked.addListener(async (tab) => {
	var newURL = "http://web.archive.org/web/" + tab.url;
	chrome.tabs.create({ url: newURL });
});