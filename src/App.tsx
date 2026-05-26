import { useRef, useState } from 'react'
import {
  GraduationCap,
  Rocket,
  Leaf,
  HeartPulse,
  Target,
  TrendingUp,
  Sparkles,
  MapPin,
  ShieldCheck,
  ArrowDown,
  Mail,
  Play,
} from 'lucide-react'
import './App.css'

type Sector = {
  number: string
  icon: typeof GraduationCap
  title: string
  blurb: string
  bullets: string[]
}

const sectors: Sector[] = [
  {
    number: '01',
    icon: GraduationCap,
    title: 'Education Services & EdTech',
    blurb:
      'Innovations supporting learning, teaching, skills development, creativity, and access to high-quality education for all young people.',
    bullets: [
      'Technology-enabled learning platforms',
      'Assessment and cognitive development tools',
      'Early years and SEN solutions',
      'Career readiness, enterprise skills, and STEM pathways',
    ],
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Enterprise & Future Skills',
    blurb:
      'Companies helping children and young people build the foundations of the workforce — and the entrepreneurs — of tomorrow.',
    bullets: [
      'Entrepreneurial skills',
      'Financial literacy',
      'Digital capability',
      'Creative and problem-solving competencies',
    ],
  },
  {
    number: '03',
    icon: Leaf,
    title: 'Sustainability for Communities',
    blurb:
      'Startups enabling young people to live in, learn from, and shape a cleaner, greener, more resilient world.',
    bullets: [
      'Environmental education technology',
      'Youth-centred climate action platforms',
      'Tools for schools and families reducing carbon footprint',
      'Sustainable resource solutions for children’s environments',
    ],
  },
  {
    number: '04',
    icon: HeartPulse,
    title: 'Wellbeing & Child Development',
    blurb:
      'Founders safeguarding the emotional, psychological, and physical wellbeing of young people across Wales.',
    bullets: [
      'Mental health platforms and early-intervention tools',
      'Physical activity and healthy lifestyle apps',
      'Behavioural and developmental support',
      'Inclusive wellbeing solutions for all children',
    ],
  },
]

const lookFor = [
  {
    icon: Target,
    title: 'Clear mission',
    body: 'Aligned to improving outcomes for children under 18.',
  },
  {
    icon: TrendingUp,
    title: 'High-growth potential',
    body: 'Commercially compelling, with scalable delivery.',
  },
  {
    icon: Sparkles,
    title: 'Authenticity & insight',
    body: 'Passion for the sector and a deep understanding of it.',
  },
  {
    icon: MapPin,
    title: 'Rooted in Wales',
    body: 'Committed to operating here and contributing to local talent.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethics & impact',
    body: 'Responsibility built in, with measurable outcomes.',
  },
]

const visionPoints = [
  'A more skilled generation',
  'A greener and healthier future',
  'A thriving Welsh innovation ecosystem',
  'Companies that scale beyond Wales to create global impact',
]

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const startVideo = () => {
    setPlaying(true)
    const v = videoRef.current
    if (v) {
      v.play().catch(() => {
        /* user can still hit native controls if autoplay is blocked */
      })
    }
  }

  return (
    <div className="page">
      <header className="nav">
        <a href="#top" className="nav__brand" aria-label="Spryng Ventures">
          <img src="/logo.png" alt="" className="nav__logo" />
          <span className="nav__wordmark">Spryng Ventures</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#story">Story</a>
          <a href="#thesis">Thesis</a>
          <a href="#sectors">What we back</a>
          <a href="#model">Investment</a>
          <a href="#vision">Vision</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__blob hero__blob--a" />
          <div className="hero__blob hero__blob--b" />
        </div>

        <div className="hero__inner">
          <img src="/logo.png" alt="Spryng Ventures" className="hero__logo" />

          <p className="eyebrow">
            <span className="eyebrow__dot" /> Wales-based angel syndicate
          </p>

          <h1 className="hero__title">
            Investing in the <span className="grad">future of Wales</span>{' '}
            <span className="nowrap">— by backing those building a better
            world for young people today.</span>
          </h1>

          <p className="hero__sub">
            We are a collective of angel investors empowering the next
            generation through enterprise, education, wellbeing, and
            sustainable innovation.
          </p>

          <div className="hero__cta">
            <a href="#thesis" className="btn btn--primary">
              Read our thesis
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a href="#model" className="btn btn--ghost">
              How we invest
            </a>
          </div>

          <ul className="hero__stats" aria-label="Investment at a glance">
            <li>
              <span className="stat__num">£350k</span>
              <span className="stat__label">Angel equity per deal</span>
            </li>
            <li>
              <span className="stat__num">£350k</span>
              <span className="stat__label">Match from Dev Bank of Wales</span>
            </li>
            <li>
              <span className="stat__num">£700k</span>
              <span className="stat__label">Total early-stage capital</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="story" className="section section--video">
        <div className="section__inner section__inner--center">
          <p className="kicker">Watch our story</p>
          <h2 className="section__title">
            A short film on what we believe &mdash; and who we exist to back.
          </h2>
          <p className="section__lede video__lede">
            Two minutes on why we&rsquo;re investing in the next generation of
            Welsh founders.
          </p>
          <div className="video">
            <video
              ref={videoRef}
              controls={playing}
              preload="metadata"
              playsInline
              className="video__el"
            >
              <source
                src="/spryng-investing-in-wales.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn&rsquo;t support embedded video.
            </video>
            {!playing && (
              <button
                type="button"
                className="video__poster"
                onClick={startVideo}
                aria-label="Play Spryng Ventures story"
              >
                <img
                  src="/logo.png"
                  alt=""
                  className="video__poster-logo"
                />
                <span className="video__play" aria-hidden="true">
                  <Play size={32} fill="currentColor" strokeWidth={0} />
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      <section id="thesis" className="section section--why">
        <div className="section__inner">
          <p className="kicker">Why we exist</p>
          <h2 className="section__title">
            Wales has extraordinary talent. The capital to back it doesn&rsquo;t
            always arrive in time.
          </h2>
          <div className="prose">
            <p>
              We are a collective of angel investors united by a single belief:{' '}
              <strong>
                the future prosperity of Wales depends on empowering the next
                generation through enterprise, education, wellbeing, and
                sustainable innovation.
              </strong>
            </p>
            <p>
              Wales has an extraordinary depth of talent, creativity, and
              community-minded ambition. Yet early-stage founders working to
              improve the lives and futures of children and young people often
              struggle to access aligned, values-driven capital at the moment
              they need it most.
            </p>
          </div>

          <div className="pillars">
            <div className="pillar">
              <span className="pillar__num">01</span>
              <p>We exist to close that gap.</p>
            </div>
            <div className="pillar">
              <span className="pillar__num">02</span>
              <p>We exist to support those founders.</p>
            </div>
            <div className="pillar">
              <span className="pillar__num">03</span>
              <p>
                We exist to build a Wales where every young person under 18 has
                the opportunity, tools, and environment to thrive.
              </p>
            </div>
          </div>

          <p className="prose__close">
            Our mission is to invest in visionary entrepreneurs who are
            reimagining education, wellbeing, and sustainable impact &mdash;
            while creating high-growth companies that contribute to the
            long-term economic strength of Wales.
          </p>
        </div>
      </section>

      <section id="sectors" className="section section--sectors">
        <div className="section__inner">
          <p className="kicker">What we invest in</p>
          <h2 className="section__title">
            Four sectors. One generation. Children and young people aged
            0&ndash;18.
          </h2>
          <p className="section__lede">
            We back Wales-based early-stage startups building solutions for
            young people across one or more of the following areas.
          </p>

          <div className="cards">
            {sectors.map((s) => {
              const Icon = s.icon
              return (
                <article className="card" key={s.number}>
                  <div className="card__top">
                    <span className="card__icon">
                      <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="card__num">{s.number}</span>
                  </div>
                  <h3 className="card__title">{s.title}</h3>
                  <p className="card__blurb">{s.blurb}</p>
                  <ul className="card__list">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="model" className="section section--model">
        <div className="section__inner">
          <p className="kicker">Our investment model</p>
          <h2 className="section__title">
            Up to <span className="grad">£700,000</span> of early-stage capital,
            matched alongside the Development Bank of Wales.
          </h2>

          <div className="model">
            <div className="model__col">
              <p className="model__label">Angel syndicate</p>
              <p className="model__big">£350k</p>
              <p className="model__hint">Equity investment from our members</p>
            </div>
            <div className="model__plus" aria-hidden="true">
              +
            </div>
            <div className="model__col">
              <p className="model__label">Development Bank of Wales</p>
              <p className="model__big">£350k</p>
              <p className="model__hint">Matched alongside our investment</p>
            </div>
            <div className="model__equals" aria-hidden="true">
              =
            </div>
            <div className="model__col model__col--highlight">
              <p className="model__label">Total available</p>
              <p className="model__big">£700k</p>
              <p className="model__hint">
                To fuel ambitious growth from day one
              </p>
            </div>
          </div>

          <p className="model__foot">
            Qualifying Welsh startups can secure meaningful capital at the
            earliest stages of development &mdash; the moment it matters most.
          </p>
        </div>
      </section>

      <section className="section section--look">
        <div className="section__inner">
          <p className="kicker">What we look for</p>
          <h2 className="section__title">
            Founders who are mission-led, ambitious, and deeply Welsh in
            character.
          </h2>

          <ul className="look">
            {lookFor.map(({ icon: Icon, title, body }) => (
              <li key={title} className="look__item">
                <span className="look__icon">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="look__belief">
            We believe that companies improving the lives and futures of
            children are not only socially transformative &mdash; they represent
            some of the most compelling long-term commercial opportunities of
            our time.
          </p>
        </div>
      </section>

      <section id="vision" className="section section--vision">
        <div className="section__inner">
          <p className="kicker">Our vision</p>
          <h2 className="section__title">
            Wales as a global centre of excellence for education innovation,
            youth wellbeing, and sustainable child-focused technology.
          </h2>

          <ul className="vision">
            {visionPoints.map((point, i) => (
              <li key={point} className="vision__item">
                <span className="vision__bar" aria-hidden="true">
                  <span style={{ height: `${40 + i * 20}%` }} />
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--close">
        <div className="section__inner section__inner--center">
          <p className="kicker">In short</p>
          <p className="close">
            We invest in the future &mdash; by investing in those building a
            better world for young people today.
          </p>
        </div>
      </section>

      <section id="contact" className="section section--contact">
        <div className="section__inner section__inner--center">
          <p className="kicker">Contact us</p>
          <h2 className="section__title">
            Building something for the next generation of Wales? We&rsquo;d love
            to hear from you.
          </h2>
          <p className="contact__lede">
            Drop us a line and tell us about your company, your founders, and
            the young people you&rsquo;re building for.
          </p>
          <a
            href="mailto:contact@spryngventures.com"
            className="btn btn--primary btn--lg contact__btn"
          >
            <Mail size={18} aria-hidden="true" />
            contact@spryngventures.com
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src="/logo.png" alt="" className="footer__logo" />
            <div>
              <p className="footer__name">Spryng Ventures</p>
              <p className="footer__tag">An angel syndicate for Wales.</p>
            </div>
          </div>
          <div className="footer__right">
            <a
              href="mailto:contact@spryngventures.com"
              className="footer__email"
            >
              contact@spryngventures.com
            </a>
            <p className="footer__meta">
              &copy; {new Date().getFullYear()} Spryng Ventures. Backing the
              next generation of Welsh founders.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
