import React, { Component } from 'react';
import axios from 'axios';

import CommentBox from './comments/CommentBox'

  class App extends Component {
        constructor (props) {
          super(props)
              this.state ={comments:[{description:'Comment One'},{description:'Comment Two'},{description:'Comment Three'}]};
        }

      render() {
        return (<div id="container">
                  <CommentBox comments={this.state.comments} />
                </div>);
      }


  }
  export default App;
