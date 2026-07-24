import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-DCGTXMYS.js";

// src/app/features/blog/blog-list.component.ts
var BlogListComponent = class _BlogListComponent {
  static {
    this.\u0275fac = function BlogListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogListComponent, selectors: [["app-blog-list"]], decls: 3, vars: 0, consts: [[2, "padding", "120px 24px", "text-align", "center"]], template: function BlogListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "BlogListComponent \u2014 em breve");
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogListComponent, [{
    type: Component,
    args: [{ selector: "app-blog-list", standalone: true, imports: [], template: `<div style="padding:120px 24px;text-align:center"><h2>BlogListComponent \u2014 em breve</h2></div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogListComponent, { className: "BlogListComponent" });
})();
export {
  BlogListComponent
};
//# sourceMappingURL=chunk-4I2EPXNP.js.map
