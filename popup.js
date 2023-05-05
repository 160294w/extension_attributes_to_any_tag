document.addEventListener('DOMContentLoaded', function() {
  const addAttributeButton = document.getElementById('add-attribute');
  addAttributeButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tag = document.getElementById('tag').value;
      const attribute = document.getElementById('attribute').value;
      const value = document.getElementById('value').value;
      const code = `
        var elements = document.getElementsByTagName('${tag}');
        for (var i = 0; i < elements.length; i++) {
          elements[i].setAttribute('${attribute}', '${value}');
        }
      `;
      chrome.tabs.executeScript(tabs[0].id, { code: code });
    });
  });
});
