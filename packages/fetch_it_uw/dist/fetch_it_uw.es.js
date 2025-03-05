var m = Object.defineProperty;
var w = (n, t, o) => t in n ? m(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[t] = o;
var d = (n, t, o) => w(n, typeof t != "symbol" ? t + "" : t, o);
const T = (n) => {
  const t = {};
  return Object.keys(n).map((a) => {
    n[a] && (t[a] = n[a]);
  }), new URLSearchParams(t).toString();
}, P = ({ base_url: n, authorization: t }) => {
  const o = async (i, { headers: e, params: r, body: s, ...p }) => {
    r && (i += "?" + T(r));
    const c = new Headers(e);
    s instanceof FormData || (c.append("content-type", "application/json"), s = JSON.stringify(s)), n && (i = n + i), t && c.append("authorization", t);
    const u = await fetch(i, { ...p, headers: c, body: s }), f = await u.json(), h = { ...u, data: f };
    if (!u.ok)
      throw h;
    return h;
  }, a = { url: void 0, params: null, body: void 0 };
  class l {
    constructor(e) {
      d(this, "url");
      this.url = e;
    }
    get({ url: e = this.url, params: r } = { url: void 0, params: null }) {
      return o(e, { method: "GET", params: r });
    }
    post({ body: e, url: r = this.url, params: s } = a) {
      return o(r, { method: "POST", body: e, params: s });
    }
    put({ url: e = this.url, body: r, params: s } = a) {
      return o(e, { method: "PUT", body: r, params: s });
    }
    delete({ body: e, url: r = this.url, params: s } = a) {
      return o(r, { method: "DETELE", body: e, params: s });
    }
    patch({ body: e, url: r = this.url, params: s } = a) {
      return o(r, { method: "PATCH", body: e, params: s });
    }
  }
  return l;
};
export {
  P as default
};
