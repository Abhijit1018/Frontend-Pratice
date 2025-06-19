document.querySelectorAll('.open-modal-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
document.querySelectorAll('.close-modal-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const modal = btn.closest('.modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}); 