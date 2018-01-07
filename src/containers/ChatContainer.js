import React, { Component } from 'react';
import ChatField from "../components/ChatField"
import ChatArea from "../components/ChatArea"
// import OnlineUsers from "../components/OnlineUsers"

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      users: [],
      message: ''
    }
    this.messageClear = this.messageClear.bind(this)
    this.messageChange = this.messageChange.bind(this)
    this.onChatSubmit = this.onChatSubmit.bind(this)
  }

  messageClear(event) {
    event.preventDefault();
    this.setState({
      message: ''
    })
  }

  messageChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  onChatSubmit(event) {
    event.preventDefault();
    let newMessage = this.state.messages.concat([`current_user: ${this.state.message}`])
    this.setState({
      messages: newMessage
    })
    this.messageClear(event);
  }

  render() {
    const chatMessage = this.state.messages.map(message => {
      return(
        <ChatArea
          message={message}
        />
      )
    })

    return(
      <div>
        <div className='chat-box'>
          {chatMessage}
        </div>
        <div>
          <form onSubmit={this.onChatSubmit}>
            <ChatField
              name='Wow'
              placeholder='Preach To Me Brotha'
              value={this.state.message}
              messageChange={this.messageChange}
            />
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
export default ChatContainer;
