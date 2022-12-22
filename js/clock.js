function updateClock() {
  let dt = luxon.DateTime.now().setLocale("ru-RU")
  let time = dt.toFormat("HH:mm");
  document.getElementById("time").innerText = time;
  document.getElementById("title").innerText = time;
  let date = dt.toFormat("EEEE - d MMMM - неделя WW")
  document.getElementById("date").innerText = date;
}

setInterval(updateClock, 1000)
