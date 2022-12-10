import * as React from 'react';

class Intro extends React.Component{
    constructor(props){
        super(props);
        this.state = {cv:"https://docs.google.com/document/d/16UToyRpW-2P52TTSRAXpw8oR37_9HjSfiUGhYd8uP-w/export?format=pdf"}
    }
    render(){
        let { data } = this.props;
        let {cv} = this.state;
        return (<React.Fragment>
                    <header className="header theiaStickySidebar">
                        <div className="profile-img">
                            <img src={data.img} className="img-responsive profile-pic" alt=""/>
                        </div>
                        <div className="content">
                            <h1 className="name">{data.name}</h1>
                            <span className="lead">{data.title}</span>
                            <div className="about-text">
                            {data.about}
                            </div>
                            <ul className="social-icon">
                                <li><a href={data.linkedin} target="_blank" className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href={data.github} target="_blank" className="github"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href={cv} target="_blank" className="cv"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </header>
                </React.Fragment>);
    }
}

export default Intro