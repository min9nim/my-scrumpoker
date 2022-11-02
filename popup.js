

btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPoints,
  })
  btn.innerHTML = 'done ✅'
})


// The body of this function will be executed as a content script inside the
// current page
function setPoints() {
  // document.querySelector('#dkHead')?.remove()
  document.querySelector('.area_menu')?.remove()
  var dom = document.querySelector('#dkHead')
  dom?.setAttribute('style', 'background-color: rgba(255,255,255,.45);border-bottom: 0')

  setInterval(() => {
    document.querySelectorAll('table.mat-table div').forEach(item => {
      if (item.innerHTML === ' 0 ') {
        item.innerHTML = '0.25'
      }

      if (item.innerHTML === ' ? ') {
        item.innerHTML = '0.1'
      }
    })

    document.querySelectorAll('div.flex-container div').forEach(item => {
      if (item.innerHTML === '0') {
        item.innerHTML = '0.25'
      }
      if (item.innerHTML === '?') {
        item.innerHTML = '0.1'
      }
    })
  }, 100)


}
