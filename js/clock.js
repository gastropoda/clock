let locales = [{
  name: "ru-RU",
  week: "неделя",
},{
  name: "nl-NL",
  week: "week",
},{
  name: "en-US",
  week: "Week",
}]
let currentLocaleIndex = 0

function currentLocale() {
  return locales[currentLocaleIndex];
}

function nextLocale() {
  currentLocaleIndex = (currentLocaleIndex+1) % locales.length;
}

function updateClock() {
  let locale = currentLocale()
  let doc = window.document
  let dt = luxon.DateTime.now().setLocale(locale.name)
  let time = dt.toFormat("HH:mm")
  doc.getElementById("time").innerText = time
  doc.getElementById("title").innerText = time
  let date = dt.toFormat(`EEEE - d MMMM - '${locale.week}' WW`)
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

  if (event.code == "KeyL") {
    nextLocale()
    updateClock()
  }
})
