import React, {Component} from 'react'
import Logo from './main/Logo';
import ActionBar from './main/ActionBar';

class Layout extends Component {
    render() {
        return (
        <div>
            <Logo />
            <ActionBar />
        </div>)
    }
}
export default Layout