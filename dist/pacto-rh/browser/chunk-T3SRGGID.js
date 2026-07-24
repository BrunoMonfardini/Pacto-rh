import {
  RouterLink
} from "./chunk-SIEP2TH5.js";
import {
  Component,
  Directive,
  ElementRef,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-C3DF2WF3.js";

// src/app/shared/directives/scroll-reveal.directive.ts
var ScrollRevealDirective = class _ScrollRevealDirective {
  constructor() {
    this.el = inject(ElementRef);
    this.revealDelay = input(0, { alias: "revealDelay" });
  }
  ngOnInit() {
    const node = this.el.nativeElement;
    node.style.transitionDelay = `${this.revealDelay()}ms`;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          this.observer?.unobserve(node);
        }
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    this.observer.observe(node);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  static {
    this.\u0275fac = function ScrollRevealDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollRevealDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ScrollRevealDirective, selectors: [["", "appScrollReveal", ""]], hostAttrs: [1, "reveal"], inputs: { revealDelay: [1, "revealDelay"] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollRevealDirective, [{
    type: Directive,
    args: [{
      selector: "[appScrollReveal]",
      standalone: true,
      host: { class: "reveal" }
    }]
  }], null, null);
})();

// src/app/features/home/components/hero.component.ts
function HeroComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
  if (rf & 2) {
    const color_r1 = ctx.$implicit;
    \u0275\u0275styleProp("background", color_r1);
  }
}
function HeroComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
  if (rf & 2) {
    const color_r2 = ctx.$implicit;
    \u0275\u0275styleProp("background", color_r2);
  }
}
var HeroComponent = class _HeroComponent {
  constructor() {
    this.glowBars = [
      "var(--color-blue-800)",
      "var(--color-blue-600)",
      "var(--color-blue-400)",
      "var(--color-blue-200)",
      "var(--hero-glow-center)",
      "var(--color-red-200)",
      "var(--color-red-400)",
      "var(--color-red-600)",
      "var(--color-red-800)"
    ];
  }
  static {
    this.\u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeroComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], decls: 15, vars: 0, consts: [["id", "home", 1, "hero"], ["aria-hidden", "true", 1, "hero__glow"], [1, "hero__glow-row", "hero__glow-row--blur"], [1, "hero__glow-bar", 3, "background"], [1, "hero__glow-row", "hero__glow-row--crisp"], ["appScrollReveal", "", 1, "container", "hero__content"], ["src", "assets/images/logo-pacto-rh/logo_sem_fundo.png", "alt", "PactoRH \u2014 Treinamento e Desenvolvimento Pessoal", 1, "hero__logo"], [1, "hero__lead"], ["routerLink", "/", "fragment", "solucoes", 1, "hero__scroll-cue"], [1, "fas", "fa-chevron-down"], [1, "hero__glow-bar"]], template: function HeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275repeaterCreate(3, HeroComponent_For_4_Template, 1, 2, "span", 3, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275repeaterCreate(6, HeroComponent_For_7_Template, 1, 2, "span", 3, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275element(9, "img", 6);
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11, " Desenvolvimento humano e performance corporativa em um s\xF3 lugar. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 8);
        \u0275\u0275text(13, " Conhe\xE7a nossas solu\xE7\xF5es ");
        \u0275\u0275element(14, "i", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.glowBars);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.glowBars);
      }
    }, dependencies: [RouterLink, ScrollRevealDirective], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  --hero-glow-center: #eee9f1;\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: var(--navbar-height);\n  overflow: hidden;\n  background: var(--color-bg-white);\n}\n.hero__glow[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.hero__glow-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  width: min(80vw, 1000px);\n  height: 340px;\n}\n@media (max-width: 768px) {\n  .hero__glow-row[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n}\n@media (max-width: 480px) {\n  .hero__glow-row[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n}\n.hero__glow-row--blur[_ngcontent-%COMP%] {\n  position: absolute;\n  filter: blur(70px);\n  opacity: 0.85;\n  transform: scale(1.04);\n}\n.hero__glow-row--crisp[_ngcontent-%COMP%] {\n  position: relative;\n  opacity: 0.92;\n}\n.hero__glow-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  border-radius: var(--radius-pill);\n}\n.hero__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: var(--space-6);\n  width: 100%;\n}\n.hero__logo[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 380px;\n  height: auto;\n  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.18));\n}\n@media (max-width: 640px) {\n  .hero__logo[_ngcontent-%COMP%] {\n    max-width: 240px;\n  }\n}\n.hero__lead[_ngcontent-%COMP%] {\n  max-width: 480px;\n  font-size: var(--fs-lg);\n  color: var(--color-text-light);\n  font-weight: 400;\n}\n@media (max-width: 640px) {\n  .hero__lead[_ngcontent-%COMP%] {\n    font-size: var(--fs-base);\n  }\n}\n.hero__scroll-cue[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  margin-top: var(--space-10);\n  font-family: var(--font-heading);\n  font-size: var(--fs-xs);\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  text-decoration: none;\n  transition: color var(--transition);\n}\n.hero__scroll-cue[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  animation: _ngcontent-%COMP%_heroBounce 1.8s ease-in-out infinite;\n}\n.hero__scroll-cue[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n@keyframes _ngcontent-%COMP%_heroBounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(5px);\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "app-hero", standalone: true, imports: [RouterLink, ScrollRevealDirective], template: '<!-- Hero: fundo em vinheta cinza com um brilho degrad\xEA azul \u2192 vermelho\n     centralizado atr\xE1s do conte\xFAdo (glow com blur + camada n\xEDtida por cima) -->\n<section class="hero" id="home">\n\n  <div class="hero__glow" aria-hidden="true">\n    <div class="hero__glow-row hero__glow-row--blur">\n      @for (color of glowBars; track $index) {\n        <span class="hero__glow-bar" [style.background]="color"></span>\n      }\n    </div>\n    <div class="hero__glow-row hero__glow-row--crisp">\n      @for (color of glowBars; track $index) {\n        <span class="hero__glow-bar" [style.background]="color"></span>\n      }\n    </div>\n  </div>\n\n  <div class="container hero__content" appScrollReveal>\n    <img\n      src="assets/images/logo-pacto-rh/logo_sem_fundo.png"\n      alt="PactoRH \u2014 Treinamento e Desenvolvimento Pessoal"\n      class="hero__logo"\n    />\n\n    <p class="hero__lead">\n      Desenvolvimento humano e performance corporativa em um s\xF3 lugar.\n    </p>\n\n    <a routerLink="/" fragment="solucoes" class="hero__scroll-cue">\n      Conhe\xE7a nossas solu\xE7\xF5es\n      <i class="fas fa-chevron-down"></i>\n    </a>\n  </div>\n</section>\n', styles: ["/* src/app/features/home/components/hero.component.scss */\n.hero {\n  --hero-glow-center: #eee9f1;\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: var(--navbar-height);\n  overflow: hidden;\n  background: var(--color-bg-white);\n}\n.hero__glow {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.hero__glow-row {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  width: min(80vw, 1000px);\n  height: 340px;\n}\n@media (max-width: 768px) {\n  .hero__glow-row {\n    height: 220px;\n  }\n}\n@media (max-width: 480px) {\n  .hero__glow-row {\n    height: 160px;\n  }\n}\n.hero__glow-row--blur {\n  position: absolute;\n  filter: blur(70px);\n  opacity: 0.85;\n  transform: scale(1.04);\n}\n.hero__glow-row--crisp {\n  position: relative;\n  opacity: 0.92;\n}\n.hero__glow-bar {\n  flex: 1;\n  height: 100%;\n  border-radius: var(--radius-pill);\n}\n.hero__content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: var(--space-6);\n  width: 100%;\n}\n.hero__logo {\n  width: auto;\n  max-width: 380px;\n  height: auto;\n  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.18));\n}\n@media (max-width: 640px) {\n  .hero__logo {\n    max-width: 240px;\n  }\n}\n.hero__lead {\n  max-width: 480px;\n  font-size: var(--fs-lg);\n  color: var(--color-text-light);\n  font-weight: 400;\n}\n@media (max-width: 640px) {\n  .hero__lead {\n    font-size: var(--fs-base);\n  }\n}\n.hero__scroll-cue {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  margin-top: var(--space-10);\n  font-family: var(--font-heading);\n  font-size: var(--fs-xs);\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  text-decoration: none;\n  transition: color var(--transition);\n}\n.hero__scroll-cue i {\n  font-size: var(--fs-sm);\n  animation: heroBounce 1.8s ease-in-out infinite;\n}\n.hero__scroll-cue:hover {\n  color: var(--color-primary);\n}\n@keyframes heroBounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(5px);\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/features/home/components/hero.component.ts", lineNumber: 12 });
})();

// src/app/features/home/components/audience-split.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function AudienceSplitComponent_For_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1);
  }
}
function AudienceSplitComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8)(1, "div", 9);
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 13);
    \u0275\u0275repeaterCreate(8, AudienceSplitComponent_For_11_For_9_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 14);
    \u0275\u0275text(11);
    \u0275\u0275element(12, "i", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_18_r3 = ctx.$index;
    \u0275\u0275classMap("audience-card--" + item_r2.color);
    \u0275\u0275property("revealDelay", \u0275$index_18_r3 * 120);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r2.benefits);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn--red", item_r2.color === "red")("btn--primary", item_r2.color === "blue");
    \u0275\u0275property("routerLink", item_r2.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.cta, " ");
  }
}
var AudienceSplitComponent = class _AudienceSplitComponent {
  constructor() {
    this.audiences = [
      {
        color: "red",
        icon: "fa-building",
        title: "Empresas",
        description: "Programas sob medida para elevar performance e engajamento das equipes.",
        benefits: [
          "Treinamentos corporativos personalizados",
          "Diagn\xF3stico e consultoria em gest\xE3o de pessoas",
          "Acompanhamento de resultados"
        ],
        cta: "Conhecer solu\xE7\xF5es",
        route: "/empresa"
      },
      {
        color: "blue",
        icon: "fa-user",
        title: "Profissionais",
        description: "Ferramentas e conte\xFAdos para impulsionar sua carreira e autoconhecimento.",
        benefits: [
          "Teste DISC de perfil comportamental",
          "Mentorias individuais",
          "Conte\xFAdos de desenvolvimento pessoal"
        ],
        cta: "Conhecer conte\xFAdos",
        route: "/profissional"
      }
    ];
  }
  static {
    this.\u0275fac = function AudienceSplitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AudienceSplitComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AudienceSplitComponent, selectors: [["app-audience-split"]], decls: 12, vars: 0, consts: [["id", "solucoes", 1, "solutions", "section"], [1, "container"], ["appScrollReveal", "", 1, "section-header", "section-header--center"], [1, "section-tag"], [1, "section-title"], [1, "section-subtitle", "mx-auto"], [1, "solutions__grid"], ["appScrollReveal", "", 1, "audience-card", 3, "class", "revealDelay"], ["appScrollReveal", "", 1, "audience-card", 3, "revealDelay"], [1, "audience-card__icon"], [1, "fas"], [1, "audience-card__title"], [1, "audience-card__text"], [1, "audience-card__benefits"], [1, "btn", "audience-card__cta", 3, "routerLink"], [1, "fas", "fa-arrow-right"], [1, "fas", "fa-check"]], template: function AudienceSplitComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Solu\xE7\xF5es");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2", 4);
        \u0275\u0275text(6, "Para cada etapa da sua jornada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, " Treinamentos para empresas e ferramentas de desenvolvimento para profissionais, com o mesmo compromisso: gerar resultado real. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275repeaterCreate(10, AudienceSplitComponent_For_11_Template, 13, 13, "article", 7, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.audiences);
      }
    }, dependencies: [RouterLink, ScrollRevealDirective], styles: ["\n\n.solutions__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-8);\n}\n@media (min-width: 768px) {\n  .solutions__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.audience-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--space-4);\n  padding: var(--space-10);\n  border-radius: var(--radius-xl);\n  background: var(--color-bg-white);\n  border: 1px solid var(--color-border-light);\n  box-shadow: var(--shadow-sm);\n  transition: transform var(--transition), box-shadow var(--transition);\n}\n.audience-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n}\n.audience-card__icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-xl);\n  color: #fff;\n}\n.audience-card--red[_ngcontent-%COMP%]   .audience-card__icon[_ngcontent-%COMP%] {\n  background: var(--color-red);\n}\n.audience-card--blue[_ngcontent-%COMP%]   .audience-card__icon[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n.audience-card__title[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  color: var(--color-text);\n}\n.audience-card__text[_ngcontent-%COMP%] {\n  color: var(--color-text-light);\n  font-size: var(--fs-base);\n}\n.audience-card__benefits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  width: 100%;\n}\n.audience-card__benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n  font-size: var(--fs-sm);\n  color: var(--color-text);\n}\n.audience-card__benefits[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: var(--fs-xs);\n  flex-shrink: 0;\n}\n.audience-card--red[_ngcontent-%COMP%]   .audience-card__benefits[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-red);\n}\n.audience-card--blue[_ngcontent-%COMP%]   .audience-card__benefits[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.audience-card__cta[_ngcontent-%COMP%] {\n  margin-top: auto;\n  align-self: flex-start;\n}\n.audience-card__cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  transition: transform var(--transition);\n}\n.audience-card__cta[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n/*# sourceMappingURL=audience-split.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AudienceSplitComponent, [{
    type: Component,
    args: [{ selector: "app-audience-split", standalone: true, imports: [RouterLink, ScrollRevealDirective], template: `<!-- Se\xE7\xE3o Solu\xE7\xF5es: dois p\xFAblicos atendidos pela PactoRH, lado a lado -->
<section class="solutions section" id="solucoes">
  <div class="container">

    <div class="section-header section-header--center" appScrollReveal>
      <span class="section-tag">Solu\xE7\xF5es</span>
      <h2 class="section-title">Para cada etapa da sua jornada</h2>
      <p class="section-subtitle mx-auto">
        Treinamentos para empresas e ferramentas de desenvolvimento para
        profissionais, com o mesmo compromisso: gerar resultado real.
      </p>
    </div>

    <div class="solutions__grid">
      @for (item of audiences; track item.title; let i = $index) {
        <article
          class="audience-card"
          [class]="'audience-card--' + item.color"
          appScrollReveal
          [revealDelay]="i * 120"
        >
          <div class="audience-card__icon">
            <i class="fas" [class]="item.icon"></i>
          </div>

          <h3 class="audience-card__title">{{ item.title }}</h3>
          <p class="audience-card__text">{{ item.description }}</p>

          <ul class="audience-card__benefits">
            @for (benefit of item.benefits; track benefit) {
              <li><i class="fas fa-check"></i>{{ benefit }}</li>
            }
          </ul>

          <a [routerLink]="item.route" class="btn audience-card__cta"
             [class.btn--red]="item.color === 'red'"
             [class.btn--primary]="item.color === 'blue'">
            {{ item.cta }}
            <i class="fas fa-arrow-right"></i>
          </a>
        </article>
      }
    </div>

  </div>
</section>
`, styles: ["/* src/app/features/home/components/audience-split.component.scss */\n.solutions__grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-8);\n}\n@media (min-width: 768px) {\n  .solutions__grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.audience-card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--space-4);\n  padding: var(--space-10);\n  border-radius: var(--radius-xl);\n  background: var(--color-bg-white);\n  border: 1px solid var(--color-border-light);\n  box-shadow: var(--shadow-sm);\n  transition: transform var(--transition), box-shadow var(--transition);\n}\n.audience-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n}\n.audience-card__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-xl);\n  color: #fff;\n}\n.audience-card--red .audience-card__icon {\n  background: var(--color-red);\n}\n.audience-card--blue .audience-card__icon {\n  background: var(--color-primary);\n}\n.audience-card__title {\n  font-size: var(--fs-2xl);\n  color: var(--color-text);\n}\n.audience-card__text {\n  color: var(--color-text-light);\n  font-size: var(--fs-base);\n}\n.audience-card__benefits {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  width: 100%;\n}\n.audience-card__benefits li {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n  font-size: var(--fs-sm);\n  color: var(--color-text);\n}\n.audience-card__benefits i {\n  margin-top: 3px;\n  font-size: var(--fs-xs);\n  flex-shrink: 0;\n}\n.audience-card--red .audience-card__benefits i {\n  color: var(--color-red);\n}\n.audience-card--blue .audience-card__benefits i {\n  color: var(--color-primary);\n}\n.audience-card__cta {\n  margin-top: auto;\n  align-self: flex-start;\n}\n.audience-card__cta i {\n  font-size: 0.75em;\n  transition: transform var(--transition);\n}\n.audience-card__cta:hover i {\n  transform: translateX(3px);\n}\n/*# sourceMappingURL=audience-split.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AudienceSplitComponent, { className: "AudienceSplitComponent", filePath: "src/app/features/home/components/audience-split.component.ts", lineNumber: 22 });
})();

// src/app/features/home/components/about-mauricio.component.ts
var AboutMauricioComponent = class _AboutMauricioComponent {
  static {
    this.\u0275fac = function AboutMauricioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutMauricioComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutMauricioComponent, selectors: [["app-about-mauricio"]], decls: 28, vars: 0, consts: [["id", "sobre", 1, "mauricio", "section"], [1, "container"], ["appScrollReveal", "", 1, "section-header", "section-header--center"], [1, "section-tag"], [1, "section-title"], ["appScrollReveal", "", 1, "mauricio-card"], [1, "mauricio-card__photo"], ["src", "assets/images/foto-mauricio/0001.jpg", "alt", "Maur\xEDcio, fundador da PactoRH"], [1, "mauricio-card__body"], [1, "mauricio-card__name"], [1, "mauricio-card__role"], [1, "mauricio-card__text"], [1, "mauricio-card__highlights"], [1, "fas", "fa-award"], [1, "fas", "fa-building"], [1, "fas", "fa-certificate"]], template: function AboutMauricioComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Sobre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2", 4);
        \u0275\u0275text(6, "Quem est\xE1 por tr\xE1s da PactoRH");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
        \u0275\u0275element(9, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "div")(12, "h3", 9);
        \u0275\u0275text(13, "Maur\xEDcio Pacto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15, "Fundador & CEO da PactoRH");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "p", 11);
        \u0275\u0275text(17, " Com mais de duas d\xE9cadas em Gest\xE3o de Pessoas, Maur\xEDcio fundou a PactoRH para unir experi\xEAncia corporativa e desenvolvimento humano em um s\xF3 prop\xF3sito: ajudar empresas e profissionais a alcan\xE7arem seu potencial m\xE1ximo. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "ul", 12)(19, "li");
        \u0275\u0275element(20, "i", 13);
        \u0275\u0275text(21, "+20 anos de experi\xEAncia em RH");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275element(23, "i", 14);
        \u0275\u0275text(24, "+500 empresas atendidas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "li");
        \u0275\u0275element(26, "i", 15);
        \u0275\u0275text(27, "Especialista em DISC");
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [ScrollRevealDirective], styles: ["\n\n.mauricio-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background: var(--color-bg-dark);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n}\n@media (max-width: 768px) {\n  .mauricio-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.mauricio-card__photo[_ngcontent-%COMP%] {\n  flex: 0 0 38%;\n  min-height: 340px;\n}\n.mauricio-card__photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n@media (max-width: 768px) {\n  .mauricio-card__photo[_ngcontent-%COMP%] {\n    min-height: 300px;\n  }\n}\n.mauricio-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: var(--space-5);\n  padding: var(--space-10);\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .mauricio-card__body[_ngcontent-%COMP%] {\n    padding: var(--space-8);\n  }\n}\n.mauricio-card__name[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  color: #fff;\n  margin-bottom: var(--space-1);\n}\n.mauricio-card__role[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-red-400);\n}\n.mauricio-card__text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: var(--fs-base);\n  line-height: 1.8;\n}\n.mauricio-card__highlights[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n}\n.mauricio-card__highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-2) var(--space-4);\n  border-radius: var(--radius-pill);\n  background: rgba(255, 255, 255, 0.08);\n  font-size: var(--fs-xs);\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n}\n.mauricio-card__highlights[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-red-400);\n}\n/*# sourceMappingURL=about-mauricio.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutMauricioComponent, [{
    type: Component,
    args: [{ selector: "app-about-mauricio", standalone: true, imports: [ScrollRevealDirective], template: '<!-- Se\xE7\xE3o Sobre \u2014 Parte 1: bio do fundador -->\n<section class="mauricio section" id="sobre">\n  <div class="container">\n\n    <div class="section-header section-header--center" appScrollReveal>\n      <span class="section-tag">Sobre</span>\n      <h2 class="section-title">Quem est\xE1 por tr\xE1s da PactoRH</h2>\n    </div>\n\n    <div class="mauricio-card" appScrollReveal>\n      <div class="mauricio-card__photo">\n        <img\n          src="assets/images/foto-mauricio/0001.jpg"\n          alt="Maur\xEDcio, fundador da PactoRH"\n        />\n      </div>\n\n      <div class="mauricio-card__body">\n        <div>\n          <h3 class="mauricio-card__name">Maur\xEDcio Pacto</h3>\n          <span class="mauricio-card__role">Fundador &amp; CEO da PactoRH</span>\n        </div>\n\n        <p class="mauricio-card__text">\n          Com mais de duas d\xE9cadas em Gest\xE3o de Pessoas, Maur\xEDcio fundou a\n          PactoRH para unir experi\xEAncia corporativa e desenvolvimento humano\n          em um s\xF3 prop\xF3sito: ajudar empresas e profissionais a alcan\xE7arem\n          seu potencial m\xE1ximo.\n        </p>\n\n        <ul class="mauricio-card__highlights">\n          <li><i class="fas fa-award"></i>+20 anos de experi\xEAncia em RH</li>\n          <li><i class="fas fa-building"></i>+500 empresas atendidas</li>\n          <li><i class="fas fa-certificate"></i>Especialista em DISC</li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</section>\n', styles: ["/* src/app/features/home/components/about-mauricio.component.scss */\n.mauricio-card {\n  display: flex;\n  align-items: stretch;\n  background: var(--color-bg-dark);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n}\n@media (max-width: 768px) {\n  .mauricio-card {\n    flex-direction: column;\n  }\n}\n.mauricio-card__photo {\n  flex: 0 0 38%;\n  min-height: 340px;\n}\n.mauricio-card__photo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n@media (max-width: 768px) {\n  .mauricio-card__photo {\n    min-height: 300px;\n  }\n}\n.mauricio-card__body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: var(--space-5);\n  padding: var(--space-10);\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .mauricio-card__body {\n    padding: var(--space-8);\n  }\n}\n.mauricio-card__name {\n  font-size: var(--fs-2xl);\n  color: #fff;\n  margin-bottom: var(--space-1);\n}\n.mauricio-card__role {\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-red-400);\n}\n.mauricio-card__text {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: var(--fs-base);\n  line-height: 1.8;\n}\n.mauricio-card__highlights {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n}\n.mauricio-card__highlights li {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-2) var(--space-4);\n  border-radius: var(--radius-pill);\n  background: rgba(255, 255, 255, 0.08);\n  font-size: var(--fs-xs);\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n}\n.mauricio-card__highlights i {\n  color: var(--color-red-400);\n}\n/*# sourceMappingURL=about-mauricio.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutMauricioComponent, { className: "AboutMauricioComponent", filePath: "src/app/features/home/components/about-mauricio.component.ts", lineNumber: 11 });
})();

// src/app/features/home/components/about-pactorh.component.ts
var _forTrack02 = ($index, $item) => $item.title;
function AboutPactorhComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pillar_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    \u0275\u0275property("revealDelay", \u0275$index_14_r2 * 100);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(pillar_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pillar_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pillar_r1.text);
  }
}
var AboutPactorhComponent = class _AboutPactorhComponent {
  constructor() {
    this.pillars = [
      {
        icon: "fa-bullseye",
        title: "Miss\xE3o",
        text: "Impulsionar o potencial humano dentro das organiza\xE7\xF5es com treinamentos pr\xE1ticos e ferramentas de autoconhecimento."
      },
      {
        icon: "fa-eye",
        title: "Vis\xE3o",
        text: "Ser refer\xEAncia nacional em desenvolvimento humano e performance corporativa."
      },
      {
        icon: "fa-heart",
        title: "Valores",
        text: "\xC9tica, transpar\xEAncia e compromisso com resultados reais para empresas e profissionais."
      },
      {
        icon: "fa-star",
        title: "Diferenciais",
        text: "Metodologia pr\xF3pria, atendimento personalizado e acompanhamento cont\xEDnuo de resultados."
      }
    ];
  }
  static {
    this.\u0275fac = function AboutPactorhComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutPactorhComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutPactorhComponent, selectors: [["app-about-pactorh"]], decls: 9, vars: 0, consts: [[1, "pactorh-info", "section", "section--sm"], [1, "container"], ["appScrollReveal", "", 1, "pactorh-info__intro"], ["src", "assets/images/logo-pacto-rh/logo_preto_sem_nome_sem_fundo.png", "alt", "", 1, "pactorh-info__mark"], [1, "pactorh-info__text"], [1, "pactorh-info__grid"], ["appScrollReveal", "", 1, "pillar-card", 3, "revealDelay"], [1, "pillar-card__icon"], [1, "fas"], [1, "pillar-card__title"], [1, "pillar-card__text"]], template: function AboutPactorhComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "p", 4);
        \u0275\u0275text(5, " Fundada para unir a experi\xEAncia de mercado com metodologias humanizadas de desenvolvimento, a PactoRH nasceu do prop\xF3sito de transformar a rela\xE7\xE3o entre empresas e pessoas. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275repeaterCreate(7, AboutPactorhComponent_For_8_Template, 7, 5, "div", 6, _forTrack02);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.pillars);
      }
    }, dependencies: [ScrollRevealDirective], styles: ["\n\n.pactorh-info__intro[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto var(--space-12);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-4);\n}\n.pactorh-info__mark[_ngcontent-%COMP%] {\n  width: 56px;\n  height: auto;\n  opacity: 0.85;\n}\n.pactorh-info__text[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  color: var(--color-text-light);\n  line-height: 1.8;\n}\n.pactorh-info__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-6);\n}\n@media (min-width: 640px) {\n  .pactorh-info__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .pactorh-info__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.pillar-card[_ngcontent-%COMP%] {\n  padding: var(--space-8) var(--space-6);\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-white);\n  border: 1px solid var(--color-border-light);\n  text-align: center;\n  transition: transform var(--transition), box-shadow var(--transition);\n}\n.pillar-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.pillar-card__icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  margin: 0 auto var(--space-4);\n  border-radius: 50%;\n  background: var(--color-blue-100);\n  color: var(--color-primary);\n  font-size: var(--fs-lg);\n}\n.pillar-card__title[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  margin-bottom: var(--space-2);\n}\n.pillar-card__text[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: var(--color-text-light);\n  line-height: 1.7;\n}\n/*# sourceMappingURL=about-pactorh.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutPactorhComponent, [{
    type: Component,
    args: [{ selector: "app-about-pactorh", standalone: true, imports: [ScrollRevealDirective], template: '<!-- Se\xE7\xE3o Sobre \u2014 Parte 2: apresenta\xE7\xE3o institucional da PactoRH -->\n<section class="pactorh-info section section--sm">\n  <div class="container">\n\n    <div class="pactorh-info__intro" appScrollReveal>\n      <img\n        src="assets/images/logo-pacto-rh/logo_preto_sem_nome_sem_fundo.png"\n        alt=""\n        class="pactorh-info__mark"\n      />\n      <p class="pactorh-info__text">\n        Fundada para unir a experi\xEAncia de mercado com metodologias\n        humanizadas de desenvolvimento, a PactoRH nasceu do prop\xF3sito de\n        transformar a rela\xE7\xE3o entre empresas e pessoas.\n      </p>\n    </div>\n\n    <div class="pactorh-info__grid">\n      @for (pillar of pillars; track pillar.title; let i = $index) {\n        <div class="pillar-card" appScrollReveal [revealDelay]="i * 100">\n          <div class="pillar-card__icon">\n            <i class="fas" [class]="pillar.icon"></i>\n          </div>\n          <h3 class="pillar-card__title">{{ pillar.title }}</h3>\n          <p class="pillar-card__text">{{ pillar.text }}</p>\n        </div>\n      }\n    </div>\n\n  </div>\n</section>\n', styles: ["/* src/app/features/home/components/about-pactorh.component.scss */\n.pactorh-info__intro {\n  max-width: 640px;\n  margin: 0 auto var(--space-12);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-4);\n}\n.pactorh-info__mark {\n  width: 56px;\n  height: auto;\n  opacity: 0.85;\n}\n.pactorh-info__text {\n  font-size: var(--fs-md);\n  color: var(--color-text-light);\n  line-height: 1.8;\n}\n.pactorh-info__grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: var(--space-6);\n}\n@media (min-width: 640px) {\n  .pactorh-info__grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .pactorh-info__grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.pillar-card {\n  padding: var(--space-8) var(--space-6);\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-white);\n  border: 1px solid var(--color-border-light);\n  text-align: center;\n  transition: transform var(--transition), box-shadow var(--transition);\n}\n.pillar-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.pillar-card__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  margin: 0 auto var(--space-4);\n  border-radius: 50%;\n  background: var(--color-blue-100);\n  color: var(--color-primary);\n  font-size: var(--fs-lg);\n}\n.pillar-card__title {\n  font-size: var(--fs-lg);\n  margin-bottom: var(--space-2);\n}\n.pillar-card__text {\n  font-size: var(--fs-sm);\n  color: var(--color-text-light);\n  line-height: 1.7;\n}\n/*# sourceMappingURL=about-pactorh.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutPactorhComponent, { className: "AboutPactorhComponent", filePath: "src/app/features/home/components/about-pactorh.component.ts", lineNumber: 17 });
})();

// src/app/features/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-hero")(1, "app-audience-split")(2, "app-about-mauricio")(3, "app-about-pactorh");
      }
    }, dependencies: [
      HeroComponent,
      AudienceSplitComponent,
      AboutMauricioComponent,
      AboutPactorhComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{
      selector: "app-home",
      standalone: true,
      imports: [
        HeroComponent,
        AudienceSplitComponent,
        AboutMauricioComponent,
        AboutPactorhComponent
      ],
      template: `
    <app-hero />
    <app-audience-split />
    <app-about-mauricio />
    <app-about-pactorh />
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 23 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-T3SRGGID.js.map
