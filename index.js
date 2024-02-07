class ValidPassword {
    constructor(password) {
        this.password = password;
    }

    isValidLength() {
        return this.password.length >= 8;
    }

    hasUpperCaseCharacter() {
        return /[A-Z]/.test(this.password);
    }

    hasLowerCaseCharacter() {
        return /[a-z]/.test(this.password);
    }

    hasNumber() {
        return /\d/.test(this.password);
    }

    hasSpecialCharacter(){
        return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(this.password);
    }

    isNotCommonPassword() {
        const commonPasswords = ["password", "123456", "qwerty", "12345678", "admin"];
        return !commonPasswords.includes(this.password.toLowerCase());
    }

    hasNotWhitespace() {
        return /^\S+$/.test(this.password); // Improved whitespace check
    }

    isStrongPassword() {
        return (
            this.isValidLength() &&
            this.hasUpperCaseCharacter() &&
            this.hasLowerCaseCharacter() &&
            this.hasNumber() &&
            this.hasSpecialCharacters() &&
            this.isNotCommonPassword() && 
            this.hasNotWhitespace()
        );
    }
}

function validatePassword(password) {
    const isValidPassword = new ValidPassword(password);
    return isValidPassword.isStrongPassword();
}

module.exports = validatePassword;
