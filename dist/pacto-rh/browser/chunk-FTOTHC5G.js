import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-DCGTXMYS.js";

// src/app/features/disc/disc.component.ts
var DiscComponent = class _DiscComponent {
  static {
    this.\u0275fac = function DiscComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DiscComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DiscComponent, selectors: [["app-disc"]], decls: 3, vars: 0, consts: [[2, "padding-top", "calc(80px + var(--navbar-height))", "text-align", "center"]], template: function DiscComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "DISC \u2014 em breve");
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiscComponent, [{
    type: Component,
    args: [{
      selector: "app-disc",
      standalone: true,
      imports: [],
      template: `<div style="padding-top:calc(80px + var(--navbar-height));text-align:center"><h1>DISC \u2014 em breve</h1></div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DiscComponent, { className: "DiscComponent" });
})();
export {
  DiscComponent
};
//# sourceMappingURL=chunk-FTOTHC5G.js.map
