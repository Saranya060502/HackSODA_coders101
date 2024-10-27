document.getElementById("scrape-btn").addEventListener("click", async () => {
  // Execute content.js in the current tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
