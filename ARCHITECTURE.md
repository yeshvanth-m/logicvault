# LogicVault Component Architecture

## Overview

LogicVault uses a component-based architecture to maximize code reuse and minimize duplication across pages. Shared UI elements (topbar, sidebar) are defined once and dynamically loaded into pages.

## Component System

### Files Structure

```
logicvault/
├── _includes/           # Reusable component files
│   ├── topbar.html     # Top navigation bar
│   └── sidebar.html    # Side navigation menu
├── assets/
│   ├── css/
│   │   └── main.css    # Global styles (includes topbar/sidebar styles)
│   └── js/
│       ├── components.js  # Component loader system
│       └── main.js     # Page-specific functionality
└── _template.html      # Template for new pages
```

### How It Works

1. **Component Files** (`_includes/*.html`)
   - Contains HTML markup for shared components
   - Uses `{{root}}` placeholder for path resolution
   - No inline scripts or styles

2. **Component Loader** (`assets/js/components.js`)
   - Automatically detects page depth and calculates root path
   - Loads component HTML via fetch API
   - Replaces `{{root}}` with correct relative paths
   - Marks active navigation items based on current page

3. **Global Styles** (`assets/css/main.css`)
   - Contains all styling for topbar and sidebar
   - Single source of truth for component appearance
   - Responsive design built-in

## Using Components in Pages

### Basic Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title - LogicVault</title>
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>

<!-- Topbar component -->
<div id="topbar-placeholder"></div>

<div class="layout">
  <!-- Sidebar component -->
  <div id="sidebar-placeholder"></div>
  
  <!-- Your page content -->
  <main class="main" id="main-content">
    <!-- Content here -->
  </main>
</div>

<!-- Load components first, then page scripts -->
<script src="assets/js/components.js"></script>
<script src="assets/js/main.js"></script>

</body>
</html>
```

### Path Resolution

The component loader automatically adjusts paths based on page depth:

- Root level (`index.html`): `{{root}}` → ``
- One level deep (`gates/and.html`): `{{root}}` → `../`
- Two levels deep (`docs/gates/and.html`): `{{root}}` → `../../`

### Active Navigation Highlighting

Add `data-nav="identifier"` to navigation items:

```html
<!-- In sidebar.html -->
<a href="{{root}}gates/and.html" class="nav-item" data-nav="and">AND</a>

<!-- Will automatically become active when on gates/and.html -->
```

## Benefits

✅ **Single Source of Truth** - Update topbar/sidebar in one place  
✅ **Consistent Design** - All pages use the same components  
✅ **Easy Maintenance** - Changes propagate automatically  
✅ **Smaller Files** - Pages contain only unique content  
✅ **Fast Loading** - Components cached by browser  
✅ **Path-Agnostic** - Works at any directory depth  

## Creating New Pages

1. Copy `_template.html`
2. Update `<title>` and meta tags
3. Replace placeholder content
4. Add appropriate `data-nav` identifier if needed
5. Components load automatically!

## Customizing Components

### Topbar

Edit `_includes/topbar.html`:
- Brand name and version
- Navigation links
- Add new sections

### Sidebar

Edit `_includes/sidebar.html`:
- Navigation structure
- Add new categories
- Reorder sections

### Styles

Edit `assets/css/main.css`:
- Topbar styles (`.topbar`, `.topbar-brand`, `.topnav`)
- Sidebar styles (`.sidebar`, `.nav-section`, `.nav-item`)
- Responsive behavior (`@media` queries)

## Migration from Old Structure

Old structure (duplicated code):
```html
<header class="topbar">
  <!-- 20+ lines repeated in every file -->
</header>
<nav class="sidebar">
  <!-- 150+ lines repeated in every file -->
</nav>
```

New structure (component references):
```html
<div id="topbar-placeholder"></div>
<div id="sidebar-placeholder"></div>
<!-- Components loaded automatically -->
```

## Performance Notes

- Components loaded asynchronously on page load
- Browsers cache component files (loaded once)
- No visible flash - placeholders styled to match
- Fallback: Page still functional if JavaScript disabled (though nav won't load)

## Future Enhancements

- Add footer component
- Implement search functionality
- Add breadcrumb component
- Support for different sidebar configurations per section
