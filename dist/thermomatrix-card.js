const P = globalThis, I = P.ShadowRoot && (P.ShadyCSS === void 0 || P.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, W = /* @__PURE__ */ Symbol(), q = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== W) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (I && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = q.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && q.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ht = (i) => new it(typeof i == "string" ? i : i + "", void 0, W), pt = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, o, r) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + i[r + 1], i[0]);
  return new it(e, i, W);
}, ut = (i, t) => {
  if (I) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), o = P.litNonce;
    o !== void 0 && s.setAttribute("nonce", o), s.textContent = e.cssText, i.appendChild(s);
  }
}, K = I ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return ht(e);
})(i) : i;
const { is: mt, defineProperty: bt, getOwnPropertyDescriptor: gt, getOwnPropertyNames: ft, getOwnPropertySymbols: _t, getPrototypeOf: xt } = Object, U = globalThis, Y = U.trustedTypes, $t = Y ? Y.emptyScript : "", yt = U.reactiveElementPolyfillSupport, A = (i, t) => i, L = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? $t : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, nt = (i, t) => !mt(i, t), G = { attribute: !0, type: String, converter: L, reflect: !1, useDefault: !1, hasChanged: nt };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), U.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let $ = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = G) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = /* @__PURE__ */ Symbol(), o = this.getPropertyDescriptor(t, s, e);
      o !== void 0 && bt(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: o, set: r } = gt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: o, set(n) {
      const l = o?.call(this);
      r?.call(this, n), this.requestUpdate(t, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? G;
  }
  static _$Ei() {
    if (this.hasOwnProperty(A("elementProperties"))) return;
    const t = xt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(A("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(A("properties"))) {
      const e = this.properties, s = [...ft(e), ..._t(e)];
      for (const o of s) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, o] of e) this.elementProperties.set(s, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const o = this._$Eu(e, s);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const o of s) e.unshift(K(o));
    } else t !== void 0 && e.push(K(t));
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
    return ut(t, this.constructor.elementStyles), t;
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
    const s = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : L).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(o) : this.setAttribute(o, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, o = s._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const r = s.getPropertyOptions(o), n = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : L;
      this._$Em = o;
      const l = n.fromAttribute(e, r.type);
      this[o] = l ?? this._$Ej?.get(o) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, s, o = !1, r) {
    if (t !== void 0) {
      const n = this.constructor;
      if (o === !1 && (r = this[t]), s ??= n.getPropertyOptions(t), !((s.hasChanged ?? nt)(r, e) || s.useDefault && s.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(n._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: o, wrapped: r }, n) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), r !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [o, r] of this._$Ep) this[o] = r;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [o, r] of s) {
        const { wrapped: n } = r, l = this[o];
        n !== !0 || this._$AL.has(o) || l === void 0 || this.C(o, void 0, r, l);
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
$.elementStyles = [], $.shadowRootOptions = { mode: "open" }, $[A("elementProperties")] = /* @__PURE__ */ new Map(), $[A("finalized")] = /* @__PURE__ */ new Map(), yt?.({ ReactiveElement: $ }), (U.reactiveElementVersions ??= []).push("2.1.2");
const B = globalThis, Z = (i) => i, T = B.trustedTypes, J = T ? T.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, at = "$lit$", g = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + g, vt = `<${lt}>`, x = document, S = () => x.createComment(""), C = (i) => i === null || typeof i != "object" && typeof i != "function", j = Array.isArray, wt = (i) => j(i) || typeof i?.[Symbol.iterator] == "function", H = `[ 	
\f\r]`, w = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, X = /-->/g, Q = />/g, f = RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), tt = /'/g, et = /"/g, ct = /^(?:script|style|textarea|title)$/i, At = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), c = At(1), y = /* @__PURE__ */ Symbol.for("lit-noChange"), p = /* @__PURE__ */ Symbol.for("lit-nothing"), st = /* @__PURE__ */ new WeakMap(), _ = x.createTreeWalker(x, 129);
function dt(i, t) {
  if (!j(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return J !== void 0 ? J.createHTML(t) : t;
}
const Et = (i, t) => {
  const e = i.length - 1, s = [];
  let o, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = w;
  for (let l = 0; l < e; l++) {
    const a = i[l];
    let h, u, d = -1, m = 0;
    for (; m < a.length && (n.lastIndex = m, u = n.exec(a), u !== null); ) m = n.lastIndex, n === w ? u[1] === "!--" ? n = X : u[1] !== void 0 ? n = Q : u[2] !== void 0 ? (ct.test(u[2]) && (o = RegExp("</" + u[2], "g")), n = f) : u[3] !== void 0 && (n = f) : n === f ? u[0] === ">" ? (n = o ?? w, d = -1) : u[1] === void 0 ? d = -2 : (d = n.lastIndex - u[2].length, h = u[1], n = u[3] === void 0 ? f : u[3] === '"' ? et : tt) : n === et || n === tt ? n = f : n === X || n === Q ? n = w : (n = f, o = void 0);
    const b = n === f && i[l + 1].startsWith("/>") ? " " : "";
    r += n === w ? a + vt : d >= 0 ? (s.push(h), a.slice(0, d) + at + a.slice(d) + g + b) : a + g + (d === -2 ? l : b);
  }
  return [dt(i, r + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class k {
  constructor({ strings: t, _$litType$: e }, s) {
    let o;
    this.parts = [];
    let r = 0, n = 0;
    const l = t.length - 1, a = this.parts, [h, u] = Et(t, e);
    if (this.el = k.createElement(h, s), _.currentNode = this.el.content, e === 2 || e === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (o = _.nextNode()) !== null && a.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const d of o.getAttributeNames()) if (d.endsWith(at)) {
          const m = u[n++], b = o.getAttribute(d).split(g), O = /([.?@])?(.*)/.exec(m);
          a.push({ type: 1, index: r, name: O[2], strings: b, ctor: O[1] === "." ? Ct : O[1] === "?" ? kt : O[1] === "@" ? Mt : z }), o.removeAttribute(d);
        } else d.startsWith(g) && (a.push({ type: 6, index: r }), o.removeAttribute(d));
        if (ct.test(o.tagName)) {
          const d = o.textContent.split(g), m = d.length - 1;
          if (m > 0) {
            o.textContent = T ? T.emptyScript : "";
            for (let b = 0; b < m; b++) o.append(d[b], S()), _.nextNode(), a.push({ type: 2, index: ++r });
            o.append(d[m], S());
          }
        }
      } else if (o.nodeType === 8) if (o.data === lt) a.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = o.data.indexOf(g, d + 1)) !== -1; ) a.push({ type: 7, index: r }), d += g.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const s = x.createElement("template");
    return s.innerHTML = t, s;
  }
}
function v(i, t, e = i, s) {
  if (t === y) return t;
  let o = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const r = C(t) ? void 0 : t._$litDirective$;
  return o?.constructor !== r && (o?._$AO?.(!1), r === void 0 ? o = void 0 : (o = new r(i), o._$AT(i, e, s)), s !== void 0 ? (e._$Co ??= [])[s] = o : e._$Cl = o), o !== void 0 && (t = v(i, o._$AS(i, t.values), o, s)), t;
}
class St {
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
    const { el: { content: e }, parts: s } = this._$AD, o = (t?.creationScope ?? x).importNode(e, !0);
    _.currentNode = o;
    let r = _.nextNode(), n = 0, l = 0, a = s[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let h;
        a.type === 2 ? h = new M(r, r.nextSibling, this, t) : a.type === 1 ? h = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (h = new Ot(r, this, t)), this._$AV.push(h), a = s[++l];
      }
      n !== a?.index && (r = _.nextNode(), n++);
    }
    return _.currentNode = x, o;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class M {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, s, o) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = o, this._$Cv = o?.isConnected ?? !0;
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
    t = v(this, t, e), C(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== y && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : wt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== p && C(this._$AH) ? this._$AA.nextSibling.data = t : this.T(x.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, o = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = k.createElement(dt(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === o) this._$AH.p(e);
    else {
      const r = new St(o, this), n = r.u(this.options);
      r.p(e), this.T(n), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = st.get(t.strings);
    return e === void 0 && st.set(t.strings, e = new k(t)), e;
  }
  k(t) {
    j(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, o = 0;
    for (const r of t) o === e.length ? e.push(s = new M(this.O(S()), this.O(S()), this, this.options)) : s = e[o], s._$AI(r), o++;
    o < e.length && (this._$AR(s && s._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const s = Z(t).nextSibling;
      Z(t).remove(), t = s;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class z {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, o, r) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  _$AI(t, e = this, s, o) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) t = v(this, t, e, 0), n = !C(t) || t !== this._$AH && t !== y, n && (this._$AH = t);
    else {
      const l = t;
      let a, h;
      for (t = r[0], a = 0; a < r.length - 1; a++) h = v(this, l[s + a], e, a), h === y && (h = this._$AH[a]), n ||= !C(h) || h !== this._$AH[a], h === p ? t = p : t !== p && (t += (h ?? "") + r[a + 1]), this._$AH[a] = h;
    }
    n && !o && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ct extends z {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class kt extends z {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class Mt extends z {
  constructor(t, e, s, o, r) {
    super(t, e, s, o, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = v(this, t, e, 0) ?? p) === y) return;
    const s = this._$AH, o = t === p && s !== p || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== p && (s === p || o);
    o && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ot {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    v(this, t);
  }
}
const Nt = B.litHtmlPolyfillSupport;
Nt?.(k, M), (B.litHtmlVersions ??= []).push("3.3.3");
const Pt = (i, t, e) => {
  const s = e?.renderBefore ?? t;
  let o = s._$litPart$;
  if (o === void 0) {
    const r = e?.renderBefore ?? null;
    s._$litPart$ = o = new M(t.insertBefore(S(), r), r, void 0, e ?? {});
  }
  return o._$AI(i), o;
};
const V = globalThis;
let E = class extends $ {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Pt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return y;
  }
};
E._$litElement$ = !0, E.finalized = !0, V.litElementHydrateSupport?.({ LitElement: E });
const Tt = V.litElementPolyfillSupport;
Tt?.({ LitElement: E });
(V.litElementVersions ??= []).push("4.2.2");
const Rt = (i) => (...t) => ({ _$litDirective$: i, values: t });
let Ut = class {
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
const zt = {}, Ht = (i, t = zt) => i._$AH = t;
const ot = Rt(class extends Ut {
  constructor() {
    super(...arguments), this.key = p;
  }
  render(i, t) {
    return this.key = i, t;
  }
  update(i, [t, e]) {
    return t !== this.key && (Ht(i), this.key = t), e;
  }
}), Dt = pt`
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
    min-width: 0;
  }

  .lcd-reading.current {
    font-size: clamp(44px, 13vw, 54px);
    text-align: left;
  }

  .lcd-reading.target {
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

  .status-box.active.blink .matrix-word {
    animation: status-text-blink 1.15s ease-in-out infinite;
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

  .lcd-external-status {
    display: flex;
    width: 100%;
    min-height: 28px;
    margin-top: 9px;
    padding-top: 7px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-top: 1px solid color-mix(in srgb, currentColor 28%, transparent);
    box-sizing: border-box;
    text-align: center;
  }

  .lcd-external-status .matrix-word {
    max-width: 100%;
    justify-content: center;
    gap: 1.4px;
    --matrix-pixel-size: 1.05px;
    --matrix-pixel-gap: 0.42px;
  }

  .external-status-slide {
    display: inline-flex;
    max-width: 100%;
    animation: external-status-roll 560ms cubic-bezier(0.2, 0.72, 0.22, 1)
      both;
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

  .lcd-consumption {
    position: relative;
    display: grid;
    grid-template-columns: 18px minmax(0, 1fr) 66px;
    gap: 8px;
    align-items: center;
    width: 100%;
    min-width: 0;
    height: 34px;
    margin-top: 9px;
    padding: 7px 4px 0;
    border-top: 1px solid color-mix(in srgb, currentColor 28%, transparent);
    box-sizing: border-box;
    overflow: visible;
    contain: layout;
  }

  .lcd-consumption-icon {
    font-size: 14px;
  }

  .lcd-consumption-center {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-flex;
    align-items: center;
    color: #111827;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }

  .lcd-panel.dark .lcd-consumption-center {
    color: #f8fafc;
  }

  .lcd-consumption-label {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.68;
  }

  .lcd-consumption-label .matrix-word {
    --matrix-pixel-size: 1.2px;
    --matrix-pixel-gap: 0.42px;
  }

  .preset-icon {
    display: block;
    margin-bottom: 3px;
    font-size: 17px;
    line-height: 1;
  }

  .lcd-consumption-value {
    display: inline-flex;
    grid-column: 3;
    width: 66px;
    min-width: 66px;
    max-width: 66px;
    height: 22px;
    align-items: center;
    justify-content: flex-end;
    gap: 3px;
    font-size: 17px;
    line-height: 1;
    color: #111827;
    white-space: nowrap;
    overflow: visible;
    contain: layout;
  }

  .lcd-panel.dark .lcd-consumption-value {
    color: #f8fafc;
  }

  .lcd-consumption-value .lcd-number {
    flex: 0 0 auto;
    height: 17px;
    align-self: center;
    font-size: 17px;
  }

  .lcd-consumption-unit {
    padding-bottom: 0;
    font: 800 9px/1 Arial, sans-serif;
    letter-spacing: 0.06em;
  }

  .power-led {
    position: absolute;
    top: 50%;
    left: calc(100% + 10px);
    width: 1.05em;
    height: 1.05em;
    border: 1px solid color-mix(in srgb, var(--power-led-color) 70%, #111827);
    border-radius: 50%;
    box-sizing: border-box;
    background: radial-gradient(
      circle at 35% 30%,
      color-mix(in srgb, var(--power-led-color) 30%, white) 0 12%,
      var(--power-led-color) 38%,
      color-mix(in srgb, var(--power-led-color) 72%, #111827) 100%
    );
    box-shadow: 0 0 6px color-mix(in srgb, var(--power-led-color) 58%, transparent),
      inset 0 -1px 2px rgba(0, 0, 0, 0.32);
    flex: 0 0 auto;
    font-size: 17px;
    transform: translateY(-50%);
    transition: background 0.4s ease, border-color 0.4s ease,
      box-shadow 0.4s ease;
  }

  .lcd-consumption.power-warning .power-led {
    animation: power-led-warning 2.4s ease-in-out infinite;
  }

  @keyframes power-led-warning {
    0%,
    100% {
      opacity: 1;
      box-shadow: 0 0 6px color-mix(in srgb, var(--power-led-color) 62%, transparent),
        inset 0 -1px 2px rgba(0, 0, 0, 0.32);
    }
    50% {
      opacity: 0.48;
      box-shadow: 0 0 2px color-mix(in srgb, var(--power-led-color) 32%, transparent),
        inset 0 -1px 2px rgba(0, 0, 0, 0.32);
    }
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
    .status-box.active.blink .matrix-word,
    .lcd-consumption.power-warning .power-led {
      animation: none;
    }
  }
`, Lt = "1.0.0", Ft = /* @__PURE__ */ new Set(["heating", "cooling", "drying", "fan"]), rt = ["-", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"], D = {
  off: { icon: "mdi:power", color: "#94a3b8" },
  heat: { icon: "mdi:fire", color: "#f97316" },
  cool: { icon: "mdi:snowflake", color: "#1d4ed8" },
  dry: { icon: "mdi:water-percent", color: "#10b981" },
  fan_only: { icon: "mdi:fan", color: "#0891b2" },
  auto: { icon: "mdi:thermostat-auto", color: "#8b5cf6" },
  heat_cool: { icon: "mdi:autorenew", color: "#8b5cf6" }
}, It = {
  off: "#94a3b8",
  heat: "#E36304",
  cool: "#007AF1",
  dry: "#00A878",
  fan_only: "#00A7C4",
  auto: "#A855F7",
  heat_cool: "#A855F7"
}, Wt = {
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
}, Bt = {
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
}, jt = {
  none: { icon: "mdi:hand-back-right", color: "#c026d3" },
  home: { icon: "mdi:home", color: "#1d4ed8" },
  away: { icon: "mdi:bag-checked", color: "#94a3b8" },
  sleep: { icon: "mdi:sleep", color: "#8b5cf6" },
  comfort: { icon: "mdi:sofa", color: "#10b981" },
  eco: { icon: "mdi:leaf", color: "#16a34a" }
}, Vt = {
  none: "#D946EF",
  home: "#007AF1",
  away: "#94A3B8",
  sleep: "#9B5DE5",
  comfort: "#00A878",
  eco: "#22C55E"
}, N = {
  en: { loading: "Loading…", unavailable: "Unavailable", environment: "ROOM", target: "TARGET", consumption: "POWER", off: "Off", heat: "Heat", cool: "Cool", dry: "Dry", fan_only: "Fan", auto: "Auto", heat_cool: "Auto", none: "Manual", home: "Home", away: "Away", sleep: "Sleep", comfort: "Comfort", eco: "Eco" },
  it: { loading: "Caricamento…", unavailable: "Non disponibile", environment: "AMBIENTE", target: "TARGET", consumption: "CONSUMO", off: "Spento", heat: "Caldo", cool: "Freddo", dry: "Deumidifica", fan_only: "Ventola", auto: "Auto", heat_cool: "Auto", none: "Manuale", home: "Casa", away: "Assente", sleep: "Notte", comfort: "Comfort", eco: "Eco" },
  es: { loading: "Cargando…", unavailable: "No disponible", environment: "AMBIENTE", target: "OBJETIVO", consumption: "CONSUMO", off: "Apagado", heat: "Calor", cool: "Frío", dry: "Deshumidificar", fan_only: "Ventilador", auto: "Auto", heat_cool: "Auto", none: "Manual", home: "Casa", away: "Ausente", sleep: "Noche", comfort: "Confort", eco: "Eco" },
  fr: { loading: "Chargement…", unavailable: "Indisponible", environment: "AMBIANCE", target: "CIBLE", consumption: "PUISSANCE", off: "Arrêt", heat: "Chauffage", cool: "Froid", dry: "Déshumidifier", fan_only: "Ventilateur", auto: "Auto", heat_cool: "Auto", none: "Manuel", home: "Maison", away: "Absent", sleep: "Nuit", comfort: "Confort", eco: "Éco" },
  de: { loading: "Laden…", unavailable: "Nicht verfügbar", environment: "RAUM", target: "ZIEL", consumption: "LEISTUNG", off: "Aus", heat: "Heizen", cool: "Kühlen", dry: "Entfeuchten", fan_only: "Lüfter", auto: "Auto", heat_cool: "Auto", none: "Manuell", home: "Zuhause", away: "Abwesend", sleep: "Nacht", comfort: "Komfort", eco: "Eco" },
  pt: { loading: "A carregar…", unavailable: "Indisponível", environment: "AMBIENTE", target: "ALVO", consumption: "CONSUMO", off: "Desligado", heat: "Aquecer", cool: "Arrefecer", dry: "Desumidificar", fan_only: "Ventoinha", auto: "Auto", heat_cool: "Auto", none: "Manual", home: "Casa", away: "Ausente", sleep: "Noite", comfort: "Conforto", eco: "Eco" }
}, R = class R extends E {
  static getConfigForm() {
    return {
      schema: [
        {
          name: "entity",
          required: !0,
          selector: { entity: { domain: "climate" } }
        },
        { name: "name", selector: { text: {} } },
        { name: "show_presets", selector: { boolean: {} } },
        { name: "show_consumption", selector: { boolean: {} } },
        {
          name: "power_entity",
          selector: { entity: { domain: "sensor" } }
        },
        {
          name: "status_entity",
          selector: { entity: {} }
        },
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
          name: "temperature_step",
          selector: {
            number: { min: 0.1, max: 5, step: 0.1, mode: "box" }
          }
        }
      ],
      computeLabel: (t) => ({
        entity: "Climate entity",
        name: "Custom name",
        show_presets: "Show presets",
        show_consumption: "Show power consumption",
        power_entity: "Power sensor",
        status_entity: "Advanced status sensor",
        language: "Language",
        border_mode: "Card border",
        hvac_button_labels: "HVAC button labels",
        preset_button_labels: "Preset button labels",
        status_display: "Status display",
        temperature_step: "Temperature step"
      })[t.name ?? ""] ?? t.name,
      computeHelper: (t) => t.name === "power_entity" ? "Used only when the power module is enabled." : t.name === "status_entity" ? "Optional. Replaces ON, IDLE and OFF inside the LCD." : void 0
    };
  }
  static getStubConfig(t, e) {
    return {
      entity: e.find((o) => o.startsWith("climate.")) ?? Object.keys(t.states).find(
        (o) => o.startsWith("climate.")
      ) ?? "",
      show_presets: !0,
      show_consumption: !1,
      border_mode: "state",
      language: "auto",
      hvac_button_labels: "auto",
      preset_button_labels: "auto",
      status_display: "wheel"
    };
  }
  setConfig(t) {
    if (!t?.entity)
      throw new Error("ThermoMatrix Card requires a climate entity.");
    if (!t.entity.startsWith("climate."))
      throw new Error("The configured entity must use the climate domain.");
    this._config = {
      ...t,
      show_presets: t.show_presets ?? !0,
      show_consumption: t.show_consumption ?? !1,
      border_mode: t.border_mode ?? "state",
      language: t.language ?? "auto",
      hvac_button_labels: t.hvac_button_labels ?? "auto",
      preset_button_labels: t.preset_button_labels ?? "auto",
      status_display: t.status_display ?? "wheel"
    };
  }
  firstUpdated() {
    this._labelResizeObserver = new ResizeObserver(
      () => this._scheduleLabelSync()
    ), this._labelResizeObserver.observe(this), this._scheduleLabelSync();
  }
  updated(t) {
    this._scheduleLabelSync();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._labelResizeObserver?.disconnect(), this._labelSyncFrame !== void 0 && cancelAnimationFrame(this._labelSyncFrame);
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
    const e = t.state, s = this.hass.themes?.darkMode === !0, o = this._modeColor(e, s), r = this._config.border_mode === "state", n = r && e !== "off" ? `0 0 18px color-mix(in srgb, ${o} 58%, transparent)` : "0 4px 14px rgba(0,0,0,0.10)";
    return c`
      <ha-card
        class=${s ? "dark" : ""}
        style=${`--tm-border-color:${r ? o : "var(--tm-neutral-border)"};--tm-card-shadow:${n};`}
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
    const e = this._stringArray(t.attributes.hvac_modes), s = e.length > 0 ? e : [t.state], o = this.hass.themes?.darkMode === !0;
    return c`
      <div
        class="button-grid button-grid-modes label-${this._config.hvac_button_labels ?? "auto"}"
        style=${`--columns:${Math.min(s.length, 5)}`}
      >
        ${s.map((r) => {
      const n = D[r] ?? {
        icon: "mdi:radiobox-blank",
        color: "#64748b"
      }, l = this._modeColor(r, o, n.color), a = this._translateValue(r);
      return c`
            <button
              class="mode-button ${t.state === r ? "active" : ""}"
              style=${`--button-color:${l}`}
              title=${a}
              aria-label=${a}
              @click=${() => this._setHvacMode(r)}
            >
              <ha-icon class="mode-icon" icon=${n.icon}></ha-icon>
              <span class="button-label">${a}</span>
            </button>
          `;
    })}
      </div>
    `;
  }
  _modeColor(t, e, s = "#64748b") {
    return e ? It[t] ?? D[t]?.color ?? s : D[t]?.color ?? s;
  }
  _renderDisplay(t) {
    const e = t.state, s = String(t.attributes.hvac_action ?? ""), o = e === "off" ? "OFF" : s === "idle" ? "IDLE" : (Ft.has(s), "ON"), r = o === "ON", n = o === "IDLE", l = o === "OFF", a = this._config.status_entity ? this.hass.states[this._config.status_entity] : void 0, h = this.hass.themes?.darkMode === !0, d = (h ? {
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
    })[e] ?? (h ? "#334155" : "#cbd5e1");
    return c`
      <div
        class="lcd-panel ${h ? "dark" : ""}"
        style=${`--lcd-background:${d}`}
      >
        <div class="lcd-values ${this._config.status_entity ? "external" : ""}">
          <div class="lcd-reading current">
            <span class="lcd-reading-label">${this._t("environment")}</span>
            ${this._renderTemperature(t.attributes.current_temperature)}
          </div>
          ${this._config.status_entity ? p : this._config.status_display === "indicators" ? c`
                  <div class="status-stack">
                    ${this._renderStatusIndicator("ON", r, !0)}
                    ${this._renderStatusIndicator("IDLE", n, !0)}
                    ${this._renderStatusIndicator("OFF", l, !1)}
                  </div>
                ` : c`${this._renderStatusWheel(o)}`}
          <div class="lcd-reading target">
            <span class="lcd-reading-label">${this._t("target")}</span>
            ${this._renderTemperature(t.attributes.temperature)}
          </div>
        </div>
        ${this._config.status_entity ? c`
              <div
                class="lcd-external-status"
                title=${a ? this._humanize(a.state) : this._t("unavailable")}
              >
                ${this._renderExternalStatus(
      a ? this._humanize(a.state).toUpperCase() : this._t("unavailable").toUpperCase()
    )}
              </div>
            ` : p}
        ${this._renderConsumption()}
      </div>
    `;
  }
  _renderTemperature(t) {
    const e = Number(t), s = Number.isFinite(e) ? e.toFixed(1) : "--";
    return c`
      <span class="lcd-display">
        ${[...s].map(
      (o) => o === "." ? c`<i class="lcd-dot"></i>` : this._renderDigit(o)
    )}
        <i class="lcd-degree"></i>
      </span>
    `;
  }
  _renderDigit(t) {
    const e = Wt[t] ?? "";
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
        ${[...t === "IDLE" ? t : t === "OFF" ? "-OFF" : "--ON"].map(
      (s, o) => ot(
        `${t}-${o}`,
        this._renderWheelReel(s, o)
      )
    )}
      </div>
    `;
  }
  _renderStatusIndicator(t, e, s) {
    return c`
      <span class="status-box ${e ? "active" : ""} ${e && s ? "blink" : ""}">
        <span class="matrix-word">
          ${[...t].map((o) => this._renderMatrixChar(o))}
        </span>
      </span>
    `;
  }
  _renderWheelReel(t, e) {
    const s = Math.max(0, rt.indexOf(t));
    return c`
      <span class="wheel-window" aria-hidden="true">
        <span
          class="wheel-strip"
          style=${`--wheel-offset:${6 - s * 14}px;--wheel-delay:${e * 55}ms`}
        >
          ${rt.map(
      (o) => c`<i class=${o === t ? "selected" : ""}>
                ${this._renderMatrixChar(o)}
              </i>`
    )}
        </span>
      </span>
    `;
  }
  _renderExternalStatus(t) {
    return ot(
      t,
      c`<span class="external-status-slide">
        ${this._renderMatrixWord(t)}
      </span>`
    );
  }
  _renderMatrixChar(t) {
    const e = (Bt[t] ?? Array(7).fill("00000")).join("");
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
      return p;
    const e = this._stringArray(t.attributes.preset_modes);
    if (e.length === 0)
      return p;
    const s = String(t.attributes.preset_mode ?? ""), o = this.hass.themes?.darkMode === !0;
    return c`
      <div
        class="button-grid button-grid-presets label-${this._config.preset_button_labels ?? "auto"}"
        style=${`--columns:${Math.min(e.length, 5)}`}
      >
        ${e.map((r) => {
      const n = jt[r] ?? {
        icon: "mdi:bookmark-outline",
        color: "#64748b"
      }, l = o ? Vt[r] ?? n.color : n.color, a = this._translateValue(r);
      return c`
            <button
              class=${s === r ? "active" : ""}
              style=${`--button-color:${l}`}
              title=${a}
              aria-label=${a}
              @click=${() => this._setPreset(r)}
            >
              <ha-icon class="preset-icon" icon=${n.icon}></ha-icon>
              <span class="button-label">${a}</span>
            </button>
          `;
    })}
      </div>
    `;
  }
  _renderConsumption() {
    if (!this._config.show_consumption || !this._config.power_entity)
      return p;
    const t = this.hass.states[this._config.power_entity], e = Number(t?.state), s = String(t?.attributes.unit_of_measurement ?? ""), o = Number.isFinite(e) ? e : 0, r = Math.min(1, Math.max(0, (o - 20) / 1480)), n = Math.round(120 * (1 - r)), l = this.hass.themes?.darkMode === !0, a = o <= 20 ? l ? "#6b7280" : "#9ca3af" : `hsl(${n} 82% ${l ? "58%" : "40%"})`, h = Number.isFinite(e) && e >= 1500;
    return c`
      <div
        class="lcd-consumption ${h ? "power-warning" : ""}"
        style=${`--power-led-color:${a}`}
      >
        <span class="lcd-consumption-icon" aria-hidden="true">⚡</span>
        <span class="lcd-consumption-center">
          <span class="lcd-consumption-label">
            ${this._renderMatrixWord(this._t("consumption").toUpperCase())}
          </span>
          <span
            class="power-led"
            role="img"
            aria-label=${h ? "High power consumption" : "Power consumption"}
          ></span>
        </span>
        <span class="lcd-consumption-value">
          ${t ? c`${this._renderLcdNumber(t.state)}
                <span class="lcd-consumption-unit">${s}</span>` : c`<span class="unavailable">${this._t("unavailable")}</span>`}
        </span>
      </div>
    `;
  }
  _renderLcdNumber(t) {
    const e = Number(t), s = Number.isFinite(e) ? String(Math.round(e * 10) / 10) : "--";
    return c`
      <span class="lcd-display lcd-number">
        ${[...s].map(
      (o) => o === "." ? c`<i class="lcd-dot"></i>` : this._renderDigit(o)
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
    const o = Number(this._config.temperature_step), r = Number(t.attributes.target_temp_step), n = Number.isFinite(o) ? o : Number.isFinite(r) ? r : 0.5, l = Math.round((s + e * n) * 10) / 10;
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
    return e in N ? e : "en";
  }
  _t(t) {
    return N[this._language()][t] ?? N.en[t];
  }
  _translateValue(t) {
    return t in N.en ? this._t(t) : this._humanize(t);
  }
  _scheduleLabelSync() {
    this._labelSyncFrame !== void 0 && cancelAnimationFrame(this._labelSyncFrame), this._labelSyncFrame = requestAnimationFrame(() => {
      this._labelSyncFrame = void 0, this._syncAutoLabels();
    });
  }
  _syncAutoLabels() {
    this.renderRoot.querySelectorAll(".button-grid.label-auto").forEach((t) => {
      const s = [...t.querySelectorAll("button")].some((o) => {
        const r = o.querySelector(".button-label");
        if (!r)
          return !1;
        const n = o.getBoundingClientRect().width - 20;
        return r.scrollWidth > n;
      });
      t.classList.toggle("labels-compact", s);
    });
  }
};
R.properties = {
  hass: { attribute: !1 },
  _config: { state: !0 }
}, R.styles = Dt;
let F = R;
customElements.get("thermomatrix-card") || customElements.define("thermomatrix-card", F);
window.customCards = window.customCards ?? [];
window.customCards.push({
  type: "thermomatrix-card",
  name: "ThermoMatrix Card",
  description: "Termostato LCD modulare per entità climate",
  preview: !0,
  getEntitySuggestion: (i, t) => t.startsWith("climate.") ? {
    entity: t,
    show_presets: !0,
    border_mode: "state"
  } : null
});
console.info(
  `%c THERMOMATRIX-CARD %c v${Lt} `,
  "color:white;background:#172554;font-weight:700",
  "color:#172554;background:#bfdbfe"
);
export {
  F as ThermoMatrixCard
};
