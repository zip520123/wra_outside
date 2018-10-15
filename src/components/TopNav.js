import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { Nav , NavItem } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
class TopNav extends Component {

    handleSelect = (selectedKey) => {
        this.props.tabChangeHandler(selectedKey)
        // alert(`selected ${selectedKey}`);
    }

    render(){
        return (<Nav bsStyle="pills" activeKey={this.props.activeTab} onSelect={this.handleSelect}>
        
        <NavItem componentClass={Link} href="/form" to="/form" eventKey={0} >
            一般表單
        </NavItem>
        <NavItem componentClass={Link} href="/reservation" to="/reservation" eventKey={1} >
            線上預約
        </NavItem>
        <NavItem componentClass={Link} href="/retrieve" to="/retrieve" eventKey={2} >
            申辦進度查詢
        </NavItem>
         {/* <LinkContainer to="/form">
            <NavItem eventKey={4} >
            一般表單
            </NavItem>
        </LinkContainer> */}
        {/*
        <LinkContainer to="/reservation">
            <NavItem eventKey={1} >
            線上預約
            </NavItem>
        </LinkContainer>
        
        <LinkContainer to="/retrieve">
            <NavItem eventKey={2} >
            申辦進度查詢
            </NavItem>
        </LinkContainer> */}
        </Nav>)
    }  
}
export default TopNav;
 