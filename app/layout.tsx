import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#110d08",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jeancesaradvogado.com.br"),
  title: "Jean César Advogado & Associados | Direito Imobiliário & Civil em Mateus Leme - MG",
  description:
    "Advocacia estratégica e proteção patrimonial conduzida pelo Dr. Jean César (OAB/MG 213.482), Presidente da Comissão de Direito Imobiliário da 145ª Subseção da OAB/MG. Especialista em Direito Imobiliário, Regularização de Imóveis, Contratos, Direito Civil, Família e Sucessões. Atendimento presencial em Mateus Leme - MG e on-line em todo o Brasil.",
  keywords: [
    "Jean César Advogado",
    "Jean César Advogado & Associados",
    "Dr. Jean César Rodrigues dos Santos",
    "advogado em Mateus Leme",
    "advogado Mateus Leme MG",
    "OAB MG 213482",
    "Direito Imobiliário Mateus Leme",
    "Comissão de Direito Imobiliário OAB",
    "regularização de imóveis e lotes",
    "regularização fundiária Serra Azul Mateus Leme",
    "direito civil e contratos",
    "inventário e sucessões",
    "assessoria jurídica empresarial",
  ],
  authors: [{ name: "Dr. Jean César Rodrigues dos Santos" }],
  creator: "Jean César Advogado & Associados",
  publisher: "Jean César Advogado & Associados",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.jeancesaradvogado.com.br",
    title: "Jean César Advogado & Associados | Segurança Jurídica & Proteção Patrimonial",
    description:
      "Atuação jurídica de excelência, transparência e liderança em Direito Imobiliário e Civil. Escritório no Centro de Mateus Leme - MG.",
    siteName: "Jean César Advogado & Associados",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Jean César Advogado & Associados",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}

