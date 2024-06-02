class FormSignIn
{
     constructor(id, header, main, footer){
        this.id = id;
        this.header = header;
        this.main = main;
        this.footer = footer;
     }
}

class Users{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class FieldForm
{
    constructor(message, type, isSuccess){
        this.message = message;
        this.type = type;
        this.isSuccess = isSuccess;
    }
}

class UserField extends FieldForm{
    constructor(message, type, isSuccess){
        super(message, type, isSuccess);

    }
}
class EmailField extends FieldForm{
    constructor(message, type, isSuccess, check){
        super(message, type, isSuccess);
        this.check = check;
    }
}

class PasswordField extends FieldForm{
    constructor(message, type, isSuccess, maxLength) {
        super(message, type, isSuccess);
        this.maxLength = maxLength;
    }
}

class ConfirmPasswordField extends FieldForm{
    constructor(message, type, isSuccess) {
        super(message, type, isSuccess);
    }
}

export {Users, UserField, EmailField, PasswordField, ConfirmPasswordField, FieldForm, FormSignIn};