# Tharun Prasath J — Personal Website

A single-page academic website with tab-style navigation (Home, Education, Research,
Projects, Achievements, Teaching, Personal, Contact). Plain HTML/CSS/JS — no build
step, no dependencies beyond two Google Fonts.

## Files

```
index.html   → all page content
style.css    → all styling (colors, layout, responsive rules)
script.js    → tab-switching logic + mobile menu
images/      → put your photos here
```

## Publish it on GitHub Pages

1. Create a new repository on GitHub named exactly **`tharunprasath11.github.io`**
   (Public, no README/template).
2. Upload these files to the repo:
   - Web UI: open the repo → **Add file → Upload files** → drag in `index.html`,
     `style.css`, `script.js`, and the `images` folder → **Commit changes**.
   - Or via git:
     ```
     git clone https://github.com/tharunprasath11/tharunprasath11.github.io.git
     cd tharunprasath11.github.io
     # copy these files in
     git add .
     git commit -m "Add website"
     git push origin main
     ```
3. Go to the repo's **Settings → Pages**. Under "Build and deployment", set
   **Source** to "Deploy from a branch", **Branch** to `main` and folder to
   `/ (root)`. Save.
4. Within a minute or two your site is live at
   **https://tharunprasath11.github.io**

Any time you push a change, the live site updates automatically within a minute.

## Add your profile photo

Right now the "TP" circle in the hero is drawn with CSS (no image file needed),
so there's nothing broken to fix. If you'd like a real photo there instead:

1. Add your photo to `images/profile.jpg`.
2. In `index.html`, find the `<div class="hero-art">` block... actually the
   avatar isn't there — search for `.logo-mark` in `style.css` if you want a
   small badge photo, or add a new `<img>` where you'd like a larger portrait
   (e.g. just above `<h1>Tharun Prasath J</h1>` in `index.html`):
   ```html
   <img src="images/profile.jpg" alt="Tharun Prasath J" style="width:120px;height:120px;border-radius:50%;object-fit:cover;margin-bottom:20px;">
   ```

## Add real photos to the gallery (Personal tab)

1. Drop your images into `images/gallery/` (e.g. `trip1.jpg`, `event2.jpg`).
2. In `index.html`, find the `gallery-grid` div inside the Personal section.
   Replace a placeholder tile:
   ```html
   <div class="gallery-tile" style="--accent:#5B4FE8">...</div>
   ```
   with an actual image:
   ```html
   <img src="images/gallery/trip1.jpg" alt="Short description" style="width:100%;height:100%;object-fit:cover;border-radius:22px;">
   ```

## Add your CV

The "Download CV" button on the Home tab links to `cv.pdf`. Export your resume
as a PDF, name it `cv.pdf`, and place it in the root folder (next to
`index.html`). The button will start working immediately — no code change needed.

## Editing content

Everything is plain text inside `index.html` — publications, projects,
achievements, the Personal tab bio/hobbies/fun-achievements list. Search for the
section by its `<h2>` (e.g. `<h2>Achievements</h2>`) and edit the text directly.
Each card/tag has a `style="--accent:#5B4FE8"` you can change to any of the
site's colors to re-theme it:

- Indigo `#5B4FE8`
- Teal `#0EA99B`
- Amber `#F5A623`
- Coral `#FF6659`

## Notes on sources

Content was built from your two resume versions. Where they disagreed (e.g. an
M.Tech CGPA of 9.00 "till Sem 2" vs. 9.51 final), the newer LaTeX/PhD resume
was treated as authoritative. Double-check the Education and Publications
sections against your latest CV before publishing.
