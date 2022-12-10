import React from "react";
import { githubUserAPI } from "../../../services/github.service";

class Repository extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    async componentDidMount() {
        let { data } = this.state;
        data = await githubUserAPI.getRepositories();
        this.setState({ data });
    }
    render() {
        let { data } = this.state;
        return (<section className="section-wrapper section-repository">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title"><h2>Public Repositories</h2></div>
                    </div>
                </div>
                <div className="row">
                    {data.map((d, i) => {
                        return (<div className="col-md-12" key={i}>
                            <div className="content-item">
                                <small>{d.start_date} - {d.end_date}</small>
                                <h3><a href={d.repository_url} target="_blank">{d.repository_name}</a></h3>
                                {d.collaborators.map((aurthor, id) => {
                                    return (<React.Fragment key={id}>
                                        <h4><a className="text-black" href={aurthor.url} target="_blank"> {aurthor.name} </a></h4>
                                    </React.Fragment>)
                                })}
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </section>)
    }
}

export default Repository;