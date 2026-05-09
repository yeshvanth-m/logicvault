# Update all gate HTML files to use component system
$gateFiles = @(
    "and.html", "or.html", "not.html", "buf.html",
    "nand.html", "nor.html", "xor.html", "xnor.html"
)

foreach ($file in $gateFiles) {
    $path = "c:\Workspace\Github\Personal\logicvault\gates\$file"
    Write-Host "Updating $file..."
    
    $content = Get-Content $path -Raw
    
    # Replace topbar section
    $topbarReplacement = "<!-- ══ TOPBAR (Component Loaded) ═══════════════════════ -->`n<div id=`"topbar-placeholder`"></div>"
    $content = $content -replace '(?s)<!-- ══ TOPBAR.*?</header>',$topbarReplacement
    
    # Replace sidebar section
    $sidebarReplacement = "<!-- ══ LAYOUT ══════════════════════════════════════════ -->`n<div class=`"layout`">`n`n<!-- ══ SIDEBAR (Component Loaded) ═════════════════════ -->`n<div id=`"sidebar-placeholder`"></div>`n`n<!-- ══ MAIN"
    $content = $content -replace '(?s)<!-- ══ SIDEBAR.*?<!-- ══ MAIN',$sidebarReplacement
    
    # Update scripts
    $scriptReplacement = "<script src=`"../assets/js/components.js`"></script>`n<script src=`"../assets/js/main.js`"></script>"
    $content = $content -replace '<script src="\.\./assets/js/main\.js"></script>',$scriptReplacement
    
    # Save the file
    Set-Content -Path $path -Value $content -NoNewline
    
    Write-Host "  ✓ Updated $file"
}

Write-Host ""
Write-Host "All gate files updated successfully!"

