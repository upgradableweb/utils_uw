import ValidValues from "../src/index";

describe("ValidValues function", () => {
    test("should return error if required field is missing", () => {
        const result = ValidValues.validateIt({ required: true, type: "email", value: "" });
        expect(result).toEqual({ value: "", error: "$name is not a valid email" });
    });

    test("should validate number correctly", () => {
        const result = validator_uw({ type: "number", value: 123 });
        expect(result).toEqual({ value: 123, error: "" });
    });

    test("should return error for invalid number", () => {
        const result = validator_uw({ type: "number", value: "abc" });
        expect(result).toEqual({ value: "abc", error: "Invalid number" });
    });

    test("should validate string correctly", () => {
        const result = validator_uw({ type: "string", value: "hello" });
        expect(result).toEqual({ value: "hello", error: "" });
    });

    test("should return error for invalid string", () => {
        const result = validator_uw({ type: "string", value: 123 });
        expect(result).toEqual({ value: 123, error: "Invalid string" });
    });

    test("should validate email correctly", () => {
        const result = validator_uw({ type: "email", value: "test@example.com" });
        expect(result).toEqual({ value: "test@example.com", error: "" });
    });

    test("should return error for invalid email", () => {
        const result = validator_uw({ type: "email", value: "invalid-email" });
        expect(result).toEqual({ value: "invalid-email", error: "$name is not a valid email" });
    });
});
