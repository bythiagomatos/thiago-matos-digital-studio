import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto glow animate-fade-up opacity-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para transformar sua{" "}
            <span className="text-gradient">presença digital</span>?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como posso ajudar seu negócio a crescer no digital. 
            O primeiro contato é gratuito e sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <MessageCircle className="mr-2" />
              WhatsApp
            </Button>
            <Button variant="glass" size="xl">
              Agendar reunião
              <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          <p className="text-muted-foreground text-sm mt-8">
            Respondo em até 24 horas • Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
