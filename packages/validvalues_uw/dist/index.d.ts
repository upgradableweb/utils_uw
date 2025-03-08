import { Field } from './get_message';
import { default as Number_UW, Number_UWProps } from './number';
import { default as Required_UW, Required_UWProps } from './required';
import { default as String_UW, String_UWProps } from './string';
type BaseProps = {
    required: Field;
    value: any;
    trim?: boolean;
};
type StringProps = BaseProps & {
    type: "string" | "email";
    minlength?: File;
    maxlength?: File;
};
type NumberProps = BaseProps & {
    type: "number";
    min?: File;
    max?: File;
};
type ValidValuesProps = StringProps | NumberProps;
declare const ValidValues: {
    validateIt(props: ValidValuesProps): {
        value: any;
        error: string;
    };
    string(props: String_UWProps): String_UW;
    number(props: Number_UWProps): Number_UW;
    required(props: Required_UWProps): Required_UW;
};
export default ValidValues;
