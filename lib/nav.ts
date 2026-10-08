export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/products", label: "הלוחות שלנו" },
  { href: "/#what", label: "מה זה קארום" },
  { href: "/#events", label: "אירועים" },
];

export function isNavActive(href: string, pathname: string) {
  return href === pathname;
}
