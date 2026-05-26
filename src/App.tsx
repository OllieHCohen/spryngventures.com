import { useEffect, useRef, useState } from 'react'
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
  Globe,
} from 'lucide-react'
import { translations, type Lang } from './i18n'
import './App.css'

const sectorIcons = [GraduationCap, Rocket, Leaf, HeartPulse]
const lookIcons = [Target, TrendingUp, Sparkles, MapPin, ShieldCheck]
const sectorNumbers = ['01', '02', '03', '04']

function getLangFromPath(): Lang {
  if (typeof window === 'undefined') return 'en'
  return window.location.pathname.replace(/\/+$/, '').toLowerCase() === '/cy'
    ? 'cy'
    : 'en'
}

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [lang, setLang] = useState<Lang>(getLangFromPath)
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.docTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.metaDescription)
  }, [lang, t])

  useEffect(() => {
    const onPop = () => setLang(getLangFromPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const switchLang = (next: Lang) => {
    if (next === lang) return
    const path = next === 'cy' ? '/cy' : '/'
    window.history.pushState(null, '', path + window.location.hash)
    setLang(next)
  }

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
          <a href="#story">{t.nav.story}</a>
          <a href="#thesis">{t.nav.thesis}</a>
          <a href="#sectors">{t.nav.sectors}</a>
          <a href="#model">{t.nav.model}</a>
          <a href="#vision">{t.nav.vision}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="nav__lang" role="group" aria-label="Language">
          <Globe size={14} aria-hidden="true" className="nav__lang-icon" />
          <button
            type="button"
            className={`nav__lang-btn ${lang === 'en' ? 'is-active' : ''}`}
            onClick={() => switchLang('en')}
            aria-pressed={lang === 'en'}
            aria-label="English"
          >
            EN
          </button>
          <span aria-hidden="true" className="nav__lang-sep">
            /
          </span>
          <button
            type="button"
            className={`nav__lang-btn ${lang === 'cy' ? 'is-active' : ''}`}
            onClick={() => switchLang('cy')}
            aria-pressed={lang === 'cy'}
            aria-label="Cymraeg"
          >
            CY
          </button>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__blob hero__blob--a" />
          <div className="hero__blob hero__blob--b" />
        </div>

        <div className="hero__inner">
          <img src="/logo.png" alt="Spryng Ventures" className="hero__logo" />

          <p className="eyebrow">
            <img
              src="/wales-flag.svg"
              alt=""
              className="eyebrow__flag"
              aria-hidden="true"
            />{' '}
            {t.hero.eyebrow}
          </p>

          <h1 className="hero__title">
            {t.hero.titleStart}{' '}
            <span className="grad">{t.hero.titleGradient}</span>{' '}
            <span className="nowrap">{t.hero.titleEnd}</span>
          </h1>

          <p className="hero__sub">{t.hero.sub}</p>

          <div className="hero__cta">
            <a href="#thesis" className="btn btn--primary">
              {t.hero.ctaPrimary}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a href="#model" className="btn btn--ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <ul className="hero__stats" aria-label="Investment at a glance">
            {t.hero.stats.map((s) => (
              <li key={s.label}>
                <span className="stat__num">{s.num}</span>
                <span className="stat__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="story" className="section section--video">
        <div className="section__inner section__inner--center">
          <p className="kicker">{t.story.kicker}</p>
          <h2 className="section__title">{t.story.title}</h2>
          <p className="section__lede video__lede">{t.story.lede}</p>
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
            </video>
            {!playing && (
              <button
                type="button"
                className="video__poster"
                onClick={startVideo}
                aria-label={t.story.playAria}
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
          <p className="kicker">{t.thesis.kicker}</p>
          <h2 className="section__title">{t.thesis.title}</h2>
          <div className="prose">
            <p>
              {t.thesis.introBoldLead}
              <strong>{t.thesis.introBold}</strong>
              {t.thesis.introBoldTrail}
            </p>
            <p>{t.thesis.introBody}</p>
          </div>

          <div className="pillars">
            {t.thesis.pillars.map((p) => (
              <div className="pillar" key={p.num}>
                <span className="pillar__num">{p.num}</span>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          <p className="prose__close">{t.thesis.close}</p>
        </div>
      </section>

      <section id="sectors" className="section section--sectors">
        <div className="section__inner">
          <p className="kicker">{t.sectors.kicker}</p>
          <h2 className="section__title">{t.sectors.title}</h2>
          <p className="section__lede">{t.sectors.lede}</p>

          <div className="cards">
            {t.sectors.items.map((s, i) => {
              const Icon = sectorIcons[i]
              return (
                <article className="card" key={s.title}>
                  <div className="card__top">
                    <span className="card__icon">
                      <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="card__num">{sectorNumbers[i]}</span>
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
          <p className="kicker">{t.model.kicker}</p>
          <h2 className="section__title">
            {t.model.titleStart}{' '}
            <span className="grad">{t.model.titleGradient}</span>{' '}
            {t.model.titleEnd}
          </h2>

          <div className="model">
            <div className="model__col">
              <p className="model__label">{t.model.cols[0].label}</p>
              <p className="model__big">{t.model.cols[0].big}</p>
              <p className="model__hint">{t.model.cols[0].hint}</p>
            </div>
            <div className="model__plus" aria-hidden="true">
              {t.model.plus}
            </div>
            <div className="model__col">
              <p className="model__label">{t.model.cols[1].label}</p>
              <p className="model__big">{t.model.cols[1].big}</p>
              <p className="model__hint">{t.model.cols[1].hint}</p>
            </div>
            <div className="model__equals" aria-hidden="true">
              {t.model.equals}
            </div>
            <div className="model__col model__col--highlight">
              <p className="model__label">{t.model.cols[2].label}</p>
              <p className="model__big">{t.model.cols[2].big}</p>
              <p className="model__hint">{t.model.cols[2].hint}</p>
            </div>
          </div>

          <p className="model__foot">{t.model.foot}</p>
        </div>
      </section>

      <section className="section section--look">
        <div className="section__inner">
          <p className="kicker">{t.look.kicker}</p>
          <h2 className="section__title">{t.look.title}</h2>

          <ul className="look">
            {t.look.items.map((item, i) => {
              const Icon = lookIcons[i]
              const isWales = i === 3
              return (
                <li key={item.title} className="look__item">
                  <span
                    className={`look__icon ${isWales ? 'look__icon--flag' : ''}`}
                  >
                    {isWales ? (
                      <img
                        src="/wales-flag.svg"
                        alt=""
                        className="look__flag"
                        aria-hidden="true"
                      />
                    ) : (
                      <Icon
                        size={22}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <p className="look__belief">{t.look.belief}</p>
        </div>
      </section>

      <section id="vision" className="section section--vision">
        <div className="section__inner">
          <p className="kicker">{t.vision.kicker}</p>
          <h2 className="section__title">{t.vision.title}</h2>

          <ul className="vision">
            {t.vision.items.map((point, i) => (
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
          <p className="kicker">{t.close.kicker}</p>
          <p className="close">{t.close.line}</p>
        </div>
      </section>

      <section id="contact" className="section section--contact">
        <div className="section__inner section__inner--center">
          <p className="kicker">{t.contact.kicker}</p>
          <h2 className="section__title">{t.contact.title}</h2>
          <p className="contact__lede">{t.contact.lede}</p>
          <a
            href={`mailto:${t.contact.email}`}
            className="btn btn--primary btn--lg contact__btn"
          >
            <Mail size={18} aria-hidden="true" />
            {t.contact.email}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src="/logo.png" alt="" className="footer__logo" />
            <div>
              <p className="footer__name">{t.footer.name}</p>
              <p className="footer__tag">
                <img
                  src="/wales-flag.svg"
                  alt=""
                  className="footer__flag"
                  aria-hidden="true"
                />
                {t.footer.tag}
              </p>
            </div>
          </div>
          <div className="footer__right">
            <a
              href={`mailto:${t.contact.email}`}
              className="footer__email"
            >
              {t.contact.email}
            </a>
            <p className="footer__meta">
              &copy; {new Date().getFullYear()} {t.footer.name}.{' '}
              {t.footer.meta}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
