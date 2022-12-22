function updateClock() {
  let doc = window.document
  let dt = luxon.DateTime.now().setLocale("ru-RU")
  let time = dt.toFormat("HH:mm")
  doc.getElementById("time").innerText = time
  doc.getElementById("title").innerText = time
  let date = dt.toFormat("EEEE - d MMMM - неделя WW")
  doc.getElementById("date").innerText = date
}

setInterval(updateClock, 1000)
