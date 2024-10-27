// //console.log(document);
// const elements = document.getElementById("data_use_policy").children;
// //chrome.runtime.sendMessage({ content: elements });
// console.log(Array.from(elements).length);
// Array.from(elements).forEach((element) => {
//   // Check if the element's text includes keywords that indicate terms and conditions

//   chrome.runtime.sendMessage({ content: element.innerHTML });
// });

//console.log(document);

const headings = Array.from(
  document.querySelectorAll("h1, h2, h3, h4, h5, h6")
).filter((h) => /policy|terms/i.test(h.textContent));

let text = "";
headings.forEach((heading) => {
  //   let next = heading.nextElementSibling;
  //   console.log("next = ", next);
  //   while (next) {
  //     text += next.textContent + " ";
  //     next = next.nextElementSibling;
  //     console.log("next = ", next);
  //   }

  arr = Array.from(heading.parentNode.childNodes)
    .filter(
      (node) =>
        node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== ""
    )
    .map((node) => node.textContent.trim());

  text += arr.join(" ");
});
console.log(text);

chrome.runtime.sendMessage({ content: text });
