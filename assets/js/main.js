// Toggle navigation groups
function toggleGroup(btn) {
  btn.classList.toggle('open');
  const items = btn.nextElementSibling;
  items.classList.toggle('open');
}

// Toggle mobile sidebar
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Switch diagram views
function switchDiagram(btn, id) {
  document.querySelectorAll('.dtab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  ['gate', 'block', 'cmos'].forEach(k => {
    const el = document.getElementById('diagram-' + k);
    if (el) el.style.display = k === id ? '' : 'none';
  });
}

// Switch code tabs
function switchCode(btn, id) {
  document.querySelectorAll('.ctab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.code-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
}

// Copy code to clipboard
function copyCode(btn, id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 1800);
  });
}

// Active TOC tracking using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section[id]');
  
  if (sections.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const link = document.querySelector('.toc-items a[href="#' + e.target.id + '"]');
        if (link) link.classList.toggle('active', e.isIntersecting);
      });
    }, { rootMargin: '-10% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
  }
});

// Keyboard shortcut: / to focus search
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    document.getElementById('search-input')?.focus();
  }
});
