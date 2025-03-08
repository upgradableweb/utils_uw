
export type Field = [boolean | number, string] | string | number;

export default function get_message(field: Field, msg: string = "") {
    if (Array.isArray(field)) {
        const [value, f2] = field
        return { field: value, message: f2 }
    } else {
        return { field, message: msg }
    }
}

