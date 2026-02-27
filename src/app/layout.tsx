import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoloCEO | Autonomous AI Core",
  description: "Bespoke self-building AI agent framework for solo entrepreneurs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background selection:bg-white/10`}
      >
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(15,15,15,0)_0%,_rgba(0,0,0,1)_100%)] pointer-events-none" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <header className="px-12 py-8 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <div className="w-3 h-3 bg-black rotate-45" />
              </div>
              <span className="font-mono tracking-[0.4em] uppercase text-xs opacity-50">SoloCEO Core</span>
            </div>
            <nav className="flex items-center gap-8">
              {['Systems', 'Nodes', 'Architecture', 'Logs'].map((item) => (
                <a key={item} href="#" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">{item}</a>
              ))}
            </nav>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="px-12 py-6 border-t border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Neural Link Status: <span className="text-cyan-400">Operational</span></p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">© 2026 SoloCEO Technologies</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
