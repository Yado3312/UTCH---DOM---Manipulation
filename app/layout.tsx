import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap here
import "./globals.css"; // You can leave this for Tailwind/Next default resets, or remove it.

export const metadata: Metadata = {
  title: "DOM Analysis Environment",
  description: "Web application for DOM structure and JavaScript event analysis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}