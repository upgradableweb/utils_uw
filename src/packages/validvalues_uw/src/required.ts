import get_message, { Field } from "./get_message"



const required_text = "$name is required"

const isRequired = ({ value, required: req }: { value: any, required: Field }) => {
    const { field, message } = get_message(req, required_text)
    if (field) {
        if (value == undefined || value == null || value == '') {
            return message
        }
    }
}


export type Required_UWProps = {
    value: any;
    required: Field
}

class Required_UW {
    value: any;
    required: Field;
    constructor({ value, required }) {
        this.value = value
        this.required = required
    }
    get_value() {
        return this.value
    }

    get_error() {
        return isRequired(this)
    }
}


export default Required_UW