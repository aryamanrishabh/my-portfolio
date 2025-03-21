import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aryaman Rishabh | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with proficiency in Next.js, React, AWS, and cloud computing. Passionate about building scalable and performant web applications.",
  keywords:
    "Aryaman Rishabh, Software Engineer, Next.js Developer, React, AWS, Full Stack Developer, Frontend Engineer, Web Developer Portfolio",
  openGraph: {
    type: "website",
    url: "https://aryamanrishabh.com/",
    title: "Aryaman Rishabh | Full-Stack Software Engineer",
    description:
      "Skilled in Next.js, React, and AWS. Passionate about building scalable web apps and cloud solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
