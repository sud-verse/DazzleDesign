// Button actions
document.getElementById('workBtn').addEventListener('click', () => {
    alert("Thanks!\nWe'll reach out soon — replace this with real action.");
  });
  
  document.getElementById('samplesBtn').addEventListener('click', () => {
    document.getElementById('samples').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Accessibility enhancement: enable focus outlines for keyboard users
  document.addEventListener('keyup', function onFirstTab(e) {
    if (e.key === 'Tab') {
      document.documentElement.style.setProperty('--focus-outline', '2px solid rgba(255,255,255,0.12)');
      document.removeEventListener('keyup', onFirstTab);
    }
  });
  