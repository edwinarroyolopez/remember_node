import React from 'react'

import CommentList from './CommentList'

export default class CommentBox extends React.Component {
  constructor() {
      super()
  }
  render(){

        return(
          <div className='commentBox'>
              <CommentList  comments={ this.props.comments } />
          </div>
        )
  }

}
