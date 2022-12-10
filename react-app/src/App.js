import React from 'react';
import Alert from './components/layout/alert';
import Credit from './components/layout/credit';
import Intro from './components/layout/intro/index';
import Contact from './components/sections/contact';
import Education from './components/sections/education';
import Experience from './components/sections/experience';
import Expertise from './components/sections/expertise';
import Interest from './components/sections/interest';
import Project from './components/sections/project';
import Repository from './components/sections/repository';
import Skills from './components/sections/skills';
import { githubUserAPI } from './services/github.service';


class App extends React.Component {
  state = {
    intro:{
      name:'',
      title:'',
      about:'',
      img:'',
      linkedin:''
      ,github:''
    },
    alert:null
  };
  constructor(props){
    super(props);
    this.alert = this.alert.bind(this);
  }
  async componentDidMount(){
    let {intro} = this.state;
    intro = await githubUserAPI.getUser();
    this.setState({intro});
    document.title = intro.name + "- Github Page"
  }

  alert(data){
    let { alert } = this.state;
    alert=data;
    this.setState({alert});
  }

  render() {
    let {intro,alert} = this.state;
    return (
      <div id="main-wrapper" className="main-container">
        <div id="particles-js"></div>

        <div className="row">
          <div className="columns-block container">
            <div className="left-col-block blocks">
              <Intro data={intro}/>
            </div>
            <div className="right-col-block blocks">
              <div className='theiaStickySidebar'>
                <Expertise />
                <Experience />
                <Education />
                <Skills />
                <Interest />
                <Repository/>
                <Project />
                <Contact alert={this.alert}/>
                <Credit data={intro}/>
              </div>
            </div>
          </div>
          <Alert alert={alert}/>
        </div>
      </div>
    );
  }
}

export default App;
