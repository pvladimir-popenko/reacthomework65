import React from 'react';
import './SideBar.css'


class Sidebar extends React.Component {

    render() {
        return (
            <a className="sidebar" href="">{this.props.menuitem}</a>
        )
    }
}


export default Sidebar;