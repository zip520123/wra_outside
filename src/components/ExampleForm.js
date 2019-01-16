import React, { Component } from 'react';
import { RWDBannerView } from './HomePage.js'
import { RWDGoBackView } from './GoBackView'
import { Row , Col } from 'react-bootstrap'
var style = {width : '100%' ,
        height : '99%' ,
        float: 'left',
        backgroundColor:'#2c4e4c' , 
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        padding : '20px',
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '0px',
        marginBottom: '20px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
        }
class ExampleForm extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    centerTextStyle = {
        transform: 'translateY(1000%)'
    }
    render() {
        return (<>
        <Row style={{height:'100%'}}>
            <Col xs={12} md={4} style={{height : '100%'}}>
                <div style={style}>
                    <a style={{color: 'white'}} href={`https://www.wratb.gov.tw/13805/13832/意見信箱/`} target="_blank" rel="noopener noreferrer"><h1 style={this.centerTextStyle}>意見信箱</h1></a>
                </div>
            </Col>
            <RWDBannerView />
            <RWDGoBackView clickHandler={this.clickHandler}/>
        </Row>
        </>)
    }
}
export default ExampleForm