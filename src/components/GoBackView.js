import React, { Component } from 'react';
import {Col } from 'react-bootstrap'
var goBackImage = '/images/goBack.png'
var style = {width : '100%' ,
        height : '99%' ,
        backgroundColor:'#2c4e4c' , 
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        padding : '0px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
        }
        var centerTextStyle = {
            transform: 'translateY(1000%)'
        }
export class RWDGoBackView extends Component {
    clickHandler = (e) => {
        this.props.clickHandler()
    }
    render(){
        return <Col xs={12} md={4} style={{height : '100%'}}>
        <div onClick={this.clickHandler} style={{...style , content:`url(${goBackImage})`}} >
            <h1 style={centerTextStyle}>返回至上一頁</h1>
        </div>
    </Col>
    }
}
class GoBackView extends Component {
    clickHandler = (e) => {
        this.props.clickHandler()
    }
    render(){
        var style = {width : '32%' ,
        height : '99%' ,
        float: 'left',
        backgroundColor:'#2c4e4c' , 
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        padding : '0px',
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '0px',
        marginBottom: '20px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
        }
        var centerTextStyle = {
            transform: 'translateY(1000%)'
        }
        return (
            <div onClick={this.clickHandler} style={{...style , content:`url(${goBackImage})`}} onClick={this.clickHandler}>
                <h1 style={centerTextStyle}>返回至上一頁</h1>
            </div>
        )
    }
}
export default GoBackView