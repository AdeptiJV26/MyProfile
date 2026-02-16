import { Orbitron } from "next/font/google";
import { ThemeProvider } from "./components/theme";
import Navbar from "./navbar";
import Footer from "./footer";
import ProfileCard from "./profilecard";
import "./styles/globals.css";

// 1. Initialize Orbitron with the specific weight you want
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-orbitron",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} flex flex-col min-h-screen overflow-x-hidden bg-primary/10 text-txt-primary transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div
            className="fixed inset-0 opacity-60 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-accent) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <Navbar />

          {/* Use flex-grow here to push the footer down */}
          <main className="flex-grow max-w-6xl mx-auto w-full p-6 md:py-12 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <ProfileCard hp={100} />
              <div className="lg:col-span-8">
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
