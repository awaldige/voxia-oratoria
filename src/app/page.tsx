
"use client";

const courses = [
  {
    number: "01",
    title: "Oratória e Expressão",
    description:
      "Desenvolva uma comunicação clara, natural e envolvente para transmitir suas ideias com confiança.",
  },
  {
    number: "02",
    title: "Comunicação Profissional",
    description:
      "Aprenda a apresentar ideias, participar de reuniões e se comunicar com mais segurança no ambiente profissional.",
  },
  {
    number: "03",
    title: "Apresentações em Público",
    description:
      "Prepare-se para palestras, apresentações e momentos em que sua voz precisa fazer a diferença.",
  },
];

const benefits = [
  "Mais clareza para expressar suas ideias",
  "Comunicação mais segura e objetiva",
  "Melhor desenvoltura ao falar em público",
  "Mais consciência sobre voz e linguagem corporal",
];

export default function Home() {
  function handleContactClick() {
    alert(
      "Esta é uma demonstração da VOXIA. O WhatsApp será configurado com o contato oficial da empresa na versão final."
    );
  }

  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="VOXIA - Início">
          <span className="brand-symbol">V.</span>

          <span className="brand-name">
            VOXIA
            <small>ORATÓRIA & COMUNICAÇÃO</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#sobre">A escola</a>
          <a href="#cursos">Cursos</a>
          <a href="#diferenciais">Diferenciais</a>
        </nav>

        <a
          href="#contato"
          className="button button-outline header-button"
        >
          Fale conosco <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            SUA VOZ. SUA PRESENÇA. SEU FUTURO.
          </span>

          <h1>
            Sua voz pode
            <br />
            transformar
            <br />
            <span>tudo.</span>
          </h1>

          <p className="hero-description">
            Desenvolva a confiança para expressar suas ideias, conquistar
            espaços e se comunicar com presença em qualquer situação.
          </p>

          <div className="hero-actions">
            <a href="#cursos" className="button button-gold">
              Descubra nossos cursos{" "}
              <span aria-hidden="true">→</span>
            </a>

            <a href="#sobre" className="text-link">
              Conheça a VOXIA{" "}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            COMUNICAÇÃO QUE APROXIMA. ORATÓRIA QUE TRANSFORMA.
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Destaque visual da escola"
        >
          <div className="hero-image">
            <div className="image-overlay" />

            <div className="image-caption">
              <span className="caption-number">01 / 03</span>
              <span>O poder de se expressar.</span>
            </div>
          </div>

          <div className="floating-card">
            <span className="floating-icon">✳</span>

            <div>
              <strong>Encontre sua voz.</strong>
              <p>Descubra seu potencial.</p>
            </div>
          </div>

          <span className="visual-decoration">V</span>
        </div>

        <div className="hero-bottom">
          <span>01 — COMUNICAÇÃO</span>
          <span>02 — CONFIANÇA</span>
          <span>03 — DESENVOLVIMENTO</span>
        </div>
      </section>

      <section className="intro section-padding" id="sobre">
        <div className="section-label">
          <span>01</span> / SOBRE A VOXIA
        </div>

        <div className="intro-content">
          <h2>
            Não se trata apenas de falar.
            <br />
            Trata-se de <span>ser compreendido.</span>
          </h2>

          <div className="intro-text">
            <p>
              A VOXIA nasce com uma proposta: ajudar pessoas a descobrirem
              a força da própria comunicação e a expressarem suas ideias
              com mais clareza, confiança e autenticidade.
            </p>

            <a href="#diferenciais" className="dark-link">
              Conheça nossa proposta{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="courses section-padding" id="cursos">
        <div className="section-heading">
          <div>
            <div className="section-label light-label">
              <span>02</span> / DESENVOLVIMENTO
            </div>

            <h2>
              Encontre sua voz.
              <br />
              <span>Amplie suas possibilidades.</span>
            </h2>
          </div>

          <p>
            Diferentes caminhos para desenvolver uma comunicação mais
            consciente, segura e eficiente.
          </p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.number}>
              <div className="course-card-top">
                <span>{course.number}</span>
                <span aria-hidden="true">↗</span>
              </div>

              <div className="course-card-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>

              <a href="#contato" className="course-link">
                Tenho interesse{" "}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="benefits section-padding"
        id="diferenciais"
      >
        <div className="benefits-heading">
          <div className="section-label">
            <span>03</span> / SEU DESENVOLVIMENTO
          </div>

          <h2>
            A confiança não precisa
            <br />
            <span>ficar em silêncio.</span>
          </h2>

          <p>
            Aprender a se comunicar melhor é abrir espaço para novas
            possibilidades pessoais e profissionais.
          </p>
        </div>

        <div className="benefit-list">
          {benefits.map((benefit, index) => (
            <div className="benefit-item" key={benefit}>
              <span className="benefit-number">
                0{index + 1}
              </span>

              <span>{benefit}</span>

              <span
                className="benefit-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contato">
        <div className="cta-decoration">V.</div>

        <div className="cta-content">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            O PRÓXIMO PASSO COMEÇA AQUI
          </span>

          <h2>
            Sua próxima versão
            <br />
            começa com <span>sua voz.</span>
          </h2>

          <p>
            Entre em contato para conhecer a proposta da VOXIA e
            descobrir possibilidades para desenvolver sua comunicação.
          </p>

          <button
            type="button"
            className="button button-gold"
            onClick={handleContactClick}
          >
            Converse conosco{" "}
            <span aria-hidden="true">↗</span>
          </button>

          <small>
            Esta é uma demonstração conceitual. O WhatsApp e os canais
            de atendimento serão configurados com os dados reais da
            empresa na versão final.
          </small>
        </div>
      </section>

      <footer className="site-footer">
        <a
          href="#inicio"
          className="brand footer-brand"
          aria-label="VOXIA - Voltar ao início"
        >
          <span className="brand-symbol">V.</span>

          <span className="brand-name">
            VOXIA
            <small>ORATÓRIA & COMUNICAÇÃO</small>
          </span>
        </a>

        <p>Sua voz merece ser ouvida.</p>

        <span className="footer-credit">
          DEMONSTRAÇÃO DESENVOLVIDA POR AW TECHNOLOGY
        </span>

        <a href="#inicio" className="back-to-top">
          VOLTAR AO TOPO ↑
        </a>
      </footer>
    </main>
  );
}
