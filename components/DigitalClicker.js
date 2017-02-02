const React = require('react')

class DigitalClicker extends React.Component {
  constructor () {
    super()
    this.number = 0
    this.state = {timesClicked: this.number}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({timesClicked: this.number+=1})
  }


  render(){
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      )
  }
}

module.exports = DigitalClicker
