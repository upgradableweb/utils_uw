const e = {
  startswith: (r = "", t = "") => r.toString().startsWith(t),
  endswith: (r = "", t = "") => r.toString().endsWith(t),
  includes: (r = "", t = "") => r.toString().includes(t),
  min: (r, t) => (r = Number(r), t = Number(t), r >= t),
  max: (r, t) => (r = Number(r), t = Number(t), r <= t),
  equal: (r, t) => (r = Number(r), t = Number(t), r == t),
  boolean: (r, t) => (r = !!r, t = !!t, r == t)
};
export {
  e as default
};
