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

---

## Jekyll Page Conventions

LogicVault uses Jekyll for static site generation. **This section is critical for AI agents and contributors.**

### Front Matter Structure

Every HTML page requires YAML front matter at the top:

```yaml
---
layout: null
nav: page-name        # Unique identifier for topbar active state
sidebar: page-name    # Unique identifier for sidebar active state
group: section-name   # MUST match sidebar section name (see table below)
---
```

### Group Values (CRITICAL)

The `group` value in front matter **MUST** match the sidebar section heading. This controls which section auto-expands when viewing the page.

| Category | group value | Sidebar Section |
|----------|-------------|-----------------|
| Logic Gates | gates | Logic Gates |
| Boolean Algebra | boolean | Boolean Algebra |
| Arithmetic | arithmetic | Arithmetic |
| Routing | routing | Routing & Selection |
| Codec | codec | Encoder / Decoder |
| EDC | edc | Error Handling |
| Timing & Sync | timing | Timing & Sync |
| Memory | memory | Memory |
| Data Flow | dataflow | Data Flow & Pipelines |
| Generators | generators | Pulse & Signal Generators |

**Common Mistake:** Using `group: sequential` for all sequential pages. This won't work - each page needs the specific group matching its sidebar section.

### CSS Classes Reference

#### Concept Cards
Use CSS classes, **never inline styles**:

```html
<!-- CORRECT -->
<div class="concept-card blue">...</div>
<div class="concept-card green">...</div>
<div class="concept-card amber">...</div>
<div class="concept-card purple">...</div>
<div class="concept-card red">...</div>

<!-- WRONG - Don't use inline styles -->
<div class="concept-card" style="border-left: 3px solid var(--blue);">...</div>
```

#### Code/Formula Display Inside Cards
Use `<div class="formula">`, **not `<pre>`**:

```html
<!-- CORRECT -->
<div class="concept-card blue">
  <h4>Title</h4>
  <div class="formula">Y = A ⊕ B</div>
</div>

<!-- WRONG - pre tag doesn't style correctly inside cards -->
<div class="concept-card blue">
  <h4>Title</h4>
  <pre>Y = A ⊕ B</pre>
</div>
```

#### Code Panels (Standalone)
```html
<div class="code-panel">
  <pre>// Verilog code here</pre>
</div>
```

#### Callouts
```html
<div class="callout-warning">
  <strong>⚠️ Warning:</strong> Important note here.
</div>

<div class="callout-info">
  <strong>ℹ️ Info:</strong> Additional information.
</div>
```

#### Badges
```html
<span class="badge green">Combinational</span>
<span class="badge blue">Sequential</span>
<span class="badge amber">N-bit</span>
```

### Sidebar Structure

Located in `_includes/sidebar.html`. Each section follows this pattern:

```html
<div class="nav-section" data-group="groupname">
  <div class="nav-section-title">Section Title</div>
  <a href="{{root}}path/page.html" class="nav-item" data-nav="page-name">Page Name</a>
</div>
```

The `data-group` attribute **must** match the `group` front matter value.

### Directory Structure

```
logicvault/
├── _includes/          # Reusable components (sidebar.html, topbar.html)
├── _layouts/           # Jekyll layouts (gate.html, arithmetic.html, etc.)
├── _docs/              # Markdown source files (if using Jekyll collections)
├── assets/
│   ├── css/main.css    # All styles - concept cards, code panels, etc.
│   └── js/             # Component loader, main.js
├── gates/              # Gate pages (and.html, or.html, etc.)
├── arithmetic/         # Arithmetic circuit pages
├── boolean/            # Boolean algebra pages
├── routing/            # Multiplexer, demux, tristate pages
├── codec/              # Encoder/decoder pages
├── edc/                # Error detection/correction pages
├── _template.html      # Template for new pages
└── ARCHITECTURE.md     # This file
```

### Common Pitfalls (For AI Agents)

1. **Wrong group value** - Always check the sidebar section name
2. **Inline styles on concept cards** - Use CSS classes instead
3. **Using `<pre>` inside concept cards** - Use `<div class="formula">` instead
4. **Path issues** - Use `{{root}}` for paths in includes
5. **Missing front matter** - Every page needs `layout`, `nav`, `sidebar`, `group`

### CSS Variables

Defined in `assets/css/main.css`:

```css
--blue: #4a9eff;
--green: #4ade80;
--amber: #fbbf24;
--purple: #a78bfa;
--red: #f87171;
--bg: #0f172a;
--card: #1e293b;
--text: #f1f5f9;
```
