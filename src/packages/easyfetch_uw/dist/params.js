const c = (t) => {
  const a = {};
  return Object.keys(t).map((e) => {
    t[e] && (a[e] = t[e]);
  }), new URLSearchParams(a).toString();
};
export {
  c as default
};
