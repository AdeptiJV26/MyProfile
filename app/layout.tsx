// app/layout.tsx
import { ThemeProvider } from "./components/theme";
import Navbar from "./navbar";
import Footer from "./footer";
import ProfileCard from "./profilecard";
import "./styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 1. ThemeProvider wraps everything so colors are available everywhere */}
      <body className="min-h-screen bg-primary/10 text-txt-primary transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          
          <div className="fixed inset-0 opacity-60 pointer-events-none" 
               style={{ backgroundImage: "radial-gradient(var(--color-accent) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          
          <Navbar />
          
          <main className="max-w-6xl mx-auto p-6 md:py-12 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <ProfileCard hp={100} />
              
              <div className="lg:col-span-8">
                 {/* 2. This is your biography/skills content. 
                      It is still indexed by Google even inside the Provider! */}
                 <div className="relative bg-secondary/30 border border-stylish rounded-xl p-8 min-h-[500px]">
                   {children} 
                 </div>
              </div>
            </div>
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}