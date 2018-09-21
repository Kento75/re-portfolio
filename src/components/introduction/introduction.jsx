import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
            Web Frontend Programmer. loves TypeScript, JavaScript, React.js, Vue.js, Riot.js, PHP, Python, Ruby, Golang.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
