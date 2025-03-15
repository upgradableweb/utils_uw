export type Field = [boolean | number, string] | string | number;
export default function get_message(field: Field, msg?: string): {
    field: number | boolean;
    message: string;
} | {
    field: string | number;
    message: string;
};
