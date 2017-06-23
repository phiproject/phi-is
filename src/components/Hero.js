import React, { Component } from 'react'

class Hero extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="Hero">

        <div>
          <h1 className="Xrellax" data-rellax-speed="1">{data.title}</h1>
          <h2 className="Xrellax" data-rellax-speed="3">{data.subtitle}</h2>
        </div>

      </div>
    )
  }
}

export default Hero
