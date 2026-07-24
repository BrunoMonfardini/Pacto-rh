import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-DCGTXMYS.js";

// src/app/features/profissional/profissional.component.ts
var ProfissionalComponent = class _ProfissionalComponent {
  static {
    this.\u0275fac = function ProfissionalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfissionalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfissionalComponent, selectors: [["app-profissional"]], decls: 3, vars: 0, consts: [[2, "padding-top", "calc(80px + var(--navbar-height))", "text-align", "center"]], template: function ProfissionalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Para Profissionais \u2014 em breve");
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfissionalComponent, [{
    type: Component,
    args: [{
      selector: "app-profissional",
      standalone: true,
      imports: [],
      template: `<div style="padding-top:calc(80px + var(--navbar-height));text-align:center"><h1>Para Profissionais \u2014 em breve</h1></div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfissionalComponent, { className: "ProfissionalComponent" });
})();
export {
  ProfissionalComponent
};
//# sourceMappingURL=chunk-BZDIRIE6.js.map
