/**
 * LogicVault Component Loader
 * Dynamically loads shared components (topbar, sidebar) into pages
 */

(function() {
  'use strict';

  // Detect root path based on current location
  function getRootPath() {
    const path = window.location.pathname;
    const depth = path.split('/').filter(p => p && p !== 'logicvault' && !p.endsWith('.html')).length;
    return depth === 0 ? '' : '../'.repeat(depth);
  }

  // Load component HTML
  async function loadComponent(componentName, targetSelector) {
    const root = getRootPath();
    const componentPath = `${root}_includes/${componentName}.html`;
    
    try {
      const response = await fetch(componentPath);
      if (!response.ok) {
        console.error(`Failed to load ${componentName}:`, response.statusText);
        return;
      }
      
      let html = await response.text();
      
      // Replace {{root}} placeholders with actual root path
      html = html.replace(/\{\{root\}\}/g, root);
      
      const target = document.querySelector(targetSelector);
      if (target) {
        target.innerHTML = html;
        
        // Mark active navigation items
        if (componentName === 'sidebar') {
          markActiveSidebarItem();
        } else if (componentName === 'topbar') {
          markActiveTopnavItem();
        }
      }
    } catch (error) {
      console.error(`Error loading ${componentName}:`, error);
    }
  }

  // Mark active sidebar navigation item based on current page
  function markActiveSidebarItem() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    
    // Remove all active classes
    document.querySelectorAll('.sidebar .nav-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Add active class to matching item
    const activeItem = document.querySelector(`.sidebar .nav-item[data-nav="${filename}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
    }
  }

  // Mark active topnav item based on current page
  function markActiveTopnavItem() {
    const path = window.location.pathname;
    
    // Remove all active classes
    document.querySelectorAll('.topnav a').forEach(item => {
      item.classList.remove('active');
    });
    
    // Determine which nav item should be active
    let activeNav = 'home';
    if (path.includes('/gates/')) {
      activeNav = 'gates';
    } else if (path.includes('/arithmetic/')) {
      activeNav = 'circuits';
    } else if (path.includes('index.html') || path.endsWith('/') || path.endsWith('/logicvault')) {
      activeNav = 'home';
    }
    
    const activeItem = document.querySelector(`.topnav a[data-page="${activeNav}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
    }
  }

  // Initialize components when DOM is ready
  function initComponents() {
    // Check if topbar placeholder exists
    const topbarPlaceholder = document.getElementById('topbar-placeholder');
    if (topbarPlaceholder) {
      loadComponent('topbar', '#topbar-placeholder');
    }
    
    // Check if sidebar placeholder exists
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder) {
      loadComponent('sidebar', '#sidebar-placeholder');
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents();
  }

  // Export for use by other scripts
  window.LogicVault = {
    loadComponent,
    getRootPath
  };
})();
