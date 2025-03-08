import get_message, { Field } from "./get_message"

const nan_msg = "$name is NAN"
const min_msg = "$name min required $min"
const max_msg = "$name max is $max"

const isValidNumber = ({ value, min, max }) => {

    if (isNaN(value)) {
        return nan_msg
    }

    if (min) {
        const { field, message } = get_message(min, min_msg)
        if (value < field) {
            return message.replace('$min', min)
        }
    }

    if (max) {
        const { field, message } = get_message(max, max_msg)
        if (value > field) {
            return message.replace('$max', max)
        }
    }
}


export type Number_UWProps = {
    value: number | string;
    min: Field;
    max: Field;
    default: number;
}


export default class Number_UW {
    value: number;
    private min: Field;
    private max: Field;

    constructor({ default: def, value = def, min, max }: Number_UWProps) {
        this.value = parseInt(value as string)
        this.min = min
        this.max = max
    }

    get_value() {
        return this.value
    }

    get_error() {
        return isValidNumber(this as any)
    }

}