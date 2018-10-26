import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { Nav , NavItem } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
const BigNavItem = ({url , key , name}) => (
    <NavItem componentClass={Link} href={url} to={url} eventKey={key}>
        <h4>{name}</h4>
    </NavItem>
)
class TopNav extends Component {

    handleSelect = (selectedKey) => {
        this.props.tabChangeHandler(selectedKey)
        // alert(`selected ${selectedKey}`);
    }

    render(){
        return (<Nav bsStyle="pills" activeKey={this.props.activeTab} onSelect={this.handleSelect}>
        {/* <BigNavItem url="/form" key={0} name="一般表單"></BigNavItem>
        <BigNavItem url="/reservation" key={1} name="線上預約"></BigNavItem>
        <BigNavItem url="/retrieve" key={2} name="申辦進度查詢"></BigNavItem> */}
        <NavItem componentClass={Link} href="/form" to="/form" eventKey={0} >
            <h4>一般表單</h4>
        </NavItem>
        {/* <NavItem componentClass={Link} href="/reservation" to="/reservation" eventKey={1} >
            <h4>線上預約</h4>
        </NavItem> */}
        <NavItem componentClass={Link} href="/retrieve" to="/retrieve" eventKey={2} >
            <h4>申辦進度查詢</h4>
        </NavItem>
        </Nav>)
    }  
}
export default TopNav;
 