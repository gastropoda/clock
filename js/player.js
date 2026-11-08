const PLAYLIST_ID = "PLkTz_WL5d6Ii6uqgJCGV442sSlp1PHYPw"

function shuffleAndPlay(player) {
  player.setLoop(true)
  player.setShuffle(true)
  player.playVideoAt(0)
}

function onYouTubeIframeAPIReady() {
  let shuffled = false
  new YT.Player("player", {
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
        if (!shuffled && event.target.getPlaylist()) {
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
