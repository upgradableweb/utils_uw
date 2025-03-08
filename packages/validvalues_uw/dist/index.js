var _ = Object.defineProperty;
var $ = (e, t, r) => t in e ? _(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var m = (e, t, r) => $(e, typeof t != "symbol" ? t + "" : t, r);
function u(e, t = "") {
  if (Array.isArray(e)) {
    const [r, i] = e;
    return { field: r, message: i };
  } else
    return { field: e, message: t };
}
const h = "$name is NAN", v = "$name min required $min", x = "$name max is $max", q = ({ value: e, min: t, max: r }) => {
  if (isNaN(e))
    return h;
  if (t) {
    const { field: i, message: n } = u(t, v);
    if (e < i)
      return n.replace("$min", t);
  }
  if (r) {
    const { field: i, message: n } = u(r, x);
    if (e > i)
      return n.replace("$max", r);
  }
};
class c {
  constructor({ default: t, value: r = t, min: i, max: n }) {
    m(this, "value");
    m(this, "min");
    m(this, "max");
    this.value = parseInt(r), this.min = i, this.max = n;
  }
  get_value() {
    return this.value;
  }
  get_error() {
    return q(this);
  }
}
const w = "$name is required", A = ({ value: e, required: t }) => {
  const { field: r, message: i } = u(t, w);
  if (r && (e == null || e == null || e == ""))
    return i;
};
class f {
  constructor({ value: t, required: r }) {
    m(this, "value");
    m(this, "required");
    this.value = t, this.required = r;
  }
  get_value() {
    return this.value;
  }
  get_error() {
    return A(this);
  }
}
const N = "$name required min $min/$len", S = "$name max is $max/$len";
function b({ value: e, minlength: t, maxlength: r, trim: i }) {
  const n = t, s = r;
  i && (e = e.trim());
  let a = e.length;
  const g = (l) => l.replace("$len", a.toString());
  if (n) {
    const { field: l, message: o } = u(n, N);
    if (a < l)
      return g(o.replace("$min", l.toString()));
  }
  if (s) {
    const { field: l, message: o } = u(s, S);
    if (a > l)
      return g(o.replace("$max", l.toString()));
  }
}
class d {
  constructor({ default: t, value: r = t, minlength: i, maxlength: n, trim: s = !0 }) {
    m(this, "value");
    m(this, "minlength");
    m(this, "maxlength");
    m(this, "trim");
    this.value = (r == null ? void 0 : r.toString()) || "", this.maxlength = n, this.minlength = i, this.trim = s;
  }
  get_value() {
    return this.value;
  }
  get_error() {
    return b(this);
  }
}
const p = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, V = ({ required: e, type: t, value: r, ...i }) => {
  let n, s;
  if (e) {
    const a = new f({ value: r, required: e });
    if (s = a.get_error(), s)
      return n = a.get_value(), { value: n, error: s };
  }
  if (t === "number") {
    const a = new c({ ...i, value: r });
    n = a.get_value(), s = a.get_error();
  } else {
    const a = new d({ ...i, value: r });
    n = a.get_value(), s = a.get_error(), !s && t === "email" && !p.test(n) && (s = "$name is not a valid email");
  }
  return { value: n, error: s };
}, R = {
  validateIt(e) {
    return V(e);
  },
  string(e) {
    return new d(e);
  },
  number(e) {
    return new c(e);
  },
  required(e) {
    return new f(e);
  }
};
export {
  R as default
};
