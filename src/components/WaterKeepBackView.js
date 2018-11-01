import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
var style = {width : '30%' ,
        height : '100%' ,
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
class WaterKeepBackView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    render() {
        var centerTextStyle = {
            transform: 'translateY(1000%)'
        }
        return (<>
            <div style={style}>
                <h1 style={centerTextStyle}><a style={{color: 'white'}} href="http://child.wratb.gov.tw/ct_welfare/WRAllowance" target="_blank" rel="noopener noreferrer">水源保育與回饋</a></h1>
            </div>
            <BannerView style={{...style}} />
            <GoBackView clickHandler={this.clickHandler}></GoBackView>
        </>)
    }
}
export default WaterKeepBackView