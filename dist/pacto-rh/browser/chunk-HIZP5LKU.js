import {
  RouterLink,
  RouterOutlet
} from "./chunk-SIEP2TH5.js";
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-C3DF2WF3.js";

// src/app/layout/header.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function HeaderComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route)("fragment", item_r1.fragment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function HeaderComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function HeaderComponent_For_14_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobile());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.route)("fragment", item_r4.fragment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.navItems = [
      { label: "Home", route: "/", fragment: "home" },
      { label: "Solu\xE7\xF5es", route: "/", fragment: "solucoes" },
      { label: "Sobre", route: "/", fragment: "sobre" },
      { label: "DISC", route: "/disc" },
      { label: "Contato", route: "/", fragment: "contato" }
    ];
    this.isMobileOpen = signal(false);
  }
  toggleMobile() {
    this.isMobileOpen.update((v) => !v);
  }
  closeMobile() {
    this.isMobileOpen.set(false);
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 3, consts: [[1, "header"], [1, "container", "header__inner"], ["routerLink", "/", "fragment", "home", 1, "header__logo", 3, "click"], ["src", "assets/images/logo-pacto-rh/logo_preto_sem_nome_sem_fundo.png", "alt", "PactoRH", 1, "header__logo-img"], [1, "header__nav"], [1, "nav-link", 3, "routerLink", "fragment"], ["type", "button", "aria-label", "Menu", 1, "header__hamburger", 3, "click"], [1, "mobile-menu"], [1, "container"], [1, "mobile-menu__link", 3, "routerLink", "fragment"], [1, "mobile-menu__link", 3, "click", "routerLink", "fragment"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_2_listener() {
          return ctx.closeMobile();
        });
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 4);
        \u0275\u0275repeaterCreate(5, HeaderComponent_For_6_Template, 2, 3, "a", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_7_listener() {
          return ctx.toggleMobile();
        });
        \u0275\u0275element(8, "span")(9, "span")(10, "span");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "nav", 7)(12, "div", 8);
        \u0275\u0275repeaterCreate(13, HeaderComponent_For_14_Template, 2, 3, "a", 9, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-expanded", ctx.isMobileOpen());
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mobile-menu--open", ctx.isMobileOpen());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.navItems);
      }
    }, dependencies: [RouterLink], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  height: var(--navbar-height);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: saturate(180%) blur(8px);\n  backdrop-filter: saturate(180%) blur(8px);\n  border-bottom: 1px solid var(--color-border-light);\n}\n.header__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  gap: var(--space-6);\n}\n.header__logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  text-decoration: none;\n}\n.header__logo-img[_ngcontent-%COMP%] {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n}\n.header__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .header__nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header__hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 32px;\n  height: 32px;\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .header__hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.header__hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--color-text);\n  border-radius: 2px;\n  transition: transform var(--transition), opacity var(--transition);\n}\n.header__hamburger[aria-expanded=true][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.header__hamburger[aria-expanded=true][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.header__hamburger[aria-expanded=true][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--space-2) var(--space-4);\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  color: var(--color-text);\n  border-radius: var(--radius-md);\n  transition: color var(--transition), background var(--transition);\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%]:hover, \n.nav-link--active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  background: var(--color-blue-100);\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  background: var(--color-bg-white);\n  border-top: 1px solid var(--color-border-light);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  display: none;\n}\n@media (max-width: 768px) {\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.mobile-menu--open[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n.mobile-menu[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-block: var(--space-4);\n  display: flex;\n  flex-direction: column;\n}\n.mobile-menu__link[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--space-3) 0;\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  color: var(--color-text);\n  border-bottom: 1px solid var(--color-border-light);\n  text-decoration: none;\n  transition: color var(--transition);\n}\n.mobile-menu__link[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [RouterLink], template: '<!-- Navbar fixa, minimalista: logo \xE0 esquerda | nav central | hamburger \xE0 direita -->\n<header class="header">\n  <div class="container header__inner">\n\n    <a routerLink="/" fragment="home" class="header__logo" (click)="closeMobile()">\n      <img src="assets/images/logo-pacto-rh/logo_preto_sem_nome_sem_fundo.png"\n           alt="PactoRH"\n           class="header__logo-img" />\n    </a>\n\n    <nav class="header__nav">\n      @for (item of navItems; track item.label) {\n        <a\n          [routerLink]="item.route"\n          [fragment]="item.fragment"\n          class="nav-link"\n        >{{ item.label }}</a>\n      }\n    </nav>\n\n    <button\n      type="button"\n      class="header__hamburger"\n      (click)="toggleMobile()"\n      [attr.aria-expanded]="isMobileOpen()"\n      aria-label="Menu"\n    >\n      <span></span>\n      <span></span>\n      <span></span>\n    </button>\n\n  </div>\n\n  <nav class="mobile-menu" [class.mobile-menu--open]="isMobileOpen()">\n    <div class="container">\n      @for (item of navItems; track item.label) {\n        <a\n          [routerLink]="item.route"\n          [fragment]="item.fragment"\n          class="mobile-menu__link"\n          (click)="closeMobile()"\n        >{{ item.label }}</a>\n      }\n    </div>\n  </nav>\n</header>\n', styles: ["/* src/app/layout/header.component.scss */\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  height: var(--navbar-height);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: saturate(180%) blur(8px);\n  backdrop-filter: saturate(180%) blur(8px);\n  border-bottom: 1px solid var(--color-border-light);\n}\n.header__inner {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  gap: var(--space-6);\n}\n.header__logo {\n  flex-shrink: 0;\n  display: flex;\n  text-decoration: none;\n}\n.header__logo-img {\n  height: 34px;\n  width: auto;\n  object-fit: contain;\n}\n.header__nav {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .header__nav {\n    display: none;\n  }\n}\n.header__hamburger {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 32px;\n  height: 32px;\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .header__hamburger {\n    display: flex;\n  }\n}\n.header__hamburger span {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--color-text);\n  border-radius: 2px;\n  transition: transform var(--transition), opacity var(--transition);\n}\n.header__hamburger[aria-expanded=true] span:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.header__hamburger[aria-expanded=true] span:nth-child(2) {\n  opacity: 0;\n}\n.header__hamburger[aria-expanded=true] span:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n.nav-link {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--space-2) var(--space-4);\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  color: var(--color-text);\n  border-radius: var(--radius-md);\n  transition: color var(--transition), background var(--transition);\n  text-decoration: none;\n}\n.nav-link:hover,\n.nav-link--active {\n  color: var(--color-primary);\n  background: var(--color-blue-100);\n}\n.mobile-menu {\n  background: var(--color-bg-white);\n  border-top: 1px solid var(--color-border-light);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  display: none;\n}\n@media (max-width: 768px) {\n  .mobile-menu {\n    display: block;\n  }\n}\n.mobile-menu--open {\n  max-height: 400px;\n}\n.mobile-menu .container {\n  padding-block: var(--space-4);\n  display: flex;\n  flex-direction: column;\n}\n.mobile-menu__link {\n  display: block;\n  padding: var(--space-3) 0;\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  color: var(--color-text);\n  border-bottom: 1px solid var(--color-border-light);\n  text-decoration: none;\n  transition: color var(--transition);\n}\n.mobile-menu__link:hover {\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/layout/header.component.ts", lineNumber: 17 });
})();

// src/app/layout/footer.component.ts
var _forTrack02 = ($index, $item) => $item.label;
function FooterComponent_For_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", line_r1.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r1.label);
  }
}
function FooterComponent_For_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r1.label);
  }
}
function FooterComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i");
    \u0275\u0275template(2, FooterComponent_For_17_Conditional_2_Template, 2, 2, "a", 15)(3, FooterComponent_For_17_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(line_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r1.href ? 2 : 3);
  }
}
function FooterComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r2.route)("fragment", link_r2.fragment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r2.label);
  }
}
function FooterComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("href", s_r3.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", s_r3.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r3.icon);
  }
}
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.navLinks = [
      { label: "In\xEDcio", route: "/", fragment: "home" },
      { label: "Solu\xE7\xF5es", route: "/", fragment: "solucoes" },
      { label: "Empresas", route: "/empresa" },
      { label: "Profissionais", route: "/profissional" },
      { label: "Sobre", route: "/", fragment: "sobre" },
      { label: "Contato", route: "/", fragment: "contato" }
    ];
    this.contactLines = [
      { icon: "fas fa-envelope", label: "contato@pactorh.com.br", href: "mailto:contato@pactorh.com.br" },
      { icon: "fas fa-phone", label: "(11) 0000-0000", href: "tel:+551100000000" },
      { icon: "fab fa-whatsapp", label: "(11) 90000-0000", href: "https://wa.me/5511900000000" },
      { icon: "fas fa-map-marker-alt", label: "S\xE3o Paulo, SP" }
    ];
    this.socialLinks = [
      { label: "LinkedIn", icon: "fab fa-linkedin-in", href: "https://linkedin.com" },
      { label: "Instagram", icon: "fab fa-instagram", href: "https://instagram.com" },
      { label: "Facebook", icon: "fab fa-facebook-f", href: "https://facebook.com" },
      { label: "YouTube", icon: "fab fa-youtube", href: "https://youtube.com" }
    ];
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 33, vars: 1, consts: [["id", "contato", 1, "footer"], [1, "container"], [1, "footer__grid"], [1, "footer__brand"], ["routerLink", "/", "fragment", "home", 1, "footer__logo"], ["src", "assets/images/logo-pacto-rh/logo_preto_sem_nome_sem_fundo.png", "alt", "", 1, "footer__logo-icon"], [1, "footer__logo-text"], [1, "footer__tagline"], [1, "footer__col"], [1, "footer__col-title"], [1, "footer__list", "footer__list--contact"], [1, "footer__list"], [1, "footer__social"], ["target", "_blank", "rel", "noopener", 1, "social-link", 3, "href"], [1, "footer__bottom"], ["target", "_blank", "rel", "noopener", 1, "footer__link", 3, "href"], [1, "footer__link", 3, "routerLink", "fragment"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7, "Pacto");
        \u0275\u0275elementStart(8, "em");
        \u0275\u0275text(9, "RH");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11, " Transformando pessoas e organiza\xE7\xF5es atrav\xE9s do desenvolvimento humano, com treinamentos corporativos e ferramentas de autoconhecimento. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "h4", 9);
        \u0275\u0275text(14, "Contato");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "ul", 10);
        \u0275\u0275repeaterCreate(16, FooterComponent_For_17_Template, 4, 3, "li", null, _forTrack02);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 8)(19, "h4", 9);
        \u0275\u0275text(20, "Navega\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "ul", 11);
        \u0275\u0275repeaterCreate(22, FooterComponent_For_23_Template, 3, 3, "li", null, _forTrack02);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 8)(25, "h4", 9);
        \u0275\u0275text(26, "Redes sociais");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 12);
        \u0275\u0275repeaterCreate(28, FooterComponent_For_29_Template, 2, 4, "a", 13, _forTrack02);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 14)(31, "p");
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.contactLines);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.navLinks);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.socialLinks);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " PactoRH. Todos os direitos reservados.");
      }
    }, dependencies: [RouterLink], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark);\n  color: rgba(255, 255, 255, 0.75);\n  padding-top: var(--space-16);\n}\n.footer__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.8fr 1fr 1fr 1.2fr;\n  gap: var(--space-12);\n  padding-bottom: var(--space-12);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n@media (max-width: 1023px) {\n  .footer__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .footer__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-3);\n  text-decoration: none;\n  margin-bottom: var(--space-4);\n}\n.footer__logo-icon[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n  filter: brightness(0) invert(1);\n}\n.footer__logo-text[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #fff;\n}\n.footer__logo-text[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: var(--color-red-400);\n  font-style: normal;\n}\n.footer__tagline[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.6);\n  max-width: 280px;\n  margin-bottom: var(--space-6);\n}\n.footer__social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n}\n.footer__col-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: var(--space-5);\n}\n.footer__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.footer__list--contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n}\n.footer__list--contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-red-400);\n  margin-top: 3px;\n  width: 14px;\n  flex-shrink: 0;\n}\n.footer__list--contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.footer__link[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: rgba(255, 255, 255, 0.65);\n  text-decoration: none;\n  transition: color var(--transition), padding-left var(--transition);\n}\n.footer__link[_ngcontent-%COMP%]:hover {\n  color: var(--color-blue-300);\n  padding-left: var(--space-2);\n}\n.footer__bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: var(--space-6);\n  font-size: var(--fs-xs);\n  color: rgba(255, 255, 255, 0.4);\n}\n@media (max-width: 600px) {\n  .footer__bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: var(--space-2);\n    text-align: center;\n  }\n}\n.social-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: var(--radius-md);\n  background-color: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  font-size: var(--fs-sm);\n  transition: all var(--transition);\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: #fff;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink], template: '<footer class="footer" id="contato">\n  <div class="container">\n    <div class="footer__grid">\n\n      <!-- Coluna 1 \u2014 Marca -->\n      <div class="footer__brand">\n        <a routerLink="/" fragment="home" class="footer__logo">\n          <img\n            src="assets/images/logo-pacto-rh/logo_preto_sem_nome_sem_fundo.png"\n            alt=""\n            class="footer__logo-icon"\n          />\n          <span class="footer__logo-text">Pacto<em>RH</em></span>\n        </a>\n        <p class="footer__tagline">\n          Transformando pessoas e organiza\xE7\xF5es atrav\xE9s do desenvolvimento\n          humano, com treinamentos corporativos e ferramentas de\n          autoconhecimento.\n        </p>\n      </div>\n\n      <!-- Coluna 2 \u2014 Contato -->\n      <div class="footer__col">\n        <h4 class="footer__col-title">Contato</h4>\n        <ul class="footer__list footer__list--contact">\n          @for (line of contactLines; track line.label) {\n            <li>\n              <i [class]="line.icon"></i>\n              @if (line.href) {\n                <a [href]="line.href" class="footer__link" target="_blank" rel="noopener">{{ line.label }}</a>\n              } @else {\n                <span>{{ line.label }}</span>\n              }\n            </li>\n          }\n        </ul>\n      </div>\n\n      <!-- Coluna 3 \u2014 Navega\xE7\xE3o -->\n      <div class="footer__col">\n        <h4 class="footer__col-title">Navega\xE7\xE3o</h4>\n        <ul class="footer__list">\n          @for (link of navLinks; track link.label) {\n            <li>\n              <a [routerLink]="link.route" [fragment]="link.fragment" class="footer__link">{{ link.label }}</a>\n            </li>\n          }\n        </ul>\n      </div>\n\n      <!-- Coluna 4 \u2014 Redes sociais -->\n      <div class="footer__col">\n        <h4 class="footer__col-title">Redes sociais</h4>\n        <div class="footer__social">\n          @for (s of socialLinks; track s.label) {\n            <a [href]="s.href" target="_blank" rel="noopener" class="social-link" [attr.aria-label]="s.label">\n              <i [class]="s.icon"></i>\n            </a>\n          }\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Bottom bar -->\n    <div class="footer__bottom">\n      <p>&copy; {{ currentYear }} PactoRH. Todos os direitos reservados.</p>\n    </div>\n  </div>\n</footer>\n', styles: ["/* src/app/layout/footer.component.scss */\n.footer {\n  background-color: var(--color-bg-dark);\n  color: rgba(255, 255, 255, 0.75);\n  padding-top: var(--space-16);\n}\n.footer__grid {\n  display: grid;\n  grid-template-columns: 1.8fr 1fr 1fr 1.2fr;\n  gap: var(--space-12);\n  padding-bottom: var(--space-12);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n@media (max-width: 1023px) {\n  .footer__grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .footer__grid {\n    grid-template-columns: 1fr;\n  }\n}\n.footer__logo {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-3);\n  text-decoration: none;\n  margin-bottom: var(--space-4);\n}\n.footer__logo-icon {\n  height: 40px;\n  width: auto;\n  filter: brightness(0) invert(1);\n}\n.footer__logo-text {\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #fff;\n}\n.footer__logo-text em {\n  color: var(--color-red-400);\n  font-style: normal;\n}\n.footer__tagline {\n  font-size: var(--fs-sm);\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.6);\n  max-width: 280px;\n  margin-bottom: var(--space-6);\n}\n.footer__social {\n  display: flex;\n  gap: var(--space-3);\n}\n.footer__col-title {\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: var(--space-5);\n}\n.footer__list {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.footer__list--contact li {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n}\n.footer__list--contact li i {\n  color: var(--color-red-400);\n  margin-top: 3px;\n  width: 14px;\n  flex-shrink: 0;\n}\n.footer__list--contact li span {\n  font-size: var(--fs-sm);\n}\n.footer__link {\n  font-size: var(--fs-sm);\n  color: rgba(255, 255, 255, 0.65);\n  text-decoration: none;\n  transition: color var(--transition), padding-left var(--transition);\n}\n.footer__link:hover {\n  color: var(--color-blue-300);\n  padding-left: var(--space-2);\n}\n.footer__bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: var(--space-6);\n  font-size: var(--fs-xs);\n  color: rgba(255, 255, 255, 0.4);\n}\n@media (max-width: 600px) {\n  .footer__bottom {\n    flex-direction: column;\n    gap: var(--space-2);\n    text-align: center;\n  }\n}\n.social-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: var(--radius-md);\n  background-color: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  font-size: var(--fs-sm);\n  transition: all var(--transition);\n}\n.social-link:hover {\n  background-color: var(--color-primary);\n  color: #fff;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/layout/footer.component.ts", lineNumber: 29 });
})();

// src/app/layout/public-layout.component.ts
var PublicLayoutComponent = class _PublicLayoutComponent {
  static {
    this.\u0275fac = function PublicLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLayoutComponent, selectors: [["app-public-layout"]], decls: 4, vars: 0, template: function PublicLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "main");
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "app-footer");
      }
    }, dependencies: [RouterOutlet, HeaderComponent, FooterComponent], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  min-height: calc(100vh - var(--navbar-height));\n}\n/*# sourceMappingURL=public-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-public-layout", standalone: true, imports: [RouterOutlet, HeaderComponent, FooterComponent], template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `, styles: ["/* angular:styles/component:scss;ae81bec21444af478934cb73708397e3ff1e8d70891aa9cfb44c6642213a6abf;C:/Users/vieir/OneDrive/dev/profissional/sites/Pacto-rh/src/app/layout/public-layout.component.ts */\nmain {\n  min-height: calc(100vh - var(--navbar-height));\n}\n/*# sourceMappingURL=public-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayoutComponent, { className: "PublicLayoutComponent", filePath: "src/app/layout/public-layout.component.ts", lineNumber: 23 });
})();
export {
  PublicLayoutComponent
};
//# sourceMappingURL=chunk-HIZP5LKU.js.map
