import { Space_Grotesk, JetBrains_Mono, Inter, VT323 } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Kumar | Software Development Engineer",
  description: "Portfolio of Aditya Kumar - Software Development Engineer specialized in building scalable backends and robust systems.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} ${vt323.variable} font-sans antialiased text-slate-200 bg-background min-h-screen selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Global UI Overlays */}
          <div className="fixed inset-0 pointer-events-none z-[9999] scanlines opacity-[0.03]" />
          <div className="fixed inset-0 pointer-events-none z-[9998] noise" />

          <CustomCursor />
          <Navigation />
          <main className="pt-16 min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
