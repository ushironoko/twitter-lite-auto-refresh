let script = document.createElement('script')
script.textContent = `
const tlRefresh = () => {
  const active = document.activeElement

  const scrollY = window.pageYOffset

  if (active === 'body' || scrollY === 0) {
    const homeEl = window.document.querySelector(
      '[aria-label="ホームタイムライン"]'
    )

    if (homeEl) {
      homeEl.click()
      setTimeout(() => {
        homeEl.click()
      }, 1000)
    }

    const newHomeEl = window.document.querySelector(
      '[aria-label="ホームタイムライン (新しい未読ツイート)"]'
    )

    if (newHomeEl) {
      newHomeEl.click()
      setTimeout(() => {
        newHomeEl.click()
      }, 1000)
    }
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
