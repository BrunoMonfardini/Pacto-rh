import {
  CommonModule,
  RouterLink
} from "./chunk-ZPRLIREM.js";
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-DCGTXMYS.js";

// src/app/features/home/components/hero.component.ts
var HeroComponent = class _HeroComponent {
  static {
    this.\u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeroComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], decls: 19, vars: 0, consts: [[1, "hero"], ["aria-hidden", "true", 1, "hero__columns"], [1, "hero__col", "hero__col--blue-800"], [1, "hero__col", "hero__col--blue-600"], [1, "hero__col", "hero__col--blue-400"], [1, "hero__col", "hero__col--blue-200"], [1, "hero__col", "hero__col--center"], [1, "hero__col", "hero__col--red-200"], [1, "hero__col", "hero__col--red-400"], [1, "hero__col", "hero__col--red-600"], [1, "hero__col", "hero__col--red-800"], [1, "container", "hero__content"], [1, "hero__logo-wrap"], ["src", "assets/images/logo-pacto-rh/logo_sem_fundo.png", "alt", "PactoRH \u2014 Treinamento e Desenvolvimento Pessoal", 1, "hero__logo"], [1, "hero__actions"], ["routerLink", "/empresa", 1, "btn", "btn--primary", "btn--lg"], ["routerLink", "/profissional", 1, "btn", "btn--red", "btn--lg"]], template: function HeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12);
        \u0275\u0275element(13, "img", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 14)(15, "a", 15);
        \u0275\u0275text(16, "Para Empresas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 16);
        \u0275\u0275text(18, "Para Profissionais");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [RouterLink], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  background: var(--color-bg);\n  padding-top: var(--navbar-height);\n  overflow: hidden;\n}\n.hero__columns[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  width: 100%;\n  max-width: 1000px;\n  height: 65%;\n  pointer-events: none;\n}\n.hero__col[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 9999px 9999px 0 0;\n  opacity: 0.9;\n}\n.hero__col[_ngcontent-%COMP%]:nth-child(1) {\n  height: 100%;\n}\n.hero__col[_ngcontent-%COMP%]:nth-child(2) {\n  height: 82%;\n}\n.hero__col[_ngcontent-%COMP%]:nth-child(3) {\n  height: 62%;\n}\n.hero__col[_ngcontent-%COMP%]:nth-child(4) {\n  height: 44%;\n}\n.hero__col[_ngcontent-%COMP%]:nth-child(5) {\n  height: 32%;\n}\n.hero__col[_ngcontent-%COMP%]:nth-child(6) {\n  height: 44%;\n}\n.hero__col[_ngcontent-%COMP%]:nth-child(7) {\n  height: 62%;\n}\n.hero__col[_ngcontent-%COMP%]:nth-child(8) {\n  height: 82%;\n}\n.hero__col[_ngcontent-%COMP%]:nth-child(9) {\n  height: 100%;\n}\n.hero__col--blue-800[_ngcontent-%COMP%] {\n  background: var(--color-blue-800);\n}\n.hero__col--blue-600[_ngcontent-%COMP%] {\n  background: var(--color-blue-600);\n}\n.hero__col--blue-400[_ngcontent-%COMP%] {\n  background: var(--color-blue-400);\n}\n.hero__col--blue-200[_ngcontent-%COMP%] {\n  background: var(--color-blue-200);\n}\n.hero__col--center[_ngcontent-%COMP%] {\n  background: #c8c8c8;\n}\n.hero__col--red-200[_ngcontent-%COMP%] {\n  background: var(--color-red-200);\n}\n.hero__col--red-400[_ngcontent-%COMP%] {\n  background: var(--color-red-400);\n}\n.hero__col--red-600[_ngcontent-%COMP%] {\n  background: var(--color-red-600);\n}\n.hero__col--red-800[_ngcontent-%COMP%] {\n  background: var(--color-red-800);\n}\n.hero__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: var(--space-5);\n  padding-bottom: var(--space-24);\n  width: 100%;\n}\n.hero__logo-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.hero__logo[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 420px;\n  height: auto;\n}\n@media (max-width: 640px) {\n  .hero__logo[_ngcontent-%COMP%] {\n    max-width: 260px;\n  }\n}\n.hero__actions[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  display: flex;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  justify-content: center;\n}\n@media (max-width: 480px) {\n  .hero__actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .hero__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "app-hero", standalone: true, imports: [RouterLink], template: '<!-- Hero fiel ao Figma:\r\n     fundo cinza claro, logo PactoRH grande centralizada,\r\n     colunas arredondadas azuis e vermelhas na base como decora\xE7\xE3o -->\r\n<section class="hero">\r\n\r\n  <!-- Colunas decorativas (como no Figma \u2014 azuis e vermelhas arredondadas) -->\r\n  <div class="hero__columns" aria-hidden="true">\r\n    <div class="hero__col hero__col--blue-800"></div>\r\n    <div class="hero__col hero__col--blue-600"></div>\r\n    <div class="hero__col hero__col--blue-400"></div>\r\n    <div class="hero__col hero__col--blue-200"></div>\r\n    <div class="hero__col hero__col--center"></div>\r\n    <div class="hero__col hero__col--red-200"></div>\r\n    <div class="hero__col hero__col--red-400"></div>\r\n    <div class="hero__col hero__col--red-600"></div>\r\n    <div class="hero__col hero__col--red-800"></div>\r\n  </div>\r\n\r\n  <!-- Conte\xFAdo centralizado por cima das colunas -->\r\n  <div class="container hero__content">\r\n\r\n    <!-- Logo grande centralizada (j\xE1 traz o wordmark + tagline embutidos na arte) -->\r\n    <div class="hero__logo-wrap">\r\n      <img\r\n        src="assets/images/logo-pacto-rh/logo_sem_fundo.png"\r\n        alt="PactoRH \u2014 Treinamento e Desenvolvimento Pessoal"\r\n        class="hero__logo"\r\n      />\r\n    </div>\r\n\r\n    <!-- Dois CTAs -->\r\n    <div class="hero__actions">\r\n      <a routerLink="/empresa"      class="btn btn--primary btn--lg">Para Empresas</a>\r\n      <a routerLink="/profissional" class="btn btn--red btn--lg">Para Profissionais</a>\r\n    </div>\r\n\r\n  </div>\r\n</section>', styles: ["/* src/app/features/home/components/hero.component.scss */\n.hero {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  background: var(--color-bg);\n  padding-top: var(--navbar-height);\n  overflow: hidden;\n}\n.hero__columns {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  width: 100%;\n  max-width: 1000px;\n  height: 65%;\n  pointer-events: none;\n}\n.hero__col {\n  flex: 1;\n  border-radius: 9999px 9999px 0 0;\n  opacity: 0.9;\n}\n.hero__col:nth-child(1) {\n  height: 100%;\n}\n.hero__col:nth-child(2) {\n  height: 82%;\n}\n.hero__col:nth-child(3) {\n  height: 62%;\n}\n.hero__col:nth-child(4) {\n  height: 44%;\n}\n.hero__col:nth-child(5) {\n  height: 32%;\n}\n.hero__col:nth-child(6) {\n  height: 44%;\n}\n.hero__col:nth-child(7) {\n  height: 62%;\n}\n.hero__col:nth-child(8) {\n  height: 82%;\n}\n.hero__col:nth-child(9) {\n  height: 100%;\n}\n.hero__col--blue-800 {\n  background: var(--color-blue-800);\n}\n.hero__col--blue-600 {\n  background: var(--color-blue-600);\n}\n.hero__col--blue-400 {\n  background: var(--color-blue-400);\n}\n.hero__col--blue-200 {\n  background: var(--color-blue-200);\n}\n.hero__col--center {\n  background: #c8c8c8;\n}\n.hero__col--red-200 {\n  background: var(--color-red-200);\n}\n.hero__col--red-400 {\n  background: var(--color-red-400);\n}\n.hero__col--red-600 {\n  background: var(--color-red-600);\n}\n.hero__col--red-800 {\n  background: var(--color-red-800);\n}\n.hero__content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: var(--space-5);\n  padding-bottom: var(--space-24);\n  width: 100%;\n}\n.hero__logo-wrap {\n  display: flex;\n  justify-content: center;\n}\n.hero__logo {\n  width: auto;\n  max-width: 420px;\n  height: auto;\n}\n@media (max-width: 640px) {\n  .hero__logo {\n    max-width: 260px;\n  }\n}\n.hero__actions {\n  margin-top: var(--space-4);\n  display: flex;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n  justify-content: center;\n}\n@media (max-width: 480px) {\n  .hero__actions {\n    flex-direction: column;\n    width: 100%;\n  }\n  .hero__actions .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=hero.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent" });
})();

// src/app/features/home/components/audience-split.component.ts
var AudienceSplitComponent = class _AudienceSplitComponent {
  static {
    this.\u0275fac = function AudienceSplitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AudienceSplitComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AudienceSplitComponent, selectors: [["app-audience-split"]], decls: 36, vars: 0, consts: [[1, "audience"], ["routerLink", "/empresa", 1, "audience__panel", "audience__panel--red"], ["aria-hidden", "true", 1, "audience__arcs"], [1, "audience__arc", "audience__arc--red-900"], [1, "audience__arc", "audience__arc--red-700"], [1, "audience__arc", "audience__arc--red-500"], [1, "audience__arc", "audience__arc--red-300"], [1, "audience__arc", "audience__arc--red-100"], [1, "audience__content"], [1, "audience__eyebrow"], [1, "audience__title"], [1, "audience__text"], [1, "btn", "btn--outline-white", "btn--pill", "audience__cta"], [1, "fas", "fa-arrow-right"], ["aria-hidden", "true", 1, "audience__divider"], ["routerLink", "/profissional", 1, "audience__panel", "audience__panel--blue"], [1, "audience__arc", "audience__arc--blue-900"], [1, "audience__arc", "audience__arc--blue-700"], [1, "audience__arc", "audience__arc--blue-500"], [1, "audience__arc", "audience__arc--blue-300"], [1, "audience__arc", "audience__arc--blue-100"]], template: function AudienceSplitComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "a", 1)(2, "div", 2);
        \u0275\u0275element(3, "span", 3)(4, "span", 4)(5, "span", 5)(6, "span", 6)(7, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
        \u0275\u0275text(10, "Solu\xE7\xF5es corporativas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h2", 10);
        \u0275\u0275text(12, "Empresa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 11);
        \u0275\u0275text(14, " Programas de treinamento e desenvolvimento para elevar a performance e o engajamento das suas equipes. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 12);
        \u0275\u0275text(16, " Conhecer solu\xE7\xF5es ");
        \u0275\u0275element(17, "i", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(18, "div", 14);
        \u0275\u0275elementStart(19, "a", 15)(20, "div", 2);
        \u0275\u0275element(21, "span", 16)(22, "span", 17)(23, "span", 18)(24, "span", 19)(25, "span", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 8)(27, "span", 9);
        \u0275\u0275text(28, "Desenvolvimento pessoal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h2", 10);
        \u0275\u0275text(30, "Profissional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 11);
        \u0275\u0275text(32, " Conte\xFAdos, mentorias e o teste DISC para impulsionar sua carreira e o seu autoconhecimento. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 12);
        \u0275\u0275text(34, " Conhecer conte\xFAdos ");
        \u0275\u0275element(35, "i", 13);
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [RouterLink], styles: ["\n\n.audience[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 620px;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .audience[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: auto;\n  }\n}\n.audience__divider[_ngcontent-%COMP%] {\n  width: 4px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--color-blue-200),\n      #c8c8c8,\n      var(--color-red-200));\n}\n@media (max-width: 768px) {\n  .audience__divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 4px;\n  }\n}\n.audience__panel[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  padding: var(--space-16) var(--space-8);\n  text-decoration: none;\n  min-height: 480px;\n}\n@media (max-width: 768px) {\n  .audience__panel[_ngcontent-%COMP%] {\n    min-height: 420px;\n    padding: var(--space-12) var(--space-6);\n  }\n}\n.audience__arcs[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.audience__arc[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10%;\n  bottom: -10%;\n  transition: transform var(--transition);\n}\n.audience__panel--red[_ngcontent-%COMP%]   .audience__arc[_ngcontent-%COMP%] {\n  left: 0;\n  border-radius: 0 999px 999px 0;\n}\n.audience__panel--red[_ngcontent-%COMP%]   .audience__arc--red-900[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--color-red-900);\n}\n.audience__panel--red[_ngcontent-%COMP%]   .audience__arc--red-700[_ngcontent-%COMP%] {\n  width: 80%;\n  background: var(--color-red-700);\n}\n.audience__panel--red[_ngcontent-%COMP%]   .audience__arc--red-500[_ngcontent-%COMP%] {\n  width: 60%;\n  background: var(--color-red-500);\n}\n.audience__panel--red[_ngcontent-%COMP%]   .audience__arc--red-300[_ngcontent-%COMP%] {\n  width: 40%;\n  background: var(--color-red-300);\n}\n.audience__panel--red[_ngcontent-%COMP%]   .audience__arc--red-100[_ngcontent-%COMP%] {\n  width: 20%;\n  background: var(--color-red-100);\n}\n.audience__panel--red[_ngcontent-%COMP%]:hover   .audience__arc[_ngcontent-%COMP%] {\n  transform: translateX(4%);\n}\n.audience__panel--blue[_ngcontent-%COMP%]   .audience__arc[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 999px 0 0 999px;\n}\n.audience__panel--blue[_ngcontent-%COMP%]   .audience__arc--blue-900[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--color-blue-900);\n}\n.audience__panel--blue[_ngcontent-%COMP%]   .audience__arc--blue-700[_ngcontent-%COMP%] {\n  width: 80%;\n  background: var(--color-blue-700);\n}\n.audience__panel--blue[_ngcontent-%COMP%]   .audience__arc--blue-500[_ngcontent-%COMP%] {\n  width: 60%;\n  background: var(--color-blue-500);\n}\n.audience__panel--blue[_ngcontent-%COMP%]   .audience__arc--blue-300[_ngcontent-%COMP%] {\n  width: 40%;\n  background: var(--color-blue-300);\n}\n.audience__panel--blue[_ngcontent-%COMP%]   .audience__arc--blue-100[_ngcontent-%COMP%] {\n  width: 20%;\n  background: var(--color-blue-100);\n}\n.audience__panel--blue[_ngcontent-%COMP%]:hover   .audience__arc[_ngcontent-%COMP%] {\n  transform: translateX(-4%);\n}\n.audience__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 380px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-8);\n  border-radius: var(--radius-xl);\n  background: rgba(13, 20, 51, 0.35);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  transition: transform var(--transition), background var(--transition);\n}\n.audience__panel[_ngcontent-%COMP%]:hover   .audience__content[_ngcontent-%COMP%] {\n  transform: translateY(-4px);\n  background: rgba(13, 20, 51, 0.45);\n}\n.audience__eyebrow[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--fs-xs);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  color: rgba(255, 255, 255, 0.75);\n}\n.audience__title[_ngcontent-%COMP%] {\n  font-size: var(--fs-4xl);\n  color: #fff;\n}\n.audience__text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: var(--fs-base);\n}\n.audience__cta[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n}\n.audience__cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  transition: transform var(--transition);\n}\n.audience__cta[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n/*# sourceMappingURL=audience-split.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AudienceSplitComponent, [{
    type: Component,
    args: [{ selector: "app-audience-split", standalone: true, imports: [RouterLink], template: '<!-- Split Empresa (vermelho) | Profissional (azul), com arcos conc\xEAntricos\n     nascendo das bordas externas em dire\xE7\xE3o ao centro, ecoando as cores do logo -->\n<section class="audience">\n\n  <a routerLink="/empresa" class="audience__panel audience__panel--red">\n    <div class="audience__arcs" aria-hidden="true">\n      <span class="audience__arc audience__arc--red-900"></span>\n      <span class="audience__arc audience__arc--red-700"></span>\n      <span class="audience__arc audience__arc--red-500"></span>\n      <span class="audience__arc audience__arc--red-300"></span>\n      <span class="audience__arc audience__arc--red-100"></span>\n    </div>\n\n    <div class="audience__content">\n      <span class="audience__eyebrow">Solu\xE7\xF5es corporativas</span>\n      <h2 class="audience__title">Empresa</h2>\n      <p class="audience__text">\n        Programas de treinamento e desenvolvimento para elevar a performance\n        e o engajamento das suas equipes.\n      </p>\n      <span class="btn btn--outline-white btn--pill audience__cta">\n        Conhecer solu\xE7\xF5es\n        <i class="fas fa-arrow-right"></i>\n      </span>\n    </div>\n  </a>\n\n  <div class="audience__divider" aria-hidden="true"></div>\n\n  <a routerLink="/profissional" class="audience__panel audience__panel--blue">\n    <div class="audience__arcs" aria-hidden="true">\n      <span class="audience__arc audience__arc--blue-900"></span>\n      <span class="audience__arc audience__arc--blue-700"></span>\n      <span class="audience__arc audience__arc--blue-500"></span>\n      <span class="audience__arc audience__arc--blue-300"></span>\n      <span class="audience__arc audience__arc--blue-100"></span>\n    </div>\n\n    <div class="audience__content">\n      <span class="audience__eyebrow">Desenvolvimento pessoal</span>\n      <h2 class="audience__title">Profissional</h2>\n      <p class="audience__text">\n        Conte\xFAdos, mentorias e o teste DISC para impulsionar sua carreira\n        e o seu autoconhecimento.\n      </p>\n      <span class="btn btn--outline-white btn--pill audience__cta">\n        Conhecer conte\xFAdos\n        <i class="fas fa-arrow-right"></i>\n      </span>\n    </div>\n  </a>\n\n</section>\n', styles: ["/* src/app/features/home/components/audience-split.component.scss */\n.audience {\n  display: flex;\n  min-height: 620px;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .audience {\n    flex-direction: column;\n    min-height: auto;\n  }\n}\n.audience__divider {\n  width: 4px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--color-blue-200),\n      #c8c8c8,\n      var(--color-red-200));\n}\n@media (max-width: 768px) {\n  .audience__divider {\n    width: 100%;\n    height: 4px;\n  }\n}\n.audience__panel {\n  position: relative;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  padding: var(--space-16) var(--space-8);\n  text-decoration: none;\n  min-height: 480px;\n}\n@media (max-width: 768px) {\n  .audience__panel {\n    min-height: 420px;\n    padding: var(--space-12) var(--space-6);\n  }\n}\n.audience__arcs {\n  position: absolute;\n  inset: 0;\n}\n.audience__arc {\n  position: absolute;\n  top: -10%;\n  bottom: -10%;\n  transition: transform var(--transition);\n}\n.audience__panel--red .audience__arc {\n  left: 0;\n  border-radius: 0 999px 999px 0;\n}\n.audience__panel--red .audience__arc--red-900 {\n  width: 100%;\n  background: var(--color-red-900);\n}\n.audience__panel--red .audience__arc--red-700 {\n  width: 80%;\n  background: var(--color-red-700);\n}\n.audience__panel--red .audience__arc--red-500 {\n  width: 60%;\n  background: var(--color-red-500);\n}\n.audience__panel--red .audience__arc--red-300 {\n  width: 40%;\n  background: var(--color-red-300);\n}\n.audience__panel--red .audience__arc--red-100 {\n  width: 20%;\n  background: var(--color-red-100);\n}\n.audience__panel--red:hover .audience__arc {\n  transform: translateX(4%);\n}\n.audience__panel--blue .audience__arc {\n  right: 0;\n  border-radius: 999px 0 0 999px;\n}\n.audience__panel--blue .audience__arc--blue-900 {\n  width: 100%;\n  background: var(--color-blue-900);\n}\n.audience__panel--blue .audience__arc--blue-700 {\n  width: 80%;\n  background: var(--color-blue-700);\n}\n.audience__panel--blue .audience__arc--blue-500 {\n  width: 60%;\n  background: var(--color-blue-500);\n}\n.audience__panel--blue .audience__arc--blue-300 {\n  width: 40%;\n  background: var(--color-blue-300);\n}\n.audience__panel--blue .audience__arc--blue-100 {\n  width: 20%;\n  background: var(--color-blue-100);\n}\n.audience__panel--blue:hover .audience__arc {\n  transform: translateX(-4%);\n}\n.audience__content {\n  position: relative;\n  z-index: 1;\n  max-width: 380px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-8);\n  border-radius: var(--radius-xl);\n  background: rgba(13, 20, 51, 0.35);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  transition: transform var(--transition), background var(--transition);\n}\n.audience__panel:hover .audience__content {\n  transform: translateY(-4px);\n  background: rgba(13, 20, 51, 0.45);\n}\n.audience__eyebrow {\n  font-family: var(--font-heading);\n  font-size: var(--fs-xs);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  color: rgba(255, 255, 255, 0.75);\n}\n.audience__title {\n  font-size: var(--fs-4xl);\n  color: #fff;\n}\n.audience__text {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: var(--fs-base);\n}\n.audience__cta {\n  margin-top: var(--space-3);\n}\n.audience__cta i {\n  font-size: 0.75em;\n  transition: transform var(--transition);\n}\n.audience__cta:hover i {\n  transform: translateX(3px);\n}\n/*# sourceMappingURL=audience-split.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AudienceSplitComponent, { className: "AudienceSplitComponent" });
})();

// src/app/features/home/components/about-mauricio.component.ts
var AboutMauricioComponent = class _AboutMauricioComponent {
  static {
    this.\u0275fac = function AboutMauricioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutMauricioComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutMauricioComponent, selectors: [["app-about-mauricio"]], decls: 29, vars: 0, consts: [[1, "about-mauricio", "section"], [1, "container"], [1, "mauricio-card"], [1, "mauricio-card__photo"], ["src", "assets/images/foto-mauricio/0001.jpg", "alt", "Maur\xEDcio, fundador da PactoRH"], [1, "mauricio-card__body"], [1, "section-tag"], [1, "mauricio-card__title"], [1, "text-red"], [1, "mauricio-card__text"], ["routerLink", "/sobre", 1, "btn", "btn--outline-white", "btn--pill"], [1, "fas", "fa-arrow-right"], ["aria-hidden", "true", 1, "brand-divider"], [1, "brand-divider__bar", "brand-divider__bar--blue-900"], [1, "brand-divider__bar", "brand-divider__bar--blue-700"], [1, "brand-divider__bar", "brand-divider__bar--blue-500"], [1, "brand-divider__bar", "brand-divider__bar--blue-300"], [1, "brand-divider__bar", "brand-divider__bar--blue-100"], [1, "brand-divider__bar", "brand-divider__bar--neutral"], [1, "brand-divider__bar", "brand-divider__bar--red-100"], [1, "brand-divider__bar", "brand-divider__bar--red-300"], [1, "brand-divider__bar", "brand-divider__bar--red-500"], [1, "brand-divider__bar", "brand-divider__bar--red-700"], [1, "brand-divider__bar", "brand-divider__bar--red-900"]], template: function AboutMauricioComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7, "Sobre o fundador");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h2", 7);
        \u0275\u0275text(9, " Maur\xEDcio ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "Pacto");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "p", 9);
        \u0275\u0275text(13, " Com mais de duas d\xE9cadas de atua\xE7\xE3o em Gest\xE3o de Pessoas, Maur\xEDcio fundou a PactoRH para unir experi\xEAncia corporativa e desenvolvimento humano em um s\xF3 prop\xF3sito: ajudar empresas e profissionais a alcan\xE7arem seu potencial m\xE1ximo atrav\xE9s de treinamentos pr\xE1ticos, mentorias e ferramentas de autoconhecimento como o teste DISC. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 10);
        \u0275\u0275text(15, " Conhecer a hist\xF3ria ");
        \u0275\u0275element(16, "i", 11);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "div", 12);
        \u0275\u0275element(18, "span", 13)(19, "span", 14)(20, "span", 15)(21, "span", 16)(22, "span", 17)(23, "span", 18)(24, "span", 19)(25, "span", 20)(26, "span", 21)(27, "span", 22)(28, "span", 23);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterLink], styles: ["\n\n.about-mauricio[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n}\n.mauricio-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  background: var(--color-bg-dark);\n  border-radius: var(--radius-2xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n@media (max-width: 768px) {\n  .mauricio-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.mauricio-card__photo[_ngcontent-%COMP%] {\n  flex: 0 0 40%;\n  min-height: 360px;\n}\n.mauricio-card__photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n@media (max-width: 768px) {\n  .mauricio-card__photo[_ngcontent-%COMP%] {\n    min-height: 320px;\n  }\n}\n.mauricio-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: var(--space-4);\n  padding: var(--space-12);\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .mauricio-card__body[_ngcontent-%COMP%] {\n    padding: var(--space-8);\n  }\n}\n.mauricio-card__title[_ngcontent-%COMP%] {\n  font-size: clamp(var(--fs-2xl), 3vw, var(--fs-3xl));\n  color: #fff;\n}\n.mauricio-card__text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: var(--fs-md);\n  line-height: 1.8;\n}\n.brand-divider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-width: 1000px;\n  margin: var(--space-16) auto 0;\n  padding-inline: var(--space-6);\n}\n.brand-divider__bar[_ngcontent-%COMP%] {\n  height: 20px;\n  border-radius: var(--radius-pill);\n  opacity: 0.92;\n}\n.brand-divider__bar--blue-900[_ngcontent-%COMP%] {\n  background: var(--color-blue-900);\n}\n.brand-divider__bar--blue-700[_ngcontent-%COMP%] {\n  background: var(--color-blue-700);\n}\n.brand-divider__bar--blue-500[_ngcontent-%COMP%] {\n  background: var(--color-blue-500);\n}\n.brand-divider__bar--blue-300[_ngcontent-%COMP%] {\n  background: var(--color-blue-300);\n}\n.brand-divider__bar--blue-100[_ngcontent-%COMP%] {\n  background: var(--color-blue-100);\n}\n.brand-divider__bar--neutral[_ngcontent-%COMP%] {\n  background: #c8c8c8;\n}\n.brand-divider__bar--red-100[_ngcontent-%COMP%] {\n  background: var(--color-red-100);\n}\n.brand-divider__bar--red-300[_ngcontent-%COMP%] {\n  background: var(--color-red-300);\n}\n.brand-divider__bar--red-500[_ngcontent-%COMP%] {\n  background: var(--color-red-500);\n}\n.brand-divider__bar--red-700[_ngcontent-%COMP%] {\n  background: var(--color-red-700);\n}\n.brand-divider__bar--red-900[_ngcontent-%COMP%] {\n  background: var(--color-red-900);\n}\n/*# sourceMappingURL=about-mauricio.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutMauricioComponent, [{
    type: Component,
    args: [{ selector: "app-about-mauricio", standalone: true, imports: [RouterLink], template: '<!-- Bio do fundador em card escuro + divisor decorativo de c\xE1psulas\n     que faz a transi\xE7\xE3o de cor (azul \u2192 vermelho) at\xE9 a pr\xF3xima se\xE7\xE3o -->\n<section class="about-mauricio section">\n  <div class="container">\n    <div class="mauricio-card">\n\n      <div class="mauricio-card__photo">\n        <img\n          src="assets/images/foto-mauricio/0001.jpg"\n          alt="Maur\xEDcio, fundador da PactoRH"\n        />\n      </div>\n\n      <div class="mauricio-card__body">\n        <span class="section-tag">Sobre o fundador</span>\n        <h2 class="mauricio-card__title">\n          Maur\xEDcio <span class="text-red">Pacto</span>\n        </h2>\n        <p class="mauricio-card__text">\n          Com mais de duas d\xE9cadas de atua\xE7\xE3o em Gest\xE3o de Pessoas, Maur\xEDcio\n          fundou a PactoRH para unir experi\xEAncia corporativa e desenvolvimento\n          humano em um s\xF3 prop\xF3sito: ajudar empresas e profissionais a\n          alcan\xE7arem seu potencial m\xE1ximo atrav\xE9s de treinamentos pr\xE1ticos,\n          mentorias e ferramentas de autoconhecimento como o teste DISC.\n        </p>\n        <a routerLink="/sobre" class="btn btn--outline-white btn--pill">\n          Conhecer a hist\xF3ria\n          <i class="fas fa-arrow-right"></i>\n        </a>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- Divisor decorativo: c\xE1psulas em degrad\xEA azul \u2192 vermelho -->\n  <div class="brand-divider" aria-hidden="true">\n    <span class="brand-divider__bar brand-divider__bar--blue-900"></span>\n    <span class="brand-divider__bar brand-divider__bar--blue-700"></span>\n    <span class="brand-divider__bar brand-divider__bar--blue-500"></span>\n    <span class="brand-divider__bar brand-divider__bar--blue-300"></span>\n    <span class="brand-divider__bar brand-divider__bar--blue-100"></span>\n    <span class="brand-divider__bar brand-divider__bar--neutral"></span>\n    <span class="brand-divider__bar brand-divider__bar--red-100"></span>\n    <span class="brand-divider__bar brand-divider__bar--red-300"></span>\n    <span class="brand-divider__bar brand-divider__bar--red-500"></span>\n    <span class="brand-divider__bar brand-divider__bar--red-700"></span>\n    <span class="brand-divider__bar brand-divider__bar--red-900"></span>\n  </div>\n</section>\n', styles: ["/* src/app/features/home/components/about-mauricio.component.scss */\n.about-mauricio {\n  background: var(--color-bg);\n}\n.mauricio-card {\n  display: flex;\n  align-items: stretch;\n  background: var(--color-bg-dark);\n  border-radius: var(--radius-2xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n@media (max-width: 768px) {\n  .mauricio-card {\n    flex-direction: column;\n  }\n}\n.mauricio-card__photo {\n  flex: 0 0 40%;\n  min-height: 360px;\n}\n.mauricio-card__photo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n@media (max-width: 768px) {\n  .mauricio-card__photo {\n    min-height: 320px;\n  }\n}\n.mauricio-card__body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: var(--space-4);\n  padding: var(--space-12);\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .mauricio-card__body {\n    padding: var(--space-8);\n  }\n}\n.mauricio-card__title {\n  font-size: clamp(var(--fs-2xl), 3vw, var(--fs-3xl));\n  color: #fff;\n}\n.mauricio-card__text {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: var(--fs-md);\n  line-height: 1.8;\n}\n.brand-divider {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-width: 1000px;\n  margin: var(--space-16) auto 0;\n  padding-inline: var(--space-6);\n}\n.brand-divider__bar {\n  height: 20px;\n  border-radius: var(--radius-pill);\n  opacity: 0.92;\n}\n.brand-divider__bar--blue-900 {\n  background: var(--color-blue-900);\n}\n.brand-divider__bar--blue-700 {\n  background: var(--color-blue-700);\n}\n.brand-divider__bar--blue-500 {\n  background: var(--color-blue-500);\n}\n.brand-divider__bar--blue-300 {\n  background: var(--color-blue-300);\n}\n.brand-divider__bar--blue-100 {\n  background: var(--color-blue-100);\n}\n.brand-divider__bar--neutral {\n  background: #c8c8c8;\n}\n.brand-divider__bar--red-100 {\n  background: var(--color-red-100);\n}\n.brand-divider__bar--red-300 {\n  background: var(--color-red-300);\n}\n.brand-divider__bar--red-500 {\n  background: var(--color-red-500);\n}\n.brand-divider__bar--red-700 {\n  background: var(--color-red-700);\n}\n.brand-divider__bar--red-900 {\n  background: var(--color-red-900);\n}\n/*# sourceMappingURL=about-mauricio.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutMauricioComponent, { className: "AboutMauricioComponent" });
})();

// src/app/features/home/components/testimonials.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.name;
function TestimonialsComponent_For_13_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 23);
  }
}
function TestimonialsComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275element(2, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 22);
    \u0275\u0275repeaterCreate(14, TestimonialsComponent_For_13_For_15_Template, 1, 0, "i", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const \u0275$index_21_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("testimonial-card--active", ctx_r2.activeIndex() === \u0275$index_21_r2)("testimonial-card--prev", ctx_r2.activeIndex() === \u0275$index_21_r2 + 1 || ctx_r2.activeIndex() === 0 && \u0275$index_21_r2 === ctx_r2.testimonials.length - 1)("testimonial-card--next", ctx_r2.activeIndex() === \u0275$index_21_r2 - 1 || ctx_r2.activeIndex() === ctx_r2.testimonials.length - 1 && \u0275$index_21_r2 === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1.text);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("testimonial-card__avatar--" + t_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r1.initials, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r1.role, " \xB7 ", t_r1.company, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(13, _c0));
  }
}
function TestimonialsComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function TestimonialsComponent_For_19_Template_button_click_0_listener() {
      const \u0275$index_57_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(\u0275$index_57_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_57_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("testimonials__dot--active", ctx_r2.activeIndex() === \u0275$index_57_r5);
    \u0275\u0275attribute("aria-label", "Ir para depoimento " + (\u0275$index_57_r5 + 1));
  }
}
var TestimonialsComponent = class _TestimonialsComponent {
  constructor() {
    this.activeIndex = signal(0);
    this.testimonials = [
      {
        name: "Carlos Eduardo Silva",
        role: "Diretor de RH",
        company: "Grupo \xD4mega",
        text: "O treinamento da Pacto RH transformou nossa cultura organizacional. Em 6 meses, nossa taxa de reten\xE7\xE3o aumentou 40% e o engajamento das equipes atingiu o maior \xEDndice da nossa hist\xF3ria.",
        initials: "CE",
        color: "blue"
      },
      {
        name: "Fernanda Rodrigues",
        role: "CEO",
        company: "TechStart Brasil",
        text: "O processo de coaching com o Maur\xEDcio foi divisor de \xE1guas na minha carreira. Aprendi a liderar com prop\xF3sito e hoje consigo extrair o melhor de cada pessoa do meu time.",
        initials: "FR",
        color: "red"
      },
      {
        name: "Ricardo Moraes",
        role: "Gerente Comercial",
        company: "Construtora Horizonte",
        text: "A palestra motivacional superou todas as expectativas. A equipe saiu completamente diferente \u2014 mais unida, motivada e com metas claras. Recomendo para qualquer empresa.",
        initials: "RM",
        color: "blue"
      },
      {
        name: "Ana Paula Costa",
        role: "Coordenadora de T&D",
        company: "Rede Sa\xFAde Prime",
        text: "Aplicamos o Teste DISC em toda a lideran\xE7a e os resultados foram surpreendentes. Conflitos diminu\xEDram, a comunica\xE7\xE3o melhorou e os projetos passaram a ser entregues no prazo.",
        initials: "AP",
        color: "red"
      },
      {
        name: "Marcos Oliveira",
        role: "S\xF3cio-Fundador",
        company: "Advocacia Oliveira & Associados",
        text: "Investir na Pacto RH foi a melhor decis\xE3o para o escrit\xF3rio. O programa de desenvolvimento de lideran\xE7as elevou o n\xEDvel de toda a equipe gestora em poucos meses.",
        initials: "MO",
        color: "blue"
      }
    ];
  }
  prev() {
    this.activeIndex.update((i) => i === 0 ? this.testimonials.length - 1 : i - 1);
  }
  next() {
    this.activeIndex.update((i) => i === this.testimonials.length - 1 ? 0 : i + 1);
  }
  goTo(index) {
    this.activeIndex.set(index);
  }
  static {
    this.\u0275fac = function TestimonialsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TestimonialsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialsComponent, selectors: [["app-testimonials"]], decls: 22, vars: 0, consts: [[1, "testimonials", "section", "section--dark"], [1, "container"], [1, "section-header", "section-header--center"], [1, "section-tag", 2, "color", "rgba(255,255,255,0.7)"], [1, "section-title"], [1, "section-subtitle"], [1, "testimonials__carousel"], [1, "testimonial-card", 3, "testimonial-card--active", "testimonial-card--prev", "testimonial-card--next"], [1, "testimonials__controls"], ["aria-label", "Anterior", 1, "testimonials__btn", 3, "click"], [1, "fas", "fa-chevron-left"], [1, "testimonials__dots"], [1, "testimonials__dot", 3, "testimonials__dot--active"], ["aria-label", "Pr\xF3ximo", 1, "testimonials__btn", 3, "click"], [1, "fas", "fa-chevron-right"], [1, "testimonial-card"], [1, "testimonial-card__quote"], [1, "fas", "fa-quote-left"], [1, "testimonial-card__text"], [1, "testimonial-card__author"], [1, "testimonial-card__avatar"], [1, "testimonial-card__info"], [1, "testimonial-card__stars"], [1, "fas", "fa-star"], [1, "testimonials__dot", 3, "click"]], template: function TestimonialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Depoimentos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2", 4);
        \u0275\u0275text(6, " O que nossos clientes ");
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "dizem");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10, " Mais de 500 empresas j\xE1 transformaram suas equipes com a Pacto RH. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275repeaterCreate(12, TestimonialsComponent_For_13_Template, 16, 14, "div", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
        \u0275\u0275listener("click", function TestimonialsComponent_Template_button_click_15_listener() {
          return ctx.prev();
        });
        \u0275\u0275element(16, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11);
        \u0275\u0275repeaterCreate(18, TestimonialsComponent_For_19_Template, 1, 3, "button", 12, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 13);
        \u0275\u0275listener("click", function TestimonialsComponent_Template_button_click_20_listener() {
          return ctx.next();
        });
        \u0275\u0275element(21, "i", 14);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.testimonials);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.testimonials);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.testimonials__carousel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 320px;\n  margin-bottom: var(--space-8);\n}\n@media (max-width: 768px) {\n  .testimonials__carousel[_ngcontent-%COMP%] {\n    height: 420px;\n  }\n}\n@media (max-width: 480px) {\n  .testimonials__carousel[_ngcontent-%COMP%] {\n    height: 480px;\n  }\n}\n.testimonials__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-6);\n}\n.testimonials__btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.7);\n  font-size: var(--fs-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all var(--transition);\n  cursor: pointer;\n  background: transparent;\n}\n.testimonials__btn[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.1);\n}\n.testimonials__dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.testimonials__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition);\n  padding: 0;\n}\n.testimonials__dot--active[_ngcontent-%COMP%] {\n  background: var(--color-red);\n  width: 24px;\n  border-radius: var(--radius-pill);\n}\n.testimonials__dot[_ngcontent-%COMP%]:hover:not(.testimonials__dot--active) {\n  background: rgba(255, 255, 255, 0.5);\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-2xl);\n  padding: var(--space-10);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  opacity: 0;\n  transform: translateX(40px) scale(0.96);\n  transition: all 0.45s ease;\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .testimonial-card[_ngcontent-%COMP%] {\n    padding: var(--space-6);\n  }\n}\n.testimonial-card--active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0) scale(1);\n  pointer-events: all;\n  z-index: 2;\n}\n.testimonial-card--prev[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(-40px) scale(0.96);\n}\n.testimonial-card__quote[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--color-red);\n  opacity: 0.6;\n  margin-bottom: var(--space-4);\n  line-height: 1;\n}\n.testimonial-card__text[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  color: rgba(255, 255, 255, 0.88);\n  line-height: 1.75;\n  flex: 1;\n  font-style: italic;\n}\n@media (max-width: 768px) {\n  .testimonial-card__text[_ngcontent-%COMP%] {\n    font-size: var(--fs-base);\n  }\n}\n.testimonial-card__author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  margin-top: var(--space-6);\n  padding-top: var(--space-6);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n@media (max-width: 480px) {\n  .testimonial-card__author[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.testimonial-card__avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-heading);\n  font-size: var(--fs-md);\n  font-weight: 800;\n  flex-shrink: 0;\n  color: #fff;\n}\n.testimonial-card__avatar--blue[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n.testimonial-card__avatar--red[_ngcontent-%COMP%] {\n  background: var(--color-red);\n}\n.testimonial-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.testimonial-card__info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  color: #fff;\n}\n.testimonial-card__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: rgba(255, 255, 255, 0.55);\n}\n.testimonial-card__stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  color: var(--color-red-400);\n  font-size: var(--fs-xs);\n}\n/*# sourceMappingURL=testimonials.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialsComponent, [{
    type: Component,
    args: [{ selector: "app-testimonials", standalone: true, imports: [CommonModule], template: `<section class="testimonials section section--dark">\r
  <div class="container">\r
\r
    <div class="section-header section-header--center">\r
      <span class="section-tag" style="color: rgba(255,255,255,0.7)">Depoimentos</span>\r
      <h2 class="section-title">\r
        O que nossos clientes <span>dizem</span>\r
      </h2>\r
      <p class="section-subtitle">\r
        Mais de 500 empresas j\xE1 transformaram suas equipes com a Pacto RH.\r
      </p>\r
    </div>\r
\r
    <!-- Carrossel -->\r
    <div class="testimonials__carousel">\r
\r
      @for (t of testimonials; track t.name; let i = $index) {\r
        <div\r
          class="testimonial-card"\r
          [class.testimonial-card--active]="activeIndex() === i"\r
          [class.testimonial-card--prev]="activeIndex() === i + 1 || (activeIndex() === 0 && i === testimonials.length - 1)"\r
          [class.testimonial-card--next]="activeIndex() === i - 1 || (activeIndex() === testimonials.length - 1 && i === 0)"\r
        >\r
          <!-- Aspas decorativas -->\r
          <div class="testimonial-card__quote">\r
            <i class="fas fa-quote-left"></i>\r
          </div>\r
\r
          <p class="testimonial-card__text">{{ t.text }}</p>\r
\r
          <div class="testimonial-card__author">\r
            <div class="testimonial-card__avatar" [class]="'testimonial-card__avatar--' + t.color">\r
              {{ t.initials }}\r
            </div>\r
            <div class="testimonial-card__info">\r
              <strong>{{ t.name }}</strong>\r
              <span>{{ t.role }} \xB7 {{ t.company }}</span>\r
            </div>\r
            <div class="testimonial-card__stars">\r
              @for (star of [1,2,3,4,5]; track star) {\r
                <i class="fas fa-star"></i>\r
              }\r
            </div>\r
          </div>\r
        </div>\r
      }\r
\r
    </div>\r
\r
    <!-- Controles -->\r
    <div class="testimonials__controls">\r
      <button class="testimonials__btn" (click)="prev()" aria-label="Anterior">\r
        <i class="fas fa-chevron-left"></i>\r
      </button>\r
\r
      <div class="testimonials__dots">\r
        @for (t of testimonials; track t.name; let i = $index) {\r
          <button\r
            class="testimonials__dot"\r
            [class.testimonials__dot--active]="activeIndex() === i"\r
            (click)="goTo(i)"\r
            [attr.aria-label]="'Ir para depoimento ' + (i + 1)"\r
          ></button>\r
        }\r
      </div>\r
\r
      <button class="testimonials__btn" (click)="next()" aria-label="Pr\xF3ximo">\r
        <i class="fas fa-chevron-right"></i>\r
      </button>\r
    </div>\r
\r
  </div>\r
</section>`, styles: ["/* src/app/features/home/components/testimonials.component.scss */\n.testimonials__carousel {\n  position: relative;\n  height: 320px;\n  margin-bottom: var(--space-8);\n}\n@media (max-width: 768px) {\n  .testimonials__carousel {\n    height: 420px;\n  }\n}\n@media (max-width: 480px) {\n  .testimonials__carousel {\n    height: 480px;\n  }\n}\n.testimonials__controls {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-6);\n}\n.testimonials__btn {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.7);\n  font-size: var(--fs-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all var(--transition);\n  cursor: pointer;\n  background: transparent;\n}\n.testimonials__btn:hover {\n  border-color: #fff;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.1);\n}\n.testimonials__dots {\n  display: flex;\n  gap: var(--space-2);\n}\n.testimonials__dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: none;\n  cursor: pointer;\n  transition: all var(--transition);\n  padding: 0;\n}\n.testimonials__dot--active {\n  background: var(--color-red);\n  width: 24px;\n  border-radius: var(--radius-pill);\n}\n.testimonials__dot:hover:not(.testimonials__dot--active) {\n  background: rgba(255, 255, 255, 0.5);\n}\n.testimonial-card {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-2xl);\n  padding: var(--space-10);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  opacity: 0;\n  transform: translateX(40px) scale(0.96);\n  transition: all 0.45s ease;\n  pointer-events: none;\n}\n@media (max-width: 768px) {\n  .testimonial-card {\n    padding: var(--space-6);\n  }\n}\n.testimonial-card--active {\n  opacity: 1;\n  transform: translateX(0) scale(1);\n  pointer-events: all;\n  z-index: 2;\n}\n.testimonial-card--prev {\n  opacity: 0;\n  transform: translateX(-40px) scale(0.96);\n}\n.testimonial-card__quote {\n  font-size: 2rem;\n  color: var(--color-red);\n  opacity: 0.6;\n  margin-bottom: var(--space-4);\n  line-height: 1;\n}\n.testimonial-card__text {\n  font-size: var(--fs-md);\n  color: rgba(255, 255, 255, 0.88);\n  line-height: 1.75;\n  flex: 1;\n  font-style: italic;\n}\n@media (max-width: 768px) {\n  .testimonial-card__text {\n    font-size: var(--fs-base);\n  }\n}\n.testimonial-card__author {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  margin-top: var(--space-6);\n  padding-top: var(--space-6);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n@media (max-width: 480px) {\n  .testimonial-card__author {\n    flex-wrap: wrap;\n  }\n}\n.testimonial-card__avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-heading);\n  font-size: var(--fs-md);\n  font-weight: 800;\n  flex-shrink: 0;\n  color: #fff;\n}\n.testimonial-card__avatar--blue {\n  background: var(--color-primary);\n}\n.testimonial-card__avatar--red {\n  background: var(--color-red);\n}\n.testimonial-card__info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.testimonial-card__info strong {\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  color: #fff;\n}\n.testimonial-card__info span {\n  font-size: var(--fs-xs);\n  color: rgba(255, 255, 255, 0.55);\n}\n.testimonial-card__stars {\n  display: flex;\n  gap: 3px;\n  color: var(--color-red-400);\n  font-size: var(--fs-xs);\n}\n/*# sourceMappingURL=testimonials.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialsComponent, { className: "TestimonialsComponent" });
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
        \u0275\u0275element(0, "app-hero")(1, "app-audience-split")(2, "app-about-mauricio")(3, "app-testimonials");
      }
    }, dependencies: [
      HeroComponent,
      AudienceSplitComponent,
      AboutMauricioComponent,
      TestimonialsComponent
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
        TestimonialsComponent
      ],
      template: `
    <app-hero />
    <app-audience-split />
    <app-about-mauricio />
    <app-testimonials />
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-ETU2CVXA.js.map
