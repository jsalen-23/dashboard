import { abel } from "./ui/fonts/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${abel.className} antialiased`}>
        {children}
        <footer>Made with love ♥</footer>
      </body>
    </html>
  );
}
