import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Thiago Matos | Criativo Digital & Marketing</title>
        <meta 
          name="description" 
          content="Transformo ideias em resultados digitais. Websites, redes sociais, branding e mais. Soluções completas de marketing digital." 
        />
        <meta name="keywords" content="marketing digital, criação de sites, gestão redes sociais, branding, SEO" />
        <link rel="canonical" href="https://thiagomatos.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Team />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
