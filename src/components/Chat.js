import React, { Component } from 'react'

class Chat extends Component {

  renderMessage = (message, i) => (
    <div key={i} className="message chat-message"> <span>{ message }</span> </div>
  )

  render() {
    const { messages } = this.props
    return (
      <div className="Chat">
        { messages.map((m, i) => this.renderMessage(m, i)) }
      </div>
    )
  }
}

export default Chat
