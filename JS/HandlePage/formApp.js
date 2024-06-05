import { UserField, EmailField, PasswordField, ConfirmPasswordField, Users } from "../Root/objects.js";
import { DATA_USERS, ACCOUNT_SIGNIN } from "../Data/dataUser.js";

localStorage.setItem(ACCOUNT_SIGNIN, '[]');
var accountSignIn = JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN));
//------------ Handle DATA -----------------
var formSignIn = false;
console.log(DATA_USERS);

//------ Method check user is valid -----
function isValidUser(user={}, dataUser, email="")
{
    let emailExist = false;
    for(let i=0; i<dataUser.length; i++)
    { 
        if(dataUser[i].email === user.email || email === dataUser[i].email)
        {
            emailExist = true;
            if(dataUser[i].password === user.password)
            {
                return {
                    isSuccess: true,
                    emailExist: emailExist,
                    passwordError: false
                };
            }
            else
            {
                return {
                    isSuccess: false,
                    emailExist: emailExist,
                    passwordError: true
                };
            }
        }
    }
     return {
        isSuccess: false,
        emailExist: emailExist,
        passwordError: true
    };
}

//---- Method error notification -------------
function isNotValid(container, span, object, ortherMesseage){
    container.classList.add("border--red");
    span.style.color = 'red';
    span.innerHTML = ortherMesseage ? ortherMesseage : object.message;
    object.isSuccess = false;
}

// -------------- Method Main -----------------------
function Valid(mainElement, classListInput, submitElement)
{   
    const email_field = new EmailField("This is not an email", "email", false, /^[A-Za-z][\w$.]+@[\w]+\.\w+$/);
    const password_field = new PasswordField(``, "password", false, 5);
    const user_field = new UserField('User Name is not valid', 'userName', false);
    const confirm_password_field = new ConfirmPasswordField(`Confirm password is not valid.`, 'confirmPassword', false, 5);

    password_field.message = password_field.message + `Length Of Password is less or equal ${password_field.maxLength} characters`;
    let e_main_form = document.querySelector(mainElement)
    let containInputs = e_main_form.querySelectorAll(classListInput);
    let e_submit_form = e_main_form.querySelector(submitElement);

    //--- Check this is a sign in or sign up form
    if(containInputs.length === 2){
        formSignIn = true;
        user_field.isSuccess = true;
        confirm_password_field.isSuccess = true;
    }
    console.log("form sign in: ", formSignIn);
    
    //--- Create User --- save data
    var user = new Users();
    containInputs.forEach(containInput => {

        let e_input_form = containInput.querySelector('input');
        let e_span_form = containInput.querySelector('span');
         // --- Change when click---
        e_input_form.onclick = function()
        {
            this.classList.remove("border--red");
            this.classList.add("border--green");
            e_span_form.innerHTML = "";
        }

       // --- Change when input---
        e_input_form.oninput = function()
        {
            this.classList.remove("border--red");
            this.classList.add("border--green");
            e_span_form.innerHTML = "";
        }

        //---- Change when blur ---
        e_input_form.onblur = function()
        {
            this.classList.remove("border--green");

            //------ Check are the field valid?
            // Check Email
            if((!email_field.check.test(this.value) || this.value === "") 
                && email_field.type ===  e_span_form.title )
            {
                isNotValid(this, e_span_form, email_field);
            }//----------- Check email is existing
            else if(email_field.type === e_span_form.title && isValidUser(user, DATA_USERS, this.value).emailExist && !formSignIn){
                isNotValid(this,e_span_form, email_field, "Email is existing!. Please Choose Another Email.");
            }
            else if(email_field.type === e_span_form.title)
            {
                user.email = this.value;
                email_field.isSuccess = true;
            }
         

            // Check Password
            if( password_field.type ===  e_span_form.title
                && (this.value.length > password_field.maxLength
                || this.value === ""))
            {
              
                isNotValid(this, e_span_form, password_field);
            } 
            else if( password_field.type === e_span_form.title )
            {
                user.password = this.value;
                password_field.isSuccess = true;
            }

            //Check Confirm Password
            if(confirm_password_field.type === e_span_form.title
                && this.value != user.password)
            {
                isNotValid(this, e_span_form, confirm_password_field)
            } 
            else if(confirm_password_field.type === e_span_form.title)
            {
                confirm_password_field.isSuccess = true;
            }

            //Check User Name
            if(user_field.type === e_span_form.title && this.value.length === 0)
            {
                isNotValid(this, e_span_form, user_field);
            }else if(user_field.type === e_span_form.title )
            {
                user.name = this.value;
                user_field.isSuccess = true;
            }   
        }
    });

    //--- get button submit
    let btnSubmit = e_submit_form.querySelector('input');

    btnSubmit.addEventListener("click", function(e){
        //------ Check fields are Valid ----------
        if( email_field.isSuccess 
            && password_field.isSuccess 
            && user_field.isSuccess 
            && confirm_password_field.isSuccess)
        {
            //--------- Check this is a form sign in -------------
            if(formSignIn===true)
            {
                if(!isValidUser(user, DATA_USERS).isSuccess)
                {//--- if this is a form sign in, we will check data from fields are valid
                    containInputs.forEach(containInput => {
                        let e_input_form = containInput.querySelector('input');
                        let e_span_form = containInput.querySelector('span');

                        //---- the fields are not valid, it will notification error
                        if(!isValidUser(user, DATA_USERS).emailExist 
                            && e_span_form.title === email_field.type)
                        {
                            isNotValid(e_input_form, e_span_form, email_field, "Email is not exist!");
                        }
                        if(isValidUser(user, DATA_USERS).passwordError 
                            && e_span_form.title === password_field.type)
                        {
                            isNotValid(e_input_form, e_span_form, password_field);   
                        }
                    })
                    e.preventDefault();
                }
                else
                {
       
                   user = DATA_USERS.find(data=>data.email === user.email);
                   console.log(user)
                   accountSignIn.push(user);
                   localStorage.setItem(ACCOUNT_SIGNIN, JSON.stringify(accountSignIn));
                 
               
                }
            } 
         }
         else
         {
            //------ Loop input blocks----------
            containInputs.forEach(containInput => {
                let e_input_form = containInput.querySelector('input');
                let e_span_form = containInput.querySelector('span');

                //--------- Check fields are not Valid ------------
                if(e_span_form.title === email_field.type && !email_field.isSuccess) isNotValid(e_input_form, e_span_form, email_field);
                if(e_span_form.title === email_field.type && !email_field.isSuccess && !formSignIn) isNotValid(e_input_form, e_span_form, email_field, "Email is Existing Or Email is not Valid!");
                if(e_span_form.title === password_field.type && !password_field.isSuccess) isNotValid(e_input_form, e_span_form, password_field);
                if(e_span_form.title === user_field.type && !user_field.isSuccess) isNotValid(e_input_form, e_span_form, user_field);
            })
            e.preventDefault();
         }

    })
}



Valid('main','.form_input','.form_submit');






