import React from "react";
import alertService from "../../../services/alert.service";

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { alerts: [] }
    }
    componentDidUpdate(prevProps,pervState,snapshot) {
        
        let { alerts } = this.state;
        // console.log('Previous Properties',prevProps);
        // console.log('current Properties',this.props);

        if (this.props.alert && (pervState.alerts.length !== prevProps.alerts.length || pervState.alerts.length==0)) {
            let id = alerts.length +1;
            let new_alert = alertService.inject(this.props.alert,id);
            alerts.push(new_alert);
            this.setState({ alerts });
            let interval = setInterval(() => {
                alerts = alertService.changeStatus(alerts,id);
                // console.log('alreday happen');
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