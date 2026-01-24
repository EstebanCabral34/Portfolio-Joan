const imgs = document.querySelectorAll('.card img');

imgs.forEach(img => {
  img.addEventListener('click', () => {
    const box = document.createElement('div');
    box.classList.add('lightbox');
    box.innerHTML = `<img src="${img.src}">`;
    box.addEventListener('click', () => box.remove());
    document.body.appendChild(box);
  });
});