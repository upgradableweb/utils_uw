import get_message, { Field } from "./get_message"

const min_msg = '$name required min $min/$len'
const max_msg = '$name max is $max/$len'


type IsValidString = {
    value: string;
    maxlength?: Field;
    minlength?: Field;
    trim?: boolean;
}

type ArrGetMsg = {
    field: number;
    message: string;
}

function isValidString({ value, minlength, maxlength, trim }: IsValidString) {
    const min = minlength, max = maxlength

    if (trim) {
        value = value.trim()
    }
    let len = value.length

    const errorText = (msg: string) => msg.replace('$len', len.toString())

    if (min) {
        const { field, message } = get_message(min, min_msg) as ArrGetMsg
        if (len < field) {
            return errorText(message.replace('$min', field.toString()))
        }
    }

    if (max) {
        const { field, message } = get_message(max, max_msg) as ArrGetMsg
        if (len > field) {
            return errorText(message.replace('$max', field.toString()))
        }
    }

}


export type String_UWProps = {
    value: string;
    maxlength?: Field;
    minlength?: Field;
    trim?: boolean;
    default?: string;
}


export default class String_UW {
    value: string;
    private minlength: Field;
    private maxlength: Field;
    private trim: boolean;

    constructor({ default: def, value = def, minlength, maxlength, trim = true }: String_UWProps) {
        this.value = value?.toString() || ""
        this.maxlength = maxlength
        this.minlength = minlength
        this.trim = trim
    }

    get_value() {
        return this.value
    }

    get_error() {
        return isValidString(this as any)
    }

}


