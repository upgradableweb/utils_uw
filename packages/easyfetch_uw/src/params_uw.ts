export type ParamsUwType = Record<string, string | number>

const params_uw = (params: ParamsUwType): string => {
    const data = {} as any
    Object.keys(params).map(d => {
        if (params[d]) {
            data[d] = params[d]
        }
    })
    const f = new URLSearchParams(data).toString()
    return f
}

export default params_uw