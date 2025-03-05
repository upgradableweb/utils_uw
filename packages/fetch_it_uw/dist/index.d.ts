declare const CreateFetchIt: ({ base_url, authorization }: {
    base_url: string;
    authorization: string;
}) => {
    new (url: string): {
        url: string;
        get({ url, params }?: {
            url?: any;
            params: any;
        }): Promise<{
            data: any;
            headers: Headers;
            ok: boolean;
            redirected: boolean;
            status: number;
            statusText: string;
            type: ResponseType;
            url: string;
            clone(): Response;
            body: ReadableStream<Uint8Array> | null;
            bodyUsed: boolean;
            arrayBuffer(): Promise<ArrayBuffer>;
            blob(): Promise<Blob>;
            bytes(): Promise<Uint8Array>;
            formData(): Promise<FormData>;
            json(): Promise<any>;
            text(): Promise<string>;
        }>;
        post({ body, url, params }?: {
            url: any;
            params: any;
            body: any;
        }): Promise<{
            data: any;
            headers: Headers;
            ok: boolean;
            redirected: boolean;
            status: number;
            statusText: string;
            type: ResponseType;
            url: string;
            clone(): Response;
            body: ReadableStream<Uint8Array> | null;
            bodyUsed: boolean;
            arrayBuffer(): Promise<ArrayBuffer>;
            blob(): Promise<Blob>;
            bytes(): Promise<Uint8Array>;
            formData(): Promise<FormData>;
            json(): Promise<any>;
            text(): Promise<string>;
        }>;
        put({ url, body, params }?: {
            url: any;
            params: any;
            body: any;
        }): Promise<{
            data: any;
            headers: Headers;
            ok: boolean;
            redirected: boolean;
            status: number;
            statusText: string;
            type: ResponseType;
            url: string;
            clone(): Response;
            body: ReadableStream<Uint8Array> | null;
            bodyUsed: boolean;
            arrayBuffer(): Promise<ArrayBuffer>;
            blob(): Promise<Blob>;
            bytes(): Promise<Uint8Array>;
            formData(): Promise<FormData>;
            json(): Promise<any>;
            text(): Promise<string>;
        }>;
        delete({ body, url, params }?: {
            url: any;
            params: any;
            body: any;
        }): Promise<{
            data: any;
            headers: Headers;
            ok: boolean;
            redirected: boolean;
            status: number;
            statusText: string;
            type: ResponseType;
            url: string;
            clone(): Response;
            body: ReadableStream<Uint8Array> | null;
            bodyUsed: boolean;
            arrayBuffer(): Promise<ArrayBuffer>;
            blob(): Promise<Blob>;
            bytes(): Promise<Uint8Array>;
            formData(): Promise<FormData>;
            json(): Promise<any>;
            text(): Promise<string>;
        }>;
        patch({ body, url, params }?: {
            url: any;
            params: any;
            body: any;
        }): Promise<{
            data: any;
            headers: Headers;
            ok: boolean;
            redirected: boolean;
            status: number;
            statusText: string;
            type: ResponseType;
            url: string;
            clone(): Response;
            body: ReadableStream<Uint8Array> | null;
            bodyUsed: boolean;
            arrayBuffer(): Promise<ArrayBuffer>;
            blob(): Promise<Blob>;
            bytes(): Promise<Uint8Array>;
            formData(): Promise<FormData>;
            json(): Promise<any>;
            text(): Promise<string>;
        }>;
    };
};
export default CreateFetchIt;
