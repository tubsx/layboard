$(document).ready(function(){
    var attemptCounter = 0;

    $("#btnLogin").click(function(e){
        e.preventDefault();
        var email = $("#txtLoginEmail").val();
        var password = $("#txtLoginPassword").val();
        var emailValidation = false, passwordValidation = false;

        if(email == "" || (!email.replace(/\s/g, '').length))
        {
            $("#txtLoginEmail").addClass("is-invalid");
            $("#txtLoginEmailValidation").html('<i class="fas fa-exclamation-circle"></i> Email address is required.');
        }
        else
        {
            emailValidation = true;
        }
        
        
        if(password == "" || (!password.replace(/\s/g, '').length))
        {
            $("#txtLoginPassword").addClass("is-invalid");
            $("#txtLoginPasswordValidation").html('<i class="fas fa-exclamation-circle"></i> Password is required.');
        }
        else
        {
            passwordValidation = true;
        }
        
        if(emailValidation && passwordValidation)
        {
            $.ajax({
                type: "POST",
                url: baseURL + "/FreelancersController/email_exists",
                data: {email:email},
                dataType: "html",
                success: function (response) {
                    if(response == 1)
                    {
                        login(email, password, "freelancer");
                    }
            else if(emailValidation && passwordValidation){

            $.ajax({
            type: "POST",
            url: baseURL + "/EmployersController/email_exists",
            data: {email:email},
            dataType: "html",
            success: function (response) {
                    if(response == 1)
                    {
                        login(email,password,"employer");
                    }
           
            else if(emailValidation && passwordValidation){

            $.ajax({
            type: "POST",
            url: baseURL + "/AdminsController/email_exists",
            data: {email:email},
            dataType: "html",
            success: function (response) {
                    if(response == 1){
                        login(email,password,"admin");
                    }
            
            else
                    {
                            $("#txtLoginEmail").addClass("is-invalid");
                            $("#txtLoginEmailValidation").html("<i class='fas fa-exclamation-circle'></i> Email doesn't exists");
                    }
                                        }
                                    });
                                }

                            }
                        });
                    }
                }
            });
        }
    });

    $("#btnSignUp").click(function(e){
        e.preventDefault();
        var email = $("#txtRegisterEmail").val();
        var password = $("#txtRegisterPassword").val();
        var firstname = $("#txtRegisterFirstname").val();
        var lastname = $("#txtRegisterLastname").val();
        var usertype = $("#txtRegisterUserType").val();
        var url;
        var emailValidated = 0, passwordValidated = 0, firstnameValidated = 0, lastnameValidated = 0, usertypeValidated = 0;

        if(email == "" || (!email.replace(/\s/g,'').length))
        {
            $("#txtRegisterEmail").addClass("is-invalid");
            $("#txtRegisterEmailValidation").html('<i class="fas fa-exclamation-circle"></i> Email address is required.');
        }
        else if(validateEmail(email))
        {
            emailValidated = 1;
        }
        else
        {
            $("#txtRegisterEmail").addClass("is-invalid");
            $("#txtRegisterEmailValidation").html('<i class="fas fa-exclamation-circle"></i> Please enter a valid email.');
        }

        if(password == "" || (!password.replace(/\s/g,'').length))
        {
            $("#txtRegisterPassword").addClass("is-invalid");
            $("#txtRegisterPasswordValidation").html('<i class="fas fa-exclamation-circle"></i> Password is required.');
        }
        else
        {
            passwordValidated = 1;
        }

        if(firstname == "" || (!firstname.replace(/\s/g,'').length))
        {
            $("#txtRegisterFirstname").addClass("is-invalid");
            $("#txtRegisterFirstnameValidation").html('<i class="fas fa-exclamation-circle"></i> Firstname is required.');
        }
        else
        {
            firstnameValidated = 1;
        }

        if(lastname == "" || (!lastname.replace(/\s/g,'').length))
        {
            $("#txtRegisterLastname").addClass("is-invalid");
            $("#txtRegisterLastnameValidation").html('<i class="fas fa-exclamation-circle"></i> Lastname is required.')  
        }
        else
        {
            lastnameValidated = 1;
        }

        if(usertype == "" || (!usertype.replace(/\s/g,'').length))
        {
            $("#txtRegisterUserType").addClass("is-invalid");
            $("#txtRegisterUserTypeValidation").html('<i class="fas fa-exclamation-circle"></i> Account type is required.')
        }
        else
        {
            usertypeValidated = 1;
            if(usertype == "freelancer")
            {
                url = "/FreelancersController/create_account";
            }
            else if(usertype == "employer")
            {
                url = "/EmployersController/create_account";
            }
        }

        if((emailValidated == 1) &&(passwordValidated == 1) && (firstnameValidated == 1) && (lastnameValidated == 1) && (usertypeValidated == 1))
        {          
            $.ajax({
                type: "POST",
                url: baseURL + "/FreelancersController/email_exists",
                data: {email:email},
                dataType: "html",
                success: function (response) {
                    if(response == 1)
                    {
                        $("#txtRegisterEmail").addClass("is-invalid");
                        $("#txtRegisterEmailValidation").html("<i class='fas fa-exclamation-circle'></i> Email already exists");
                    }
                    else
                    {
                        $.ajax({
                            type: "POST",
                            url: baseURL + "/EmployersController/email_exists",
                            data: {email:email},
                            dataType: "html",
                            success: function (response) {
                                if(response == 1)
                                {
                                    $("#txtRegisterEmail").addClass("is-invalid");
                                    $("#txtRegisterEmailValidation").html("<i class='fas fa-exclamation-circle'></i> Email already exists");
                                }
                                else
                                {
                                    register(email, password, firstname, lastname, url);
                                }
                            }
                        });
                    }
                }
            });   
        }
    });

    function register(email, password, firstname, lastname, url)
    {
        $.ajax({
                type: "POST",
                url: baseURL + url,
                data: {email:email,password:password,firstname:firstname,lastname:lastname},
                dataType: "html",
                success: function (response) {
                    if(response == 1)
                    {
                        Swal.fire({
                            title:"<h3 class='text-green'><i class='fas fa-check-circle'></i> Success!</h3>",
                            text:"Account created successfully.",
                            showConfirmButton:false,
                            timer:3000
                        }).then(function(){
                            $("#txtRegisterEmail").val("");
                            $("#txtRegisterPassword").val("");
                            $("#txtRegisterFirstname").val("");
                            $("#txtRegisterLastname").val("");
                            $("#txtRegisterUserType").val("");
                        });
                    }
                }
            });
    }

    function login(email, password, usertype)
    {
        if(usertype == "freelancer")
        {
            var url = "/FreelancersController/login"; 
        }
        else if(usertype == "employer")
        {
            var url = "/EmployersController/login";
        }
         else if(usertype == "admin")
        {
            var url = "/AdminsController/login";
        }
        //alert(email + " " + password + " " + usertype + " " + url);
        $.ajax({
            type: "POST",
            url: baseURL + url,
            data: {email:email, password:password},
            dataType: "html",
            success: function (response) {
                console.log(response);
                if(response == 1)
                {
                    Swal.fire({
                        title:"<h3 class='text-green'><i class='fas fa-check-circle'></i> Success!</h3>",
                        text:"Logged in successfully.",
                        showConfirmButton:false,
                        timer:3000
                    }).then(function(){
                        window.location.href = baseURL + "/dashboard";
                    });
                }
                else
                {
                    attemptCounter++;
                    Swal.fire({
                        title:"<h3 class='text-danger'><i class='fas fa-times-circle'></i> Error!</h3>",
                        text:"Incorrect Password, Try again.",
                        showConfirmButton:false,
                        timer:2000
                    });
                    if(attemptCounter >= 5)
                    {
                        Swal.fire({
                        title:"<h3 class='text-danger'><i class='fas fa-times-circle'></i> Error!</h3>",
                        text:"No attempts left. Password recovery has been sent to your email.",
                        showConfirmButton:false,
                        timer:2000
                    });
                    }
                }
            }
        });
    }

    function validateEmail(email)
    {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
});