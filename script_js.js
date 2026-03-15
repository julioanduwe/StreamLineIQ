// ── Service card expand/collapse ──
function toggleSvc(card) {
  var isOpen = card.classList.contains('open');
  document.querySelectorAll('.svc-card').forEach(function(c) {
    c.classList.remove('open');
    c.querySelector('.svc-toggle').textContent = '+ View Services';
  });
  if (!isOpen) {
    card.classList.add('open');
    card.querySelector('.svc-toggle').textContent = '− Hide Services';
  }
}

// ── Smooth scroll for all anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── Contact form feedback ──
var contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
  contactBtn.addEventListener('click', function() {
    var name  = document.querySelector('input[placeholder="Jane Smith"]').value.trim();
    var email = document.querySelector('input[type="email"]').value.trim();
    if (!name || !email) {
      alert('Please fill in at least your name and email address.');
      return;
    }
    contactBtn.textContent = '✓ Message Sent!';
    contactBtn.style.background = '#27a060';
    contactBtn.disabled = true;
    setTimeout(function() {
      contactBtn.textContent = 'Send Message';
      contactBtn.style.background = '';
      contactBtn.disabled = false;
    }, 3000);
  });
}
