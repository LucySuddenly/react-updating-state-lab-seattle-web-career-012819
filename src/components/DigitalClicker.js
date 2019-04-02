import React, {Component} from 'react'

export default class DigitalClicker extends Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementTimesClicked = () => {
    let counter = this.state.timesClicked + 1
    this.setState({
      timesClicked: counter
    })
  }

  render(){
    return <button onClick={this.incrementTimesClicked}>{this.state.timesClicked}</button>
  }
}
