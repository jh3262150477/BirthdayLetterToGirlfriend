let clickNum = 0;
const letter_end = $(".letter-end");
const music_bar = $(".music-bar");
const music = document.getElementById("music");

$(document).ready(function () {
  $(".container").animate({opacity: 1}, "slow");

  music_bar.click(function () {
    playMusic();
  });

  letter_end.click(function () {
    switch (clickNum++) {
      case 0:
        letter_end.css({color: 'red'});
        break;
      case 1:
        letter_end.css({color: 'orange'});
        break;
      case 2:
        letter_end.css({color: 'yellow'});
        break;
      case 3:
        letter_end.css({color: 'green'});
        break;
      case 4:
        letter_end.css({color: 'cyan'});
        break;
      case 5:
        letter_end.css({color: 'blue'});
        break;
      case 6:
        letter_end.css({color: 'purple'});
        clickNum = 0;
        break;
    }
  })
});

function playMusic() {
  if (music.paused) {
    music.play();
    music_bar.animate({opacity: 0.8}, "slow");
  } else {
    music.pause();
    music_bar.animate({opacity: 0.3}, "slow");
  }
}
