import Navbar from "@/components/Navbar";
import { Providers } from "@/components/providers";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio - Vishal Suthar",
  description: "A portfolio showcasing my work as a frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="A portfolio showcasing my work as a frontend developer"
        />
        <meta name="author" content="Vishal Suthar" />
        <meta
          name="keywords"
          content="portfolio, frontend developer, vishal suthar"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <meta property="og:title" content="Portfolio - Vishal Suthar" />
        <meta
          property="og:description"
          content="A portfolio showcasing my work as a frontend developer"
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://vishalsuthar.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - Vishal Suthar" />
        <meta
          name="twitter:description"
          content="A portfolio showcasing my work as a frontend  developer"
        />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:site" content="@vishalsuthar" />
        <meta name="twitter:creator" content="@vishalsuthar" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3083695600321028"
          crossorigin="anonymous"
        ></script>
      </head>

      <body className="cursor-none">
        <CustomCursor />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
