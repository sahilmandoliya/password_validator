class validPassword{
    constructor(password){
        this.password=password;
    }
    isValid(){
       return this.password.length>=8 ? true : false;
    }

    hasUpperCaseCharacter(){
        return this.password.toLowerCase() != this.password;
    }

    hasNumber(){
        return /\d/.test(this.password);
    }
};

function validatePassword(password){
    const isValidPassword=new validPassword(password);
    return isValidPassword;
}

module.exports = validatePassword;