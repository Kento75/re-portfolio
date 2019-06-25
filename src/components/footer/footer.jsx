import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Kento75">
            GitHub
          </a>
           /
          <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/~kento75">
            npm
          </a>
          /
          <a target="_blank" rel="noopener noreferrer" href="https://qiita.com/Kento75">
            Qiita
          </a>
           /
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Kento751">
            Twitter
          </a>
           /
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kento75-4326a316a/">
            LinkedIn
          </a>
          /
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kento75-4326a316a/">
            Blog
          </a>
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="Back to top" onClick={this.onScrollToTop}/>
      </div>
    );
  }
}

export default FooterComponent;
