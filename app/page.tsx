"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  Award,
  TrendingUp,
  Users,
  DollarSign,
  Code,
  Database,
  Smartphone,
  Server,
  Cloud,
  Zap,
  Shield,
  Cpu,
  GitBranch,
  Layers,
  Workflow,
  Brain,
  Rocket,
  Target,
  CheckCircle,
  Download,
  ArrowRight,
  Star,
  Calendar,
  Globe,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pt-20">
      <title>
        Amadou Coulibaly (amcodeur) - Développeur Fullstack & Expert
        Transformation Digitale
      </title>
      <meta
        name="description"
        content="Amadou Coulibaly (amcodeur/amadoucodeur) - Développeur fullstack spécialisé en transformation digitale B2B/PropTech. Solutions Next.js, React, Node.js, Mobile Money. Basé à Abidjan, Côte d'Ivoire."
      />
      <meta
        name="keywords"
        content="amadou coulibaly, amcodeur, amadoucodeur, développeur fullstack, transformation digitale, proptech, fintech, next.js, react, node.js, abidjan, côte d'ivoire"
      />

      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-full px-6 py-3 transition-all duration-300">
        <div className="flex items-center gap-6">
          {[
            { id: "hero", label: "Accueil" },
            { id: "skills", label: "Expertise" },
            { id: "projects", label: "Projets" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                activeSection === item.id ? "text-cyan-400" : "text-zinc-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section
        id="hero"
        className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-800 min-h-screen flex items-center px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-full px-6 py-3 mb-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-zinc-300 font-medium">
                Disponible pour nouveaux projets
              </span>
              <Star className="w-4 h-4 text-yellow-400" />
            </div>

            <h1 className="font-black text-6xl md:text-8xl lg:text-9xl text-balance mb-8 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
              AMADOU
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                COULIBALY
              </span>
            </h1>

            <div className="mb-6">
              <Badge className="bg-zinc-800/50 text-cyan-400 border-cyan-500/30 px-4 py-2 text-lg font-medium">
                @amcodeur • @amadoucodeur
              </Badge>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-6 py-3 text-base font-semibold hover:scale-105 transition-transform">
                Fullstack Developer
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-6 py-3 text-base font-semibold hover:scale-105 transition-transform">
                Digital Transformation
              </Badge>
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 px-6 py-3 text-base font-semibold hover:scale-105 transition-transform">
                PropTech Expert
              </Badge>
            </div>

            <p className="text-2xl md:text-3xl text-zinc-300 mb-12 text-pretty leading-relaxed max-w-5xl mx-auto font-light">
              Architecte de solutions digitales B2B/PropTech avec expertise
              fintech avancée
              <br />
              <span className="text-cyan-400 font-medium">
                Transformant les défis business en succès mesurables
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                {
                  value: "15M+",
                  unit: "FCFA",
                  label: "Collecte mensuelle",
                  color: "cyan",
                  icon: DollarSign,
                },
                {
                  value: "-60%",
                  unit: "",
                  label: "Réduction impayés",
                  color: "emerald",
                  icon: TrendingUp,
                },
                {
                  value: "500+",
                  unit: "",
                  label: "Utilisateurs actifs",
                  color: "purple",
                  icon: Users,
                },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
                >
                  <metric.icon
                    className={`w-8 h-8 text-${metric.color}-400 mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <div
                    className={`text-4xl font-bold text-${metric.color}-400 mb-2`}
                  >
                    {metric.value}
                    <span className="text-lg">{metric.unit}</span>
                  </div>
                  <div className="text-zinc-300 text-sm font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400 mb-12">
              {[
                { icon: MapPin, text: "Abidjan, Côte d'Ivoire", color: "cyan" },
                { icon: Phone, text: "+225 0705023269", color: "emerald" },
                { icon: Mail, text: "amadoucodeur@gmail.com", color: "purple" },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-zinc-800/30 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-zinc-700/30 transition-all duration-300 border border-zinc-700/30"
                >
                  <contact.icon
                    className={`w-5 h-5 text-${contact.color}-400`}
                  />
                  <span className="font-medium">{contact.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 px-10 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Découvrir mes réalisations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-cyan-500 px-10 py-4 text-lg bg-transparent rounded-xl transition-all duration-300"
              >
                <Mail className="w-6 h-6 mr-3" />
                Démarrer un projet
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-zinc-400" />
        </div>
      </section>

      <section
        id="skills"
        className="py-24 px-4 bg-gradient-to-b from-black to-zinc-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-6 px-4 py-2">
              Expertise Technique
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Stack Technique
            </h2>
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Technologies modernes pour des solutions performantes et scalables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Frontend & Fullstack */}
            <Card className="group bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 border-zinc-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-cyan-400 text-xl">
                  <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6" />
                  </div>
                  Fullstack Modern
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative z-10">
                {[
                  "Next.js 14 + TypeScript",
                  "React 18 + Tailwind CSS",
                  "Node.js + Express",
                  "PostgreSQL + Supabase",
                ].map((tech, index) => (
                  <div key={index} className="bg-zinc-800/20 rounded-lg p-3">
                    <span className="text-sm font-medium text-white">
                      {tech}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Cloud & DevOps */}
            <Card className="group bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 border-zinc-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-emerald-400 text-xl">
                  <div className="p-3 bg-emerald-500/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Cloud className="w-6 h-6" />
                  </div>
                  Cloud & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative z-10">
                {[
                  "AWS Certified",
                  "Vercel + Docker",
                  "CI/CD GitHub Actions",
                  "Redis + Monitoring",
                ].map((tech, index) => (
                  <div key={index} className="bg-zinc-800/20 rounded-lg p-3">
                    <span className="text-sm font-medium text-white">
                      {tech}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Fintech & Mobile */}
            <Card className="group bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 border-zinc-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-purple-400 text-xl">
                  <div className="p-3 bg-purple-500/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  Fintech & Mobile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative z-10">
                {[
                  "Mobile Money APIs",
                  "Wave + Stripe",
                  "React Native",
                  "Payment Security",
                ].map((tech, index) => (
                  <div key={index} className="bg-zinc-800/20 rounded-lg p-3">
                    <span className="text-sm font-medium text-white">
                      {tech}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-white">
              Outils & Méthodologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Git/GitHub", icon: GitBranch, color: "orange" },
                { name: "Docker", icon: Layers, color: "blue" },
                { name: "CI/CD", icon: Workflow, color: "green" },
                { name: "Figma", icon: Cpu, color: "purple" },
                { name: "Vercel", icon: Zap, color: "cyan" },
                { name: "Agile/Scrum", icon: Target, color: "pink" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="group bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <tool.icon
                    className={`w-8 h-8 text-${tool.color}-400 mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-sm font-medium text-zinc-300">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 px-4 bg-gradient-to-b from-zinc-900/30 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 px-4 py-2">
              Résultats Business
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Impacts Mesurables & ROI Prouvé
            </h2>
            <p className="text-zinc-400 text-lg max-w-4xl mx-auto leading-relaxed">
              Transformations digitales générant des gains tangibles et une
              croissance business durable
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Trabad Success Story */}
            <Card className="group bg-gradient-to-br from-zinc-800/20 to-zinc-900/20 border-zinc-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    Trabad Immobilier
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white mb-2">
                  Révolution PropTech
                </CardTitle>
                <CardDescription className="text-zinc-300 text-base">
                  Transformation complète de la gestion locative avec
                  automatisation des processus métier
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-zinc-800/30 rounded-xl p-4 text-center">
                    <DollarSign className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-cyan-400">15M+</div>
                    <div className="text-xs text-zinc-400">
                      FCFA collectés/mois
                    </div>
                  </div>
                  <div className="bg-zinc-800/30 rounded-xl p-4 text-center">
                    <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-400">
                      -60%
                    </div>
                    <div className="text-xs text-zinc-400">
                      Impayés éliminés
                    </div>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Automatisation complète des relances</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Dashboard temps réel propriétaires</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Intégration Mobile Money native</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operational Excellence */}
            <Card className="group bg-gradient-to-br from-zinc-800/20 to-zinc-900/20 border-zinc-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                    Excellence Opérationnelle
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white mb-2">
                  Optimisation RH & Processus
                </CardTitle>
                <CardDescription className="text-zinc-300 text-base">
                  Rationalisation des équipes et automatisation des tâches
                  répétitives
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-zinc-800/30 rounded-xl p-4 text-center">
                    <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-400">
                      6→3
                    </div>
                    <div className="text-xs text-zinc-400">
                      Équipe comptable
                    </div>
                  </div>
                  <div className="bg-zinc-800/30 rounded-xl p-4 text-center">
                    <Target className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-yellow-400">
                      500+
                    </div>
                    <div className="text-xs text-zinc-400">
                      Utilisateurs actifs
                    </div>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>Réduction 50% temps de traitement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>Élimination erreurs manuelles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>Reporting automatisé en temps réel</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics Summary */}
          <div className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 border border-zinc-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Synthèse des Performances
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: DollarSign,
                  value: "15M+ FCFA",
                  label: "Revenus mensuels automatisés",
                  color: "cyan",
                },
                {
                  icon: TrendingUp,
                  value: "-60%",
                  label: "Réduction impayés locatifs",
                  color: "emerald",
                },
                {
                  icon: Users,
                  value: "50%",
                  label: "Optimisation équipes",
                  color: "purple",
                },
                {
                  icon: Zap,
                  value: "< 300ms",
                  label: "Performance API moyenne",
                  color: "yellow",
                },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform"
                >
                  <div
                    className={`p-4 bg-${metric.color}-500/20 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-${metric.color}-500/30 transition-colors`}
                  >
                    <metric.icon
                      className={`w-8 h-8 text-${metric.color}-400`}
                    />
                  </div>
                  <div
                    className={`text-2xl font-bold text-${metric.color}-400 mb-2`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm text-zinc-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-zinc-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 px-4 py-2">
                À Propos
              </Badge>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Amadou Coulibaly
                <br />
                <span className="text-2xl text-cyan-400">@amcodeur</span>
              </h2>
              <div className="space-y-6">
                <p className="text-zinc-200 leading-relaxed text-lg font-medium">
                  Développeur logiciel fullstack avec une expertise avérée en
                  transformation digitale B2B/PropTech. Je conçois des
                  architectures scalables qui transforment les besoins métiers
                  en solutions techniques sécurisées, générant des impacts
                  business mesurables.
                </p>
                <p className="text-zinc-300 leading-relaxed text-base">
                  Mon approche combine leadership technique et product
                  management pour livrer des solutions qui rationalisent les
                  opérations, éliminent les inefficacités et créent de la valeur
                  business tangible.
                </p>
                <p className="text-zinc-300 leading-relaxed text-base">
                  Spécialisé dans l'écosystème JavaScript/TypeScript moderne
                  avec une forte expertise en intégrations fintech africaines
                  (Mobile Money, Wave) et solutions PropTech innovantes.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 px-3 py-2">
                  Leadership Technique
                </Badge>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-3 py-2">
                  Product Management
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-3 py-2">
                  Architecture Scalable
                </Badge>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-3 py-2">
                  Transformation Digitale
                </Badge>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-zinc-800/30 border-zinc-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-cyan-400">
                    <Code className="w-6 h-6" />
                    Stack Principal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      tech: "Next.js 14 + TypeScript",
                      desc: "Framework fullstack moderne",
                    },
                    {
                      tech: "Node.js + PostgreSQL",
                      desc: "Backend robuste et performant",
                    },
                    {
                      tech: "Mobile Money APIs",
                      desc: "Intégrations fintech africaines",
                    },
                    {
                      tech: "AWS + Vercel",
                      desc: "Infrastructure cloud scalable",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col space-y-1 bg-zinc-800/20 rounded-lg p-3"
                    >
                      <span className="text-sm font-semibold text-white">
                        {item.tech}
                      </span>
                      <span className="text-xs text-zinc-400">{item.desc}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-6 px-4 py-2">
              Portfolio
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Projets de Transformation
            </h2>
            <p className="text-zinc-400 text-xl max-w-4xl mx-auto leading-relaxed">
              Solutions complètes générant des impacts business mesurables et
              des gains d'efficacité significatifs
            </p>
          </div>

          <div className="space-y-16">
            {/* Trabad Ecosystem - Featured Project */}
            <Card className="group bg-gradient-to-br from-zinc-800/20 to-zinc-900/20 border-zinc-700/50 hover:border-cyan-500/50 transition-all duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex gap-3">
                      <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 px-3 py-1">
                        PropTech Leader
                      </Badge>
                      <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30 px-3 py-1">
                        Production
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                    Écosystème Trabad
                  </h3>
                  <p className="text-zinc-300 mb-8 leading-relaxed text-lg">
                    Suite PropTech complète révolutionnant la gestion locative
                    avec intégration Mobile Money, dashboard propriétaire temps
                    réel et automatisation des processus métier.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {[
                      {
                        value: "15M+",
                        label: "FCFA collectés/mois",
                        color: "cyan",
                        icon: DollarSign,
                      },
                      {
                        value: "-60%",
                        label: "Impayés éliminés",
                        color: "emerald",
                        icon: TrendingUp,
                      },
                      {
                        value: "500+",
                        label: "Locataires actifs",
                        color: "purple",
                        icon: Users,
                      },
                      {
                        value: "6→3",
                        label: "Équipe optimisée",
                        color: "yellow",
                        icon: Briefcase,
                      },
                    ].map((metric, index) => (
                      <div
                        key={index}
                        className="bg-zinc-800/50 rounded-xl p-4 hover:bg-zinc-700/50 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <metric.icon
                            className={`w-5 h-5 text-${metric.color}-400`}
                          />
                          <div
                            className={`text-2xl font-bold text-${metric.color}-400`}
                          >
                            {metric.value}
                          </div>
                        </div>
                        <div className="text-xs text-zinc-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le projet
                    </Button>
                    <Button
                      variant="outline"
                      className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code source
                    </Button>
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-cyan-400" />
                    Architecture Technique
                  </h4>
                  <div className="space-y-4 mb-8">
                    {[
                      {
                        icon: Layers,
                        tech: "Frontend: Next.js 14 + TypeScript + Tailwind",
                        color: "cyan",
                      },
                      {
                        icon: Server,
                        tech: "Backend: Node.js + Express + PostgreSQL",
                        color: "emerald",
                      },
                      {
                        icon: Smartphone,
                        tech: "Mobile: React Native + Expo",
                        color: "purple",
                      },
                      {
                        icon: DollarSign,
                        tech: "Paiements: Wave API + Mobile Money",
                        color: "yellow",
                      },
                      {
                        icon: Cloud,
                        tech: "Déploiement: Vercel + AWS RDS",
                        color: "blue",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 text-sm bg-zinc-800/30 rounded-lg p-3"
                      >
                        <item.icon
                          className={`w-5 h-5 text-${item.color}-400 flex-shrink-0`}
                        />
                        <span className="text-zinc-300">{item.tech}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "PostgreSQL",
                      "Wave API",
                      "React Native",
                      "TypeScript",
                      "Vercel",
                      "AWS",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-zinc-700/50 text-zinc-300 text-xs hover:bg-zinc-600/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nexusia */}
              <Card className="group bg-gradient-to-br from-zinc-800/20 to-zinc-900/20 border-zinc-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30">
                      IA SaaS
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                    Nexusia AI
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-base leading-relaxed">
                    Plateforme IA de correction et contextualisation de code
                    avec architecture microservices scalable
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4 mb-6">
                    {[
                      {
                        icon: Zap,
                        text: "API < 300ms temps de réponse",
                        color: "yellow",
                      },
                      {
                        icon: Layers,
                        text: "Architecture microservices",
                        color: "purple",
                      },
                      {
                        icon: Shield,
                        text: "Authentification JWT sécurisée",
                        color: "emerald",
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm bg-zinc-800/30 rounded-lg p-3"
                      >
                        <feature.icon
                          className={`w-4 h-4 text-${feature.color}-400`}
                        />
                        <span className="text-zinc-300">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["MistralAI", "Node.js", "Docker", "Redis"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-zinc-700/50 text-zinc-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Découvrir Nexusia
                  </Button>
                </CardContent>
              </Card>

              {/* Mikatch Transformation */}
              <Card className="group bg-gradient-to-br from-zinc-800/20 to-zinc-900/20 border-zinc-700/50 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl group-hover:scale-110 transition-transform">
                      <Workflow className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30">
                      Transformation
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-emerald-400 transition-colors">
                    Mikatch Group
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-base leading-relaxed">
                    Migration complète legacy vers architecture moderne avec
                    CI/CD et expérience mobile-first
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4 mb-6">
                    {[
                      {
                        icon: GitBranch,
                        text: "CI/CD automatisé GitHub Actions",
                        color: "cyan",
                      },
                      {
                        icon: Smartphone,
                        text: "PWA mobile-first responsive",
                        color: "emerald",
                      },
                      {
                        icon: Cpu,
                        text: "Performance optimisée +200%",
                        color: "purple",
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm bg-zinc-800/30 rounded-lg p-3"
                      >
                        <feature.icon
                          className={`w-4 h-4 text-${feature.color}-400`}
                        />
                        <span className="text-zinc-300">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React", "CI/CD", "PWA", "Lighthouse"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-zinc-700/50 text-zinc-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir la transformation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-24 px-4 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(6,182,212,0.1),transparent_70%)]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 px-4 py-2">
              Collaboration
            </Badge>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Transformons Ensemble
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Vos Défis Business
              </span>
            </h2>
            <p className="text-xl text-zinc-300 mb-12 text-pretty max-w-4xl mx-auto leading-relaxed">
              Prêt à révolutionner votre business avec des solutions techniques
              innovantes ?
              <br />
              Discutons de votre prochain projet de transformation digitale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Consultation Stratégique",
                desc: "Analyse approfondie de vos besoins et recommandations techniques sur mesure",
                color: "cyan",
              },
              {
                icon: Rocket,
                title: "Développement MVP",
                desc: "Prototypage rapide et validation de concept avec feedback utilisateur",
                color: "emerald",
              },
              {
                icon: CheckCircle,
                title: "Solution Complète",
                desc: "Architecture scalable, déploiement production et maintenance continue",
                color: "purple",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-zinc-800/20 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
              >
                <div
                  className={`p-4 bg-${service.color}-500/20 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon
                    className={`w-8 h-8 text-${service.color}-400`}
                  />
                </div>
                <h3 className="font-bold text-white mb-4 text-lg">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 px-10 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              asChild
            >
              <a href="mailto:amadoucodeur@gmail.com">
                <Mail className="w-6 h-6 mr-3" />
                Démarrer un projet
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-emerald-500 px-10 py-4 text-lg bg-transparent rounded-xl transition-all duration-300"
              asChild
            >
              <a
                href="https://amcodeur.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-6 h-6 mr-3" />
                Portfolio complet
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-purple-500 px-10 py-4 text-lg bg-transparent rounded-xl transition-all duration-300"
            >
              <Download className="w-6 h-6 mr-3" />
              Télécharger CV
            </Button>
          </div>

          <div className="mt-16 bg-zinc-800/20 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">
                Disponibilité
              </span>
            </div>
            <p className="text-zinc-300 mb-4">
              Actuellement disponible pour nouveaux projets
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-zinc-400">Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300" />
                <span className="text-zinc-400">Consultation gratuite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-2">Amadou Coulibaly</h3>
              <p className="text-cyan-400 text-sm mb-4">
                @amcodeur • @amadoucodeur
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Développeur Fullstack & Spécialiste en Transformation Digitale.
                Architecte de solutions B2B/PropTech innovantes basé à Abidjan,
                Côte d'Ivoire.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Expertise</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>• Transformation Digitale B2B</li>
                <li>• Solutions PropTech</li>
                <li>• Intégrations Fintech</li>
                <li>• Architecture Scalable</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  amadoucodeur@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +225 0705023269
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Abidjan, Côte d'Ivoire
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center">
            <p className="text-sm text-zinc-500">
              © 2024 Amadou Coulibaly (@amcodeur). Tous droits réservés.
              Développeur Fullstack & Expert en Transformation Digitale.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
