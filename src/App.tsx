import { motion } from 'motion/react';
import {
  XCircle,
  MapPin,
  MonitorSmartphone,
  MessageCircle,
  CheckCircle2,
  Star,
  ChevronDown,
  ArrowRight,
  ShieldAlert,
  Clock
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WP_LINK = "https://wa.me/5551981868150?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20Única%20Inteligência";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function App() {
  return (
    <div className="min-h-screen bg-space text-white selection:bg-brand-blue/30 overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-xl text-white">Ú</div>
            <span className="font-bold text-xl tracking-tight uppercase">Única <span className="text-blue-500">Inteligência</span></span>
          </div>
          <nav className="hidden lg:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#problema" className="hover:text-white cursor-pointer transition-colors">O Problema</a>
            <a href="#metodo" className="hover:text-white cursor-pointer transition-colors">Método Única</a>
            <a href="#planos" className="hover:text-white cursor-pointer transition-colors">Planos</a>
          </nav>
          <a
            href={WP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-bold bg-blue-600/10 border border-blue-500/50 text-blue-400 px-5 py-2 rounded-full transition-all hover:bg-blue-600/20"
          >
            Fale com Especialista
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 md:px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-emerald/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-8 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8 relative z-10"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              Agência Boutique IA & Growth
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] tracking-tight text-white">
              Seu negócio não precisa só estar online.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-emerald to-cyan-400">Ele precisa gerar lucro.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-[clamp(1.125rem,2vw,1.25rem)] text-white/70 max-w-2xl font-medium leading-relaxed">
              Transformamos sua presença digital em uma máquina automática de atração de clientes via Google e WhatsApp.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href={WP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-xl overflow-hidden transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                <span>QUERO MAIS CLIENTES AGORA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 15 }}
            animate={{ opacity: 1, y: 0, rotateY: -5 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[650px] flex items-center justify-center perspective-[1200px] mt-12 lg:mt-0"
          >
            {/* Abstract Device Mockup */}
            <div className="relative w-[320px] h-[650px] rounded-[3rem] border-[10px] border-slate-900 bg-card shadow-2xl overflow-hidden shadow-brand-emerald/10 transform transition-transform duration-700 ease-out hover:rotate-0 hover:scale-105">
              {/* Screen Top Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                <div className="w-1/3 h-full bg-slate-900 rounded-b-2xl" />
              </div>

              {/* Fake App UI inside Mockup */}
              <div className="absolute inset-0 bg-gradient-to-b from-card via-card to-space flex flex-col p-6 pt-12 gap-6 relative">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/20 rounded-full blur-[50px] pointer-events-none" />
                 
                {/* Notification Bubble */}
                <motion.div 
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg relative z-10"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-emerald/20 p-2 rounded-full text-brand-emerald shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">Nova venda via WhatsApp!</p>
                      <p className="text-xs text-white/50 mt-1">Agora mesmo</p>
                    </div>
                  </div>
                </motion.div>

                {/* Automation Flow preview */}
                <div className="flex-1 rounded-2xl border border-white/5 bg-black/40 p-4 mt-2 overflow-hidden relative">
                   <div className="space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-brand-blue/20 text-brand-blue border border-brand-blue/30 text-[10px] px-3 py-1.5 rounded-2xl rounded-tr-sm">
                           Olá! Vi o anúncio no Google e gostaria de um orçamento.
                        </div>
                      </div>
                      <div className="flex justify-start pt-2">
                        <div className="bg-white/10 text-white border border-white/10 text-[10px] px-3 py-1.5 rounded-2xl rounded-tl-sm w-3/4">
                           Olá! Claro, fico feliz pelo seu contato. Vamos ajudar sua empresa a crescer.
                        </div>
                      </div>
                   </div>
                </div>

                {/* Google Maps Card */}
                <motion.div 
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg mt-auto mb-2 relative overflow-hidden"
                >
                  <div className="absolute bottom-[-20%] right-[-20%] w-32 h-32 bg-brand-amber/20 rounded-full blur-[40px] pointer-events-none" />
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="bg-red-500/20 p-2 rounded-full text-red-500 shrink-0">
                      <MapPin className="w-6 h-6 fill-current opacity-20" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Seu Negócio Local</p>
                      <div className="flex items-center gap-1 text-brand-amber">
                        {[1,2,3,4,5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                        <span className="text-xs text-white/70 ml-1 font-medium">5.0 (284)</span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <div className="h-1.5 flex-1 bg-white/20 rounded-full" />
                        <div className="h-1.5 w-8 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section id="problema" className="py-24 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-emerald/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs font-bold tracking-widest uppercase mb-4 border border-red-500/20">
               O Problema
             </div>
            <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black leading-tight text-white mb-4">
               Sem uma presença estruturada, você perde para a concorrência todos os dias.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: XCircle,
                title: "Invisibilidade Digital",
                desc: "Quando alguém procura pelo seu serviço no Google, seu negócio não aparece nas primeiras posições do Maps.",
                color: "text-red-400",
                bg: "bg-red-500/10 border-red-500/20"
              },
              {
                icon: ShieldAlert,
                title: "Falta de Autoridade",
                desc: "Sem um site profissional, o cliente desconfia e acaba buscando a segurança de um concorrente que parece maior.",
                color: "text-amber-400",
                bg: "bg-amber-500/10 border-amber-500/20"
              },
              {
                icon: Clock,
                title: "Silêncio Mortal no Zap",
                desc: "Demora para responder, informações desorganizadas e leads esfriando. A falta de automação mata as vendas.",
                color: "text-brand-emerald",
                bg: "bg-brand-emerald/10 border-brand-emerald/30"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15 }}
                className="bg-card border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors relative overflow-hidden group hover:-translate-y-1 duration-300"
              >
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-colors pointer-events-none" />
                <div className={cn("inline-flex p-3 rounded-xl mb-4 border", item.bg, item.color)}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2 tracking-tight">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed text-xs font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section id="metodo" className="py-24 px-4 md:px-6 relative overflow-hidden bg-[#0F172A]/50 border-y border-white/5">
        <div className="absolute right-[-10%] top-[20%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-4">A SOLUÇÃO</h2>
            <h3 className="text-[clamp(2rem,3vw,3rem)] font-black leading-tight text-white mb-6">O Método 360° Única</h3>
            <p className="text-slate-400 text-lg">
              Estruturamos seu negócio em 3 etapas infalíveis para que você não precise correr atrás do cliente. O cliente é quem acha você.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal connection line desktop */}
            <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
            
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
               {[
                 {
                   step: "01",
                   title: "1. APARECER",
                   strong: "Google Maps Otimizado",
                   desc: "Seu negócio é encontrado no Google por quem realmente procura pelo que você vende, na hora exata que precisam.",
                   icon: MapPin,
                   color: "text-blue-500",
                   border: "border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                 },
                 {
                   step: "02",
                   title: "2. CONVENCER",
                   strong: "Landing Page Premium",
                   desc: "Você passa confiança com um site profissional de alta conversão. O lead entende o valor e decide por você.",
                   icon: MonitorSmartphone,
                   color: "text-emerald-500",
                   border: "border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                 },
                 {
                   step: "03",
                   title: "3. CONVERTER",
                   strong: "WhatsApp c/ IA",
                   desc: "O cliente entra em contato e recebe atendimento imediato, transformando curiosos em clientes fiéis.",
                   icon: MessageCircle,
                   color: "text-amber-500",
                   border: "border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                 }
               ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                   className="flex flex-col items-center text-center relative group"
                 >
                   <div className={cn("w-20 h-20 bg-[#0F172A] rounded-full border-2 flex items-center justify-center shrink-0 mb-6 transition-transform group-hover:scale-110 duration-300 relative z-10", item.border)}>
                     <item.icon className={cn("w-8 h-8", item.color)} />
                   </div>
                   <h4 className="text-xl font-bold tracking-tight mb-2">{item.title}</h4>
                   <h5 className={cn("text-xs font-bold uppercase tracking-widest mb-4", item.color)}>{item.strong}</h5>
                   <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* VITRINE DE RESULTADOS */}
      <section className="py-24 px-4 md:px-6 relative border-y border-white/5 bg-space">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest uppercase text-brand-emerald mb-4">MÁQUINA NA PRÁTICA</h2>
            <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black leading-tight text-white">Tudo conectado para gerar resultados.</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-card rounded-3xl border border-white/10 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" alt="Local Business owner smiling" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-space via-space/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="block text-brand-blue font-bold text-xs uppercase tracking-wider mb-2">Aquisição</span>
                <h4 className="font-bold text-lg text-white">Seu Negócio no Topo do Google</h4>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="aspect-video bg-card rounded-3xl border border-white/10 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" alt="Modern Office" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-space via-space/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                 <span className="block text-brand-emerald font-bold text-xs uppercase tracking-wider mb-2">Conversão</span>
                <h4 className="font-bold text-lg text-white">Landing Page que Vende</h4>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 lg:col-span-1 aspect-video bg-card rounded-3xl border border-white/10 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800" alt="Smartphone in hand" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-space via-space/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                 <span className="block text-brand-amber font-bold text-xs uppercase tracking-wider mb-2">Escala</span>
                <h4 className="font-bold text-lg text-white">Automação de WhatsApp (IA)</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TABELA DE PREÇOS (ANCORAGEM) */}
      <section id="planos" className="py-24 px-4 md:px-6 relative bg-gradient-to-b from-space to-[#050B14]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">PLANOS</h2>
            <h3 className="text-[clamp(2rem,3vw,3rem)] font-black leading-tight text-white mb-6">Escolha como você quer começar a lucrar</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-center flex-1 max-w-6xl mx-auto">
            
            {/* PLANO ESSENCIAL */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-2">
                 <h4 className="text-xs font-bold text-slate-400 uppercase">Essencial</h4>
              </div>
              <p className="text-slate-400 text-xs mb-4">Para começar a existir online.</p>
              
              <div className="mb-6">
                <div className="text-3xl font-black text-slate-200">R$ 697</div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Pagamento Único</span>
              </div>
              
              <ul className="space-y-3 mb-8 text-[11px] text-slate-400">
                {['Google Meu Negócio Configurado', 'Site Simples Responsivo', 'Integração Básica WhatsApp'].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                     <span className="text-white">✓</span>
                     <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a href={WP_LINK} target="_blank" rel="noreferrer" className="mt-auto block w-full py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-center text-xs font-bold text-white transition-colors">
                COMEÇAR
              </a>
            </motion.div>

            {/* PLANO COMPLETO (CAMPEÃO) */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#0F172A] border-2 border-amber-500 rounded-2xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(245,158,11,0.15)] h-full z-10"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                MAIS ESCOLHIDO
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                 <h4 className="text-xs font-bold text-amber-500 uppercase">Completa</h4>
              </div>
              <p className="text-slate-300 text-xs mb-4">Solução ideal para conversão total.</p>
              
              <div className="mb-6 flex flex-col">
                <span className="text-4xl font-black text-white">R$ 1.297</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Pagamento Único</span>
              </div>
              
              <ul className="space-y-3 mb-8 text-xs text-slate-200 font-medium">
                {['Tudo do plano Essencial', 'Site Premium focado em Conversão', 'Consultoria Local de Autoridade', 'Estrutura Completa conectada'].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                     <span className="text-amber-500">✓</span>
                     <span>{i}</span>
                  </li>
                ))}
              </ul>
              
              <a href={WP_LINK} target="_blank" rel="noreferrer" className="mt-auto block w-full py-4 bg-amber-500 hover:bg-amber-400 text-black rounded-xl text-center text-sm font-black transition-colors shadow-lg">
                QUERO ESTE PLANO
              </a>
            </motion.div>

            {/* PLANO AUTOMÁTICO */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 flex flex-col h-full"
            >
               <div className="flex items-center gap-2 mb-2">
                 <h4 className="text-xs font-bold text-blue-500 uppercase">Automática</h4>
              </div>
              <p className="text-slate-400 text-xs mb-4">Máximo de inteligência artificial.</p>
              
              <div className="mb-6">
                <span className="text-3xl font-black text-slate-200 block">R$ 2.497</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">+ R$ 197 / MÊS</span>
              </div>
              
              <ul className="space-y-3 mb-8 text-[11px] text-slate-400">
                {['Tudo da Completa', 'Automação WhatsApp com IA 24/7', 'CRM e Organização de Leads', 'Suporte Técnico Prioritário'].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                     <span className="text-white">✓</span>
                     <span>{i}</span>
                  </li>
                ))}
              </ul>
              
              <a href={WP_LINK} target="_blank" rel="noreferrer" className="mt-auto block w-full py-3 border border-blue-500 hover:bg-blue-500/10 text-blue-500 rounded-lg text-center text-xs font-bold transition-colors">
                PRO PLAN
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ & PROCESS */}
      <section className="py-24 px-4 md:px-6 border-y border-white/5 relative bg-space">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4">COMO É O PROCESSO</h2>
            <h3 className="text-3xl font-black mb-4">Simples, rápido e sem complicação.</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 text-center">
             <div className="p-4 border border-white/10 rounded-2xl bg-card">
                <div className="font-bold text-lg mb-2">1. Aprovação</div>
                <div className="text-xs text-white/50">Você escolhe o plano.</div>
             </div>
             <div className="p-4 border border-white/10 rounded-2xl bg-card relative">
                <div className="font-bold text-lg mb-2">2. Briefing</div>
                <div className="text-xs text-white/50">Formulário de informações.</div>
             </div>
             <div className="p-4 border border-white/10 rounded-2xl bg-card">
                <div className="font-bold text-lg mb-2">3. Execução</div>
                <div className="text-xs text-white/50">Nós construímos (7 dias).</div>
             </div>
             <div className="p-4 border border-white/10 rounded-2xl bg-card">
                <div className="font-bold text-lg mb-2">4. Entrega</div>
                <div className="text-xs text-white/50">Máquina rodando 100%.</div>
             </div>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-white/80">DÚVIDAS FREQUENTES</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                q: "Eu não entendo de tecnologia. Vai dar certo?",
                a: "Sim. Nossas soluções são 100% 'done-for-you' (feitas por nós). Você não precisará programar nada, apenas usar os clientes chegando."
              },
              {
                q: "Funciona para qualquer negócio físico?",
                a: "Sim. Especialmente eficaz para advogados, clínicas, lojas automotivas, reformas, oficinas, restaurantes e consultórios."
              },
              {
                q: "Quanto tempo leva para ficar pronto?",
                a: "O prazo médio de entrega para o Plano Completo é de 7 dias úteis após o envio das suas informações básicas no briefing."
              },
              {
                q: "Tem fidelidade ou contrato longo?",
                a: "Para os planos Essencial e Completo, não há fidelidade. O pagamento é único. O Automático apenas exige a manutenção da IA mensal."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-card border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold select-none outline-none">
                  {faq.q}
                  <div className="text-brand-blue group-open:text-brand-emerald transition-colors">
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </div>
                </summary>
                <div className="px-5 pb-5 text-white/60 leading-relaxed text-sm font-medium">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA & FOOTER */}
      <footer className="pt-24 pb-32 md:pb-12 px-4 md:px-6 relative bg-gradient-to-b from-space to-card overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
           <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-black leading-tight">
             Seu negócio pode estar recebendo clientes novos <span className="text-brand-emerald">todos os dias.</span>
           </h2>
           <p className="text-xl text-white/60 font-medium">Vamos estruturar isso juntos?</p>
           
           <div className="flex justify-center pt-6 pb-20 border-b border-white/10">
              <a 
                href={WP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-brand-emerald text-white rounded-full py-5 px-8 font-bold text-lg hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-pulse"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                FALAR NO WHATSAPP AGORA
              </a>
           </div>
           
           <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-sm">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-brand-blue to-emerald-400 p-[1px]">
                  <div className="w-full h-full bg-space rounded-[5px] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-brand-blue" />
                  </div>
                </div>
                <span className="font-black text-xl tracking-tight">ÚNICA INTELIGÊNCIA</span>
             </div>
             <p className="text-white/40 font-medium">
               Especialistas em estrutura digital<br className="md:hidden" /> para negócios locais.
             </p>
           </div>
        </div>
      </footer>

      {/* FLOATING CTA (DESKTOP) */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex items-center gap-4">
        <div className="bg-[#0F172A] border border-white/10 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Consultoria Grátis via Whats
        </div>
        <a 
          href={WP_LINK}
          target="_blank"
          rel="noreferrer"
          className="w-16 h-16 bg-emerald-500 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-8 h-8 fill-current text-white" />
        </a>
      </div>

      {/* FLOATING CTA (MOBILE REQUIRED STICKY BOTTOM) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-gradient-to-t from-space via-space/95 to-transparent pt-12 pb-6 backdrop-blur-[2px]">
        <a 
          href={WP_LINK}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-brand-emerald hover:bg-emerald-400 text-white rounded-full py-4 font-black shadow-[0_4px_30px_rgba(16,185,129,0.4)] active:scale-95 transition-transform text-[15px]"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          FALAR NO WHATSAPP AGORA
        </a>
      </div>

    </div>
  );
}
