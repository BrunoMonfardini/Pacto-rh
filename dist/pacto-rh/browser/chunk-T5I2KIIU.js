import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-DCGTXMYS.js";

// src/app/features/contact/contact.component.ts
var ContactComponent = class _ContactComponent {
  static {
    this.\u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 3, vars: 0, consts: [[2, "padding", "120px 24px", "text-align", "center"]], template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "ContactComponent \u2014 em breve");
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{ selector: "app-contact", standalone: true, imports: [], template: `<div style="padding:120px 24px;text-align:center"><h2>ContactComponent \u2014 em breve</h2></div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent" });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-T5I2KIIU.js.map
