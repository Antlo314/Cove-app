import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ["latin"], and: "display", variable: '--font-serif' });

export const metadata = {
  title: "Cove | Caribbean Matchmaking Ecosystem",
  description: "A niche matchmaking service dedicated to the Caribbean diaspora.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        
        <footer style={{
          padding: '2.5rem',
          textAlign: 'center',
          background: 'var(--cove-surface)',
          borderTop: '1px solid var(--cove-border)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.875rem',
          color: 'rgba(230, 237, 217, 0.6)',
          marginTop: 'auto'
        }}>
          <div style={{ marginBottom: '0.5rem', letterSpacing: '0.5px' }}>Created by Jillian S.</div>
          <div>
            Powered by <a href="https://lumenlabs.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cove-accent)', fontWeight: '600' }}>Lumen Labs</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
