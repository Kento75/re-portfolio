import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Look at my code</p>
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="Kento75/re-portfolio"
                    avatar="github.png"
                  />
                <CardText>
                        This application is made with React16 and Material UI. Check out the code on Github.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/Kento75/re-portfolio" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
