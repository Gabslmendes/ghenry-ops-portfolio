import React, { useState, useEffect } from 'react';
import { Database, Code, Layout, Server, X, User, ChevronRight, Send, MessageCircle } from 'lucide-react';
import fotoPerfil from './assets/image/retrato.png';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4100);
    return () => clearTimeout(timer);
  }, []);

  // Lista de Tecnologias para o Carrossel (Duplicada para o efeito infinito)
  const techStack = [
    "AWS", "React", "Node.js", "Python", "Docker", "SQL", "Figma", "DevOps", "Linux",
    "AWS", "React", "Node.js", "Python", "Docker", "SQL", "Figma", "DevOps", "Linux"
  ];

  const projects = [
    {
      id: 1,
      title: "Marketplace de Veículos",
      subtitle: "Backend & Integração XML",
      tags: ["Node.js", "AWS", "Backend"],
      icon: <Database size={32} strokeWidth={1} />,
      className: "card-wide",
      description: "Sistema completo para venda de veículos. Backend e API integrando XMLs de concessionárias, planejado para escalabilidade.",
      challenge: "Unificar estoques de diversas concessionárias que enviavam dados em formatos XML despadronizados e inconsistentes.",
      solution: ["Microsserviço em Node.js para ingestão e sanitização.", "API Restful segura para consumo do Frontend.", "Arquitetura Cloud-Ready (AWS S3 + EC2)."]
    },
    {
      id: 2,
      title: "Automação IA & OCR",
      subtitle: "Python Notarial",
      tags: ["Python", "OCR", "IA"],
      icon: <Code size={32} strokeWidth={1} />,
      className: "card-tall",
      description: "Solução de automação para o Cartório do 5º Ofício, reduzindo drasticamente o trabalho manual de digitação.",
      challenge: "Ler e extrair texto de milhares de documentos físicos antigos com rapidez e alta precisão.",
      solution: ["Script Python com Tesseract OCR e Google Vision.", "Integração com LLMs para estruturar dados em JSON.", "Redução de 70% no tempo operacional."]
    },
    {
      id: 3,
      title: "Design Institucional",
      subtitle: "Interface & UX",
      tags: ["React", "Figma"],
      icon: <Layout size={32} strokeWidth={1} />,
      className: "",
      description: "Redesign completo do site do 5º Ofício de Notas focado na experiência do usuário.",
      challenge: "Modernizar a identidade visual garantindo acessibilidade e performance mobile.",
      solution: ["Prototipação Mobile-First no Figma.", "Desenvolvimento em React SPA.", "Design System consistente."]
    },
    {
      id: 4,
      title: "Infra & Redes",
      subtitle: "Gestão de Servidores",
      tags: ["Windows Server", "Hardware"],
      icon: <Server size={32} strokeWidth={1} />,
      className: "",
      description: "Sustentação completa do ambiente de TI, garantindo uptime e segurança.",
      challenge: "Manter a alta disponibilidade de serviços críticos em rede local.",
      solution: ["Gestão de Active Directory e GPOs.", "Rotinas de Backup automatizadas.", "Troubleshooting de Hardware e Rede."]
    }
  ];

  return (
    <div>
      <div className="noise-overlay"></div>
      
      {/* INTRODUÇÃO COM BARRA DE PROGRESSO */}
      <div className={`intro-screen ${!showIntro ? 'intro-hidden' : ''}`}>
        <h1 className="intro-text">
          Gabriel Henrique
          <span className="portfolio-highlight">Portfolio</span>
        </h1>
        
        {/* A BARRA DE CARREGAMENTO */}
        <div className="loader-line">
          <div className="loader-progress"></div>
        </div>
      </div>

      <div style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 1s ease 0.5s' }}>
        
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            Ghenry<span style={{ color: '#FF5500' }}>.ops</span>
          </div>
          <div className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
          <a href="#contato" className="btn-contact">Vamos conversar</a>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <span className="badge">/// 01 — PORTFÓLIO 2025</span>
          <h1 style={{animation: 'fadeInUp 1s ease forwards'}}>
            Fullstack Developer <br />
            & Cloud Enthusiast
          </h1>
          <p style={{animation: 'fadeInUp 1s ease 0.2s forwards', opacity: 0}}>
            Especialista em automação de processos e infraestrutura AWS.
            Transformando complexidade em sistemas elegantes.
          </p>
        </section>

        {/* 2. CARROSSEL INFINITO (Marquee) */}
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-item">{tech}</span>
            ))}
          </div>
        </div>

        {/* 3. SEÇÃO SOBRE MIM */}
        <section id="sobre" className="about-section">
          <div className="about-image">
            <img 
              src={fotoPerfil} 
              alt="Foto de Gabriel Henrique" 
              className="minha-foto" 
            />
          </div>
          <div className="about-content">
            <span className="badge">/// 02 — SOBRE MIM</span>
            <h2>De Infraestrutura <br /> para a Nuvem.</h2>
            <p>
              Minha jornada começou "no cabo de rede", resolvendo problemas físicos de hardware e servidores. Essa base sólida em infraestrutura (Windows Server, Redes) me diferencia como desenvolvedor.
            </p>
            <p>
              Hoje, combino esse conhecimento com <strong>Código (Python/JS)</strong> e <strong>Cloud (AWS)</strong> para criar não apenas softwares, mas ecossistemas que funcionam de verdade.
            </p>
            <div className="about-stats">
              <div className="stat">
                <strong>+5</strong>
                <span>ANOS EM TI</span>
              </div>
              <div className="stat">
                <strong>+15</strong>
                <span>PROJETOS</span>
              </div>
              <div className="stat">
                <strong>AWS</strong>
                <span>SPECIALIST</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROJETOS (Bento Grid) */}
        <section id="projetos" style={{maxWidth: '1200px', margin: '200px auto'}}>
          <div style={{padding: '0 20px', marginBottom: '40px'}}>
            <span className="badge">/// 03 — MEUS PROJETOS</span>
            <h2 style={{fontSize: '2.5rem', fontWeight: '300'}}>O que tenho construído.</h2>
          </div>

          <div className="grid-container" style={{margin: 0}}>
            {projects.map((project) => (
              <div key={project.id} className={`card ${project.className}`} onClick={() => setSelectedProject(project)}>
                <div className="card-icon">{project.icon}</div>
                <div>
                  <h3>{project.title}</h3>
                  <p style={{color: '#666', fontSize: '0.9rem', fontFamily:'monospace'}}>{project.subtitle}</p>
                </div>
                <div className="tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SEÇÃO CONTATO */}
        <section id="contato" className="contact-section">
          <span className="badge">/// 04 — CONTATO</span>
          <h2 style={{fontSize: '2.5rem', fontWeight: '300', marginBottom:'20px'}}>Vamos Trabalhar Juntos?</h2>
          <p style={{color:'#888', marginBottom: '40px'}}>
            Prefere um papo rápido? Me chame no WhatsApp ou preencha o formulário abaixo.
          </p>
          
          {/* Botão WhatsApp */}
          <a 
            href="https://wa.me/5561999278933?text=Ol%C3%A1%20Gabriel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={20} /> INICIAR CONVERSA NO WHATSAPP
          </a>

          <div style={{display: 'flex', alignItems: 'center', gap: '20px', margin: '30px 0', color: '#333'}}>
            <div style={{flex: 1, height: '1px', background: '#222'}}></div>
            <span style={{fontFamily: 'Space Mono', fontSize: '0.8rem'}}>OU MANDE UM EMAIL</span>
            <div style={{flex: 1, height: '1px', background: '#222'}}></div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>NOME</label>
              <input type="text" placeholder="Seu nome completo" />
            </div>
            <div>
              <label>EMAIL</label>
              <input type="email" placeholder="seu@email.com" />
            </div>
            <div>
              <label>MENSAGEM</label>
              <textarea placeholder="Conte sobre seu projeto..." rows="4"></textarea>
            </div>
            <button type="submit" className="btn-submit">ENVIAR MENSAGEM</button>
          </form>
        </section>

        {/* Modal Case Study */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button style={{position:'absolute', top:'20px', right:'20px', background:'none', border:'none', color:'#666', cursor:'pointer'}} onClick={() => setSelectedProject(null)}><X /></button>
              
              <div style={{color:'#FF5500', marginBottom:'20px'}}>{selectedProject.icon}</div>
              <h2 style={{fontSize: '2.5rem', fontWeight: '300', marginBottom:'10px'}}>{selectedProject.title}</h2>
              <p style={{color:'#888', marginBottom:'30px', fontFamily:'monospace'}}>{selectedProject.subtitle}</p>
              
              <p style={{fontSize:'1.1rem', marginBottom:'30px', lineHeight:'1.6', color:'#ddd'}}>{selectedProject.description}</p>
              
              {selectedProject.challenge && (
                <div className="modal-case-block">
                  <h4 style={{color:'#FF5500', display:'flex', alignItems:'center', gap:'10px', textTransform:'uppercase', fontSize:'0.9rem', marginBottom:'20px'}}> <ChevronRight size={18}/> O Desafio</h4>
                  <p style={{color:'#999', marginBottom:'30px', lineHeight:'1.6'}}>{selectedProject.challenge}</p>
                  
                  <h4 style={{color:'white', display:'flex', alignItems:'center', gap:'10px', textTransform:'uppercase', fontSize:'0.9rem', marginBottom:'20px'}}> <ChevronRight size={18}/> A Solução Técnica</h4>
                  <ul className="case-list">
                    {selectedProject.solution.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        <footer style={{padding: '50px 3rem', borderTop: '1px solid #222', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{fontFamily:'Space Mono', fontSize:'0.8rem', color:'#444'}}>© 2025 BRASÍLIA/DF</div>
          <div style={{fontFamily:'Space Mono', fontSize:'0.8rem', color:'#444'}}>GHENRY.OPS</div>
        </footer>

      </div>
    </div>
  );
}

export default App;