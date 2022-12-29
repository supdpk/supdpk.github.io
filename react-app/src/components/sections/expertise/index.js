import React from "react";
import { githubUserAPI } from '../../../services/github.service';

class Expertise extends React.Component {
    constructor(props){
        super(props);
        this.state = { data:[] }
    }
    async componentDidMount(){
        let { data } = this.state;
        data = await githubUserAPI.getExpertise();
        this.setState({ data })
    }
    render() {
        let { data } = this.state;
        return (<section className="expertise-wrapper section-wrapper gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Expertise</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data.map((d,i)=>{
                        return(<div className="col-md-6" key={i}>
                        <div className="expertise-item">
                            <h3>{d.tittle}</h3>
                            <p>
                                {d.content}
                            </p>
                        </div>
                    </div>)
                    })}
                    
                </div>
            </div>
        </section>);
    }
}
export default Expertise;