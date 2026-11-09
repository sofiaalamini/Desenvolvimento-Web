import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import PlanCard from "./components/PlanCard";
import Testimonials from "./components/Testimonials";
import Menu from "./assets/icons/menu.svg";
import Close from "./assets/icons/close.svg";
import Logo from "./assets/icons/logo.svg";
import Leaf from "./assets/icons/leaf.svg";
import Fire from "./assets/icons/fire.svg";
import Truck from "./assets/icons/truck.svg";
import Instagram from "./assets/icons/instagram.svg";
import Facebook from "./assets/icons/facebook.svg";
import Youtube from "./assets/icons/youtube.svg";
import HeroPhoto from "./assets/images/hero.jpg";
import Camila from "./assets/images/user-women-44.jpg";
import Lucas from "./assets/images/user-men-32.jpg";
import Marta from "./assets/images/user-women-68.jpg";
import Beatriz from "./assets/images/user-women-12.jpg";
import Rafael from "./assets/images/user-men-75.jpg";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/buttons.css";
import "./styles/utility.css";
import "./styles/features.css";
import "./styles/testimonials.css";
import "./styles/plans.css";
import "./styles/contact.css";
import "./styles/footer.css";

const testimonials = [
  { image: Camila, name: "Camila Ribeiro", role: "Designer", testimony: "Abrir o pacote e sentir o cheiro de café fresco já melhora a minha manhã. Nunca mais voltei ao café de mercado.", rating: 5 },
  { image: Lucas, name: "Lucas Prado", role: "Programador", testimony: "Assino há seis meses e a entrega nunca atrasou. O café chega sempre fresquinho e com sabor incrível.", rating: 5 },
  { image: Marta, name: "Dona Marta", role: "Dona de padaria", testimony: "Meus clientes perguntam qual café eu uso. Respondo com orgulho: é o Grão Dourado!", rating: 4 },
  { image: Beatriz, name: "Beatriz Lima", role: "Professora", testimony: "Gosto de receber um café diferente a cada mês. Já descobri origens que eu nem sabia que existiam.", rating: 5 },
  { image: Rafael, name: "Rafael Souza", role: "Barista", testimony: "Trabalho com café e posso dizer: a torra é muito bem feita e o preço é justo.", rating: 4 },
];

const plans = [
  { name: "Clássico", description: "Comece a provar cafés especiais sem compromisso!", price: "R$ 39,90", unit: "/mês", buttonText: "Quero este", features: ["1 pacote de 250g por mês", "Torra média", "Cancele quando quiser"] },
  { name: "Premium", description: "Para quem não vive sem um bom café todos os dias!", price: "R$ 69,90", unit: "/mês", buttonText: "Experimente de graça", badge: "1º pacote grátis", featured: true, features: ["2 pacotes de 250g por mês", "Origem surpresa todo mês", "Frete grátis e brinde exclusivo"] },
  { name: "Empresarial", description: "Café de qualidade para o seu escritório.", price: "R$ 149,90", unit: "/mês por escritório", buttonText: "Quero este", features: ["1kg de café por mês", "Moagem sob medida", "Atendimento prioritário"] },
];

// o Web3Forms pega os campos do formulário e manda por e-mail para o dono da chave
const FORM_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "01051b02-4601-4436-ba32-f4b372ce2bc2";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // "parado" | "enviando" | "enviado" | "erro"
  const [formStatus, setFormStatus] = useState("parado");

  // trava a rolagem da página enquanto o menu mobile está aberto
  useEffect(() => {
    document.documentElement.style.overflow = showMobileMenu ? "hidden" : "auto";
  }, [showMobileMenu]);

  const closeMenu = () => setShowMobileMenu(false);

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // não deixa a página recarregar
    const form = event.currentTarget;
    setFormStatus("enviando");

    try {
      // manda os campos (email e motivo) para o serviço que recebe o formulário
      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Falha ao enviar");
      form.reset();
      setFormStatus("enviado");
    } catch {
      setFormStatus("erro");
    }
  };

  return (
    <>
      {/* o header e o hero ficam juntos para as formas coloridas passarem por trás dos dois */}
      <div className="hero-wrapper">
        <header className="site-header container py-sm">
          <nav className="flex items-center justify-between" aria-label="Navegação principal">
            <a href="#hero" className="logo" aria-label="Grão Dourado, ir para o início">
              <img src={Logo} alt="" width={40} height={40} />
              <span>Grão Dourado</span>
            </a>

            <ul className="nav-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#features">Soluções</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#plans">Preços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>

            <div className="header-actions">
              <a href="#contact">Login</a>
              <Button text="Cadastre-se →" href="#plans" />
            </div>

            <div className="mobile-menu">
              <button className="btn-wrapper" onClick={() => setShowMobileMenu(true)} aria-label="Abrir menu">
                <img src={Menu} alt="" width={24} height={24} />
              </button>

              {showMobileMenu && (
                <div className="mobile-menu-content">
                  <ul>
                    <li><a onClick={closeMenu} href="#hero">Home</a></li>
                    <li><a onClick={closeMenu} href="#features">Soluções</a></li>
                    <li><a onClick={closeMenu} href="#testimonials">Depoimentos</a></li>
                    <li><a onClick={closeMenu} href="#plans">Preços</a></li>
                    <li><a onClick={closeMenu} href="#contact">Contato</a></li>
                  </ul>
                  <button onClick={closeMenu} className="btn-wrapper" aria-label="Fechar menu">
                    <img src={Close} alt="" width={24} height={24} />
                  </button>
                </div>
              )}
            </div>
          </nav>
        </header>

        <section id="hero">
          <div className="container hero-grid">
            <div className="content">
              <p className="tag">Olá, amante de café</p>
              <h1>Um café especial que conquista na primeira xícara</h1>
              <p>Você sabe que, para começar bem o dia, é fundamental ter um bom café ao lado. Receba grãos frescos de pequenos produtores na sua porta.</p>
              <div className="flex gap-1">
                <Button text="Cadastre-se" href="#plans" />
                <Button text="Veja mais" secondary href="#features" />
              </div>
            </div>
            <div className="hero-photo">
              <img src={HeroPhoto} alt="Três pessoas brindando com xícaras de café com desenho na espuma" />
            </div>
          </div>
        </section>
      </div>

      <main>
        <section className="container" id="features">
          <header className="section-header">
            <p className="tag">Soluções</p>
            <h2>Sob medida para você</h2>
            <p>Café é com a gente! A <strong>Grão Dourado</strong> já conquistou diversos clientes, seja você mais um deles e veja tudo que pode ganhar com nossos serviços.</p>
          </header>
          <section className="even-columns" aria-label="Nossas soluções">
            <Card icon={Leaf} title="Origem certa">Grãos de pequenos produtores, com origem e pontuação em cada pacote. Você sabe de onde vem o seu café.</Card>
            <Card icon={Fire} title="Torra fresca">Torramos em lotes pequenos, só depois do seu pedido, para o café chegar com todo o aroma.</Card>
            <Card icon={Truck} title="Entrega rápida">Seu café sai em até 48 horas e chega no melhor ponto, direto na sua porta.</Card>
          </section>
        </section>

        <section id="testimonials">
          <header className="section-header">
            <p className="tag">Conselho de quem conhece</p>
            <h2>Cada cliente importa!</h2>
            <p>Quem já provou conhece a qualidade do nosso café. Veja o que dizem alguns dos clientes que confiam na gente.</p>
          </header>
          <Testimonials items={testimonials} />
        </section>

        <section className="container" id="plans">
          <header className="section-header">
            <p className="tag">Planos e preços</p>
            <h2>Nossos planos</h2>
          </header>
          <div className="plans-grid">
            {plans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section container">
          <header className="section-header">
            <p className="tag">Envie sua dúvida</p>
            <h2>Entre em contato</h2>
            <p>Entre em contato, estamos dispostos a tirar qualquer dúvida, seja sobre um pedido, um plano ou um dos nossos cafés. Estamos à disposição para responder. ☕</p>
          </header>
          {formStatus === "enviado" ? (
            <p className="success" role="status">Mensagem enviada! Obrigada pelo contato ☕</p>
          ) : (
            <form onSubmit={sendMessage}>
              <input name="email" type="email" placeholder="Seu melhor e-mail" aria-label="Seu melhor e-mail" required />
              <input name="motivo" type="text" placeholder="Motivo do contato. Ex: Gostei muito do café X, poderia me enviar um orçamento?" aria-label="Motivo do contato" required />
              {/* campos escondidos do Web3Forms: chave, assunto do e-mail e proteção contra robôs */}
              <input type="hidden" name="access_key" value={ACCESS_KEY} />
              <input type="hidden" name="subject" value="Nova mensagem do site Grão Dourado" />
              <input type="checkbox" name="botcheck" className="honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <Button text={formStatus === "enviando" ? "Enviando..." : "Enviar"} submit disabled={formStatus === "enviando"} />
              {formStatus === "erro" && <p className="error" role="alert">Não deu para enviar agora. Tente de novo em instantes.</p>}
            </form>
          )}
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <h3>Grão Dourado</h3>
            <div className="social">
              <a href="#hero" aria-label="Instagram"><img src={Instagram} alt="" width={22} height={22} /></a>
              <a href="#hero" aria-label="Facebook"><img src={Facebook} alt="" width={22} height={22} /></a>
              <a href="#hero" aria-label="YouTube"><img src={Youtube} alt="" width={22} height={22} /></a>
            </div>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#hero">Sobre nós</a></li>
              <li><a href="#contact">Faça parte do time</a></li>
              <li><a href="#contact">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4>Funcionalidades</h4>
            <ul>
              <li><a href="#features">Nossos cafés</a></li>
              <li><a href="#plans">Assinaturas</a></li>
              <li><a href="#plans">Presentes</a></li>
            </ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul>
              <li><a href="#contact">Guia de preparo</a></li>
              <li><a href="#features">Origens</a></li>
              <li><a href="#testimonials">Clientes</a></li>
              <li><a href="#contact">Dúvidas</a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">Feito com amor na aula de Programação Web ☕ ©2026 Grão Dourado - Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
