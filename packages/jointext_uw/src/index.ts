const jointext_uw = (...value: any[]): string => {
  return value.filter(d => d).join(" ")
}

export default jointext_uw