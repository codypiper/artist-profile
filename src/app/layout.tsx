import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Allow Font Awesome CSS to work (see: https://fontawesome.com/v6/docs/web/use-with/react/use-with#getting-font-awesome-css-to-work)
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cody Piper",
  description: "Official website of singer/songwriter Cody Piper",
  metadataBase: new URL("https://codypipermedia.com"),
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={`bg-black text-white ${manrope.className}`}>
      <Navbar />
      {children}
    </body>
  </html>
);

export default RootLayout;
