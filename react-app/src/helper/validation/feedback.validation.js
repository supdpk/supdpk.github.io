const feedbackValidation = {
    form: {
        name: { value: "", error: "" },
        email: { value: "", error: "" },
        phone: { value: "", error: "" },
        subject: { value: "", error: "" },
        message: { value: "", error: "" }
    },
    validate: (form) => {
        form.name = feedbackValidation.validateName(form.name);
        form.email = feedbackValidation.validateEmail(form.email);
        form.phone = feedbackValidation.validatePhone(form.phone);
        form.subject = feedbackValidation.validateSubject(form.subject);
        form.message = feedbackValidation.validateMessage(form.message);
        return form;
    },
    validateName: (name) => {
        if (name.value !== "") {
            if (name.value.length <= 5)
                name.error = "Name should be greater than 5 character"
            else
                name.error = "";
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
        }
        return phone;
    },
    validateSubject: (subject) => {
        if (subject.value !== "") {
            if (subject.value.length <= 8)
                subject.error = "Subject should be greater than 8 characters"
            else
                subject.error = "";
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
        }
        return message;
    }
}

export default feedbackValidation;