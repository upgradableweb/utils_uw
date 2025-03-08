import ValidValues from "validvalues"

const { value, error } = ValidValues.validateIt({ value: "huiui", type: "email", required: true })
console.log('error: ', error);
console.log('value: ', value);

