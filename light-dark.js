const toggleButton = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // load whatever was last chosen
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '🌙';
  }

  toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');

    // icon switcher
    themeIcon.textContent = isDark ? '🌙' : '🌞';

    // save
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
