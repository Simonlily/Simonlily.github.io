  document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-sidebar');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.querySelector('.main-content');
  const footer = document.querySelector('footer');
  toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    toggleBtn.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
      toggleBtn.textContent = '<';
    } else {
      toggleBtn.textContent = '>';
    }
  });
  window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
      sidebar.classList.remove('active');
      toggleBtn.classList.remove('active');
      toggleBtn.textContent = '>';
    }
  });
  if (window.innerWidth <= 992) {
    sidebar.classList.add('active');
    toggleBtn.classList.add('active');
    toggleBtn.textContent = '<';
  }
});
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;  
  const messages = [
    "在熬夜？小心猝死！",
    "喂喂喂，别熬夜了",
    "你还在吗？",
    "已经三点了...",
    "还有几个小时天就亮了...",
    "你是早起的吗，还是说熬到了五点？",
    "额，早上好...",
    "新的一天开始啦！",
    "鼓足干劲开始工作！",
    "学习可真辛苦啊...",
    ";-)",
    "在坚持一个小时就可以吃午饭了！",
    "困...睡...",
    "昨晚熬的太晚了啊...",
    "ZZZ...",
    "新的下午！",
    "已经四点力",
    "恭喜你摸鱼摸了一个下午（笑",
    "六点，下班！",
    "快去看新闻联播！",
    "八点，是时候开始躺平了！",
    "不想睡觉...",
    "今晚来个通宵！",
    "哈哈哈（颠疯"
  ];
  const messageElement = document.getElementById('clock-message');
  if (messageElement) {
    messageElement.textContent = messages[now.getHours()];
  }
}
updateClock();
setInterval(updateClock, 1000);      
