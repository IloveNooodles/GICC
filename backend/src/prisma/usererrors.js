export const userModelErrorCodes = Object.freeze({
    EMAIL_ALREADY_EXIST: "EMAIL_ALREADY_EXIST",
    EMAIL_NOT_VERIFIED: "EMAIL_NOT_VERIFIED",
    USER_NOT_FOUND: "USER_NOT_FOUND",
    WRONG_PASSWORD: "WRONG_PASSWORD",
    CREATE_USER_FAILED: "CREATE_USER_ERROR",
    LOGIN_FAILED: "LOGIN_FAILED",
    INVALID_VERIFICATION_CODE: "INVALID_VERIFICATION_CODE",
    VERIFY_EMAIL_FAILED: "VERIFY_EMAIL_FAILED",
});

export const userModelErrorMessage = Object.freeze({
    EMAIL_ALREADY_EXIST: "The email is already registered",
    EMAIL_NOT_VERIFIED: "The email is not verified",
    USER_NOT_FOUND: "The email is not registered, please register first",
    WRONG_PASSWORD: "The password is not match with the password stored",
    INVALID_VERIFICATION_CODE: "The verification code is either invalid or null",
    CREATE_USER_FAILED: "There is an error while creating your data",
    LOGIN_FAILED: "There is an error while log in to your account",
    VERIFY_EMAIL_FAILED: "There is an error while verify your email",
});