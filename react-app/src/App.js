import React from 'react';
import Credit from './components/layout/credit';
import Intro from './components/layout/intro/index';
import Education from './components/sections/education';
import Experience from './components/sections/experience';
import Expertise from './components/sections/expertise';
import Interest from './components/sections/interest';
import Project from './components/sections/project';
import Skills from './components/sections/skills';
import { githubUserAPI } from './services/github.service';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {intro:{name:'',title:'',about:'',img:'',linkedin:'',github:''}};
  }
  async componentDidMount(){
    let {intro} = this.state;
    intro = await githubUserAPI.getUser();
    this.setState({intro});
  }
  render() {
    let {intro} = this.state;
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
                <Project />
                <Credit data={intro}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
