import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';

class IntroductionComponent extends Component {
  render () {
    return (
      <div className="introduction">
        <Avatar src="avatar.jpg" size={150} />
        <p className="introduction-text">
          I am a full-stack developer. loves TypeScript, JavaScript, React.js, Vue.js, Python, Golang, Java, Kotlin.
        </p>
      </div>
    );
  }
}

export default IntroductionComponent;
