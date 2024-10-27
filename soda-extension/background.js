chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.content) {
    console.log("Scraped content received in background:", message.content);
    // You can add logic here to save or manipulate the data
  }
});
