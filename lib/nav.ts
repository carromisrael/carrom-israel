export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/#models", label: "הדגמים" },
  { href: "/#how", label: "איך משחקים" },
  { href: "/online", label: "אונליין" },
  { href: "/#events", label: "אירועים" },
  { href: "/#contact", label: "צרו קשר" },
];

export function isNavActive(href: string, pathname: string) {
  return href === pathname;
}
