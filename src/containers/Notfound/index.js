import React, { Component } from 'react';



class NotFound extends Component {

  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.notFound = true) ;
  }

  render() {
   
    return <div>404, page not found</div>
  }
}

export default NotFound;