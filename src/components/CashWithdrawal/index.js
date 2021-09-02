import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  amountDeducted = item => {
    this.setState(prevState => ({amount: prevState.amount - item}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="pg-bg">
        <div className="amount-details-card">
          <div className="name-container">
            <p className="initial-letter">s</p>
            <p className="Name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="draw">Withdraw</p>
          <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>
          <div>
            <ul className="denomination-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  item={eachItem.value}
                  key={eachItem.id}
                  updateAmount={this.amountDeducted}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
