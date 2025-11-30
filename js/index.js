$(document).ready(function () {
  //如果是移动端，无法触发hover
  if (isMobile()) {
    $(".container").on("click", () => function () {
      $(".lid").toggleClass("open", 500);
      setTimeout(function () {
        $(".card-border").toggleClass("slide", 200);
      }, 500);
    });
  }
  $(".card").click(function () {
    //淡出界面后前往下一个页面
    $(".container").fadeOut('slow', () => {
      location.href = "./letter.html";
    });
  });
});

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
