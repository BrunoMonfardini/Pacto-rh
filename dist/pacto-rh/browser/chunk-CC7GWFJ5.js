import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-DCGTXMYS.js";

// src/app/features/blog/blog-detail.component.ts
var BlogDetailComponent = class _BlogDetailComponent {
  static {
    this.\u0275fac = function BlogDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogDetailComponent, selectors: [["app-blog-detail"]], decls: 3, vars: 0, consts: [[2, "padding", "120px 24px", "text-align", "center"]], template: function BlogDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "BlogDetailComponent \u2014 em breve");
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogDetailComponent, [{
    type: Component,
    args: [{ selector: "app-blog-detail", standalone: true, imports: [], template: `<div style="padding:120px 24px;text-align:center"><h2>BlogDetailComponent \u2014 em breve</h2></div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogDetailComponent, { className: "BlogDetailComponent" });
})();
export {
  BlogDetailComponent
};
//# sourceMappingURL=chunk-CC7GWFJ5.js.map
