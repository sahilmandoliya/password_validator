class ValidPassword{
    constructor(password){
        this.password=password;
    }
    isValidLength(){
       return this.password.length>=8;
    }

    hasUpperCaseCharacter(){
        return /[A-Z]/.test(this.password);
    }

    hasNumber(){
        return /\d/.test(this.password);
    }

    hasSpecialCharacter(){
        return /[!@#$%^&*]/.test(this.password);
    }

    isNotCommonPassword() {
        const commonPasswords=["password", "123456", "qwerty", "12345678"]
        return !commonPasswords.includes(this.password.toLowerCase());
    }

    isStrongPassword() {
        return (
            this.isValidLength() &&
            this.hasUpperCaseCharacter() &&
            this.hasLowerCaseCharacter() &&
            this.hasNumber() &&
            this.hasSpecialCharacters() &&
            this.hasNoSpaces() &&
            this.hasNoConsecutiveRepeatedCharacters() &&
            this.isNotCommonPassword()
        );
    }
};

function validatePassword(password){
    const isValidPassword=new ValidPassword(password);
    return isValidPassword;
}

module.exports = validatePassword;