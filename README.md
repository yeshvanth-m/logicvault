# LogicVault

A comprehensive vault of digital logic documentation and experiments, built with Jekyll for maximum reusability and zero-config deployment on GitHub Pages.

## 🎯 Features

- **Modular Architecture**: Reusable CSS, JavaScript, and layout templates
- **Markdown-First**: Write content in Markdown with YAML front matter
- **Zero Build Config**: Jekyll is built into GitHub Pages
- **Organized Structure**: Clean separation of content, styles, and scripts
- **Responsive Design**: Mobile-friendly navigation and layout
- **Search Ready**: Optimized for adding search functionality

## 📁 Project Structure

```
logicvault/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Reusable page templates
│   └── default.html         # Main layout
├── _includes/               # Reusable components
│   └── sidebar.html         # Navigation sidebar
├── _docs/                   # Documentation content (Markdown)
│   └── arithmetic/
│       └── full-adder.md
├── assets/
│   ├── css/
│   │   └── main.css         # All styles (reusable across pages)
│   └── js/
│       └── main.js          # All JavaScript (reusable)
├── index.md                 # Homepage
├── Gemfile                  # Ruby dependencies
└── README.md
```

## 🚀 Quick Start

### Local Development

1. **Install Jekyll** (if not already installed):
   ```powershell
   # Install Ruby (required for Jekyll)
   # Download from https://rubyinstaller.org/
   
   # Install Bundler
   gem install bundler
   ```

2. **Install dependencies**:
   ```powershell
   cd logicvault
   bundle install
   ```

3. **Run the development server**:
   ```powershell
   bundle exec jekyll serve
   ```

4. **View your site**:
   Open [http://localhost:4000/logicvault/](http://localhost:4000/logicvault/) in your browser

### GitHub Pages Deployment

1. **Push to GitHub**:
   ```powershell
   git add .
   git commit -m "Initial Jekyll setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository **Settings** > **Pages**
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Click **Save**

3. **Update `_config.yml`**:
   ```yaml
   baseurl: "/logicvault"
   url: "https://yourusername.github.io"
   ```
   Replace `yourusername` with your actual GitHub username.

4. Your site will be live at: `https://yourusername.github.io/logicvault/`

## ✍️ Adding New Content

### Create a New Page

1. Create a new Markdown file in `_docs/`:
   ```powershell
   New-Item -ItemType File -Path "_docs\arithmetic\half-adder.md"
   ```

2. Add front matter:
   ```yaml
   ---
   layout: default
   title: Half Adder
   subtitle: A 1-bit adder that computes the sum of two binary inputs
   breadcrumb:
     - title: Arithmetic Circuits
       url: /docs/arithmetic
     - title: Half Adder
   badges:
     - color: green
       text: Combinational
     - color: amber
       text: Arithmetic
   ---
   ```

3. Write your content in Markdown:
   ```markdown
   ## Overview
   
   Your content here...
   
   ## Truth Table
   
   | A | B | Sum | Carry |
   |---|---|-----|-------|
   | 0 | 0 |  0  |   0   |
   | 0 | 1 |  1  |   0   |
   ```

### Update Navigation

Edit `_config.yml` and add your page to the `nav` structure:

```yaml
nav:
  - title: "Combinational Logic"
    items:
      - title: "Arithmetic"
        subitems:
          - title: "Half Adder"
            url: "/docs/arithmetic/half-adder"
          - title: "Full Adder"
            url: "/docs/arithmetic/full-adder"
```

## 🎨 Customization

### Styles
All CSS is in `assets/css/main.css`. Modify variables at the top for quick theming:

```css
:root {
  --green:     #0a7c52;
  --amber:     #a0620a;
  --blue:      #1a5fb0;
  /* ... */
}
```

### JavaScript
All interactive behavior is in `assets/js/main.js`. Modular functions for:
- Navigation toggles
- Code copying
- Tab switching
- Active section tracking

## 🧩 Reusable Components

### Badges
```yaml
badges:
  - color: green    # green, amber, blue, purple, red
    text: Combinational
```

### Callouts
```html
<div class="callout callout-tip">
  <svg>...</svg>
  <p><strong>Tip:</strong> Your message here</p>
</div>
```

Types: `callout-tip`, `callout-info`, `callout-warn`

### Truth Tables
Use the `.truth-table` class for styled tables with the existing CSS.

### Quick Facts Grid
```html
<div class="qf-grid">
  <div class="qf-card">
    <p class="qf-label">Inputs</p>
    <p class="qf-value">A, B</p>
  </div>
</div>
```

## 📝 Benefits of This Architecture

✅ **Write Once, Use Everywhere**: Single CSS/JS file for all pages  
✅ **Fast Content Creation**: Write in Markdown, not HTML  
✅ **Easy Maintenance**: Change styles in one place  
✅ **Git-Friendly**: Markdown diffs are readable  
✅ **Zero Build**: GitHub Pages builds automatically  
✅ **SEO Ready**: Proper meta tags and structure  
✅ **Scalable**: Add hundreds of pages without bloat  

## 🔧 Troubleshooting

**Jekyll not found?**
```powershell
gem install jekyll bundler
```

**Port already in use?**
```powershell
bundle exec jekyll serve --port 4001
```

**CSS not loading?**
- Check `baseurl` in `_config.yml` matches your repository name
- Use `{{ '/assets/css/main.css' | relative_url }}` in templates

**Navigation not working?**
- Ensure `_config.yml` `nav` structure is valid YAML (check indentation)
- Verify URLs start with `/` and match your file structure

## 📚 Next Steps

1. ✅ Jekyll setup complete
2. ✅ Full Adder example page created
3. 🔲 Add more circuit documentation
4. 🔲 Implement search functionality
5. 🔲 Add dark mode toggle
6. 🔲 Create circuit diagram templates

## 📄 License

MIT License - feel free to reuse this architecture for your own documentation projects!

---

**Happy Documenting! 🚀**
