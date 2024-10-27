// //console.log(document);
// const elements = document.getElementById("data_use_policy").children;
// //chrome.runtime.sendMessage({ content: elements });
// console.log(Array.from(elements).length);
// Array.from(elements).forEach((element) => {
//   // Check if the element's text includes keywords that indicate terms and conditions

//   chrome.runtime.sendMessage({ content: element.innerHTML });
// });

//console.log(document);

const elements = document.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6");
//chrome.runtime.sendMessage({ content: elements });
Array.from(elements).forEach((element) => {
  // Check if the element's text includes keywords that indicate terms and conditions

  chrome.runtime.sendMessage({ content: element.innerHTML });
});
