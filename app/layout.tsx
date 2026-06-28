import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://shounadhikary.dev"),
  title: {
    default: "Shoun Adhikary - AI/ML Engineer & CS Student",
    template: "%s | Shoun Adhikary",
  },

  
  description:
    "Portfolio of Shoun Adhikary - Computer Science student, AI/ML researcher, and aspiring engineer specializing in Reinforcement Learning and Deep Learning.",
  keywords: [
    "AI Engineer", "ML Engineer", "Machine Learning", "Data Analyst", "Deep Learning",
    "Reinforcement Learning", "Computer Science", "Portfolio", "Research",
    "Bangladesh", "GUB", "NLP", "Task Offloading", "UAV", "Vehicular Edge Computing", "Internet of Vehicles", "Task Offloading", "Edge Computing", "Deep Reinforcement Learning", "Proximal Policy Optimization", "Resource Allocation", "Parked Vehicle", "Road Side Unit", "Computation Offloading", "Mobility Management", "Load Balancing", "Latency Optimization", "Energy Efficiency" ,"ENV", "PyTorch", "TensorFlow",
  ],
  authors: [{ name: "Alex Johnson", url: "https://shounadhikary.dev" }],
  creator: "Shoun Adhikary",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shounadhikary.dev",
    siteName: "Shoun Adhikary Portfolio",
    title: "Shoun Adhikary - AI/ML Engineer & CS Student",
    description: "CS student specializing in AI/ML research and engineering. Building intelligent systems that solve real-world problems.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoun Adhikary - AI/ML Engineer & CS Student",
    description: "CS student specializing in AI/ML research and engineering.",
    creator: "@shounadhikary",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--bg-card)",
                color: "var(--text-body)",
                border: "1px solid var(--border-line)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
