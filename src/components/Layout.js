import React from 'react'
import Logo from './main/Logo';
import ActionBar from './main/ActionBar';
import Transactions from './transactions-table/Transactions';

function Layout(){
    return (
        <div>
            <Logo />
            <ActionBar />
            <Transactions />
        </div>)
}
export default Layout