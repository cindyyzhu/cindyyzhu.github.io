import { useState } from 'react'
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
    title: "What A Storm!",
    description: "Choose-your-own-adventure game set in a desert survival scenario, with a branching narrative and lives system, built in Python.",
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

const FILTERS = ['All', 'Hackathon', 'Game', 'Hardware', 'Web App', 'Education', 'Creative']

function Tag({ label }) {
  return <span className={styles.tag}>{label}</span>
}

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map(t => <Tag key={t} label={t} />)}
        </div>
      </div>
      <div className={styles.cardLinks}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            Live Demo ↗
          </a>
        )}
        {project.mobileUrl && (
          <a href={project.mobileUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtnSecondary}>
            Mobile ↗
          </a>
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

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeFilter))

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.navLogo}>Cindy Zhu</span>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
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

        {/* About */}
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

        {/* Projects */}
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
              {filtered.map(p => <ProjectCard key={p.title} project={p} />)}
            </div>
          </div>
        </section>

        {/* Contact */}
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
          © 2026 Cindy Zhu · Built with Vite & React · Hosted on GitHub Pages
        </div>
      </footer>
    </>
  )
}
