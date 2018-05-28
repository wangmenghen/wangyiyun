console.log('开始搞事情')

let message = {
  type: 'dynamic',
  data: '拿到音乐动态了'
}
chrome.runtime.sendMessage(message, function(response) {
  // document.write(response)
  document.getElementById('response').innerHTML = response
})

chrome.runtime.sendMessage('Hello', function(response) {
  // document.write(response)
  document.getElementById('response').innerHTML = response
})