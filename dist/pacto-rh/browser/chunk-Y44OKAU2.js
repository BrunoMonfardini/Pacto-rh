import {
  CommonModule,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
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
} from "./chunk-DCGTXMYS.js";

// src/app/layout/header.component.ts
function HeaderComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "a", 22);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_9_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275text(2, "Para Empresas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 23);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_9_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275text(4, "Para Profissionais");
    \u0275\u0275elementEnd()();
  }
}
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.isMobileOpen = signal(false);
    this.isDropdownOpen = signal(false);
  }
  toggleMobile() {
    this.isMobileOpen.update((v) => !v);
  }
  closeMobile() {
    this.isMobileOpen.set(false);
  }
  toggleDropdown() {
    this.isDropdownOpen.update((v) => !v);
  }
  closeDropdown() {
    this.isDropdownOpen.set(false);
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 36, vars: 6, consts: [[1, "header"], [1, "container", "header__inner"], ["routerLink", "/", 1, "header__logo", 3, "click"], ["src", "assets/images/logo-pacto-rh/logo_sem_fundo.png", "alt", "PactoRH", 1, "header__logo-img"], [1, "header__nav"], [1, "nav-item", 3, "mouseenter", "mouseleave"], [1, "nav-link"], [1, "fas", "fa-chevron-down", "nav-link__icon"], [1, "dropdown"], [1, "nav-item"], ["routerLink", "/sobre", "routerLinkActive", "nav-link--active", 1, "nav-link"], ["routerLink", "/disc", "routerLinkActive", "nav-link--active", 1, "nav-link"], ["routerLink", "/contato", "routerLinkActive", "nav-link--active", 1, "nav-link"], ["aria-label", "Menu", 1, "header__hamburger", 3, "click"], [1, "mobile-menu"], [1, "container"], ["routerLink", "/", 1, "mobile-menu__link", 3, "click"], ["routerLink", "/empresa", 1, "mobile-menu__link", 3, "click"], ["routerLink", "/profissional", 1, "mobile-menu__link", 3, "click"], ["routerLink", "/disc", 1, "mobile-menu__link", 3, "click"], ["routerLink", "/sobre", 1, "mobile-menu__link", 3, "click"], ["routerLink", "/contato", 1, "mobile-menu__link", 3, "click"], ["routerLink", "/empresa", 1, "dropdown__item", 3, "click"], ["routerLink", "/profissional", 1, "dropdown__item", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_2_listener() {
          return ctx.closeMobile();
        });
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 4)(5, "div", 5);
        \u0275\u0275listener("mouseenter", function HeaderComponent_Template_div_mouseenter_5_listener() {
          return ctx.isDropdownOpen.set(true);
        })("mouseleave", function HeaderComponent_Template_div_mouseleave_5_listener() {
          return ctx.closeDropdown();
        });
        \u0275\u0275elementStart(6, "button", 6);
        \u0275\u0275text(7, " Solu\xE7\xF5es ");
        \u0275\u0275element(8, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, HeaderComponent_Conditional_9_Template, 5, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9)(11, "a", 10);
        \u0275\u0275text(12, " Sobre ");
        \u0275\u0275element(13, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "a", 11);
        \u0275\u0275text(15, "DISC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 12);
        \u0275\u0275text(17, "Contato");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 13);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_18_listener() {
          return ctx.toggleMobile();
        });
        \u0275\u0275element(19, "span")(20, "span")(21, "span");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "nav", 14)(23, "div", 15)(24, "a", 16);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_24_listener() {
          return ctx.closeMobile();
        });
        \u0275\u0275text(25, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "a", 17);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_26_listener() {
          return ctx.closeMobile();
        });
        \u0275\u0275text(27, "Para Empresas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "a", 18);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_28_listener() {
          return ctx.closeMobile();
        });
        \u0275\u0275text(29, "Para Profissionais");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "a", 19);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_30_listener() {
          return ctx.closeMobile();
        });
        \u0275\u0275text(31, "DISC");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "a", 20);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_32_listener() {
          return ctx.closeMobile();
        });
        \u0275\u0275text(33, "Sobre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "a", 21);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_34_listener() {
          return ctx.closeMobile();
        });
        \u0275\u0275text(35, "Contato");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("nav-link--open", ctx.isDropdownOpen());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isDropdownOpen() ? 9 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275attribute("aria-expanded", ctx.isMobileOpen());
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mobile-menu--open", ctx.isMobileOpen());
      }
    }, dependencies: [RouterLink, RouterLinkActive, CommonModule], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  height: var(--navbar-height);\n  background: var(--color-bg);\n  border-bottom: 1px solid var(--color-border-light);\n}\n.header__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  gap: var(--space-6);\n}\n.header__logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  text-decoration: none;\n}\n.header__logo-img[_ngcontent-%COMP%] {\n  height: 36px;\n  width: auto;\n  object-fit: contain;\n}\n.header__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .header__nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header__hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  padding: 4px;\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .header__hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.header__hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--color-text);\n  border-radius: 2px;\n  transition: all var(--transition);\n}\n.nav-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .dropdown[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: var(--space-2) var(--space-3);\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  color: var(--color-text);\n  background: none;\n  border: none;\n  cursor: pointer;\n  border-radius: var(--radius-md);\n  transition: color var(--transition), background var(--transition);\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%]:hover, \n.nav-link--active[_ngcontent-%COMP%], \n.nav-link--open[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.nav-link__icon[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  transition: transform var(--transition);\n  opacity: 0.6;\n}\n.nav-link--open[_ngcontent-%COMP%]   .nav-link__icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 50%;\n  transform: translateX(-50%) translateY(-4px);\n  min-width: 180px;\n  background: var(--color-bg-white);\n  border: 1px solid var(--color-border-light);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-md);\n  padding: var(--space-2);\n  opacity: 0;\n  visibility: hidden;\n  transition: all var(--transition);\n}\n.dropdown__item[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--space-3) var(--space-4);\n  font-size: var(--fs-sm);\n  color: var(--color-text);\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  transition: all var(--transition);\n}\n.dropdown__item[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg);\n  color: var(--color-primary);\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  background: var(--color-bg-white);\n  border-top: 1px solid var(--color-border-light);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  display: none;\n}\n@media (max-width: 768px) {\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.mobile-menu--open[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n.mobile-menu[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-block: var(--space-4);\n  display: flex;\n  flex-direction: column;\n}\n.mobile-menu__link[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--space-3) 0;\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  color: var(--color-text);\n  border-bottom: 1px solid var(--color-border-light);\n  text-decoration: none;\n  transition: color var(--transition);\n}\n.mobile-menu__link[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [RouterLink, RouterLinkActive, CommonModule], template: '<!-- Header minimalista exatamente como no Figma:\r\n     logo pequena \xE0 esquerda | nav central | hamburger \xE0 direita -->\r\n<header class="header">\r\n  <div class="container header__inner">\r\n\r\n    <!-- Logo pequena \xE0 esquerda -->\r\n    <a routerLink="/" class="header__logo" (click)="closeMobile()">\r\n      <img src="assets/images/logo-pacto-rh/logo_sem_fundo.png"\r\n           alt="PactoRH"\r\n           class="header__logo-img" />\r\n    </a>\r\n\r\n    <!-- Nav central (desktop) -->\r\n    <nav class="header__nav">\r\n\r\n      <!-- Dropdown Solu\xE7\xF5es -->\r\n      <div class="nav-item" (mouseenter)="isDropdownOpen.set(true)" (mouseleave)="closeDropdown()">\r\n        <button class="nav-link" [class.nav-link--open]="isDropdownOpen()">\r\n          Solu\xE7\xF5es\r\n          <i class="fas fa-chevron-down nav-link__icon"></i>\r\n        </button>\r\n        @if (isDropdownOpen()) {\r\n          <div class="dropdown">\r\n            <a routerLink="/empresa"      class="dropdown__item" (click)="closeDropdown()">Para Empresas</a>\r\n            <a routerLink="/profissional" class="dropdown__item" (click)="closeDropdown()">Para Profissionais</a>\r\n          </div>\r\n        }\r\n      </div>\r\n\r\n      <!-- Sobre (com dropdown interno) -->\r\n      <div class="nav-item">\r\n        <a routerLink="/sobre" class="nav-link" routerLinkActive="nav-link--active">\r\n          Sobre\r\n          <i class="fas fa-chevron-down nav-link__icon"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <a routerLink="/disc"    class="nav-link" routerLinkActive="nav-link--active">DISC</a>\r\n      <a routerLink="/contato" class="nav-link" routerLinkActive="nav-link--active">Contato</a>\r\n    </nav>\r\n\r\n    <!-- Hamburger \xE0 direita (mobile) -->\r\n    <button\r\n      class="header__hamburger"\r\n      (click)="toggleMobile()"\r\n      [attr.aria-expanded]="isMobileOpen()"\r\n      aria-label="Menu"\r\n    >\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <!-- Menu mobile -->\r\n  <nav class="mobile-menu" [class.mobile-menu--open]="isMobileOpen()">\r\n    <div class="container">\r\n      <a routerLink="/"            class="mobile-menu__link" (click)="closeMobile()">Home</a>\r\n      <a routerLink="/empresa"     class="mobile-menu__link" (click)="closeMobile()">Para Empresas</a>\r\n      <a routerLink="/profissional"class="mobile-menu__link" (click)="closeMobile()">Para Profissionais</a>\r\n      <a routerLink="/disc"        class="mobile-menu__link" (click)="closeMobile()">DISC</a>\r\n      <a routerLink="/sobre"       class="mobile-menu__link" (click)="closeMobile()">Sobre</a>\r\n      <a routerLink="/contato"     class="mobile-menu__link" (click)="closeMobile()">Contato</a>\r\n    </div>\r\n  </nav>\r\n</header>', styles: ["/* src/app/layout/header.component.scss */\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  height: var(--navbar-height);\n  background: var(--color-bg);\n  border-bottom: 1px solid var(--color-border-light);\n}\n.header__inner {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  gap: var(--space-6);\n}\n.header__logo {\n  flex-shrink: 0;\n  text-decoration: none;\n}\n.header__logo-img {\n  height: 36px;\n  width: auto;\n  object-fit: contain;\n}\n.header__nav {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .header__nav {\n    display: none;\n  }\n}\n.header__hamburger {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  padding: 4px;\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .header__hamburger {\n    display: flex;\n  }\n}\n.header__hamburger span {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--color-text);\n  border-radius: 2px;\n  transition: all var(--transition);\n}\n.nav-item {\n  position: relative;\n}\n.nav-item:hover .dropdown {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.nav-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: var(--space-2) var(--space-3);\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  color: var(--color-text);\n  background: none;\n  border: none;\n  cursor: pointer;\n  border-radius: var(--radius-md);\n  transition: color var(--transition), background var(--transition);\n  text-decoration: none;\n}\n.nav-link:hover,\n.nav-link--active,\n.nav-link--open {\n  color: var(--color-primary);\n}\n.nav-link__icon {\n  font-size: 0.55rem;\n  transition: transform var(--transition);\n  opacity: 0.6;\n}\n.nav-link--open .nav-link__icon {\n  transform: rotate(180deg);\n}\n.dropdown {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 50%;\n  transform: translateX(-50%) translateY(-4px);\n  min-width: 180px;\n  background: var(--color-bg-white);\n  border: 1px solid var(--color-border-light);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-md);\n  padding: var(--space-2);\n  opacity: 0;\n  visibility: hidden;\n  transition: all var(--transition);\n}\n.dropdown__item {\n  display: block;\n  padding: var(--space-3) var(--space-4);\n  font-size: var(--fs-sm);\n  color: var(--color-text);\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  transition: all var(--transition);\n}\n.dropdown__item:hover {\n  background: var(--color-bg);\n  color: var(--color-primary);\n}\n.mobile-menu {\n  background: var(--color-bg-white);\n  border-top: 1px solid var(--color-border-light);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  display: none;\n}\n@media (max-width: 768px) {\n  .mobile-menu {\n    display: block;\n  }\n}\n.mobile-menu--open {\n  max-height: 400px;\n}\n.mobile-menu .container {\n  padding-block: var(--space-4);\n  display: flex;\n  flex-direction: column;\n}\n.mobile-menu__link {\n  display: block;\n  padding: var(--space-3) 0;\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  color: var(--color-text);\n  border-bottom: 1px solid var(--color-border-light);\n  text-decoration: none;\n  transition: color var(--transition);\n}\n.mobile-menu__link:hover {\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent" });
})();

// src/app/layout/footer.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function FooterComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("href", s_r1.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", s_r1.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r1.icon);
  }
}
function FooterComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r2.href);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r2.label);
  }
}
function FooterComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r3.href);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r3.label);
  }
}
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.links = {
      servicos: [
        { label: "Treinamentos Corporativos", href: "/treinamentos" },
        { label: "Coaching Executivo", href: "/solucoes" },
        { label: "Palestras", href: "/solucoes" },
        { label: "Consultoria em RH", href: "/solucoes" }
      ],
      empresa: [
        { label: "Sobre N\xF3s", href: "/sobre" },
        { label: "Blog", href: "/blog" },
        { label: "Contato", href: "/contato" }
      ],
      social: [
        { label: "Instagram", icon: "fab fa-instagram", href: "https://instagram.com" },
        { label: "LinkedIn", icon: "fab fa-linkedin", href: "https://linkedin.com" },
        { label: "YouTube", icon: "fab fa-youtube", href: "https://youtube.com" },
        { label: "Facebook", icon: "fab fa-facebook", href: "https://facebook.com" }
      ]
    };
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 49, vars: 1, consts: [[1, "footer"], [1, "container"], [1, "footer__grid"], [1, "footer__brand"], ["routerLink", "/", 1, "footer__logo"], ["src", "assets/images/logo-pacto-rh/logo_branco_sem_fundo.png", "alt", "", 1, "footer__logo-icon"], [1, "footer__logo-text"], [1, "footer__tagline"], [1, "footer__social"], ["target", "_blank", "rel", "noopener", 1, "social-link", 3, "href"], [1, "footer__col"], [1, "footer__col-title"], [1, "footer__list"], [1, "footer__list", "footer__list--contact"], [1, "fas", "fa-envelope"], ["href", "mailto:contato@pactorh.com.br", 1, "footer__link"], [1, "fas", "fa-phone"], ["href", "tel:+551100000000", 1, "footer__link"], [1, "fas", "fa-map-marker-alt"], [1, "footer__bottom"], [1, "fas", "fa-heart", 2, "color", "var(--color-primary)"], [1, "footer__link", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7, "Pacto");
        \u0275\u0275elementStart(8, "em");
        \u0275\u0275text(9, "RH");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11, " Transformando pessoas e organiza\xE7\xF5es atrav\xE9s do desenvolvimento humano. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275repeaterCreate(13, FooterComponent_For_14_Template, 2, 4, "a", 9, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10)(16, "h4", 11);
        \u0275\u0275text(17, "Servi\xE7os");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "ul", 12);
        \u0275\u0275repeaterCreate(19, FooterComponent_For_20_Template, 3, 2, "li", null, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 10)(22, "h4", 11);
        \u0275\u0275text(23, "Empresa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "ul", 12);
        \u0275\u0275repeaterCreate(25, FooterComponent_For_26_Template, 3, 2, "li", null, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 10)(28, "h4", 11);
        \u0275\u0275text(29, "Contato");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "ul", 13)(31, "li");
        \u0275\u0275element(32, "i", 14);
        \u0275\u0275elementStart(33, "a", 15);
        \u0275\u0275text(34, " contato@pactorh.com.br ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "li");
        \u0275\u0275element(36, "i", 16);
        \u0275\u0275elementStart(37, "a", 17);
        \u0275\u0275text(38, "(11) 0000-0000");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275element(40, "i", 18);
        \u0275\u0275elementStart(41, "span");
        \u0275\u0275text(42, "S\xE3o Paulo, SP");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(43, "div", 19)(44, "p");
        \u0275\u0275text(45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p");
        \u0275\u0275text(47, "Desenvolvido com ");
        \u0275\u0275element(48, "i", 20);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.links.social);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.links.servicos);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.links.empresa);
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Pacto RH. Todos os direitos reservados.");
      }
    }, dependencies: [RouterLink], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background-color: var(--color-bg-dark);\n  color: rgba(255, 255, 255, 0.75);\n  padding-top: var(--space-16);\n}\n.footer__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.8fr 1fr 1fr 1.2fr;\n  gap: var(--space-12);\n  padding-bottom: var(--space-12);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n@media (max-width: 1023px) {\n  .footer__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .footer__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-3);\n  text-decoration: none;\n  margin-bottom: var(--space-4);\n}\n.footer__logo-icon[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n}\n.footer__logo-text[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #fff;\n}\n.footer__logo-text[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: var(--color-red-400);\n  font-style: normal;\n}\n.footer__tagline[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.6);\n  max-width: 280px;\n  margin-bottom: var(--space-6);\n}\n.footer__social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n}\n.footer__col-title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: var(--space-5);\n}\n.footer__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.footer__list--contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n}\n.footer__list--contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  margin-top: 3px;\n  width: 14px;\n  flex-shrink: 0;\n}\n.footer__list--contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.footer__link[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: rgba(255, 255, 255, 0.65);\n  text-decoration: none;\n  transition: color var(--transition), padding-left var(--transition);\n}\n.footer__link[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  padding-left: var(--space-2);\n}\n.footer__bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: var(--space-6);\n  font-size: var(--fs-xs);\n  color: rgba(255, 255, 255, 0.4);\n}\n@media (max-width: 600px) {\n  .footer__bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: var(--space-2);\n    text-align: center;\n  }\n}\n.social-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: var(--radius-md);\n  background-color: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  font-size: var(--fs-sm);\n  transition: all var(--transition);\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: #fff;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink], template: '<footer class="footer">\r\n  <div class="container">\r\n    <div class="footer__grid">\r\n\r\n      <!-- Coluna 1 \u2014 Marca -->\r\n      <div class="footer__brand">\r\n        <a routerLink="/" class="footer__logo">\r\n          <img\r\n            src="assets/images/logo-pacto-rh/logo_branco_sem_fundo.png"\r\n            alt=""\r\n            class="footer__logo-icon"\r\n          />\r\n          <span class="footer__logo-text">Pacto<em>RH</em></span>\r\n        </a>\r\n        <p class="footer__tagline">\r\n          Transformando pessoas e organiza\xE7\xF5es atrav\xE9s do desenvolvimento humano.\r\n        </p>\r\n        <div class="footer__social">\r\n          @for (s of links.social; track s.label) {\r\n            <a [href]="s.href" target="_blank" rel="noopener" class="social-link" [attr.aria-label]="s.label">\r\n              <i [class]="s.icon"></i>\r\n            </a>\r\n          }\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Coluna 2 \u2014 Servi\xE7os -->\r\n      <div class="footer__col">\r\n        <h4 class="footer__col-title">Servi\xE7os</h4>\r\n        <ul class="footer__list">\r\n          @for (link of links.servicos; track link.label) {\r\n            <li>\r\n              <a [routerLink]="link.href" class="footer__link">{{ link.label }}</a>\r\n            </li>\r\n          }\r\n        </ul>\r\n      </div>\r\n\r\n      <!-- Coluna 3 \u2014 Empresa -->\r\n      <div class="footer__col">\r\n        <h4 class="footer__col-title">Empresa</h4>\r\n        <ul class="footer__list">\r\n          @for (link of links.empresa; track link.label) {\r\n            <li>\r\n              <a [routerLink]="link.href" class="footer__link">{{ link.label }}</a>\r\n            </li>\r\n          }\r\n        </ul>\r\n      </div>\r\n\r\n      <!-- Coluna 4 \u2014 Contato -->\r\n      <div class="footer__col">\r\n        <h4 class="footer__col-title">Contato</h4>\r\n        <ul class="footer__list footer__list--contact">\r\n          <li>\r\n            <i class="fas fa-envelope"></i>\r\n            <a href="mailto:contato@pactorh.com.br" class="footer__link">\r\n              contato&#64;pactorh.com.br\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <i class="fas fa-phone"></i>\r\n            <a href="tel:+551100000000" class="footer__link">(11) 0000-0000</a>\r\n          </li>\r\n          <li>\r\n            <i class="fas fa-map-marker-alt"></i>\r\n            <span>S\xE3o Paulo, SP</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Bottom bar -->\r\n    <div class="footer__bottom">\r\n      <p>&copy; {{ currentYear }} Pacto RH. Todos os direitos reservados.</p>\r\n      <p>Desenvolvido com <i class="fas fa-heart" style="color: var(--color-primary)"></i></p>\r\n    </div>\r\n  </div>\r\n</footer>', styles: ["/* src/app/layout/footer.component.scss */\n.footer {\n  background-color: var(--color-bg-dark);\n  color: rgba(255, 255, 255, 0.75);\n  padding-top: var(--space-16);\n}\n.footer__grid {\n  display: grid;\n  grid-template-columns: 1.8fr 1fr 1fr 1.2fr;\n  gap: var(--space-12);\n  padding-bottom: var(--space-12);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n@media (max-width: 1023px) {\n  .footer__grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .footer__grid {\n    grid-template-columns: 1fr;\n  }\n}\n.footer__logo {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-3);\n  text-decoration: none;\n  margin-bottom: var(--space-4);\n}\n.footer__logo-icon {\n  height: 40px;\n  width: auto;\n}\n.footer__logo-text {\n  font-family: var(--font-heading);\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #fff;\n}\n.footer__logo-text em {\n  color: var(--color-red-400);\n  font-style: normal;\n}\n.footer__tagline {\n  font-size: var(--fs-sm);\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.6);\n  max-width: 280px;\n  margin-bottom: var(--space-6);\n}\n.footer__social {\n  display: flex;\n  gap: var(--space-3);\n}\n.footer__col-title {\n  font-family: var(--font-heading);\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: var(--space-5);\n}\n.footer__list {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.footer__list--contact li {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3);\n}\n.footer__list--contact li i {\n  color: var(--color-primary);\n  margin-top: 3px;\n  width: 14px;\n  flex-shrink: 0;\n}\n.footer__list--contact li span {\n  font-size: var(--fs-sm);\n}\n.footer__link {\n  font-size: var(--fs-sm);\n  color: rgba(255, 255, 255, 0.65);\n  text-decoration: none;\n  transition: color var(--transition), padding-left var(--transition);\n}\n.footer__link:hover {\n  color: var(--color-primary);\n  padding-left: var(--space-2);\n}\n.footer__bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: var(--space-6);\n  font-size: var(--fs-xs);\n  color: rgba(255, 255, 255, 0.4);\n}\n@media (max-width: 600px) {\n  .footer__bottom {\n    flex-direction: column;\n    gap: var(--space-2);\n    text-align: center;\n  }\n}\n.social-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: var(--radius-md);\n  background-color: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  font-size: var(--fs-sm);\n  transition: all var(--transition);\n}\n.social-link:hover {\n  background-color: var(--color-primary);\n  color: #fff;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent" });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayoutComponent, { className: "PublicLayoutComponent" });
})();
export {
  PublicLayoutComponent
};
//# sourceMappingURL=chunk-Y44OKAU2.js.map
