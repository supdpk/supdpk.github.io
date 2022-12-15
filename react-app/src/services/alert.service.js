const alertService = {
    alerts:[],
    alert:{
        id:0,
        text:"",
        class:"alert alert-success"
    },
    inject:(message,id) => {
        let alert = alertService.alert;
        alert.text = message;
        alert.class = "alert alert-success"
        alert.id = id;
        return alert; 
    },
    changeStatus:(alerts,id) => {
        alerts.find((alert,i)=>{
            if(alert.id==id){
                alert.class = "alert alert-success hidden";  
            }
            return alert;
        })
        return alerts;
    }
}
export default alertService;