
//function injectedCodes(tag, attribute, value) {
// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab[0];

// }

function setAttr(tag, attribute, value) {
    console.log("call setAttr func");
    console.log(tag)
    console.log(attribute)
    console.log(value)
    // var elements = document.getElementsByTagName('${tag}');
    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].setAttribute('${attribute}', '${value}');
    // }
    var elements = document.getElementsByTagName(tag);
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute(attribute, value);
    }
    
    console.log("call setAttr func");
}
//}


const addAttributeButton = document.getElementById('add-attribute');
addAttributeButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	const tag = document.getElementById('tag').value;
	const attribute = document.getElementById('attribute').value;
	const value = document.getElementById('value').value;
	chrome.scripting.executeScript({
	    //target: {tabId: getTabId()},
	    target: {tabId: tabs[0].id },//getCurrentTab().id}, 
	    func: setAttr,
	    args: [tag, attribute, value ]
	});
    });
});
