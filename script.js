document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggle-sidebar');
  const sidebar = document.querySelector('.sidebar');
  
  // 初始化侧边栏状态
  const savedState = localStorage.getItem('sidebarState');
  if (savedState === 'open') {
    sidebar.classList.add('show');
    toggleButton.setAttribute('aria-expanded', 'true');
  }
  
  // 切换侧边栏
  toggleButton.addEventListener('click', function() {
    const isExpanded = sidebar.classList.toggle('show');
    toggleButton.setAttribute('aria-expanded', isExpanded);
    
    // 保存用户偏好
    localStorage.setItem('sidebarState', isExpanded ? 'open' : 'closed');
  });
  
  // 点击内容区域关闭侧边栏（移动端）
  document.querySelector('.content').addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && sidebar.classList.contains('show')) {
      if (e.target.closest('.sidebar') === null && e.target !== toggleButton) {
        sidebar.classList.remove('show');
        toggleButton.setAttribute('aria-expanded', 'false');
        localStorage.setItem('sidebarState', 'closed');
      }
    }
  });
});
