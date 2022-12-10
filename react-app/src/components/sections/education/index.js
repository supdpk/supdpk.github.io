import React from "react";

class Education extends React.Component {
    render() {
        return (<section className="section-wrapper section-education">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title"><h2>Education</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-item">
                            <small>2022 - Presnt</small>
                            <h3>Master of Computer Application</h3>
                            <h4>Amity University Online </h4>

                            <p>Noida, Uttar Pradesh, India</p>
                        </div>
                        <div className="content-item">
                            <small>2013 - 2017</small>
                            <h3>Bachelor of Computer Applications</h3>
                            <h4>Arya College </h4>

                            <p>Ludhiana, Punjab, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
    }
}

export default Education;