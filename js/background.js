console.log('hello I am background js!')
function test()
{
	// alert('我是background！');
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if(message == 'Hello'){
      sendResponse('Hello from background.');
  }
});
let dynamicData = {}
chrome.runtime.onMessage.addListener( function (message, sender, sendResponse) {
  console.log('message', message)
  if (message.type === 'dynamic') {
    console.log('message.data:', message.data)
    sendResponse('Hello from background.');
  }
})

