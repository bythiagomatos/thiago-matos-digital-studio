import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">TM</span>
              </div>
              <span className="font-bold text-xl">Thiago Matos</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Transformando ideias em resultados digitais. Especializado em criar 
              experiências que conectam marcas aos seus clientes.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-muted-foreground hover:text-foreground transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contato@thiagomatos.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  contato@thiagomatos.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5511999999999" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Thiago Matos. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Feito com 💛 no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
