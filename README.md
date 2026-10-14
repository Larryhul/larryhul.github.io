# Lan Hu — Academic Homepage

An English-only academic homepage based on the layout, typography, colors, and spacing of [He Wang's homepage](https://hughw19.github.io/). The page includes a personal introduction, News, Publications, Research Projects, and Awards, with a mobile navigation menu.

The site uses static HTML, CSS, and JavaScript. Lato fonts are bundled locally; no dependencies or build step are needed.

## Preview

Open `index.html` in your browser. You can also serve the project with a local static HTTP server.

The mobile menu supports touch and keyboard controls, including Enter or Space to open it and Escape to close it. Section links update the URL and leave headings below the fixed mobile header. Opening BibTeX citations preserves their full text and wraps long lines within the page. Browser zoom is enabled.

## Update your information

Personal information is stored in `js/data.js`:

| Field | Content |
| --- | --- |
| `name` | Public name |
| `title`, `university`, `universityUrl`, `education` | Role, university, and education |
| `photo` | Profile image path; currently `assets/profile.jpg`, the supplied photograph |
| `about` | Introduction |
| `email`, `github`, `scholar`, `twitter`, `cv` | Contact and profile links; empty entries are hidden |
| `news` | Dated updates |
| `publications` | Titles, authors, years, status, images, links, and BibTeX |
| `projects` | Project titles, roles, and national or Shanghai program level |
| `honors` | Awards and honors |

Additional introduction text is in the `content` object in `js/main.js`. All page content is in English. The site has no language selector and always displays English, including visits with older language preferences or URL parameters.

Contact links use icons and short labels: **Email** links to `2453781@tongji.edu.cn`, and **GitHub** links to `larryhul`. Add your Google Scholar profile URL to `scholar` to display its icon and link.

Publication thumbnails use the original Figure 1 from [TRACER v1](https://arxiv.org/html/2609.18776v1#S2.F1) and [SAGE v2](https://arxiv.org/html/2607.16619v2#S3.F1). The files are `assets/tracer-fig1.png` and `assets/sage-fig1.svg`; their source URLs are recorded in `artSource`. Thumbnails preserve the complete figures and their aspect ratios. Click `bibtex` beside a paper to expand or collapse its citation.

Awards include the National Scholarship for the freshman and sophomore academic years, three competition prizes, and Tongji University's Outstanding Student title. The freshman scholarship and Outstanding Student certificate refer to 2024–2025; the sophomore scholarship is listed for 2025–2026. Competition years are omitted because they were not provided. Project roles distinguish one national project led by the author from two Shanghai projects with substantial participation. This information follows the user's supplied details and certificate image.

Competition names use [CMC](https://www.cmathc.org.cn/jianjie/) and [CUMCM](https://www.mcm.edu.cn/jxie/papers/EIMI2011_Xie.pdf). Paper status and source notes are retained in the data file.

## Deploy to GitHub Pages

Upload `index.html`, `css/`, `js/`, `assets/`, and `.nojekyll` to the root of your personal homepage repository. In the repository's Pages settings, select the appropriate branch and root directory. The project archive includes the files needed for deployment.

`.backups/` contains previous versions, `.reference/` contains the reference snapshot, and `.qa/` contains verification artifacts. These directories are ignored and excluded from the project archive.

The Lato font license is included in `assets/fonts/OFL.txt`.

## Browser icon

The blue fish favicon was generated with the built-in image generation tool. The full-size source is `assets/fish-icon.png`. Browser icons are `assets/favicon-fish-16.png`, `assets/favicon-fish-32.png`, and `assets/favicon-fish.ico`; the touch icon is `assets/favicon-fish-180.png`. These files are linked in the page head. The generation prompt is saved in `.qa/fish-icon-prompt.txt`.
