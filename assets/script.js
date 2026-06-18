// Minimal JS for project modal and footer year
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalLink = document.getElementById('modal-link');
  const close = document.getElementById('close-modal');

  document.querySelectorAll('.project-card .details').forEach(btn=>{
    btn.addEventListener('click',e=>{
      const card = e.target.closest('.project-card');
      modalTitle.textContent = card.dataset.title || 'Project';
      modalDesc.textContent = card.dataset.desc || '';
      modalLink.href = card.dataset.link || '#';
      modal.setAttribute('aria-hidden','false');
    });
  });

  close.addEventListener('click',()=>{modal.setAttribute('aria-hidden','true');});

  modal.addEventListener('click',e=>{if(e.target===modal) modal.setAttribute('aria-hidden','true');});
});
