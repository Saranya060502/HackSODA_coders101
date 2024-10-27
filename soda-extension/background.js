chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (message.content) {
    console.log("Scraped content received in background:", message.content);
    // You can add logic here to save or manipulate the data
  }

  fetch("http://localhost:5000/summarize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      policy: message.content,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Response from ChatGPT:", data.summary);
      chrome.runtime.sendMessage({ content: data.summary, extention: true });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
