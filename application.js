// 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var toto;
  var player;
  function onYouTubeIframeAPIReady() {
    console.log("toto is ready");
    toto = new YT.Player('toto', {
      height: '390',
      width: '640',
      videoId: 'mrY-L2YkPlo',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'ohaUNmmbm0Q',
      events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    console.log("Player is ready");
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }


  function stop() {
    player.stopVideo();
    toto.stopVideo();
  }

  function play() {
    player.playVideo();
    toto.playVideo();
  }

//var  balises = toto.getCurrentTime();
//if (toto.getCurrentTime() > 7 && done){
//console.log("balises is ready");
//  seek(56);
//}


  function seek(Number){
    var Number = $('input').val();
    player.seekTo(Number,'false');
  }










