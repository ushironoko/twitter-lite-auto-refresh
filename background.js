let script = document.createElement('script')
script.textContent = `
const tlRefresh = () => {
  var homeEl = window.document.querySelector('[aria-label="ホームタイムライン"]')

  if (homeEl) {
    console.log("home")
    homeEl.click()
    setTimeout(() => {
      homeEl.click()
    }, 1000);
  }

  var newHomeEl = window.document.querySelector('[aria-label="ホームタイムライン (新しい未読ツイート)"]')

  if (newHomeEl) {
    console.log("new")
    newHomeEl.click()
    setTimeout(() => {
      newHomeEl.click()
    }, 1000);
  }
}

function onRefresh() {
  setInterval(() => {
    tlRefresh()
  }, 8000)
}

onRefresh()
`
document.body.appendChild(script)
