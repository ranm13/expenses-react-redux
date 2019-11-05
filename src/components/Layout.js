import React from 'react'
import Logo from './main/Logo';
import { useSelector } from 'react-redux'
import ActionBar from './main/ActionBar';
import Transactions from './transactions-table/Transactions';

const Layout = function(){
    const userData = useSelector(state => state.userData)
    return (
        <div>
            <Logo />
            <h1>{userData.balance}</h1>
            <ActionBar />
            {userData._id? <Transactions /> : null}
        </div>)
}
export default Layout