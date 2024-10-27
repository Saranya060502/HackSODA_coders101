// background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'injectAndExtractTerms') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.id) {
        // Inject the content script dynamically
        chrome.scripting.executeScript(
          {
            target: { tabId: activeTab.id },
            files: ['content.js'],
          },
          () => {
            // Send a message to the content script to start extraction
            chrome.tabs.sendMessage(
              activeTab.id,
              { action: 'extractTerms' },
              (response) => {
                sendResponse(response);
              },
            );
          },
        );
      }
    });
    return true; // Required to use sendResponse asynchronously
  }
});
