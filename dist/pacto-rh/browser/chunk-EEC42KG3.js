import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-C3DF2WF3.js";

// src/app/features/about/about.component.ts
var AboutComponent = class _AboutComponent {
  static {
    this.\u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 3, vars: 0, consts: [[2, "padding", "120px 24px", "text-align", "center"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "AboutComponent \u2014 em breve");
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", standalone: true, imports: [], template: `<div style="padding:120px 24px;text-align:center"><h2>AboutComponent \u2014 em breve</h2></div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/features/about/about.component.ts", lineNumber: 3 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-EEC42KG3.js.map
