import React, { Component } from 'react';
import { RWDBannerView } from './HomePage.js'
import { RWDGoBackView } from './GoBackView'
import { Row , Col } from 'react-bootstrap'
var style = {width: '100%',
            height : '100%',
            backgroundColor:'#2c4e4c',
            color:'white',
            borderStyle: 'solid',
            borderWidth: '5px',
            borderColor: '#d1c0a6',
            padding : '20px',
        }
class ExampleForm extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    centerTextStyle = { 
        position: 'relative',
        transform: 'translateY(-50%)',
        top: '50%',
        margin: '0px',
        textAlign: 'center'
    }
    render() {
        return (<>
        <Row style={{height:'100%'}}>
            <Col xs={12} md={4} style={{height : '100%'}}>
            <div style={style}>
                <a style={{display:'block',color: 'white', height: '100%' ,width:'100%'}} href={`https://www.wratb.gov.tw/13805/13832/意見信箱/`} target="_blank" rel="noopener noreferrer"><h1 style={this.centerTextStyle}>意見信箱</h1></a>
            </div>
            </Col>
            <RWDBannerView />
            <RWDGoBackView clickHandler={this.clickHandler}/>
        </Row>
        </>)
    }
}
export default ExampleForm