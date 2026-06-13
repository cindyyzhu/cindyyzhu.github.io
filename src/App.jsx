import { useState, useEffect } from 'react'
import Modal from './components/Modal.jsx'
import styles from './App.module.css'

const PROJECTS = [
  {
    title: 'Ecovader',
    description: 'Invasive species identification and removal tool for homeowners and land managers. Top 10 Finalist & Best Use of Auth0 at ElleHacks 2024.',
    tags: ['Hackathon', 'Web App', 'Auth0'],
    liveUrl: 'https://ecovader.vercel.app/',
    mobileUrl: 'https://ecovader-mobile.vercel.app/',
  },
  {
    title: 'Wattson',
    description: 'Interactive robotic desk lamp controlled via a React frontend and Raspberry Pi — responds to voice and gesture input.',
    tags: ['Hackathon', 'Hardware', 'React'],
    githubUrl: 'https://github.com/cindyyzhu/wattson',
  },
  {
    title: 'Robotic Hand Controller',
    description: 'Control a robotic hand in real time using pose detection and ML models trained with Teachable Machine, sending servo commands to an Arduino via Web Serial API.',
    tags: ['Hardware', 'ML', 'Arduino'],
    liveUrl: 'https://deep-robotic-hand.vercel.app/',
  },
  {
    title: 'FederaTea',
    description: 'Underwriting analytics dashboard that surfaces risk insights for insurance teams, built with React and a Python backend.',
    tags: ['Hackathon', 'Web App', 'React', 'Python'],
    githubUrl: 'https://github.com/cindyyzhu/htn2025-federatea',
  },
  {
    title: 'Sharity',
    description: 'Community resource-sharing platform connecting neighbours with local services and goods, built with Next.js and Node.js.',
    tags: ['Hackathon', 'Web App', 'Next.js'],
    githubUrl: 'https://github.com/TonyTran03/Sharity',
  },
  {
    title: 'Boujee Bear',
    description: 'Speech therapy app that uses text-to-speech synthesis and a FastAPI backend to make pronunciation practice engaging for children.',
    tags: ['Hackathon', 'Web App', 'Python'],
    githubUrl: 'https://github.com/cindyyzhu/BoujeeBear-HTV8',
  },
  {
    title: 'What A Storm!',
    description: 'Choose-your-own-adventure game set in a desert survival scenario, with a branching narrative and lives system, built in Python.',
    tags: ['Game', 'Python'],
    liveUrl: 'https://what-a-storm-python.vercel.app/scene',
  },
  {
    title: "Mato's Fur Trade Adventure",
    description: 'Interactive historical educational game that guides players through the Canadian fur trade era through decision-making and storytelling.',
    tags: ['Game', 'Education'],
    liveUrl: 'https://mato-fur-trade-journey.vercel.app/',
  },
  {
    title: 'Dice Dash',
    description: 'Fast-paced multiplayer dice game featuring strategic resource management, built in Java.',
    tags: ['Game', 'Java'],
    liveUrl: 'https://dice-dash-java.vercel.app/',
  },
  {
    title: "Let's End Child Labour",
    description: 'Interactive awareness web project highlighting the scale of child labour worldwide through personal stories and data. Created for the TCS GoIT Tech Challenge.',
    tags: ['Awareness', 'Web'],
    liveUrl: 'https://tcs-go-it-challenge.vercel.app/',
  },
  {
    title: 'BBC Learning English',
    description: 'Recreated and extended BBC Learning English as an interactive educational web experience for language learners.',
    tags: ['Education', 'Web'],
    liveUrl: 'https://bbc-learning-english.vercel.app/',
  },
  {
    title: 'Elm Portfolio',
    description: 'Personal portfolio built entirely in Elm using the MacOutreach GraphicSVG library — a functional programming deep-dive.',
    tags: ['Creative', 'Elm'],
    liveUrl: 'https://cindy-zhu-elm.vercel.app/',
  },
]

function previewUrl(url) {
  if (!url) return null
  return `https://image.thum.io/get/width/600/crop/400/noanimate/${url}`
}

const FILTERS = ['All', 'Hackathon', 'Game', 'Hardware', 'Web App', 'Education', 'Creative', 'Awareness']

function Tag({ label }) {
  return <span className={styles.tag}>{label}</span>
}

function ProjectCard({ project, onDemo }) {
  const thumb = previewUrl(project.liveUrl || project.githubUrl)
  const [imgError, setImgError] = useState(false)

  return (
    <div className={styles.card}>
      {thumb && !imgError ? (
        <div className={styles.cardPreview}>
          <img
            src={thumb}
            alt={`${project.title} preview`}
            className={styles.previewImg}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className={`${styles.cardPreview} ${styles.previewPlaceholder}`}>
          <span className={styles.placeholderText}>{project.title[0]}</span>
        </div>
      )}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map(t => <Tag key={t} label={t} />)}
        </div>
      </div>
      <div className={styles.cardLinks}>
        {project.liveUrl && (
          <button className={styles.linkBtn} onClick={() => onDemo(project)}>
            Live Demo ↗
          </button>
        )}
        {project.mobileUrl && (
          <button className={styles.linkBtnSecondary} onClick={() => onDemo({ ...project, liveUrl: project.mobileUrl, title: project.title + ' (Mobile)' })}>
            Mobile ↗
          </button>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtnSecondary}>
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [modal, setModal] = useState(null)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeFilter))

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.navLogo}>Cindy Zhu</span>
          <div className={styles.navRight}>
            <div className={styles.navLinks}>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.container}>
            <h1 className={styles.heroName}>Cindy Zhu</h1>
            <p className={styles.heroSub}>Software Developer &nbsp;·&nbsp; Engineering Science @ UofT</p>
            <div className={styles.heroLinks}>
              <a href="https://github.com/cindyyzhu" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/cindyyzhu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://devpost.com/cindyyzhu" target="_blank" rel="noopener noreferrer">Devpost</a>
              <a href="mailto:cindyy.zhu@mail.utoronto.ca">Email</a>
            </div>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.aboutText}>
              Hi! I'm Cindy — a software developer who loves building full-stack apps, games,
              hardware projects, and interactive experiences. I enjoy learning by making things,
              from hackathon sprints to long-form creative coding. I'm currently studying
              Engineering Science at the University of Toronto.
            </p>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.filterRow}>
              {FILTERS.map(f => (
                <button
                  key={f}
                  className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className={styles.grid}>
              {filtered.map(p => (
                <ProjectCard key={p.title} project={p} onDemo={setModal} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={styles.aboutText}>
              Interested in collaborating or just want to chat? Reach out via{' '}
              <a href="mailto:cindyy.zhu@mail.utoronto.ca">email</a> or{' '}
              <a href="https://linkedin.com/in/cindyyzhu" target="_blank" rel="noopener noreferrer">LinkedIn</a> — I'd love to connect!
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          © 2026 Cindy Zhu · Built with Vite & React · Hosted on Vercel
        </div>
      </footer>

      {modal && (
        <Modal
          url={modal.liveUrl}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}
