import React, { Component } from 'react';
import axios from 'axios';

import CommentBox from './comments/CommentBox'

  class App extends Component {
        constructor (props) {
          super(props)
              this.state ={comments:[{description:'Dragon Ball Gt',user:'Ed',img:'public/img/goku.png'},
                                    {description:'Naruto Shipudden',user:'Naruto',img:'public/img/naruto.png'},
                                    {description:'Code Geass',user:'Lelouch',img:'public/img/zero.png'}]};
        }

      render() {
        return (<div id="container">
                  <CommentBox comments={this.state.comments} />
                </div>);
      }


  }
  export default App;
