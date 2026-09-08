import Image from "next/image";
import Lanyard from "@/components/Lanyard";

const skills = [["⚛", "React"], ["N", "Next.js"], ["JS", "JavaScript"], ["AI", "AI Tools"], ["◉", "MongoDB"], ["〰", "Tailwind CSS"]];
const projects = [
  { className: "analytics", title: "AI Analytics", description: "A modern analytics dashboard with real-time insights.", tags: ["Next.js", "OpenAI", "MongoDB"] },
  { className: "notes", title: "Smart Notes", description: "An intelligent notes app that helps organize ideas.", tags: ["React", "Node.js", "Express"] },
  { className: "assistant", title: "AI Assistant", description: "A conversational assistant built for everyday tasks.", tags: ["Next.js", "AI", "Tailwind"] },
];

function Icon({ name, size = 18 }: { name: "arrow" | "download" | "mail" | "phone" | "pin" | "send"; size?: number }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M6.6 2.8 9 7l-2.1 1.8c1.2 2.8 3.4 5 6.2 6.2l1.8-2.1 4.2 2.4c.4.2.6.7.5 1.1-.5 2.6-2.4 4.6-5.3 4.4C7.4 20.2 2 14.6 2 7.7 2 4.8 4 2.9 6.6 2.4v.4Z" />,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#home"><span>&lt;/&gt;</span> Sunita</a>
          <div className="navLinks">
            <a className="active" href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a>
            <a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
          </div>
          <a className="navButton" href="/resume.pdf" download>Download Resume <Icon name="download" size={14} /></a>
        </nav>

        <div className="heroContent shell">
          <div className="heroCopy">
            <div className="hello">Hello, I&apos;m <span>👋</span></div>
            <h1>Sunita <span>Bhat</span></h1>
            <h2>AI &amp; Full Stack Developer</h2>
            <p>I build modern web experiences powered by AI—beautiful, fast, and designed to solve real-world problems.</p>
            <div className="heroActions">
              <a className="primaryButton" href="#projects"><Icon name="arrow" size={16} /> View My Projects</a>
              <a className="secondaryButton" href="/resume.pdf" download><Icon name="download" size={16} /> Download Resume</a>
            </div>
            <div className="socials" aria-label="Social links">
              <a href="https://github.com/" aria-label="GitHub">GH</a><a href="https://linkedin.com/" aria-label="LinkedIn">in</a>
              <a href="https://x.com/" aria-label="X">𝕏</a><a href="mailto:sunita@example.com" aria-label="Email">@</a>
            </div>
          </div>

          <div className="heroShowcase">
            <div className="heroPortrait">
              <span className="portraitOrbit orbitOne" />
              <span className="portraitOrbit orbitTwo" />
              <div className="portraitPhoto">
                <Image src="/sunita-photo.png" alt="Sunita Bhat" width={320} height={400} priority />
              </div>
              <div className="portraitWords">Code<br />Build<br />Grow <span /></div>
            </div>
            <div className="lanyardHero">
              <div className="lanyardGlow" />
              <Lanyard
                position={[0, 0, 24]}
                gravity={[0, -40, 0]}
                frontImage="/sunita-card-front.png"
                backImage="/sunita-card-back.png"
                imageFit="cover"
                lanyardWidth={1.1}
              />
              <div className="dragHint"><span>↔</span> Drag the ID card</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section aboutSection" id="about">
        <div className="shell aboutGrid">
          <div>
            <div className="eyebrow">About Me</div><h3>Who I Am</h3>
            <p className="bodyCopy">I&apos;m a passionate developer with a strong interest in building scalable, user-friendly web applications. I enjoy learning new technologies and turning thoughtful ideas into meaningful digital products.</p>
            <div className="miniFacts"><span>◆ India</span><span>◇ B.Tech</span><span>▣ 3+ Years Experience</span></div>
          </div>
          <div className="qualities">
            <article><i>♙</i><div><h4>Problem Solver</h4><p>I enjoy finding efficient solutions to complex problems.</p></div></article>
            <article><i>♧</i><div><h4>Team Player</h4><p>I work well in a team and value collaboration.</p></div></article>
            <article><i>↗</i><div><h4>Quick Learner</h4><p>Always eager to learn and adapt to new technologies.</p></div></article>
            <article><i>&lt;/&gt;</i><div><h4>Clean Code</h4><p>I write clean, maintainable and scalable code.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section skillsSection" id="skills">
        <div className="shell">
          <div className="eyebrow">My Skills</div><h3>Technologies &amp; Tools</h3>
          <div className="skillGrid">{skills.map(([icon, label]) => <div className="skill" key={label}><i>{icon}</i><span>{label}</span></div>)}</div>
        </div>
      </section>

      <section className="section workSection">
        <div className="shell workGrid">
          <div id="experience">
            <div className="eyebrow">Experience</div><h3>Work Experience</h3>
            <div className="timeline">
              <article><span className="timeDot" /><div className="roleLine"><div><h4>AI Product Developer</h4><small>Full Stack Developer</small></div><time>2023 — Present</time></div><ul><li>Developed and maintained AI-powered web products.</li><li>Built fast, responsive interfaces and APIs.</li><li>Worked on authentication and user workflows.</li></ul></article>
              <article><span className="timeDot" /><div className="roleLine"><div><h4>Personal Projects</h4><small>Web Developer</small></div><time>2022 — 2023</time></div><ul><li>Built multiple web applications using modern tools.</li><li>Deployed production projects on Vercel.</li></ul></article>
            </div>
          </div>

          <div id="projects">
            <div className="projectHeading"><div><div className="eyebrow">Featured Projects</div><h3>Some of My Work</h3></div><a href="#">View All Projects <Icon name="arrow" size={13} /></a></div>
            <div className="projectGrid">
              {projects.map((project) => <article className="projectCard" key={project.title}>
                <div className={`projectVisual ${project.className}`}><span className="mockSidebar" /><span className="mockPanel" /><span className="mockChart" /></div>
                <div className="projectInfo"><h4>{project.title}</h4><p>{project.description}</p><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactInner">
          <div><div className="eyebrow light">Get In Touch</div><h3>Let&apos;s Work Together</h3><p>I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your team.</p></div>
          <div className="contactMethods">
            <a href="mailto:sunita@example.com"><i><Icon name="mail" /></i><span><b>Email</b>sunita@example.com</span></a>
            <a href="tel:+919876543210"><i><Icon name="phone" /></i><span><b>Phone</b>+91 98765 43210</span></a>
            <div><i><Icon name="pin" /></i><span><b>Location</b>India</span></div>
          </div>
          <a className="primaryButton" href="mailto:sunita@example.com">Send Message <Icon name="send" size={15} /></a>
        </div>
      </section>

      <footer><div className="shell footerInner"><div className="socials"><a href="https://github.com/">GH</a><a href="https://linkedin.com/">in</a><a href="https://x.com/">𝕏</a></div><p>© 2026 Sunita Bhat. All rights reserved.</p><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}
