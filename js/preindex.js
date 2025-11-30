const countdownDate = new Date("April 19, 2025 23:59:59").getTime();

// 更新倒计时的函数
function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // 计算天、时、分、秒
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 如果倒计时结束
  if (distance < 0) {
    clearInterval(countdownInterval);
    window.location.href = "index.html"; // 跳转到 index.html
  }else{
    // 显示倒计时
    document.getElementById("countdown").innerHTML = `剩余 ${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`;
  }
}

// 每秒更新一次倒计时
const countdownInterval = setInterval(updateCountdown, 200);
