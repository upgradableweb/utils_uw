declare const filters_uw: {
    startswith: (a?: string, b?: string) => boolean;
    endswith: (a?: string, b?: string) => boolean;
    includes: (a?: string, b?: string) => boolean;
    min: (a: any, b: any) => boolean;
    max: (a: any, b: any) => boolean;
    equal: (a: any, b: any) => boolean;
    boolean: (a: any, b: any) => boolean;
};
export default filters_uw;
