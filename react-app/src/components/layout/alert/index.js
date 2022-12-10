import React from "react";
import alertService from "../../../services/alert.service";

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { alerts: [] }
    }
    componentDidUpdate(prevProps,pervState,snapshot) {
        
        let { alerts } = this.state;
        console.log('blah',pervState.alerts.length,alerts.length);

        if (this.props.alert && !alerts.find((a)=>{ return a.text==this.props.alert })) {
            let id = alerts.length +1;
            alerts.push(alertService.inject(this.props.alert,id));
            this.setState({ alerts })
            // console.log("This will work now", alerts);
            let interval = setInterval(() => {
                alerts = alertService.changeStatus(alerts,id);
                this.setState({ alerts })
                clearInterval(interval);
            }, 5000);
        }
    }
    render() {
        let { alerts } = this.state;
        return (<React.Fragment>
            <div className="alert-overlay">
                {alerts.map((alert, i) => { return (
                        <React.Fragment key={i}>
                        <div className={alert.class} role="alert">{alert.text}</div>
                    </React.Fragment>
                ) })}
            </div>
        </React.Fragment>)
    }
}

export default Alert;