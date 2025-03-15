import { Field } from "./get_message";
import Number_UW, { Number_UWProps } from "./number";
import Required_UW, { Required_UWProps } from "./required";
import String_UW, { String_UWProps } from "./string";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email_text = "$name is not a valid email"

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

const valid_values = ({ required, type, value, ...props }: ValidValuesProps) => {

    let val, error: string

    if (required) {
        const validator = new Required_UW({ value, required });
        error = validator.get_error();
        if (error) {
            val = validator.get_value();
            return { value: val, error };
        }
    }

    if (type === "number") {
        const validator = new Number_UW({ ...props, value } as any);
        val = validator.get_value();
        error = validator.get_error();
    } else {
        const validator = new String_UW({ ...props, value } as any);
        val = validator.get_value();
        error = validator.get_error();
        if (!error && type === "email" && !emailRegex.test(val)) {
            error = email_text;
        }
    }

    return { value: val, error };
};

// valid_values.string = (props: String_UWProps) => new String_UW(props);
// valid_values.number = (props: Number_UWProps) => new Number_UW(props);
// valid_values.required = (props: Required_UWProps) => new Required_UW(props);


const ValidValues = {
    validateIt(props:ValidValuesProps){
        return valid_values(props)
    },
    string(props: String_UWProps) {
        return new String_UW(props);
    },
    number(props: Number_UWProps) {
        return new Number_UW(props)
    },
    required(props: Required_UWProps) {
        return new Required_UW(props)
    }
}
export default ValidValues;



