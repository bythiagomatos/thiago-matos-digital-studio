import { Linkedin, Instagram } from "lucide-react";

const team = [
  {
    name: "Thiago Matos",
    role: "Fundador & Diretor Criativo",
    description: "Estratégia, direção criativa e gestão de projetos.",
  },
  {
    name: "Lucas José",
    role: "Desenvolvedor",
    description: "Desenvolvimento web e soluções tecnológicas.",
  },
  {
    name: "Matheus Matos",
    role: "Designer",
    description: "Identidade visual e design gráfico.",
  },
  {
    name: "Pedro Elias",
    role: "Social Media",
    description: "Gestão de redes sociais e criação de conteúdo.",
  },
];

const Team = () => {
  return (
    <section id="equipe" className="py-24 relative">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <span className="animate-fade-up opacity-0 inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4">
            Nosso Time
          </span>
          <h2 className="animate-fade-up opacity-0 animation-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Quem faz <span className="text-gradient">acontecer</span>
          </h2>
          <p className="animate-fade-up opacity-0 animation-delay-200 text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma equipe multidisciplinar dedicada a entregar resultados excepcionais para cada projeto.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group glass rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-up opacity-0"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-2">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                {member.description}
              </p>
              <div className="flex justify-center gap-3">
                <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
