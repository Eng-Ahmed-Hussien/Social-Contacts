

// Dark mode toggle
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    toggle.addEventListener('click', () => {
      const newTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      toggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });
    // Initialize from preference or localStorage
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    root.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'light' ? '🌙' : '☀️';