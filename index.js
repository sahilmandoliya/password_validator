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
};

function validatePassword(password){
    const isValidPassword=new ValidPassword(password);
    return isValidPassword;
}

module.exports = validatePassword;