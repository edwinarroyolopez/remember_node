import React from 'react'

export default class Comment extends React.Component {
  constructor() {
      super()
  }
  render(){
        return(
                <div className='comment'>
                      <div className="content_img">
                          <img src={ this.props.img } />
                      </div>
                      <div className="content_body">
                          <div className="user">{ this.props.user }</div>
                          <div className="description">{ this.props.description }</div>
                      </div>
                </div>
        )
  }

}
