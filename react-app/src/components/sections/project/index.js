import React from "react";
import { githubUserAPI } from "../../../services/github.service";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    async componentDidMount() {
        let { data } = this.state;
        data = await githubUserAPI.getProjects();
        this.setState({ data });
    }
    render() {
        let { data } = this.state;
        return (<section className="section-wrapper portfolio-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Projects</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data.map((d, i) => {
                        return (<div className="col-md-6" key={i}>
                            <a className="portfolio-item" href={d.url} target="_blank">
                                <div className="portfolio-thumb">
                                    <img src={d.project_photo} alt={d.name} />
                                </div>
                                <div className="portfolio-info">
                                    <h3>{d.title}</h3>
                                    <small>{d.name}</small>
                                </div>
                            </a>
                        </div>);
                    })}
                </div>
            </div>
        </section>);
    }
}

export default Project;