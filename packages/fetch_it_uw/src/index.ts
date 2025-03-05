import params_uw, { ParamsUwType } from "./params_uw";


type Init = RequestInit & { params: null | ParamsUwType }

const CreateFetchIt = ({ base_url, authorization }: { base_url: string; authorization: string }) => {

    const request = async (url: string, { headers, params, body, ...init }: Init) => {

        if (params) {
            url += '?' + params_uw(params)
        }

        const new_headers = new Headers(headers)

        if (!(body instanceof FormData)) {
            new_headers.append("content-type", "application/json")
            body = JSON.stringify(body)
        }

        if (base_url) {
            url = base_url + url
        }

        if (authorization) {
            new_headers.append("authorization", authorization)
        }

        const res = await fetch(url, { ...init, headers: new_headers, body })
        const data = await res.json()
        const resp = { ...res, data }
        if (!res.ok) {
            throw resp
        }
        return resp
    }

    const init = { url: undefined, params: null, body: undefined }


    class FetchIt {

        url: string;
        constructor(url: string) {
            this.url = url
        }

        get({ url = this.url, params } = { url: undefined, params: null }) {
            return request(url, { method: "GET", params })
        }
        post({ body, url = this.url, params } = init) {
            return request(url, { method: "POST", body, params })
        }
        put({ url = this.url, body, params } = init) {
            return request(url, { method: "PUT", body, params })
        }
        delete({ body, url = this.url, params } = init) {
            return request(url, { method: "DETELE", body, params })
        }
        patch({ body, url = this.url, params } = init) {
            return request(url, { method: "PATCH", body, params })
        }
    }

    return FetchIt

}


export default CreateFetchIt