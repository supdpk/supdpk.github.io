import React from "react";

class Expertise extends React.Component {
    constructor(props){
        super(props);
        this.state = { data:[] }
    }
    render() {
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
                    <div className="col-md-6">
                        <div className="expertise-item">
                            <h3>Professionally drive</h3>
                            <p>
                                Synergistically strategize customer directed resources rather than principle.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="expertise-item">
                            <h3>Seamlessly leverage </h3>
                            <p>
                                Quickly repurpose reliable customer service with orthogonal ideas. Competently.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="expertise-item">
                            <h3>Interactively incubate</h3>
                            <p>
                                Interactively myocardinate high standards in initiatives rather than next-generation.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="expertise-item">
                            <h3>Globally streamline</h3>
                            <p>
                                Dynamically initiate client-based convergence vis-a-vis performance based. </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>);
    }
}
export default Expertise;