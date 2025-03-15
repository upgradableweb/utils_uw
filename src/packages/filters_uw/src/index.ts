const filters_uw = {
    startswith: (a = '', b = '') => {
        return a.toString().startsWith(b)
    },
    endswith: (a = '', b = '') => {
        return a.toString().endsWith(b)
    },
    includes: (a = '', b = '') => {
        return a.toString().includes(b)
    },
    min: (a, b) => {
        a = Number(a)
        b = Number(b)
        return a >= b
    },
    max: (a, b) => {
        a = Number(a)
        b = Number(b)
        return a <= b
    },
    equal: (a, b) => {
        a = Number(a)
        b = Number(b)
        return a == b
    },
    boolean: (a, b) => {
        a = Boolean(a)
        b = Boolean(b)
        return a == b
    }
}

export default filters_uw