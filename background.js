let script = document.createElement('script')
script.textContent = `
const tlRefresh = () => {
  const modal = window.document.getElementsByClassName(
    'DraftEditor-root'
  )

  let scrollY = window.pageYOffset

  const newHomeEl = window.document.querySelector(
    '[aria-label="ホームタイムライン (新しい未読ツイート)"]'
  )

  const homeEl = window.document.querySelector(
    '[aria-label="ホームタイムライン"]'
  )

  if (modal.length === 0 && scrollY === 0) {

    if (homeEl) {
      homeEl.click()
      setTimeout(() => {
        homeEl.click()
      }, 1000)
    }


    if (newHomeEl) {
      newHomeEl.click()
      setTimeout(() => {
        newHomeEl.click()
      }, 1000)
    }

    scrollY = 0
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
