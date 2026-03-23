import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MainLayout } from "@/components/MainLayout";
import { Metadata } from "next";


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
        className="font-body antialiased text-foreground bg-background min-h-screen selection:bg-primary/20 selection:text-primary overflow-x-hidden"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
