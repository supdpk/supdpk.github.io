import React from "react";

export default class Credit extends React.Component{
    constructor(props){
        super(props);
        this.state = {start_year:'2018',year:'2018'}
    }
    componentDidMount(){
        let {year} = this.state;
        year = new Date().getFullYear();
        this.setState({year})
    }
    render(){
        let { start_year,year } = this.state;
        if(start_year!=year)
        year = start_year+"-"+year; 
        let { data } = this.props;
        return(<footer className="footer">
        <div className="copyright-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="copytext">&copy; {year}, <a href={data.github} target="_blank">{data.name}</a> | Design By: <a href="https://twitter.com/themehippo" target="_blank">themehippo</a> </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>);
    }
}