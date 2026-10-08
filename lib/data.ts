export type ProductId = "classic" | "pro" | "champion";

export type Product = {
  id: ProductId;
  name: string;
  kicker: string;
  price: number;
  image: string;
  blurb: string;
  thickness: string;
  thicknessMm: number;
  frame: string;
  frameSwatch: string;
  weight: string;
  size: string;
  playArea: string;
  badgeLabel: string;
  tagline: string;
  backBg: string;
};

export const products: Product[] = [
  {
    id: "classic",
    name: "Classic",
    kicker: "8MM · מסגרת כחולה",
    price: 590,
    image: "/assets/board-classic.jpeg",
    blurb:
      "הדגם שמתחילים איתו: קל להזיז, קל לאחסן, ואותו משטח מייפל שמאפשר לשחק ברצינות מהסבב הראשון.",
    thickness: "8 מ״מ",
    thicknessMm: 8,
    frame: "עץ צבוע כחול",
    frameSwatch: "#1f47b8",
    weight: "כ־8 ק״ג",
    size: "86 × 86 ס״מ",
    playArea: "72 × 72 ס״מ",
    badgeLabel: "CLASSIC",
    tagline: "הדגם שמתחילים איתו",
    backBg: "bg-[#1B3A5C]",
  },
  {
    id: "pro",
    name: "Pro",
    kicker: "12MM · מסגרת שחורה",
    price: 790,
    image: "/assets/board-pro.jpeg",
    blurb:
      "ההמלצה שלנו לרוב הבתים — כבד מספיק כדי לשחק רציני, קל מספיק כדי לצאת איתו לגינה ובחזרה.",
    thickness: "12 מ״מ",
    thicknessMm: 12,
    frame: "עץ צבוע שחור",
    frameSwatch: "#151515",
    weight: "כ־11 ק״ג",
    size: "88 × 88 ס״מ",
    playArea: "74 × 74 ס״מ",
    badgeLabel: "PRO · מומלץ",
    tagline: "ההמלצה שלנו לרוב הבתים",
    backBg: "bg-[#14100E]",
  },
  {
    id: "champion",
    name: "Champion",
    kicker: "16MM · TOURNAMENT",
    price: 990,
    image: "/assets/board-champion-top.jpeg",
    blurb:
      "עץ טיק מלא בגימור שמן, המשטח העבה והכבד בסדרה. הדיסקית עוצרת בדיוק במקום שהתכוונתם — לוח של טורנירים.",
    thickness: "16 מ״מ",
    thicknessMm: 16,
    frame: "עץ טיק מלא",
    frameSwatch: "#a8662e",
    weight: "כ־14 ק״ג",
    size: "89 × 89 ס״מ",
    playArea: "74 × 74 ס״מ",
    badgeLabel: "CHAMPION · טורניר",
    tagline: "לוח של טורנירים",
    backBg: "bg-[#3A2A18]",
  },
];

export const boxContents = [
  { label: "דיסקיות", value: "9 לבנות, 9 שחורות, מלכה אדומה" },
  { label: "סטרייקרים", value: "2" },
  { label: "אבקת החלקה", value: "שקית 50 גרם" },
  { label: "הוראות", value: "חוברת בעברית" },
  { label: "רשתות כיסים", value: "מותקנות, ניתנות להחלפה" },
] as const;

export const shippingInfo = [
  { label: "זמן אספקה", value: "3 ימי עסקים" },
  { label: "משלוח", value: "עד הדלת, בכל הארץ" },
  { label: "אחריות", value: "שנתיים על המסגרת והמשטח" },
  { label: "החזרות", value: "14 יום, באריזה המקורית" },
  { label: "מלאי", value: "בישראל" },
] as const;

export const storyBlocks = [
  {
    num: "01",
    text: "נפגשנו בשמירות ארוכות, שלושה חברים בסבב מילואים. בין משמרת למשמרת דיברנו על מה שחיכה בבית — ובעיקר על הילדים, ועל כמה קל להיות איתם באותו חדר בלי להיות איתם באמת.",
  },
  {
    num: "02",
    text: "חיפשנו משהו שמושיב את כולנו סביב אותו שולחן, באותו גובה — לא מסך, לא תור שנגמר בדקה. במוצב אחד מישהו הביא לוח קרום, וזה מה שקרה: שעתיים עברו ואף אחד לא קם.",
  },
  {
    num: "03",
    text: "חזרנו הביתה והתחלנו לייבא. עבדנו עם SISCAA — היצרן המוביל בהודו — הוספנו הוראות בעברית, אריזה שעומדת במשלוח ואחריות מקומית. את שאר העבודה הלוח עושה לבד.",
  },
] as const;

export const featureTiles = [
  {
    image: "/assets/lifestyle-camping.png",
    kicker: "בשטח",
    caption: "נכנס לרכב, יוצא בכל מקום",
  },
  {
    image: "/assets/lifestyle-beach.jpeg",
    kicker: "בבית",
    caption: "עשרים דקות לסבב, גם באמצע השבוע",
  },
  {
    image: "/assets/lifestyle-bar.jpeg",
    kicker: "בבר",
    caption: "ערב שלם על שולחן אחד",
  },
] as const;

export const events = [
  {
    date: "12.09.26",
    title: "ערב קרום פתוח — תל אביב",
    detail: "בר שכונתי, 20:00 · ארבעה לוחות",
  },
  {
    date: "03.10.26",
    title: "טורניר משפחות ראשון — ירושלים",
    detail: "זוגות הורה־ילד · 16 זוגות",
  },
  {
    date: "24.10.26",
    title: "קרום בשטח — יום כיף בגליל",
    detail: "חורשה, שולחנות מתקפלים · כל הגילים",
  },
] as const;

export const testimonials = [
  {
    quote:
      "הזמנתי לוח ליחידה. שלושה חודשים של מילואים, וזה הדבר היחיד שהוציא את כולם מהפלאפון.",
    author: "איתי ב׳",
    role: "בסיס בדרום",
    image: "/assets/review-soldiers.png",
    imageAlt: "חיילים משחקים קארום במועדון היחידה",
  },
  {
    quote:
      "הכנסנו שני לוחות לחדר החוגים. ההנהלה מדווחת על פחות ריבים בהפסקות ועל ילדים שמחכים לתור.",
    author: "מיטל ג׳",
    role: "הנהלת בית ספר, נתניה",
    image: "/assets/review-school.jpg",
    imageAlt: "ילדים משחקים קארום בחדר החוגים של בית הספר",
  },
  {
    quote:
      "רכשנו 4 שולחנות לפאב שלנו. הטראפיק וכמות האנשים שבאו בעקבותם כיסו את העלות הזניחה שלהם מהר מאוד. מוצר מושלם.",
    author: "רועי א׳",
    role: "בעל פאב, פרדס חנה",
    image: "/assets/review-pub.jpg",
    imageAlt: "שולחנות קארום במרפסת של פאב בשקיעה",
  },
  {
    quote:
      "קנינו שולחן הביתה — אחלה זמן איכות משפחתי. אוהבים לשבת בערב לשחק ולשתף חוויות.",
    author: "נועה ל׳",
    role: "מודיעין",
    image: "/assets/review-family.jpg",
    imageAlt: "משפחה משחקת קארום בסלון",
  },
  {
    quote:
      "שמח שקניתי. סוף סוף יש לי משחק שכל הנכדים אוהבים לבוא לשחק איתי בו.",
    author: "יעקב ש׳",
    role: "ירושלים",
    image: "/assets/review-grandpa.jpg",
    imageAlt: "סבא משחק קארום עם נכדו בסלון",
  },
  {
    quote: "אין כמו קמפינג משפחתי עם קארום.",
    author: "שירן ק׳",
    role: "רעננה",
    image: "/assets/lifestyle-beach.jpeg",
    imageAlt: "משפחה משחקת קארום על החוף בשקיעה",
  },
] as const;

export function formatPrice(price: number) {
  return `₪${price}`;
}
