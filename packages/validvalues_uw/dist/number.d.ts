import { Field } from './get_message';
export type Number_UWProps = {
    value: number | string;
    min: Field;
    max: Field;
    default: number;
};
export default class Number_UW {
    value: number;
    private min;
    private max;
    constructor({ default: def, value, min, max }: Number_UWProps);
    get_value(): number;
    get_error(): string;
}
