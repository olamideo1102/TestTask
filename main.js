const parent = document.getElementById('parent');
const child = document.getElementById('child');

  let isDragging = false;

  child.addEventListener('mousedown', e => {
    isDragging = true;
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      const x = e.clientX - parent.offsetLeft - child.offsetWidth / 2;
      const y = e.clientY - parent.offsetTop - child.offsetHeight / 2;

      if (x < 0) {
        child.style.left = '0';
      } else if (x > parent.offsetWidth - child.offsetWidth) {
        child.style.left = parent.offsetWidth - child.offsetWidth + 'px';
      } else {
        child.style.left = x + 'px';
      }

      if (y < 0) {
        child.style.top = '0';
      } else if (y > parent.offsetHeight - child.offsetHeight) {
        child.style.top = parent.offsetHeight - child.offsetHeight + 'px';
      } else {
        child.style.top = y + 'px';
      }
    }
  });

  document.addEventListener('mouseup', e => {
    isDragging = false;
  });
