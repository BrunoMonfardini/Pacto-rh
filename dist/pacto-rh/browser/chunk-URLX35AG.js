import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-DCGTXMYS.js";

// src/app/features/empresa/empresa.component.ts
var EmpresaComponent = class _EmpresaComponent {
  static {
    this.\u0275fac = function EmpresaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmpresaComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmpresaComponent, selectors: [["app-empresa"]], decls: 3, vars: 0, consts: [[2, "padding-top", "calc(80px + var(--navbar-height))", "text-align", "center"]], template: function EmpresaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Para Empresas \u2014 em breve");
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmpresaComponent, [{
    type: Component,
    args: [{
      selector: "app-empresa",
      standalone: true,
      imports: [],
      template: `<div style="padding-top:calc(80px + var(--navbar-height));text-align:center"><h1>Para Empresas \u2014 em breve</h1></div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmpresaComponent, { className: "EmpresaComponent" });
})();
export {
  EmpresaComponent
};
//# sourceMappingURL=chunk-URLX35AG.js.map
