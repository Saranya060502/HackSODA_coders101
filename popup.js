// popup.js

function requestTermsExtraction() {
  chrome.runtime.sendMessage(
    { action: 'injectAndExtractTerms' },
    (response) => {
      if (response && response.terms) {
        document.getElementById('termsOutput').textContent = response.terms;
      } else {
        document.getElementById('termsOutput').textContent =
          'No terms found or failed to extract.';
      }
    },
  );
}

document
  .getElementById('extractButton')
  .addEventListener('click', requestTermsExtraction);
