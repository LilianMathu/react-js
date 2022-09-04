import React, { Component } from 'react'

export class UpdateLifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Component'
      }
    }

    static getDerivedStateFromProps () {
        console.log('get derived state from props')
        return null;
    }

  render() {
    return (
      <div>UpdateLifecycle</div>
    )
  }
}

export default UpdateLifecycle