
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VOXIA | Escola de Oratória e Comunicação",
  description:
    "Descubra o poder da sua voz. Conheça a proposta demonstrativa da VOXIA para desenvolver habilidades de oratória, comunicação profissional e apresentações em público.",
  applicationName: "VOXIA",
  keywords: [
    "oratória",
    "comunicação",
    "comunicação profissional",
    "falar em público",
    "apresentações",
    "VOXIA",
  ],
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
