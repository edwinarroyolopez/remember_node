import React from 'react'

import Comment from './Comment'

export default class CommentList extends React.Component {
  constructor() {
      super()
            this.state = {
                none : []
         }
  }
  render(){

      let comments = this.props.comments.map((comment) => {
            return(<div key={comment.description.toString()} >
                          <Comment  description={comment.description} />
                    </div>)
      })

        return(
          <div className='commentList'>
              <div className='title'>
                  <div className='label'>Comments</div>
              </div>
              { comments }
          </div>
        )
  }

}
