

function validatePassword(password){
    const isValidPassword=new validPassword(password);
    return isValidPassword;
}

module.exports = validatePassword;