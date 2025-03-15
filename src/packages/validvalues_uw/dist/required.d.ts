import { Field } from './get_message';
export type Required_UWProps = {
    value: any;
    required: Field;
};
declare class Required_UW {
    value: any;
    required: Field;
    constructor({ value, required }: {
        value: any;
        required: any;
    });
    get_value(): any;
    get_error(): string;
}
export default Required_UW;
