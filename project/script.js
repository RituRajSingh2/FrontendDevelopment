document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful! Redirecting to dashboard...');
    document.querySelector('.login-section').classList.add('hidden');
    document.querySelector('.dashboard-section').classList.remove('hidden');
  });
  
  function navigateTo(section) {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  