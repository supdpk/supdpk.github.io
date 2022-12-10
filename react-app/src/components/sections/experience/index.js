import * as React from 'react'
import { githubUserAPI } from '../../../services/github.service';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    async componentDidMount() {
        let { data } = this.state;
        data = await githubUserAPI.getWorkExperience();
        this.setState({ data })
    }

    render() {
        let { data } = this.state;
        return (<React.Fragment>
            <section className="section-wrapper section-experience gray-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title"><h2>Work Experience</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {data.map((d, i) => {
                                return (<div className="content-item" key={i}>
                                    <div className="col-md-2">
                                        <img className="img-icon" src={d.logo} alt={d.comapany_name} />
                                    </div>
                                    <div className="col-md-10">
                                        <small>{d.start_from} - {d.end_to}</small>
                                        <h3>{d.job_title}</h3>
                                        <h4>{d.comapany_name}</h4>
                                        <p>{d.location}</p>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>)
    }
}