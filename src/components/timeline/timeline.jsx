import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false,
          expanded4: false,
          expanded5: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpandChange4 = (expanded4) => {
      this.setState({expanded4: expanded4});
    };

    handleExpandChange5 = (expanded5) => {
      this.setState({expanded5: expanded5});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleExpand4 = () => {
      this.setState({expanded4: true});
    };

    handleExpand5 = () => {
      this.setState({expanded5: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };

    handleReduce4 = () => {
      this.setState({expanded4: false});
    };

    handleReduce5 = () => {
      this.setState({expanded5: false});
    };

    render() {
        return (
            <div className="timeline">
              <p className="headline">Experience</p>
                <div className="timeline-entry">
                  <Card>
                      <CardHeader title="Web Frontend Programmer" subtitle="and Backend Programmer"/>
                  </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Frontend"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>TypeScript</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>JavaScript</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>React.js</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Vue.js</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Riot.js</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>JQuery</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Webpack</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Babel</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>HTML5</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>CSS3</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>SASS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Bootstrap</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Semantic UI</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Material UI</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Electron</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Backend"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Java</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Spring Boot</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Golang</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Python3</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Django</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Flask</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Node.js</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Express</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>PHP7</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Laravel</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Wordpress</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Ruby</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Ruby on Rails</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Oracle DB</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>MySQL</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>MariaDB</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>MS SQL Server</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>PostgreSQL</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>DB2</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>SQLite3</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>MongoDB</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Elastic Search</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Amazon RedShift</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Google BigQuery</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>openSUSE</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Ubuntu Linux</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Linux Mint</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>CentOS</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>RedHat Enterprise Linux</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Amazon Linux</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Nginx</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Apache</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Docker</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>AWS</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>GCP</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Firebase</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Heroku</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Mobile"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>React Native</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Expo</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                      <CardHeader title="DevOps"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Dockerfile</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Ansible</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Git</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>GitHub</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>GitLab</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Jenkins</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Circle CI</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Travis CI</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>drone.io</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>AppVeyor</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Semaphore CI</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>codacy</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Coveralls</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded5} onExpandChange={this.handleExpandChange5}>
                      <CardHeader title="Business Intelligence"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Yellowfin</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>MotionBoard</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>DataSpider</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Dr.Sum EA</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
