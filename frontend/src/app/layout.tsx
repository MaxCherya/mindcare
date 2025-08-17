import "./globals.css";
import { Nunito_Sans, Playfair_Display } from "next/font/google";

const nunito = Nunito_Sans({
    subsets: ["latin", "cyrillic", "cyrillic-ext"],
    variable: "--font-sans",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin", "cyrillic", "cyrillic"],
    variable: "--font-serif",
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="uk">
            <body className={`${nunito.variable} ${playfair.variable} font-sans bg-white text-brand-text`}>
                {children}
            </body>
        </html>
    );
}