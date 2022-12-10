const  googleFormConversion = {
    orihinal_fields:{
        name:"entry.2005620554",
        email:"entry.1045781291",
        phone:"entry.1166974658",
        subject:"entry.1175889186",
        message:"entry.839337160"
    },
    convert:(form)=>{
        let newForm = "?";
        newForm += googleFormConversion.orihinal_fields.name+"="+form.name.value+"&"; 
        newForm += googleFormConversion.orihinal_fields.email+"="+form.email.value+"&"; 
        newForm += googleFormConversion.orihinal_fields.phone+"="+form.phone.value+"&"; 
        newForm += googleFormConversion.orihinal_fields.subject+"="+form.subject.value+"&"; 
        newForm += googleFormConversion.orihinal_fields.message+"="+form.message.value; 
        return newForm;
    }
}

export default googleFormConversion;