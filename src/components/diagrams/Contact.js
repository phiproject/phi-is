import React, { Component } from 'react'
import Diagram from './Diagram'

import IconRead from '../icons/IconRead'
import IconPlay from '../icons/IconPlay'

class Contact extends Component {
  render() {
    const play_button = this.props.data.buttons[1]
    const read_button = this.props.data.buttons[0]

    return (
      <div className="diagram">

        <div className="buttons row">
           <div className="col s6">
              <a href={play_button.url}>
                 <IconPlay {...play_button} />
              </a>
           </div>
           <div className="col s6">
              <a href={read_button.url}>
                 <IconRead {...read_button} />
              </a>
           </div>
        </div>

      </div>
    )
  }
}

export default Contact;
