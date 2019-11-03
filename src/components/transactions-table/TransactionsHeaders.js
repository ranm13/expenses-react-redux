import React, {Component} from 'react'

class TransactionsHeaders extends Component {
    render() {
        return (
        <div className="transactions-headers">
            <div className="headers-item">Amount</div>
            <div className="headers-item">Vendor</div>
            <div className="headers-item">Date</div>
        </div>)
    }
}
export default TransactionsHeaders