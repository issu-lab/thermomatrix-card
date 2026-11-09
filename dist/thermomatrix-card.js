const D = globalThis, G = D.ShadowRoot && (D.ShadyCSS === void 0 || D.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, V = /* @__PURE__ */ Symbol(), K = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== V) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (G && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = K.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && K.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const _t = (n) => new lt(typeof n == "string" ? n : n + "", void 0, V), ft = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((s, i, o) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n[o + 1], n[0]);
  return new lt(e, n, V);
}, bt = (n, t) => {
  if (G) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = D.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
  }
}, Y = G ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return _t(e);
})(n) : n;
const { is: yt, defineProperty: vt, getOwnPropertyDescriptor: At, getOwnPropertyNames: xt, getOwnPropertySymbols: $t, getPrototypeOf: wt } = Object, P = globalThis, Z = P.trustedTypes, Et = Z ? Z.emptyScript : "", St = P.reactiveElementPolyfillSupport, E = (n, t) => n, H = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? Et : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, ct = (n, t) => !yt(n, t), Q = { attribute: !0, type: String, converter: H, reflect: !1, useDefault: !1, hasChanged: ct };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), P.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let A = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Q) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = /* @__PURE__ */ Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && vt(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = At(this.prototype, t) ?? { get() {
      return this[e];
    }, set(a) {
      this[e] = a;
    } };
    return { get: i, set(a) {
      const l = i?.call(this);
      o?.call(this, a), this.requestUpdate(t, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Q;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E("elementProperties"))) return;
    const t = wt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
      const e = this.properties, s = [...xt(e), ...$t(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(Y(i));
    } else t !== void 0 && e.push(Y(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return bt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const o = (s.converter?.toAttribute !== void 0 ? s.converter : H).toAttribute(e, s.type);
      this._$Em = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = s.getPropertyOptions(i), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : H;
      this._$Em = i;
      const l = a.fromAttribute(e, o.type);
      this[i] = l ?? this._$Ej?.get(i) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, s, i = !1, o) {
    if (t !== void 0) {
      const a = this.constructor;
      if (i === !1 && (o = this[t]), s ??= a.getPropertyOptions(t), !((s.hasChanged ?? ct)(o, e) || s.useDefault && s.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(a._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: o }, a) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, a ?? e ?? this[t]), o !== !0 || a !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, o] of this._$Ep) this[i] = o;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [i, o] of s) {
        const { wrapped: a } = o, l = this[i];
        a !== !0 || this._$AL.has(i) || l === void 0 || this.C(i, void 0, o, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((s) => s.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, A[E("elementProperties")] = /* @__PURE__ */ new Map(), A[E("finalized")] = /* @__PURE__ */ new Map(), St?.({ ReactiveElement: A }), (P.reactiveElementVersions ??= []).push("2.1.2");
const B = globalThis, J = (n) => n, I = B.trustedTypes, X = I ? I.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, dt = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + _, Ct = `<${ht}>`, y = document, C = () => y.createComment(""), T = (n) => n === null || typeof n != "object" && typeof n != "function", W = Array.isArray, Tt = (n) => W(n) || typeof n?.[Symbol.iterator] == "function", U = `[ 	
\f\r]`, w = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, tt = /-->/g, et = />/g, f = RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), st = /'/g, it = /"/g, pt = /^(?:script|style|textarea|title)$/i, Rt = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), c = Rt(1), x = /* @__PURE__ */ Symbol.for("lit-noChange"), h = /* @__PURE__ */ Symbol.for("lit-nothing"), nt = /* @__PURE__ */ new WeakMap(), b = y.createTreeWalker(y, 129);
function ut(n, t) {
  if (!W(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return X !== void 0 ? X.createHTML(t) : t;
}
const Nt = (n, t) => {
  const e = n.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = w;
  for (let l = 0; l < e; l++) {
    const r = n[l];
    let p, u, d = -1, g = 0;
    for (; g < r.length && (a.lastIndex = g, u = a.exec(r), u !== null); ) g = a.lastIndex, a === w ? u[1] === "!--" ? a = tt : u[1] !== void 0 ? a = et : u[2] !== void 0 ? (pt.test(u[2]) && (i = RegExp("</" + u[2], "g")), a = f) : u[3] !== void 0 && (a = f) : a === f ? u[0] === ">" ? (a = i ?? w, d = -1) : u[1] === void 0 ? d = -2 : (d = a.lastIndex - u[2].length, p = u[1], a = u[3] === void 0 ? f : u[3] === '"' ? it : st) : a === it || a === st ? a = f : a === tt || a === et ? a = w : (a = f, i = void 0);
    const m = a === f && n[l + 1].startsWith("/>") ? " " : "";
    o += a === w ? r + Ct : d >= 0 ? (s.push(p), r.slice(0, d) + dt + r.slice(d) + _ + m) : r + _ + (d === -2 ? l : m);
  }
  return [ut(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class R {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, a = 0;
    const l = t.length - 1, r = this.parts, [p, u] = Nt(t, e);
    if (this.el = R.createElement(p, s), b.currentNode = this.el.content, e === 2 || e === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (i = b.nextNode()) !== null && r.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const d of i.getAttributeNames()) if (d.endsWith(dt)) {
          const g = u[a++], m = i.getAttribute(d).split(_), v = /([.?@])?(.*)/.exec(g);
          r.push({ type: 1, index: o, name: v[2], strings: m, ctor: v[1] === "." ? Dt : v[1] === "?" ? It : v[1] === "@" ? kt : M }), i.removeAttribute(d);
        } else d.startsWith(_) && (r.push({ type: 6, index: o }), i.removeAttribute(d));
        if (pt.test(i.tagName)) {
          const d = i.textContent.split(_), g = d.length - 1;
          if (g > 0) {
            i.textContent = I ? I.emptyScript : "";
            for (let m = 0; m < g; m++) i.append(d[m], C()), b.nextNode(), r.push({ type: 2, index: ++o });
            i.append(d[g], C());
          }
        }
      } else if (i.nodeType === 8) if (i.data === ht) r.push({ type: 2, index: o });
      else {
        let d = -1;
        for (; (d = i.data.indexOf(_, d + 1)) !== -1; ) r.push({ type: 7, index: o }), d += _.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const s = y.createElement("template");
    return s.innerHTML = t, s;
  }
}
function $(n, t, e = n, s) {
  if (t === x) return t;
  let i = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const o = T(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== o && (i?._$AO?.(!1), o === void 0 ? i = void 0 : (i = new o(n), i._$AT(n, e, s)), s !== void 0 ? (e._$Co ??= [])[s] = i : e._$Cl = i), i !== void 0 && (t = $(n, i._$AS(n, t.values), i, s)), t;
}
class Ot {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = (t?.creationScope ?? y).importNode(e, !0);
    b.currentNode = i;
    let o = b.nextNode(), a = 0, l = 0, r = s[0];
    for (; r !== void 0; ) {
      if (a === r.index) {
        let p;
        r.type === 2 ? p = new N(o, o.nextSibling, this, t) : r.type === 1 ? p = new r.ctor(o, r.name, r.strings, this, t) : r.type === 6 && (p = new Pt(o, this, t)), this._$AV.push(p), r = s[++l];
      }
      a !== r?.index && (o = b.nextNode(), a++);
    }
    return b.currentNode = y, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class N {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = h, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = $(this, t, e), T(t) ? t === h || t == null || t === "" ? (this._$AH !== h && this._$AR(), this._$AH = h) : t !== this._$AH && t !== x && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Tt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== h && T(this._$AH) ? this._$AA.nextSibling.data = t : this.T(y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = R.createElement(ut(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === i) this._$AH.p(e);
    else {
      const o = new Ot(i, this), a = o.u(this.options);
      o.p(e), this.T(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = nt.get(t.strings);
    return e === void 0 && nt.set(t.strings, e = new R(t)), e;
  }
  k(t) {
    W(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t) i === e.length ? e.push(s = new N(this.O(C()), this.O(C()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const s = J(t).nextSibling;
      J(t).remove(), t = s;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class M {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = h, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = h;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let a = !1;
    if (o === void 0) t = $(this, t, e, 0), a = !T(t) || t !== this._$AH && t !== x, a && (this._$AH = t);
    else {
      const l = t;
      let r, p;
      for (t = o[0], r = 0; r < o.length - 1; r++) p = $(this, l[s + r], e, r), p === x && (p = this._$AH[r]), a ||= !T(p) || p !== this._$AH[r], p === h ? t = h : t !== h && (t += (p ?? "") + o[r + 1]), this._$AH[r] = p;
    }
    a && !i && this.j(t);
  }
  j(t) {
    t === h ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Dt extends M {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === h ? void 0 : t;
  }
}
class It extends M {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== h);
  }
}
class kt extends M {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = $(this, t, e, 0) ?? h) === x) return;
    const s = this._$AH, i = t === h && s !== h || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== h && (s === h || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Pt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    $(this, t);
  }
}
const Mt = B.litHtmlPolyfillSupport;
Mt?.(R, N), (B.litHtmlVersions ??= []).push("3.3.3");
const zt = (n, t, e) => {
  const s = e?.renderBefore ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = e?.renderBefore ?? null;
    s._$litPart$ = i = new N(t.insertBefore(C(), o), o, void 0, e ?? {});
  }
  return i._$AI(n), i;
};
const j = globalThis;
let S = class extends A {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = zt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return x;
  }
};
S._$litElement$ = !0, S.finalized = !0, j.litElementHydrateSupport?.({ LitElement: S });
const Ut = j.litElementPolyfillSupport;
Ut?.({ LitElement: S });
(j.litElementVersions ??= []).push("4.2.2");
const Lt = (n) => (...t) => ({ _$litDirective$: n, values: t });
let Ht = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    this._$Ct = t, this._$AM = e, this._$Ci = s;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
const Ft = {}, Gt = (n, t = Ft) => n._$AH = t;
const ot = Lt(class extends Ht {
  constructor() {
    super(...arguments), this.key = h;
  }
  render(n, t) {
    return this.key = n, t;
  }
  update(n, [t, e]) {
    return t !== this.key && (Gt(n), this.key = t), e;
  }
}), Vt = ft`
  :host {
    display: block;
    --tm-heat: #f97316;
    --tm-cool: #1d4ed8;
    --tm-dry: #10b981;
    --tm-fan: #0891b2;
    --tm-off: #94a3b8;
    --tm-neutral-border: rgba(156, 163, 175, 0.45);
    color: var(--primary-text-color);
  }

  ha-card {
    min-height: 420px;
    padding: 18px 20px;
    overflow: hidden;
    border: 2px solid var(--tm-border-color, var(--tm-neutral-border));
    border-radius: 18px;
    box-shadow: var(--tm-card-shadow, 0 4px 14px rgba(0, 0, 0, 0.1));
    box-sizing: border-box;
    background: var(--ha-card-background, var(--card-background-color));
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .layout {
    display: flex;
    min-height: 380px;
    flex-direction: column;
    gap: 10px;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(var(--columns, 1), minmax(0, 1fr));
    gap: 8px;
  }

  button {
    position: relative;
    min-width: 0;
    min-height: 50px;
    padding: 7px 8px;
    border: 2px solid var(--tm-neutral-border);
    border-radius: 14px;
    box-sizing: border-box;
    color: var(--primary-text-color);
    background: transparent;
    font: inherit;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease,
      box-shadow 0.2s ease, transform 0.1s ease;
  }

  button:active {
    transform: scale(0.97);
  }

  button.active {
    border-color: var(--button-color);
    background: color-mix(in srgb, var(--button-color) 38%, transparent);
    box-shadow: 0 0 15px
      color-mix(in srgb, var(--button-color) 55%, transparent);
  }

  ha-card.dark button {
    border-color: rgba(148, 163, 184, 0.38);
    background: rgba(255, 255, 255, 0.025);
  }

  ha-card.dark button.active {
    border-color: color-mix(in srgb, var(--button-color) 82%, white);
    color: #ffffff;
    background: linear-gradient(
      145deg,
      color-mix(in srgb, var(--button-color) 74%, #0b1020),
      color-mix(in srgb, var(--button-color) 48%, #0b1020)
    );
    box-shadow: 0 0 18px
        color-mix(in srgb, var(--button-color) 72%, transparent),
      inset 0 0 12px color-mix(in srgb, white 8%, transparent);
  }

  .mode-button {
    min-height: 58px;
  }

  .mode-icon {
    display: block;
    margin-bottom: 3px;
    font-size: 20px;
    line-height: 1;
  }

  .label-hide .button-label,
  .label-auto.labels-compact .button-label {
    position: absolute;
    width: max-content;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .label-hide .mode-icon,
  .label-auto.labels-compact .mode-icon,
  .label-hide .preset-icon,
  .label-auto.labels-compact .preset-icon {
    margin-bottom: 0;
  }

  .lcd-panel {
    width: 100%;
    container-type: inline-size;
    overflow: hidden;
    padding: 14px;
    border: 2px solid color-mix(in srgb, currentColor 34%, transparent);
    border-radius: 14px;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2),
      0 3px 10px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    color: #111827;
    background: var(--lcd-background);
    transition: background 0.3s ease, color 0.3s ease;
  }

  .lcd-panel.dark {
    color: #f8fafc;
    border-color: color-mix(in srgb, white 52%, transparent);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.28),
      0 0 16px color-mix(in srgb, var(--lcd-background) 52%, transparent);
  }

  .lcd-panel.classic-green,
  .lcd-panel.dark.classic-green {
    color: #1d281b;
    border-color: rgba(45, 58, 39, 0.42);
    box-shadow: inset 0 2px 9px rgba(32, 44, 27, 0.28),
      0 3px 10px rgba(0, 0, 0, 0.12);
  }

  .display-size-large .lcd-panel {
    padding: 20px 18px;
  }

  .display-size-large .lcd-reading.current {
    font-size: clamp(62px, 17cqi, 82px);
  }

  .display-size-large .lcd-reading.target {
    font-size: clamp(42px, 12cqi, 58px);
  }

  .display-size-large .lcd-reading-label {
    margin-bottom: 11px;
    font-size: 12px;
  }

  .display-size-large .status-stack {
    gap: 7px;
  }

  .display-size-large .status-box {
    min-height: 24px;
  }

  .display-size-large .lcd-supplemental {
    margin-top: 18px;
  }

  .display-size-large .lcd-supplemental-label {
    font-size: 11px;
  }

  .display-size-large .lcd-advanced-value {
    min-height: 29px;
    padding-top: 8px;
    font-size: 16px;
  }

  .display-size-large .lcd-power-value,
  .display-size-large .lcd-power-value .lcd-number,
  .display-size-large .lcd-power-value .power-text {
    font-size: 25px;
  }

  .lcd-panel.actionable {
    cursor: pointer;
  }

  .lcd-panel.actionable:focus-visible {
    outline: 2px solid var(--primary-color, currentColor);
    outline-offset: 3px;
  }

  .lcd-values {
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) 54px minmax(0, 0.66fr);
    gap: 8px;
    align-items: center;
  }

  .lcd-values.external {
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.66fr);
    gap: 18px;
  }

  .lcd-reading {
    display: inline-flex;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    justify-self: start;
  }

  .lcd-reading.current {
    font-size: clamp(44px, 13vw, 54px);
    text-align: left;
  }

  .lcd-reading.target {
    justify-self: end;
    font-size: clamp(26px, 7.2vw, 30px);
    text-align: right;
  }

  .lcd-reading-label {
    display: block;
    margin-bottom: 7px;
    font: 700 10px/1 sans-serif;
    letter-spacing: 0.06em;
    opacity: 0.68;
  }

  .lcd-display {
    display: inline-flex;
    align-items: flex-end;
    gap: 0.055em;
    height: 1em;
  }

  .text-display {
    display: inline-flex;
    align-items: flex-start;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.045em;
    line-height: 0.92;
    text-shadow: 0 0 5px color-mix(in srgb, currentColor 44%, transparent);
  }

  .text-degree {
    margin: 0.04em 0 0 0.08em;
    font-size: 0.4em;
    font-style: normal;
    letter-spacing: 0;
  }

  .lcd-digit {
    position: relative;
    display: inline-block;
    width: 0.58em;
    height: 1em;
  }

  .lcd-segment {
    position: absolute;
    display: block;
    border-radius: 0.035em;
    background: currentColor;
    opacity: 0.1;
  }

  .lcd-segment.on {
    opacity: 1;
  }

  .lcd-segment.a,
  .lcd-segment.d,
  .lcd-segment.g {
    left: 0.105em;
    width: 0.37em;
    height: 0.105em;
    clip-path: polygon(
      9% 0,
      91% 0,
      100% 50%,
      91% 100%,
      9% 100%,
      0 50%
    );
  }

  .lcd-segment.a {
    top: 0.02em;
  }
  .lcd-segment.g {
    top: 0.462em;
  }
  .lcd-segment.d {
    bottom: 0.02em;
  }

  .lcd-segment.b,
  .lcd-segment.c,
  .lcd-segment.e,
  .lcd-segment.f {
    width: 0.105em;
    height: 0.35em;
    clip-path: polygon(
      50% 0,
      100% 9%,
      100% 91%,
      50% 100%,
      0 91%,
      0 9%
    );
  }

  .lcd-segment.b {
    top: 0.09em;
    right: 0.025em;
  }
  .lcd-segment.c {
    right: 0.025em;
    bottom: 0.09em;
  }
  .lcd-segment.e {
    bottom: 0.09em;
    left: 0.025em;
  }
  .lcd-segment.f {
    top: 0.09em;
    left: 0.025em;
  }

  .lcd-dot {
    width: 0.1em;
    height: 0.1em;
    margin: 0 0.015em 0.02em;
    border-radius: 50%;
    background: currentColor;
  }

  .lcd-degree {
    width: 0.2em;
    height: 0.2em;
    margin: 0 0 0.75em 0.015em;
    border: 0.045em solid currentColor;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .status-wheel {
    position: relative;
    left: 4px;
    display: grid;
    grid-template-columns: repeat(4, 11px);
    gap: 2px;
    width: 54px;
    height: 30px;
    padding: 1px 2px;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, currentColor 58%, transparent);
    border-radius: 4px;
    box-sizing: border-box;
    background: color-mix(in srgb, currentColor 10%, transparent);
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.18),
      0 0 7px color-mix(in srgb, currentColor 24%, transparent);
  }

  .wheel-window {
    position: relative;
    height: 26px;
    overflow: hidden;
    border-right: 1px solid color-mix(in srgb, currentColor 18%, transparent);
    mask-image: linear-gradient(
      to bottom,
      transparent 0,
      black 28%,
      black 72%,
      transparent 100%
    );
  }

  .wheel-window:last-child {
    border-right: 0;
  }

  .wheel-strip {
    position: absolute;
    inset: 0 auto auto 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    transform: translateY(var(--wheel-offset));
    animation: wheel-roll 5s cubic-bezier(0.16, 0.72, 0.22, 1)
      var(--wheel-delay) both;
    will-change: transform;
  }

  .wheel-strip > i {
    display: flex;
    width: 100%;
    height: 14px;
    flex: 0 0 14px;
    align-items: center;
    justify-content: center;
    font-style: normal;
    opacity: 0.28;
  }

  .wheel-strip > i.selected {
    opacity: 1;
  }

  .wheel-strip .matrix-char {
    --matrix-pixel-size: 1.25px;
    --matrix-pixel-gap: 0.4px;
  }

  @keyframes wheel-roll {
    from {
      transform: translateY(6px);
    }
    to {
      transform: translateY(var(--wheel-offset));
    }
  }

  .status-stack {
    position: relative;
    left: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .status-box {
    width: 50px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid currentColor;
    border-radius: 3px;
    box-sizing: border-box;
    opacity: 0.24;
  }

  .status-box.active {
    background: color-mix(in srgb, currentColor 13%, transparent);
    box-shadow: inset 0 0 0 1px currentColor,
      0 0 8px color-mix(in srgb, currentColor 42%, transparent);
    opacity: 1;
  }

  .status-box.active.blink .status-text {
    animation: status-text-blink 1.15s ease-in-out infinite;
  }

  .status-text {
    font: 700 10px/1 Arial, Helvetica, sans-serif;
    letter-spacing: 0.05em;
  }

  @keyframes status-text-blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.22;
    }
  }

  .lcd-supplemental {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(76px, 0.45fr);
    gap: 16px;
    width: 100%;
    min-width: 0;
    margin-top: 12px;
    align-items: end;
  }

  .lcd-supplemental.power-only {
    grid-template-columns: minmax(0, 1fr);
  }

  .lcd-advanced-status,
  .lcd-power {
    display: inline-grid;
    min-width: 0;
    justify-items: center;
  }

  .lcd-advanced-status {
    justify-self: start;
  }

  .lcd-advanced-value.quality-estimated {
    opacity: 0.78;
  }

  .lcd-power {
    justify-self: end;
  }

  .lcd-supplemental-label {
    display: block;
    margin-bottom: 7px;
    font: 700 10px/1 sans-serif;
    letter-spacing: 0.06em;
    opacity: 0.68;
  }

  .lcd-advanced-value {
    position: relative;
    display: grid;
    min-width: min(100%, 118px);
    min-height: 25px;
    padding-top: 6px;
    place-items: center;
    overflow: hidden;
    box-sizing: border-box;
    font: 700 13px/1 Arial, Helvetica, sans-serif;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }

  .lcd-advanced-value::before {
    position: absolute;
    top: 0;
    left: 4%;
    width: 92%;
    height: 3px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 0 7px currentColor;
    content: "";
    opacity: 0.9;
  }

  .external-status-slide {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    animation: external-status-roll 560ms cubic-bezier(0.2, 0.72, 0.22, 1)
      both;
  }

  .lcd-power-value {
    display: inline-flex;
    min-height: 25px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 20px;
    line-height: 1;
    white-space: nowrap;
  }

  .lcd-power-value .lcd-number {
    height: 20px;
    font-size: 20px;
  }

  .lcd-power-value .power-text {
    font-size: 20px;
  }

  @keyframes external-status-roll {
    from {
      opacity: 0;
      transform: perspective(80px) translateY(18px) rotateX(-42deg);
    }
    to {
      opacity: 1;
      transform: perspective(80px) translateY(0) rotateX(0);
    }
  }

  .matrix-word {
    display: inline-flex;
    gap: 2px;
  }

  .matrix-char {
    display: grid;
    grid-template-columns: repeat(5, var(--matrix-pixel-size, 1.4px));
    grid-template-rows: repeat(7, var(--matrix-pixel-size, 1.4px));
    gap: var(--matrix-pixel-gap, 0.55px);
  }

  .matrix-pixel {
    width: var(--matrix-pixel-size, 1.4px);
    height: var(--matrix-pixel-size, 1.4px);
    border-radius: 0.3px;
    background: currentColor;
    opacity: 0.1;
  }

  .matrix-pixel.on {
    opacity: 1;
  }

  .temperature-controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .temperature-controls button {
    min-height: 30px;
    padding: 2px 8px;
    border-width: 1px;
    border-radius: 10px;
    background: color-mix(
      in srgb,
      var(--primary-text-color) 8%,
      transparent
    );
    box-shadow: none;
    font-size: 19px;
    line-height: 1;
  }

  .preset-icon {
    display: block;
    margin-bottom: 3px;
    font-size: 17px;
    line-height: 1;
  }

  .lcd-consumption-unit {
    padding-bottom: 0;
    font: 800 9px/1 Arial, sans-serif;
    letter-spacing: 0.06em;
  }

  .unavailable {
    font: 700 11px/1.2 Arial, sans-serif;
  }

  .lcd-number {
    font-size: 29px;
  }

  .matrix-space {
    display: inline-block;
    width: 4px;
  }

  .display-font-condensed .text-display,
  .display-font-condensed .status-text,
  .display-font-condensed .lcd-advanced-value {
    font-family: "Arial Narrow", "Roboto Condensed", Arial, sans-serif;
    font-stretch: condensed;
  }

  .display-font-mono .text-display,
  .display-font-mono .status-text,
  .display-font-mono .lcd-advanced-value {
    font-family: ui-monospace, "SFMono-Regular", Consolas, monospace;
  }

  .brand {
    display: flex;
    min-height: 18px;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: var(--secondary-text-color);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    line-height: 1.2;
    text-align: center;
    text-overflow: ellipsis;
    text-shadow: 0 -1px 0 var(--ha-card-background),
      0 1px 0 color-mix(in srgb, var(--primary-text-color) 28%, transparent);
    text-transform: uppercase;
    white-space: nowrap;
  }

  .warning {
    padding: 16px;
    color: var(--error-color, #db4437);
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    .wheel-strip,
    .external-status-slide,
    .status-box.active.blink .status-text {
      animation: none;
    }
  }
`;
function Bt(n) {
  return n.startsWith("climate.") ? {
    config: {
      type: "custom:thermomatrix-card",
      entity: n,
      show_presets: !0,
      border_mode: "state"
    }
  } : null;
}
function Wt(n, t, e) {
  const s = t.find((o) => o.entity_id === n);
  if (!s?.device_id)
    return null;
  const i = t.filter(
    (o) => o.device_id === s.device_id && o.entity_id.startsWith("sensor.") && e[o.entity_id]?.attributes.thermopilot_role === "status"
  );
  return i.length === 1 ? i[0].entity_id : null;
}
function jt(n, t) {
  return n || t || void 0;
}
function qt(n) {
  if (n == null || typeof n == "string" && n.trim() === "")
    return;
  const t = Number(n);
  return Number.isFinite(t) ? t : void 0;
}
function Kt(n, t, e) {
  return qt(
    e ? n : t
  );
}
class Yt {
  get(t, e) {
    return this._climateEntity === t && this._connection === e ? this._result : void 0;
  }
  set(t, e, s) {
    this._climateEntity = t, this._connection = e, this._result = s;
  }
  invalidate() {
    this._climateEntity = void 0, this._connection = void 0, this._result = void 0;
  }
}
const Zt = "1.5.0", Qt = /* @__PURE__ */ new Set(["heating", "cooling", "drying", "fan"]), at = [" ", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"], L = {
  off: { icon: "mdi:power", color: "#94a3b8" },
  heat: { icon: "mdi:fire", color: "#f97316" },
  cool: { icon: "mdi:snowflake", color: "#1d4ed8" },
  dry: { icon: "mdi:water-percent", color: "#10b981" },
  fan_only: { icon: "mdi:fan", color: "#0891b2" },
  auto: { icon: "mdi:thermostat-auto", color: "#8b5cf6" },
  heat_cool: { icon: "mdi:autorenew", color: "#8b5cf6" }
}, Jt = {
  off: "#94a3b8",
  heat: "#E36304",
  cool: "#007AF1",
  dry: "#00A878",
  fan_only: "#00A7C4",
  auto: "#A855F7",
  heat_cool: "#A855F7"
}, Xt = {
  0: "abcdef",
  1: "bc",
  2: "abdeg",
  3: "abcdg",
  4: "bcfg",
  5: "acdfg",
  6: "acdefg",
  7: "abc",
  8: "abcdefg",
  9: "abcdfg",
  "-": "g"
}, te = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  C: ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
  G: ["01111", "10000", "10000", "10111", "10001", "10001", "01111"],
  H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
  Z: ["11111", "00001", "00010", "00100", "01000", "10000", "11111"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  N: ["10001", "11001", "11001", "10101", "10011", "10011", "10001"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  J: ["00111", "00010", "00010", "00010", "10010", "10010", "01100"],
  K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
  Q: ["01110", "10001", "10001", "10001", "10101", "10010", "01101"],
  W: ["10001", "10001", "10001", "10101", "10101", "10101", "01010"],
  X: ["10001", "10001", "01010", "00100", "01010", "10001", "10001"],
  Y: ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
  "-": ["00000", "00000", "00000", "11111", "00000", "00000", "00000"]
}, ee = {
  none: { icon: "mdi:hand-back-right", color: "#c026d3" },
  home: { icon: "mdi:home", color: "#1d4ed8" },
  away: { icon: "mdi:bag-checked", color: "#94a3b8" },
  sleep: { icon: "mdi:sleep", color: "#8b5cf6" },
  comfort: { icon: "mdi:sofa", color: "#10b981" },
  eco: { icon: "mdi:leaf", color: "#16a34a" }
}, se = {
  none: "#D946EF",
  home: "#007AF1",
  away: "#94A3B8",
  sleep: "#9B5DE5",
  comfort: "#00A878",
  eco: "#22C55E"
}, O = {
  en: { loading: "Loading…", unavailable: "Unavailable", environment: "ROOM", target: "TARGET", consumption: "POWER", off: "Off", heat: "Heat", cool: "Cool", dry: "Dry", fan_only: "Fan", auto: "Auto", heat_cool: "Auto", none: "Manual", home: "Home", away: "Away", sleep: "Sleep", comfort: "Comfort", eco: "Eco" },
  it: { loading: "Caricamento…", unavailable: "Non disponibile", environment: "AMBIENTE", target: "TARGET", consumption: "CONSUMO", off: "Spento", heat: "Caldo", cool: "Freddo", dry: "Deumidifica", fan_only: "Ventola", auto: "Auto", heat_cool: "Auto", none: "Manuale", home: "Casa", away: "Assente", sleep: "Notte", comfort: "Comfort", eco: "Eco" },
  es: { loading: "Cargando…", unavailable: "No disponible", environment: "AMBIENTE", target: "OBJETIVO", consumption: "CONSUMO", off: "Apagado", heat: "Calor", cool: "Frío", dry: "Deshumidificar", fan_only: "Ventilador", auto: "Auto", heat_cool: "Auto", none: "Manual", home: "Casa", away: "Ausente", sleep: "Noche", comfort: "Confort", eco: "Eco" },
  fr: { loading: "Chargement…", unavailable: "Indisponible", environment: "AMBIANCE", target: "CIBLE", consumption: "PUISSANCE", off: "Arrêt", heat: "Chauffage", cool: "Froid", dry: "Déshumidifier", fan_only: "Ventilateur", auto: "Auto", heat_cool: "Auto", none: "Manuel", home: "Maison", away: "Absent", sleep: "Nuit", comfort: "Confort", eco: "Éco" },
  de: { loading: "Laden…", unavailable: "Nicht verfügbar", environment: "RAUM", target: "ZIEL", consumption: "LEISTUNG", off: "Aus", heat: "Heizen", cool: "Kühlen", dry: "Entfeuchten", fan_only: "Lüfter", auto: "Auto", heat_cool: "Auto", none: "Manuell", home: "Zuhause", away: "Abwesend", sleep: "Nacht", comfort: "Komfort", eco: "Eco" },
  pt: { loading: "A carregar…", unavailable: "Indisponível", environment: "AMBIENTE", target: "ALVO", consumption: "CONSUMO", off: "Desligado", heat: "Aquecer", cool: "Arrefecer", dry: "Desumidificar", fan_only: "Ventoinha", auto: "Auto", heat_cool: "Auto", none: "Manual", home: "Casa", away: "Ausente", sleep: "Noite", comfort: "Conforto", eco: "Eco" }
}, ie = {
  en: "STATUS",
  it: "STATO",
  es: "ESTADO",
  fr: "ÉTAT",
  de: "STATUS",
  pt: "ESTADO"
}, rt = {
  en: { online: "ONLINE", initializing: "STARTING", activating: "STARTING", starting: "STARTING", turning_off: "STOPPING", stopping: "STOPPING", waiting: "WAITING", retrying: "RETRY", idle: "IDLE", standby: "IDLE", cooling: "COOLING", heating: "HEATING", drying: "DRYING", dehumidifying: "DRYING", off: "OFF", on: "ACTIVE", active: "ACTIVE", degraded: "DEGRADED", error: "ERROR", unknown: "UNKNOWN" },
  it: { online: "ONLINE", initializing: "AVVIO", activating: "AVVIO", starting: "AVVIO", turning_off: "ARRESTO", stopping: "ARRESTO", waiting: "ATTESA", retrying: "RIPROVA", idle: "ATTESA", standby: "ATTESA", cooling: "RAFFRESCA", heating: "RISCALDA", drying: "DEUMIDIFICA", dehumidifying: "DEUMIDIFICA", off: "SPENTO", on: "ATTIVO", active: "ATTIVO", degraded: "DEGRADATO", error: "ERRORE", unknown: "SCONOSCIUTO" },
  es: { online: "EN LÍNEA", initializing: "INICIANDO", activating: "INICIANDO", starting: "INICIANDO", turning_off: "APAGANDO", stopping: "APAGANDO", waiting: "ESPERA", retrying: "REINTENTA", idle: "EN ESPERA", standby: "EN ESPERA", cooling: "ENFRIANDO", heating: "CALENTANDO", drying: "SECANDO", dehumidifying: "SECANDO", off: "APAGADO", on: "ACTIVO", active: "ACTIVO", degraded: "DEGRADADO", error: "ERROR", unknown: "DESCONOCIDO" },
  fr: { online: "EN LIGNE", initializing: "DÉMARRAGE", activating: "DÉMARRAGE", starting: "DÉMARRAGE", turning_off: "ARRÊT", stopping: "ARRÊT", waiting: "ATTENTE", retrying: "RÉESSAIE", idle: "ATTENTE", standby: "ATTENTE", cooling: "REFROIDIT", heating: "CHAUFFE", drying: "DÉSHUMIDIFIE", dehumidifying: "DÉSHUMIDIFIE", off: "ARRÊTÉ", on: "ACTIF", active: "ACTIF", degraded: "DÉGRADÉ", error: "ERREUR", unknown: "INCONNU" },
  de: { online: "ONLINE", initializing: "STARTET", activating: "STARTET", starting: "STARTET", turning_off: "STOPPT", stopping: "STOPPT", waiting: "WARTET", retrying: "NEUSTART", idle: "BEREIT", standby: "BEREIT", cooling: "KÜHLT", heating: "HEIZT", drying: "ENTFEUCHTET", dehumidifying: "ENTFEUCHTET", off: "AUS", on: "AKTIV", active: "AKTIV", degraded: "EINGESCHRÄNKT", error: "FEHLER", unknown: "UNBEKANNT" },
  pt: { online: "ONLINE", initializing: "A INICIAR", activating: "A INICIAR", starting: "A INICIAR", turning_off: "A DESLIGAR", stopping: "A DESLIGAR", waiting: "ESPERA", retrying: "REPETE", idle: "EM ESPERA", standby: "EM ESPERA", cooling: "A ARREFECER", heating: "A AQUECER", drying: "A SECAR", dehumidifying: "A SECAR", off: "DESLIGADO", on: "ATIVO", active: "ATIVO", degraded: "DEGRADADO", error: "ERRO", unknown: "DESCONHECIDO" }
}, ne = {
  en: { confirmed: "Confirmed", estimated: "Estimated" },
  it: { confirmed: "Confermato", estimated: "Stimato" },
  es: { confirmed: "Confirmado", estimated: "Estimado" },
  fr: { confirmed: "Confirmé", estimated: "Estimé" },
  de: { confirmed: "Bestätigt", estimated: "Geschätzt" },
  pt: { confirmed: "Confirmado", estimated: "Estimado" }
}, k = class k extends S {
  constructor() {
    super(...arguments), this._statusDiscovery = new Yt(), this._statusDiscoveryGeneration = 0, this._statusRegistrySubscriptionGeneration = 0;
  }
  static getConfigForm() {
    return {
      schema: [
        {
          name: "entity",
          required: !0,
          selector: { entity: { domain: "climate" } }
        },
        { name: "name", selector: { text: {} } },
        {
          type: "expandable",
          name: "advanced",
          title: "Advanced",
          flatten: !0,
          schema: [
            { name: "show_presets", selector: { boolean: {} } },
            { name: "show_consumption", selector: { boolean: {} } },
            {
              name: "power_entity",
              selector: { entity: { domain: "sensor" } }
            },
            { name: "status_entity", selector: { entity: {} } },
            { name: "show_climate_status", selector: { boolean: {} } },
            { name: "show_advanced_status", selector: { boolean: {} } },
            {
              name: "language",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "auto", label: "Automatic (Home Assistant)" },
                    { value: "en", label: "English" },
                    { value: "it", label: "Italiano" },
                    { value: "es", label: "Español" },
                    { value: "fr", label: "Français" },
                    { value: "de", label: "Deutsch" },
                    { value: "pt", label: "Português" }
                  ]
                }
              }
            },
            {
              name: "border_mode",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "state", label: "State color" },
                    { value: "neutral", label: "Neutral" }
                  ]
                }
              }
            },
            {
              name: "hvac_button_labels",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "auto", label: "Automatic" },
                    { value: "show", label: "Always show" },
                    { value: "hide", label: "Icons only" }
                  ]
                }
              }
            },
            {
              name: "preset_button_labels",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "auto", label: "Automatic" },
                    { value: "show", label: "Always show" },
                    { value: "hide", label: "Icons only" }
                  ]
                }
              }
            },
            {
              name: "status_display",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "wheel", label: "Alphabet wheel" },
                    { value: "indicators", label: "ON / IDLE / OFF indicators" }
                  ]
                }
              }
            },
            {
              name: "display_font",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "lcd", label: "Original LCD" },
                    { value: "condensed", label: "Condensed" },
                    { value: "mono", label: "Monospace" }
                  ]
                }
              }
            },
            {
              name: "display_size",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "standard", label: "Standard" },
                    { value: "large", label: "Large" }
                  ]
                }
              }
            },
            {
              name: "display_theme",
              selector: {
                select: {
                  mode: "dropdown",
                  options: [
                    { value: "state", label: "State color" },
                    { value: "classic_green", label: "Classic green LCD" }
                  ]
                }
              }
            },
            {
              name: "temperature_step",
              selector: {
                number: { min: 0.1, max: 5, step: 0.1, mode: "box" }
              }
            },
            {
              name: "tap_action",
              selector: {
                ui_action: {
                  actions: ["more-info", "none"],
                  default_action: "none"
                }
              },
              context: { entity: "entity" }
            }
          ]
        }
      ],
      computeLabel: (t) => ({
        entity: "Climate entity",
        name: "Custom name",
        show_presets: "Show presets",
        show_consumption: "Show power consumption",
        power_entity: "Power sensor",
        status_entity: "Advanced status sensor",
        show_climate_status: "Show ON / IDLE / OFF status",
        show_advanced_status: "Show advanced status",
        language: "Language",
        border_mode: "Card border",
        hvac_button_labels: "HVAC button labels",
        preset_button_labels: "Preset button labels",
        status_display: "Status display",
        display_font: "Display font",
        display_size: "Display size",
        display_theme: "Display theme",
        temperature_step: "Temperature step",
        tap_action: "Display tap action"
      })[t.name ?? ""] ?? t.name,
      computeHelper: (t) => t.name === "power_entity" ? "Optional override. Without it, an autodiscovered ThermoPilot status sensor can provide power." : t.name === "status_entity" ? "Optional override. ThermoPilot status sensors are discovered automatically on the climate device." : t.name === "show_advanced_status" ? "Uses the manual sensor or the uniquely autodiscovered ThermoPilot status sensor." : void 0
    };
  }
  static getStubConfig(t, e) {
    return {
      entity: e.find((i) => i.startsWith("climate.")) ?? Object.keys(t.states).find(
        (i) => i.startsWith("climate.")
      ) ?? "",
      show_presets: !0,
      show_consumption: !1,
      show_climate_status: !0,
      show_advanced_status: !1,
      border_mode: "state",
      language: "en",
      hvac_button_labels: "hide",
      preset_button_labels: "hide",
      status_display: "indicators",
      display_font: "lcd",
      display_size: "standard",
      display_theme: "state",
      temperature_step: 0.1,
      tap_action: { action: "none" }
    };
  }
  setConfig(t) {
    if (!t?.entity)
      throw new Error("ThermoMatrix Card requires a climate entity.");
    if (!t.entity.startsWith("climate."))
      throw new Error("The configured entity must use the climate domain.");
    const e = this._config?.entity, s = this._config?.status_entity;
    this._config = {
      ...t,
      show_presets: t.show_presets ?? !0,
      show_consumption: t.show_consumption ?? !1,
      show_climate_status: t.show_climate_status ?? !0,
      show_advanced_status: t.show_advanced_status ?? !1,
      border_mode: t.border_mode ?? "state",
      language: t.language ?? "en",
      hvac_button_labels: t.hvac_button_labels ?? "hide",
      preset_button_labels: t.preset_button_labels ?? "hide",
      status_display: t.status_display ?? "indicators",
      display_font: t.display_font ?? "lcd",
      display_size: t.display_size ?? "standard",
      display_theme: t.display_theme ?? "state",
      temperature_step: t.temperature_step ?? 0.1,
      tap_action: t.tap_action ?? { action: "none" }
    }, (e !== this._config.entity || s !== this._config.status_entity) && (this._invalidateStatusDiscovery(), this._ensureStatusDiscovery());
  }
  firstUpdated() {
    this._labelResizeObserver = new ResizeObserver(
      () => this._scheduleLabelSync()
    ), this._labelResizeObserver.observe(this), this._scheduleLabelSync(), this._syncStatusRegistrySubscription(), this._ensureStatusDiscovery();
  }
  connectedCallback() {
    super.connectedCallback(), this.hass && this._config && (this._syncStatusRegistrySubscription(), this._ensureStatusDiscovery());
  }
  updated(t) {
    this._scheduleLabelSync(), t.has("hass") && (this._syncStatusRegistrySubscription(), this._ensureStatusDiscovery());
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._labelResizeObserver?.disconnect(), this._unsubscribeStatusRegistry?.(), this._unsubscribeStatusRegistry = void 0, this._statusRegistryConnection = void 0, this._statusRegistrySubscriptionGeneration += 1, this._invalidateStatusDiscovery(), this._labelSyncFrame !== void 0 && cancelAnimationFrame(this._labelSyncFrame);
  }
  getCardSize() {
    return 8;
  }
  render() {
    if (!this.hass || !this._config)
      return c`<ha-card><div class="warning">${this._t("loading")}</div></ha-card>`;
    const t = this.hass.states[this._config.entity];
    if (!t)
      return c`<ha-card>
        <div class="warning">
          ${this._config.entity}: ${this._t("unavailable")}
        </div>
      </ha-card>`;
    const e = t.state, s = this.hass.themes?.darkMode === !0, i = this._modeColor(e, s), o = this._config.border_mode === "state", a = o && e !== "off" ? `0 0 18px color-mix(in srgb, ${i} 58%, transparent)` : "0 4px 14px rgba(0,0,0,0.10)";
    return c`
      <ha-card
        class=${`${s ? "dark " : ""}display-font-${this._config.display_font ?? "lcd"} display-size-${this._config.display_size ?? "standard"}`}
        style=${`--tm-border-color:${o ? i : "var(--tm-neutral-border)"};--tm-card-shadow:${a};`}
      >
        <div class="layout">
          ${this._renderModes(t)} ${this._renderDisplay(t)}
          ${this._renderTemperatureControls(t)}
          ${this._renderPresets(t)}
          <div class="brand">
            ${this._config.name ?? t.attributes.friendly_name ?? "ThermoMatrix"}
          </div>
        </div>
      </ha-card>
    `;
  }
  _renderModes(t) {
    const e = this._stringArray(t.attributes.hvac_modes), s = e.length > 0 ? e : [t.state], i = this.hass.themes?.darkMode === !0;
    return c`
      <div
        class="button-grid button-grid-modes label-${this._config.hvac_button_labels ?? "auto"}"
        style=${`--columns:${Math.min(s.length, 5)}`}
      >
        ${s.map((o) => {
      const a = L[o] ?? {
        icon: "mdi:radiobox-blank",
        color: "#64748b"
      }, l = this._modeColor(o, i, a.color), r = this._translateValue(o);
      return c`
            <button
              class="mode-button ${t.state === o ? "active" : ""}"
              style=${`--button-color:${l}`}
              title=${r}
              aria-label=${r}
              @click=${() => this._setHvacMode(o)}
            >
              <ha-icon class="mode-icon" icon=${a.icon}></ha-icon>
              <span class="button-label">${r}</span>
            </button>
          `;
    })}
      </div>
    `;
  }
  _modeColor(t, e, s = "#64748b") {
    return e ? Jt[t] ?? L[t]?.color ?? s : L[t]?.color ?? s;
  }
  _renderDisplay(t) {
    const e = t.state, s = String(t.attributes.hvac_action ?? ""), i = e === "off" ? "OFF" : s === "idle" ? "IDLE" : (Qt.has(s), "ON"), o = i === "ON", a = i === "IDLE", l = i === "OFF", r = jt(
      this._config.status_entity,
      this._statusDiscovery.get(this._config.entity, this.hass.connection)
    ), p = r ? this.hass.states[r] : void 0, u = this._config.power_entity ? this.hass.states[this._config.power_entity] : void 0, d = this._config.show_climate_status ?? !0, g = (this._config.show_advanced_status ?? !1) && !!p, m = Kt(
      u?.state,
      p?.attributes.power,
      !!this._config.power_entity
    ), v = u ? String(u.attributes.unit_of_measurement ?? "") : m !== void 0 ? "W" : "", mt = !!this._config.show_consumption && m !== void 0, z = this.hass.themes?.darkMode === !0, q = this._config.display_theme === "classic_green", gt = q ? "#aebd8e" : (z ? {
      heat: "#E36304",
      cool: "#007AF1",
      dry: "#00A878",
      fan_only: "#00A7C4",
      auto: "#7C3AED",
      heat_cool: "#7C3AED",
      off: "#334155"
    } : {
      heat: "#fed7aa",
      cool: "#bfdbfe",
      dry: "#a7f3d0",
      fan_only: "#a5f3fc",
      off: "#d1d5db"
    })[e] ?? (z ? "#334155" : "#cbd5e1");
    return c`
      <div
        class="lcd-panel ${z ? "dark" : ""} ${q ? "classic-green" : ""} ${this._hasDisplayTapAction() ? "actionable" : ""}"
        style=${`--lcd-background:${gt}`}
        role=${this._hasDisplayTapAction() ? "button" : h}
        tabindex=${this._hasDisplayTapAction() ? "0" : h}
        @click=${this._handleDisplayTap}
        @keydown=${this._handleDisplayKeydown}
      >
        <div class="lcd-values ${d ? "" : "external"}">
          <div class="lcd-reading current">
            <span class="lcd-reading-label">${this._t("environment")}</span>
            ${this._renderTemperature(t.attributes.current_temperature)}
          </div>
          ${d ? this._config.status_display === "indicators" ? c`
                  <div class="status-stack">
                    ${this._renderStatusIndicator("ON", o, !0)}
                    ${this._renderStatusIndicator("IDLE", a, !0)}
                    ${this._renderStatusIndicator("OFF", l, !1)}
                  </div>
                ` : c`${this._renderStatusWheel(i)}` : h}
          <div class="lcd-reading target">
            <span class="lcd-reading-label">${this._t("target")}</span>
            ${this._renderTemperature(t.attributes.temperature)}
          </div>
        </div>
        ${this._renderSupplementalRow(
      p,
      m,
      v,
      g,
      mt
    )}
      </div>
    `;
  }
  _renderTemperature(t) {
    const e = Number(t), s = Number.isFinite(e) ? e.toFixed(1) : "--";
    return this._config.display_font !== "lcd" ? c`
        <span class="text-display temperature-text">
          ${s}<i class="text-degree">°</i>
        </span>
      ` : c`
      <span class="lcd-display">
        ${[...s].map(
      (i) => i === "." ? c`<i class="lcd-dot"></i>` : this._renderDigit(i)
    )}
        <i class="lcd-degree"></i>
      </span>
    `;
  }
  _renderDigit(t) {
    const e = Xt[t] ?? "";
    return c`
      <span class="lcd-digit">
        ${[..."abcdefg"].map(
      (s) => c`<i
              class="lcd-segment ${s} ${e.includes(s) ? "on" : ""}"
            ></i>`
    )}
      </span>
    `;
  }
  _renderStatusWheel(t) {
    return c`
      <div class="status-wheel" role="status" aria-label=${t}>
        ${[...t === "IDLE" ? t : t === "OFF" ? " OFF" : "  ON"].map(
      (s, i) => ot(
        `${t}-${i}`,
        this._renderWheelReel(s, i)
      )
    )}
      </div>
    `;
  }
  _renderStatusIndicator(t, e, s) {
    return c`
      <span class="status-box ${e ? "active" : ""} ${e && s ? "blink" : ""}">
        <span class="status-text">${t}</span>
      </span>
    `;
  }
  _renderWheelReel(t, e) {
    const s = Math.max(0, at.indexOf(t));
    return c`
      <span class="wheel-window" aria-hidden="true">
        <span
          class="wheel-strip"
          style=${`--wheel-offset:${6 - s * 14}px;--wheel-delay:${e * 55}ms`}
        >
          ${at.map(
      (i) => c`<i class=${i === t ? "selected" : ""}>
                ${this._renderMatrixChar(i)}
              </i>`
    )}
        </span>
      </span>
    `;
  }
  _renderExternalStatus(t) {
    return ot(
      t,
      c`<span class="external-status-slide">${t}</span>`
    );
  }
  _renderMatrixChar(t) {
    const e = (te[t] ?? Array(7).fill("00000")).join("");
    return c`
      <span class="matrix-char">
        ${[...e].map(
      (s) => c`<i class="matrix-pixel ${s === "1" ? "on" : ""}"></i>`
    )}
      </span>
    `;
  }
  _renderTemperatureControls(t) {
    return c`
      <div class="temperature-controls">
        <button title="Diminuisci temperatura" @click=${() => this._step(t, -1)}>
          −
        </button>
        <button title="Aumenta temperatura" @click=${() => this._step(t, 1)}>
          +
        </button>
      </div>
    `;
  }
  _renderPresets(t) {
    if (!this._config.show_presets)
      return h;
    const e = this._stringArray(t.attributes.preset_modes);
    if (e.length === 0)
      return h;
    const s = String(t.attributes.preset_mode ?? ""), i = this.hass.themes?.darkMode === !0;
    return c`
      <div
        class="button-grid button-grid-presets label-${this._config.preset_button_labels ?? "auto"}"
        style=${`--columns:${Math.min(e.length, 5)}`}
      >
        ${e.map((o) => {
      const a = ee[o] ?? {
        icon: "mdi:bookmark-outline",
        color: "#64748b"
      }, l = i ? se[o] ?? a.color : a.color, r = this._translateValue(o);
      return c`
            <button
              class=${s === o ? "active" : ""}
              style=${`--button-color:${l}`}
              title=${r}
              aria-label=${r}
              @click=${() => this._setPreset(o)}
            >
              <ha-icon class="preset-icon" icon=${a.icon}></ha-icon>
              <span class="button-label">${r}</span>
            </button>
          `;
    })}
      </div>
    `;
  }
  _renderSupplementalRow(t, e, s, i, o) {
    if (!i && !o)
      return h;
    const a = t ? this._translateAdvancedStatus(t.state) : this._t("unavailable").toUpperCase(), l = String(t?.attributes.state_quality ?? ""), r = l === "confirmed" || l === "estimated" ? l : "", p = ne[this._language()][r], u = p ? `${a} · ${p}` : a;
    return c`
      <div class="lcd-supplemental ${i ? "" : "power-only"}">
        ${i ? c`
              <div class="lcd-advanced-status">
                <span class="lcd-supplemental-label">
                  ${ie[this._language()]}
                </span>
                <span
                  class="lcd-advanced-value quality-${r || "unknown"}"
                  title=${u}
                  aria-label=${u}
                >
                  ${this._renderExternalStatus(a)}
                </span>
              </div>
            ` : h}
        ${o ? c`
              <div class="lcd-power">
                <span class="lcd-supplemental-label">
                  ${this._t("consumption")}
                </span>
                <span class="lcd-power-value">
                  ${this._renderLcdNumber(e)}
                  <span class="lcd-consumption-unit">${s}</span>
                </span>
              </div>
            ` : h}
      </div>
    `;
  }
  _renderLcdNumber(t) {
    const e = Number(t), s = Number.isFinite(e) ? String(Math.round(e * 10) / 10) : "--";
    return this._config.display_font !== "lcd" ? c`<span class="text-display power-text">${s}</span>` : c`
      <span class="lcd-display lcd-number">
        ${[...s].map(
      (i) => i === "." ? c`<i class="lcd-dot"></i>` : this._renderDigit(i)
    )}
      </span>
    `;
  }
  _renderMatrixWord(t) {
    return c`
      <span class="matrix-word">
        ${[...t].map(
      (e) => e === " " ? c`<span class="matrix-space"></span>` : this._renderMatrixChar(e)
    )}
      </span>
    `;
  }
  async _setHvacMode(t) {
    await this.hass.callService("climate", "set_hvac_mode", {
      entity_id: this._config.entity,
      hvac_mode: t
    });
  }
  _invalidateStatusDiscovery() {
    this._statusDiscoveryGeneration += 1, this._statusDiscovery.invalidate();
  }
  async _ensureStatusDiscovery() {
    if (!this.hass || !this._config || this._config.status_entity || this._statusDiscoveryPromise || this._statusDiscovery.get(this._config.entity, this.hass.connection) !== void 0)
      return;
    const t = this._config.entity, e = this.hass.connection, s = this._statusDiscoveryGeneration, i = this.hass.callWS({
      type: "config/entity_registry/list"
    });
    this._statusDiscoveryPromise = i.then((o) => {
      s !== this._statusDiscoveryGeneration || t !== this._config.entity || e !== this.hass.connection || (this._statusDiscovery.set(
        t,
        e,
        Wt(t, o, this.hass.states)
      ), this.requestUpdate());
    }).catch(() => {
      s === this._statusDiscoveryGeneration && this._statusDiscovery.set(t, e, null);
    }).finally(() => {
      this._statusDiscoveryPromise = void 0, this._ensureStatusDiscovery();
    }), await this._statusDiscoveryPromise;
  }
  _syncStatusRegistrySubscription() {
    const t = this.hass?.connection;
    if (t === this._statusRegistryConnection)
      return;
    this._unsubscribeStatusRegistry?.(), this._unsubscribeStatusRegistry = void 0, this._statusRegistryConnection = t, this._invalidateStatusDiscovery();
    const e = ++this._statusRegistrySubscriptionGeneration;
    t?.subscribeEvents && t.subscribeEvents(
      () => {
        this._invalidateStatusDiscovery(), this._ensureStatusDiscovery();
      },
      "entity_registry_updated"
    ).then((s) => {
      e === this._statusRegistrySubscriptionGeneration ? this._unsubscribeStatusRegistry = s : s();
    }).catch(() => {
    });
  }
  _hasDisplayTapAction() {
    return this._config.tap_action?.action === "more-info";
  }
  _handleDisplayTap() {
    this._hasDisplayTapAction() && this.dispatchEvent(new CustomEvent("hass-more-info", {
      bubbles: !0,
      composed: !0,
      detail: { entityId: this._config.entity }
    }));
  }
  _handleDisplayKeydown(t) {
    t.key !== "Enter" && t.key !== " " || (t.preventDefault(), this._handleDisplayTap());
  }
  async _setPreset(t) {
    await this.hass.callService("climate", "set_preset_mode", {
      entity_id: this._config.entity,
      preset_mode: t
    });
  }
  async _step(t, e) {
    const s = Number(t.attributes.temperature);
    if (!Number.isFinite(s))
      return;
    const i = Number(this._config.temperature_step), o = Number(t.attributes.target_temp_step), a = Number.isFinite(i) ? i : Number.isFinite(o) ? o : 0.5, l = Math.round((s + e * a) * 10) / 10;
    await this.hass.callService("climate", "set_temperature", {
      entity_id: this._config.entity,
      temperature: l
    });
  }
  _stringArray(t) {
    return Array.isArray(t) ? t.filter((e) => typeof e == "string") : [];
  }
  _humanize(t) {
    return t.replaceAll("_", " ").replace(/\b\w/g, (e) => e.toUpperCase());
  }
  _language() {
    const t = this._config.language ?? "auto", e = t === "auto" ? String(this.hass.locale?.language ?? "en").toLowerCase().split("-")[0] : t;
    return e in O ? e : "en";
  }
  _t(t) {
    return O[this._language()][t] ?? O.en[t];
  }
  _translateValue(t) {
    return t in O.en ? this._t(t) : this._humanize(t);
  }
  _translateAdvancedStatus(t) {
    const e = t.trim().toLowerCase().replaceAll(" ", "_"), s = this._language();
    return rt[s][e] ?? rt.en[e] ?? this._humanize(t).toUpperCase();
  }
  _scheduleLabelSync() {
    this._labelSyncFrame !== void 0 && cancelAnimationFrame(this._labelSyncFrame), this._labelSyncFrame = requestAnimationFrame(() => {
      this._labelSyncFrame = void 0, this._syncAutoLabels();
    });
  }
  _syncAutoLabels() {
    this.renderRoot.querySelectorAll(".button-grid.label-auto").forEach((t) => {
      const s = [...t.querySelectorAll("button")].some((i) => {
        const o = i.querySelector(".button-label");
        if (!o)
          return !1;
        const a = i.getBoundingClientRect().width - 20;
        return o.scrollWidth > a;
      });
      t.classList.toggle("labels-compact", s);
    });
  }
};
k.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 }
}, k.styles = Vt;
let F = k;
customElements.get("thermomatrix-card") || customElements.define("thermomatrix-card", F);
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: "thermomatrix-card",
  name: "ThermoMatrix Card",
  description: "Termostato LCD modulare per entità climate",
  preview: !0,
  getEntitySuggestion: (n, t) => Bt(t)
});
console.info(
  `%c THERMOMATRIX-CARD %c v${Zt} `,
  "color:white;background:#172554;font-weight:700",
  "color:#172554;background:#bfdbfe"
);
export {
  F as ThermoMatrixCard
};
