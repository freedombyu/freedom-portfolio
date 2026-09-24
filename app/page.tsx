'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  MapPin,
  Terminal,
  ChevronDown,
} from 'lucide-react';

const projects = [
  {
    title: 'CSE Motors',
    category: 'Vehicle Review Web Application',
    description:
      'Authenticated vehicle review functionality with validation, CRUD operations, and PostgreSQL database integration.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JavaScript'],
    icon: Code2,
    github: 'https://github.com/freedombyu',
  },

  {
    title: 'TailorPro',
    category: 'Order Management Application',
    description:
      'Blazor and .NET application with dashboard statistics and CRUD functionality for managing customer orders.',
    tech: ['C#', 'Blazor', '.NET'],
    icon: BriefcaseBusiness,
    github: 'https://github.com/freedombyu',
  },

  {
    title: 'Handcrafted Haven',
    category: 'Online Marketplace',
    description:
      'Responsive marketplace experience using Next.js, React, Supabase, authentication, and accessibility-focused development.',
    tech: ['Next.js', 'React', 'Supabase'],
    icon: Database,
    github: 'https://github.com/freedombyu',
  },

  {
    title: 'Teton Idaho Chamber',
    category: 'Responsive Business Website',
    description:
      'Responsive website with interactive components, API integrations, dynamic content, and accessibility practices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'APIs'],
    icon: Terminal,
    github: 'https://github.com/freedombyu',
  },
];

const skills = [
  {
    title: 'Languages',
    items: ['JavaScript', 'C#', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Runtime',
    items: [
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'Blazor',
      '.NET',
    ],
  },
  {
    title: 'Databases & Services',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Supabase',
      'REST APIs',
    ],
  },
  {
    title: 'Tools & Practices',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'CRUD',
      'Testing',
      'Debugging',
      'Responsive Design',
    ],
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <main>

      {/* =========================
          NAVIGATION
      ========================== */}

      <header className="nav">
        <div className="container nav-inner">

          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
          >
            FM<span>.</span>
          </a>

          <button
            className="menu"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>

          <nav className={open ? 'nav-links open' : 'nav-links'}>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              className="nav-cta"
              href="/Freedom_Mukanza_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <Download size={16} />
            </a>

          </nav>
        </div>
      </header>


      {/* =========================
          HOME / HERO
      ========================== */}

      <section id="home" className="hero">

        <div className="container hero-grid">

          <div className="hero-content">

            {/* PROFILE IMAGE */}

            <div className="profile-photo">
              <Image
                src="/profile.jpg"
                alt="Freedom Mukanza"
                width={220}
                height={220}
                priority
                className="profile-image"
              />
            </div>


            <div className="eyebrow">
              <span className="status-dot" />
              Available for junior software development opportunities
            </div>


            <h1>
              Building practical software with <em>purpose.</em>
            </h1>


            <p className="hero-copy">
              I&apos;m <strong>Freedom Mukanza</strong>, a Junior Software
              Developer and Bachelor of Science in Software Development
              student at BYU-Idaho.
            </p>


            <p className="hero-copy">
              I build responsive web applications, work with databases and
              APIs, and enjoy turning real-world problems into useful
              software.
            </p>


            <div className="hero-actions">

              <a
                className="button primary"
                href="#projects"
              >
                View My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                className="button secondary"
                href="#contact"
              >
                Let&apos;s Connect
                <Mail size={18} />
              </a>

            </div>


            <div className="quick-links">

              <a
                href="https://github.com/freedombyu"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/freedom-mukanza-3ba282258"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <span>
                <MapPin size={17} />
                South Africa
              </span>

            </div>

          </div>


          {/* CODE CARD */}

          <div className="hero-card">

            <div className="code-window">

              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>

              <pre>
                <code>{`const developer = {
  name: "Freedom Mukanza",
  role: "Junior Developer",
  focus: [
    "Web Development",
    "APIs & Databases",
    "Problem Solving"
  ],
  mindset: "Always learning"
};`}</code>
              </pre>

            </div>


            <div className="floating-stat">
              <span>4+</span>
              <small>Featured projects</small>
            </div>

          </div>

        </div>


        <a
          className="scroll"
          href="#about"
        >
          <ChevronDown size={18} />
          Explore
        </a>

      </section>


      {/* =========================
          ABOUT
      ========================== */}

      <section
        id="about"
        className="section"
      >

        <div className="container about-section">

          <div className="about-photo-container">           

          </div>


          <div className="about-content">

            <p className="section-label">
              01 — ABOUT
            </p>

            <h2>
              Professional experience.
              <span> Developer mindset.</span>
            </h2>


            <p>
              I&apos;m a software development student with practical
              experience building web applications, working with databases
              and APIs, testing features, and debugging real development
              problems.
            </p>


            <p>
              I am currently studying for a Bachelor of Science in Software
              Development through BYU-Idaho / BYU-Pathway Worldwide.
            </p>


            <p>
              Before moving into software development, I built more than
              10 years of professional experience across warehouse
              management, internal sales, administration, accounting, and
              production environments.
            </p>


            <p>
              That background strengthened my communication, teamwork,
              leadership, organization, problem-solving, and time-management
              skills.
            </p>


            <p>
              Now I&apos;m focused on growing as a developer and contributing
              to teams where I can learn, build, and create useful software.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          SKILLS
      ========================== */}

      <section
        id="skills"
        className="section section-muted"
      >

        <div className="container">

          <p className="section-label">
            02 — SKILLS
          </p>


          <div className="section-heading">

            <h2>
              Tools I use to <span>build.</span>
            </h2>

            <p>
              A practical stack developed through coursework, projects,
              and hands-on problem solving.
            </p>

          </div>


          <div className="skill-grid">

            {skills.map((skill) => (

              <div
                className="skill-card"
                key={skill.title}
              >

                <h3>
                  {skill.title}
                </h3>

                <div className="chips">

                  {skill.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================== */}

      <section
        id="projects"
        className="section"
      >

        <div className="container">

          <p className="section-label">
            03 — SELECTED WORK
          </p>


          <div className="section-heading">

            <h2>
              Projects that show <span>how I work.</span>
            </h2>

            <p>
              From database-backed applications to responsive websites,
              each project represents a practical development challenge.
            </p>

          </div>


          <div className="project-grid">

            {projects.map((project, index) => {

              const Icon = project.icon;

              return (

                <article
                  className="project-card"
                  key={project.title}
                >

                  <div className="project-top">

                    <div className="project-icon">
                      <Icon size={23} />
                    </div>

                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                  </div>


                  <p className="project-category">
                    {project.category}
                  </p>


                  <h3>
                    {project.title}
                  </h3>


                  <p className="project-description">
                    {project.description}
                  </p>


                  <div className="chips">

                    {project.tech.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>


                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                    <ExternalLink size={16} />
                  </a>

                </article>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================
          EXPERIENCE
      ========================== */}

      <section
        id="experience"
        className="section section-dark"
      >

        <div className="container">

          <p className="section-label light">
            04 — EXPERIENCE & EDUCATION
          </p>


          <div className="timeline">

            {/* EDUCATION */}

            <div className="timeline-item">

              <div className="timeline-marker" />

              <div>

                <span className="timeline-date">
                  CURRENT
                </span>

                <h3>
                  BYU-Idaho / BYU-Pathway Worldwide
                </h3>

                <h4>
                  Bachelor of Science — Software Development
                </h4>

                <p>
                  Developing practical skills in programming, web
                  development, databases, APIs, testing, debugging,
                  and software projects.
                </p>

              </div>

            </div>


            {/* LEHLE ENGINEERING */}

            <div className="timeline-item">

              <div className="timeline-marker" />

              <div>

                <span className="timeline-date">
                  PROFESSIONAL EXPERIENCE
                </span>

                <h3>
                  Lehle Engineering
                </h3>

                <h4>
                  Stock Control Assistant / Assembly Plant Assistant Manager
                </h4>

                <p>
                  Supported production operations, stock control,
                  safe material handling, reporting, organization,
                  and teamwork.
                </p>

              </div>

            </div>


            {/* CK MINING */}

            <div className="timeline-item">

              <div className="timeline-marker" />

              <div>

                <span className="timeline-date">
                  2015 — 2019
                </span>

                <h3>
                  CK Mining (Pty) Ltd
                </h3>

                <h4>
                  Administrator & Accounts Assistant
                </h4>

                <p>
                  Handled account reconciliations, data processing,
                  invoice verification, discrepancy resolution,
                  and weekly reporting.
                </p>

              </div>

            </div>


            {/* EDISON LEBONE */}

            <div className="timeline-item">

              <div className="timeline-marker" />

              <div>

                <span className="timeline-date">
                  2010 — 2014
                </span>

                <h3>
                  Edison Lebone (Pty) Ltd
                </h3>

                <h4>
                  Warehouse Manager / Internal Sales
                </h4>

                <p>
                  Managed material receipt and dispatch, stock
                  monitoring, quotations, invoices, and customer
                  sales support.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}

      <section
        id="contact"
        className="section contact"
      >

        <div className="container contact-box">

          <div>

            <p className="section-label">
              05 — CONTACT
            </p>

            <h2>
              Let&apos;s build something <span>useful.</span>
            </h2>

            <p>
              I&apos;m open to junior software development opportunities,
              internships, collaborations, and projects where I can
              continue learning and contribute my skills.
            </p>

          </div>


          <div className="contact-actions">

            <a
              className="button primary"
              href="mailto:freedomwrt@gmail.com"
            >
              Email Me
              <Mail size={18} />
            </a>


            <a
              className="button secondary"
              href="https://www.linkedin.com/in/freedom-mukanza-3ba282258"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <Linkedin size={18} />
            </a>


            <a
              className="button secondary"
              href="https://github.com/freedombyu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <Github size={18} />
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}

      <footer>

        <div className="container footer-inner">

          <div>

            <a
              className="brand"
              href="#home"
            >
              FM<span>.</span>
            </a>

            <p>
              Junior Software Developer · South Africa
            </p>

          </div>


          <div className="footer-links">

            <a
              href="https://github.com/freedombyu"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>


            <a
              href="https://www.linkedin.com/in/freedom-mukanza-3ba282258"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>


            <a
              href="mailto:freedomwrt@gmail.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

          </div>


          <p className="copyright">
            © {new Date().getFullYear()} Freedom Mukanza.
            Built with Next.js.
          </p>

        </div>

      </footer>

    </main>
  );
}