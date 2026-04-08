import { motion } from "motion/react";
import { 
  Truck, 
  Home, 
  Building2, 
  Wrench, 
  Phone, 
  Clock, 
  MapPin, 
  Mail, 
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Zap
} from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5519994727181";
const PHONE_DISPLAY = "(19) 99472-7181";
const LOGO_URL = "https://i.imgur.com/6JJWGbq.png";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={LOGO_URL} 
                alt="Rei do Carreto Campinas" 
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicos" className="text-sm font-medium hover:text-brand-yellow transition-colors">Serviços</a>
              <a href="#contato" className="text-sm font-medium hover:text-brand-yellow transition-colors">Contato</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full shadow-sm text-white bg-whatsapp-green hover:bg-whatsapp-hover transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chamar no WhatsApp
              </a>
            </div>
            <div className="md:hidden">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-whatsapp-green text-white"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-dark text-xs font-bold uppercase tracking-wider mb-6">
                  <Clock className="w-4 h-4 mr-2 text-brand-yellow" />
                  Atendimento 24h em Campinas e Região
                </div>
                <h1 className="text-4xl tracking-tight font-extrabold text-brand-dark sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                  Sua mudança em Campinas com <span className="text-brand-yellow">total segurança</span> e agilidade
                </h1>
                <p className="mt-6 text-lg text-gray-600 sm:text-xl md:mt-8 max-w-2xl mx-auto">
                  Profissionais qualificados para carretos e mudanças residenciais ou comerciais. Cuidamos do seu patrimônio como se fosse nosso.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-whatsapp-green hover:bg-whatsapp-hover shadow-xl shadow-green-400/20 transition-all md:text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </motion.a>
                  <a
                    href="#servicos"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-brand-dark text-base font-bold rounded-xl text-brand-dark bg-transparent hover:bg-brand-dark hover:text-white transition-all md:text-lg"
                  >
                    Ver Serviços
                  </a>
                </div>
                
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                    <span className="text-sm font-semibold text-gray-700">Seguro e Confiável</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-brand-yellow" />
                    <span className="text-sm font-semibold text-gray-700">Rápido e Eficiente</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="w-5 h-5 text-brand-yellow" />
                    <span className="text-sm font-semibold text-gray-700">Frota Própria</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-bold text-brand-yellow uppercase tracking-widest">Nossos Serviços</h2>
              <p className="mt-2 text-3xl font-extrabold text-brand-dark sm:text-4xl lg:text-5xl">
                Soluções completas para seu transporte
              </p>
              <div className="mt-4 max-w-2xl mx-auto h-1.5 bg-brand-yellow rounded-full w-24"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Mudança Residencial",
                  desc: "Foco em cuidado extremo, materiais de embalagem modernos e o melhor custo-benefício da região.",
                  icon: Home,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "Mudança Comercial",
                  desc: "Especialistas em escritórios, fábricas e indústrias. Transportamos seus bens com total organização.",
                  icon: Building2,
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "Carreto",
                  desc: "Pequenos transportes com Pick-up, Van e Caminhão Baú. Ideal para itens avulsos e entregas rápidas.",
                  icon: Truck,
                  color: "bg-orange-50 text-orange-600"
                },
                {
                  title: "Montagem e Desmontagem",
                  desc: "Serviço completo de montagem de móveis para sua total comodidade e tranquilidade na casa nova.",
                  icon: Wrench,
                  color: "bg-green-50 text-green-600"
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-brand-dark hover:text-brand-yellow transition-colors"
                  >
                    Saber mais <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-16 bg-brand-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:flex lg:items-center lg:justify-between text-center lg:text-left">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Precisa de um carreto agora?
                </h2>
                <p className="mt-3 text-lg text-gray-300">
                  Estamos prontos para te atender 24 horas por dia, 7 dias por semana.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 flex flex-col sm:flex-row justify-center lg:justify-end gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-whatsapp-green hover:bg-whatsapp-hover transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </a>
                <a
                  href={`tel:5519994727181`}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-xl text-white hover:bg-white hover:text-brand-dark transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section id="contato" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-brand-dark mb-12 text-center">Informações de Contato</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow mb-6">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Senador Antônio Lacerda Franco, 515<br />
                    Vila Rica, Campinas - SP
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Senador+Antônio+Lacerda+Franco,+515+-+Vila+Rica,+Campinas+-+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-bold text-brand-yellow hover:underline"
                  >
                    Ver no Google Maps
                  </a>
                </div>

                <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow mb-6">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">E-mail</h3>
                  <p className="text-gray-600">ciroline@hotmail.com</p>
                  <a 
                    href="mailto:ciroline@hotmail.com"
                    className="mt-4 text-sm font-bold text-brand-yellow hover:underline"
                  >
                    Enviar E-mail
                  </a>
                </div>

                <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow mb-6">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Horário</h3>
                  <p className="text-gray-600">Atendimento 24h por dia, todos os dias.</p>
                  <p className="mt-4 text-sm font-bold text-brand-yellow">Disponibilidade Total</p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-12 py-5 border border-transparent text-lg font-bold rounded-2xl text-white bg-whatsapp-green hover:bg-whatsapp-hover shadow-2xl shadow-green-400/30 transition-all"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Agendar Agora
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
            <div>
              <img 
                src={LOGO_URL} 
                alt="Rei do Carreto Campinas" 
                className="h-10 w-auto mx-auto md:mx-0 mb-4"
                referrerPolicy="no-referrer"
              />
              <p className="text-gray-400 text-sm">
                Sua melhor opção em carretos e mudanças em Campinas e região. Segurança e agilidade em primeiro lugar.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="font-bold text-brand-yellow mb-2">Links Rápidos</h4>
              <a href="#servicos" className="text-sm text-gray-400 hover:text-white transition-colors">Serviços</a>
              <a href="#contato" className="text-sm text-gray-400 hover:text-white transition-colors">Contato</a>
              <a href={WHATSAPP_LINK} className="text-sm text-gray-400 hover:text-white transition-colors">Orçamento</a>
            </div>
            <div>
              <h4 className="font-bold text-brand-yellow mb-2">Contato Direto</h4>
              <p className="text-sm text-gray-400">{PHONE_DISPLAY}</p>
              <p className="text-sm text-gray-400">ciroline@hotmail.com</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Rei do Carreto Campinas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
