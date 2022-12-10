import googleFormConversion from "../helper/conversion/google-form.conversion";

const  googleFormAPI = {
    form_id:"1FAIpQLSfKMsrU88JfeqaTJVqa3bpQwTMABy3VhvbbPHo5b-tZv-N8NQ",
    form_url:"https://docs.google.com/forms/d/e/",
    sendForm: async (form)=>{
        try{
            let  reqBody = googleFormConversion.convert(form);
            let url = googleFormAPI.form_url+googleFormAPI.form_id+"/formResponse"+encodeURI(reqBody);
            let resposne = await fetch(url,{
                method: "post",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
                });

            let result = await resposne.json();
        return result;
        }catch(e){
            console.clear();
            console.log(e.message)
        }
        
    }
}

export default googleFormAPI;