import React, {Component} from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

class Transaction extends Component {
    getIconByTransactionType = () =>{
        switch(this.props.transaction.type){
            case("withdraw"):
                return  <FaArrowDown style={{color: "red"}}/>
            case("deposit"):
                return  <FaArrowUp style={{color: "green"}}/>
        }
    }

    render() {
        let transaction = this.props.transaction
        return (
        <div className="transaction">
            <div className="transaction-item">{this.getIconByTransactionType()}{transaction.amount}</div>
            <div className="transaction-item">{transaction.vendor}</div>
            <div className="transaction-item">{transaction.date}</div>
        </div>)
    }
}
export default Transaction