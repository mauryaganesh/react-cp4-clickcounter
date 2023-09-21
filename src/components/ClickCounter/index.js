// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClick = () => {
    // console.log('Button Clicked')
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <button className="button" type="submit" onClick={this.onClick}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
