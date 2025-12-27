import { 
  Globe, 
  Instagram, 
  Camera, 
  Palette, 
  Target, 
  MessageCircle, 
  ShoppingCart, 
  Star, 
  Mail 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Institucional",
    description: "Sites modernos e otimizados que representam sua marca com excelência.",
  },
  {
    icon: Instagram,
    title: "Gestão de Redes Sociais",
    description: "Estratégia e execução para aumentar seu engajamento e alcance.",
  },
  {
    icon: Camera,
    title: "Criação de Conteúdo",
    description: "Foto, vídeo e motion design que capturam a essência da sua marca.",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Branding completo que diferencia sua empresa no mercado.",
  },
  {
    icon: Target,
    title: "Landing Pages",
    description: "Páginas otimizadas para conversão e geração de leads.",
  },
  {
    icon: MessageCircle,
    title: "Automação WhatsApp",
    description: "Chatbots inteligentes para atendimento 24/7.",
  },
  {
    icon: ShoppingCart,
    title: "Loja Virtual",
    description: "E-commerce completo para vender online com segurança.",
  },
  {
    icon: Star,
    title: "Gestão de Reputação",
    description: "Monitoramento e gestão de avaliações online.",
  },
  {
    icon: Mail,
    title: "E-mail Marketing & CRM",
    description: "Automações e relacionamento com sua base de clientes.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <span className="animate-fade-up opacity-0 inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            Soluções Completas
          </span>
          <h2 className="animate-fade-up opacity-0 animation-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que eu <span className="text-gradient">entrego</span>
          </h2>
          <p className="animate-fade-up opacity-0 animation-delay-200 text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções digitais completas para transformar sua presença online e impulsionar seus resultados.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-sm animate-fade-up opacity-0"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
