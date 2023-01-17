import formMock from "../mooks/form";
import feedbackValidation from "./feedback.validation";

test("Feedback Form Validation - Name - Unit Test Case 1",()=>{
    let name = formMock.name;
    name.value = "bla";
    name = feedbackValidation.validateName(name);
    let result = name.error;
    let expactedMessage = "Name should be greater than 5 character";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Name - Unit Test Case 2",()=>{
    let name = formMock.name;
    name.value = "Deepak";
    name = feedbackValidation.validateName(name);
    let result = name.error;
    let expactedMessage = "";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Email - Unit Test Case 1",()=>{
    let email = formMock.email;
    email.value = "Deepak";
    email = feedbackValidation.validateEmail(email);
    let result = email.error;
    let expactedMessage = "Please enter a valid Email";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Email - Unit Test Case 2",()=>{
    let email = formMock.email;
    email.value = "deepak.belbase@gmail.com";
    email = feedbackValidation.validateEmail(email);
    let result = email.error;
    let expactedMessage = "";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Phone - Unit Test Case 1",()=>{
    let phone = formMock.phone;
    phone.value = "Deepak";
    phone = feedbackValidation.validatePhone(phone);
    let result = phone.error;
    let expactedMessage = "Phone No should be in numberic format";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Phone - Unit Test Case 2",()=>{
    let phone = formMock.phone;
    phone.value = "843738900";
    phone = feedbackValidation.validatePhone(phone);
    let result = phone.error;
    let expactedMessage = "Please enter a valid Phone No";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Phone - Unit Test Case 3",()=>{
    let phone = formMock.phone;
    phone.value = "8437389000009";
    phone = feedbackValidation.validatePhone(phone);
    let result = phone.error;
    let expactedMessage = "Please enter a valid Phone No";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Phone - Unit Test Case 4",()=>{
    let phone = formMock.phone;
    phone.value = "8437389009";
    phone = feedbackValidation.validatePhone(phone);
    let result = phone.error;
    let expactedMessage = "";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Subject - Unit Test Case 1",()=>{
    let subject = formMock.subject;
    subject.value = "This";
    subject = feedbackValidation.validateSubject(subject);
    let result = subject.error;
    let expactedMessage = "Subject should be greater than 8 characters";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Subject - Unit Test Case 2",()=>{
    let subject = formMock.subject;
    subject.value = "This is a Subject";
    subject = feedbackValidation.validateSubject(subject);
    let result = subject.error;
    let expactedMessage = "";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Message - Unit Test Case 1",()=>{
    let message = formMock.message;
    message.value = "This is an invalid Message";
    let totalChar = 141;
    let charleft = message.value.length;
    message = feedbackValidation.validateMessage(message);
    let result = message.error;
    let expactedMessage = (totalChar-charleft)+" characters left";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Message - Unit Test Case 2",()=>{
    let message = formMock.message;
    message.value = "This is a valid Message with more than 140 characters. so we could validated it to make sure this is working fine! blah! blah! blah! blah! blah!";
    message = feedbackValidation.validateMessage(message);
    let result = message.error;
    let expactedMessage = "";
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Unit Test Case 1",()=>{
    let form = feedbackValidation.reset();
    form.name.value = "Deepak";
    form.email.value = "deepak.belbase@gmail.com";
    form.phone.value = "8437389009";
    form.subject.value = "This is a Subject";
    form.message.value = "This is an invalid Message";
    form = feedbackValidation.validate(form);
    let result = form.validate;
    let expactedMessage = false;
    expect(result).toBe(expactedMessage);
});

test("Feedback Form Validation - Unit Test Case 2",()=>{
    let form = feedbackValidation.reset();
    form.name.value = "Deepak";
    form.email.value = "deepak.belbase@gmail.com";
    form.phone.value = "8437389009";
    form.subject.value = "This is a Subject";
    form.message.value = "This is a valid Message with more than 140 characters. so we could validated it to make sure this is working fine! blah! blah! blah! blah! blah!";
    form = feedbackValidation.validate(form);
    let result = form.validate;
    let expactedMessage = true;
    expect(result).toBe(expactedMessage);
});
