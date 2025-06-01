chrome.action.onClicked.addListener(openDemoTab);

function openDemoTab() {
  chrome.tabs.create({url: "index.html"}); //打开一个新的标签页 定位到 url 地址
}
