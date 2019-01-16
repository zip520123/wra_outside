import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { RWDBannerView } from './HomePage.js'
import { RWDGoBackView } from './GoBackView'
import { Row , Col } from 'react-bootstrap'
class FormSearchView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    cellStyle = {width : '100%' ,
        height : '99%' ,
        float: 'left',
        backgroundColor:'#2c4e4c' , 
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        padding : '20px',
        
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
        }
    centerTextStyle = {
        transform: 'translateY(1000%)'
    }
    render() {
        return (<>
            <Route
                exact
                path={this.props.match.path}
                render={this.defaultLayer}
            />
        </>)
    }
    defaultLayer = () => {
        return <>

        <Row style={{height:'100%'}}>
            <Col xs={12} md={4} style={{height : '100%'}}>
                <div style={this.cellStyle}>
                <a style={{color: 'white'}} href={`${process.env.REACT_APP_DEVELOPMENT_JASON_IP}/search`} target="_blank" rel="noopener noreferrer"><h1 style={this.centerTextStyle}>申辦進度查詢</h1></a>
                </div>
            </Col>
            <RWDBannerView />
            <RWDGoBackView clickHandler={this.clickHandler}/>
        </Row> 
        
        </>
    }
 
}
export default FormSearchView