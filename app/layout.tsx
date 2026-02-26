import { Orbitron } from "next/font/google";
import { ThemeProvider } from "./components/theme";
import Navbar from "./navbar";
import Footer from "./footer";
import ProfileCard from "./profilecard";
import "./styles/globals.css";

// 1. Initialize Orbitron with the specific weight you want
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
        className={`${orbitron.variable} antialiased flex flex-col min-h-screen overflow-x-hidden bg-primary/10 text-txt-primary transition-colors duration-300`}
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
          <main className="flex-grow mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-12 relative">
            {/* 2. Grid: 1 column on mobile, 2 columns on tablet, 12-col layout on desktop */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 w-full overflow-hidden">
              {/* Left Column */}
              <div className="xl:col-span-4 w-full">
                <ProfileCard />
              </div>

              {/* Right Column */}
              <div className="xl:col-span-8 w-full">
                {/* Ensure this div has the same outer dimensions as the ProfileCard container */}
                <div className="relative bg-secondary/20 border border-stylish rounded-xl p-6 md:p-8 min-h-[500px] w-full">
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
