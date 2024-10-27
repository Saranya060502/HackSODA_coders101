// content.js

function extractTermsAndConditions() {
  let termsText = [];
  const elements = document.querySelectorAll('h1, h2, h3, p, div');

  elements.forEach((element) => {
    const textContent = element.textContent.trim();
    if (
      textContent.toLowerCase().includes('terms') ||
      textContent.toLowerCase().includes('conditions') ||
      textContent.toLowerCase().includes('services')
    ) {
      termsText.push(textContent);
    }
  });

  return termsText;
}

// Listen for a message to start extraction
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractTerms') {
    const terms = extractTermsAndConditions();
    sendResponse({ terms });
  }
});
