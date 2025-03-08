import { Field } from './get_message';
export type String_UWProps = {
    value: string;
    maxlength?: Field;
    minlength?: Field;
    trim?: boolean;
    default?: string;
};
export default class String_UW {
    value: string;
    private minlength;
    private maxlength;
    private trim;
    constructor({ default: def, value, minlength, maxlength, trim }: String_UWProps);
    get_value(): string;
    get_error(): string;
}
