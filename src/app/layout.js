import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Thorz Digital",
    template: "%s | Thorz Digital",
  },
  description:
    "Thorz Digital membantu bisnis di Indonesia membangun website, SaaS, dan automasi yang skalabel dengan pengalaman produk yang rapi dan modern.",
  applicationName: "Thorz Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body
        className={`${inter.className} min-h-full bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
