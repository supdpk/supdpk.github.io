import * as React from 'react'
import { githubUserAPI } from '../../../services/github.service';

class Skills extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }
    async componentDidMount() {
        let { data } = this.state;
        data = await githubUserAPI.getSkills();
        this.setState({ data })
    }
    render() {
        let { data } = this.state;
        return (<React.Fragment>
            <section className="section-wrapper skills-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2>Skills</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="progress-wrapper">
                                {data.map((d, i) => {
                                    return (<div className="progress-item" key={i}>
                                        <span className="progress-title">{d.name}</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={d.level} aria-valuemin="0"
                                                aria-valuemax="100" style={{ width: d.level }}><span className="progress-percent"> {d.level}</span>
                                            </div>
                                        </div>
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>)
    }

}

export default Skills;