const DEFAULT_PLAYLIST_ID = "PLyZP9pkio8SfCkbfPtbElHA3UxmnjN_Dh"
const PLAYLIST_ID = new URLSearchParams(window.location.search).get("list") || DEFAULT_PLAYLIST_ID

function shuffleAndPlay(player) {
  player.setLoop(true)
  player.setShuffle(true)
  player.playVideoAt(0)
}

let player

function playRandomVideo() {
  let playlist = player && player.getPlaylist()
  if (playlist && playlist.length) {
    player.playVideoAt(Math.floor(Math.random() * playlist.length))
  }
}

function onYouTubeIframeAPIReady() {
  let shuffled = false
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    playerVars: {
      listType: "playlist",
      list: PLAYLIST_ID,
      autoplay: 1,
      controls: 0,
      mute: 1,
    },
    events: {
      onReady: (event) => event.target.mute(),
      onStateChange: (event) => {
        // the playlist is only known once the first video is loaded
        let playlist = event.target.getPlaylist()
        if (!shuffled && playlist && playlist.length) {
          shuffled = true
          shuffleAndPlay(event.target)
        }
      },
    },
  })
}

let tag = document.createElement("script")
tag.src = "https://www.youtube.com/iframe_api"
document.head.appendChild(tag)

window.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    playRandomVideo()
  }
})
