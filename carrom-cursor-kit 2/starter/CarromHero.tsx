import styles from './CarromHero.module.css';

type CarromHeroProps = {
  /** Use the authentic transparent logo already in the project. */
  logoSrc: string;
  accent?: 'gold' | 'mixed' | 'blue';
  boardSrc?: string;
  modelsHref?: string;
  aboutHref?: string;
  eventsHref?: string;
};

/** Integration starter: adapt paths, font loading and anchors to the existing app. */
export default function CarromHero({
  logoSrc,
  accent = 'gold',
  boardSrc = '/images/champion-hero.webp',
  modelsHref = '#models',
  aboutHref = '#about',
  eventsHref = '#events',
}: CarromHeroProps) {
  const links = [
    { href: modelsHref, label: 'הלוחות שלנו' },
    { href: aboutHref, label: 'מה זה קארום' },
    { href: eventsHref, label: 'אירועים' },
  ];

  return (
    <section data-accent={accent} className={styles.hero} dir="rtl" lang="he" aria-labelledby="carrom-hero-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <a className={styles.brand} href="#carrom-hero-title" aria-label="Carrom Israel — ראש הדף">
            {/* Keep the authentic logo; use the project's image component if appropriate. */}
            <img src={logoSrc} alt="Carrom Israel" width={200} height={72} className={styles.logo} />
          </a>
          <nav className={styles.desktopNav} aria-label="ניווט ראשי">
            {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <details className={styles.mobileMenu}>
            <summary>תפריט</summary>
            <nav aria-label="ניווט בנייד">
              {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
            </nav>
          </details>
        </header>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h1 id="carrom-hero-title" className={styles.heading}>
              פחות מסכים.<span>יותר חברים.</span>
            </h1>
            <p className={styles.description}>
              הכירו את קארום — קולעים דיסקיות לפינות בעזרת האצבע, ומתחרים עם חברים ומשפחה.
            </p>
            <a className={styles.cta} href={modelsHref}>
              למציאת הלוח שלכם <span aria-hidden="true">←</span>
            </a>
          </div>
          <div className={styles.art}>
            {/* Native img keeps starter version-neutral. Adapt to existing Next/Image convention. */}
            <img
              className={styles.board}
              src={boardSrc}
              alt="לוח קארום Champion מעץ עם דיסקיות משחק"
              width={1536}
              height={1024}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
