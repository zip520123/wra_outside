import React, { Component } from 'react';
import { RWDBannerView } from './HomePage.js'
import { Row , Col } from 'react-bootstrap'
import { RWDGoBackView } from './GoBackView'
var style = {width : '100%' ,
        height : '99%' ,
        
        backgroundColor:'#2c4e4c' , 
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        padding : '20px',
        marginTop: '10px',
        marginLeft: '10px',
        marginRight: '0px',
        marginBottom: '20px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
        }
class WaterKeepBackView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    render() {
        var centerTextStyle = {
            transform: 'translateY(1000%)'
        }
        return (<>
            <Row style={{height:'100%'}}>
                <Col xs={12} md={4} style={{height : '100%'}}>
                    <div style={style}>
                        <h1 style={centerTextStyle}><a style={{color: 'white'}} href="http://child.wratb.gov.tw/ct_welfare/WRAllowance" target="_blank" rel="noopener noreferrer">水源保育與回饋</a></h1>
                    </div>
                </Col>
                <RWDBannerView />
                <RWDGoBackView clickHandler={this.clickHandler} />
            </Row>
        </>)
    }
}
export default WaterKeepBackView