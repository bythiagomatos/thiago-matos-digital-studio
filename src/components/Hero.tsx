import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import thiagoImage from "@/assets/thiago-matos.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up opacity-0">
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
                Criativo & Estrategista Digital
              </span>
            </div>
            
            <h1 className="animate-fade-up opacity-0 animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transformo ideias em{" "}
              <span className="text-gradient">resultados digitais</span>
            </h1>
            
            <p className="animate-fade-up opacity-0 animation-delay-200 text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Especializado em criar experiências digitais que conectam marcas aos seus clientes. 
              Do conceito à execução, entrego soluções completas.
            </p>
            
            <div className="animate-fade-up opacity-0 animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                Fale comigo
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="glass" size="xl">
                <Play className="mr-2" />
                Ver portfólio
              </Button>
            </div>
            
            {/* Stats */}
            <div className="animate-fade-up opacity-0 animation-delay-400 grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Especialistas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-fade-up opacity-0 animation-delay-200 relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
              
              <div className="relative glass rounded-3xl p-2 glow">
                <img
                  src={thiagoImage}
                  alt="Thiago Matos - Criativo Digital"
                  className="w-full max-w-md rounded-2xl object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Disponível para projetos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
