var m = Object.defineProperty;
var w = (o, n, s) => n in o ? m(o, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[n] = s;
var p = (o, n, s) => w(o, typeof n != "symbol" ? n + "" : n, s);
import T from "./params.js";
const F = ({ base_url: o, authorization: n }) => {
  const s = async (a, { headers: t, params: e, body: r, ...l }) => {
    e && (a += "?" + T(e));
    const u = new Headers(t);
    r instanceof FormData || (u.append("content-type", "application/json"), r = JSON.stringify(r)), o && (a = o + a), n && u.append("authorization", n);
    const c = await fetch(a, { ...l, headers: u, body: r }), f = await c.json(), h = { ...c, data: f };
    if (!c.ok)
      throw h;
    return h;
  }, i = { url: void 0, params: null, body: void 0 };
  class d {
    constructor(t) {
      p(this, "url");
      this.url = t;
    }
    get({ url: t = this.url, params: e } = { url: void 0, params: null }) {
      return s(t, { method: "GET", params: e });
    }
    post({ body: t, url: e = this.url, params: r } = i) {
      return s(e, { method: "POST", body: t, params: r });
    }
    put({ url: t = this.url, body: e, params: r } = i) {
      return s(t, { method: "PUT", body: e, params: r });
    }
    delete({ body: t, url: e = this.url, params: r } = i) {
      return s(e, { method: "DETELE", body: t, params: r });
    }
    patch({ body: t, url: e = this.url, params: r } = i) {
      return s(e, { method: "PATCH", body: t, params: r });
    }
  }
  return d;
};
export {
  F as default
};
