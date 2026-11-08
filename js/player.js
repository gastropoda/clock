// PLyZP9pkio8SfCkbfPtbElHA3UxmnjN_Dh refuses to be embedded (error 150), so
// its videos are listed here; ?list=<playlist id> still embeds a playlist
const VIDEO_IDS = [
  "t6jlhqNxRYk", "JKe0gryiCCw", "s3Tp8ESiiM4", "jgm58cbu0kw", "wjQq0nSGS28",
  "hOgVAYpHPCc", "zowLNSKyfI0", "2za0IlcvGQM", "nvC1O2ArrwU", "QxVhNTfkTrg",
  "HiUnYXKPYDE", "rFGt1IrfsAo", "WYi9TMfrI1M", "2QWlxqKneLs",
]
const PLAYLIST_ID = new URLSearchParams(window.location.search).get("list")

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
      ...(PLAYLIST_ID && { listType: "playlist", list: PLAYLIST_ID }),
      autoplay: 1,
      controls: 0,
      mute: 1,
    },
    events: {
      onReady: (event) => {
        event.target.mute()
        if (!PLAYLIST_ID) {
          event.target.loadPlaylist(VIDEO_IDS)
        }
      },
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
