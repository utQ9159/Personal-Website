document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.exp-btn');
  const texts = document.querySelectorAll('.exp-text');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Aktif butonu değiştir
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // İçerikleri göster/gizle
      const target = btn.getAttribute('data-exp');
      texts.forEach(text => {
        if (text.id === target) {
          text.classList.add('active');
        } else {
          text.classList.remove('active');
        }
      });
    });
  });
});

const activityButtons = document.querySelectorAll('.act-btn');
const activityContents = document.querySelectorAll('.activity-content');

activityButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-activity');

    // Tüm içerikleri gizle
    activityContents.forEach(content => {
      content.style.display = 'none';
    });

    // Tüm butonlardan 'active' sınıfını kaldır
    activityButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Tıklanan butonu ve içeriği aktif hale getir
    document.getElementById(targetId).style.display = 'block';
    button.classList.add('active');
  });
});

// NAV-BUTTONLARDA ORTALAMA SCROLL
document.querySelectorAll('.nav-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const rect = targetSection.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const offset = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);

      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  });
});
