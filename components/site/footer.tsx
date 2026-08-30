import Image from "next/image";
import Link from "next/link";

const SHOP_LINKS = [
  { href: "/products#champion", label: "Champion" },
  { href: "/products#pro", label: "Pro" },
  { href: "/products#classic", label: "Classic" },
] as const;

const INFO_LINKS = [
  { href: "/how-to-play", label: "איך משחקים" },
  { href: "/how-to-play", label: "חוקי המשחק" },
  { href: "#events", label: "אירועים" },
] as const;

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-[var(--nav-h)] border-t border-border-invert bg-ink-900 px-[var(--gutter)] pt-[clamp(56px,7vw,96px)] pb-8 text-[#E8E1D5]"
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap justify-between gap-[clamp(32px,5vw,64px)]">
        <div className="flex max-w-[34ch] flex-col gap-5">
          <Image
            src="/assets/logo-wordmark.png"
            alt="Carrom Israel"
            width={509}
            height={182}
            className="h-8 w-auto"
          />
          <p className="m-0 font-body text-[17px] leading-[1.62] text-sand-50/70">
            מייבאים קרום בורד של SISCAA מהודו, מתאימים אותו לבית הישראלי, ושולחים
            עד הדלת.
          </p>
        </div>
        <div className="flex min-w-[8rem] flex-col gap-4">
          <span className="font-ui text-xs tracking-[0.18em] text-sand-50/55 uppercase">
            חנות
          </span>
          {SHOP_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center font-body text-[17px] text-sand-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex min-w-[8rem] flex-col gap-4">
          <span className="font-ui text-xs tracking-[0.18em] text-sand-50/55 uppercase">
            מידע
          </span>
          {INFO_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex min-h-11 items-center font-body text-[17px] text-sand-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex min-w-[8rem] flex-col gap-4">
          <span className="font-ui text-xs tracking-[0.18em] text-sand-50/55 uppercase">
            צרו קשר
          </span>
          <a
            href="mailto:CarromIsrael@gmail.com"
            dir="ltr"
            className="inline-flex min-h-11 items-center font-body text-[17px] text-sand-50"
          >
            CarromIsrael@gmail.com
          </a>
          <a
            href="https://wa.me/972000000000"
            className="inline-flex min-h-11 items-center font-body text-[17px] text-sand-50"
          >
            וואטסאפ
          </a>
          <a
            href="https://instagram.com"
            className="inline-flex min-h-11 items-center font-body text-[17px] text-sand-50"
          >
            אינסטגרם
          </a>
        </div>
      </div>
      <div className="mx-auto mt-[clamp(40px,5vw,64px)] flex max-w-[var(--container-max)] flex-wrap justify-between gap-5 border-t border-sand-50/18 pt-5 font-ui text-[13px] text-sand-50/55">
        <span>© 2026 Carrom Israel · כל הזכויות שמורות</span>
        <span className="tracking-[0.18em] uppercase">From India with Love</span>
      </div>
    </footer>
  );
}
