import React from "react";
import { githubUserAPI } from "../../../services/github.service";

class Interest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        let { data } = this.state;
        data = await githubUserAPI.getInterests();
        this.setState({ data });
    }
    render() {
        let { data } = this.state;
        return (<section className="section-wrapper section-interest gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Interest</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {data.map((d, i) => {
                            return (<div className="content-item" key={i}>
                                <h3> {d.name}</h3>
                                <p> {d.description} </p>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default Interest;