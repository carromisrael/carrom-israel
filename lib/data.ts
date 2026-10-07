export type ProductId = "classic" | "pro" | "champion";

export type Product = {
  id: ProductId;
  name: string;
  kicker: string;
  price: number;
  image: string;
  blurb: string;
  thickness: string;
  frame: string;
  weight: string;
  size: string;
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
    frame: "עץ צבוע כחול",
    weight: "כ־8 ק״ג",
    size: "86 × 86 ס״מ",
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
    frame: "עץ צבוע שחור",
    weight: "כ־11 ק״ג",
    size: "88 × 88 ס״מ",
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
    frame: "עץ טיק מלא",
    weight: "כ־14 ק״ג",
    size: "89 × 89 ס״מ",
    backBg: "bg-[#3A2A18]",
  },
];

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
      "קנינו את ה-Pro לשבת אחת ומאז הוא לא ירד מהשולחן. הילדים מחכים לי בערב עם הסטרייקר ביד.",
    author: "נועה ל׳",
    role: "מודיעין",
  },
  {
    quote:
      "הזמנתי לוח ליחידה. שלושה חודשים של מילואים, וזה הדבר היחיד שהוציא את כולם מהפלאפון.",
    author: "איתי ב׳",
    role: "בסיס בדרום",
  },
  {
    quote:
      "איכות העץ מרגישה כמו רהיט, לא כמו צעצוע. הגיע ארוז טוב, תוך שלושה ימי עסקים.",
    author: "דני מ׳",
    role: "חיפה",
  },
] as const;

export function formatPrice(price: number) {
  return `₪${price}`;
}
