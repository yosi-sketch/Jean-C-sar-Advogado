"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Shield,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531988035079";
const PHONE_DISPLAY = "(31) 98803-5079";
const EMAIL_CONTACT = "contato@jeancesaradvogado.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/jeancesar.adv?igsh=MTBwNno1eWk5MDR5MA==";
const INSTAGRAM_HANDLE = "@jeancesar.adv";
const ADDRESS_FULL = "R. Pereira Guimarães, 180 - 1° ANDAR - Centro, Mateus Leme - MG, 35670-000, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?q=Jean+C%C3%A9sar+Advogado+%26+Associados%0AMateus+Leme+%C2%B7+MG";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá, Dr. Jean César. Gostaria de solicitar uma consulta jurídica especializada.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Building2;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-imobiliario",
    title: "Direito Imobiliário & Regularização",
    icon: Building2,
    tag: "Liderança Institucional OAB/MG",
    summary:
      "Regularização de lotes, áreas rurais e urbanas, usucapião judicial e extrajudicial, auditoria registral e segurança patrimonial.",
    details:
      "Sob a liderança direta do Dr. Jean César, Presidente da Comissão de Direito Imobiliário da 145ª Subseção da OAB/MG, atuamos com autoridade e combatividade na solução de impasses fundiários em Mateus Leme, Serra Azul e região. Conduzimos processos ágeis de usucapião em cartório, regularização de loteamentos, adjudicação compulsória, contratos de compra e venda e proteção possessória de propriedades rurais e urbanas.",
    topics: [
      "Regularização de áreas rurais e sítios (Serra Azul e região)",
      "Documentação e desmembramento de lotes urbanos",
      "Usucapião extrajudicial célere em cartório e judicial",
      "Elaboração e auditoria prévia de contratos imobiliários",
      "Ações possessórias, reintegração de posse e demarcação",
    ],
    whatsAppText:
      "Olá, Dr. Jean César. Gostaria de uma consulta sobre Direito Imobiliário e Regularização de Imóveis.",
  },
  {
    id: "civil-contratos",
    title: "Direito Civil & Contratos Patrimoniais",
    icon: Scale,
    tag: "Firmeza & Blindagem",
    summary:
      "Estruturação de contratos de alta precisão, blindagem patrimonial, cobranças estratégicas e reparações por perdas e danos.",
    details:
      "Atuação minuciosa e estratégica em litígios e prevenção cível. Elaboramos e revisamos instrumentos contratuais comerciais e civis com auditoria prévia de riscos. Atuamos com firmeza em reparações de danos morais e materiais, rescisões contratuais por inadimplemento, execução de títulos de crédito e defesa dos direitos patrimoniais de pessoas físicas e jurídicas.",
    topics: [
      "Elaboração e revisão criteriosa de contratos civis e comerciais",
      "Ações de cobrança, execuções e recuperação de crédito",
      "Responsabilidade civil e reparação por danos morais e materiais",
      "Anulação e rescisão contratual com apuração de perdas",
      "Notificações extrajudiciais e acordos preventivos",
    ],
    whatsAppText:
      "Olá, Dr. Jean César. Gostaria de uma consulta sobre Direito Civil e Contratos.",
  },
  {
    id: "familia-sucessoes",
    title: "Família & Sucessões",
    icon: HeartHandshake,
    tag: "Agilidade & Discrição",
    summary:
      "Inventários judiciais e extrajudiciais ágeis em cartório, partilha de bens rurais e urbanos, divórcios e planejamento sucessório.",
    details:
      "Condução técnica, discreta e resolutiva nas questões mais sensíveis do patrimônio familiar. Atuamos com celeridade na realização de inventários em cartório ou judiciais, garantindo que a partilha de bens, propriedades rurais e lotes ocorra sem desgastes desnecessários. Oferecemos planejamento sucessório estratégico para proteger o legado e patrimônio construído pela família.",
    topics: [
      "Inventários judiciais e extrajudiciais rápidos em cartório",
      "Partilha de bens móveis, imóveis e propriedades rurais",
      "Planejamento sucessório e proteção patrimonial da família",
      "Divórcio consensual e litigioso com partilha justa",
      "Pensão alimentícia, guarda e regulamentação de convivência",
    ],
    whatsAppText:
      "Olá, Dr. Jean César. Gostaria de uma consulta sobre Inventário e Direito de Família.",
  },
  {
    id: "empresarial-consumidor",
    title: "Assessoria Empresarial & Defesa",
    icon: Briefcase,
    tag: "Resultados & Segurança",
    summary:
      "Consultoria jurídica preventiva para empresas, prestadores de serviços, contratos comerciais e defesa contundente contra abusos.",
    details:
      "Apoiamos empresas, empresários e prestadores de serviços na estruturação de operações sólidas e seguras. Atuamos na revisão de rotinas contratuais, compliance preventivo, negociações com fornecedores e defesa contra abusos bancários e juros extorsivos. Prestamos assessoria jurídica integral com foco na redução de passivos e proteção da atividade econômica.",
    topics: [
      "Assessoria jurídica continuada para empresas e prestadores de serviços",
      "Elaboração de contratos comerciais, prestação de serviços e parcerias",
      "Defesa contra cobranças abusivas, juros extorsivos e fraudes financeiras",
      "Cobrança jurídica extrajudicial e judicial de inadimplentes",
      "Resolução ágil de disputas mercantis e societárias",
    ],
    whatsAppText:
      "Olá, Dr. Jean César. Gostaria de uma consulta sobre Assessoria Empresarial e Defesa Jurídica.",
  },
];

const clientReviews = [
  {
    name: "Pedro Amaral",
    badge: "Local Guide",
    reviewsCount: "13 avaliações · 28 fotos",
    date: "Há 1 ano",
    highlight: "Trabalho incrível em área rural em Serra Azul",
    content:
      "Quero elogiar o trabalho incrível do Jean em resolver os problemas de uma área rural adquirida em Serra Azul, Mateus Leme-MG. Ele foi super atencioso, eficiente e mostrou um conhecimento enorme de direito imobiliário. Graças a ele, tudo foi resolvido de forma prática e tranquila. Um ótimo profissional!",
  },
  {
    name: "Aline Alves",
    badge: "Cliente Verificada",
    reviewsCount: "6 avaliações",
    date: "Há 1 ano",
    highlight: "Documentação de 2 lotes com muita eficiência",
    content:
      "Fui muito bem atendida pelo Escritório Jean César Advogado & Associados. O processo de documentação de 2 lotes foi conduzido com muita eficiência, profissionalismo e transparência. A equipe sempre esteve disponível para esclarecer dúvidas e conduzir com seriedade. Recomendo com certeza!",
  },
  {
    name: "Servtecnicos",
    badge: "Cliente Corporativo",
    reviewsCount: "5 avaliações · 4 fotos",
    date: "Há 1 ano",
    highlight: "Empresa séria, profissionais capacitados e preço justo",
    content:
      "Empresa séria e com profissionais altamente capacitados, ofereceram um serviço extremamente profissional e com preço justo. Para nós foi muito cômodo poder contar com a assessoria do Jean, com certeza é o tipo de serviço que vale a pena ser contratado. Nós indicamos com certeza.",
  },
  {
    name: "Edireno Lopes Santos",
    badge: "Cliente Verificado",
    reviewsCount: "2 avaliações",
    date: "Há 2 meses",
    highlight: "Excelente atendimento e domínio do escopo",
    content:
      "Excelente atendimento, com conhecimento e domínio do escopo proposto. Profissional com domínio absoluto das diretrizes técnicas e operacionais da área jurídica.",
  },
  {
    name: "Jacques Zac",
    badge: "Cliente Verificado",
    reviewsCount: "13 avaliações",
    date: "Há 11 meses",
    highlight: "Profissional competente, correto e pontual",
    content:
      "Um profissional muito competente e correto, cumpridor dos horários. Contrataria ele novamente se for preciso. Totalmente recomendável!",
  },
  {
    name: "Dalmo Oliveira",
    badge: "Cliente Verificado",
    reviewsCount: "3 avaliações",
    date: "Há 8 meses",
    highlight: "Comprometido com as demandas e de muita confiança",
    content:
      "Excelente. Profissional competente comprometido com as demandas e de muita confiança. Transmite tranquilidade do início ao fim do processo.",
  },
  {
    name: "Alexandre Araujo",
    badge: "Cliente Verificado",
    reviewsCount: "2 avaliações",
    date: "Há 1 ano",
    highlight: "Amplo conhecimento e preço acessível",
    content:
      "Serviço realizado com excelência. Amplo conhecimento do serviço prestado. Preço acessível e clareza nas orientações.",
  },
  {
    name: "Loren Prado",
    badge: "Local Guide",
    reviewsCount: "11 avaliações · 17 fotos",
    date: "Há 1 ano",
    highlight: "Atencioso e muito competente",
    content:
      "Excelente profissional, atencioso e muito competente! Recomendo demais, sem dúvidas uma ótima escolha para quem busca segurança.",
  },
  {
    name: "Nayara Rose",
    badge: "Cliente Verificada",
    reviewsCount: "3 avaliações",
    date: "Há 1 ano",
    highlight: "Muito atencioso e esclarece todas as dúvidas",
    content:
      "Muito atencioso e prestativo, esclarece todas as dúvidas, excelente atendimento. Fiquei muito satisfeita com o serviço, e sempre o indicarei.",
  },
  {
    name: "José Alves",
    badge: "Local Guide",
    reviewsCount: "22 avaliações · 4 fotos",
    date: "Há 1 ano",
    highlight: "Muita competência e atendimento excelente",
    content:
      "Muita competência, atendimento excelente e muito profissional, é o melhor do Brasil. Dedicação que faz toda a diferença.",
  },
  {
    name: "Miriam Melo",
    badge: "Cliente Verificada",
    reviewsCount: "4 avaliações",
    date: "Há 1 ano",
    highlight: "Profissionalismo, competência e confiança",
    content:
      "Serviço prestado com profissionalismo, competência e confiança. Sempre pronto a responder com prontidão e ética.",
  },
  {
    name: "Leonardo Miguel",
    badge: "Cliente Verificado",
    reviewsCount: "9 avaliações · 2 fotos",
    date: "Há 1 ano",
    highlight: "Excelente profissional. Eu indico!",
    content:
      "Excelente Profissional. Eu indico de olhos fechados pela integridade, dedicação e resultado entregue.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4 text-[#e5ca8f]" : "eyebrow mb-4 text-[#9b7020]"}>
        {eyebrow}
      </p>
      <h2
        className={
          light
            ? "font-serif text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[3.25rem]"
            : "font-serif text-3xl font-bold leading-[1.12] tracking-tight text-[#16120e] sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-neutral-300"
              : "mt-5 max-w-xl text-[15px] leading-7 text-[#61574e]"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-[#080604] text-white">
        {/* Navigation Bar - Dark Mode & +30% Logo Size */}
        <header className="sticky top-0 z-40 border-b border-brand-700/25 bg-[#0a0805]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[105px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[122px] lg:h-[132px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Jean César Advogado & Associados — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-95"
            >
              <Image
                src="/logo.png"
                width={1024}
                height={341}
                alt="Jean César Advogado & Associados — OAB/MG 213.482"
                priority
                className="h-[62px] w-auto object-contain sm:h-[84px] lg:h-[92px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-8 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                O Advogado
              </a>
              <a className="nav-link" href="#atuacao">
                Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Compromisso
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do Dr. Jean César"
                className="grid size-11 place-items-center rounded-md border border-brand-700/40 bg-[#14100b] text-brand-300 transition-all hover:border-brand-400 hover:bg-brand-900/60 hover:text-white"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp do Dr. Jean César"
                className="grid size-11 place-items-center rounded-md border border-brand-700/40 bg-[#14100b] text-brand-300 transition-all hover:border-brand-400 hover:bg-brand-900/60 hover:text-white"
              >
                <WhatsAppIcon size={19} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                className="shadow-sm"
              >
                Consulta no WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-12 place-items-center rounded-md border border-brand-700/40 bg-[#14100b] text-brand-200 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-brand-700/25 bg-[#0c0906] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-5">
                  {[
                    ["Início", "#inicio"],
                    ["O Advogado & Credenciais", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Compromisso & Diferenciais", "#diferenciais"],
                    ["Avaliações no Google", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-semibold uppercase tracking-wider text-neutral-300 hover:text-brand-300"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-brand-700/40 bg-[#14100b] py-3 text-xs font-semibold text-brand-200"
                    >
                      <InstagramIcon size={16} /> @jeancesar.adv
                    </a>
                  </div>
                  <a
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all hover:brightness-110"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <WhatsAppIcon size={16} /> Falar no WhatsApp
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* DOBRA 1: HERO SECTION (MODO ESCURO - MÁXIMA AUTORIDADE & MASCULINO) */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-brand-700/25 bg-[#080604] py-16 sm:py-20 lg:min-h-[760px] lg:py-24"
        >
          {/* Subtle masculine ambient glows */}
          <div className="pointer-events-none absolute -right-32 top-10 -z-10 size-[38rem] rounded-full bg-brand-500/10 blur-[120px]" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[30rem] rounded-full bg-brand-900/25 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,155,63,0.12),rgba(8,6,4,0))]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div variants={reveal} className="mb-6 inline-flex items-center gap-2.5 rounded-md border border-brand-500/35 bg-[#14100b] px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-brand-300">
                <span className="size-2 rounded-full bg-brand-400 animate-pulse" />
                OAB/MG 213.482 · Presidência Direito Imobiliário OAB/MG · Mateus Leme
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-[2.75rem] font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[4.2rem]"
              >
                Segurança jurídica e proteção patrimonial com{" "}
                <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
                  máxima firmeza técnica.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-neutral-300 sm:text-base sm:leading-8"
              >
                Atuação jurídica especializada conduzida pelo Dr. Jean César
                Rodrigues dos Santos, Presidente da Comissão de Direito
                Imobiliário da 145ª Subseção da OAB/MG. Resolução combativa de
                conflitos, regularização fundiária de áreas rurais e urbanas,
                estruturação de contratos, direito civil, família e sucessões —
                presencial no Centro de Mateus Leme e on-line em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="shadow-xl"
                >
                  <WhatsAppIcon size={17} /> Falar com o Dr. Jean César
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-md border border-brand-700/40 bg-[#14100b]/60 px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-neutral-200 transition-colors hover:border-brand-400 hover:text-brand-300"
                >
                  Conhecer áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 grid grid-cols-1 gap-3 border-t border-brand-700/20 pt-6 sm:grid-cols-3 text-xs text-neutral-300"
              >
                <div className="flex items-center gap-2 font-medium">
                  <ShieldCheck size={18} className="text-brand-400 shrink-0" />
                  <span>Pres. Comissão Direito Imobiliário</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Star size={17} className="fill-brand-400 text-brand-400 shrink-0" />
                  <span>5,0 ★ Unânime (15 Avaliações)</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <MapPin size={17} className="text-brand-400 shrink-0" />
                  <span>Sede Centro de Mateus Leme</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image Presentation - Masculine Framed Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[480px] lg:ml-auto"
            >
              {/* Outer architectural gold frame */}
              <div className="absolute -inset-3.5 rounded-lg border border-brand-500/35 bg-[#120e09]/40 backdrop-blur-sm sm:-inset-4" />

              {/* Main portrait */}
              <div className="relative aspect-[0.84] overflow-hidden rounded-md border-2 border-brand-500/50 bg-[#16120b] shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
                <Image
                  src="/jean-cesar.png"
                  alt="Dr. Jean César Rodrigues dos Santos — Advogado OAB/MG 213.482"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_15%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080604] via-[#080604]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="font-serif text-2xl font-bold tracking-wide">
                      Dr. Jean César
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                      OAB/MG 213.482 · Pres. Com. Imobiliário
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-md border border-brand-400/50 bg-[#14100b]/80 text-brand-300 shadow-md">
                    <Scale size={20} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-[12%] rounded-md border border-brand-500/40 bg-[#14100b] px-4 py-2.5 text-[10px] font-bold tracking-[0.14em] text-brand-300 shadow-2xl sm:-left-8 sm:px-5">
                DEFESA PATRIMONIAL COMBATIVA
              </div>

              <div className="absolute -right-3 bottom-[18%] rounded-md border border-brand-500/40 bg-[#14100b]/95 p-3.5 shadow-2xl backdrop-blur-md sm:-right-7">
                <div className="flex items-center gap-2 text-brand-400">
                  <Star size={15} className="fill-brand-400" />
                  <span className="font-serif text-lg font-bold text-white">
                    5,0 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  15 Avaliações Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA DE MÉTRICAS / CREDENCIAIS (MODO ESCURO - GRAFITE & OURO) */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-brand-700/25 bg-[#100d08]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-9 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["5,0 ★", "Nota máxima unânime em 15 avaliações no Google"],
              ["OAB/MG", "nº 213.482 com atuação técnica e combativa"],
              ["Presidência OAB", "Comissão de Direito Imobiliário (145ª Subseção)"],
              ["Mateus Leme & Brasil", "Sede própria no Centro e atendimento digital"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-brand-700/20"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl font-bold text-brand-400 sm:text-3xl">
                  {value}
                </span>
                <span className="max-w-[160px] text-[11px] leading-5 text-neutral-300 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* DOBRA 2: SOBRE O ADVOGADO (ALTO CONTRASTE - PEDRA EXECUTIVA / MARFIM MASCULINO) */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-[#f6f2ec] text-[#16120e] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:px-12">
            {/* Portrait with OAB Commission certification */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="relative aspect-[0.92] overflow-hidden rounded-md border-2 border-brand-700/30 bg-[#ded7d0] shadow-xl">
                <Image
                  src="/jean-cesar.png"
                  alt="Dr. Jean César Rodrigues dos Santos — Presidente da Comissão de Direito Imobiliário da OAB/MG"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-[50%_18%]"
                />
              </div>

              {/* Authority card */}
              <div className="absolute -bottom-6 right-3 max-w-[300px] rounded-sm border-l-4 border-brand-700 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <ShieldCheck size={18} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    OAB/MG · 145ª Subseção
                  </p>
                </div>
                <p className="mt-1 font-serif text-base font-bold leading-snug text-[#16120e] sm:text-lg">
                  Comissão de Direito Imobiliário
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#61574e]">
                  Liderança institucional e domínio técnico em prol da segurança
                  patrimonial.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-brand-700/50 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow mb-4">
                TRAJETÓRIA & LIDERANÇA INSTITUCIONAL
              </motion.p>
              <motion.h2
                variants={reveal}
                className="font-serif text-3xl font-bold leading-[1.12] tracking-tight text-[#16120e] sm:text-4xl lg:text-[3.3rem]"
              >
                Uma advocacia pautada na{" "}
                <span className="text-brand-700">precisão técnica</span> e na
                defesa intransigente do seu patrimônio.
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#61574e]"
              >
                O Dr. Jean César Rodrigues dos Santos (OAB/MG 213.482) lidera o
                escritório Jean César Advogado & Associados com uma premissa clara:
                cada demanda patrimonial, familiar ou empresarial exige estudo
                aprofundado, rigor documental e atuação combativa. Não utilizamos
                respostas padronizadas nem petições genéricas.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#61574e]"
              >
                Como{" "}
                <strong className="text-[#16120e] font-semibold">
                  Presidente da Comissão de Direito Imobiliário da 145ª Subseção
                  da OAB/MG (Mateus Leme)
                </strong>
                , consolidou autoridade na regularização de propriedades rurais
                (com destaque na região de Serra Azul), documentação de lotes,
                ações de usucapião, auditoria registral e resolução de disputas
                cíveis e contratuais complexas.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2.5 text-xs text-[#16120e] font-semibold">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Presidência da Comissão de Direito Imobiliário</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#16120e] font-semibold">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Especialista em áreas rurais, lotes e usucapião</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#16120e] font-semibold">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Sede no Centro de Mateus Leme (1º Andar)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#16120e] font-semibold">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Atendimento presencial e on-line em todo o país</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Jean César. Gostaria de entender como o escritório pode atuar no meu caso."
                  )}
                  target="_blank"
                  size="md"
                  className="shadow-md"
                >
                  <WhatsAppIcon size={16} /> Agendar consulta com o Dr. Jean César
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (MODO ESCURO - CARDS GRAFITE COM BORDAS EM OURO) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-y border-brand-700/25 bg-[#0a0805] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="ÁREAS DE ATUAÇÃO ESTRATÉGICA"
                light
                description="Atuação técnica especializada para proteger sua propriedade, seus negócios, sua família e seus direitos patrimoniais."
              >
                Segurança jurídica e estratégia nos{" "}
                <span className="text-brand-300">momentos mais decisivos.</span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-neutral-400 font-medium">
                Selecione uma área para visualizar os tópicos atendidos e consultar
                diretamente o Dr. Jean César.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[360px] flex-col rounded-md border border-brand-700/30 bg-[#14100b] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400 hover:shadow-[0_12px_40px_rgba(197,155,63,0.15)] sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-md border border-brand-700/40 bg-[#1f1912] text-brand-300 transition-colors group-hover:border-brand-400 group-hover:bg-brand-500 group-hover:text-black">
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <span className="font-serif text-2xl font-bold text-brand-500/40 group-hover:text-brand-400">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-sm border border-brand-700/40 bg-[#1f1912] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-300">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] font-bold leading-tight text-white">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-neutral-300">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-400 hover:text-brand-300"
                    >
                      Ver detalhes e tópicos{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 4: COMPROMISSO PROFISSIONAL (MODO ESCURO - OBSIDIAN PROFUNDO) */}
        <section
          id="diferenciais"
          className="relative overflow-hidden bg-[#050403] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-700/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-brand-800/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
              light
              description="A condução de cada demanda com a máxima técnica, transparência irrestrita e respeito ao tempo e aos objetivos de quem nos procura."
            >
              A precisão jurídica aliada ao{" "}
              <span className="text-brand-300">respeito que sua causa merece.</span>
            </Heading>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/10"
            >
              {[
                [
                  "01",
                  "Domínio prático e estudo aprofundado do caso",
                  "Como comprovado nos depoimentos públicos de clientes, estudamos cada detalhe documental e registral com absoluto critério para apresentar soluções reais e viáveis.",
                ],
                [
                  "02",
                  "Comunicação direta, transparente e ágil",
                  "Você é mantido informado sobre cada movimentação em linguagem clara, sabendo exatamente quais são as alternativas, os riscos e as estratégias em andamento.",
                ],
                [
                  "03",
                  "Preço justo e dedicação irrestrita aos resultados",
                  "Compromisso ético, clareza sobre honorários e atuação resolutiva orientada a evitar litígios desnecessários e proteger o seu patrimônio com agilidade.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-3xl font-bold text-brand-400">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-neutral-300">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 5: AVALIAÇÕES NO GOOGLE (PROVA SOCIAL - CLARA & CRISTALINA) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white text-[#16120e] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="PROVA SOCIAL & AVALIAÇÕES REAIS"
                  description="A reputação sólida de Jean César Advogado & Associados é demonstrada pela excelência e confiança em cada caso. Confira avaliações reais registradas no Google Meu Negócio."
                >
                  Confiança comprovada por quem{" "}
                  <span className="text-brand-700">já alcançou seus objetivos.</span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-brand-700/60 pb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#785414] hover:border-brand-700 hover:text-brand-700"
                  >
                    Ver todas as 15 avaliações no Google <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights pills */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Direito Imobiliário & Regularização",
                    "Área Rural em Serra Azul",
                    "Documentação de Lotes",
                    "Preço Justo & Eficiência",
                    "Atendimento Atencioso",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-neutral-300 bg-[#f7f4ee] px-3.5 py-1.5 text-[11px] font-semibold text-[#16120e]"
                    >
                      <CheckCircle2 size={13} className="text-brand-700" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Public score box in Carbon & Gold */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-md border border-brand-700/40 bg-[#100d08] p-8 text-white shadow-2xl sm:p-10">
                <div className="absolute -right-10 -top-16 size-56 rounded-full border border-brand-500/10" />
                <div className="absolute -right-2 -top-8 size-40 rounded-full border border-brand-500/10" />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-300">
                    Avaliações Verificadas · Google Maps
                  </span>
                  <div className="flex gap-1 text-brand-400" aria-label="5 estrelas">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={18}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <span className="font-serif text-7xl font-bold leading-none text-white sm:text-8xl">
                      5,0
                    </span>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-brand-300">
                      Classificação Máxima · Unânime no Google
                    </p>
                  </div>
                  <div className="pb-1 text-right">
                    <p className="font-serif text-3xl font-bold text-brand-400">
                      15 avaliações
                    </p>
                    <p className="mt-1 text-xs text-neutral-300">
                      100% de avaliações 5 estrelas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.slice(0, 6).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between rounded-md border border-neutral-200 bg-[#fbf9f5] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-700/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-neutral-500 font-semibold">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-[#785414]">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-[#61574e] italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-neutral-200 pt-4">
                    <p className="font-serif text-base font-bold text-[#16120e]">
                      {review.name}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                      {review.badge} · {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row of reviews */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.slice(6, 12).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between rounded-md border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-700/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-neutral-500 font-semibold">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-[#785414]">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-[#61574e] italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-neutral-200 pt-4">
                    <p className="font-serif text-base font-bold text-[#16120e]">
                      {review.name}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                      {review.badge} · {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOBRA 6: CONTATO & SEDE FÍSICA (MODO ESCURO - MATEUS LEME) */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-brand-700/25 bg-[#090705] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & LOCALIZAÇÃO"
                light
                description="Agende sua consulta presencial em nosso escritório no Centro de Mateus Leme ou solicite atendimento on-line com total segurança."
              >
                Estamos prontos para{" "}
                <span className="text-brand-300">ouvir sua história.</span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="shadow-xl"
                >
                  <WhatsAppIcon size={17} /> Iniciar conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-neutral-400 font-medium">
                  Atendimento direto e retorno com prontidão:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-neutral-300">
                <div className="flex items-center gap-3">
                  <Clock size={17} className="text-brand-400 shrink-0" />
                  <span>Segunda a Sexta a partir das 09:00 (sob agendamento)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={17} className="text-brand-400 shrink-0" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-brand-300 transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon size={17} className="text-brand-400 shrink-0" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-300 transition-colors"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={17} className="text-brand-400 shrink-0" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-brand-300 transition-colors"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden rounded-md border border-brand-700/40 bg-[#120e09] p-7 sm:p-10 shadow-2xl">
              <div className="absolute right-0 top-0 h-1.5 w-36 bg-gradient-to-r from-brand-500 to-brand-300" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-md border border-brand-700/40 bg-[#1a140d] text-brand-300">
                  <MapPin size={24} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl font-bold text-white">
                    Mateus Leme · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-neutral-300 font-medium">
                <strong className="text-white font-bold">
                  Jean César Advogado & Associados
                </strong>
                <br />
                R. Pereira Guimarães, 180 - 1° ANDAR
                <br />
                Centro, Mateus Leme - MG, CEP 35670-000, Brasil
              </address>

              <div className="my-7 h-px bg-brand-700/20" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-neutral-400">
                  Atendimento presencial no Centro e on-line em todo o Brasil
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-brand-700/40 bg-[#1a140d] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-200 transition-colors hover:border-brand-400 hover:bg-brand-900/60 hover:text-white"
                >
                  Abrir no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 7: FAIXA PRÉ-FOOTER (FAIXA DE OURO METÁLICO) */}
        <section className="bg-gradient-to-r from-[#9b7020] via-[#c59b3f] to-[#785414] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0805]">
                JEAN CÉSAR ADVOGADO & ASSOCIADOS · OAB/MG 213.482
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl drop-shadow-sm">
                Pronto para proteger seus direitos e seu patrimônio com quem é
                referência jurídica?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Jean César. Gostaria de agendar uma consulta inicial para avaliar meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-md bg-[#0a0805] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-[#16120e] hover:shadow-2xl"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* FOOTER (MODO ESCURO - OBSIDIAN & +30% LOGO) */}
        <footer className="bg-[#050403] px-5 py-16 text-white sm:px-8 lg:px-12 border-t border-brand-700/20">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex rounded-md bg-[#0a0805] p-3 border border-brand-700/30 shadow-md">
                <Image
                  src="/logo.png"
                  width={1024}
                  height={341}
                  alt="Jean César Advogado & Associados"
                  className="h-16 w-auto object-contain sm:h-20 lg:h-[86px]"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-6 text-neutral-400">
                Advocacia estratégica, rigor técnico e excelência. Sede no Centro
                de Mateus Leme - MG e atendimento digital em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-bold text-brand-400">
                Inscrição OAB/MG 213.482 · Presidência Direito Imobiliário
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-neutral-300">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  O Advogado & Credenciais
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Compromisso Profissional
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Contato Direto
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-neutral-300">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>
                    R. Pereira Guimarães, 180 - 1° ANDAR - Centro, Mateus Leme - MG
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Jean César Advogado & Associados (OAB/MG 213.482). Todos os direitos reservados.
            </p>
            <p>
              Conteúdo meramente informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Modal de Detalhes da Área de Atuação - Dark Mode Executive */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-lg border border-brand-500/40 bg-[#120e09] p-7 text-white shadow-2xl sm:max-w-xl sm:rounded-md sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-md border border-brand-700/40 text-neutral-300 transition-colors hover:border-brand-400 hover:text-brand-300"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow-light text-brand-300">ÁREA DE ATUAÇÃO ESTRATÉGICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-neutral-300">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-brand-700/25 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-300">
                    Principais temas e demandas atendidas:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-neutral-200"
                      >
                        <span className="size-2 rounded-full bg-brand-400 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    className="shadow-xl"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta área
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
