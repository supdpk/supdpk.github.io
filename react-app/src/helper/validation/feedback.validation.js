const feedbackValidation = {
    form: {
        name: { value: "", error: "", touched:false },
        email: { value: "", error: "", touched:false },
        phone: { value: "", error: "", touched:false },
        subject: { value: "", error: "", touched:false },
        message: { value: "", error: "", touched:false },
        validate:false
    },
    validate: (form) => {
        form.name = feedbackValidation.validateName(form.name);
        form.email = feedbackValidation.validateEmail(form.email);
        form.phone = feedbackValidation.validatePhone(form.phone);
        form.subject = feedbackValidation.validateSubject(form.subject);
        form.message = feedbackValidation.validateMessage(form.message);
        form.validate = feedbackValidation.validateForm(form);
        return form;
    },
    validateName: (name) => {
        if (name.value !== "") {
            if (name.value.length <= 5)
                name.error = "Name should be greater than 5 character"
            else
                name.error = "";
            name.touched = true;
        }
        return name;
    },
    validateEmail: (email) => {
        if (email.value !== "") {
            let emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!emailfilter.test(email.value))
                email.error = "Please enter a valid Email";
            else
                email.error = ""
            email.touched = true;
        }
        return email;
    },
    validatePhone: (phone) => {
        
        if(phone.value !== ""){
            let phoneNo = phone.value;
            if(isNaN(phoneNo))
                phone.error = "Phone No should be in numberic format"
            else if(phoneNo.length <=9 )
                phone.error = "Please enter a valid Phone No";
            else if(phoneNo.length > 12)
                phone.error = "Please enter a valid Phone No";
            else
                phone.error = "";
            phone.touched = true;
        }
        return phone;
    },
    validateSubject: (subject) => {
        if (subject.value !== "") {
            if (subject.value.length <= 8)
                subject.error = "Subject should be greater than 8 characters"
            else
                subject.error = "";
            subject.touched = true;
        }
        return subject;
    },
    validateMessage: (message) => {
        let totalChar = 141;
        let charleft = message.value.length;  
        if (message.value !== "") {
            if (message.value.length <= 140)
                message.error = (totalChar-charleft)+" characters left"
            else
                message.error = "";
            message.touched = true;
        }
        return message;
    },
    validateForm:(form)=>{
        let response = true;
        if(form.name.error.length>0) response = false;
        else response = form.name.touched

        if(form.email.error.length>0)response = false;
        else response = form.email.touched

        if(form.phone.error.length>0) response = false;
        else response = form.phone.touched
        
        if(form.subject.error.length>0) response = false;
        else response = form.subject.touched

        if(form.message.error.length>0) response = false;
        else response = form.subject.touched

        return response;
    },
    reset:()=>{
        return {
            name: { value: "", error: "", touched:false },
            email: { value: "", error: "", touched:false },
            phone: { value: "", error: "", touched:false },
            subject: { value: "", error: "", touched:false },
            message: { value: "", error: "", touched:false },
            validate:false
        };
    }
}

export default feedbackValidation;