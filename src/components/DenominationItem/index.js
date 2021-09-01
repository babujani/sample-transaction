import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  amountDeducted = () => {
    const {item, updateAmount} = this.props
    updateAmount(item)
  }

  render() {
    const {item, updateAmount} = this.props

    return (
      <li>
        <button onClick={this.amountDeducted} type="button">
          {item}
        </button>
      </li>
    )
  }
}
export default DenominationItem
