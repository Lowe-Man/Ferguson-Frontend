interface Validation {
    required?: {
        value: boolean;
        message: string;
    };
    pattern?: {
        value: RegExp;
        message: string;
    };
    custom?: {
        isValid: (value: any) => boolean;
        message: string;
    };
}
export default Validation;