
// Lightbox funkció
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.cssText = `
  display: none; position: fixed; z-index: 999;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.8); justify-content: center; align-items: center;
`;
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightboxImg.style.cssText = `
  max-width: 80%; max-height: 80%; border-radius: 10px;
`;
lightbox.appendChild(lightboxImg);

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', e => {
    e.preventDefault();
    lightboxImg.src = img.parentElement.href;
    lightbox.style.display = 'flex';
  });
});

// Sötét/világos mód váltó
const toggleBtn = document.getElementById('themeToggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}
