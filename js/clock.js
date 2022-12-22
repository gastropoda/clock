function updateClock() {
  let doc = window.document
  let dt = luxon.DateTime.now().setLocale("ru-RU")
  let time = dt.toFormat("HH:mm")
  doc.getElementById("time").innerText = time
  doc.getElementById("title").innerText = time
  let date = dt.toFormat("EEEE - d MMMM - неделя WW")
  doc.getElementById("date").innerText = date
}

function toggleFullscreen(element) {
  let doc = window.document
  if (doc.fullscreenElement) {
    doc.exitFullscreen()
  } else {
    element.requestFullscreen()
  }
}

setInterval(updateClock, 1000)
window.addEventListener("keydown", (event) => {
  if (event.code == "KeyF") {
    let doc = window.document
    let body = doc.getElementsByTagName("body")[0]
    toggleFullscreen(body)
  }
})
