import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Assistant, Cormorant_Garamond } from "next/font/google";
import { DirectionProvider } from "@/components/ui/direction";
import "./globals.css";

const fontDisplay = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-display",
});

const fontBody = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const fontDisplayLatin = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-latin",
});

export const metadata: Metadata = {
  title: "Carrom Israel — הבית של הקארום בישראל",
  description:
    "מייבאים קארום בורד של SISCAA מהודו, מתאימים אותו לבית הישראלי, ושולחים עד הדלת.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontDisplayLatin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DirectionProvider dir="rtl">{children}</DirectionProvider>
      </body>
    </html>
  );
}
