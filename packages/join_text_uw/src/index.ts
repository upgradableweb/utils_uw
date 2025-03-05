const join_text_uw = (...value: any[]): string => {
  return value.filter(d => d).join(" ")
}

export default join_text_uw