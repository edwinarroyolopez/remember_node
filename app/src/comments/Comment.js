import React from 'react'

export default class Comment extends React.Component {
  constructor() {
      super()
  }
  render(){
        return(
                <div className='comment'>
                      <div className='label'>{ this.props.description }</div>
                </div>
        )
  }

}
