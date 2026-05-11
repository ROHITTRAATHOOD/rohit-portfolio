/* Professional Developer Palette */
:root {
    --bg-primary: #05070a;
    --bg-secondary: #0d1117;
    --bg-card: #161b22;
    --accent: #00f0ff;
    --accent-hover: #00c8e6;
    --text-main: #f0f6fc;
    --text-muted: #8b949e;
    --border: #30363d;
    --shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'SF Mono', 'Fira Code', 'Segoe UI Mono', 'Roboto Mono', monospace;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-primary);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Optimized Navigation */
header {
    background-color: rgba(5, 7, 10, 0.9);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(8px);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-main);
    text-decoration: none;
    letter-spacing: -1px;
    display: flex;
    align-items: center;
}

.logo span {
    color: var(--accent);
    margin-left: 2px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
}

.nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--accent);
}

/* Main Hero */
.hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    gap: 50px;
    padding: 100px 0 60px;
    border-bottom: 1px solid var(--border);
}

.hero-text h3 {
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 0.9rem;
}

.hero h1 {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 25px;
    font-weight: 800;
    letter-spacing: -2px;
}

.hero h1 .typewriter {
    color: var(--accent);
}

/* Dynamic typing cursor generated via JS/CSS */
.typewriter > .wrap { 
    border-right: 0.08em solid #fff;
}

.hero p {
    font-size: 1.3rem;
    color: var(--text-muted);
    max-width: 650px;
    margin-bottom: 45px;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.hero-img-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-img {
    width: 100%;
    max-width: 450px;
    height: 450px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid var(--border);
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.hero-img:hover {
    border-color: var(--accent);
    transform: scale(1.02);
}

/* Global CTAs */
.cta-btn, .cta-btn-filled {
    padding: 14px 35px;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', sans-serif;
}

.cta-btn {
    background-color: transparent;
    color: var(--accent);
    border: 2px solid var(--accent);
}

.cta-btn:hover {
    background-color: var(--accent);
    color: var(--bg-primary);
    box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
}

.cta-btn-filled {
    background-color: var(--accent);
    color: var(--bg-primary);
    border: 2px solid var(--accent);
}

.cta-btn-filled:hover {
    background-color: transparent;
    color: var(--accent);
}

/* Sections */
section {
    padding: 90px 0;
    border-bottom: 1px solid var(--border);
}

.section-header {
    max-width: 700px;
    margin-bottom: 70px;
}

.section-title {
    font-size: 2.8rem;
    font-weight: 800;
    letter-spacing: -1.5px;
    margin-bottom: 15px;
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: var(--accent);
    margin-top: 10px;
    border-radius: 2px;
}

.section-subtitle {
    font-size: 1.2rem;
    color: var(--text-muted);
    font-family: 'Segoe UI', sans-serif;
}

/* Profiles Grid */
.profiles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.profile-card {
    background-color: var(--bg-card);
    padding: 25px;
    border-radius: 8px;
    border: 1px solid var(--border);
    text-align: center;
    text-decoration: none;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.profile-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
    box-shadow: var(--shadow);
}

.profile-card font {
    font-weight: 700;
    font-size: 1.1rem;
}

.profile-card span {
    font-size: 0.85rem;
    color: var(--text-muted);
}

/* Expertise Section */
.expertise-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 50px;
    align-items: start;
}

.expertise-main {
    font-size: 1.15rem;
    color: var(--text-muted);
    font-family: 'Segoe UI', sans-serif;
    background-color: var(--bg-card);
    padding: 40px;
    border-radius: 12px;
    border: 1px solid var(--border);
}

.expertise-main b {
    color: var(--text-main);
}

.tech-stack {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.stack-category h4 {
    font-size: 1.1rem;
    color: var(--accent);
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.tag {
    background-color: var(--bg-card);
    color: var(--text-muted);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    border: 1px solid var(--border);
    transition: var(--transition);
}

.tag:hover {
    border-color: var(--accent);
    color: var(--accent);
    background-color: rgba(0, 240, 255, 0.05);
}

/* Projects Gallery */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.project-card {
    background-color: var(--bg-card);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-8px);
    border-color: var(--accent);
    box-shadow: var(--shadow);
}

.project-image-wrapper {
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-bottom: 1px solid var(--border);
}

.project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.project-card:hover .project-img {
    transform: scale(1.08);
}

.project-content {
    padding: 30px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.project-title {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -1px;
}

.project-content p {
    color: var(--text-muted);
    font-size: 1rem;
    font-family: 'Segoe UI', sans-serif;
    flex-grow: 1;
}

.project-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

/* Contact */
.contact {
    text-align: center;
    background-color: var(--bg-card);
    border-radius: 12px;
    padding: 80px 40px;
    margin: 90px 0;
    border: 1px solid var(--border);
}

.contact p {
    font-size: 1.3rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: 20px auto 40px;
    font-family: 'Segoe UI', sans-serif;
}

footer {
    text-align: center;
    padding: 40px;
    color: var(--text-muted);
    font-size: 0.9rem;
    border-top: 1px solid var(--border);
}

/* Responsive */
@media (max-width: 992px) {
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
        padding-top: 80px;
    }
    .hero-img-container {
        order: -1;
    }
    .hero-buttons {
        justify-content: center;
    }
    .hero h1 {
        font-size: 3.2rem;
    }
    .expertise-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    .section-title {
        font-size: 2.2rem;
    }
}
