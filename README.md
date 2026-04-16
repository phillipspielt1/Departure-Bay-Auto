# Departure Bay Automotive — Website

Modern, straightforward website for **Departure Bay Automotive Service Centre** in Nanaimo, BC. Rebuilt from [departurebayauto.ca](https://www.departurebayauto.ca) with a cleaner, easier-to-navigate design.

## Design philosophy

Clean, trustworthy, easy for anyone to navigate. No clever tricks, no dark patterns, no flashy animations that get in the way. The kind of site where a customer can find the phone number in two seconds, see what's offered, and book a visit.

- **Palette:** Deep navy + warm yellow accent on bone white
- **Typography:** Barlow Condensed for headings (strong, industrial), Source Sans 3 for body (readable at any age)
- **Navigation:** Icon-based horizontal nav (inspired by the original Bavarian Imports site) that makes each page obvious at a glance

## Tech stack

Plain HTML, CSS and a small amount of vanilla JavaScript. No build step, no framework, no dependencies. Fast, portable, easy to host anywhere, and anyone can edit it with a text editor.

## Project structure

```
departure-bay-auto/
├── index.html           # Home page
├── about.html           # About / family story / values
├── services.html        # Full service list + ICBC inspection info
├── contact.html         # Contact form, hours, map, payment info
├── css/
│   └── style.css        # All styles
├── js/
│   └── main.js          # Nav toggle, form handler
├── images/
│   ├── logo.svg         # Main logo (the arched "DEPARTURE BAY" + car + AUTOMOTIVE mark)
│   └── favicon.svg      # Small square favicon
├── .gitignore
└── README.md
```

## Running locally

Just open `index.html` in a browser. Or serve it with any local static server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Pushing to GitHub

From inside the project folder:

```bash
git init
git add .
git commit -m "Initial commit — Departure Bay Automotive site"
git branch -M main
git remote add origin https://github.com/<your-username>/departure-bay-auto.git
git push -u origin main
```

## Deploying

Because this is a static site, it works on any host.

### GitHub Pages (free)

1. Push the repo to GitHub (commands above)
2. Go to **Settings → Pages**
3. Under **Source**, choose `main` branch and `/ (root)` folder
4. Save. The site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two

### Custom domain (departurebayauto.ca)

If you want the site at your real domain, add a file named `CNAME` (no extension) to the repo root containing just `departurebayauto.ca`, then point your domain's DNS at GitHub Pages. Full instructions are in GitHub's [custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Other hosts

Works identically on Netlify, Vercel, Cloudflare Pages, or any traditional web host. Just upload the folder contents.

## Editing content

All copy lives directly in the HTML files. No database, no CMS. Open the file, find the text, change it. The styles are all in `css/style.css` and use CSS custom properties at the top (palette, fonts, spacing) so changing the theme is a one-line edit.

### Common edits

- **Change hours:** Update the `<table class="hours-table">` on `contact.html`, and the "Open Mon–Fri · 9:00 AM – 5:30 PM" line in the topbar of every page
- **Change phone number:** Find-and-replace `250-758-9312` (and `2507589312` in `tel:` links) across the HTML files
- **Change email:** Find-and-replace `info@departurebayauto.ca` across the HTML files
- **Update the logo:** Replace `images/logo.svg` with your real vector logo

## Contact form

The form on `contact.html` uses a `mailto:` fallback that opens the visitor's email client with the message pre-filled. This works on any static host.

If you'd prefer real submissions (with spam protection and email notifications), the easiest options are:

- **Formspree** — add a form action pointing to your Formspree endpoint
- **Netlify Forms** — add `netlify` attribute to the form tag (works automatically when hosted on Netlify)
- **Web3Forms / Basin** — similar services, all drop-in replacements

## Credit

Business content © Departure Bay Automotive Service Centre.
